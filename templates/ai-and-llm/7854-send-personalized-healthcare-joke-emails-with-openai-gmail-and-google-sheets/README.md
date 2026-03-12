# ✨ Send personalized healthcare joke emails with OpenAI, Gmail, and Google Sheets

> ⚡ **248 views** · ✨ [AI & LLMs](../)

## Description

# Healthcare Email Autoresponder - Daily Outreach 📧

**A production-ready n8n workflow for automated healthcare email marketing with AI-powered personalization.**

## 🎯 What This Workflow Does

This automated email system sends daily personalized healthcare-themed emails to your contact list. Perfect for:
- Healthcare professionals building patient relationships
- Medical practices maintaining client engagement  
- Wellness coaches staying connected with clients
- Health educators sharing daily motivation

## ✨ Key Features

- **AI-Powered Personalization**: Uses OpenAI to customize each email with recipient's name
- **Smart Rate Limiting**: Random 2-5 minute delays between emails to avoid spam filters
- **Batch Processing**: Limits to 10 emails per run for better deliverability
- **Email Tracking**: Updates Google Sheets to prevent duplicates and track progress
- **Professional Templates**: Healthcare-themed content with customizable signatures
- **Automated Scheduling**: Runs daily at 1 PM (customizable)

## 🛠️ Setup Instructions

### Prerequisites
- n8n instance (cloud or self-hosted)
- Gmail account for sending emails
- Google Sheets for contact management
- OpenAI API key

### Step 1: Import the Workflow
1. Download the `Healthcare_Email_Autoresponder_Community_Template.json` file
2. In n8n, go to Templates and click "Import from File"
3. Select the downloaded JSON file
4. The workflow will be imported as inactive

### Step 2: Configure Credentials

**Gmail OAuth2 Setup:**
1. Click on the "Send Email" node
2. Create new Gmail OAuth2 credential
3. Follow n8n's Gmail setup guide
4. Test the connection

**Google Sheets Setup:**
1. Click on the "Healthcare_Contact_List" node  
2. Create new Google Sheets OAuth2 credential
3. Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual sheet ID
4. Ensure your sheet has these columns:
   - First Name
   - Email  
   - Emailed (for tracking timestamps)

**OpenAI API Setup:**
1. Click on the "OpenAI Chat Model" node
2. Create new OpenAI credential
3. Add your OpenAI API key
4. Select your preferred model (gpt-4o-mini recommended for cost efficiency)

### Step 3: Customize Your Email Template
1. Click on the "AI Email Generator" node
2. Edit the system message to include your details:
   - Replace `[YOUR NAME HERE]` with your actual name
   - Replace `[YOUR TITLE HERE]` with your professional title
   - Replace `[YOUR COMPANY HERE]` with your company name
   - Replace `[YOUR PHONE NUMBER]` with your phone number
   - Replace `[YOUR EMAIL]` with your email address
   - Replace `[YOUR WEBSITE]` with your website URL

### Step 4: Prepare Your Contact List
Create a Google Sheet with the following structure:
```
| First Name | Email              | Emailed    |
|------------|-------------------|------------|
| John       | john@example.com  |            |
| Jane       | jane@example.com  |            |
```

**Important Notes:**
- Leave the "Emailed" column empty initially
- The workflow will populate timestamps as emails are sent
- Only contacts with empty "Emailed" cells will receive emails

### Step 5: Test and Activate
1. Test the workflow with a few sample contacts
2. Check that emails are being generated and sent correctly
3. Verify that Google Sheets is being updated with timestamps
4. Once satisfied, activate the workflow

## 📊 Google Sheets Structure

Your contact sheet should include these columns:
- **First Name** (required): Used for personalization
- **Email** (required): Recipient email address  
- **Emailed** (required): Timestamp tracking (leave empty initially)

Optional columns you can add:
- Last Name
- Company
- Phone
- Notes

## ⚙️ Customization Options

### Change Email Frequency
- Edit the "Daily Trigger (1 PM)" node
- Modify the schedule (hourly, daily, weekly)
- Set preferred time zones

### Adjust Batch Size  
- Edit the "Limit to 10 Contacts" node
- Change `maxItems` value (recommend staying under 50)

### Modify Wait Times
- Edit the "Random Wait (2-5min)" node
- Adjust the random delay formula
- Current: `{{ Math.floor(Math.random() * 4) + 2 }}` (2-5 minutes)

### Update Email Content
- Edit the system message in "AI Email Generator" node
- Change the joke, signature, or entire email structure
- Add seasonal content or special promotions

## 🔧 Troubleshooting

**Common Issues:**

1. **Emails not sending**
   - Verify Gmail credentials are active
   - Check email quota limits
   - Ensure recipient emails are valid

2. **Google Sheets not updating**
   - Confirm sheet ID is correct
   - Check column names match exactly
   - Verify Google Sheets credentials

3. **AI not generating content**
   - Validate OpenAI API key
   - Check API quota and billing
   - Test with different model if needed

4. **Rate limiting issues**
   - Increase wait times between emails
   - Reduce batch size
   - Check Gmail sending limits

## 📈 Best Practices

1. **Start Small**: Begin with 5-10 contacts to test deliverability
2. **Monitor Metrics**: Track open rates and responses
3. **Respect Privacy**: Include unsubscribe options
4. **Stay Relevant**: Update content regularly
5. **Follow Regulations**: Comply with CAN-SPAM and GDPR

## 🤝 Contributing to the Community

This template is designed to be:
- **Easy to understand**: Clear node names and documentation
- **Production ready**: Includes error handling and rate limiting  
- **Customizable**: Template placeholders for personalization
- **Well documented**: Comprehensive setup instructions

Feel free to adapt this workflow for your specific healthcare niche!

## 📄 License

This workflow template is provided free to the n8n community under MIT License.

## 🆘 Support

For questions or issues:
1. Check the n8n community forum
2. Review n8n's official documentation
3. Test each node individually to isolate problems

---

**Made with ❤️ for the n8n community**

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
