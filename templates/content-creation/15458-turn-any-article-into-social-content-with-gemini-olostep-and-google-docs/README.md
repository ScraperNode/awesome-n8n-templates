# 🎬 Turn any article into social content with Gemini, Olostep, and Google Docs

> ⚡ **72 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Content Atomizer: Turn Any Article into a Multi-Channel Social Campaign

Stop spending hours manually repurposing long-form content. The **Content Atomizer.json** workflow takes a single article URL and automatically "atomizes" it into high-authority LinkedIn posts, Twitter (X) threads, Reddit-ready discussions, and user-friendly FAQs. Using **Gemini 2.5 Flash** and **Olostep**, it extracts the core value and formats it for maximum engagement across different platforms.

---

### Who’s it for?
*   **Content Marketers:** Scale your distribution without increasing your headcount.
*   **SaaS Founders:** Turn technical documentation or blog posts into marketing collateral.
*   **Social Media Managers:** Quickly generate platform-specific drafts that follow proven engagement frameworks.
*   **Thought Leaders:** Maintain a consistent presence across multiple channels with minimal effort.

### How it works / What it does
1.  **Trigger:** Submit an article URL via an n8n Form.
2.  **Scrape:** The **Olostep** node fetches the full markdown content of the article.
3.  **Core Extraction:** Gemini identifies the 5 most shareable insights and key statistics.
4.  **Multi-Channel Generation:** Four parallel Gemini nodes draft content tailored for:
    *   **LinkedIn:** Uses a "Problem-Agitation-Solution" (PAS) structure with a pattern-interrupt hook.
    *   **Twitter (X):** Creates a 6-tweet thread with a dedicated hook and TL;DR.
    *   **Reddit:** Drafts a "value-bait" post formatted for community engagement (r/SaaS, r/Marketing).
    *   **FAQ:** Generates a "Quick Start" guide and troubleshooting snippets based on the article content.
5.  **Delivery:** The workflow aggregates all drafts, converts them into a Google Doc, and emails the link directly to you.

### How to set up
1.  **Credentials:** Connect your credentials for **Google Gemini (PaLM)**, **Olostep**, and **Google Drive**.
2.  **Form Trigger:** Activate the workflow to generate your unique n8n form URL.
3.  **Email Configuration:** Update the "Share link & email" node with your specific email address to receive the final report notifications.

### Requirements
*   **Google Gemini API Key:** For analysis and creative writing.
*   **Olostep API Key:** For high-quality web scraping and markdown conversion.
*   **Google Drive (OAuth2):** For document generation and sharing.

### How to customize the workflow
*   **Tone of Voice:** Modify the "System Message" inside the LinkedIn, Twitter, or Reddit nodes to match your personal brand or company voice.
*   **Target Platforms:** You can easily add more branches (e.g., for Instagram Reels scripts or Newsletter summaries) by duplicating one of the Gemini nodes.
*   **Output Format:** Instead of Google Docs, you can swap the final nodes for Slack, Discord, or a Notion database to fit your existing workspace.

## 🔗 Nodes Used

HTTP Request, Google Drive, Markdown, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
