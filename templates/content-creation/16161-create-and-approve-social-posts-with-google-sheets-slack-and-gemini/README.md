# 🎬 Create and approve social posts with Google Sheets, Slack and Gemini

> ⚡ **11 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow collects a social content brief, generates three strategy angles with Google Gemini and Serper web research, routes human approvals in Slack, then creates post copy plus an image via fal.ai Recraft, and runs a final Anthropic-based review before logging outcomes to Google Sheets.

## How it works
1. Receives a new brief submission from an n8n Form and normalizes the fields (client, platform, content type, topic hint, tone note).
2. Looks up the client profile in Google Sheets, emails IT via Gmail for approval if the client is missing, and otherwise generates a unique brief_id and logs the brief to a strategy tracking sheet.
3. Uses a Google Gemini-powered agent with the Serper search tool (and Google Sheets retrieval for revisions) to produce three platform-specific post angles in structured JSON.
4. Posts a Slack message with a link to an approval form where a strategist approves an angle, requests revisions (creating an incremented revised brief_id and regenerating angles), or cancels and logs the decision to Google Sheets.
5. When an angle is approved, sends the selected angle and client context to a Marcus webhook, pulls platform specs from Google Sheets, and has a Google Gemini-powered agent draft the final post text and an image prompt (optionally retrieving prior versions for revision runs and using Tavily for visual research).
6. Generates the single-image creative using fal.ai (Recraft text-to-image), logs the draft content to a Google Sheets “Post Content” tab, and requests human approval in Slack with an embedded preview.
7. If approved, forwards the post and image URL to a Taylor webhook where an Anthropic agent reviews copy and image against client guidelines, then a final Slack form records the executive decision and logs approval, revision routing (back to Marcus or Sofia), or cancellation to Google Sheets.

## Setup
1. Connect Google Sheets OAuth2 credentials and update the document IDs/sheet tabs for the client database, social specs, strategy log, post content log, and post approval log.
2. Add Slack API credentials, invite the Slack app to your target channel, and replace the hard-coded channel ID (for example, C0B5JFMJK6E) in all Slack message nodes.
3. Add Gmail OAuth2 credentials and replace the placeholder recipient (YOUR_CUST_SERV_EMAIL) used for the “new client” escalation email.
4. Add API credentials for Google Gemini (Google PaLM), Anthropic, Serper (HTTP Header Auth), Tavily (HTTP Header Auth), and fal.ai/Recraft (HTTP Header Auth) used for image generation.
5. After importing, copy the generated webhook URLs for the Marcus and Taylor webhooks and paste them into the corresponding outbound HTTP request nodes (“To Marcus”, “To Taylor”, and the Marcus revision webhook call).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
