# ✨ Automate sleep meditation content creation with ElevenLabs V3 & DeepSeek AI

> ⚡ **398 views** · ✨ [AI & LLMs](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Automate the production of ad-friendly meditation content—from trend research to AI voiceover generation.
🌟 Key Features

    Style-Specific Content Generation

        Input a meditation style (e.g., "calming," "motivational") and generate tailored scripts.

        Customize voice profiles using ElevenLabs.

    Trend-Based Title Research

        Scrape YouTube/Brave Search for popular video titles in your niche.

        Remove duplicates, filter explicit content, and aggregate results.

    AI-Powered Content Creation

        Generate fresh video titles using aggregated trends.

        Create 2500-character voiceover scripts with pacing cues (e.g., [sighs], ... pauses).

    Structured Output Validation

        Auto-fix malformed AI outputs with recursive parsing.

        Enforce script constraints (no line breaks/comments).

    Audio Production & Storage

        Convert scripts to lifelike speech via ElevenLabs.

        Auto-save audio to Google Drive with timestamps.

🛠️ Nodes Used

    Data Prep: Brave Search → SplitOut → Remove Duplicates → Text Classifier (explicit filter)

    AI Models: DeepSeek (title/script generation), Output Parsers (schema validation)

    TTS: ElevenLabs (voice synthesis) → Google Drive (storage)

    Utilities: Webhook trigger, Code node (input validation), Sticky Notes (instructions)

💡 Use Cases

    Create ASMR/sleep meditation content at scale.

    Repurpose trending topics into new videos.

    Generate voiceovers for faceless YouTube channels.

🔗 Setup Notes

    Required APIs:

        ElevenLabs (voice synthesis)

        Brave Search (video trends)

        Google Drive (storage)

    Input: Send style (e.g., "sleep meditation") and voice_id to the webhook.

    Output: MP3 audio + metadata saved to Google Drive.

📌 Pro Tips

    Use output parsers to enforce JSON schemas and avoid malformed AI responses.

    Attach royalty-free visuals using the included background video.

Extend with [video composition](https://n8n.io/creators/cfomodz/) or[thumbnail generation](https://n8n.io/creators/cfomodz/) workflows.

    ✅ Ad-Friendly: Filters explicit titles and enforces YouTube-safe content guidelines.

[![n8n_ Try this workflow.svg](fileId:1452)](https://cfomodz.gumroad.com/l/omgna)

## 🔗 Nodes Used

Webhook, Google Drive, AI Agent, Basic LLM Chain, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
