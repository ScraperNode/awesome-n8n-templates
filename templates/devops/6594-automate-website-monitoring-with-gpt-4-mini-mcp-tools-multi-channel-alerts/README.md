# ⚙️ Automate website monitoring with GPT-4 Mini, MCP tools & multi-channel alerts

> ⚡ **1,347 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## How it works
This workflow automatically monitors multiple websites using AI-powered analysis and MCP (Model Context Protocol) tools. The system runs scheduled checks, analyzes website performance and security using browser-tools-mcp and mcp-recon servers, categorizes issues by severity (critical, warning, info), sends appropriate alerts through Slack and email, and logs all findings to Google Sheets for historical tracking and trend analysis.

## Who is this for
DevOps engineers, website administrators, system monitors, digital agencies, and technical teams responsible for maintaining multiple websites. Perfect for organizations that need automated website health monitoring with intelligent analysis, comprehensive security checks, and immediate alerting for critical issues.

## Requirements
- **MCP Servers**: Browser-tools-mcp and mcp-recon servers running locally or remotely
- **OpenAI API**: API key for AI-powered website analysis
- **Google Sheets**: Spreadsheet with "Websites" and "Monitoring Log" sheets
- **Slack Integration**: Slack workspace with webhook or bot token for alerts
- **Email Configuration**: SMTP settings for critical email notifications
- **Environment Variables**: Secure storage for all credentials and endpoints

## How to set up
1. **Install and Configure MCP Servers** - Set up browser-tools-mcp and mcp-recon servers, configure endpoints in environment variables (MCP_BROWSER_TOOLS_URL, MCP_RECON_URL)
2. **Prepare Google Sheets Integration** - Create spreadsheet with "Websites" sheet (URL column) and "Monitoring Log" sheet, set GOOGLE_SHEET_ID environment variable
3. **Configure Notification Systems** - Set up Slack webhook/bot and email SMTP settings, configure SLACK_CHANNEL, ALERT_EMAIL, FROM_EMAIL variables
4. **Customize Monitoring Parameters** - Update Configuration Variables node with your monitoring thresholds, batch sizes, and website lists

## How to customize the workflow
Modify the Configuration Variables node to adjust monitoring thresholds (response times, performance scores), change batch processing sizes, update notification preferences, or add additional websites to monitor. Customize alert severity rules in the Alert Severity Router and modify notification templates in the Slack and Email nodes.

## 🔗 Nodes Used

Send Email, Google Sheets, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
