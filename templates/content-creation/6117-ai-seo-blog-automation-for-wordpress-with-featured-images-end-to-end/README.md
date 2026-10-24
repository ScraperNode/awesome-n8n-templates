# 🎬 AI SEO Blog Automation for WordPress with featured images-End-to-End

> ⚡ **4,692 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
One n8n workflow that turns a keyword into a publish-ready WordPress draft: live SERP research, a section-by-section article with real citations and internal links from your own sitemap, a 100-point SEO score with automatic revision, plus tags, category, excerpt and a featured image.

## How it works
1. You submit a built-in n8n form with your keyword, target word count, number of sections, writing style, site URL, and a short description of your site and audience.
2. A keyword strategist agent turns that keyword into a plan: search intent, content type, content angle, and three secondary, five long-tail and five semantic keywords.
3. A research agent running on a live-search model reads what actually ranks today, collects five real questions searchers ask, and answers them with genuine source URLs it retrieved.
4. An outline planner assigns each keyword and each research question to exactly one section, so nothing is repeated and nothing is stuffed.
5. Each section is written by its own model call with only its own assignments, its own word budget and its own sources, using a whitelist of safe HTML tags.
6. An editor fetches your site's sitemap, links three to six genuinely relevant internal pages inside the text, then writes the introduction, the conclusion and a Resources list of every cited source.
7. A grader scores the finished HTML from 0 to 100 across keywords, structure, links, readability and length, and returns a specific fix list for every point lost.
8. Anything below your threshold gets one revision pass, then the post is published to WordPress as a draft with its category, four get-or-create tags, excerpt and optional featured image already attached.

## Setup
1. Create an OpenRouter API key with some credit on it, and generate a WordPress Application Password for a user with the Editor or Administrator role.
2. Import the single workflow JSON file into n8n; all 64 nodes and the eight sticky notes that document each stage arrive together.
3. Attach your OpenRouter credential to the two model nodes, Mini LM and Research LM, and set Mini LM's model explicitly to a mini-class model.
4. Attach your WordPress credential to the nine publish nodes: get-tags, set-tags, Upload Image To WP, Update Media Meta, both Post Blog nodes, Set Featured Image and both Set Excerpt nodes.
5. Open the configuration node and set min_seo_score, the score below which an article gets a revision pass; 75 is a good starting point.
6. Run a test, open the form URL, and submit a keyword plus your site URL with a trailing slash, which every WordPress call depends on.
7. Check WordPress drafts for the finished post, then activate the workflow so the production form URL goes live.

## Requirements
- n8n (Cloud or self-hosted) with the AI/LangChain nodes available
- An OpenRouter API key with credit — runs every writing and research agent
- A WordPress site with a reachable REST API and an Application Password
- An SEO plugin generating a sitemap (Yoast, Rank Math or WordPress core) for internal linking
- An OpenAI API key with a verified organisation — only if you want AI featured images
- A Google account — only for the optional scheduled Google Sheets queue

## Customization
- Swap the model on the Mini LM node to change quality and cost for all nine writing agents at once; keep Research LM on a live-search model
- Raise `min_seo_score` in the configuration node for a stricter quality bar, or lower it to skip revisions entirely
- Change the sitemap filename in the Internal Links tool to match your SEO plugin, or point it at post-sitemap.xml to link to articles instead of pages
- Switch both Post Blog nodes from `draft` to `publish` for fully automated posting once you trust the output
- Edit any agent's system message to change tone, tag count or scoring weights — keep the output JSON shape intact for the parsers
- Enable the Schedule Trigger and the Google Sheets queue to publish one planned post per day without touching the form

## Additional info
- Keyword data is AI-derived from live SERP research, not from a search-volume API, so use it to structure articles rather than to replace a keyword tool
- The grader is an LLM scoring a strict on-page checklist, which is a real quality floor rather than a ranking prediction
- Posts are created as drafts on purpose; the workflow sets the WordPress excerpt, which most themes reuse as the meta description
- Internal links come only from your live sitemap and citations only from retrieved URLs, so neither can be invented
- A full run makes roughly 10 to 15 model calls and takes three to six minutes, with one revision pass at most so cost stays capped
- Not affiliated with or endorsed by WordPress, Automattic, OpenAI, OpenRouter, Perplexity, Google or n8n

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Wordpress, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
