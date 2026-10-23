# 📊 Generate on-page SEO audit reports from a web form with GPT-5 mini and Gmail

> ⚡ **145 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow collects a landing page URL and email via an n8n form, fetches and analyzes the page with OpenAI (gpt-5-mini) to generate technical and content SEO audits, emails the combined report through Gmail, and logs each request to Google Sheets.

## How it works
1. Receives a submission from an n8n-hosted form containing a landing page URL and the requester’s email address.
2. Fetches the landing page HTML via an HTTP request and extracts key elements (title, meta description, H1s, and cleaned body text).
3. Sends the raw HTML to OpenAI to generate a structured technical on-page SEO audit in Markdown with prioritized recommendations.
4. Sends the extracted page text and metadata to OpenAI to generate a structured content and keyword SEO audit in Markdown with prioritized recommendations.
5. Combines both audit sections and converts the combined Markdown into an HTML report.
6. Emails the HTML audit report to the requester using Gmail and then appends the lead details to a Google Sheets spreadsheet.

## Setup
1. Add an OpenAI API credential and select it for both OpenAI chat model steps, ensuring the model is set to gpt-5-mini (or update it in the configuration values).
2. Add a Gmail OAuth2 credential and set it on the Gmail step used to send the audit email.
3. Add a Google Sheets OAuth2 credential, then select the target spreadsheet (document ID) and worksheet/tab (sheet name) for lead logging.
4. Review the configuration values (output language, number of recommendations, max HTML characters, and email subject prefix) and adjust them to your needs.
5. Activate the workflow and share the n8n form URL so visitors can submit audit requests.

## Additional info
# Generate SEO audit reports from a web form with GPT-5 mini and Gmail
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Generate-SEO-audit-reports-from-a-web-form-with-GPT-5-mini-and-Gmail-39d3d6550fd9815e99dfc72a5e05e0ea)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Markdown, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
