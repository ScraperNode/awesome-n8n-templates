# 🎬 Seo blog publishing for Jekyll with GPT-4, GitHub & social sharing

> ⚡ **792 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## 🤖 Auto-Publish SEO Blog Posts for Jekyll with AI + GitHub + Social Sharing

This workflow automates the entire process of publishing SEO-optimized blog posts (e.g., recipes) to a Jekyll site hosted on GitHub. It uses **LangChain + OpenAI** to write long-form Markdown articles, and commits them directly to your repository. Optional steps include **posting to X (Twitter)** and **LinkedIn**.

### 🔧 Features

- 📅 **Scheduled Execution**: Runs daily or manually.
- 📥 **CSV Input**: Reads from a local CSV (`/data/recipes.csv`) with fields like title, description, keywords, and publish date.
- ✍️ **AI Copywriting**: Uses a GPT-4 model to generate a professional, structured blog post optimized for SEO in Markdown format.
- 🧪 **Custom Prompting**: Includes a detailed, structured prompt tailored for Italian food blogging and SEO rules.
- 🗂 **Markdown Generation**:
  - Automatically builds the Jekyll front matter.
  - Generates a clean SEO-friendly slug.
  - Saves to `_posts/YYYY-MM-DD-title.md`.
- ✅ **Commits to GitHub**: Auto-commits new posts using GitHub node.
- 🧹 **Post-Processing**: Removes processed lines from the source CSV.
- 📣 **(Optional)** Social media sharing: Can post title to X (Twitter) and LinkedIn.

### 📁 CSV Format Example

```csv
titolo;prompt_descrizione;keyword_principale;keyword_secondarie;data_pubblicazione
Pasta alla Norma;Classic Sicilian eggplant pasta...;pasta alla norma;melanzane, ricotta salata;2025-07-04T08:00:00

## 🔗 Nodes Used

GitHub, Read Binary File, X (Formerly Twitter), LinkedIn, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
