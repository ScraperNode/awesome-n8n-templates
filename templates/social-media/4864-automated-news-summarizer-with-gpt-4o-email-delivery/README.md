# 📱 Automated news summarizer with GPT-4o + email delivery

> ⚡ **2,252 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it Works ##

This workflow fetches top news headlines every 10 minutes from NewsAPI, summarizes them using OpenAI's GPT-4o model, and sends a concise email digest to a list of recipients defined in a Google Spreadsheet. It's ideal for anyone who wants to stay updated with the latest news in a short, digestible format.

## 🎯 Use Case ##

- Professionals who want summarized daily news
- Newsletters or internal communication updates
- Teams that require contextual summaries of the latest events

## Setup Instructions ##

### 1. Upload the Spreadsheet
- File name: `Emails`
- Column: `Email` with recipient addresses
### 2. Configure Google Sheets Nodes
- Connect your Google account to:
  - `Email List`
  - `Send Email`
### 3. Add API Credentials
- **NewsAPI Key** → for fetching top headlines
- **OpenAI API Key** → for summarizing headlines
- **Gmail Account** → for sending the email digest
### 4. Activate the Workflow
- Once active, the workflow runs every 10 minutes via a cron trigger
- Summarized news is sent to the list of emails in the spreadsheet

## 🔁 Workflow Logic ##

1. **Trigger**: Every 10 minutes via Cron
2. **Fetch News**: HTTP request to NewsAPI for top headlines
3. **Summarize**: Headlines are passed to OpenAI's GPT-4o for 5-bullet summary
4. **Read Recipients**: Google Sheet is used to collect email recipients
5. **Send Email**: Summary is formatted and sent via Gmail

## 🧩 Node Descriptions ##

| Node Name | Description |
|-----------|-------------|
| Cron | Triggers the workflow every 10 minutes. |
| HTTP Request - NewsAPI | Fetches top news headlines using NewsAPI. |
| Set | Formats or structures raw news data before processing. |
| AI Agent | Summarizes the news content using OpenAI into 5 bullet points. |
| Email List | Reads recipient email addresses from the 'Emails' Google Spreadsheet. |
| Send Email | Sends the email digest to all recipients using Gmail. |

## 🛠️ Customization Tips ##

- Modify the AI prompt for tone, length, or content type
- Send summaries to Slack, Telegram, or Notion instead of Gmail
- Adjust cron interval for more/less frequent updates
- Change email formatting (HTML vs plain text)

## 📎 Required Files ##

| File Name | Purpose |
|-----------|---------|
| Emails spreadsheet | Google Sheet containing the list of email recipients |
| daily_news.json | Main n8n workflow file to automate daily news digest |

## 🧪 Testing Tips ##

- Add 1–2 test email addresses in your spreadsheet
- Temporarily change the Cron node to run every minute for testing
- Check email inbox for delivery and formatting
- Inspect the execution logs for API errors or formatting issues

## 🏷 Suggested Tags & Categories ##

#News #OpenAI #Automation #Email #Digest #Marketing

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
