# 👥 Automated phone interview evaluation with Vapi, GPT-4o & Google Sheets

> ⚡ **1,662 views** · 👥 [HR & Recruitment](../)

## Description

This n8n workflow template automatically processes phone interview transcripts using AI to evaluate candidates against specific criteria and saves the results to Google Sheets. Perfect for HR departments, recruitment agencies, or any business conducting phone screenings.

## What This Workflow Does

This automated workflow:
- Receives phone interview transcripts via webhook
- Uses OpenAI GPT models to analyze candidate responses against predefined qualification criteria
- Extracts key information (name, phone, location, qualification status)
- Automatically saves structured results to a Google Sheet for easy review and follow-up

The workflow is specifically designed for driving job interviews but can be easily adapted for any position with custom evaluation criteria.

## Tools & Services Used

- **N8N** - Workflow automation platform
- **OpenAI API** - AI-powered transcript analysis (GPT-4o-mini)
- **Google Sheets** - Data storage and management
- **Webhook** - Receiving transcript data

## Prerequisites

Before implementing this workflow, you'll need:

1. **N8N Instance** - Self-hosted or cloud version
2. **OpenAI API Account** - For AI transcript processing
3. **Google Account** - For Google Sheets integration
4. **Phone Interview System** - That can send webhooks (like Vapi.ai)

## Step-by-Step Setup Instructions

### Step 1: Set Up OpenAI API Access

1. Visit [OpenAI's API platform](https://platform.openai.com/)
2. Create an account or log in
3. Navigate to API Keys section
4. Generate a new API key
5. Copy and securely store your API key

### Step 2: Create Your Google Sheet

**Option 1: Use Our Pre-Made Template (Recommended)**
1. Copy our template: [Driver Interview Results Template](https://docs.google.com/spreadsheets/d/18W1ZzPM__foVNjeapuxnon0ZtgxaQjncNaamuZOdUSo/edit?usp=sharing)
2. Click "File" → "Make a copy" to create your own version
3. Rename it as desired
4. Copy your new sheet's URL - you'll need this for the workflow

**Option 2: Create From Scratch**
1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "Driver Interview Results" (or your preferred name)
4. Set up the following column headers in row 1:
   - A1: `name`
   - B1: `phone`
   - C1: `cityState`
   - D1: `qualifies`
   - E1: `reasoning`
5. Copy the Google Sheet URL - you'll need this for the workflow

### Step 3: Import and Configure the N8N Workflow

1. **Import the Workflow**
   - Copy the workflow JSON from the template
   - In your N8N instance, go to Workflows → Import from JSON
   - Paste the JSON and import

2. **Configure OpenAI Credentials**
   - Click on either "OpenAI Chat Model" node
   - Set up credentials using your OpenAI API key
   - Test the connection to ensure it works

3. **Configure Google Sheets Integration**
   - Click on the "Save to Google Sheets" node
   - Set up Google Sheets OAuth2 credentials
   - Select your spreadsheet from the dropdown
   - Choose the correct sheet (usually "Sheet1")

4. **Update the Webhook**
   - Click on the "Webhook" node
   - Note the webhook URL that n8n generates
   - This URL will receive your transcript data

### Step 4: Customize Evaluation Criteria

The workflow includes predefined criteria for a Massachusetts driving job. To customize for your needs:

1. Click on the "Evaluate Candidate" node
2. Modify the system message to include your specific requirements
3. Update the evaluation criteria checklist
4. Adjust the JSON output format if needed

**Current Evaluation Criteria:**
- Valid Massachusetts driver's license
- No felony convictions
- Clean driving record (no recent tickets/accidents)
- Willing to complete background check
- Can pass drug test (including marijuana)
- Available full-time Monday-Friday
- Lives in Massachusetts

### Step 5: Connect to Vapi.ai (Phone Interview System)

This workflow is specifically designed to work with Vapi.ai's phone interview system. Here's how to connect it:

#### Setting Up the Vapi Integration

1. **Copy Your N8N Webhook URL**
   - In your n8n workflow, click on the "Webhook" node
   - Copy the webhook URL (it should look like: `https://your-n8n-instance.com/webhook-test/351ffe7c-69f2-4657-b593-c848d59205c0`)

2. **Configure Your Vapi Assistant**
   - Log into your [Vapi.ai dashboard](https://dashboard.vapi.ai/)
   - Create or edit your phone interview assistant
   - In the assistant settings, find the "Server" section
   - Set the Server URL to your n8n webhook URL
   - Set timeout to 20 seconds (as configured in the workflow)

3. **Configure Server Messages**
   - In your Vapi assistant settings, enable these server messages:
     - `end-of-call-report`
     - `transcript[transcriptType="final"]`

4. **Set Up the Interview Script**
   - Use the provided interview script in your Vapi assistant (found in the workflow's system message)
   - This ensures consistent data collection for the AI evaluation

#### Expected Data Format from Vapi

The workflow expects Vapi to send data in this specific format:

```json
{
  "body": {
    "message": {
      "artifact": {
        "transcript": "AI: Hi. Are you interested in driving for Bank of Transport?\nUser: Yes.\nAI: Great. Before we go further..."
      }
    }
  }
}
```

#### Vapi Configuration Checklist

- ✅ Webhook URL set in Vapi assistant server settings
- ✅ Server messages enabled: `end-of-call-report`, `transcript[transcriptType="final"]`
- ✅ Interview script configured in assistant
- ✅ Assistant set to send webhooks on call completion

### Alternative Phone Systems

If you're not using Vapi.ai, you can adapt this workflow for other phone systems by:
- Modifying the "Edit Fields2" node to extract transcripts from your system's data format
- Updating the webhook data structure expectations
- Ensuring your phone system sends the complete interview transcript

### Step 6: Test the Workflow

1. **Test with Sample Data**
   - Use the "Execute Workflow" button with test data
   - Verify that data appears correctly in your Google Sheet
   - Check that the AI evaluation logic works as expected

2. **End-to-End Testing**
   - Send a test webhook with a real transcript
   - Monitor each step of the workflow
   - Confirm the final result is saved to Google Sheets

## Workflow Node Breakdown

1. **Webhook** - Receives transcript data from your phone system
2. **Edit Fields2** - Extracts the transcript from the incoming data
3. **Evaluate Candidate** - AI analysis using GPT-4o-mini to assess qualification
4. **Convert to JSON** - Ensures proper JSON formatting with structured output parser
5. **Save to Google Sheets** - Automatically logs results to your spreadsheet

## Customization Options

### Modify Evaluation Criteria
- Edit the system prompt in the "Evaluate Candidate" node
- Add or remove qualification requirements
- Adjust the scoring logic

### Change Output Format
- Modify the JSON schema in the "Structured Output Parser" node
- Update Google Sheets column mapping accordingly

### Add Additional Processing
- Insert nodes for email notifications
- Add Slack/Discord alerts for qualified candidates
- Integrate with your CRM or ATS system

## Troubleshooting

**Common Issues:**
- **OpenAI API Errors**: Check API key validity and billing status
- **Google Sheets Not Updating**: Verify OAuth permissions and sheet access
- **Webhook Not Receiving Data**: Confirm URL and POST format from your phone system
- **AI Evaluation Inconsistencies**: Refine the system prompt with more specific criteria

## Usage Tips

- **Monitor Token Usage**: OpenAI charges per token, so monitor your usage
- **Regular Review**: Periodically review AI evaluations for accuracy
- **Backup Data**: Export Google Sheets data regularly for backup
- **Privacy Compliance**: Ensure transcript handling complies with local privacy laws

---

## Need Help with Implementation?

For professional setup, customization, or troubleshooting of this workflow, contact:

**Robert - Ynteractive Solutions**
- **Email**: [rbreen@ynteractive.com](mailto:robert@interactive.com)
- **Website**: [www.ynteractive.com](https://www.ynteractive.com)
- **LinkedIn**: [linkedin.com/in/robert-interactive](https://www.linkedin.com/in/robert-breen-29429625/)

*Specializing in AI-powered workflow automation, business process optimization, and custom integration solutions.*

## 🔗 Nodes Used

Google Sheets, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
