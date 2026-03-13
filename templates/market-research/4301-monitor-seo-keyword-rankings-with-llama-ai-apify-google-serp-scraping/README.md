# 📊 Monitor SEO keyword rankings with LLaMA AI & Apify Google SERP scraping

> ⚡ **804 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this template for?

This SEO Keyword Monitoring workflow template is perfect for SEO professionals, digital marketing agencies, website owners, and content strategists who need to track their search rankings and get actionable insights when they're not performing well. Whether you're managing multiple client sites, monitoring your own brand's visibility, or conducting competitive analysis, this automation provides comprehensive rank tracking with AI-powered recommendations.

![Monitor SEO Keyword Rankings with AIpowered Google Search API Scraping n8n workflow.png](fileId:1357)

## What problem does this workflow solve?

Manual keyword rank tracking is time-consuming and often provides limited actionable insights. SEO professionals typically struggle with:

- Manually checking search rankings across different countries and languages
- Identifying why a website isn't ranking for target keywords
- Getting specific, actionable recommendations for SEO improvements
- Tracking competitor performance and market positioning
- Scaling rank monitoring across multiple keywords and domains
- Generating professional reports for clients or stakeholders

## What this workflow does

This n8n workflow automates comprehensive SEO keyword monitoring with intelligent analysis and reporting. It tracks your rankings in Google search results and provides AI-powered insights when your site isn't performing as expected.

Here's what it includes:

- **Multi-language web form** that accepts keyword, domain, country (24 options), and language (12 options)
- **Intelligent localization** that converts country/language selections into proper API codes
- **Real-time Google SERP scraping** using Apify's Google Search API (up to 100 results per query)
- **Automated rank detection** that checks if your domain appears in the search results
- **Dual email reporting system:**
  - **Success reports:** Beautiful HTML tables showing your rankings, competitor positions, titles, URLs, and descriptions
  - **AI-powered improvement reports:** When your site doesn't rank, an AI agent (LLaMA 70B) analyzes the search results and provides specific, actionable SEO recommendations
- **Professional email formatting** with HTML markup for easy sharing with clients or teams

## Setup

Getting started is straightforward:

### Connect your Apify account

- Sign up for a free [Apify account 🡥](https://www.apify.com?fpr=z2bab)
- Get your Personal API Token from **Settings → API & Integrations**
- Replace `YOUR_API_TOKEN` in the HTTP Request node with your actual token

### Configure the AI model

- The workflow uses **Groq AI with LLaMA 70B** by default
- Connect your Groq account or replace with **OpenAI**, **Claude**, or another LLM
- The AI agent analyzes search results and provides tailored SEO recommendations

### Set up email delivery / data export

- Configure the **Mailjet** nodes with your email credentials
- Or replace with **Gmail**, **Outlook**, **SMTP**, or other email providers
- Or replace with/add **Google Sheets**, **Airtable**, **Notion** or similar service, for data storage
- Set your sender and recipient email addresses

### Test the workflow

- Click **"Test workflow"** to access the web form
- Enter a keyword, domain, country, and language
- Check your email for either ranking results or AI-powered recommendations

### Activate the workflow

- Turn on the trigger so you can access the form anytime
- Share the form URL with team members or clients

## How to customize this workflow

This template is highly flexible and can be adapted for various SEO monitoring needs:

- **Scale up monitoring:** Add loops to track multiple keywords simultaneously
- **Alternative outputs:** Replace email nodes with **Google Sheets**, **Airtable**, or **Notion** for data storage
- **Team notifications:** Connect to **Slack**, **Discord**, or **Microsoft Teams** for instant alerts
- **Scheduled monitoring:** Add **cron triggers** for daily, weekly, or monthly automated checks
- **Enhanced analysis:** Integrate additional AI models for deeper competitive analysis
- **Custom reporting:** Modify the HTML templates to match your brand or client requirements
- **Data persistence:** Add **database connections** to store historical ranking data
- **Competitor tracking:** Expand the logic to monitor multiple domains for the same keywords

## Key features

- **24 country support:** Track rankings in major markets worldwide
- **12 language options:** Monitor multilingual SEO performance
- **AI-powered insights:** Get specific recommendations when rankings are low
- **Professional reporting:** HTML-formatted emails ready for client delivery
- **Competitor analysis:** See who's ranking above you with full SERP data
- **Scalable architecture:** Easy to extend for enterprise-level monitoring

This workflow transforms manual rank checking into an intelligent, automated system that not only tracks your performance but actively helps you improve it with AI-driven recommendations. Developed by [Gegenfeld 🡥](https://gegenfeld.com) and [codecope 🡥](https://codecope.org/) in Berlin, Germany.

## 🔗 Nodes Used

HTTP Request, Mailjet, AI Agent, n8n Form Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
