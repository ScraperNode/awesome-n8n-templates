# 🎬 Automated blog post generation with GPT-4 and publishing to Ghost CMS

> ⚡ **3,673 views** · 🎬 [Content Creation & Video](../)

## Description

🧠 Writes original, thought-provoking blog posts using AI  
🕓 Runs every 12 hours automatically  
✍️ Publishes directly to Ghost blog with title, tags, and SEO meta  

🔧 Features

    Scheduled every 12 hours

    OpenAI generates a multi-part blog post with metadata

    Markdown-compatible output (no HTML)

    Automatically published to Ghost CMS using authenticated API (🔐 no hardcoded keys)

    Fully modular and general-purpose — edit prompt for any blog theme!

⚙️ Nodes Overview
Step	Node Type	Purpose
1️⃣	Schedule Trigger	Runs every 12 hours
2️⃣	OpenAI	Generates blog post + meta info
3️⃣	Code	Extracts content, title, meta, and tags
4️⃣	Code	Formats content as Ghost mobiledoc payload
5️⃣	HTTP Request	Publishes post to Ghost via Admin API
📝 OpenAI Prompt (Generalized)

Write a high-quality blog post on a creative or thought-provoking topic. The tone should be engaging and immersive. Length: 2–4 paragraphs.

Then add a brief paragraph offering an alternative perspective or logical counterpoint.

Finally, generate:
- Blog post title
- Meta description
- 5 tags

🔐 Notes

    ✅ No hardcoded API keys

    🛠️ Ghost Admin API credentials must be set using the Credential Manager

    📌 Prompt and Ghost URL are both easily customizable

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
