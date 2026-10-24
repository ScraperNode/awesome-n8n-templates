# 🎬 Generate content authority roadmaps using Olostep, Gemini 2.5 Flash and Google Drive

> ⚡ **27 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Content Authority Roadmap: Solve the Unsolved Questions in Your Niche

Establish yourself as a thought leader by answering the questions that everyone else is ignoring. The **Content Authority Roadmap** workflow automates deep-dive research into Reddit, Quora, and niche forums to find "Information Gaps"—specific areas where your target audience is confused, frustrated, or stranded by standard industry advice.

Instead of generic blog posts, this workflow uses **Gemini 2.5 Flash** and **Olostep** to produce high-authority content outlines based on real-world friction and authentic audience vocabulary.

---

### Who’s it for?
*   **Thought Leaders & Experts:** Identify counter-intuitive perspectives that provide immediate clarity to your audience.
*   **Content Strategists:** Move beyond keyword research and focus on solving real "Information Gaps."
*   **Product Marketers:** Understand the raw, emotional language customers use when current solutions fail them.
*   **SEO Specialists:** Target high-intent, low-competition "long-tail" problems found in community discussions.

### How it works / What it does
1.  **Trigger:** Submit an **Industry/Topic** and a **Target Audience** via an n8n Form.
2.  **Research:** **Olostep** scans Reddit and forums for recent threads with "Unsolved" flairs or comments indicating confusion.
3.  **Gap Analysis:** Gemini performs "Pattern Recognition" to find the root causes of audience frustration and identifies one unique "Authority Pivot."
4.  **Outline Generation:** The AI generates 3 high-authority content outlines, each featuring a "Hook" based on authentic audience language.
5.  **Final Roadmap:** A **Report Editor** compiles the research, the strategy, and the outlines into a professional Google Doc, which is then emailed directly to you.

### How to set up
1.  **Credentials:** Connect your API keys for **Google Gemini (PaLM)**, **Olostep**, and **Google Drive**.
2.  **Form Trigger:** Activate the workflow to generate your submission URL.
3.  **Email Configuration:** Update the "Share link & email" node with your recipient email address.

### Requirements
*   **Google Gemini API:** For strategic gap analysis and complex outline generation.
*   **Olostep API:** To navigate and scrape real-time community discussions and forum flairs.
*   **Google Drive (OAuth2):** To create, format, and share the final Authority Roadmap document.

### How to customize the workflow
*   **Niche Focus:** Adjust the **Olostep** task to prioritize specific forums (e.g., StackOverflow for devs or IndieHackers for founders).
*   **Output Volume:** Modify the **Outline Generator** prompt to produce more or fewer briefs based on your content calendar needs.
*   **CMS Integration:** Connect nodes for **WordPress**, **Ghost**, or **Webflow** to push these high-authority outlines directly into your content management system as drafts.

## 🔗 Nodes Used

HTTP Request, Google Drive, Markdown, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
