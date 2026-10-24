# 💬 Build an omnichannel OTP verification flow

> ⚡ **181 views** · 💬 [Support Chatbots](../)

## Description

**How it works**


• Receives user identity data from multiple channels (WhatsApp, Telegram, email).
• Generates and stores secure one-time passwords (OTP).
• Validates OTP codes against Postgres records.
• Centralizes user identity across channels.
• Maintains session continuity for onboarding and verification.

**Set up steps**

• Import the workflow into n8n.
• Configure Postgres or Supabase credentials.
• Download and create the required database tables in Supabase.
• Connect messaging channel credentials.
• Define OTP expiration and validation rules.
• Test using sample user verification scenarios.

## 🔗 Nodes Used

Send Email, Postgres, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
