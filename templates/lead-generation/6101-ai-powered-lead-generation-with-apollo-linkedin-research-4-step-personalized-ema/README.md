# 🎣 AI-powered lead generation with Apollo, LinkedIn research & 4-step personalized emails

> ⚡ **234 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview

This workflow finds potential customers, gathers detailed info about them and their companies, and then uses AI to research them in detail and write personalized messages for LinkedIn and a series of four cold emails. All this data is organized in Google Sheets for easy tracking and use.
## Use Case

This tool is perfect for **salespeople, marketers, and business owners**. It saves you a lot of time by automating lead finding, research, and email writing. This helps you send many personalized messages quickly, leading to more replies and better sales.
## How It Works

You start by telling the workflow who you want to reach (e.g., "Marketing Agencies," "New York," "COOs"). The workflow then uses **scrapers** (from Apify) to find these people on Apollo.io and LinkedIn, collecting their contact details and company information.

Next, an **AI analyzes all this data**. It creates a detailed report on each company, including what they do, their strengths, recent news, and possible challenges they face. This report helps the AI then write a friendly **LinkedIn message opener** and a **4-part hyper-personalised cold email series** specifically for each person. These emails cover problems you can solve, success stories, and a clear next step. Finally, all the prospect details and generated messages are saved neatly in your Google Sheets.

## How to Set It Up

1.  **Scrapers:** Go to **Apify**, get your API Token from "API & Integrations," and put it into the scraper nodes in the workflow.
2.  **Google Sheets:** Copy the provided **Google Sheet template**. Then, add your email addresses to the "Assign Sender Email" node so the workflow can choose who sends the emails.
3.  **AI (OpenAI):** Add your **OpenAI API Key**. In the "About You" node, fill in information about *your company* and *your skills* so the AI can write super relevant messages.
4.  **Test:** Run the workflow using the "Enter Target Audience" form. You can set how often it runs. If you need help, check the [detailed guide](https://drive.google.com/file/d/1m76gYhNqPUdRMBtlXlDgMrF1z2T3rf8u/view) or email `info.gainflow@gmail.com`.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
