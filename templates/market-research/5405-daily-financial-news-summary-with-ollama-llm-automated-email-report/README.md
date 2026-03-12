# 📊 Daily financial news summary with Ollama LLM - automated email report

> ⚡ **11,134 views** · 📊 [Market Research & Insights](../)

## Description

This workflow auto-fetches top financial headlines, cleans the content, and uses AI to summarize it into a short investor-friendly email.

### Good to know

- The workflow runs daily and relies on stable webpage access; check the URL (e.g., https://www.ft.com/) for availability.  
- AI costs may apply depending on the LLM model used (e.g., GPT-4 or Gemini); refer to provider pricing.

### How it works

- Trigger the workflow daily with the `Schedule Daily Trigger` node.  
- Fetch financial news from a webpage using the `Fetch Webpage News` node.  
- Add a `Delay to Ensure Page Load` node to ensure content is fully loaded.  
- Extract and clean headlines with the `Extract News Headlines & Clean Extracted Data` node.  
- Process the data with the `LLM Chat Model` node to generate a summary.  
- Send the summarized report via email using the `Email Daily Financial Summary` node.

### How to use

- Import the workflow into n8n and configure the nodes with your webpage URL and email credentials.  
- Test the workflow to verify content fetching and email delivery.

### Requirements

- Webpage access (e.g., financial news site API or RSS)  
- Email service (e.g., SMTP or API)  
- LLM model credentials (e.g., GPT-4 or Gemini)  

### Customising this workflow

- Adjust the `Fetch Webpage News` node to target different news sources or modify the `LLM Chat Model` prompt for a different summary style.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, AI Agent, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
