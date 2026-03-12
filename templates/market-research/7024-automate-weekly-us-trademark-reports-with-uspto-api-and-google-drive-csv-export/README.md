# 📊 Automate weekly US trademark reports with USPTO API and Google Drive CSV export

> ⚡ **71 views** · 📊 [Market Research & Insights](../)

## Description

**Title:**
⚙️ Deep Dive: Automating Weekly US Trademark Reports with n8n, RapidAPI & Google Drive (No-Code Workflow)

---

**Full Breakdown Post:**

In this in-depth walkthrough, we're exploring a **powerful no-code automation** built entirely using [n8n](https://n8n.io), that automatically fetches the **latest US trademark registrations every 7 days**, saves them to a CSV, and uploads that file to your **Google Drive** — no manual effort required.

Whether you're a **startup founder**, **legal tech builder**, or **data analyst**, this type of automation can save you hours every week and give you a real-time pulse on newly registered trademarks in the US.

---

### ⚙️ **What This Workflow Does:**

Every week, the workflow automatically:

1. **Triggers on a schedule**
2. **Calculates the date range** (today and 7 days prior)
3. **Fetches trademark data** from the USPTO via a RapidAPI endpoint
4. **Splits the API response** into individual rows
5. **Converts it into a CSV file**
6. **Uploads the file to Google Drive** with a dynamic name like:

   ```
   Active TM (2025-07-29 - 2025-08-05).csv
   ```

---

### 🔍 Node-by-Node Breakdown

---

#### **1. Schedule Trigger**

* **Node**: `Schedule Trigger`
* **Purpose**: Starts the workflow every 7 days

---

#### **2. Date & Time**

* **Node**: `Date & Time`
* **Purpose**: Captures the current timestamp in ISO format to use for calculations.

---

#### **3. Manual (Set Start & End Dates)**

* **Node**: `Set`

* **Purpose**: Assigns two dynamic values:

  * `Start_Date`: Current date minus 7 days
  * `End_Date`: Current date (today)

---

#### **4. HTTP Request: Get Trademark Data**

* **Node**: `HTTP Request`
* **Method**: POST

This returns an array of trademark records from USPTO's database that were registered in the past week.

---

#### **5. Split the Array into Items**

* **Node**: `Code`

This takes the `results` array from the HTTP response and flattens it so that each trademark record becomes its own item in n8n's context.

---

#### **6. Convert to CSV File**

* **Node**: `Convert to File`
* **File Name**: `test.csv` (you can change this dynamically if needed)

This node takes all the individual trademark JSON objects and generates a CSV file out of them.

---

#### **7. Upload to Google Drive**

* **Node**: `Google Drive`
* **Folder ID**: Your target folder’s ID
* **Dynamic Name**:

  ```js
  =Active TM ({{ $('Manual').item.json.Start_Date }} - {{ $('Manual').item.json.End_Date }})
  ```

This uploads the generated CSV file directly into your specified Google Drive folder with the correct name and date range.

---

### 🧠 Why This is Powerful

* **Zero maintenance** once configured
* **Always fresh** trademark data weekly
* Ideal for **market research**, **brand monitoring**, **IP tracking**
* Fully **serverless**... all you need is n8n, a RapidAPI key, and Google Drive access

---

### 🛡️ Disclaimer

&gt; **DISCLAIMER: THIS IS FOR EDUCATIONAL PURPOSES ONLY. THE CREATOR IS NOT LIABLE FOR ANY LOSSES OR DAMAGES CAUSED BY MISUSE OF THIS WORKFLOW.**

---

### 🚀 Final Thoughts

With this one workflow, you're building a **production-grade automation pipeline** that would otherwise take a full dev sprint to manually script and deploy.

Use it, extend it, and plug it into other workflows like:

* Auto-emailing the report
* Pushing to Google Sheets
* Generating insights via AI

n8n is your playground — this is just the beginning.

## 🔗 Nodes Used

HTTP Request, Google Drive, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
