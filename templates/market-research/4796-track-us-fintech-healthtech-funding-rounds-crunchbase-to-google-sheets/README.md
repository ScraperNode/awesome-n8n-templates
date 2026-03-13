# 📊 Track US fintech & healthtech funding rounds: Crunchbase to Google Sheets

> ⚡ **538 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Track US Fintech & Healthtech Funding Rounds: Crunchbase to Google Sheets

### 🌍 **Overview**

This workflow fetches the **latest funding rounds from Crunchbase** (filtered by industry + location), formats the results, and saves them neatly into **Google Sheets** every day.

You end up with a **live deal flow tracker** that updates itself!

---

## 🟢 Section 1: Schedule & Data Fetch

🔗 **Nodes:**
1️⃣ **Daily Check for New Funding Rounds (Schedule Trigger)**
⏰ Runs automatically **every morning at 8 AM**.

* Why it’s useful: You don’t need to run it manually.

2️⃣ **Fetch Crunchbase Funding Rounds (HTTP Request)**
🌐 Pulls funding rounds from Crunchbase’s API.

* Filters:

  * 📍 Location → *United States*
  * 🏭 Industry → *Fintech, Healthtech*
  * ⏳ Sorted → newest first
  * 📄 Limit → 25 per run

💡 **Beginner Benefit**:
✅ No coding required to hit Crunchbase API
✅ Automated — always fetches fresh funding data

---

## 🔵 Section 2: Extract & Format

🔗 **Nodes:**
3️⃣ **Extract & Format Funding Data (Code)**
📑 Converts Crunchbase API JSON into **clean, readable rows** with:

* 🏢 Company Name
* 🏭 Industry
* 💵 Money Raised (USD)
* 📅 Announced Date
* 🏷️ Funding Round Type
* 👥 Investors
* 🔗 Crunchbase URL

💡 **Beginner Benefit**:
✅ No messy JSON → clean structured output
✅ Auto-creates a link to each funding round

---

## 🟣 Section 3: Save to Sheets

🔗 **Nodes:**
4️⃣ **Save to Google Sheets**
📊 Appends the formatted funding round data into your Google Sheet.

* Columns: Company, Industry, Investors, Amount, Date, URL, etc.

💡 **Beginner Benefit**:
✅ Data goes directly into Google Sheets → no copy-paste
✅ You can filter, chart, or connect Sheets to dashboards

---

## 📊 Final Overview

| Section   | What Happens          | Why It’s Useful                                 |
| --------- | --------------------- | ----------------------------------------------- |
| 🟢 Fetch  | Scheduler + API fetch | Always pulls new Crunchbase deals automatically |
| 🔵 Format | Extract + clean JSON  | Turns raw API data into readable rows           |
| 🟣 Save   | Google Sheets         | Creates your own funding tracker sheet          |

---

## 🚀 Why This Workflow is a Game-Changer

* ⏱️ **Zero manual work** → Wake up to fresh funding data daily
* 📊 **Deal flow in Sheets** → Perfect for VCs, founders, analysts
* 🔍 **Customizable filters** → Change location, industry, or # of results
* 🔗 **Action-ready** → Use Sheets to track trends, outreach investors, or monitor competitors

---

✨ With this workflow, you’ve basically built your **own Crunchbase alerts dashboard** — no coding required!

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
