# 🎯 Extract specific website data with form input, Gemini 2.5 flash and Gmail

> ⚡ **2,162 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## What this workflow does

This workflow creates an automated web scraper that accepts form submissions, extracts specific data from any website using AI, and emails the results back to you.

**Step by step:**
1. **Web Scraper Form Submission** provides a web form interface where users submit a URL and specify what data to extract
2. **Get HTML from Source URL** fetches the complete HTML content from the provided website
3. **HTML Extractor** processes the raw HTML and extracts the body content for analysis
4. **Data Extractor LLM Chain** uses Google Gemini AI to intelligently analyze the content and extract only the specific data requested by the user
5. **Structured Output Parser** formats the AI response into clean JSON structure with standardized format
6. **Gmail Send Result** delivers the extraction results via email including the source URL, extraction request details, and clean extracted results

## How to set up

1. **Connect your Google Gemini API** to the Google Gemini Chat Model node for AI-powered data extraction
2. **Connect your Gmail account** to the Gmail node for sending result emails
3. **Update the recipient email** in the Gmail node
4. **Customize the extraction prompt** in the Data Extractor LLM Chain node based on your specific requirements

## How to customize this workflow to your needs

* **Switch AI models**: Replace Google Gemini with OpenAI, Claude, or other LLM providers in the Chat Model node based on your accuracy requirements and budget preferences
* **Change result delivery**: Replace Gmail with Google Sheets for data storage, Outlook for corporate email, Slack for team notifications, or webhook integrations for custom applications
* **Customize extraction prompts**: Modify the LLM prompt in the Data Extractor Chain to handle specific data types, extraction formats, or industry-specific terminology for your use case

## Need help customizing?

**Contact me for consulting and support:**   
📧 **billychartanto@gmail.com**

## 🔗 Nodes Used

HTTP Request, Gmail, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
