# 📊 Track daily SEO rankings with DataForSEO and Google Sheets

> ⚡ **839 views** · 📊 [Market Research & Insights](../)

## Description

## 🚀 Automated Daily SERP Rank Tracker for SEO Specialists (Google Sheets + DataForSEO)

---

**Overview 🌐**
-----------------
This workflow automates your **daily keyword rank tracking** 🔍 using **DataForSEO** ⚙️ and **Google Sheets** 📊.  
It pulls live **Google Search results** for each keyword in your list, extracts key details (`query`, `rank`, `domain`, `date`), and appends them to your Google Sheet automatically.  
📆 You’ll have a complete daily snapshot of your keyword positions — no manual checks needed.

Built for **SEO professionals**, **digital marketers**, and **agencies**, this workflow helps you centralize ranking data, build trend dashboards, and automate reporting workflows.

---

### 👤 Who’s it for?
* 🧠 SEO specialists tracking daily keyword performance  
* 📈 Marketing teams managing multiple websites  
* 💼 Agencies providing automated ranking reports for clients  
* 💻 Growth teams who want rank tracking data for dashboards or AI tools  

---

### ⚙️ How to Set Up
1. **Connect Your Google Sheet**
   - Use this template sheet 👉 [Google Sheet Example](https://docs.google.com/spreadsheets/d/1ShdLc4td6MSQf49l4tDlVohRlFxNO0SdkG0bHQ5LJmE/edit?usp=sharing)  
   - Make sure it has a `query` column containing your target keywords.

2. **Set Up DataForSEO Credentials**
   - Create an account at [dataforseo.com](https://dataforseo.com)  
   - Add your API credentials under **HTTP Request** node or **DataForSEO node**.

3. **Customize Location & Language**
   - In the “Fetch SERP Data (DataForSEO API)” node:  
     - `location_code`: 2840 → 🇺🇸 United States (changeable)  
     - `language_code`: en → 🇬🇧 English (changeable)

4. **Format Date**
   - The “Add Timestamp & Prepare Output” node converts timestamps into `YYYY-MM-DD` format automatically 🗓️  

5. **Run or Schedule**
   - Trigger manually for tests, or enable **daily schedule trigger** to automate it.  
   - Results append directly to your Google Sheet after each run ✅  

---

### 📊 Example Output
| query | rank | domain | date |
|--------|-------|-----------------------|------------|
| cloud host | 1 | cloudhost.one | 2025-10-24 |
| cloud host | 2 | cloud.google.com | 2025-10-24 |
| cloud hosting | 1 | cloud.google.com | 2025-10-24 |
| cloud hosting | 2 | aws.amazon.com | 2025-10-24 |
| cloud hosting | 3 | www.hostinger.com | 2025-10-24 |

📈 Use this data to build trend charts, compare historical performance, or connect to **Looker Studio** for automated dashboards.

---

### 🧩 Workflow Highlights
* 🕒 **Automated Daily Runs** – via Schedule Trigger  
* 🔍 **Accurate SERP Data** – powered by DataForSEO API  
* 📄 **Dynamic Keyword Input** – read directly from Google Sheets  
* 📊 **Historical Tracking** – appends new data each day  
* 🌎 **Regional Customization** – change language and location easily  
* 🧠 **AI-Ready** – integrate GPT or AI nodes for insights or summaries  

---

### 💡 Pro Tips
* Add a **Slack** or **Gmail** alert node for position drops or gains 📬  
* Combine with **NocoDB** or **Airtable** for more advanced data storage  
* Expand with **DataForSEO Labs** endpoints for keyword difficulty, CPC, or SERP features  

---

### 📺 Check Out My Channel
💬 Learn more about **SEO Automation & n8n Workflows**  
👉 **Connect with me on LinkedIn:** [linkedin.com/in/nima-salimi-a655a6231](https://linkedin.com/in/nima-salimi-a655a6231)  

Follow for more workflow templates, AI integrations, and SEO automation tutorials 💥

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
