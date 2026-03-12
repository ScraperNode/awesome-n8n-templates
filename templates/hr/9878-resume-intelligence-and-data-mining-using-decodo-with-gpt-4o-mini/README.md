# 👥 Resume intelligence and data mining using Decodo with GPT-4o-mini

> ⚡ **588 views** · 👥 [HR & Recruitment](../)

## Description

## 1. Who this is for

This workflow is specifically designed for

* Recruiters, HR analytics teams, and data-driven talent acquisition professionals seeking deeper insights from candidate resume.
* Valuable for HR tech developers, ATS/CRM engineers, and AI-driven recruitment platforms aiming to automate candidate research.
* Helps organizations build predictive hiring models and gain actionable talent intelligence.


## 2. What problem this workflow solves

Recruiters often face information overload when analyzing candidate resume manually reviewing experiences, skills, and cultural fit is slow and inconsistent.

Traditional scraping tools extract raw data but fail to produce actionable intelligence like career trajectory, skills alignment, and fit for a role.

This workflow solves that by:

* Automating candidate resume data extraction through Decodo
* Structuring it into JSON Resume Schema
* Running deep AI-driven analytics using OpenAI GPT-4o-mini
* Delivering comprehensive candidate intelligence ready for ATS/CRM integration or HR dashboards


## 3. What this workflow does

This n8n workflow combines Decodo’s web scraping with OpenAI GPT-4o-mini to produce advanced recruitment intelligence.

### Flow Breakdown:

1. **Manual Trigger** – Start the workflow manually or schedule it in n8n.
2. **Set Input Fields** – Define resume URL, location, and job description.
3. **Decodo Node** – Scrapes the candidate’s profile (experience, skills, education, achievements, etc.).
4. **Structured Data Extractor (GPT-4o-mini)** – Converts the scraped data into a structured JSON Resume Schema.
5. **Advanced Data Mining Engine (GPT-4o-mini)** 

– Performs:

   * **Skills Analysis** (strengths, gaps, transferable skills)
   * **Experience Intelligence** (career trajectory, leadership, project complexity)
   * **Cultural Fit Insights** (work style, communication style, agility indicators)
   * **Career Trajectory Forecasting** (promotion trends, growth velocity)
   * **Competitive Advantage Analysis** (market positioning, salary expectations)
6. **Summarizer Node** – Produces an abstractive and comprehensive AI summary of the candidate profile.
7. **Google Sheets Node** – Saves the structured insights automatically into your recruitment intelligence sheet.
8. **File Writer Node (Optional)** – Writes the JSON report locally for offline storage or integration.

The result is a data-enriched candidate intelligence report far beyond what traditional resume parsing provides.


## 4. Setup

### Prerequisites

If you are new to Decode, please signup on this link [visit.decodo.com](https://visit.decodo.com/dOxzkK)

* n8n account with workflow editor access
* Decodo API credentials
* OpenAI API key
* Google Sheets account connected via OAuth2

Make sure to install the Decodo Community node.

![Decode Community Node](fileId:3013)

### Setup Steps

1. **Import the workflow JSON** into your n8n workspace.
2. **Set credentials** for:

   * `Decodo Credentials account`
   * `OpenAI API` (GPT-4o-mini)
   * `Google Sheets OAuth2`
3. In the **“Set the Input Fields”** node, update:

   * `url` → Resume link
   * `geo` → Candidate region or country
   * `jobDescription` → Target job description for matching
4. Ensure the **Google Sheet ID** and **tab name** are correct in the “Append or update row in sheet” node.
5. Click **Execute Workflow** to start.


## 5. How to customize this workflow

You can adapt this workflow for different recruitment or analytics scenarios:

### Add Sentiment Analysis

Add another LLM node to perform sentiment analysis on candidate recommendations or feedback notes.

### Enrich with Job Board Data

Use additional Decodo nodes or APIs (Indeed, Glassdoor, etc.) to compare candidate profiles to live job postings.

### Add Predictive Fit Scoring

Insert a **Function Node** to compute a numerical "fit score" by comparing skill vectors and job requirements.

### Automate Candidate Reporting

Connect to Gmail, Slack, or Notion nodes to automatically send summaries or reports to hiring managers.

## 6. Summary

The Advanced Resume Intelligence & Data Mining via Decodo + OpenAI GPT-4o-mini workflow transforms traditional candidate sourcing into AI-driven intelligence gathering.

It integrates:

* **Decodo** → To perform webscraping of data
* **GPT-4o-mini** → to interpret, analyze, and summarize with context
* **Google Sheets** → to store structured results for real-time analysis

With this system, recruiters and HR analysts can move from data collection to decision intelligence, unlocking faster and smarter talent insights.

## 🔗 Nodes Used

Function, Google Sheets, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
