# 🎬 Repurpose white papers into LinkedIn PDFs and blog posts with BrowserAct and GPT-4o

> ⚡ **50 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Repurpose white papers from URLs to LinkedIn PDFs and Blog Posts With BrowserAct

## Introduction

This workflow automates the labor-intensive process of turning long-form white papers into ready-to-publish social media assets. It scrapes the content from a URL or PDF, uses AI to ghostwrite a LinkedIn carousel script and an SEO-optimized blog post, generates a downloadable PDF for the carousel using APITemplate.io, and archives all assets in Google Sheets.

## Target Audience

Content marketers, social media managers, and agency copywriters looking to scale content repurposing efforts.

## How it works

1. **Input:** The workflow retrieves a list of white paper URLs from a Google Sheet.
2. **Looping:** It processes each URL individually to ensure stability.
3. **Extraction:** The **BrowserAct** node uses the "White Paper to Social Media Converter" template to scrape the full text of the white paper


.
4.  **Content Generation:** An **AI Agent** (OpenRouter/GPT-4o) acts as a ghostwriter. It analyzes the text and generates two distinct outputs:
* A viral-style LinkedIn post with a 5-slide carousel script.
* A full-length, HTML-formatted blog post with proper headers.
5.  **PDF Creation:** The **APITemplate.io** node takes the carousel script and generates a designed PDF file ready for LinkedIn upload.
6.  **Storage:** The workflow updates the original Google Sheet row with the generated blog HTML, the LinkedIn caption, and the direct link to the PDF.
7.  **Notification:** Once all items are processed, a **Slack** message notifies the team.

## How to set up

1. **Configure Credentials:** Connect your **BrowserAct**, **OpenRouter**, **Google Sheets**, **APITemplate.io**, and **Slack** accounts in n8n.
2. **Prepare BrowserAct:** Ensure the **White Paper to Social Media Converter** template is active in your BrowserAct library.
3. **Prepare APITemplate.io:** Create a PDF template in APITemplate.io that accepts dynamic fields for slide titles and body text. Copy the Template ID into the **Create a carousel PDF** node.
4. **Prepare Google Sheet:** Create a sheet with the headers listed below and add your target URLs.

## Google Sheet Headers

To use this workflow, create a Google Sheet with the following headers:

* `row_number` (Must be populated, e.g., 1, 2, 3...)
* `Target Page Url`
* `Blog Post`
* `Linkdin Post`
* `PDF Link`

## Requirements

* **BrowserAct Account:** Required for scraping. Template: **White Paper to Social Media Converter**.
* **OpenRouter Account:** Required for GPT-4o processing.
* **APITemplate.io Account:** Required for generating the visual PDF carousel.
* **Google Sheets:** Used for input and output.
* **Slack Account:** Used for completion notifications.

## How to customize the workflow

1. **Direct Publishing:** Add a **WordPress** node to publish the `Blog Post` HTML directly to your CMS instead of saving it to the sheet.
2. **Design Variations:** Create multiple templates in APITemplate.io (e.g., "Dark Mode", "Minimalist") and use a Random node to vary the visual style of your carousels.
3. **Tone Adjustment:** Modify the System Message in the **Convert whitepaper to carousel** node to change the writing style (e.g., make it more academic or more casual).

## Need Help?

* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [Automated LinkedIn Carousels: Turn White Papers into Content with n8n](https://youtu.be/fcWlF0Bza80)

## 🔗 Nodes Used

Google Sheets, Slack, APITemplate.io, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
