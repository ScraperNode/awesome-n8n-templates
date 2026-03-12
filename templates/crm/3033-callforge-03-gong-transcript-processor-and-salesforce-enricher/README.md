# 🤝 CallForge - 03 - Gong transcript processor and Salesforce enricher

> ⚡ **2,117 views** · 🤝 [CRM & Sales Operations](../)

## Description

![callforgecompressed.png](fileId:1005)

---

# **CallForge - AI Gong Transcript PreProcessor**  
Transform your **Gong.io** call transcripts into structured, enriched, and AI-ready data for **better sales insights and analytics**.

## **Who is This For?**  
This workflow is designed for:  
✅ **Sales teams** looking to automate call transcript formatting.  
✅ **Revenue operations (RevOps) professionals** optimizing AI-driven insights.  
✅ **Businesses using Gong.io** that need **structured, enriched call transcripts** for better decision-making.  

## **What Problem Does This Workflow Solve?**  
Manually processing raw **Gong call transcripts** is inefficient and often lacks essential **context for AI-driven insights**.  

With **CallForge**, you can:  
✔ **Extract and format Gong call transcripts** for structured AI processing.  
✔ **Enhance metadata** using sales data from **Salesforce**.  
✔ **Classify speakers** as **internal (sales team)** or **external (customers)**.  
✔ **Identify external companies** by filtering out free email domains (e.g., Gmail, Yahoo).  
✔ **Enrich customer profiles** using **PeopleDataLabs** to identify company details and locations.  
✔ **Prepare transcripts for AI models** by structuring conversations and removing unnecessary noise.  

## **What This Workflow Does**  

### **1. Retrieves Gong Call Data**  
- Calls the **Gong API** to extract **call metadata, speaker interactions, and collaboration details**.  
- Fetches **call transcripts** for AI processing.  

### **2. Processes and Cleans Transcripts**  
- Converts **call transcripts** into **structured, speaker-based dialogues**.  
- Assigns each speaker as either **Internal (Sales Team)** or **External (Customer)**.  

### **3. Extracts Company Information**  
- **Retrieves Salesforce data** to match customers with existing sales opportunities.  
- **Filters out free email domains** to determine the **customer’s actual company domain**.  
- Calls the **PeopleDataLabs API** to retrieve additional **company data and location details**.  

### **4. Merges and Enriches Data**  
- **Combines Gong metadata, Salesforce customer details and insights**.  
- Ensures all necessary data is available for **AI-driven sales insights**.  

### **5. Final Formatting for AI Processing**  
- Merges all **call transcript data** into a **single structured format** for AI analysis.  
- Extracts the final **cleaned, enriched dataset** for further **AI-powered insights**.  

## **How to Set Up This Workflow**  

### **1. Connect Your APIs**  
🔹 **Gong API Access** – Set up your Gong API credentials in n8n.  
🔹 **Salesforce Setup** – Ensure API access if you want customer enrichment.  
🔹 **PeopleDataLabs API** – Required to retrieve company and location details based on email domains.  
🔹 **Webhook Integration** – Modify the webhook call to **push enriched call data** to an internal system.  

- [CallForge - 01 - Filter Gong Calls Synced to Salesforce by Opportunity Stage](https://n8n.io/workflows/3031-callforge-01-filter-gong-calls-synced-to-salesforce-by-opportunity-stage/)
- [CallForge - 02 - Prep Gong Calls with Sheets & Notion for AI Summarization](https://n8n.io/workflows/3032-callforge-02-prep-gong-calls-with-sheets-and-notion-for-ai-summarization/)
- [CallForge - 03 - Gong Transcript Processor and Salesforce Enricher](https://n8n.io/workflows/3033-callforge-03-gong-transcript-processor-and-salesforce-enricher/)
- [CallForge - 04 - AI Workflow for Gong.io Sales Calls](https://n8n.io/workflows/3034-callforge-04-ai-workflow-for-gongio-sales-calls/)
- [CallForge - 05 - Gong.io Call Analysis with Azure AI & CRM Sync](https://n8n.io/workflows/3035-callforge-05-gongio-call-analysis-with-azure-ai-and-crm-sync/)
- [CallForge - 06 - Automate Sales Insights with Gong.io, Notion & AI](https://n8n.io/workflows/3036-callforge-06-automate-sales-insights-with-gongio-notion-and-ai/)
- [CallForge - 07 - AI Marketing Data Processing with Gong & Notion](https://n8n.io/workflows/3037-callforge-07-ai-marketing-data-processing-with-gong-and-notion/)
- [CallForge - 08 - AI Product Insights from Sales Calls with Notion](https://n8n.io/workflows/3039-callforge-08-ai-product-insights-from-sales-calls-with-notion/)


## **How to Customize This Workflow**  
💡 **Modify Data Sources** – Connect different CRMs (e.g., **HubSpot, Zoho**) instead of Salesforce.  
💡 **Expand AI Analysis** – Add another **AI model (e.g., OpenAI GPT, Claude)** for advanced conversation insights.  
💡 **Change Speaker Classification Rules** – Adjust **internal vs. external speaker logic** to match your team’s structure.  
💡 **Filter Specific Customers** – Modify the **free email filtering logic** to better fit your company’s needs.  

## **Why Use CallForge?**  
🚀 **Automate Gong call transcript processing** to save time.  
📊 **Improve AI accuracy** with enriched, structured data.  
🛠 **Enhance sales strategy** by extracting actionable insights from calls.  

**Start optimizing your Gong transcript analysis today!**

## 🔗 Nodes Used

HTTP Request, Salesforce, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
