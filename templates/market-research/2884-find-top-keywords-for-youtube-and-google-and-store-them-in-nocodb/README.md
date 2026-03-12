# 📊 Find top keywords for Youtube and Google and store them in NocoDB

> ⚡ **3,448 views** · 📊 [Market Research & Insights](../)

## Description

**Template Description**  
**WDF Top Keywords**: This workflow is designed to streamline keyword research by automating the process of generating, filtering, and analyzing Google and YouTube keyword data. Ensure compliance with local regulations and API terms of service when using this workflow.

---

📌 **Purpose**  
The WDF Top Keywords workflow automates collecting, processing, and managing keyword data for both Google and YouTube platforms. Leveraging multiple data sources and APIs ensures an efficient and scalable approach to identifying high-impact keywords for SEO, content creation, and marketing campaigns.

### **Key Features**
- Automates the generation of keyword suggestions using autocomplete APIs.
- Integrates with NocoDB to store and manage keyword data.
- Filters keywords based on monthly search volume and cost-per-click (CPC).
- Supports bulk import of keyword data into structured databases.
- Outputs both Google and YouTube keyword insights, enabling informed decision-making.

---

🎯 **Target Audience**  
This workflow is ideal for:
- Digital marketers aiming to optimize ad campaigns with data-driven insights.
- SEO specialists looking to identify high-potential keywords efficiently.
- Content creators seeking trending and relevant topics for their platforms.
- Agencies managing keyword research for multiple clients.

---

⚙️ **How It Works**  
1. **Trigger**: The workflow runs on-demand or at scheduled intervals.  
2. **Keyword Generation**:  
   - Retrieves base keywords from NocoDB.  
   - Generates autocomplete suggestions for Google and YouTube.  
3. **Data Processing**:  
   - Filters and formats keyword data based on specific criteria (e.g., search volume, CPC).  
   - Consolidates results for efficient storage and analysis.  
4. **Storage and Output**:  
   - Saves data into structured NocoDB tables for tracking and reuse.  
   - Bulk imports monthly search volume statistics for detailed analysis.

---

🛠️ **Key APIs and Tools Used**  
- **NocoDB**: Stores and organizes base and processed keyword data.  
- **DataForSEO API**: Provides search volume and keyword performance metrics.  
- **Google Autocomplete API**: Suggests relevant Google search terms.  
- **YouTube Autocomplete API**: Suggests trending YouTube keywords.  
- **Social Flood Docker Instance**: Serves as the local integration hub.  

---

**Setup Instructions**  
1. Required Tools:
   - [NocoDB](https://www.nocodb.com/)  
   - [n8n](https://n8n.io/)  
   - [DataForSEO Account](https://app.dataforseo.com/?aff=184401)  
   - [Social Flood Docker Instance](https://github.com/rainmanjam/social-flood)  
2. Create the following NocoDB tables:  
   - Base Keyword Search  
   - Second Order Google Keywords  
   - Second Order YouTube Keywords  
   - Search Volume  

This template empowers users to handle complex keyword research tasks effortlessly, saving time and providing actionable insights. Share this template to enhance your workflow efficiency!

## 🔗 Nodes Used

HTTP Request, NocoDB, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
