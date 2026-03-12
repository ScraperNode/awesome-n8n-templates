# 📊 Monitor German company register & financial events with Implisense API & notifications

> ⚡ **55 views** · 📊 [Market Research & Insights](../)

## Description

This n8n workflow monitors significant register, financial, and news-related events for German companies. It takes a list of companies (for example from a CRM or lead list), resolves them via the Implisense / German Company Data API, retrieves recent company events, normalizes and filters them by relevance (e.g. management changes, financing, M&A, insolvency), deduplicates results, and prepares structured notifications with urgency levels. The output can be routed to email, chat tools, webhooks, or downstream systems such as CRMs or data stores for continuous company monitoring and alerting.

## Setup steps

1. **Replace Mock Data**: Change "Mock Lead Input" node to your actual lead source
   - CRM connector (Salesforce, HubSpot, etc.)
   - Database query
   - CSV import

2. **Configure Credentials**: Set up RapidAPI API credentials
   - Create an account on RapidAPI  (free tier available)
    - [RapidAPI](https://rapidapi.com/Implisense/api/German%20Company%20Data)
   - Insert your RapidAPI x-rapidapi-key as password

3. **Adjust Notification**: Configure your peferred Notification system if needed

4. **Connect Output**: Add nodes after the 'Create Summary' node

## 🔗 Nodes Used

Function, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
