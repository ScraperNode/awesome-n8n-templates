# 🎬 Generate AI videos and carousels with Blotato for Instagram and TikTok

> ⚡ **4,949 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Generate AI videos and carousels with Blotato and publish to Instagram & TikTok

📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Turn-AI-Videos-Carousels-Into-Income-with-n8n-Fully-Automated-x-Blotato-30c3d6550fd9804b999ede955fdf409d?source=copy_link)

![Workflow Overview](https://www.dr-firas.com/blotato-agent.png)

### Who is this for?

This workflow is designed for **content creators, marketers, solopreneurs, and automation enthusiasts** who want to generate and publish short-form content on **Instagram and TikTok** automatically.  
It is ideal for users looking to combine **AI-generated videos and carousels** with **Blotato** and orchestrate everything using **n8n**.

---

### What this workflow does

This workflow provides a complete **end-to-end automation pipeline**:

1. Receives a message from **Telegram** containing a public URL and a publishing instruction.
2. Creates a content source from the URL using **Blotato**.
3. Retrieves and validates the extracted text content.
4. Generates either:
   - An **AI tweet-card carousel** for Instagram, or
   - An **AI-generated video** for TikTok.
5. Continuously checks the visual generation status until it is fully completed.
6. Publishes the final media automatically to **Instagram or TikTok**.
7. Sends a confirmation message back to Telegram once the post is successfully published.

---

### Setup

To use this workflow, you will need:

- An active **n8n** instance
- A **[Blotato](https://blotato.com/?ref=firas)** account with API access
- Instagram and/or TikTok accounts connected in **[Blotato](https://blotato.com/?ref=firas)**
- A **Telegram Bot** for triggering the workflow and receiving notifications

Setup steps:
1. Import the workflow JSON into n8n.
2. Add your **[Blotato](https://blotato.com/?ref=firas)** API credentials.
3. Configure the Telegram Trigger with your bot token.
4. Select your Instagram and TikTok accounts in the **[Blotato](https://blotato.com/?ref=firas)** post nodes.
5. Activate the workflow.

---

### How to customize this workflow to your needs

You can customize this workflow by:
- Changing the visual templates used in Blotato.
- Adjusting AI prompts to control tone, format, or content style.
- Adding additional publishing platforms after the posting step.
- Modifying polling behavior or adding timeouts for long visual renders.
- Replacing Telegram with another trigger such as Webhooks or Slack.

The workflow is modular and easy to extend, making it suitable for a wide range of content automation use cases.


### 🎥 [Watch This Tutorial](https://youtu.be/HaYFevp7KsU)

![SORA2 logo](https://www.dr-firas.com/blotato-miniature.png)


---
### 👋 Need help or want to customize this?
📩 Contact: [LinkedIn](https://www.linkedin.com/in/dr-firas/)  
📺 YouTube: [@DRFIRASS](https://www.youtube.com/@DRFIRASS)  
🚀 Workshops: [Mes Ateliers n8n](https://hotm.art/formation-n8n)


### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https://www.youtube.com/channel/UCriIQI8uaoEro5FEnOpeidQ) / [🚀 Mes Ateliers n8n  ](https://hotm.art/formation-n8n)

## 🔗 Nodes Used

Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
