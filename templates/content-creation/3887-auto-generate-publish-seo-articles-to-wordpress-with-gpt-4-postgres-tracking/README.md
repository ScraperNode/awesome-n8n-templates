# 🎬 Auto-generate & publish SEO articles to WordPress with GPT-4 + Postgres tracking

> ⚡ **4,328 views** · 🎬 [Content Creation & Video](../)

## Description

🚀 What this flow does
• 🔎 Selects the least-used WordPress category (tracked in PostgreSQL)
• 🤖 Uses GPT (4-mini or better) to generate a fully formatted SEO article with headings, TOC, lists, CTA, and Yoast blocks
• 🖼️ Creates a placeholder cover image and uploads it to WordPress Media
• 📬 Publishes the final post via /wp-json/wp/v2/posts with correct category + featured image
• 🧠 Logs the used category for future rotation (zero duplicates!)

⚙️ Setup in 3 mins

🏷️ Add your WordPress domain with a simple Set node:
    domain=https://yourdomain.com

🔐 Create these 3 credentials in n8n:
    YOUR_WORDPRESS_CREDENTIAL — for /media, /posts
    YOUR_POSTGRES_CREDENTIAL — for category tracking
    YOUR_OPENAI_CREDENTIAL — GPT-4-mini or better

🧱 Run the SQL from docs to create the used_categories table

✅ Manually test first 3–5 nodes to check WP auth, OpenAI response, and DB connection

🕒 Then just schedule it and let the bot write for you.

🎯 Why it's awesome
This is your personal AI content writer + publisher — perfect for:
• 📰 SEO content farms
• 📈 Affiliate blogs
• 🧰 Micro niche sites
• 🤫 PBNs with rotation-safe automation

No more manual uploads, broken categories, or GPT spam. Every post is structured, beautiful, and intelligently categorized.

## 🔗 Nodes Used

HTTP Request, Postgres, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
