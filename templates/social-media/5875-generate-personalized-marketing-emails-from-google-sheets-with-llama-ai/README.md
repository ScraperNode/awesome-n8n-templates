# 📱 Generate personalized marketing emails from Google Sheets with Llama AI

> ⚡ **1,718 views** · 📱 [Social Media & Email Marketing](../)

## Description

An AI-powered email marketing automation workflow that generates personalized marketing emails using data from Google Sheets and delivers them directly to clients. This workflow combines the power of AI content generation with spreadsheet-based campaign management for seamless email marketing automation.

## What's the Goal?
- Automatically pull marketing offer details from Google Sheets (Sheet 1)
- Fetch client information from Google Sheets (Sheet 2)
- Use AI to generate compelling, personalized marketing content
- Format emails with professional structure and personalization
- Send targeted marketing emails directly to clients
- Enable scalable email marketing campaigns with minimal manual effort

By the end, you'll have a fully automated email marketing system that creates and sends personalized campaigns based on your spreadsheet data.

## Why Does It Matter?
Manual email marketing is labor-intensive and lacks personalization at scale. Here's why this workflow is a game changer:

- **Zero Manual Drafting**: AI generates unique content for each recipient
- **Data-Driven Personalization**: Leverages spreadsheet data for targeted messaging
- **Scalable Campaigns**: Handle hundreds of clients with a single workflow execution
- **Consistent Quality**: AI ensures professional, engaging content every time
- **Time Efficiency**: Transform hours of work into minutes of automation
- **Cost-Effective**: Reduce marketing team workload while increasing output

Think of it as your intelligent marketing assistant that creates personalized campaigns at enterprise scale.

## How It Works

Here's the step-by-step process behind the automation:

### Step 1: Track Offer Updates
- **Node**: Track Offer Sheet Updates (Sheet 1)
- **Function**: Monitor Google Sheets for new marketing offers or updates
- **Trigger**: Automatically activates when new data is added to Sheet 1

### Step 2: Generate Marketing Content
- **Node**: Generate Marketing Content with AI
- **Function**: Process offer details through AI model (Llama 3.2)
- **Process**: Creates compelling marketing copy based on offer parameters

### Step 3: Fetch Client Information
- **Node**: Fetch Client List (Sheet 2)
- **Function**: Retrieve client names and email addresses from Sheet 2
- **Data**: Pulls client_name and client_email for personalization

### Step 4: Content Personalization
- **Node**: Format Personalized Email
- **Function**: Combine AI-generated content with client-specific data
- **Output**: Creates personalized email for each recipient

### Step 5: Email Delivery
- **Node**: Send Marketing Email to Client
- **Function**: Deliver personalized emails directly to client inboxes
- **Method**: Uses Gmail integration for professional delivery

## How to Use the Workflow

### Prerequisites
1. **Google Sheets Setup**: Create two sheets with the required column structure
2. **n8n Account**: Access to n8n workflow platform
3. **Gmail API**: Gmail account with API access configured
4. **AI Model Access**: Llama 3.2 API credentials

### Importing the Workflow in n8n

#### Step 1: Obtain the Workflow JSON
- Download the workflow file or copy the JSON code
- Ensure you have the complete workflow configuration

#### Step 2: Access n8n Workflow Editor
- Log in to your n8n instance (Cloud or self-hosted)
- Navigate to the Workflows section
- Click "Add Workflow" to create a new workflow

#### Step 3: Import the Workflow
**Option A: Import from Clipboard**
1. Click the three dots (⋯) in the top-right corner
2. Select "Import from Clipboard"
3. Paste the JSON code into the text box
4. Click "Import" to load the workflow

**Option B: Import from File**
1. Click the three dots (⋯) in the top-right corner
2. Select "Import from File"
3. Choose the .json file from your computer
4. Click "Open" to import the workflow

### Configuration Setup

#### Google Sheets Integration
1. **Authenticate Google Sheets**: Connect your Google account in n8n
2. **Configure Sheet 1**: Set spreadsheet ID and range for marketing offers
3. **Configure Sheet 2**: Set spreadsheet ID and range for client information

#### AI Model Configuration
1. **Set API Credentials**: Configure Llama 3.2 API key and endpoint
2. **Customize Prompts**: Adjust AI prompts for your brand voice and style
3. **Set Content Parameters**: Define content length, tone, and structure

#### Gmail Integration
1. **Gmail API Setup**: Enable Gmail API in Google Cloud Console
2. **OAuth Configuration**: Set up OAuth credentials for email sending
3. **Sender Configuration**: Configure sender name and email address

#### Content Customization
1. **Email Templates**: Customize email structure and branding
2. **Personalization Fields**: Map spreadsheet columns to email variables
3. **Brand Guidelines**: Set company colors, fonts, and messaging tone

## Workflow Execution

### Manual Execution
1. Click "Execute Workflow" in the n8n interface
2. Monitor execution progress through each node
3. Review generated content and delivery status

### Automated Execution
1. Set up triggers based on sheet updates
2. Configure scheduling for regular campaign runs
3. Enable webhook triggers for real-time processing

## Best Practices

### Data Management
- Keep spreadsheet data clean and formatted consistently
- Regular validation of email addresses in Sheet 2
- Update offer details promptly in Sheet 1

### Content Quality
- Review AI-generated content periodically
- Adjust prompts based on campaign performance
- Maintain consistent brand voice across campaigns

### Deliverability
- Monitor email bounce rates and engagement metrics
- Maintain clean email lists with valid addresses
- Follow email marketing best practices and regulations

### Performance Optimization
- Batch process large client lists for efficiency
- Monitor workflow execution times
- Implement error handling and retry mechanisms

## Troubleshooting

### Common Issues
- **Authentication Errors**: Verify API credentials and permissions
- **Sheet Access**: Ensure proper sharing permissions for Google Sheets
- **Email Delivery**: Check Gmail API quotas and sending limits
- **AI Processing**: Monitor API rate limits and response times

### Error Handling
- Implement retry logic for failed operations
- Set up notification systems for workflow failures
- Maintain backup data sources for critical campaigns

## Security Considerations

- Use environment variables for API keys and credentials
- Implement proper access controls for sensitive data
- Regular security audits of connected services
- Compliance with data protection regulations (GDPR, CAN-SPAM)

## Conclusion

This Smart Email Marketing Generator transforms your marketing campaigns from manual, time-consuming tasks into automated, intelligent processes. By leveraging AI and spreadsheet data, you can create personalized, engaging campaigns that scale with your business needs while maintaining professional quality and consistency.

The workflow represents a significant advancement in marketing automation, combining the accessibility of spreadsheet-based data management with the power of AI-driven content generation and automated delivery systems.

## 🔗 Nodes Used

Google Sheets, Gmail, Google Sheets Trigger, AI Agent, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
