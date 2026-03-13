# 🎯 Automate website tool analysis with Telegram, Apify, AI & Google Sheets

> ⚡ **576 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

#### Description
This powerful workflow automates the evaluation of new digital tools, websites, or platforms with the goal of assessing their potential impact on your business. By leveraging Telegram for user input, Apify for deep content extraction, advanced AI for contextual analysis, and Google Sheets for personalized data integration and record-keeping, this tool delivers clear, actionable verdicts that help you determine whether a tool is worth adopting or exploring further.

#### Key Features and Workflow
User-Friendly Input: Submit URLs of tools or websites directly through Telegram for quick and easy evaluation requests.

- Dynamic Content Extraction: The workflow retrieves detailed content from the submitted URLs using the Apify web crawler, capturing rich data for analysis.
 
- AI-Powered Cleaning & Analysis: Sophisticated AI models filter out noise, distill meaningful insights, and contextualize findings based on your business profile and goals stored in Google Sheets.
 
- Personalized Business Context: Integration with Google Sheets brings in your company’s specialization, current focus, and strategic objectives to tailor the analysis specifically to your needs.

- Structured Analysis Output: Receive a thorough, structured report including concise summaries, key considerations, business impact, benefits, risks, actionable insights, and an easy-to-understand final verdict on the tool’s relevance.
 
- Decision Support: The tool estimates effort, time to value, urgency, and confidence levels, enabling informed prioritization and strategic decision-making.
 
- Seamless Communication: Results are sent back via Telegram, ensuring you get timely and direct feedback without needing to leave your messaging app.

- Record Keeping & Tracking: All analyses and decisions are logged automatically into Google Sheets, creating a searchable knowledge base for ongoing reference and reporting.

#### Setup Instructions for Key Nodes
Telegram Trigger Node:
1. Configure your Telegram bot API credentials here.
2. Link the bot to your Telegram account to receive messages for URL submissions.

URL Extraction Node:
No credentials needed. This node extracts URLs from incoming messages for processing.

Apify Web Crawler Node Setup Guide:
Go to Apify's website, sign up for an account if you don’t have one, and get your API token from your profile’s API tokens section. Then, paste this token into the Apify Node’s API Key field in n8n.

AI Cleaning and Analysis Nodes:
1. Configure OpenRouter or compatible AI service API keys for content processing.
2. Customize prompts or models if desired to align analysis style.

Google Sheets Nodes:
1. Connect using your Google account and provide access to the specified Google Sheet.
2. Ensure sheets for Company Details and Analysis Results exist with proper columns as per this workflow.

Telegram Reply Node:
Use the Telegram bot API credentials to send analysis summaries and verdicts back to users.

###### Access and Edit the Google Sheet
You can access the Google Sheet used by this workflow here:
[Access the google sheet here](https://docs.google.com/spreadsheets/d/1RCMapKv9IPdwNz4Rp-Ma2iKzdWDEbxggYrq9K2_pU-w/edit?usp=sharing)
Please make a copy of the sheet to your own Google Drive before connecting it with this workflow. This allows you to customize the sheets, update company information, and manage analysis results securely without affecting the original template.

#### Extendibility
Beyond manual URL submissions, you can enhance this workflow by scheduling automated daily checks of new product launches from platforms like Product Hunt. The system can proactively analyze emerging tools and deliver timely updates via Telegram, email, or other channels, helping you stay ahead of innovation effortlessly.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
