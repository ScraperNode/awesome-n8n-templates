# 📱 Send an AI‑curated weekly sports newsletter with Reddit, GPT‑4o-mini, Gemini and Outlook

> ⚡ **244 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
Sports Digest Newsletter runs on a weekly schedule, aggregates sports news from multiple RSS/Reddit sources, uses AI to select and summarize the top stories, generates accompanying images, and emails a branded HTML newsletter.

## How it works
1. *Schedule Trigger (weekly)** — kicks off the run.
2. *Config node** — centralizes settings (source list, recipient list, branding values) used downstream.
3. *5 parallel source fetches** — pulls items from five RSS/Reddit feeds in parallel.
4. *Normalize** — maps each source's differing item shape into a common schema (title, link, summary, source).
5. *Merge** — combines all normalized items into one list.
6. *Select 7 articles** — filters/ranks down to the 7 stories to feature in the newsletter.
7. *AI summarization agent (GPT-4o-mini)** — writes concise summaries for each selected article.
8. *2 parallel Gemini image generations** — generates header/feature images for the newsletter.
9. *WordPress media upload** — uploads the generated images so they have public URLs to embed in the email.
10. *HTML newsletter assembly (Code node)** — builds the final branded HTML newsletter.
11. *Outlook — send** — emails the newsletter to the subscriber list.

## Setup
1. Import the workflow and attach OpenAI, Gemini, WordPress, and Outlook credentials.
2. Review the Config node — confirm source feed URLs and the subscriber/recipient list are current.
3. Confirm the WordPress site used for image hosting is the intended one.
4. A sample subscriber/content reference file (`Sports Digest.xlsx`) is provided alongside this template.

## Requirements
- **RSS/HTTP** — no credential required for public feeds (Reddit, RSS).
- **OpenAI** — GPT-4o-mini for summarization.
- **Google Gemini API** — for image generation.
- **WordPress** — for hosting generated images.
- **Microsoft Outlook** (OAuth2) — for sending the newsletter.

## Customization
- Add/remove RSS or Reddit sources in the parallel fetch branch (and update the Normalize step accordingly).
- Adjust the "select 7 articles" ranking logic to weight certain sources or topics higher.
- Update the newsletter's HTML branding/layout in the assembly Code node.
- Swap Gemini for another image provider if desired.

## Additional info
Visit https://automatedintelligentsolutions.com for more information.

## 🔗 Nodes Used

HTTP Request, RSS Read, Microsoft Outlook, Reddit, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
