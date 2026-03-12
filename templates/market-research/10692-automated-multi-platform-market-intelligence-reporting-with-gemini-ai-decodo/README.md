# 📊 Automated multi-platform market intelligence reporting with Gemini AI & Decodo

> ⚡ **91 views** · 📊 [Market Research & Insights](../)

## Description

## 💡 What Problem Does It Solve?
Businesses waste countless hours manually gathering online insights across platforms.

Marketing and strategy teams need fast, structured visibility into what customers are saying and what competitors are promoting across regions and platforms.

This workflow automates that process end-to-end by:
- **Monitoring multiple platforms** (Facebook, Instagram, Google) across all selected regions.
- **Extracting and cleaning live data** with precision and compliance through **Decodo’s advanced web intelligence engine**.

- **Providing AI summaries:** It uses specialized AI agents to analyze the raw text and structure it into key insights.

- **Delivering a clear, ready-to-read daily report** directly to your inbox — no dashboards, no manual effort.

## ⚙️ How to Configure It

**1. Set Up the Decodo Connection**
- In n8n, create a new **Decodo Web Intelligence credential**.
- Paste your **Decodo** authentication token (available in your Decodo dashboard under “Web Scraping API”).

[Setup Manual](https://github.com/Decodo/n8n-nodes-decodo/tree/main) 

**2. Choose Your Regions and Topics**
- Edit the “Set – Regions” node to list your markets
- Add your key search topics or terms

**3. Review the AI-Generated Insights**
- **Decodo** fetches and cleans the latest content from social and web sources.

- Gemini-based AI agents summarize it into a structured report segmented by region and platform.

- The workflow emails the insights automatically, providing a quick morning market snapshot.
### ✨ Why It Works So Well
**Decodo** provides the backbone — real-time, clean, and region-specific data — while AI transforms that data into business intelligence you can act on.

If you need any help [Get in Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
