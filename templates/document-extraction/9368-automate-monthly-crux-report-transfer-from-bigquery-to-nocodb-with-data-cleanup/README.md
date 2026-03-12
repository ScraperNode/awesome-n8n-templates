# 🔬 Automate monthly CrUX report transfer from BigQuery to NocoDB with data cleanup

> ⚡ **60 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## **Overview**

This n8n workflow automatically **retrieves the monthly CrUX (Chrome User Experience) Report from Google BigQuery** and updates the data in **NocoDB**.  
It removes the previous month’s data before inserting the new dataset, ensuring your database always contains the latest CrUX rankings for website origins.  
The flow is fully automated, using schedule triggers to handle both data cleanup and data insertion each month.

---

## ✅ **Tasks**

* ⏰ Runs automatically on a **monthly schedule**  
* 🔢 Converts the **month name to a numeric value** for table selection  
* 🧹 Deletes last month’s CrUX data from **NocoDB**  
* 🌐 Queries **Google BigQuery** for the latest monthly dataset  
* 💾 Inserts the new CrUX rankings into **NocoDB**  
* ⚙️ Keeps your database up to date with **zero manual effort**

---

## **🛠 How to Use**

1️⃣ **Set Up BigQuery Access**  
   - Connect your **Google BigQuery** credentials.  
   - Make sure your project includes access to the **chrome-ux-report** public dataset.  

2️⃣ **Adjust the Query**  
   - In the **Google BigQuery** node, change the `LIMIT` value to control how many top-ranked sites are retrieved.  
   - Ensure the `{{ $json.table }}` field correctly references the dataset for the desired month (e.g., `202509`).  

3️⃣ **Prepare NocoDB Table**  
   - Create a table in **NocoDB** with fields: `origin`, `crux_rank`, and any additional metadata you wish to track.  

4️⃣ **Schedule Automation**  
   - The workflow includes two **Schedule Trigger** nodes:
     - One runs the **data cleanup** process (deletes last month).  
     - One runs the **data insertion** for the new month.  

5️⃣ **Run or Activate the Workflow**  
   - Activate it to run automatically each month.  
   - You can also run it manually to refresh data on demand.

## **📋 Prerequisites**

Before running this workflow, make sure you complete the following setup steps:

* 🧱 **Enable BigQuery API**  
  - Go to [Google Cloud Console → APIs & Services](https://console.cloud.google.com/apis/library/bigquery.googleapis.com)  
  - Enable the **BigQuery API** for your project.

* 📊 **Access the Chrome UX Report Dataset**  
  - In BigQuery, search for **“Chrome UX Report”** in the Marketplace or go directly to:  
    [https://console.cloud.google.com/marketplace/product/chrome-ux-report/chrome-ux-report](https://console.cloud.google.com/marketplace/product/chrome-ux-report/chrome-ux-report)  
  - Click **“View Dataset”** and add it to your BigQuery project.

* 🔑 **Connect BigQuery to n8n**  
  - In n8n, create credentials for your Google BigQuery account using **Service Account Authentication**.  
  - Ensure the account has permission to query the `chrome-ux-report` dataset.

* 🗄️ **Create a NocoDB Table**  
  - In NocoDB, create a new table to store your CrUX data with the following fields:  
    - **origin** → Short text  
    - **crux_rank** → Number  

* ⚙️ **Connect NocoDB to n8n**  
  - Use your **NocoDB API Token** to connect and allow the workflow to read/write data.


## **What is CrUX Rank?**

**CrUX Rank** (Chrome User Experience Rank) is a metric from Google’s **Chrome UX Report (CrUX)** dataset that indicates a website’s **popularity based on real user visits**.  
It reflects how frequently an origin (website) is loaded by Chrome users around the world.

- A **lower rank number** means the site is **more popular** (e.g., rank 1 = top site).  
- The data is collected from **anonymized Chrome usage statistics**, aggregated monthly.  
- This rank helps you **track site popularity trends** and compare your domain’s visibility over time.

## 🔗 Nodes Used

Google BigQuery, NocoDB, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
