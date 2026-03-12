# 📊 Track new search queries with zero-click analysis in Google Search Console

> ⚡ **414 views** · 📊 [Market Research & Insights](../)

## Description

## Google Search Console – Discover New Keywords (Last 7 Days)

This n8n template demonstrates how to identify **new queries in Google Search Console** that had no impressions in the past but appeared for the first time in the last 7 days.  
It also segments them into two groups: queries with impressions but no clicks yet (**Zero Click**) and queries that already have clicks (**Has Click**).

Use cases include:
- Finding **emerging SEO opportunities**.  
- Identifying keywords where you already get impressions but need to optimize for clicks.  
- Tracking newly discovered queries week over week.  

---

## Good to know
- This workflow requires a connected **Google Search Console account**.  
- You can adjust the date ranges in the **Compare search analytics** node to suit your needs.  
- Works best when scheduled weekly, but in this template we start with **manual execution** for flexibility.  

---

## How it works
1. **Manual Start** – Run the workflow manually to fetch fresh data.  
2. **Compare Search Analytics** – Compares the last 7 days against a custom reference period in Google Search Console.  
3. **Filter (No Past Impressions)** – Keeps only queries that had zero impressions in the reference period.  
4. **Zero Click** – Filters queries with impressions but no clicks.  
5. **Has Click** – Filters queries with impressions and clicks.  

The final output is two clean data sets:
- **Zero Click queries**: impressions but no clicks → improve meta descriptions, titles, or content relevance.  
- **Has Click queries**: new queries already generating clicks → consider creating supporting content and optimizing further.  

---

## How to use
- Start with the **Manual Start node**.  
- Add your Google Search Console credentials in the **Compare search analytics** node.  
- Optionally, replace the Manual Start with a **Schedule Trigger** (e.g., weekly) to automate monitoring.  
- Export results or connect them to Slack, Email, or Google Sheets for reporting.  

---

## Requirements
- **Google Search Console account** (with property access).  
- n8n instance with the Google Search Console integration enabled.  

---

## Customising this workflow
- Adjust the **date ranges** in the compare node (e.g., last 30 days vs. previous 30 days).  
- Replace the output branches with integrations like **Slack, Notion, or Google Sheets** to automatically deliver keyword reports.  
- Extend the workflow with additional filters, such as filtering by CTR, country, or device.

## 🔗 Nodes Used

Start, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
