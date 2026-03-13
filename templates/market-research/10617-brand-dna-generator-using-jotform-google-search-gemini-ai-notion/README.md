# 📊 Brand DNA generator using JotForm, Google Search, Gemini AI & Notion

> ⚡ **62 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Automated Brand DNA Generator Using JotForm, Google Search, AI Extraction & Notion

The Brand DNA Generator workflow automatically scans and analyzes online content to build a company’s Brand DNA profile.  It starts with input from a form, then crawls the company’s website and Google search results to gather relevant information. Using AI-powered extraction, the system identifies insights such as value propositions, ideal customer profiles (ICP), pain points, proof points, brand tone, and more.  All results are neatly formatted and automatically saved to a Notion database as a structured Brand DNA report, eliminating the need for manual research.

## 🛠️ Key Features
- Automated data capture, collects company data directly from form submissions and Google search results.  
- Uses AI-powered insight extraction with LLMs to extract and summarize brand-related information from website content.  
- Fetches clean text from multiple web pages using HTTP requests and a content extractor.  
- Merges extracted data from multiple sources into a single Brand DNA JSON structure.  
- Automatically creates a new page in Notion with formatted sections (headings, paragraphs, and bullet points).  
- Handles parsing failures and processes multiple pages efficiently in batches.

## 🔧 Requirements
- JotForm API Key, to capture company data from form submissions.  
- SerpAPI Key, to perform automated Google searches.  
- OpenRouter / LLM API, for AI-based language understanding and information extraction.  
- Notion Integration Token & Database ID, to save the final Brand DNA report to Notion.

## 🧩 Setup Instructions
1. Connect your JotForm account and select the form containing the fields Company Name and Company Website.  
2. Add your SerpAPI Key.  
3. Configure the AI model using OpenRouter or LLM.  
4. Enter your Notion credentials and specify the databaseId in the Create a Database Page node.  
5. Customize the prompt in the Information Extractor node to modify the tone or structure of AI analysis (Optional).  
6. Activate the workflow, then submit data through the JotForm to test automatic generation and Notion integration.

## 💡 Final Output  
A complete Brand DNA Report containing:
- Company Description  
- Ideal Customer Profile  
- Pain Points  
- Value Proposition  
- Proof Points  
- Brand Tone  
- Suggested Keywords  
All generated automatically from the company’s online presence and stored in Notion with no manual input required.

## 🔗 Nodes Used

HTTP Request, Jotform Trigger, Notion, Information Extractor, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
