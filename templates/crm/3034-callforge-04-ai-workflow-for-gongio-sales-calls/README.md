# 🤝 CallForge - 04 - AI workflow for Gong.io sales calls

> ⚡ **2,799 views** · 🤝 [CRM & Sales Operations](../)

## Description

![callforgecompressed.png](fileId:1006)

---

# **CallForge - AI Gong Sales Call Processing Workflow**  
Automate your **Gong.io sales call analysis** with **AI-driven insights**, real-time tracking, and structured **CRM integration**.

## **Who is This For?**  
This workflow is designed for:  
✅ **Sales teams** looking to automate sales call processing.  
✅ **Revenue operations (RevOps) professionals** managing high volumes of call data.  
✅ **AI-driven sales intelligence teams** using **Gong.io** for data-driven insights.  

## **What Problem Does This Workflow Solve?**  
Manually managing and analyzing **large volumes of Gong call data** is time-consuming and error-prone.  

With **CallForge**, you can:  
✔ **Automate call processing** to scale AI-driven insights.  
✔ **Integrate with Notion** to track and organize sales call data efficiently.  
✔ **Get real-time Slack updates** to stay informed on call processing progress.  
✔ **Handle API failures gracefully**, allowing easy reruns if a rate limit is hit.  
✔ **Ensure AI-ready analysis**, feeding structured call data into an AI-powered system.  

## **What This Workflow Does**  

### **1. Triggers on New Gong Calls**  
- Captures **new Gong calls** and retrieves **metadata, call summaries, and participant details**.  

### **2. Compares Calls Against Notion Database**  
- Checks whether the call has already been **processed and stored in Notion**.  
- **Prevents duplicate entries** from being added.  

### **3. Creates a Parent Notion Record for AI Processing**  
- Stores **call details** such as **date, title, URL, company name, sales rep, and opportunity details** in Notion.  
- Links calls to **Salesforce Opportunity (SF Opp) data**.  
- Assigns **sales representatives and customer information** to each call.  

### **4. Loops Through Calls for Processing**  
- **Ensures resilience** by allowing failed runs to **restart where they left off**.  
- Processes calls **one at a time** to prevent **Notion rate limits**.  

### **5. Sends Call Data to an AI Processor**  
- Extracts structured call details and **sends them to an AI-powered analysis workflow**.  
- Allows **multiple AI agents** to process and extract structured data from calls.  

### **6. Provides Real-Time Slack Alerts**  
- Posts a **progress update** in Slack when the queue starts processing.  
- Sends **real-time call progress notifications**.  
- Sends a **completion alert** once all calls are processed.  

## **How to Set Up This Workflow**  

### **1. Connect Your APIs**  
🔹 **Gong API Credentials** – Ensure you have valid **Gong API credentials** in n8n.  
🔹 **Notion Database** – Provide **access to a Notion database** for storing call insights.  
🔹 **Slack Integration** – Configure a **Slack channel** for progress alerts.  
🔹 **AI Processing Workflow** – Connect an **AI-powered call processing workflow** for final analysis.  

- [CallForge - 01 - Filter Gong Calls Synced to Salesforce by Opportunity Stage](https://n8n.io/workflows/3031-callforge-01-filter-gong-calls-synced-to-salesforce-by-opportunity-stage/)
- [CallForge - 02 - Prep Gong Calls with Sheets & Notion for AI Summarization](https://n8n.io/workflows/3032-callforge-02-prep-gong-calls-with-sheets-and-notion-for-ai-summarization/)
- [CallForge - 03 - Gong Transcript Processor and Salesforce Enricher](https://n8n.io/workflows/3033-callforge-03-gong-transcript-processor-and-salesforce-enricher/)
- [CallForge - 04 - AI Workflow for Gong.io Sales Calls](https://n8n.io/workflows/3034-callforge-04-ai-workflow-for-gongio-sales-calls/)
- [CallForge - 05 - Gong.io Call Analysis with Azure AI & CRM Sync](https://n8n.io/workflows/3035-callforge-05-gongio-call-analysis-with-azure-ai-and-crm-sync/)
- [CallForge - 06 - Automate Sales Insights with Gong.io, Notion & AI](https://n8n.io/workflows/3036-callforge-06-automate-sales-insights-with-gongio-notion-and-ai/)
- [CallForge - 07 - AI Marketing Data Processing with Gong & Notion](https://n8n.io/workflows/3037-callforge-07-ai-marketing-data-processing-with-gong-and-notion/)
- [CallForge - 08 - AI Product Insights from Sales Calls with Notion](https://n8n.io/workflows/3039-callforge-08-ai-product-insights-from-sales-calls-with-notion/)


## **How to Customize This Workflow**  
💡 **Modify Call Storage** – Swap **Notion** for a different **CRM or database** (e.g., **HubSpot, Airtable, Salesforce**).  
💡 **Change AI Processing** – Integrate a **custom AI model** for analyzing sales conversations.  
💡 **Customize Slack Notifications** – Adjust **Slack messages** or send **alerts via email instead**.  
💡 **Expand with More Integrations** – Connect with **Salesforce, Pipedrive, or HubSpot** for further enrichment.  

## **Why Use CallForge?**  
🚀 **Automate Gong call tracking** for seamless sales intelligence.  
📊 **Improve sales operations** with structured, AI-powered insights.  
⚡ **Get real-time updates** and keep your team informed instantly.  

**Start optimizing your Gong call processing today!**

## 🔗 Nodes Used

Slack, Execute Sub-workflow, Notion, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
