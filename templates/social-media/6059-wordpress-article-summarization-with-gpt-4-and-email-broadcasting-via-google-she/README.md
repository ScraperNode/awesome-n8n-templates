# 📱 WordPress article summarization with GPT-4 and email broadcasting via Google Sheets

> ⚡ **349 views** · 📱 [Social Media & Email Marketing](../)

## Description

This automation fetches the latest article from a WordPress blog, summarizes it using OpenAI, and sends the summary to a list of subscribers via email. Ideal for content creators and bloggers who want to distribute digestible content without manual effort.

## Use Case
Perfect for:
•	Newsletter creators
•	Content marketers
•	Bloggers
•	Knowledge managers

 Nodes Used
•	Schedule Trigger
•	HTTP Request
•	Set
•	OpenAI
•	Google Sheets
•	Email (Gmail/SMTP)
•	IF
•	SplitInBatches

## Workflow Steps
1.	Trigger: Starts on a schedule (e.g., daily at 9:00 AM).
2.	Fetch Blog Post: Retrieves the most recent post from a WordPress blog via HTTP Request.
3.	Extract Fields: A Set node extracts the title, link, and content.
4.	Summarize Article: OpenAI processes the article and returns a 3-point summary.
5.	Fetch Subscribers: Google Sheets reads email addresses from a subscriber list.
6.	Loop Emails: SplitInBatches and Send Email nodes loop through subscribers.
7.	Conditional Logic: IF node skips articles shorter than 300 words.

## Credentials Required
•	OpenAI API Key (for content summarization)
•	Google Sheets OAuth2 (to read subscriber emails)
•	Gmail or SMTP (for sending emails)

## Test Instructions
1.	Replace blog URL in HTTP Request node.
2.	Connect OpenAI API key.
3.	Link your Google Sheet with a column named Email.
4.	Set up Gmail or SMTP credentials.
5.	Run manually for testing, then activate schedule.

## 🔗 Nodes Used

Cron, Send Email, Google Sheets, HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
