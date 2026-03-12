# 📊 Scrape Trustpilot reviews to Google Sheets + HelpfulCrowd compatible csv

> ⚡ **2,564 views** · 📊 [Market Research & Insights](../)

## Description

This workflow scrapes Trustpilot reviews for a given profile and saves them into Google Sheets.  

## How It Works  
Clone this [Google Sheets template](https://docs.google.com/spreadsheets/d/19nndnEO186vNmApxce8bA1AnLYrY8bR8VgYlwOU_FYA/edit?gid=0#gid=0), which includes two sheets:  

### **trustpilot**  
A raw collection of Trustpilot reviews. You can customize it as needed.  

### **helpfulcrowd**  
This sheet follows the format from [this HelpfulCrowd guide](https://www.guides.helpfulcrowd.com/en/article/import-product-reviews-wof0oy/), with a slight modification: an added `review_id` column to support the upsert process.  

Once the workflow is complete, export the sheet as a CSV and upload it to HelpfulCrowd. For detailed steps, see [this post](https://www.guides.helpfulcrowd.com/en/article/import-product-reviews-wof0oy/).  

## Running the Workflow  
You can trigger the workflow **on-demand** or schedule it to run at a set interval.  

## Requirements  
- **Trustpilot business name** (e.g., `n8n.io` in `https://www.trustpilot.com/review/n8n.io`). Update this name and pagination settings in the Global node.  
- **Google Sheets API credentials**  

---

Check out my other templates:  
👉 [My n8n Templates](https://n8n.io/creators/bangank36/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
