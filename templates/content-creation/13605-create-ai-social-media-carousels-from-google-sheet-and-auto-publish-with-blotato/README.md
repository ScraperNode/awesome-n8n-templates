# 🎬 Create AI social media carousels from Google Sheet and auto-publish with Blotato

> ⚡ **202 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

🚀 Create Pro-Level Social Media Carousels & Auto-Publish with Blotato
======================================================================

### By @nocodehack

* * *

Who is this for?
----------------

This workflow is built for e-commerce brands, social media managers, marketing agencies, dropshippers, content creators, and automation builders who need to produce professional carousel posts at scale. Perfect for anyone running product marketing, brand campaigns, multi-platform social media, affiliate content, or any business that publishes carousel posts regularly and wants to eliminate design costs entirely.

* * *

What problem is this workflow solving? / Use case
-------------------------------------------------

Creating professional carousel posts is:

*   **Slow** — designing even one carousel takes 30-60 minutes manually
*   **Expensive** — Fiverr/Upwork designers charge $50-100 per carousel
*   **Inconsistent** — AI-generated slides never visually match each other
*   **Unscalable** — managing multiple brands multiplies every problem
*   **Tedious** — exporting, uploading, scheduling, and publishing is repetitive busywork

This workflow solves:

*   ❌ Manual carousel design (Canva, Photoshop, Figma)
*   ❌ Paying designers per post
*   ❌ AI images that look obviously AI-generated
*   ❌ Visually inconsistent slides that don't match
*   ❌ Manual copywriting for captions and hashtags
*   ❌ Manual uploading and publishing to each platform
*   ❌ Managing multiple brands with different visual identities

It turns one Google Sheet row into a fully designed, published carousel — across Instagram, Facebook, and X — for approximately **5 cents**.

* * *

What this workflow does
-----------------------

This automation system acts as a complete AI-powered carousel design studio and publishing pipeline.

### Step-by-step pipeline:

#### Step 1 — Data Pipeline (Google Sheet)

*   Runs on a schedule (configurable interval)
*   Pulls the next unprocessed row from Google Sheets
*   Each row = one carousel (one brand, one product, one post)
*   Marks the row as "Processing" to prevent duplicate execution
*   Checks if product description and images are provided — if missing, auto-scrapes from the product URL using Jina.ai (free, no account needed)
*   Merges all data into one clean payload for the AI

#### Step 2 — AI Creative Direction (Claude)

*   Sends all product data (description, images as base64, brand logo, creative specifications) to Claude via the Anthropic API
*   Claude acts as an executive creative director — not just generating content, but building a complete visual identity first:
    *   Color palette (2-3 hex colors)
    *   Typography style and hierarchy
    *   Lighting direction and mood
    *   Signature design element
    *   Background texture concept
*   Then generates for each slide: headline, body copy, layout approach, and a detailed 80+ word image prompt
*   A 2000-word system prompt with banned elements list eliminates the generic AI look (no waves, no scattered leaves, no flat backgrounds, no Canva-style templates)
*   Every image prompt ends with a negative prompt / AVOID block — same concept as Stable Diffusion negative prompts, applied to Gemini
*   Output is structured JSON via a parser — no freeform text that could break the pipeline
*   Also generates the Instagram caption and hashtags

#### Step 3 — Image Generation with Visual Consistency Loop

*   **This is the core innovation of the workflow**
*   Slides are generated sequentially, NOT in parallel — this is critical
*   For slide 1: Gemini generates the image from the prompt + product reference images
*   For slide 2+: The workflow fetches all previously generated slides, converts them to base64, and attaches them as reference images alongside the current prompt
*   The text prompt explicitly instructs: "Match the exact typography, color palette, and lighting from the attached previous slides"
*   This creates a double enforcement system — visual reference + written instruction
*   Result: every slide in the carousel shares the same visual identity without using templates or presets
*   Images are generated via NanoBanana Pro (Gemini image generation API)
*   Each generated slide is uploaded to Blotato media storage and saved to a global memory array for the next iteration
*   Uses `$getWorkflowStaticData('global')` to persist slide URLs across loop iterations

#### Step 4 — Publishing & Status Update

*   Collects all uploaded slide URLs in correct order
*   Reads the "Socials" field from the Google Sheet (comma-separated: instagram, facebook, x)
*   Routes to the correct platform via a Switch node
*   Publishes via Blotato API — supports immediate posting or scheduled posting (ISO 8601 format)
*   One row can publish to all three platforms simultaneously
*   Updates the Google Sheet row: Status → "Published" + direct Post URL
*   If anything breaks: Status → "Failed" with error details

**➡️ Result:** One Google Sheet row in, one fully designed and published multi-platform carousel out. ~5 cents. ~5 minutes.

* * *

Setup
-----

### Required accounts & API keys:

*   **Google Sheets** — read/write access to your content spreadsheet
*   **[Anthropic](https://anthropic.com)** — Claude API key (creative direction + copywriting)
*   **[Google AI / Gemini](https://ai.google.dev)** — API key for image generation via NanoBanana Pro ($300 free credit per new Gmail)
*   **[Blotato](https://blotato.com/?ref=nocodehack)** — API key for media upload + multi-platform publishing
*   **[Jina.ai](https://jina.ai)** — free web scraping, no account required (10M tokens free)

### Google Sheet structure:

Column

Description

Brand Logo URL

Direct link to your brand logo — placed on every slide automatically

Product URL

Link to product page — used for auto-scraping if description/images are empty

Product Description

Optional — write it yourself for best results, or leave blank to auto-scrape

Product Images URL

Direct links to product photos (comma-separated for multiple)

Specification

Creative direction hint (e.g. "dark cinematic luxury" or "bright playful minimal") — leave empty for AI to decide

Post Date

YYYY-MM-DD format — workflow only picks up rows matching today's date

Post Hour

`now` for immediate publish, or `14:00` / `2pm` for scheduled

Socials

Comma-separated platforms: `instagram`, `facebook`, `x`

Status

Leave empty — auto-filled: Processing → Published / Failed

Post URL

Leave empty — auto-filled with direct link to live post

### Configuration steps:

1.  Import the workflow JSON into n8n
2.  Add all required API credentials in n8n's credential manager
3.  Create your Google Sheet using the template provided (link in resources)
4.  Set your Blotato profile IDs in each publishing node (one per platform)
5.  Map platform outputs in the Switch node
6.  Verify the Gemini image generation endpoint in the NanoBanana Pro node
7.  Test with one row before activating production mode

### Recommended hosting:

n8n is free and open source but needs a server. A VPS with at least 2GB RAM handles image generation and multiple API calls without issues. The workflow runs 24/7 on schedule.

* * *

How to customize
----------------

*   **Change AI model:** Swap Claude for GPT-4o or Gemini in the LLM Chain node — the structured output parser works with any model
*   **Change slide count:** Edit the system prompt and user prompt (currently locked to 3 slides)
*   **Change visual style:** Edit the creative direction in the system prompt — modify banned elements, change composition approaches, adjust the quality standard
*   **Add platforms:** Add new outputs to the Switch node + new Blotato publish nodes (Blotato supports TikTok, LinkedIn, Pinterest, Threads, YouTube, Bluesky)
*   **Add approval step:** Insert a Wait node before publishing to manually review before posting
*   **Change image hosting:** Swap Blotato Upload for Cloudinary or any S3-compatible storage
*   **Change scraper:** Swap Jina.ai for any other web scraping tool
*   **Adjust scheduling:** Modify the Schedule Trigger interval and use the Post Hour column for per-post timing
*   **Multi-brand setup:** Each row can have a different brand logo and creative specification — the AI generates a fresh visual identity per row

* * *

Cost breakdown per carousel (approx.)
-------------------------------------

Component

Cost

Claude (creative direction + copy, ~8K tokens)

~$0.02

Gemini (3 slide images via NanoBanana Pro)

~$0.03

Jina.ai (web scraping)

Free

Blotato (publishing)

Per plan

**Total per carousel**

**~$0.05**

Compare: Fiverr/Upwork designers charge $50-100 per carousel post. This workflow does it for 5 cents.

Gemini offers $300 free credit per new Gmail account — enough for thousands of carousels before spending anything.

* * *

Expected outcome
----------------

You get a fully automated carousel production system that can:

*   Generate agency-quality carousel designs from a spreadsheet
*   Maintain visual consistency across all slides without templates
*   Handle multiple brands with completely different visual identities
*   Publish to Instagram, Facebook, and X simultaneously
*   Schedule content weeks in advance
*   Scale from 1 carousel/day to dozens without additional effort
*   Eliminate design costs almost entirely

* * *

Typical use cases
-----------------

*   E-commerce product marketing (daily product carousels)
*   Brand awareness campaigns across multiple platforms
*   Affiliate marketing content at scale
*   Social media agency client deliverables
*   Dropshipping product promotion
*   Multi-brand social media management
*   Content calendar automation
*   A/B testing different creative directions for the same product

* * *

Watch the full step-by-step walkthrough.

[🎥 Video Tutorial](https://youtu.be/A_QT-9qUkxc)
-------------------------------------------------


* * *

👋 Need help or want to customize?
----------------------------------

📩 Contact: [LinkedIn](https://www.linkedin.com/in/ing-seif/)

📺 YouTube: [@nocodehack](https://youtube.com/@nocodehack)

🌐 Resources & Downloads: [nocodehack.io](https://nocodehack.io/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
