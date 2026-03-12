# 📁 Transfer files from FTP server to Google Drive

> ⚡ **493 views** · 📁 [File Management](../)

## Description

# FTP to Google Drive Transfer Template

## What This Template Does

This workflow automatically transfers files from an FTP server to Google Drive. It's perfect for:
- Backing up files from remote servers
- Migrating data from FTP to cloud storage
- Automating file synchronization tasks
- Creating scheduled backups of server content

## How It Works

The workflow follows these steps:

1. **Manual Trigger** - You start the process by clicking "Execute"
2. **Lists FTP Directory** - Scans the specified FTP folder for all items
3. **Filters Files Only** - Separates actual files from directories (folders)
4. **Downloads Files** - Retrieves each file as binary data from the FTP server
5. **Uploads to Google Drive** - Stores all downloaded files in your specified Google Drive folder

## Requirements

Before using this template, you'll need:

- **FTP Server Access**: Server address, username, and password
- **Google Drive Account**: With OAuth2 authentication set up in n8n
- **n8n Instance**: Self-hosted or cloud version

## Setup Instructions

### Step 1: Configure FTP Credentials

1. In n8n, go to **Settings** → **Credentials**
2. Create a new **FTP** credential
3. Enter your FTP server details:
   - **Host**: Your FTP server address
   - **Port**: Usually 21 for FTP
   - **Username**: Your FTP username
   - **Password**: Your FTP password
4. Test the connection and save

### Step 2: Set Up Google Drive Authentication

1. Create a new **Google Drive OAuth2** credential
2. Follow n8n's Google Drive setup guide:
   - Create a Google Cloud project
   - Enable Google Drive API
   - Create OAuth2 credentials
   - Add your n8n callback URL
3. Authorize the connection in n8n

### Step 3: Configure the Workflow

1. **Update FTP Path**: 
   - Open the "List FTP Directory" node
   - Change the `path` parameter from `/_instalki` to your desired FTP folder

2. **Set Google Drive Folder**:
   - Open the "Upload to Google Drive" node
   - Replace the `folderId` with your target Google Drive folder ID
   - To find folder ID: Open the folder in Google Drive and copy the ID from the URL

3. **Assign Credentials**:
   - Ensure both FTP nodes use your FTP credential
   - Assign your Google Drive credential to the upload node

## How to Use

1. **Test First**: Run the workflow manually with a few test files
2. **Monitor Execution**: Check the execution log for any errors
3. **Verify Upload**: Confirm files appear in your Google Drive folder
4. **Schedule (Optional)**: Add a schedule trigger if you want automatic runs

## Customization Options

### Filter Specific File Types
Add a condition after "Filter Files Only" to process only certain file extensions:
```
{{ $json.name.endsWith('.pdf') || $json.name.endsWith('.jpg') }}
```

### Add Error Handling
Insert error-handling nodes to manage failed downloads or uploads gracefully.

### Organize by Date
Modify the Google Drive upload to create date-based folders automatically.

### File Size Limits
Add checks for file size before attempting upload (Google Drive has limits).

## Troubleshooting

**Common Issues:**

- **FTP Connection Failed**: Check server address, port, and credentials
- **Google Drive Upload Error**: Verify OAuth2 setup and folder permissions
- **Files Not Found**: Ensure the FTP path exists and contains files
- **Large Files**: Consider Google Drive's file size limitations (15GB for free accounts)

**Tips:**
- Test with small files first
- Check n8n execution logs for detailed error messages
- Ensure your Google Drive has sufficient storage space
- Verify FTP server allows multiple concurrent connections

## Security Notes

- Never hardcode credentials in the workflow
- Use n8n's credential system for all authentication
- Consider using SFTP instead of FTP for better security
- Regularly rotate your FTP passwords
- Review Google Drive sharing permissions

## Next Steps

Once you have this basic transfer working, you might want to:
- Add email notifications for successful/failed transfers
- Implement file deduplication checks
- Create logs of transferred files
- Set up automatic cleanup of old files
- Add file compression before upload

## 🔗 Nodes Used

Google Drive, FTP

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
