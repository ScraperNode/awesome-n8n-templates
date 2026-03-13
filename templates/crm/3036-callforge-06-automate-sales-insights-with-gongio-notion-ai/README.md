# 🤝 CallForge - 06 - Automate sales insights with Gong.io, Notion & AI

> ⚡ **1,944 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

![callforgecompressed.png](fileId:1008)

---

# **CallForge - AI-Powered Sales Call Data Processor**  
Automate **sales call analysis** and store structured insights in **Notion** with AI-powered intelligence.  

## **Who is This For?**  
This workflow is ideal for:  
✅ **Sales teams** looking to automate call insight processing.  
✅ **Sales operations managers** managing AI-driven call analysis.  
✅ **Revenue teams** using **Gong, Fireflies.ai, Otter.ai, or similar transcription tools**.  

It streamlines **sales call intelligence**, ensuring that insights such as **competitor mentions, objections, and customer pain points** are efficiently **categorized and stored** in **Notion** for easy access.  

---

## **🔍 What Problem Does This Workflow Solve?**  
Manually reviewing and documenting **sales call takeaways** is **time-consuming and error-prone**.  

With **CallForge**, you can:  
✔ **Identify competitors** mentioned in sales calls.  
✔ **Capture objections and customer pain points** for follow-up.  
✔ **Track sales call outcomes** and categorize insights automatically.  
✔ **Store structured sales intelligence in Notion** for future reference.  
✔ **Improve sales strategy** with AI-driven, automated call analysis.  

---

## **📌 Key Features & Workflow Steps**  

### **🎙️ AI-Powered Call Data Processing**  
This workflow **processes AI-generated sales call insights** and structures them in **Notion databases**:  
1. **Triggers automatically** when AI call analysis data is received.  
2. **Extracts competitor mentions** from the call transcript and logs them in Notion.  
3. **Identifies and categorizes sales objections** for better follow-ups.  
4. **Processes integration mentions**, capturing tools or platforms referenced in the call.  
5. **Extracts customer use cases**, categorizing pain points and feature requests.  
6. **Aggregates all extracted insights** and updates relevant Notion databases.  

### **📊 Notion Database Integration**  
- Competitors → **Logs mentioned competitors for sales intelligence**.  
- Objections → **Tracks and categorizes common objections from prospects**.  
- Integrations → **Captures third-party tools & platforms discussed in calls**.  
- Use Cases → **Stores customer challenges & product feature requests**.  

---

## **🛠 How to Set Up This Workflow**  

### **1. Prepare Your AI Call Analysis Data**  
- Ensure AI-generated sales call data is **passed into the workflow**.  
- Compatible with **Gong, Fireflies.ai, Otter.ai**, and other AI transcription tools.  

### **2. Connect Your Notion Database**  
- Set up Notion databases for:  
  🔹 **Competitors** (tracks competing products)  
  🔹 **Objections** (logs customer objections & concerns)  
  🔹 **Integrations** (captures mentioned platforms & tools)  
  🔹 **Use Cases** (categorizes customer pain points & feature requests)  

### **3. Configure n8n API Integrations**  
- **Connect your Notion API key** in n8n under “Notion API Credentials.”  
- **Set up webhook triggers** to receive data from your AI transcription tool.  
- **Test the workflow** using a sample AI-generated call transcript.  
- [CallForge - 01 - Filter Gong Calls Synced to Salesforce by Opportunity Stage](https://n8n.io/workflows/3031-callforge-01-filter-gong-calls-synced-to-salesforce-by-opportunity-stage/)
- [CallForge - 02 - Prep Gong Calls with Sheets & Notion for AI Summarization](https://n8n.io/workflows/3032-callforge-02-prep-gong-calls-with-sheets-and-notion-for-ai-summarization/)
- [CallForge - 03 - Gong Transcript Processor and Salesforce Enricher](https://n8n.io/workflows/3033-callforge-03-gong-transcript-processor-and-salesforce-enricher/)
- [CallForge - 04 - AI Workflow for Gong.io Sales Calls](https://n8n.io/workflows/3034-callforge-04-ai-workflow-for-gongio-sales-calls/)
- [CallForge - 05 - Gong.io Call Analysis with Azure AI & CRM Sync](https://n8n.io/workflows/3035-callforge-05-gongio-call-analysis-with-azure-ai-and-crm-sync/)
- [CallForge - 06 - Automate Sales Insights with Gong.io, Notion & AI](https://n8n.io/workflows/3036-callforge-06-automate-sales-insights-with-gongio-notion-and-ai/)
- [CallForge - 07 - AI Marketing Data Processing with Gong & Notion](https://n8n.io/workflows/3037-callforge-07-ai-marketing-data-processing-with-gong-and-notion/)
- [CallForge - 08 - AI Product Insights from Sales Calls with Notion](https://n8n.io/workflows/3039-callforge-08-ai-product-insights-from-sales-calls-with-notion/)



---

## **🔧 How to Customize This Workflow**  
💡 **Modify Notion Data Structure** – Adjust fields to match your company’s CRM setup.  
💡 **Enhance AI Data Processing** – Align fields with different AI transcription providers.  
💡 **Expand with CRM Integration** – Sync insights with **HubSpot, Salesforce, or Pipedrive**.  
💡 **Add Notifications** – Send alerts via **Slack, email, or webhook** when key competitor mentions or objections are detected.  

---

## **⚙️ Key Nodes Used in This Workflow**  

🔹 **If Nodes** – Checks if AI-generated data includes competitors, integrations, objections, or use cases.  
🔹 **Notion Nodes** – Creates or updates entries in Notion databases.  
🔹 **Split Out & Aggregate Nodes** – Processes multiple insights and consolidates AI outputs.  
🔹 **Wait Nodes** – Ensures smooth sequencing of API calls and database updates.  
🔹 **HTTP Request Node** – Sends AI-extracted insights to Notion for structured storage.  

---

## **🚀 Why Use This Workflow?**  
✔ **Eliminates manual data entry** and speeds up sales intelligence processing.  
✔ **Ensures structured and categorized sales insights** for decision-making.  
✔ **Improves team collaboration** with AI-powered competitor tracking & objections logging.  
✔ **Seamlessly integrates with Notion** to centralize and manage sales call insights.  
✔ **Scalable for teams using n8n Cloud or self-hosted deployments**.  

This workflow **empowers sales teams** with **automated AI insights**, streamlining **sales strategy and follow-ups** with minimal effort. 🚀

## 🔗 Nodes Used

HTTP Request, Notion, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
