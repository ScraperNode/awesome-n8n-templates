# 📊 Scrape & analyse Meta Ad Library image ads with Apify and OpenAI

> ⚡ **1,835 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Meta Image Ads Analyzer**
This n8n template builds an automated system to scrape, analyze, and extract insights from Meta advertising content. The workflow uses AI to perform deep analysis of image ads and organize the results in a structured format.

**How it works**
* The workflow connects to Facebook's Ad Library to scrape image ads based on a specified page ID.
* Images are filtered by reach and days running, then processed through OpenAI's GPT-4o to analyze their content.
* Each image ad is systematically analyzed to extract key components: visual description, hook elements, main offer, call-to-action, and psychological triggers.
* Results are processed through an AI agent that structures the data into standardized fields.
* Original images are saved to Google Drive for reference.
* All analysis and metadata are saved to a Google Sheet for easy access and further processing.

**How to use** 
Once you've set up your credentials and configured the output:
* Enter the Meta Ad Library URL you want to analyze in the Settings node.
* Adjust the maximum number of ads to scrape and analyze based on your needs (defaults: 300 to scrape, 10 to analyze).
* Configure the Google Drive folder to save the original ad images.
* Ensure your Google Sheets connection is set up to receive the structured analysis.
* Click "Test Workflow" to start the analysis process.

**Requirements**
* Apify account (for Meta Ad Library scraping)
* OpenAI API key (for image analysis)
* Google Drive and Google Sheets access

**Customizing this workflow**
* Modify the AI prompts in the "Analyze Image Contents" node to extract different information from the images.
* Adjust the output formats in the Structured Output Parser node.
* Change the Google Sheets mapping to match your desired output structure.
* Increase the number of ads analyzed for more comprehensive research.
* Filter ads based on different criteria by modifying the "Filter only Image Ads" node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
