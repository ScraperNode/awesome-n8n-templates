# 📊 Analyze YouTube channels & send performance reports with GPT-4o-mini and Gmail

> ⚡ **59 views** · 📊 [Market Research & Insights](../)

## Description

## **Analyze YouTube Channels & Email Actionable Insights with GPT-4o-mini, RapidAPI, and Gmail**

## Description
Automate **YouTube channel analysis** by fetching channel data, generating a **key metrics table** and actionable insights using **Azure OpenAI (GPT-4o-mini)**, and delivering the results via email. Integrates **YouTube Data API (RapidAPI)**, Google Sheets, and Gmail/SMTP for seamless reporting.

## What This Template Does
- **Fetches** YouTube channel IDs from a Google Sheet.
- **Extracts** detailed channel data using the YouTube Data API (RapidAPI).
- **Processes** and structures channel metrics for analysis.
- **Generates** a key metrics table and actionable insights using Azure OpenAI (GPT-4o-mini).
- **Delivers** a professional HTML report to your email.

## Key Benefits
- **Saves time** with automated channel performance analysis.
- **Delivers clear, actionable insights** in a mobile-friendly email.
- **Enables no-code customization** for different channels or recipients.
- **Supports multi-channel batch processing.**
- **Ensures secure handling** of credentials and sensitive data.

## Features
- **YouTube channel data extraction** via RapidAPI.
- **Google Sheets integration** for channel management.
- **AI-powered analysis** with Azure OpenAI (GPT-4o-mini).
- **Professional HTML email reports** with channel links.
- **Node renaming** for workflow clarity.
- **Batch processing** for multiple channels.

## Requirements
- **n8n instance** (cloud or self-hosted).
- **YouTube Data API access via RapidAPI** (API key stored in n8n credentials).
- **Azure OpenAI account** with GPT-4o-mini deployed (API key in n8n credentials).
- **Gmail or SMTP email account** connected in n8n credentials for report delivery.
- **Google Sheets integration** (OAuth2 credentials) for reading channel IDs.
- All credentials must be **securely managed in n8n**.

## Target Audience
- **YouTube creators** seeking data-driven channel insights.
- **Digital marketers** optimizing content strategies.
- **Agencies** managing multiple client channels.
- **Content strategists** and analytics teams.
- **Operations teams** automating reporting workflows.

## Step-by-Step Setup Instructions (Concise)
- **Enable YouTube Data API (RapidAPI)** and add the API key in n8n Credentials.
- **Deploy GPT-4o-mini** in Azure OpenAI and add credentials in n8n.
- **Connect your Gmail/SMTP account** in n8n Credentials and authorize sending.
- **Import the workflow**, assign credentials to each node, and replace placeholders.
- **Rename the email node** to “Deliver YouTube Report via Gmail” for clarity.
- **Run once to test**, then schedule as needed.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
