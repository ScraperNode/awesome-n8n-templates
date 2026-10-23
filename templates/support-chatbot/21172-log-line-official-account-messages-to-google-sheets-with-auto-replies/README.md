# 💬 Log LINE Official Account messages to Google Sheets with auto-replies

> ⚡ **0 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Save every text message your LINE Official Account receives to a Google Sheet, and reply with a short automatic message. For small shops and teams that use LINE OA for customer chat and want a simple log of incoming messages without paying for a CRM.

## How it works
1. LINE Webhook receives events from the LINE Messaging API.
2. Verify LINE Signature checks the x-line-signature header (HMAC-SHA256 with your Channel secret). Bad requests get a 401, and the workflow answers LINE with 200 OK right away, as LINE expects.
3. Split Out Events handles each event separately, and Only Text Messages keeps text messages only.
4. Get LINE User Profile looks up the sender's display name.
5. Append Row to Google Sheet adds timestamp, userId, displayName, message and replyToken.
6. Send LINE Auto-Reply sends a reply using the reply token.

## Setup
1. In the LINE Developers console, copy the Channel secret and issue a long-lived Channel access token.
2. In n8n, create a Header Auth credential: Name Authorization, Value Bearer <your token>. Select it in both HTTP Request nodes.
3. Paste the Channel secret into the CHANNEL_SECRET line of the Verify LINE Signature node. If you leave it empty, the check is skipped (only do that for testing).
4. Create a Google Sheet with the header row timestamp, userId, displayName, message, replyToken, connect Google Sheets and select the file.
5. Activate the workflow, copy the Production URL from LINE Webhook into the LINE console as the Webhook URL, turn on Use webhook and press Verify. Then change the reply text in Send LINE Auto-Reply to suit your business.

## Requirements
- n8n (cloud or self-hosted) with a public HTTPS URL; a LINE Official Account with the Messaging API enabled; a Google account with Google Sheets

## Customization
- Add a Switch node after the filter to reply differently based on keywords, log images or stickers by changing the filter, and turn off LINE OA's built-in auto-response so customers don't get two replies.

## Additional info
The Code node uses Node's built-in crypto module. On self-hosted n8n, if require('crypto') is blocked, set NODE_FUNCTION_ALLOW_BUILTIN=crypto. Reply tokens can only be used once and expire quickly. Import-tested on n8n 2.43.7.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
