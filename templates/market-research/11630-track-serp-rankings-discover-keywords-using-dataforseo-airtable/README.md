# 📊 Track SERP rankings & discover keywords using DataForSEO & Airtable

> ⚡ **165 views** · 📊 [Market Research & Insights](../)

## Description

# Automated SEO Data Engine using DataForSEO & Airtable

This workflow automatically pulls SERP rankings, competitor keywords, and related keyword ideas from DataForSEO and stores structured results in Airtable — making SEO tracking and keyword research streamlined and automated.

---

## 🏗️ What this automation does

| Step | Component | Purpose |
|------|-----------|---------|
| 1 | **Trigger** (Manual: “Execute workflow”) | Starts the workflow on demand — optionally replaceable with a schedule or webhook. |
| 2 | **Read seed keywords** from Airtable (`SERP Keywords` table) | Fetches the list of keywords for which to track SERP. |
| 3 | **Post SERP task** to DataForSEO API | Requests Google organic SERP results (depth up to 10) for each keyword. |
| 4 | **Wait + Poll** for results (after ~1 min) | Gives DataForSEO time to process, then retrieves the completed task results. |
| 5 | **Parse & store** SERP results into Airtable (`SERP rankings` table) | Records rank, URL, domain, title, description, breadcrumb, etc. for each result. |
| 6 | **Read competitor list** from Airtable (`Competitor Research` table) | Fetches competitors (domains/sites) marked for keyword research. |
| 7 | **Post competitor-site keywords task** to DataForSEO | Fetches keywords used by competitor sites. |
| 8 | **Wait + Poll + Store** competitor keywords into Airtable (`Competitor Keywords Research`) | Captures keyword, competition level, search volume, CPC, monthly volume trends. |
| 9 | **Aggregate seed keywords → request related keywords** via DataForSEO | Retrieves related / similar keyword ideas for seed list (keyword expansion). |
| 10 | **Store related keywords** into Airtable (`Similar Keywords` table) | Saves keyword data for long-tail / expansion analysis. |

---

## 📌 Key Integrations & Tools

- **n8n** — Workflow automation and orchestration  
- **Airtable** — Storage for seed keywords, competitor list, and all result tables (SERP Rankings, Competitor Keywords, Similar Keywords)  
- **DataForSEO API** — For SERP data, competitor-site keywords, and related keyword suggestions  
- Core n8n nodes: Trigger, HTTP Request, Wait, Split Out, Aggregate, Airtable (search & create)  

---

## 📄 Data Output / Stored Fields

### SERP Rankings  
- `type`, `rank_group`, `rank_absolute`, `page`, `domain`, `title`, `description`, `url`, `breadcrumb`  
- Linked to original seed keyword via `SERP Keywords` reference  

### Competitor Keywords & Similar Keywords  
- `Keyword`  
- `Competition`, `Competition_Index`  
- `Search_Volume`, `CPC`, `Low_Top_Of_Page_Bid`, `High_Top_Of_Page_Bid` (if available)  
- Monthly search-volume fields: `Jan_2025`, `Feb_2025`, …, `Dec_2025` (mapped from API's `monthly_searches`)  
- For competitor keywords: linked to competitor (company/domain)  
- For similar keywords: linked to seed keyword  

---

## 🔔 Important Notes

- **Month-volume mapping:** Ensure the index mapping from API’s `monthly_searches` to months is correct — wrong indices will mislabel month data.  
- **Fixed wait time:** Current 1-minute wait may not always suffice — for large workloads or slow API responses, increase wait or implement polling/backoff logic.  
- **No deduplication:** Running repeatedly may produce duplicate Airtable records. Consider adding search-or-update logic to avoid duplicates.  
- **Rate limits / quotas:** Airtable and DataForSEO have limits — batch carefully, throttle requests or add spacing to avoid hitting limits.  
- **Credentials security:** Store Airtable and DataForSEO API credentials securely in n8n’s credentials manager — avoid embedding tokens directly in workflow JSON.  

---

## 🚀 Why this Workflow is Useful

- Fully automates SERP tracking and competitor keyword research — no manual work needed after setup  
- Maintains structured, historical data in Airtable — ideal for tracking rank changes, discovering competitor moves, and keyword expansion over time  
- Great for SEO teams, agencies, content owners, or anyone needing systematic keyword intelligence and monitoring  

---

## 🌟 Recommended Next Steps

- Replace manual trigger with a **Schedule Trigger** (daily/weekly) for automated runs  
- Add **deduplication (upsert) logic** to prevent duplicate records and keep Airtable clean  
- Improve robustness: add retry logic for API failures, rate-limit handling, and error notifications (Slack / email)  
- Add logging of API response data (task IDs, raw responses) for debugging and audit trails  
- (Optional) Build a reporting dashboard (Airtable Interface / BI tool) to visualise rank trends, keyword growth, and competitor comparisons  

---

## 📝 Usage / Setup Checklist

1. Configure Airtable base / tables: `SERP Keywords`, `Competitor Research`, `SERP rankings`, `Competitor Keywords Research`, `Similar Keywords`.  
2. Add credentials in n8n: Airtable API token; DataForSEO API credentials (HTTP Basic / Header auth).  
3. Import this workflow JSON into your n8n instance.  
4. Update any base/table/field IDs if different.  
5. (Optional) Replace Manual Trigger with Schedule Trigger, enable workflow.  
6. Run once with a small seed list — verify outputs, schema, and month-volume mapping.  
7. Enable periodic runs and monitor for rate limits or API errors.  

---

## 🔗 Nodes Used

Airtable, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
