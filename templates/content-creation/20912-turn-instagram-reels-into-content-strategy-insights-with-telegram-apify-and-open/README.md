# 🎬 Turn Instagram Reels into content strategy insights with Telegram, Apify, and OpenAI

> ⚡ **11 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns an Instagram Reel link sent to a Telegram bot into a transcript-driven content strategy breakdown using Apify for extraction and OpenAI for structured analysis, then replies in Telegram and caches results for 24 hours to avoid repeat processing costs.

## How it works
1. Triggers when your Telegram bot receives a new message and routes `/start` and `/help` to an instant help reply.
2. Extracts and validates the first Instagram URL in the message, rejecting unsupported links (for example profiles or Stories) before any paid calls run.
3. Checks n8n static workflow storage for a recent cached analysis of the same Reel and, if found, formats and returns the cached response.
4. Starts an Apify Actor run (`lance_api/instagram-video-ai-transcript-scraper-api`) to fetch media metadata and transcribe the Reel audio, waiting briefly and re-checking once if the run is still in progress.
5. Validates the Apify result and stops with a clear Telegram error message if the transcript is missing, too short, private, login-blocked, or otherwise not usable.
6. Sends the transcript and metadata to OpenAI (gpt-4o-mini) to generate a structured analysis with hooks, audience, why-it-works, adjacent ideas, and an original script.
7. Formats the output into Telegram-safe message chunks (to stay under the 4096-character limit), replies in Telegram, and saves the formatted analysis to a 24-hour cache on success.

## Setup
1. Create a Telegram bot with @BotFather and add a Telegram credential in n8n using the bot token.
2. Create an Apify API token and add an HTTP Header Auth credential with `Authorization: Bearer <your_token>` for the workflow’s Apify requests.
3. Add an OpenAI credential (API key) and confirm the model selection (default: `gpt-4o-mini`) in the OpenAI Chat Model node.
4. If you self-host n8n, ensure Telegram can reach your instance over public HTTPS (for example via a reverse proxy, Cloudflare Tunnel, or ngrok) so the trigger can receive updates.
5. (Recommended) Restrict the Telegram trigger to your own Telegram user ID to prevent others from using your Apify credits.

## Requirements
- Telegram bot token (free, from @BotFather).
- Apify account - transcription is billed to your own account at about $0.01 per Reel. Failed extractions are not charged.
- OpenAI API key (default model: gpt-4o-mini).
- Self-hosted n8n needs a public HTTPS URL; on n8n Cloud it works as is.

## Customization
- The analysis questions: `14 — Build AI Prompt`.
- Every user-facing message and the reply layout: `17 — Format Creator Insights`.
- The AI model: swap the `OpenAI Chat Model` sub-node for Claude or Gemini.
- Cache lifetime and size: `06 — Check Recent Cache` and `19 — Save To Cache`.
- Whether the raw transcript is appended to the reply: `17 — Format Creator Insights`, constant `SEND_TRANSCRIPT` (default false).

## Additional info
Every path - success, cache hit or failure - ends in a Telegram reply, so the user always gets an answer. The workflow uses the Apify Actor lance_api/instagram-video-ai-transcript-scraper-api through a generic Header Auth credential, so it imports with no community nodes to install.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
