# 🎣 Automate business lead scraping from Apify to Google Sheets with data cleaning

> ⚡ **25,237 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## 🚀 Automated Lead Scraper Workflow (Apify + n8n + Google Sheets)

### 🧠 What It Does

This n8n workflow automates the process of scraping leads using **Apify**, cleaning the extracted data, and exporting it to **Google Sheets**—ready for use in outreach, prospecting, or CRM pipelines.

---

### 🔄 Workflow Steps

1. ✅ **Start** – Manually triggers the workflow.
2. 🧩 **Set Variables** – Stores required Apify credentials:

   * `APIFY_TOKEN`: Your Apify token.
   * `APIFY_TASK_ID`: The Apify task to run.
3. 🕸️ **Run Apify Scraper** – Launches the scraper and fetches the dataset.
4. 🧹 **Clean Data** – Processes scraped results to:

   * ✂️ Strip non-numeric characters from phone numbers.
   * ✉️ Format emails (lowercase + trimmed).
5. 📊 **Export to Google Sheets** – Appends clean data to your spreadsheet:

   * 🏢 `company name` → from `title`
   * 📞 `phone` → cleaned number
   * 📍 `address` → from scraped info

---

### 🛠️ Requirements

* 🕷️ **Apify Account**

  * A valid `APIFY_TOKEN`
  * An existing Apify task (`APIFY_TASK_ID`)

* 📗 **Google Sheets Access**

  * OAuth2 credentials set up in n8n (e.g., `"Google Sheets account 2"`)

---

### 🚦 How to Use

1. ⚙️ Open the **Variables** node and plug in your Apify credentials.
2. 📄 Confirm the **Google Sheets** node points to your desired spreadsheet.
3. ▶️ Run the workflow manually from the **Start** node.

---

### 📥 Output

A ready-to-use sheet of **cleaned lead data** containing:

* Company names
* Phone numbers
* Addresses

---

### 💼 Perfect For:

* Sales teams doing outbound prospecting
* Marketers building lead lists
* Agencies running data aggregation tasks

---

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
