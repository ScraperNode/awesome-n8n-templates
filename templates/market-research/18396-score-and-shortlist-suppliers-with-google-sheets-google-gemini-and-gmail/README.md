# 📊 Score and shortlist suppliers with Google Sheets, Google Gemini, and Gmail

> ⚡ **28 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow receives an RFx request via webhook, pulls the matching requirements from Google Sheets, finds candidate suppliers from a supplier master sheet, and uses Google Gemini plus an external supplier-intelligence API to score, rank, email, and log the top supplier recommendations.

## How it works
1. Receives an RFx request via a POST webhook containing a request_id.
2. Reads sourcing requests from Google Sheets and keeps only the row whose Request_ID matches the incoming request_id.
3. Normalizes the RFx fields (category, country, certification, ESG/diversity requirements, and search criteria) and queries a Supplier_Master Google Sheet for suppliers matching category, country, and certification.
4. Combines each matched supplier with the RFx details and sends the combined data to Google Gemini to return a JSON fit assessment (ai_fit_score, strength, and recommendation).
5. Parses the AI JSON, merges it back into the supplier record, and calls an HTTP supplier-intelligence endpoint to add risk/financial fields.
6. Calculates a weighted final_score, sorts suppliers by score, and keeps the top 5.
7. Sends the shortlisted suppliers via Gmail and appends the results to a Supplier_Shortlist_Log Google Sheet for auditing.

## Setup
1. Configure the source system to POST to the workflow’s webhook URL (/rfx-request) with a request_id that matches a Request_ID in your sheet.
2. Add a Google Sheets credential and set the spreadsheet/sheet names for Sourcing_Requests, Supplier_Master, and Supplier_Shortlist_Log.
3. Add Google Gemini (PaLM) API credentials for the Gemini chat model used in the supplier fit analysis.
4. Configure the HTTP Request node with your supplier-intelligence API URL/authorization and ensure it returns fields used in scoring (for example risk_score, risk_level, and financial_health_score).
5. Add a Gmail credential and set the recipient(s)/email options for the supplier shortlist notification.

## Additional info
## How To Customize Nodes

### RFx Request Webhook

Customize:

* Request payload structure
* Authentication layer
* External integrations

### Find Matching Suppliers

Add additional supplier filters such as:

* Industry
* Region
* Revenue
* Supplier Tier
* Preferred Vendor Status

### AI Supplier Match Analysis

Modify the Gemini prompt to evaluate:

* Sustainability targets
* Risk tolerance
* Industry compliance
* Supplier innovation capabilities
* Cost competitiveness

### Get Supplier Intelligence

Replace the placeholder API with:

* Risk intelligence platforms
* Supplier verification systems
* ESG data providers
* Financial monitoring services

### Calculate Final Score

Adjust scoring weights to align with business priorities.

Examples:

* Increase ESG weighting
* Increase risk penalties
* Reward supplier diversity
* Prioritize supplier experience

### Create Supplier Shortlist

Modify the maximum supplier count.

Examples:

* Top 3 suppliers
* Top 10 suppliers
* Category-specific shortlists


## Add-Ons

Consider extending the workflow with:

### Supplier Risk Monitoring

Automatically monitor suppliers for risk changes and trigger alerts.

### Contract Management Integration

Push approved suppliers into contract management systems.

### ERP Integration

Create supplier records in ERP platforms automatically.

### Approval Workflows

Require sourcing manager approval before sending recommendations.

### Supplier Performance Tracking

Track awarded suppliers and compare actual performance against AI recommendations.

### Dashboard Reporting

Connect Power BI, Looker Studio, or Tableau for sourcing analytics.

### Multi-Country Supplier Search

Expand supplier matching across multiple sourcing regions.


## Use Case Examples

### 1. Manufacturing Supplier Discovery

Identify certified manufacturing suppliers that meet category, location, and compliance requirements.

### 2. ESG-Focused Sourcing

Prioritize suppliers with strong ESG performance and sustainability alignment.

### 3. Diverse Supplier Programs

Support supplier diversity initiatives by rewarding certified diverse suppliers.

### 4. Strategic Sourcing Projects

Generate qualified supplier shortlists for large procurement initiatives.

### 5. Procurement Team Productivity

Reduce manual supplier research and evaluation effort through AI-assisted sourcing.


## Additional Possibilities

The same workflow framework can be adapted for:

* Vendor onboarding
* Partner discovery
* Contractor selection
* Distributor evaluation
* Franchise partner qualification
* Procurement compliance screening
* Supplier benchmarking


## Troubleshooting Guide

| Issue                                   | Possible Cause                             | Solution                                               |
| --------------------------------------- | ------------------------------------------ | ------------------------------------------------------ |
| Webhook request not triggering workflow | Incorrect webhook URL or inactive workflow | Verify webhook URL and activate workflow               |
| RFQ record not found                    | Request_ID mismatch                        | Confirm Request_ID exists in Sourcing_Requests sheet   |
| No suppliers returned                   | Supplier data does not match filters       | Verify Category, Country, and Certification values     |
| Gemini node fails                       | Invalid or missing Gemini credentials      | Reconnect Google Gemini credentials                    |
| AI response parsing error               | AI output is not valid JSON                | Review prompt and enforce JSON-only output             |
| Supplier intelligence API fails         | Invalid URL or authentication issue        | Verify API endpoint and credentials                    |
| Final score appears incorrect           | Missing supplier data fields               | Check ESG, diversity, financial, and experience fields |
| Email not delivered                     | Gmail authentication issue                 | Reconnect Gmail OAuth credentials                      |
| Logging fails                           | Sheet columns do not match mappings        | Verify Supplier_Shortlist_Log schema                   |
| Empty shortlist generated               | No qualified suppliers found               | Expand matching criteria or update supplier database   |


## Need Help?

If you need assistance with:

* Setting up this workflow
* Configuring Google Sheets integrations
* Connecting Gemini AI
* Building supplier intelligence integrations
* Customizing scoring models
* Adding approval workflows
* ERP integrations
* Procurement automation enhancements
* Enterprise-grade sourcing solutions
* [Hiring n8n developers](https://www.weblineglobal.com/hire/n8n-developers/) for building your own customized automation solution

The n8n development team at **WeblineIndia** can help customize, extend and deploy this workflow based on your procurement processes and business requirements.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
