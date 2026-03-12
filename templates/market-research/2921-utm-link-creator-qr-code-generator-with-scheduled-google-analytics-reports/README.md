# 📊 Utm link creator & QR code generator with scheduled Google Analytics reports

> ⚡ **1,748 views** · 📊 [Market Research & Insights](../)

## Description

# **UTM Link Creator & QR Code Generator with Scheduled Google Analytics Reports**

This workflow enables marketers to **generate UTM-tagged links**, **convert them into QR codes**, and **automate performance tracking** in **Google Analytics** with scheduled reports every 7 days. This solution helps **monitor traffic sources** from different marketing channels and **optimize campaign performance** based on analytics data.

---

## **Prerequisites**

Before implementing this workflow, ensure you have the following:

### **Google Analytics 4 (GA4) Account & Access**

- Ensure you have a **GA4 property** set up.
- Access to the **GA4 Data API** to schedule performance tracking. Refer to the [Google Analytics Data API Overview](https://developers.google.com/analytics/devguides/reporting/data/v1) for more information.

### **Airtable Account & API Key**

- Create an **Airtable base** to store UTM links, QR codes, and analytics data.
- Obtain an **Airtable API key** from your **Account Settings**. Detailed instructions are available in the [Airtable API Authentication Guide](https://www.airtable.com/developers/web/api/authentication).

---

## **Step-by-Step Guide to Setting Up the Workflow**

### **1. Generate UTM Links**

Create a form or interface to input:

- **Base URL** (e.g., `https://example.com`)
- **Campaign Name** (`utm_campaign`)
- **Source** (`utm_source`)
- **Medium** (`utm_medium`)
- **Term** (Optional: `utm_term`)
- **Content** (Optional: `utm_content`)

Append UTM parameters to generate a **trackable URL**.

### **2. Store UTM Links & QR Codes in Airtable**

Set up an **Airtable base** with the following columns:

- **UTM Link**
- **QR Code**
- **Campaign Name**
- **Source**
- **Medium**
- **Date Created**

Adjust as needed based on your tracking requirements. For guidance on setting up your Airtable base and using the API, refer to the [Airtable Web API Documentation](https://www.airtable.com/developers/web/api).

### **3. Convert UTM Links to QR Codes**

Use a **QR code generator API** (e.g., `goqr.me`, `qrserver.com`) to generate QR codes for each UTM link and store them in Airtable.

### **4. Schedule Google Analytics Performance Reports (Every 7 Days)**

- Use the **Google Analytics Data API** to pull weekly performance reports based on UTM parameters.
- Extract key metrics such as:
  - **Sessions**
  - **Users**
  - **Bounce Rate**
  - **Conversions**
  - **Revenue (if applicable)**
- Store the data in Airtable for tracking and analysis.

Adjust timeframe as needed


For more details on accessing and using the Google Analytics Data API, consult the [Google Analytics Data API Overview](https://developers.google.com/analytics/devguides/reporting/data/v1).

---

## **Benefits of This Workflow**

✅ **Track Marketing Campaigns**: Easily monitor which channels drive traffic.

✅ **Automate QR Code Creation**: Seamless integration of UTM links with QR codes.

✅ **Scheduled Google Analytics Reports**: No manual reporting—everything runs automatically.

✅ **Improve Data-Driven Decisions**: Optimize ad spend and marketing strategies based on performance insights.

---

This version ensures **proper Markdown structure**, includes **relevant documentation links**, and improves readability. Let me know if you need any further refinements! 🚀

## 🔗 Nodes Used

Airtable, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
