# 🎬 Create Telegram video briefs with OpenRouter GPT-4.1 and Zvid

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Turn a Telegram brief into an editable Zvid video draft and signed credit quote. After approval, render the video, wait for the accepted job, and return its completed MP4 through Telegram and Watch video.

## How it works
1. Start from a Telegram message or a local Test brief. Normalize the input and reject unauthorized or non-text Telegram requests.
2. Keep conversation memory separate for each chat and apply the configured per-render credit ceiling to Zvid MCP tools.
3. Plan the video, select a Zvid library design and adapt a saved draft. A full reusable-template quota can use a validated static editor project instead.
4. Return the actual saved draft link and signed quote. A later approval instructs the agent to submit one render.
5. Wait for that exact accepted job with the native Zvid node. Never replace a status check with another paid render.
6. Allow only completed Zvid MP4 URLs through the media guard. Reply in the allowed Telegram chat and download the file for Watch video.

## Setup
1. Use self-hosted n8n. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before credentials; an owner/admin may need to install it. Connect both Zvid nodes using https://app.zvid.io/api-keys and Base URL https://api.zvid.io.
2. Connect OpenRouter credentials to the chat model. The template uses openai/gpt-4.1. Model calls incur provider charges even when no video is rendered.
3. Configure the built-in MCP Client Tool at https://mcp.zvid.io/mcp using Header Auth named x-api-key and your Zvid key. Preserve the profile=creator and maxRenderCredits expressions in the endpoint URL.
4. For Telegram, connect its credentials, fill allowedChatIds and activate with a reachable webhook. For local testing, use Test manually and edit Test brief for each conversation turn.
5. Keep manualPreviewJobId empty for new videos and allowSameMessageApproval=false. Set preferDirectDraft=true when reusable-template slots are full; editor-project limits still apply. Rendering spends credits after approval.

## Requirements
- A Zvid account with render credits, OpenRouter access, and self-hosted n8n with community nodes enabled. Telegram credentials and a public webhook are only required for Telegram delivery.

## Customization
- Adjust the model, creative brief, chat allow-list and maxRenderCredits (default 25). Preserve videoUrlPrefixes so example previews and unrelated URLs cannot become completed-video outputs.

## Additional info
Approval is an agent instruction, not a hard authorization lock; the server enforces the per-render credit ceiling. Draft/quote turns correctly skip Watch. After an approved render completes, open Watch video → Binary → data → View. Conversational authoring uses MCP; render waiting uses the native Zvid node. Support: https://zvid.io/contact

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Simple Memory, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
