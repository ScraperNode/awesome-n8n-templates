# 🔒 Create OPNsense firewall and NAT rules from Telegram with AI

> ⚡ **17 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
Create OPNsense firewall and destination NAT rules directly from Telegram using natural-language requests and AI-assisted rule interpretation.
This workflow adds a controlled approval layer, allowing users to review proposed changes before anything is applied to OPNsense.

## How it works
1. Authorized users send a request to a Telegram bot. The workflow checks the user against an allowlist and uses an LLM to classify the request as a **Firewall Rule** or **Destination NAT** operation.
2. The rule is structured and validated, then checked against existing OPNsense rules. An AI security audit helps identify potential issues before sending the proposed change to Telegram for confirmation.
3. No changes are applied until the user explicitly confirms the request.

## Setup
1. Create a Telegram bot, add Telegram credentials in n8n, and configure the Telegram Trigger to use your bot.
2. Create OPNsense API credentials and configure the HTTP Request nodes to use HTTP Basic Auth, then set your firewall base URL in the OPNsense host value.
3. Connect your preferred **LLM provider** and select a suitable model.
4. Configure **Basic Auth** for the Add/Delete Telegram ID management forms.
5. Add trusted Telegram numeric IDs using the included allowlist form.
6. Keep **SSL verification enabled**, or enable Ignore SSL Issues on the OPNsense HTTP Request nodes if required.
7. Test the workflow with a non-critical rule before production use.

## Requirements
- n8n
- OPNsense with API access
- Telegram bot
- Access to a supported LLM provider

## Customization
- You can change the LLM model, extend supported OPNsense operations, adjust validation and security checks, or customize Telegram messages to match your environment.

## Additional info
## Who’s it for?

Designed for network administrators, homelab users, IT teams, and OPNsense users who want a convenient way to manage OPNsense firewall operations remotely.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
