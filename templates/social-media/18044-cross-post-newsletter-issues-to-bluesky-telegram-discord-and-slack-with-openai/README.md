# 📱 Cross-post newsletter issues to Bluesky, Telegram, Discord and Slack with OpenAI

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
Watches your newsletter's RSS feed; when an issue publishes, AI writes platform-native announcements and posts them to Bluesky, Telegram and Discord automatically — plus copy-paste-ready X and LinkedIn drafts in Slack. ESP-agnostic: works with any feed. Delete the channels you don't use.

## How it works
1. When a New Issue Is Published checks your newsletter's public RSS feed hourly and fires when a new issue appears — Kit (ConvertKit) archives, beehiiv, Substack, Ghost, Buttondown, anything with a feed.
2. Build the AI Prompt assembles one prompt from the issue, Write Announcements With AI writes a platform-native announcement per channel — short and punchy for Bluesky's 300 characters, more context for Telegram and Discord.
3. Parse the AI Copy forces strict JSON (a malformed response fails loudly instead of posting garbage) and enforces per-platform length limits in code, then splits into one item per channel.
4. Announcements post automatically to Bluesky, Telegram and Discord.
5. X/Twitter and LinkedIn arrive as ready-to-paste drafts in Slack instead — their APIs are paid or review-gated, and pasting takes thirty seconds.

## Setup
1. Paste your newsletter archive's RSS URL into When a New Issue Is Published — it ships pointing at a live example feed, so you can test-run it before changing anything.
2. Add your OpenAI-compatible API key as a Header Auth credential (Authorization → Bearer sk-…) on Write Announcements With AI. Any compatible endpoint works, including a self-hosted Ollama.
3. Bluesky: create an app password (Settings → Privacy & Security → App passwords) and put your handle and that app password into Log In to Bluesky — never your real password.
4. Telegram: @BotFather token plus your channel's chat id in Post to Telegram. Discord: channel → Settings → Integrations → Webhooks → paste the URL into Post to Discord. Slack: an incoming webhook URL in Send X and LinkedIn Drafts to Slack.
5. Delete the channels you don't use, then activate. The feed is checked hourly.

## Requirements
- A newsletter with a public RSS feed, an OpenAI-compatible API key (any endpoint, including a self-hosted Ollama), and whichever channels you want: a Bluesky app password, a Telegram bot token + chat id, a Discord channel webhook, a Slack incoming webhook. Nothing here needs a paid social API.

## Customization
- The whole voice of every post lives in one node — Build the AI Prompt. Add a channel by duplicating a posting node and adding its section to the prompt; Parse the AI Copy splits the output per channel. If you do have X or LinkedIn API access, replace the Slack drafts node with real posting calls — the copy is already generated. Add a Wait node after the parser to delay announcements or respect quiet hours.

## Additional info
X and LinkedIn are deliberately drafts, not auto-posts: their APIs are paid or review-gated, and a copy-paste takes thirty seconds. Bluesky posting uses an app password with a per-run session token — no stored credentials — and per-platform length limits are enforced in code, so a 300-character Bluesky post never fails silently.

## 🔗 Nodes Used

HTTP Request, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
