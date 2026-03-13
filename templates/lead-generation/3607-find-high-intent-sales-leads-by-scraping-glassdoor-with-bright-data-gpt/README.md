# 🎣 Find high-intent sales leads by scraping Glassdoor with Bright Data & GPT

> ⚡ **2,261 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 🔍 Scrape Glassdoor with Bright Data

**Designed for sales teams, recruiters, and marketers** aiming to automate job discovery and prospecting.

This workflow scrapes **Glassdoor** job listings using **Bright Data** and automatically generates targeted pitches using **AI**, streamlining lead identification and outreach.

---

### 🧩 How It Works

This automation leverages **n8n**, **Bright Data**, **Google Sheets**, and **OpenAI**:

#### 1. Trigger
- Starts with a custom **form input** (Location, Keyword, Country).

#### 2. Bright Data Job Scrape
- Triggers a Bright Data **dataset snapshot** via HTTP Request.
- Polls snapshot progress using a **Wait node**, ensuring data readiness.
- Retrieves full job listings dataset once ready.

#### 3. Google Sheets Integration
- Writes detailed job data (company, role, location, overview, metrics) into a Google Sheet.
- Uses a **pre-built template** for organized data storage.

#### 4. Automated Pitch Generation (AI)
- Splits listings into actionable parts: company name, title, and description.
- Sends data to **OpenAI (via LangChain)** to generate relevant pitches or icebreakers.
- Saves generated content back into the same sheet for easy access.

---

### ✅ Requirements

Ensure you have the following:

#### Google Sheets
- Google account  
- [Template Sheet](https://docs.google.com/spreadsheets/d/1ZYRk83hNIQCyQNaKpchdnbTiapVxE4aG6ZFIQlwEoWM/edit?usp=sharing) with columns for job details and AI-generated pitches

#### Bright Data
- Active account with **Dataset API access**  
- API key and dataset ID

#### OpenAI
- Valid **OpenAI API key** for GPT models

#### n8n Environment
- Nodes: `HTTP Request`, `Wait`, `If`, `Google Sheets`, `Split Out`, `LangChain (OpenAI)`
- Credentials:
  - Google Sheets OAuth2
  - Bright Data API credentials
  - OpenAI API key

---

### ⚙️ Setup Instructions

**Step 1: Prepare Google Sheets**  
- Copy the provided [Google Sheets template](#)  
- Do not change headers

**Step 2: Import & Configure Workflow in n8n**  
- Import the workflow JSON file  
- Set Google Sheets node:
  - Link to your copied sheet  
  - Confirm correct tab name  

**Step 3: Configure Bright Data**  
- Replace `&lt;YOUR_BRIGHT_DATA_API_KEY&gt;` with your real key  
- Set your dataset ID in all HTTP Request nodes

**Step 4: Configure OpenAI (LangChain)**  
- Connect OpenAI API key to the LangChain node  
- Customize prompt to match tone and outreach style

**Step 5: Testing & Scheduling**  
- Test via manual form trigger  
- Schedule runs or leave form enabled for on-demand use

---

### 🧠 Tips & Best Practices

- Use **specific keywords** and locations for better results  
- Adjust polling intervals based on dataset size  
- Refine AI prompts regularly to improve pitch quality  
- Clean unused columns from your sheet to boost performance

---

### 💬 Support & Feedback

For help or customization:

📧 Email: [Yaron@nofluff.online](mailto:Yaron@nofluff.online)  
📺 YouTube: [@YaronBeen](https://www.youtube.com/@YaronBeen)  
🔗 LinkedIn: [linkedin.com/in/yaronbeen](https://linkedin.com/in/yaronbeen)  

📚 **Bright Data Docs**: [docs.brightdata.com/introduction](https://docs.brightdata.com/introduction)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
