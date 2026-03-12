# 📊 Generate weekly Meta Ads report with GPT-4 insights and Slack delivery

> ⚡ **3,967 views** · 📊 [Market Research & Insights](../)

## Description

## What this workflow does
- Runs automatically every Monday morning at 8 AM
- Collects your Meta Ads data from the last 7 days for a given account (date range is configurable)
- Formats the data, aggregating it at the campaign, ad set, and ad levels
- Generates AI-driven analysis and insights on your results, providing actionable recommendations
- Renders the report as a visually appealing PDF with charts and tables
- Sends the report via Slack (you can also add email or WhatsApp)

**A sample for the first page of the report:**
![image.png](fileId:1590)

## Setup Guide
- [Create an account of pdf noodle](https://app.pdfnoodle.com/auth/sign-up) and use the pre-made Meta Ads template.
- Connect Meta Ads, OpenAI and Slack to n8n
- Set your Ad Account Id and date range (choose from 'last_7d', 'last_14d', 'last30d')
- *(opcional)* Customize the scheduling date and time


## Requirements
- Meta Ads (via Facebook Graph API): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/facebookgraph/)
- pdf noodle access: [Integration guide](https://pdfnoodle.com/blog/how-to-automate-pdf-generation-with-n8n-and-pdforge)
- AI API access (e.g. via OpenAI, Anthropic, Google or Ollama)
- Slack acces (via OAuth2): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/slack)


Feel free to [contact me via Linkedin](https://www.linkedin.com/in/marceloamiranda/), if you have any questions! 👋🏻

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
