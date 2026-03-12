# 🎬 Generate platform-specific social media posts with ChatGPT, Tavily & G-Sheets

> ⚡ **73 views** · 🎬 [Content Creation & Video](../)

## Description

Automated Social Media Content Generator with ChatGPT & Tavily Research

This n8n template turns a simple spreadsheet of ideas into ready-to-publish content for LinkedIn, X, and Instagram.
It uses Tavily to find recent insights from the web and ChatGPT to craft optimized posts automatically — writing results back to your sheet.

⚙️ Good to know

Triggers automatically when a new row is added to your Google Sheet.

Uses Tavily for intelligent web research based on your topic.

Generates three platform-specific posts (LinkedIn, X, IG) using ChatGPT.

Saves all results back into the same sheet — no manual copying.

Requires API keys for OpenAI, Tavily, and Google Sheets credentials.

🧭 How it works
Step 1 — Watch the Sheet & Prepare Inputs

A Google Sheets Trigger monitors your content sheet with six columns:

Campaign

Content topic

Target audience

LinkedIn

X

IG

The Set Search Fields node structures this data for later steps.

Step 2 — Research with Tavily

The Search Internet node calls Tavily’s API (insert your key here) to fetch fresh news and articles about the topic.

Split Out unfolds the search results; Aggregate compiles them into a single, clean dataset used by the LLMs.

Step 3 — Generate Platform-Optimized Posts

Each platform uses a dedicated ChatGPT agent:

LinkedIn – long-form, insightful, paragraph breaks, 1–2 emojis, 3–5 hashtags, and a call to action.

X – ≤ 280 characters, concise and catchy, 1–3 hashtags, 1–2 emojis.

Instagram – scannable text with CTA, hashtags, and image suggestions for posts/carousels.

Finally, Update Campaign writes the generated posts back into your sheet (LinkedIn, X, and IG columns) using the campaign name as the match key.

🧩 How to use

Prepare your Google Sheet

Columns: Campaign, Content topic, Target audience, LinkedIn, X, IG.

Keep the last three empty — they’ll be filled automatically.

Connect credentials

Google Sheets → account owning the document.

Tavily → enter your API key in the Search Internet node.

OpenAI → connect your key in the three generation nodes (LinkedIn, X, IG).

Run

Add a new row to the sheet and watch the workflow automatically research, write, and update the row with finished posts.

🧾 Requirements

n8n instance

Google Sheets access

OpenAI API key

Tavily API key

🧱 Customizing this workflow

Tone & Voice – Edit system prompts in each GPT node.

Research Depth – Adjust max_results or search_depth in Tavily.

Localization – Modify prompts for language or region.

Formatting – Add post templates, hashtags, or links.

Quality Control – Add moderation or length checks before saving results.

A/B Testing – Duplicate platform nodes to create and compare multiple drafts.

💡 Tips

Keep topics focused — one clear idea per row.

Use Tavily’s news topic for the freshest insights.

Test on a few rows to calibrate tone and hashtags before scaling.

✅ In short:
Idea in Google Sheet → Tavily research → ChatGPT writes LinkedIn/X/IG posts → Auto-update in sheet.
Plug in your keys, run once, and your content pipeline writes itself.

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
