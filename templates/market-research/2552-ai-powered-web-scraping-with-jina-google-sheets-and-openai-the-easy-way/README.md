# 📊 AI powered web scraping with Jina, Google Sheets and OpenAI : the EASY way

> ⚡ **51,202 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Purpose of workflow:**
The purpose of this workflow is to automate  scraping of a website, transforming it into a structured format, and loading it directly into a Google Sheets spreadsheet. 

**How it works:**

1. Web Scraping: Uses the Jina AI service to scrape website data and convert it into LLM-friendly text.
2. Information Extraction: Employs an AI node to extract specific book details (title, price, availability, image URL, product URL) from the scraped data.
3. Data Splitting: Splits the extracted information into individual book entries.
4. Google Sheets Integration: Automatically populates a Google Sheets spreadsheet with the structured book data.

**Step by step setup:**

1. Set up Jina AI service:
   - Sign up for a Jina AI account and obtain an API key.


2. Configure the HTTP Request node:
   - Enter the Jina AI URL with the target website.
   - Add the API key to the request headers for authentication.

3. Set up the Information Extractor node:
   - Use Claude AI to generate a JSON schema for data extraction.
   - Upload a screenshot of the target website to Claude AI.
   - Ask Claude AI to suggest a JSON schema for extracting required information.
   - Copy the generated schema into the Information Extractor node.

4. Configure the Split node:
   - Set it up to separate the extracted data into individual book entries.

5. Set up the Google Sheets node:
   - Create a Google Sheets spreadsheet with columns for title, price, availability, image URL, and product URL.
   - Configure the node to map the extracted data to the appropriate columns.

## 🔗 Nodes Used

Google Sheets, HTTP Request, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
