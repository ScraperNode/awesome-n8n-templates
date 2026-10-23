# 📊 Audit landing page SEO with GPT-5 and send Gmail reports to Google Sheets

> ⚡ **72 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow collects a landing page URL via an n8n form, fetches the page HTML, runs two OpenAI-powered SEO audits (technical and content/keyword), generates an overall score with a QuickChart gauge, emails a formatted report via Gmail, and logs results to Google Sheets.

## How it works
1. Receives an audit request through an n8n Form Trigger with the landing page URL, optional target keyword, and notification email.
2. Fetches the landing page HTML via HTTP and checks the HTTP status code to confirm the page is accessible.
3. If the page cannot be fetched, sends a failure notification to the requester via Gmail with the status code and URL.
4. If the page is fetched successfully, uses OpenAI to generate a structured Technical SEO audit (score, critical issues, quick wins, opportunities) based on the raw HTML.
5. In parallel, uses OpenAI to generate a structured Content & Keyword SEO audit (score, keyword usage, readability, recommendations) based on the same HTML and the provided keyword.
6. Combines both audits, averages the scores into an overall score, and creates a QuickChart gauge image URL for the report.
7. Uses OpenAI to compose a scannable HTML email containing the scores and recommendations, emails it via Gmail, and appends the audit details to Google Sheets.

## Setup
1. Add OpenAI API credentials and confirm the model ID set in the workflow configuration (default: gpt-5-mini) is available to your account.
2. Connect a Gmail OAuth2 credential and set it on both email steps (failure notification and final report).
3. Connect a Google Sheets OAuth2 credential, select the target spreadsheet and sheet, and ensure it has columns for audit_date, landing_page_url, target_keyword, technical_score, content_score, overall_score, and recipient_email.
4. Publish the workflow and share the Form Trigger URL so users can submit landing page audits.

## Additional info
# Audit on-page SEO of a landing page and email an AI-scored report
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Audit-on-page-SEO-of-a-landing-page-and-email-an-AI-scored-report-3a03d6550fd981559dfedd48cae61056)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, AI Agent, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
