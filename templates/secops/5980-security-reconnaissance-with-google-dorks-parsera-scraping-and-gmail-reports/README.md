# 🔒 Security reconnaissance with Google Dorks, Parsera scraping, and Gmail reports

> ⚡ **838 views** · 🔒 [SecOps & Security Automation](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## How it Works:
1. - Accepts a domain from a web form
2. - Generates a list of Google dorks targeting that domain
3. - Scrapes Google search results for each dork 
4. - Filters out junk links (Google internal, non-http)
5. - Formats valid results as a markdown report
6. - Emails the report to your inbox

## For this workflow you will need to configure credentials in n8n as well as create a Parsera.io agent:

### 1. AI Scraper Account
- Create an account for: https://app.parsera.io
- Create an agent named "Google" and use the URL https://google.com
- Copy/Paste your Parsera.io API key to the 'Scrape with agent' node in the n8n workflow

### 2. Gmail OAuth2
- Go to Google Cloud Console
- Enable Gmail API
- Create OAuth2 credentials
- Copy/Paste the Gmail API key to the Gmail node in the n8n workflow

## 🔗 Nodes Used

Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
