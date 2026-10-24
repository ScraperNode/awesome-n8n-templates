# 🔒 Audit website security and send AI reports via Claude, Gmail, Slack and WhatsApp

> ⚡ **51 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Who it's for
This advanced **n8n workflow** is designed for **web developers**, **system administrators**, **security analysts**, and **agency owners** who need to automate the monitoring of website security posture. It acts as a virtual security auditor, automatically scanning webpages for security misconfigurations, analyzing headers, and identifying potential client-side vulnerabilities using advanced AI.

## Features
* **Multi-Source Triggering**: Supports three different input methods—Manual execution, scheduled scans from Google Sheets, or on-demand checks via a Form Trigger.
* **Deep Security Analysis**: Uses LangChain Agents (powered by Anthropic/Claude) to audit both HTTP headers (Config Audit) and HTML content (Vulnerability Audit) for security flaws.
* **Smart Grading System**: Automatically calculates a security grade (A+ to F) based on the presence and configuration of critical security headers like CSP, HSTS, and X-Frame-Options.
* **AI-Generated Reporting**: Creates a detailed, professional HTML report highlighting critical vulnerabilities, information leakage, and configuration warnings with specific fix recommendations.
* **Automated Notifications**: Sends the final security report via Gmail (as an attached file), Slack, and WhatsApp simultaneously.
* **Sheet Integration**: When triggered by a schedule, it reads URLs from a Google Sheet and updates the sheet with the audit status upon completion.

## Requirements
*   **Anthropic API**: A valid API key (configured in the "Anthropic Chat Model" node) is required for the LangChain Agents to analyze security data and generate insights.
*   **Gmail & Google Sheets**: Google OAuth2 credentials are needed to send the audit report via email and manage the list of websites to be audited.
*   **Slack API**: OAuth2 credentials are required to send security status notifications to a Slack channel.
*   **Rapiwa (WhatsApp)**: API credentials to send the audit summary via WhatsApp messages.

## Important Notes
* **Manual Input**: If using the "Clicking Trigger" or "Form Trigger", ensure the URL is provided in the `Landing Page Url` field.
* **Sheet Setup**: For scheduled scans, ensure your Google Sheet contains columns for `Links`, `Check`, and `SL`.
* **Cost Management**: Using advanced AI models (like Claude) for extensive HTML and Header analysis can consume significant tokens depending on the size of the webpage.
* **Safety First**: This tool performs client-side analysis. For a complete penetration test, always engage a professional security professional.

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801316320957)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spapgreen)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
