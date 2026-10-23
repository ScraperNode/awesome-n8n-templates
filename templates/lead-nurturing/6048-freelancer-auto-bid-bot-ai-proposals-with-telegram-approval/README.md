# 💬 Auto-bid on Freelancer.com with OpenAI proposals and Telegram approval

> ⚡ **495 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Four ready-to-import n8n workflows that auto-bid on Freelancer.com: they search keywords, filter junk listings score every project with AI, send a one-tap Telegram approval card, write tailored proposal, place the bid, and track the award until you win — no more refreshing the feed all day.

## How it works
1. You message the bot on Telegram with a search keyword, or let the 6-hour schedule run your default keyword automatically.
2. It searches Freelancer.com and drops projects that are no longer active or already have more bids than your threshold.
3. The remaining projects are checked against your real Freelancer bid history through the API, so nothing already bid on is shown twice.
4. Every project left is scored 0-10 for relevance in a single batched AI call, along with a one-line reason for the score.
5. You get one Telegram card per project — budget, average bid, bid count, skills, AI score and reason, and the bot's proposed bid amount — with a single approve or decline button.
6. Approve it and an AI agent writes a tailored proposal, places the bid through the Freelancer API, and sends you a confirmation with the exact text that was submitted.
7. Decline it and that project is marked as skipped for good; ignore the card instead and it simply reappears in your next search.
8. A separate tracker workflow checks your pending bids every 30 minutes and prompts you in Telegram to accept any awards with one tap.

## Setup
1. Get three free API credentials: a Freelancer.com OAuth token (freelancer.com, Developers, My Apps), a Telegram bot token from @BotFather, and an OpenAI API key.
2. Add them as credentials inside n8n: one Header Auth credential for Freelancer, one Telegram API credential, and one OpenAI credential.
3. Create two Data Tables, "seen projects" and "bids", by importing the included CSV files so the columns and types are already correct.
4. Import the four workflow JSON files in this exact order: SendError, freelancer bot, bidTracker, then freelancerMain, since later ones reference earlier ones.
5. Re-link each workflow's credential, Data Table, and sub-workflow fields, which ship blank because they are specific to your own n8n instance.
6. Open the single Setup node inside freelancerMain, enter your Telegram chat ID and default search filters, then repeat the chat ID in bidTracker's Setup node.
7. Activate and publish all four workflows, then message the bot /help in Telegram to confirm it replies within a couple of seconds.

## Requirements
- n8n 1.90+ (Cloud or self-hosted) with Data Tables enabled
- A Freelancer.com account with an API OAuth token
- A Telegram bot token from @BotFather
- An OpenAI API key with billing enabled (a few cents per run)

## Customization
- Edit the AI Agent node's system prompt to change the proposal's tone, length, and specialty focus
- Change the `0.9` multiplier in the ComputeBid node to bid more or less aggressively against the average
- Tune `max_bid_count`, `min_budget`/`max_budget`, and `default_query` in the Setup node to match your niche
- Turn on `auto_bid` to skip the approval step entirely — set your filters carefully first

## Additional info
- No client/employer filtering: Freelancer's project search API doesn't return reviewer rating, review count, or payment-verified status, so any tool claiming that filter on search results is guessing
- Built and tested on n8n Cloud; self-hosted works too as long as Data Tables are available and a public HTTPS webhook URL is set for Telegram callbacks
- Includes free updates to the workflow files; support via Gumroad
- Not affiliated with or endorsed by Freelancer.com, Telegram, OpenAI, or n8n — use in accordance with Freelancer.com's API terms

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
