# 💬 Generate personalized sales outreach with GPT across LinkedIn, Email & WhatsApp

> ⚡ **629 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

## Overview

This workflow automates your entire sales outreach process across LinkedIn, Email, and WhatsApp using AI to create hyper-personalized messages for each prospect. Instead of spending hours crafting individual messages, the workflow analyzes your lead data and generates customized connection requests, emails, and WhatsApp messages that feel genuinely personal and researched.

The workflow includes a built-in approval mechanism, so you can review all AI-generated messages before they're sent, ensuring quality control while still saving massive amounts of time.

## How It Works

The workflow follows a seven-step process:

**Step 1: Data Collection**
The workflow starts by reading your lead data from a Google Sheet. Your sheet should contain information about each prospect including their name, title, company, industry, technologies they use, and any other relevant details that can be used for personalization.

**Step 2: Batch Processing**
To prevent overwhelming APIs and ensure smooth operation, the workflow processes leads in batches. Each lead's complete data is prepared and formatted for the AI agent to analyze.

**Step 3: AI Personalization**
This is where the magic happens. The AI agent receives all the prospect data and generates three distinct messages:
- A LinkedIn connection request (under 300 characters) that references their specific role, company, or industry
- A professional HTML email that demonstrates you've researched their business and explains how you can help
- A casual WhatsApp message that's friendly and approachable

The AI is instructed to make these messages sound completely human, never generic or templated.

**Step 4: Data Cleanup and Storage**
The AI's output is parsed and cleaned up, then written back to your Google Sheet in separate columns. This creates a permanent record of all generated messages for your review.

**Step 5: Manual Approval**
Before anything gets sent, you receive an email asking for your approval. You can review all the generated messages in your Google Sheet, make any edits if needed, and then approve or reject the batch. This ensures you maintain full control over what goes out.

**Step 6: LinkedIn Automation**
Once approved, the workflow triggers your Phantombuster agent to send LinkedIn connection requests using the AI-generated messages. Phantombuster handles the actual LinkedIn interaction safely within their platform's limits.

**Step 7: Email and Notification Delivery**
Finally, the workflow sends out the personalized emails via Gmail and optionally notifies you via Telegram for each message sent. This happens sequentially to respect rate limits and maintain deliverability.

## Setup Requirements

Before you can use this workflow, you'll need to set up several accounts and gather credentials:

**Essential Services:**
- An n8n instance (cloud or self-hosted)
- A Google account with Google Sheets access
- A Gmail account for sending emails
- An OpenAI account with API access (for the AI agent)
- Phantombuster account (for LinkedIn automation)

**Optional Services:**
- Telegram account and bot (for notifications)

**Credentials You'll Need:**
- Google Sheets OAuth2 credentials
- Gmail OAuth2 credentials
- OpenAI API key
- Phantombuster API key and agent ID
- Telegram bot token and chat ID (if using notifications)

## How to Use This Workflow

**Initial Setup:**

1. Import this workflow into your n8n instance
2. Add all required credentials in n8n's credential manager
3. Create your Google Sheet with the following columns at minimum: First Name, Last Name, Title, Company Name, Personal Email, Industry, Website. Add three additional columns for output: Connection, AI Email, AI Whatsapp Message
4. Copy your Google Sheet ID from the URL and update it in all Google Sheets nodes
5. Open the AI Agent node and update the prompt with your personal information: your name, title, email, and LinkedIn URL
6. Update the email addresses in the Gmail nodes to your actual email addresses
7. Configure your Phantombuster agent for LinkedIn and add the API key and agent ID

**Running the Workflow:**

1. Add your lead data to the Google Sheet (you can start with just 2-3 leads for testing)
2. Click "Execute Workflow" in n8n to start the process
3. Wait for the AI to generate messages (this takes a few seconds per lead)
4. Check your email for the approval request
5. Review the AI-generated messages in your Google Sheet
6. Reply to the approval email with your decision
7. If approved, the workflow will automatically send LinkedIn requests, emails, and WhatsApp messages

**Best Practices:**

Start small. Process 5-10 leads at a time initially to test the quality of AI-generated messages and ensure everything works correctly. Once you're confident in the output, you can scale up to larger batches.

Monitor your results. Keep track of response rates in your Google Sheet and adjust the AI prompt if certain types of messages aren't performing well.

Respect rate limits. Gmail allows 100-500 emails per day depending on your account type, and LinkedIn has strict limits on connection requests (typically 100 per week through automation tools). Stay well within these limits to avoid account restrictions.

## Customizing This Workflow

The workflow is designed to be highly customizable to fit your specific use case:

**Personalizing the AI Prompt:**

The most important customization is in the AI Agent node's prompt. You can modify it to:
- Emphasize different aspects of your value proposition
- Change the tone from formal to casual or vice versa
- Include specific pain points relevant to your target industry
- Add your company's unique selling points
- Adjust message length and structure

**Modifying the Output:**

You can change what the AI generates by editing the prompt. For example, you might want:
- Different message types (Twitter DMs instead of WhatsApp)
- Multiple email variations for A/B testing
- Follow-up message sequences
- Industry-specific templates

**Adding Features:**

The workflow can be extended with additional nodes:
- Add time delays between sends to appear more natural
- Include condition checks to segment leads by industry or company size
- Connect to your CRM to automatically log activities
- Add sentiment analysis to filter out negative-sounding messages
- Implement response tracking by monitoring your inbox

**Changing Tools:**

If you prefer different services, you can swap out nodes:
- Replace Phantombuster with other LinkedIn automation tools
- Use SendGrid or Mailgun instead of Gmail for higher volume
- Add Slack notifications instead of Telegram
- Connect to WhatsApp Business API for official messaging

**Data Source Alternatives:**

Instead of Google Sheets, you could:
- Connect directly to your CRM (HubSpot, Salesforce, Pipedrive)
- Use Airtable as your database
- Pull data from CSV files uploaded to cloud storage
- Integrate with lead generation tools like Apollo or Hunter

## Tips for Success

The quality of your AI-generated messages depends heavily on the data you provide. The more information you have about each prospect (their role, company size, technologies used, recent news, pain points), the more personalized and effective the messages will be.

Regularly review and refine your AI prompt based on the responses you're getting. If prospects aren't responding, your messages might be too sales-focused or not personal enough. Adjust the prompt to make messages feel more consultative and helpful.

Don't send to your entire list at once. Even with approval gates, it's wise to test with small batches, measure results, iterate on your approach, and then scale up gradually.

Always comply with email and LinkedIn best practices. Never spam, always provide value in your outreach, respect people's time and privacy, and make it easy for them to opt out if they're not interested.

This workflow is a powerful tool that can save you hours of work while actually improving the quality of your outreach through AI-powered personalization. Use it responsibly and watch your response rates improve.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Gmail, WhatsApp Business Cloud, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
