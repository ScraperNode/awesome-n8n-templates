# 🎬 Generate monthly AI SEO content with Gemini for WordPress, LinkedIn and socials

> ⚡ **362 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Monthly AI SEO Content Engine: 34 Assets to WordPress, LinkedIn & Socials

## Summary
This workflow is an end-to-end, enterprise-grade content engine. It automates the entire lifecycle of a brand's content marketing: capturing business context via an n8n Form Trigger to generate a master strategy document, using real-time analytics to write 34 targeted assets, packaging them into a styled `.docx` file for review, and automatically generating images to publish the content across WordPress, LinkedIn, Facebook, and Instagram.

## Key features
* **Automated Brand Strategy:** Uses an n8n Form Trigger to capture business details and generates a 16-section master Markdown strategy document saved to Google Drive.
* **Data-Driven Content Planning:** Integrates Google Analytics 4 (GA4) and localized Google Trends to identify content gaps (high-bounce pages) and rising topics to inform the content plan.
* **High-Volume AI Generation:** Leverages native n8n Google Gemini nodes to write 34 distinct assets per run: 6 SEO blogs, 12 LinkedIn posts, 8 educational social posts, 4 newsletters, and 4 long-form guides.
* **Native Document Assembly:** Bypasses basic text outputs by dynamically assembling the generated content into a professionally styled, downloadable Microsoft Word (`.docx`) package with a generated table of contents.
* **AI Image Generation:** Uses Google Gemini 2.5 Flash Image to generate custom, photorealistic featured images and social media graphics for every post natively within the flow.
* **Omnichannel Publishing:** Parses the finalized `.docx` file, extracts the targeted content, and schedules it automatically to WordPress, LinkedIn, Facebook Pages, and Instagram Business with clamped timestamp validation.
* **Automated Error Logging & Alerts:** Built-in error trapping that sends a detailed summary to your Gmail if any API fails, or if prerequisite files are missing before publishing begins.

## How it works
This template is divided into three distinct pipelines that run sequentially:

**1. Pipeline A: Strategy Generation**
* **Trigger:** An n8n Form Trigger collects the company name, mission, audience, and core services.
* **Process:** The native Google Gemini node generates a strict JSON strategy object, which a Code node formats into a comprehensive Markdown document.
* **Storage:** The Google Drive node saves this context document directly to the root of your Google Drive.

**2. Pipeline B: Content Generation & Assembly**
* **Trigger:** Triggered manually via the Pipeline B trigger, or swap in a Schedule Trigger to run monthly.
* **Context Gathering:** Fetches the Markdown strategy from Drive, pulls the last 30 days of GA4 data, and fetches current Google Trends via RSS.
* **Generation:** Google Gemini is prompted in stages: first to build a Content Plan JSON, then to write the batches of blogs, social posts, and guides.
* **Assembly:** A robust Code node compiles the raw text into a valid, styled `.zip`/`.docx` file and uploads it to the root of your Google Drive.
* **Notification:** A Gmail node sends the team an email notification with a direct link to the finalized `.docx` package.

**3. Pipeline C: Multi-Platform Publishing**
* **Trigger:** Schedule Trigger set to run on the 1st of each month — adjust the time to run after Pipeline B completes.
* **Extraction:** Searches Google Drive for the latest `.docx` package, unzips it, and extracts the raw XML text. (If missing, it safely aborts and alerts you).
* **Processing:** Code nodes split the text into individual arrays for Blogs, LinkedIn, and Social posts, safely clamping publish dates to prevent API scheduling errors.
* **Media & Publishing:** * Generates an image for each asset using Gemini 2.5 Flash Image.
  * Uploads blog images to WordPress Media and creates a future-dated WordPress post.
  * Publishes text and images natively to LinkedIn, Facebook, and Instagram (via AWS S3 temporary hosting).

## Nodes used
* n8n Form Trigger
* Schedule Trigger
* Code (Heavy JavaScript for data merging, XML parsing, and DOCX assembly)
* Google Gemini (Langchain Native Nodes for Text and Image)
* Google Drive
* Google Analytics
* Gmail
* LinkedIn
* Facebook Graph API
* AWS S3 (Temporary public storage for Instagram image ingestion)
* Compression, Set, If, Merge, HTTP Request (WordPress API)

## Setup instructions
1. **Credentials Setup:** You will need active credentials for Google Drive, Google Analytics (OAuth2), Gmail, LinkedIn, Facebook Graph API, AWS S3, and a Google Gemini API key. Your LinkedIn credential must have the `openid` scope enabled to fetch the user URN dynamically.
2. **Run Pipeline A:** Run the n8n Form Trigger manually, fill out your company details, and let it generate your initial Markdown strategy file in the root of your Google Drive.
3. **Configure Pipeline B:** Open the `Config: Pipeline B` node and enter your GA4 Property ID, notification email address, the direct Drive link to the generated Markdown file, and your preferred Google Trends geographic/language codes.
4. **Configure Pipeline C:** Open the `Config: Pipeline C` node and enter your WordPress domain, Facebook Page ID, Instagram Business ID, your S3 bucket details (used to temporarily host images for Instagram), and a notification email address.
5. **WordPress Auth:** Ensure your WordPress site has Application Passwords enabled to use Basic Auth for the `Upload to WP Media` node.
6. **Activate:** Turn the workflow on. Pipeline B and C will run automatically on their schedules.

## Requirements
* **n8n version 1.60+** (Required for the node types and versions used in this template).
* **AWS S3 bucket with public-read access** (Required to host image URLs temporarily so Instagram's Graph API can fetch them).
* **Google Gemini API credentials** (Budget for ~100k-150k output tokens per monthly run).
* Google Workspace (Analytics, Drive, Gmail).
* WordPress site with Basic Auth enabled.
* LinkedIn account, Facebook Page, and Instagram Business account.

## Customization ideas
* **Adjust Output Volume:** Modify the JSON prompt in the `Build Content Plan Prompt` node to generate weekly content (e.g., 2 blogs, 4 social posts) instead of massive monthly batches.
* **Change the Tone:** Update the "Brand Voice" restrictions in the n8n Form Trigger or tweak the system prompts in the Code nodes to match a specific industry style (e.g., highly technical vs. casual).
* **Add Human-in-the-Loop:** Replace the direct link between Pipeline B and C with a Wait node that pauses publishing until a manager clicks an approval webhook link sent via email.

## Use cases
* **Marketing Agencies:** Scaling monthly content deliverables for multiple clients while ensuring the AI strictly adheres to different brand guidelines.
* **SEO Consultants:** Automating high-volume, keyword-targeted blog clusters backed by Google Analytics gap data.
* **Lean Startups:** Maintaining a massive omnichannel social media and blog presence without hiring a dedicated content team.

## 🔗 Nodes Used

HTTP Request, Google Drive, AWS S3, Facebook Graph API, Gmail, LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
