# 🎣 Automated LinkedIn lead enrichment pipeline using Apollo.io & Google Sheets

> ⚡ **116 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## LinkedIn to Apollo.io Lead Enrichment System with Google Sheets

Automatically capture company and store details from LinkedIn posts, enrich them with domain names and key decision-maker (KDM) data from Apollo.io, and store everything neatly in Google Sheets.  
This workflow turns LinkedIn post data into a complete, structured lead database — fully automated from detection to enrichment.

---

## 🧾 Summary

This workflow reads LinkedIn post data (in JSON format) received via a webhook, extracts company and location information using an AI agent, and progressively enriches the data in three stages:  
1. **Find Company Domain** using Apollo.io  
2. **Fetch Key Decision Makers (KDMs)** using the company domain  
3. **Find Corporate Emails** for those KDMs  

All results are automatically updated in **Google Sheets**, ensuring your lead list remains fresh, structured, and actionable.

---

## ⚙️ Prerequisites

Before running the workflow, make sure you have:
- An **Apollo.io API Key** with company and people search access  
- A connected **Google Sheets** account (OAuth2)  
- A **Webhook URL or LinkedIn scraper** that feeds JSON-formatted post data  
- (Optional) An **OpenAI / AI Agent node** to extract company names and store locations from post text

---

## 🧩 Example Input (Webhook JSON)

Each LinkedIn post is received as a JSON object containing key clues:

```json
{
  "index": 1,
  "text": "Excited to announce the opening of our new KFC store at Sky City Mall, Borivali East 🎉🍗\n\nLooking forward to welcoming you all to experience the Finger Lickin’ Good taste at our newest location!\n\n#KFCIndia #NewStoreOpening #Borivali #SkyCityMall #Sapphirefoods",
  "CompanyName": "MockCompany",
  "NewStoreLocation": "optional",
  "PersonPosted": "https://linkedin.com/in/mockperson",
  "PostImage": null,
  "PostLink": "https://www.linkedin.com/search/results/all/?keywords=%23kfcindia&origin=HASH_TAG_FROM_FEED",
  "extracted_at": "2025-09-08T12:05:40.044101"
}

```
## 🧠 Workflow Overview

This workflow runs in three main stages, moving from **LinkedIn data → company domain → people → emails**.

---

## **Stage 1: Company Name to Company Domain 🌐**

**Goal:** Convert each company name into its website domain using Apollo.io.

### **Nodes & Flow**
- **Schedule Trigger** — Runs automatically (e.g., once a week) to check your Google Sheet for companies missing a domain.  
- **IF Node (Check for Missing Domain)** — Filters only companies without a website.  
- **Loop Over Items** — Iterates through each company record.  
- **HTTP Request – Find Domain** — Calls the Apollo.io Company API to find the company’s domain (e.g., `kfc.com`).  
- **Update Row in Google Sheets** — Writes the found domain back into the corresponding company row.  
- **Wait Node – Delay Between API Calls** — Adds a small pause to avoid hitting rate limits.

---

## **Stage 2: Domain to Top 10 KDMs 👥**

**Goal:** Fetch key decision-makers (KDMs) from each company using Apollo.io.

### **Nodes & Flow**
- **Schedule Trigger** — Runs on a weekly cadence to check for companies with a domain but no KDMs.  
- **Get Rows from Google Sheets** — Pulls company records ready for enrichment.  
- **IF Node (Check for Missing KDMs)** — Ensures only companies without people data are processed.  
- **Loop Over Items** — Processes one company at a time.  
- **HTTP Request – Find KDMs** — Searches Apollo.io People API for top roles such as *Founder, CEO, Head of Retail*, etc.  
- **Update Row in Google Sheets** — Saves the top 10 names and their LinkedIn profiles into your sheet.  
- **Wait Node** — Adds a delay to manage rate limits safely.

---

## **Stage 3: KDM Profile to Email Enricher 📧**

**Goal:** Find and store verified corporate email addresses for each KDM.

### **Nodes & Flow**
- **Schedule Trigger** — Weekly automation trigger.  
- **Get Rows from Google Sheets** — Pulls KDMs that have LinkedIn profiles but no email yet.  
- **IF Node (Check for Missing Emails)** — Ensures only valid records are processed.  
- **Code Node – Prepare Data** — Organizes LinkedIn profile and domain information.  
- **HTTP Request – Find Email** — Queries Apollo.io’s email enrichment endpoint using the LinkedIn URL and domain.  
- **Code Node – Format Response** — Cleans and formats the email result.  
- **Wait Node** — Adds delay to avoid request bursts.  
- **Update Row in Google Sheets** — Writes the verified email address back to the corresponding KDM entry and marks it as “Updated – email search.” 🎉

---

## 🧰 Setup Instructions

### **1. Connect APIs & Credentials**
- Add your **Apollo.io API Key** under HTTP Request credentials.  
- Connect your **Google Sheets** account (OAuth2).  

### **2. Customize Sheet Structure**
Add columns for:  
`CompanyName`, `Domain`, `KDMs`, `LinkedInProfile`, `Email`, `Status`

### **3. Set Schedule Frequency**
Each **Schedule Trigger** can be configured separately (e.g., Stage 1 every Monday, Stage 2 every Wednesday).

### **4. Optional: AI Extraction Node**
Use an AI model (like OpenAI or Gemini) to extract **company name and location** from LinkedIn post text before enrichment.

---

## 🧰 Custom Node Names (Recommended for Clarity)

| Node Type | Recommended Name | Description |
|------------|------------------|-------------|
| HTTP Request (Company) | **Find Company Domain (Apollo.io)** | Searches for the company’s official domain |
| HTTP Request (People) | **Find Key Decision Makers (Apollo.io)** | Retrieves top company contacts |
| HTTP Request (Emails) | **Find Corporate Emails (Apollo.io)** | Gets verified email addresses for each contact |
| Wait Node | **API Delay (Rate Limit Buffer)** | Adds delay to avoid hitting API rate limits |
| Code Node | **Prepare KDM Data** | Organizes input data for API calls |

---

## ⚙️ Customization Tips

- **Multiple Campaigns:** Duplicate the workflow for different industries or store categories, updating parameters as needed.  
- **Batch Size:** Adjust API request limits (e.g., 100 per batch) based on your Apollo.io plan.  
- **Filtering:** Add IF conditions to skip records already marked as “Completed.”  
- **Dashboards:** Build visual analytics directly in Google Sheets or connect to **Looker Studio**.  
- **Enrichment:** Combine with CRM systems (like **HubSpot** or **Close**) using company domain or lead email as the linking key.

---

## 🔐 Security and Publishing Notes

- 🔒 **Never hardcode API keys** in workflow exports. Use **n8n credentials** or environment variables instead.  
- 🚫 Replace sensitive values (like API keys or Sheet IDs) with placeholders before sharing.  
- 🔐 Keep your **Google Sheet** private unless intentionally shared.

---

## 🧩 Troubleshooting

- **No Data in Sheets:** Check API response for `data[]` and verify Split Out configuration.  
- **Duplicate Rows:** Ensure the “Matching Column” in Google Sheets is correctly set (e.g., `CompanyName` or `LinkedInProfile`).  
- **Rate Limits:** Add **Wait Nodes** or reduce batch size.  
- **Mapping Errors:** Confirm Google Sheet headers exactly match node field mappings.  
- **Timezone Adjustments:** Apollo.io timestamps are in UTC — convert to local time if needed.

---

## 🎯 Example Use Case

Every week, this workflow scans new **LinkedIn store-opening posts**.  
It extracts company names (like *KFC India*), finds their domains and top executives through **Apollo.io**, retrieves their emails, and logs everything in a **Google Sheet** — ready for your sales team to reach out.

---

**Tags:**  
`LinkedIn` `Apollo` `Automation` `LeadGeneration` `GoogleSheets` `MarketingOps` `DataEnrichment`

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
