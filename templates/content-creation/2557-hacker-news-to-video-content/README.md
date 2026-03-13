# 🎬 Hacker News to video content

> ⚡ **58,149 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Hacker News to Video Content

## Overview
This workflow converts trending articles from **Hacker News** into engaging video content. It integrates AI-based tools to analyze, summarize, and generate multimedia content, making it ideal for content creators, educators, and marketers.

---

## Features
1. **Article Retrieval**:
   - Pulls trending articles from **Hacker News**.
   - Limits the number of articles to process (configurable).

2. **Content Analysis**:
   - Uses OpenAI's GPT model to:
     - Summarize articles.
     - Assess their relevance to specific topics like automation or AI.
     - Extract key image URLs.

3. **Image and Video Generation**:
   - **Leonardo.ai**: Creates stunning AI-generated images based on extracted prompts.
   - **RunwayML**: Converts images into high-quality videos.

4. **Structured Content Creation**:
   - Parses content into structured formats for easy reuse.
   - Generates newsletter-friendly blurbs and social media-ready captions.

5. **Cloud Integration**:
   - Uploads generated assets to:
     - **Dropbox**
     - **Google Drive**
     - **Microsoft OneDrive**
     - **MinIO**

6. **Social Media Posting** (Optional):
   - Supports posting to **YouTube**, **X (Twitter)**, **LinkedIn**, and **Instagram**.

---

## Workflow Steps

### 1. **Trigger**
- Initiated manually via the "Test Workflow" button.

### 2. **Fetch Articles**
- Retrieves articles from Hacker News.
- Limits the results to avoid processing overload.

### 3. **Content Filtering**
- Evaluates if articles are related to AI/Automation using OpenAI's language model.

### 4. **Image and Video Generation**
- Generates:
  - AI-driven image prompts via **Leonardo.ai**.
  - Videos using **RunwayML**.

### 5. **Asset Management**
- Saves the output to cloud storage services or uploads directly to social media platforms.

---

## Prerequisites

- **API Keys**:
  - Hacker News
  - OpenAI
  - Leonardo.ai
  - RunwayML
  - Creatomate

- **n8n Installation**:
  Ensure n8n is installed and configured locally or on a server.

- **Credentials**:
  Set up credentials in n8n for all external services used in the workflow.

---

## Customization
- Replace **Hacker News** with any other data source node if needed.
- Configure the "Article Analysis" node for different topics.
- Adjust the cloud storage services or add custom storage options.

---

## Usage
1. Import this workflow into your n8n instance.
2. Configure your API credentials.
3. Trigger the workflow manually or schedule it as needed.
4. Check the outputs in your preferred cloud storage or social media platform.

---

## Notes
- Extend this workflow further by automating **social media posting** or **newsletter integration**.
- For any questions, refer to the [official documentation](https://docs.n8n.io) or reach out to the creator.

---

### About the Creator
This workflow was built by [AlexK1919](https://beacons.ai/alexk1919), an AI-native workflow automation architect. Check out the [overview video](https://youtu.be/XaKybLDUlLk) for a quick demo.

---

### Tools Used
- **Leonardo.ai**
- **RunwayML**
- **Creatomate**
- **Hacker News API**
- **OpenAI GPT**

Feel free to adapt and extend this workflow to meet your specific needs! 🎉

## 🔗 Nodes Used

Dropbox, HTTP Request, Google Drive, Microsoft OneDrive, X (Formerly Twitter), Hacker News

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
