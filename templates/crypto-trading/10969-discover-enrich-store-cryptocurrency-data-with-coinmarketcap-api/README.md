# 📈 Discover, enrich & store cryptocurrency data with CoinMarketCap API

> ⚡ **60 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# CoinMarketCap Token Discovery (Free API) 

Automatically discover cryptocurrency tokens from CoinMarketCap, clean the data, enrich it with official websites, and store the results in your preferred database or sheet.

This workflow is designed to be **safe for free API usage**, **easy to understand**, and **ready for extension**.

---

## What This Workflow Does

This workflow runs on a schedule and:

1. Randomly selects pages from CoinMarketCap listings  
2. Fetches token data using the free CoinMarketCap API  
3. Cleans and normalizes token fields  
4. Enriches each token with official website data  
5. Processes tokens in safe batches with delays  
6. Outputs clean, structured token records  
7. Optionally saves results to a database or sheet  

---

## Who This Is For

This workflow is useful if you are:

- Doing crypto research or market discovery  
- Building token datasets  
- Running crypto outreach or lead generation  
- Learning how to work with APIs in n8n  
- Looking for a clean, real-world n8n example  

No advanced n8n knowledge is required.

---

## Setup Instructions (Required)

Follow these steps before running the workflow:

### 1. Get a CoinMarketCap API Key
- Create a free account on CoinMarketCap  
- Generate an API key from your dashboard  

### 2. Add Your API Key
- Open the **HTTP Request** nodes  
- Add your API key to the request headers:

```text
X-CMC_PRO_API_KEY = YOUR_API_KEY 
```

### 3. Connect Storage

Replace the storage node with your preferred option:

- Google Sheets  
- Airtable  
- PostgreSQL  
- Webhook  

Add your own credentials before running the workflow.

---

### 4. Activate the Workflow

- Enable the workflow  
- Let it run automatically based on the schedule  

---

## How the Workflow Is Structured

- **Trigger:** Runs every few days to avoid API limits  
- **Random Page Generator:** Prevents bias toward only top tokens  
- **Batch Processing:** Controls memory and request volume  
- **Delay Logic:** Keeps the workflow stable and API-friendly  
- **Cleaning Steps:** Removes messy or invalid data  
- **Final Output:** Clean, simple token records ready for use  


---

## Output Example

Each valid token produces a clean record like:

- Token name  
- Symbol (ticker)  
- Official website  
- Source (CoinMarketCap)  
- Timestamp  

Invalid or incomplete entries are automatically skipped.

---

## Customization Ideas

You can easily extend this workflow to:

- Add social media scraping  
- Track new tokens over time  
- Trigger alerts for specific tokens  
- Combine with other crypto APIs  
- Feed data into outreach or analytics pipelines  

---

## Important Notes

- This workflow uses **CoinMarketCap’s free API tier**  
- Do not remove batch limits or delays unless you upgrade your API plan  
  
- Replace sample storage with your own before production use  

---

## License

This workflow is provided for educational and practical use.  
You are free to modify and adapt it for your own projects.

---

## Author

Built and shared by **Itunu Ola**  
n8n automation builder focused on practical, production-ready workflows.

## 🔗 Nodes Used

HTTP Request, NocoDB, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
