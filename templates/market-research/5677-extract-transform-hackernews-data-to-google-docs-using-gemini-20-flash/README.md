# 📊 Extract & transform HackerNews data to Google Docs using Gemini 2.0 flash

> ⚡ **21,250 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

### Description
This workflow automates the process of scraping the latest discussions from HackerNews, transforming raw threads into human readable content using Google Gemini, and exporting the final content into a well-formatted Google Doc.

### Overview
This n8n workflow is responsible for extracting trending posts from the HackerNews API. It loops through each item, performs HTTP data extraction, utilizes Google Gemini to generate human-readable insights, and then exports the enriched content into Google Docs for distribution, archiving, or content creation.

### Who this workflow is for

- **Tech Newsletter Writers**:
Automate the collection and summarization of trending HackerNews posts for inclusion in weekly or daily newsletters.

- **Content Creators & Bloggers**:
Quickly generate structured summaries and insights from HackerNews threads to use as inspiration or supporting content for blog posts, videos, or social media.

- **Startup Founders & Product Builders**:
Monitor HackerNews for discussions relevant to your niche or competitors, and keep a pulse on the community’s opinions.

- **Investors & Analysts**:
Surface early signals from the tech ecosystem by identifying what’s trending and how the community is reacting.

- **Researchers & Students**:
Analyze popular discussions and emerging trends in technology, programming, and startups—enriched with AI-generated insights.

- **Digital Agencies & Consultants**:
Offer HackerNews monitoring and insight reports as a value-added service to clients interested in the tech space.

### Tools Used
- **n8n**: The core automation engine that manages the trigger, transformation, and export.

- **HackerNews API**: Provides access to trending or new HN posts.

- **Google Gemini**: Enriches HackerNews content with structured insights and human-like summaries.

- **Google Docs**: Automatically creates and updates a document with the enriched content, ready for sharing or publishing.

### How to Install
- **Import the Workflow**: Download the .json file and import it into your n8n instance.

- **Set Up HackerNews Source**: Choose whether to use the HN API (via HTTP Request node) or RSS Feed node.

- **Configure Gemini API**: Add your Google Gemini API key and design the prompt to extract pros/cons, key themes, or insights.

- **Set Up Google Docs Integration**: Connect your Google account and configure the Google Docs node to create/update a document.

- **Test and Deploy**: Run a test job to ensure data flows correctly and outputs are formatted as expected.

### Use Cases
- **Tech Newsletter Authors**: Generate ready-to-use summaries of trending HackerNews threads.

- **Startup Founders**: Stay informed on key discussions, product launches, and community feedback.

- **Investors & Analysts**: Spot early trends, technical insights, and startup momentum directly from HN.

- **Researchers**: Track community reactions to new technologies or frameworks.

- **Content Creators**: Use the enriched data to spark blog posts, YouTube scripts, or LinkedIn updates.

### Connect with Me

**Email**: ranjancse@gmail.com

**LinkedIn**: https://www.linkedin.com/in/ranjan-dailata/

**Get Bright Data**: [Bright Data](https://get.brightdata.com/5blibaeyszij ) (Supports free workflows with a small commission)

#n8n #automation #hackernews #contentcuration #aiwriting #geminiapi #googlegemini #techtrends #newsletterautomation #googleworkspace #rssautomation #nocode #structureddata #webscraping #contentautomation #hninsights #aiworkflow #googleintegration #webmonitoring #hnnews #aiassistant #gdocs #automationtools #gptlike #geminiwriter

## 🔗 Nodes Used

HTTP Request, Hacker News, Google Docs, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
