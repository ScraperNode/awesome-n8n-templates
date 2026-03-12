# 🎬 Generate and Publish SEO-Optimized Blog Posts to WordPress

> ⚡ **1,024 views** · 🎬 [Content Creation & Video](../)

## Description

**BlogBlitz** is a powerful `n8n` workflow that automates the creation and publishing of SEO-optimized blog posts to WordPress, saving you hours of manual content creation. Triggered on a schedule or via Telegram, it generates high-quality, 1,500–2,500-word articles complete with titles, slugs, meta descriptions, images, and more.



## 🎯 Who is this for?

* **Bloggers** who want fresh, consistent content.
* **Content marketers** aiming for SEO efficiency.
* **WordPress site owners** looking to automate blog publishing without sacrificing quality.



## 🚨 Problem Solved

Manually creating engaging, SEO-friendly content is time-consuming and requires writing expertise. BlogBlitz solves this by:

* Automating ideation, writing, formatting, and publishing.
* Generating images and SEO elements.
* Keeping your blog active and visible to search engines.



## ⚙️ What This Workflow Does

| Feature               | Description                                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Triggers**          | - Runs every 3 hours via **Schedule Trigger**<br>- Or on-demand via **Telegram command**: `/generate`                                   |
| **Generates Content** | Uses **OpenRouter** to: <br>- Select a category (Technology, AI, etc.)<br>- Create a title, slug, focus keyphrase, and meta description |
| **Writes Articles**   | **OpenAI** generates 1,500–2,500-word articles:<br>- SEO-optimized<br>- Structured with headings<br>- Includes CTA                      |
| **Adds Visuals**      | Generates realistic **featured images** with OpenAI and uploads them to WordPress                                                       |
| **SEO Features**      | Generates:<br>- Optimized slug<br>- Focus keyphrase<br>- Meta description                                                               |
| **Publishes**         | Posts directly to **WordPress**:<br>- With correct category<br>- Featured image<br>- Author ID                                          |
| **Notifies**          | Sends publish alerts via **Discord webhook** and **Telegram message**                                                                   |


## 🚀 Setup Instructions

### ✅ Requirements

* Self-hosted or cloud **[n8n instance](https://n8n.partnerlinks.io/khaisastudio)**
* Stable internet connection

### 🔐 Credentials Needed

* **WordPress API** (`wp-json/wp/v2`)
* **OpenAI API** (text + image generation)
* **OpenRouter API** (category & title generation)
* **Telegram Bot API**
* **Discord Webhook**

### 🔧 WordPress Configuration

* Set up post **categories**:

  * Technology `[ID:3]`
  * AI `[ID:4]`
  * Tech Fact `[ID:7]`
  * Tech History `[ID:8]`
  * Tech Tips `[ID:9]`
* Use **admin user ID** for publishing (default: `1`)



## 🧩 Node Setup

* **Telegram Trigger** — Initiates workflow with `/generate`
* **Schedule Trigger** — Runs workflow every 3 hours
* **Edit Fields Node** — Centralizes variable setup (e.g., category IDs)
* **OpenRouter Node** — Generates topic and meta info
* **OpenAI Node** — Generates full article and image
* **WordPress Node** — Publishes post
* **Discord Node** — Sends publish alert
* **HTTP Request Node** — Handles image upload or utility calls



## 🛠️ Customization Tips

| Feature           | How to Customize                                     |
| ----------------- | ---------------------------------------------------- |
| **Categories**    | Update category IDs in the WordPress Post Draft node |
| **Schedule**      | Modify the interval in the **Schedule Trigger**      |
| **Tone & Style**  | Adjust prompts in the **LLM Chain** node             |
| **Notifications** | Add Slack, Email, or other channels                  |
| **Image Style**   | Change OpenAI prompt for “vivid”, “natural”, etc.    |



## 📦 Pre-Requirements

* **n8n Instance** (Cloud/Self-hosted)
* Install: `@n8n/n8n-nodes-langchain`
* All required API credentials configured
* WordPress categories set
* Admin user ID available


## 🔧 Nodes Used

* `Telegram Trigger`
* `Schedule Trigger`
* `OpenRouter`
* `OpenAI`
* `WordPress`
* `Discord`
* `HTTP Request`



## ✅ Test the Workflow

1. Deploy and connect your n8n instance.
2. Send `/generate` to your Telegram bot.
3. Check your WordPress site for the newly published post!
---
*Made by: [Khaisa Studio](https://khaisa.studio)*  
*Tag: youtube, summarizer, telegram, openai*  
*Category: AI Automation, Video Tools*
Need a custom? contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](khmuhtadin.com)**

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Discord, Wordpress, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
