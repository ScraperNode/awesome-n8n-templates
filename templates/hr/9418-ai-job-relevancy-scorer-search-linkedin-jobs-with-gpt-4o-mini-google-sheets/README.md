# 👥 AI job relevancy scorer: Search LinkedIn Jobs with GPT-4o-mini & Google Sheets

> ⚡ **1,229 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 🧠 Workflow Overview — AI-Powered Jobs Scraper & Relevancy Evaluator

This workflow automates the process of finding **highly relevant job listings** based on a user’s **resume**, **career preferences**, and **custom filters**. It scrapes fresh job data, evaluates relevance using **OpenAI GPT models**, and automatically appends the results to your **Google Sheet tracker** — while **skipping any jobs already in your sheet**, so you don’t have to worry about duplicates.

Perfect for recruiters, job seekers, or virtual assistants who want to automate job research and filtering.

---

## ⚙️ What the Workflow Does

1. **Takes user input through a form** — including resume, preferences, target score, and Google Sheet link.
2. **Fetches job listings** via an **Apify LinkedIn Jobs API actor**.
3. **Filters and deduplicates results** (removes duplicates and blacklisted companies).
4. **Evaluates job relevancy** using **GPT-4o-mini**, scoring each job (0–100) against the user’s resume & preferences.
5. **Applies a relevancy threshold** to keep only top-matching jobs.
6. **Checks your Google Sheet for existing jobs** and prevents duplicates.
7. **Appends new, relevant jobs** directly into your provided **Google Sheet**.

---

## 📋 What You’ll Get

* A personal **Job Scraper Form** (public URL you can share or embed).
* Automatic **job collection & filtering** based on your inputs.
* **Relevance scoring** (0–100) for each job using your resume and preferences.
* Real-time **job tracking Google Sheet** that includes:

  * Job Title
  * Company Name & Profile
  * Job URLs
  * Location, Salary, HR Contact (if available)
  * Relevancy Score

---

## 🪄 Setup Instructions

### **1. Required Accounts**

You’ll need:

* ✅ **n8n account** (self-hosted or Cloud)
* ✅ **Google account** (for Sheets integration)
* ✅ **OpenAI account** (for GPT API access)
* ✅ **Apify account** (to fetch job data)

---

### **2. Connect Credentials**

In your n8n instance:

1. Go to **Credentials** → **Add New**:

   * **Google Sheets OAuth2 API**

     * Connect your Google account.
   * **OpenAI API**

     * Add your OpenAI API key.
   * **Apify API**

     * Replace `&lt;your_apify_api&gt;` with your apify api key.

2. **Set Up Apify API**
 
    **Get your Apify API key**

   * Visit: https://console.apify.com/settings/integrations

   * Copy your API key.


   **Rent the required Apify actor before running this workflow**

     * Go to: https://console.apify.com/actors/BHzefUZlZRKWxkTck/input

      * Click “Rent Actor”.

Once rented, it can be used by your Apify account to fetch job listings.

---

### **3. Set Up Your Google Sheet**

1. **Make a copy** of this template:
   [📄 Google Sheet Template](https://docs.google.com/spreadsheets/d/1Pabh4GDMc0CBK5S6gn8FxpRgLbyXZVN656JNkBH6f7Y)
2. **Enable Edit Access** for anyone with the link.
3. Copy your sheet’s URL — you’ll provide this when submitting the workflow form.

---

### **4. Deploy & Run**

1. Import this workflow (`jobs_scraper.json`) into your n8n workspace.

2. Activate the workflow.

3. Visit your form trigger endpoint (e.g. `https://your-n8n-domain/webhook/jobs-scraper`).

4. Fill out the form with:

   * Job title(s)
   * Location
   * Contract type, Experience level, Working mode, Date posted
   * Target relevancy score
   * Google Sheet link
   * Resume text
   * Job preferences or ranking criteria

5. Submit — within minutes, new **high-relevance job listings** will appear in your Google Sheet automatically.

---

## 🧩 Example Use Cases

* Automate **daily job scraping** for clients or yourself.
* Filter jobs by **AI-based relevance** instead of keywords.
* Build a **smart job board or job alert system**.
* Support a **career agency** offering done-for-you job search services.

---

## 💡 Tips

* Adjust the “Target Relevancy Score” (e.g., 70–85) to control how strict the filtering is.
* You can add your own **blacklisted companies** in the `Filter & Dedup Jobs` node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
