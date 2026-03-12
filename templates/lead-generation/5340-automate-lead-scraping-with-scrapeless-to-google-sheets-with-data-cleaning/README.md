# 🎣 Automate lead scraping with Scrapeless to Google Sheets with data cleaning

> ⚡ **719 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

## Prerequisites

- A [n8n](https://n8n.io) account (free trial available)
- A [Scrapeless](https://app.scrapeless.com/passport/login?utm_source=official&utm_medium=n8n&utm_campaign=automate-lead-scraping) account and API key

![image.png](fileId:1587)

- A Google account to access Google Sheets
---

## 🛠️ Step-by-Step Setup

### 1. Create a New Workflow in n8n
Start by creating a new workflow in n8n. Add a **Manual Trigger** node to begin.

---

### 2. Add the Scrapeless Node
- Add the **Scrapeless** node and choose the `Scrape` operation  
- Paste in your API key  
- Set your target website URL  
- Execute the node to fetch data and verify results

---

### 3. Clean Up the Data
Add a **Code** node to clean and format the scraped data. Focus on extracting key fields like:
- Title
- Description
- URL

---

### 4. Set Up Google Sheets
- Create a new spreadsheet in Google Sheets  
- Name the sheet (e.g., `Business Leads`)  
- Add columns like `Title`, `Description`, and `URL`

---

### 5. Connect Google Sheets in n8n
- Add the **Google Sheets** node  
- Choose the operation `Append or update row`  
- Select the spreadsheet and worksheet  
- Manually map each column to the cleaned data fields

---

### 6. Run and Test the Workflow
- Click "Execute Workflow" in n8n  
- Check your Google Sheet to confirm the data is properly inserted

---

## Results
With this automated workflow, you can continuously extract business lead data, clean it, and push it directly into a spreadsheet — perfect for outbound sales, lead lists, or internal analytics.

---

## How to Use
⚙️ Open the Variables node and plug in your Scrapeless credentials.
📄 Confirm the Google Sheets node points to your desired spreadsheet.
▶️ Run the workflow manually from the Start node.

## Perfect For:
- Sales teams doing outbound prospecting
- Marketers building lead lists
- Agencies running data aggregation tasks

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
