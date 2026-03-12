# 📊 Automate weekly SEO report with GPT-4 insights and Slack delivery

> ⚡ **2,470 views** · 📊 [Market Research & Insights](../)

## Description

## What this workflow does
- Runs automatically every Monday morning at 8 AM
- Collects your Google Search Console from the last month and the month before that for a given url (date range is configurable)
- Formats the data, aggregating it by date, query, page, device and country
- Generates AI-driven analysis and insights on your results, providing actionable recommendations
- Renders the report as a visually appealing PDF with charts and tables
- Sends the report via Slack (you can also add email or WhatsApp)

**A sample for the first page of the report:**
![image.png](fileId:1744)

## Setup Guide
- [Create an account of pdf noodle](https://app.pdfnoodle.com/auth/sign-up) and use the pre-made Meta Ads template.
- Connect Google OAuth2 (guide on the template), OpenAI and Slack to n8n
- Set your site url and date range
- *(opcional)* Customize the scheduling date and time

👉🏻 **You can use our** [**detailed guide on how to setup this workflow**](https://pdfnoodle.com/blog/automate-seo-reports-using-n8n-and-pdforge).



## Requirements
- Google OAuth2 (via Google Search Console): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic)
- pdf noodle access: [Create an account](https://app.pdfnoodle.com/auth/sign-up)
- AI API access (e.g. via OpenAI, Anthropic, Google or Ollama)
- Slack acces (via OAuth2): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/slack)





Feel free to [contact me via Linkedin](https://www.linkedin.com/in/marceloamiranda/), if you have any questions! 👋🏻

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
