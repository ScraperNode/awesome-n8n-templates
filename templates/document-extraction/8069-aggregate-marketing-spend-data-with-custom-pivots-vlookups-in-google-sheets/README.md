# 🔬 Aggregate marketing spend data with custom pivots & VLOOKUPs in Google Sheets

> ⚡ **216 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow transforms raw marketing data from Google Sheets into a **pivot-like summary table**. It merges lookup data, groups spend by name, and appends the results into a clean reporting tab — all automatically, without needing to manually build pivot tables in Sheets.

---

## 🧑‍💻 Who’s it for
- Marketing analysts who track **channel spend** across campaigns  
- Small businesses that rely on **Google Sheets** for reporting  
- Teams that need **automated daily rollups** without rebuilding pivot tables manually  

---

## ⚙️ How it works
1. **Get Marketing Data (Google Sheets)** – Pulls raw spend data.  
2. **Vlookup Data (Google Sheets)** – Brings in reference/lookup fields (e.g., channel labels).  
3. **Merge Tables** – Joins marketing data and lookup data on the `Channel` column.  
4. **Summarize** – Groups data by `Name` and sums up **Spend ($)**.  
5. **Clear Sheet** – Wipes the reporting tab to avoid duplicates.  
6. **Append to Pivot Sheet** – Writes the aggregated results into the "render pivot" sheet.  

The result: a pivot-style summary table inside Google Sheets, automatically refreshed by n8n.

---

## 🔑 Setup Instructions

### 1) Connect Google Sheets (OAuth2)
1. In **n8n → Credentials → New → Google Sheets (OAuth2)**  
2. Sign in with your Google account and grant access  
3. In each Google Sheets node, select your **Spreadsheet** and the appropriate **Worksheet**:  
   - **data** (raw spend)  
   - **Lookup** (channel reference table)  
   - **render pivot** (output tab)  

### 2) Configure Summarize Node
- Group by: `Name`  
- Summarize: `Spend ($)` → `sum`  

### 3) Test the Workflow
1. Execute the workflow manually  
2. Check your "render pivot" tab — it should display aggregated spend by Name  

---

## 🛠️ How to customize
- Change grouping fields (e.g., by **Channel**, **Campaign**, or **Region**)  
- Add more aggregations (e.g., **average CPC**, **max impressions**)  
- Use the **Merge node** to join extra data sources before summarizing  
- Schedule execution to run **daily** for fresh rollups  

---

## 📋 Requirements
- n8n (Cloud or self-hosted)  
- Google Sheets account with structured data in `data` and `Lookup` tabs  

---

## 📬 Contact  
Need help customizing this (e.g., filtering by campaign, sending reports by email, or formatting your pivot)?  

- 📧 **rbreen@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**

## 🔗 Nodes Used

Google Sheets, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
