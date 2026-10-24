# 🎬 Generate LinkedIn posts with Gemini, Olostep, Hugging Face and Google Sheets

> ⚡ **24 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## AI LinkedIn Post Generator: From Topic to Image & Text

Transform your content queue into a high-engagement LinkedIn presence with zero manual effort. The **AI LinkedIn Post Generator** workflow automates every step of the content creation process. It pulls a topic from your backlog, conducts real-time web research for the latest trends and statistics, drafts a professional post, and even generates a custom AI image to accompany it.

By combining **Gemini 2.5 Flash**, **Olostep**, and **Hugging Face** image models, this workflow ensures your social media activity remains consistent, relevant, and visually striking.

---

### Who’s it for?
*   **Solopreneurs & Creators:** Maintain a high-quality LinkedIn presence while focusing on your core business.
*   **Content Marketers:** Quickly generate drafts and visuals for a volume-heavy social media strategy.
*   **Personal Brands:** Stay relevant by automatically incorporating real-time news and statistics into your posts.
*   **Social Media Agencies:** Scale client content production by automating the research and drafting phases.

### How it works / What it does
1.  **Trigger:** Manual execution or scheduled trigger kicks off the process.
2.  **Topic Retrieval:** Fetches the next topic marked as "To-Do" from a **Google Sheet**.
3.  **Web Research:** **Olostep** scans the web for key insights, recent trends, and supporting statistics related to the topic.
4.  **Parallel Generation:**
    *   **Post Writer:** Gemini drafts an engaging, mobile-optimized LinkedIn post with emojis, hashtags, and a clear Call to Action (CTA).
    *   **Image Prompt Generator:** A second AI agent crafts a detailed visual prompt based on the research findings.
5.  **Visual Creation:** The workflow calls a **Hugging Face** model (FLUX) to generate a unique image for the post.
6.  **Finalization:** The post text and image URL are saved back to the **Google Sheet**, the status is updated to "Done," and you receive a **Gmail** notification that your content is ready.

### How to set up
1.  **Credentials:** Add your API keys for **Google Gemini (PaLM)**, **Olostep**, **Hugging Face**, **Google Sheets**, and **Gmail**.
2.  **Google Sheet Setup:** Create a sheet with columns for `topic`, `status`, `post`, and `image`. Populate the `topic` column and set the initial `status` to "To-Do".
3.  **Notification:** Update the **Gmail** node with your email address to receive completion alerts.

### Requirements
*   **Google Gemini API:** For research synthesis and professional copywriting.
*   **Olostep API:** To gather real-time data and "current" context.
*   **Hugging Face API:** (Or any preferred image model API) for visual generation.
*   **Google Workspace (OAuth2):** For sheet management and email alerts.

### How to customize the workflow
*   **Visual Style:** Modify the "Image Prompt Generator" system message to enforce a specific brand aesthetic (e.g., "minimalist 3D," "professional photography," or "flat illustration").
*   **Post Tone:** Adjust the "Post Writer" agent to match your specific voice, whether it's "brutally honest," "playful," or "academic."
*   **Multi-Post Generation:** Update the logic to process multiple "To-Do" rows in a single run for weekly content batching.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
