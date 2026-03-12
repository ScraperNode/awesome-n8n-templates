# 📁 Automated Google Drive to FTP transfer with JSON logging & reports

> ⚡ **195 views** · 📁 [File Management](../)

## Description

# Google Drive to FTP Transfer Workflow - Setup Guide

## Overview

This n8n workflow automatically transfers files from Google Drive to an FTP server on a scheduled basis. It includes comprehensive logging, email notifications, and error handling.

## Features

- **Automated Scheduling**: Runs every 6 hours (customizable)
- **Manual Trigger**: Webhook endpoint for on-demand transfers
- **File Filtering**: Supports specific file types and size limits
- **Comprehensive Logging**: Detailed transfer reports saved to Google Drive
- **Email Notifications**: HTML reports sent after each run
- **Error Handling**: Graceful handling of failed transfers
- **Batch Processing**: Files processed individually to prevent rate limits

## Prerequisites

Before setting up this workflow, ensure you have:

1. **n8n instance** running (self-hosted or cloud)
2. **Google Drive account** with files to transfer
3. **FTP server** with upload permissions
4. **Email service** for sending reports (SMTP)

## Step-by-Step Setup Instructions

### 1. Google Drive API Setup

#### 1.1 Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Google Drive API**:
   - Navigate to "APIs & Services" → "Library"
   - Search for "Google Drive API"
   - Click "Enable"

#### 1.2 Create OAuth2 Credentials
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. Configure consent screen if prompted
4. Choose "Web application" as application type
5. Add your n8n instance URL to authorized redirect URIs:
   ```
   https://your-n8n-instance.com/rest/oauth2-credential/callback
   ```
6. Note down the **Client ID** and **Client Secret**

#### 1.3 Configure n8n Credential
1. In n8n, go to "Credentials" → "Add Credential"
2. Select "Google Drive OAuth2 API"
3. Enter your Client ID and Client Secret
4. Complete OAuth flow by clicking "Connect my account"
5. Set credential ID as: `your-google-drive-credentials-id`

### 2. FTP Server Setup

#### 2.1 FTP Server Requirements
- Ensure FTP server is accessible from your n8n instance
- Verify you have upload permissions
- Note the server details:
  - Host/IP address
  - Port (usually 21 for FTP)
  - Username and password
  - Destination directory path

#### 2.2 Configure n8n FTP Credential
1. In n8n, go to "Credentials" → "Add Credential"
2. Select "FTP"
3. Enter your FTP server details:
   - **Host**: your-ftp-server.com
   - **Port**: 21 (or your custom port)
   - **Username**: your-ftp-username
   - **Password**: your-ftp-password
4. Set credential ID as: `your-ftp-credentials-id`

### 3. Email Setup (SMTP)

#### 3.1 Choose Email Provider
Configure SMTP settings for one of these providers:
- **Gmail**: smtp.gmail.com, port 587, use App Password
- **Outlook**: smtp-mail.outlook.com, port 587
- **Custom SMTP**: Your organization's SMTP server

#### 3.2 Configure n8n Email Credential
1. In n8n, go to "Credentials" → "Add Credential"
2. Select "SMTP"
3. Enter your SMTP details:
   - **Host**: smtp.gmail.com (or your provider)
   - **Port**: 587
   - **Security**: STARTTLS
   - **Username**: your-email@example.com
   - **Password**: your-app-password
4. Set credential ID as: `your-email-credentials-id`

### 4. Workflow Configuration

#### 4.1 Import Workflow
1. Copy the workflow JSON from the artifact above
2. In n8n, click "Import from JSON"
3. Paste the workflow JSON and import

#### 4.2 Update Credential References
1. **Google Drive nodes**: Verify credential ID matches `your-google-drive-credentials-id`
2. **FTP node**: Verify credential ID matches `your-ftp-credentials-id`
3. **Email node**: Verify credential ID matches `your-email-credentials-id`

#### 4.3 Customize Parameters

##### FTP Server Settings (Upload to FTP node)
```javascript
{
  "host": "your-ftp-server.com",           // Replace with your FTP host
  "username": "your-ftp-username",         // Replace with your FTP username
  "password": "your-ftp-password",         // Replace with your FTP password
  "path": "/remote/directory/{{ $json.validFiles[$json.batchIndex].name }}", // Update destination path
  "port": 21                               // Change if using different port
}
```

##### Email Settings (Send Report Email node)
```javascript
{
  "sendTo": "admin@yourcompany.com",       // Replace with your email address
  "subject": "Google Drive to FTP File Transfer - Report"
}
```

##### File Filter Settings (Filter & Validate Files node)
In the JavaScript code, update these settings:
```javascript
const transferNotes = {
  settings: {
    maxFileSizeMB: 50,                     // Change maximum file size
    allowedExtensions: [                   // Add/remove allowed file types
      '.pdf', '.doc', '.docx', '.txt', 
      '.jpg', '.png', '.zip', '.xlsx'
    ],
    autoDeleteAfterTransfer: false,        // Set to true to delete from Drive after transfer
    verifyTransfer: true                   // Keep true for verification
  }
};
```

##### Google Drive Notes Storage (Upload Notes to Drive node)
```javascript
{
  "parents": {
    "parentId": "your-notes-folder-id"     // Replace with actual folder ID from Google Drive
  }
}
```

### 5. Schedule Configuration

#### 5.1 Modify Schedule Trigger
In the "Schedule Trigger" node, adjust the interval:
```javascript
{
  "rule": {
    "interval": [
      {
        "field": "hours",
        "hoursInterval": 6               // Change to desired interval (hours)
      }
    ]
  }
}
```

**Alternative schedule options:**
- **Daily**: `"field": "days", "daysInterval": 1`
- **Weekly**: `"field": "weeks", "weeksInterval": 1`
- **Custom cron**: Use cron expression for complex schedules

#### 5.2 Webhook Configuration
The webhook trigger is available at:
```
POST https://your-n8n-instance.com/webhook/webhook-transfer-status
```

Use this for manual triggers or external integrations.

### 6. Testing and Validation

#### 6.1 Test Connections
1. **Test Google Drive**: Run "Get Drive Files" node manually
2. **Test FTP**: Upload a test file using "Upload to FTP" node
3. **Test Email**: Send a test email using "Send Report Email" node

#### 6.2 Run Test Transfer
1. Activate the workflow
2. Click "Execute Workflow" to run manually
3. Monitor execution in the workflow editor
4. Check for any error messages or failed nodes

#### 6.3 Verify Results
- **FTP Server**: Confirm files appear in destination directory
- **Email**: Check you receive the transfer report
- **Google Drive**: Verify transfer notes are saved to specified folder

### 7. Monitoring and Maintenance

#### 7.1 Workflow Monitoring
- **Execution History**: Review past runs in n8n interface
- **Error Logs**: Check failed executions for issues
- **Performance**: Monitor execution times and resource usage

#### 7.2 Regular Maintenance
- **Credential Renewal**: Google OAuth tokens may need periodic renewal
- **Storage Cleanup**: Consider archiving old transfer notes
- **Performance Tuning**: Adjust batch sizes or schedules based on usage

### 8. Troubleshooting

#### 8.1 Common Issues

**Google Drive Authentication Errors:**
- Verify OAuth2 credentials are correctly configured
- Check if Google Drive API is enabled
- Ensure redirect URI matches n8n instance URL

**FTP Connection Failures:**
- Verify FTP server credentials and connectivity
- Check firewall settings allow FTP connections
- Confirm destination directory exists and has write permissions

**Email Delivery Issues:**
- Verify SMTP credentials and server settings
- Check if email provider requires app-specific passwords
- Ensure sender email is authorized

**File Transfer Failures:**
- Check file size limits in filter settings
- Verify allowed file extensions include your file types
- Monitor FTP server disk space

#### 8.2 Debug Mode
Enable debug mode by:
1. Adding console.log statements in code nodes
2. Using "Execute Workflow" with step-by-step execution
3. Checking node outputs for data validation

### 9. Advanced Customizations

#### 9.1 Additional File Filters
Add custom filtering logic in the "Filter & Validate Files" node:
```javascript
// Example: Filter by modification date
const isRecentFile = new Date(file.modifiedTime) &gt; new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // Last 7 days

// Example: Filter by folder location
const isInSpecificFolder = file.parents && file.parents.includes('specific-folder-id');
```

#### 9.2 Enhanced Reporting
Customize the email report template in "Send Report Email" node:
```html
<h2>📊 File Transfer Report</h2>
<div>
  <h3>Summary</h3>
  <ul>
    <li><strong>Date:</strong> {{ new Date().toLocaleString('en-US') }}</li>
    <li><strong>Success Rate:</strong> {{ Math.round((successfulTransfers / totalFiles) * 100) }}%</li>
    
  </ul>
</div>
```

#### 9.3 Integration with Other Services
Add nodes to integrate with:
- **Slack**: Send notifications to team channels
- **Discord**: Post updates to Discord servers
- **Webhook**: Trigger other workflows or systems
- **Database**: Log transfers to MySQL, PostgreSQL, etc.

### 10. Security Considerations

#### 10.1 Credential Security
- Use environment variables for sensitive data
- Regularly rotate FTP and email passwords
- Implement least-privilege access for service accounts

#### 10.2 Network Security
- Use SFTP instead of FTP when possible
- Implement VPN connections for sensitive transfers
- Monitor network traffic for unusual patterns

#### 10.3 Data Privacy
- Ensure compliance with data protection regulations
- Implement data retention policies for transfer logs
- Consider encryption for sensitive file transfers

## Support and Resources

### Documentation Links
- [n8n Documentation](https://docs.n8n.io/)
- [Google Drive API Documentation](https://developers.google.com/drive/api)
- [n8n Community Forum](https://community.n8n.io/)

### Getting Help
If you encounter issues:
1. Check the troubleshooting section above
2. Review n8n execution logs for error details
3. Search the n8n community forum for similar issues
4. Create a support ticket with detailed error information

---

**Note**: Replace all placeholder values (URLs, credentials, IDs) with your actual configuration before running the workflow.

## 🔗 Nodes Used

Send Email, Write Binary File, Webhook, Google Drive, FTP, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
