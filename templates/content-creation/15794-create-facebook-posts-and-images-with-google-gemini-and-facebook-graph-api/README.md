# 🎬 Create Facebook posts and images with Google Gemini and Facebook Graph API

> ⚡ **959 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![Thiết kế chưa có tên 18.png](fileId:6372)

This n8n template automates the creation of professional Facebook posts and visually striking illustrations directly from simple raw text. If you want to maintain a consistent social media presence without spending hours writing copy and designing images, *this workflow is perfect for you*.

## How it works

* **Trigger & Configuration:** The workflow begins with your raw text and brand guidelines, configured entirely within a single **Set Context** node.
* **AI Copywriting:** A **Google Gemini** Agent analyzes the input and crafts an engaging Facebook caption—complete with hooks, emojis, and hashtags—alongside a highly detailed image generation prompt.
* **Image Processing:** The workflow intelligently branches. If you provide an original image, Gemini edits and enhances it for social media. If no image is provided, Gemini generates a brand-new illustration from scratch.
* **Facebook Publishing:** The final text and image are automatically published to your **Facebook Fanpage** via the Graph API.

![Thiết kế chưa có tên 17.png](fileId:6371)

## How to use

1. Connect your **Google Gemini** API key in the AI Agent and Language Model nodes.
2. Connect your **Facebook Graph API** credentials in the **Post to Facebook** node.
3. Edit the **Set Context** node to update the `raw_content`, `fanpage_name`, `content_style`, and your specific `page_id`.
4. Run the workflow to automatically generate and publish your content.

## Requirements

* **n8n Version:** Built and tested on **n8n 2.9.4+**. *(Note: It is highly recommended to update to the latest n8n version to use this workflow effectively).*
* **Google Gemini** API key (`googlePalmApi` credential).
* **Facebook Page Access Token** with `pages_manage_posts` permissions.

## Customizing this workflow

* **Automate the input:** Swap the Manual Trigger for a **Webhook**, **Google Sheets**, or **Telegram** node to generate posts on the fly from external apps.
* **Expand to other platforms:** Replace the Facebook node with a **LinkedIn** or **X (Twitter)** node to distribute your AI-generated content across multiple channels.

---

## About the Author

**Created by:** Nguyễn Thiệu Toàn (Jay Nguyen)  
**Email:** me@nguyenthieutoan.com  
**Website:** [nguyenthieutoan.com](https://nguyenthieutoan.com)  
**Company:** GenStaff ([genstaff.net](https://genstaff.net)) - *AI Staff. Always On. Always Yours.*  
**Socials (Facebook / X / LinkedIn):** @nguyenthieutoan  
**More templates:** [n8n.io/creators/nguyenthieutoan](https://n8n.io/creators/nguyenthieutoan)

## 🔗 Nodes Used

HTTP Request, Facebook Graph API, AI Agent, Structured Output Parser, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
