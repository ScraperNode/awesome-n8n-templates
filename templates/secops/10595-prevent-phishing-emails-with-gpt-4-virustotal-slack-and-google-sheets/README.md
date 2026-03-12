# 🔒 Prevent phishing emails with GPT-4, VirusTotal, Slack, and Google Sheets

> ⚡ **27 views** · 🔒 [SecOps & Security Automation](../)

## Description

This n8n workflow automates real-time phishing detection by ingesting incoming emails, extracting indicators, analyzing content with AI (GPT-4), calculating risk scores, and taking immediate action—quarantining malicious emails, flagging suspicious ones, alerting users and SOC, and logging everything for compliance and forensics. It prevents phishing attacks at the point of delivery with zero-touch automation.

### How it works
1. Webhook receives email
2. Extract URLs, domains, keywords
3. VirusTotal + GPT-4 analysis
4. Risk score routing
5. Quarantine / Flag / Allow
6. Slack SOC alert + audit log

### Risk Levels
🔴 **HIGH (75–100)** → Quarantine
🟡 **MEDIUM (40–74)** → Flag + warn
🟢 **LOW (0–39)** → Allow + log

### Credentials
- OpenAI API (GPT-4o)
- VirusTotal API
- Slack Webhook
- Google Sheets
- SMTP Email

### Placeholders to Replace
- `YOUR_OPENAI_CREDENTIAL_ID`
- `YOUR_VIRUSTOTAL_API_KEY`
- `YOUR_SLACK_WEBHOOK_PATH`
- `YOUR_GOOGLE_SHEET_ID`
- `YOUR_EMAIL_GATEWAY_TOKEN`

**Explore More AI-Powered Email Security:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to deploy **zero-trust email gateways**, **automated BEC response**, and **insider threat detection** using n8n + LLMs.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
