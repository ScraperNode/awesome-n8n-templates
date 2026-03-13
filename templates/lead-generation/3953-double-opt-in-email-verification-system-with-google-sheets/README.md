# 🎣 🔐 Double opt-in email verification system with Google Sheets

> ⚡ **334 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

This template implements a professional Double Opt-In email verification system using Google Sheets as a database. The workflow collects user emails, generates unique verification codes, stores them securely, and validates user access before proceeding with your main form.

### How it Works

1. User submits their email through an initial form
2. System generates a unique 6-digit verification code
3. Code is stored in Google Sheets along with user data
4. Verification email is sent to the user
5. User enters the code to verify their email
6. Upon successful verification, user accesses the main form

### Setup

Follow these steps to configure the workflow:

#### 1. Google Sheets Configuration

Create a Google Sheets spreadsheet with the following columns:

| Column Name    | Data Type | Description                          |
|----------------|-----------|--------------------------------------|
| Start Date     | String    | Timestamp of form submission         |
| ID             | String    | Workflow execution ID                |
| Accepts Terms  | String    | Terms acceptance flag                |
| Email          | String    | User's email address                 |
| Code           | String    | 6-digit verification code            |

#### 2. Google Sheets Connection

1. In n8n, go to Credentials
2. Add new credential for Google Sheets OAuth2
3. Follow the OAuth2 authorization flow
4. In the workflow, update the "Store Data" node:
   - Replace `YOUR_GOOGLE_SHEET_ID` with your spreadsheet ID
   - Select the correct sheet tab

#### 3. SMTP Configuration

1. Add SMTP credentials in n8n:
   - Go to Credentials &gt; Add new &gt; SMTP
   - Enter your SMTP server details
   - Configure port, username, and password
2. Update the "Send Email" node:
   - Change sender email to your domain
   - Customize subject line and message body
   - Set reply-to address

#### 4. Form Customization

1. **Entry Form**: Customize the title and privacy policy text
2. **Email Form**: Update the description for your use case
3. **Verification Form**: Modify instructions as needed
4. **Main Form**: Add or modify fields for your requirements

### Configuration

#### Email Settings

- **From Email**: Replace `no-reply@yourdomain.com` with your sender address
- **Subject**: Customize the verification email subject
- **Message**: Personalize the email template with your branding
- **Reply-To**: Set your support email address

#### Form Messages

- Update all form descriptions to match your brand voice
- Customize button labels
- Modify error messages for better user experience

### Benefits

- **GDPR Compliance**: Ensures legitimate user consent
- **Spam Reduction**: Validates email ownership
- **Data Quality**: Maintains clean contact lists
- **User Trust**: Professional verification process

### Use Cases

- Newsletter subscriptions
- User registration flows
- Marketing campaign sign-ups
- Lead generation forms
- Event registrations

### Error Handling

The workflow includes:
- Invalid code detection
- Second attempt opportunity
- Process restart option after multiple failures
- Clear error messaging

### Security Features

- Unique 6-digit codes for each session
- Temporary code storage
- Validation against stored data
- Multiple attempt limits

### Tags
Double Opt-In, Email Verification, Forms, Google Sheets, GDPR, Data Protection, Email Marketing, Lead Generation

### Requirements

- n8n v1.0+
- Google Sheets account
- SMTP server access
- Basic understanding of n8n workflows

### Support

For questions or issues with this template:
1. Check the sticky notes in the workflow for detailed explanations
2. Review the setup instructions above
3. Ensure all credentials are properly configured
4. Test with a personal email address first

### Best Practices

- Test the complete flow before going live
- Monitor Google Sheets for verification attempts
- Set up email delivery monitoring
- Consider implementing code expiration (advanced feature)
- Keep form messages clear and concise

## 🔗 Nodes Used

Send Email, Google Sheets, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
