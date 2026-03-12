# 🎫 Automate Gmail Organization with AI-Powered Email Classification and Smart Labeling

> ⚡ **195 views** · 🎫 [Ticket Management & Triage](../)

## Description

# 📧 AI-Powered Gmail Auto-Labeling with Smart Classification

This n8n workflow automatically organizes your Gmail inbox by intelligently categorizing incoming emails and applying custom labels using AI-powered sentiment analysis. Say goodbye to manual email sorting and hello to an organized inbox!

## Use Cases
- **Business Email Management**: Automatically sort partnership inquiries, meeting requests, and promotional emails
- **Sales Team Automation**: Identify and label cold outreach and high-priority leads
- **Executive Assistants**: Filter important meetings and urgent matters for busy professionals
- **Marketing Teams**: Separate promotional content from genuine business communications

## Good to Know
- The workflow runs every minute to check for new emails
- Each email is processed only once - already labeled emails are automatically skipped
- Uses OpenAI's GPT model for accurate email classification (API costs apply)
- Processes emails in batches to handle multiple incoming messages efficiently

## How It Works
1. **Gmail Trigger** continuously monitors your inbox for new emails every minute
2. **Switch Node** checks if emails already have labels (Other, Promotion, or Meeting) to avoid duplicate processing
3. **Loop Node** processes emails in batches for efficient handling
4. **AI Classification** analyzes the email's sender, subject, and content using OpenAI's GPT model to categorize into:
   - **Partnerships** - Collaboration opportunities and B2B proposals
   - **Promotional** - Marketing emails and newsletters
   - **Cold Outreach** - Unsolicited sales emails and prospecting
   - **Meeting** - Calendar invites and scheduling requests
   - **High Priority** - Urgent matters requiring immediate attention
   - **Other** - Everything else that doesn't fit the above categories
5. **Label Application** automatically applies the appropriate Gmail label based on AI classification
6. **Loop Completion** returns to process the next email in the batch

## How to Use
- Set up your Gmail credentials to connect the workflow to your account
- Create custom labels in Gmail (or use the pre-configured label IDs in the workflow)
- Add your OpenAI API credentials for AI classification
- Activate the workflow and let it run automatically in the background
- Optionally adjust the polling frequency from "every minute" to your preference

## Requirements
- **Gmail OAuth2** credentials for email access and label management
- **OpenAI API** key for GPT-powered email classification
- Pre-created Gmail labels for each category (or modify label IDs in the workflow)

## Customizing This Workflow
- **Add More Categories**: Extend the sentiment analysis node with additional email categories relevant to your business
- **Adjust Classification Logic**: Modify the AI prompt to better match your specific email patterns
- **Change Polling Frequency**: Update the Gmail trigger to check more or less frequently based on your email volume
- **Add Actions**: Extend each label branch to trigger additional actions like Slack notifications, database updates, or auto-replies
- **Filter by Sender**: Add conditions to the Switch node to handle VIP senders differently

## 🔗 Nodes Used

HTTP Request, Wordpress, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
