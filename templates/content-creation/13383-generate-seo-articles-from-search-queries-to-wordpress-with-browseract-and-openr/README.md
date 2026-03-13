# 🎬 Generate SEO articles from search queries to WordPress with BrowserAct and OpenRouter

> ⚡ **296 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Generate SEO articles from search queries to WordPress with BrowserAct

This workflow automates a programmatic SEO pipeline by turning a list of search queries into fully researched, authoritative blog posts. It scrapes search results (focusing on community insights like Reddit) for real-world data, uses AI to draft comprehensive guides, and publishes them directly to your WordPress site.

## Target Audience

SEO specialists, content marketers, niche site builders, and editorial teams looking to scale content production with high-quality, researched articles.

## How it works

1. **Define Topics**: The workflow begins by defining a list of target keywords or questions in a **Set** node (e.g., "Best automation tools").
2. **Research**: It iterates through each query using a Loop node. For each item, **BrowserAct** scrapes search engine results to gather raw insights, discussions, and market consensus.
3. **Draft Content**: An **AI Agent** (acting as a "Senior Technical Editor") analyzes the raw data. It synthesizes the information into a structured, HTML-formatted article with tables, headers, and actionable advice.
4. **Publish**: The generated content is sent to **WordPress** to create a new post.
5. **Notify**: Once the entire batch is processed, a **Slack** message is sent to notify the team.

## How to set up

1. **Configure Credentials**: Connect your **BrowserAct**, **OpenRouter**, **WordPress**, and **Slack** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Programmatic SEO Data Pipeline** template is saved in your BrowserAct account.
3. **Set Keywords**: Open the **Set queries** node and update the `Queries` array with the list of topics you want to write about.
4. **Configure WordPress**: Open the **Create a post** node and ensure it is connected to your WordPress site.
5. **Configure Notification**: Open the **Send completion notification** node and select the Slack channel where you want to receive alerts.

## Requirements

* **BrowserAct** account with the **Programmatic SEO Data Pipeline** template.
* **OpenRouter** account (or credentials for a specific LLM like GPT-4o or GPT-5).
* **WordPress** account.
* **Slack** account.

## How to customize the workflow

1. **Adjust the Persona**: Modify the system prompt in the **AI Agent** node to change the writing style (e.g., from "Technical Editor" to "Casual Blogger" or "Sales Copywriter").
2. **Add Visuals**: Insert an image generation node (like DALL-E or Stable Diffusion) before the WordPress node to create a unique featured image based on the article title.
3. **Review Loop**: Instead of publishing directly, change the final step to add the draft to **Google Docs** or **Notion** for human approval.

## Need Help?

* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct ](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [Automated Content Factory: From Reddit Data to SEO Blog Posts with n8n](https://youtu.be/5_bUlnRBre0)

## 🔗 Nodes Used

Slack, Wordpress, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
