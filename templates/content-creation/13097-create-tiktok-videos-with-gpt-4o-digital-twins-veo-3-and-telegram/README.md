# 🎬 Create TikTok videos with GPT-4o, Digital Twins, Veo 3 and Telegram

> ⚡ **244 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Create TikTok videos grounded in real human insight. One agent researches viral trends, gathers authentic audience feedback on your product to inform script creation, tests script variations with target audiences to identify the most resonant script option, generates the video, and sends it back to you on Telegram.

## Description

Most AI video tools generate content based on assumptions and AI guesswork. That's why content often looks and feels the same. This workflow **grounds every creative decision in an authentic human perspective**.

The process:
1. **Research trends** — Apify scrapes what's actually viral on TikTok
2. **Understand your audience** — Digital Twins provide real feedback on your product/concept to inform creative direction
3. **Generate informed scripts** — The agent writes variations based on actual human insights, not AI assumptions
4. **Test for resonance** — Digital Twins evaluate which script will genuinely connect with your target audience
5. **Produce the winner** — Veo 3 generates video from the most resonant script

By anchoring both the script development and selection in real human perspectives, you can create TikTok videos that actually resonate with your target audience.

## Triggers

- **Telegram message** — send your product/concept to your bot to start the workflow

## Nodes Used

- **Set** (Workflow Configuration) — target audience demographics
- **Telegram Trigger** — starts the workflow with product/concept input
- **AI Agent** — orchestrates the entire research → insight → creation → resonance testing flow
- **OpenAI Chat Model** (GPT-4o) — powers the agent
- **MCP Client Tool** (Apify) — scrapes trending TikTok content
- **MCP Client Tool** (OriginalVoices) — queries Digital Twins for:
  - Initial product/concept feedback to inform scripts
  - Resonance testing to select the most compelling script version
- **Code** (Parse JSON) — extracts structured output from the agent
- **HTTP Request** (Veo 3) — generates 9:16 video via fal.ai
- **Wait** — pauses for video generation
- **HTTP Request** (Poll) — checks video status
- **Telegram** — sends the finished video URL back to you

## Required Credentials

1. **Telegram Bot** — create via @BotFather
2. **OpenAI API** — for GPT-4o
3. **Apify API** — for TikTok trend scraping (apify.com)
4. **OriginalVoices API** — for real-time audience insights and feedback (originalvoices.ai)
5. **FAL.ai API** — for Veo 3 video generation (fal.ai)

## Configuration

1. Import `workflow.json` into n8n
2. Edit the **Workflow Configuration** node:
   - `productName` — your product/brand name
   - `productDescription` — what your product does
   - `targetAudience` — e.g., "US women, 25-40, interested in wellness and productivity" (defines which Digital Twins provide insights and resonance feedback)
   - `tone` — e.g., "casual, energetic, Gen-Z friendly"
3. Connect **Telegram Bot** credentials on both Telegram nodes
4. Connect **OpenAI API** credentials on the Chat Model node
5. Connect **Header Auth** on Apify MCP node:
   - Header: `Authorization`, Value: `Bearer YOUR_APIFY_TOKEN`
6. Connect **Header Auth** on OriginalVoices node:
   - Header: `X-Api-Key`, Value: `YOUR_API_KEY`
7. Connect **Header Auth** on Veo 3 and Poll Video Status nodes:
   - Header: `Authorization`, Value: `Key YOUR_FAL_API_KEY`
8. Activate the workflow

## Usage

1. Send a message to your Telegram bot describing your product/concept (e.g., "meditation app that uses AI-generated soundscapes")
2. The agent:
   - Researches current TikTok trends
   - Gathers authentic audience feedback on your concept from Digital Twins
   - Writes script variations informed by real human perspectives
   - Tests all scripts with Digital Twins of target audience to identify which one resonates most
3. The most resonant script is sent to Veo 3 for video generation
4. You receive the video URL, audience-informed caption, and hashtags back on Telegram

**Why this matters:** Every creative decision — from initial direction to final script selection — is grounded in how real humans in your target demographic actually think, feel, and respond. Not AI assumptions or guesswork. Real human intelligence that ensures your content actually resonates.

**Customize:**
- **Audience targeting** — refine the targetAudience parameter to query specific Digital Twin demographics
- **Trend niche** — modify the agent prompt to focus on specific hashtags or content types
- **Script count** — adjust the prompt to generate more or fewer variations for testing
- **Video style** — update the Veo 3 prompt for different aesthetics (cinematic, UGC, etc.)
- **Resonance criteria** — specify what makes a script "compelling" for your use case

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
