# 🔬 Automated web form data collection and storage to Google Sheets

> ⚡ **649 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Automated Web Form Data Collection and Storage to Google Sheets

## Overview

This **n8n workflow** allows you to collect data from a web form and automatically store it in a Google Sheet. It includes data cleanup, date stamping, optional batching, and throttling for smooth handling of single or bulk submissions.

---

## What It Does

- Accepts data submitted from a frontend form via **HTTP POST**
- Cleans and structures the incoming JSON data
- Adds the current date automatically
- Appends structured data into a predefined **Google Sheet**
- Supports optional **batch processing** and a **wait/delay mechanism** to control data flow

---

## Features

- Webhook trigger for external form submissions  
- JavaScript-based data cleaning and formatting  
- Looping and delay nodes to manage bulk submissions  
- Direct integration with Google Sheets via OAuth2  
- Fully mapped columns to match sheet structure  
- Custom date field (`submitted_date`) auto-generated per entry  

---

## Who’s It For

This workflow is perfect for:

- Developers or marketers collecting lead data via online forms  
- Small businesses tracking submissions from landing pages or contact forms  
- Event organizers managing RSVP or booking forms  
- Anyone needing to collect and store structured data in Google Sheets automatically

---

## Prerequisites

Make sure the following are ready before use:

- An **n8n instance** (self-hosted or cloud)  
- A **Google account** with edit access to the target Google Sheet  
- **Google Sheets OAuth2 API credentials** configured in n8n  
- A web form or app capable of sending **POST requests** with the following fields:
  - `business_name`
  - `location`
  - `whatsapp`
  - `email`
  - `name`

---

## Google Sheet Format

Ensure your Google Sheet contains the following **exact column names** (case-sensitive):

| Business Name | Location   | WhatsApp Number | Email               | Name           | Date       |
|---------------|------------|------------------|----------------------|----------------|------------|
| SpaGreen      | Bangladesh | 8801322827753    | spagreen@gmail.com   | Abdul Mannan   | 2025-09-14 |
| Dev Code Journey  | Bangladesh | 8801322827753   | admin@gmail.com   | Shakil Ahammed | 2025-09-14 |

&gt; Note: The "Email" column includes a **trailing space** — this must match exactly in both the sheet and column mapping settings.

---

## Setup Instructions

### 1. Configure Webhook

- Use the **Webhook** node with path:  
  `/93a81ced-e52c-4d31-96d2-c91a20bd7453`  
- Accepts **POST requests** from a frontend form or application  

### 2. Clean Incoming Data

- The **JavaScript (Code)** node extracts the submitted fields  
- Adds a `submitted_date` in `YYYY-MM-DD` format  

### 3. Loop Over Items (Optional for Batches)

- The **Split In Batches** node allows handling bulk form submissions  
- For single entries, the workflow still works without adjustment  

### 4. Append to Google Sheet

- The **Google Sheets** node appends each submission as a new row  
- Mapped fields include:
  - Business Name  
  - Location  
  - WhatsApp Number  
  - Email  
  - Name  
  - Date (auto-filled)

### 5. Add Delay (Optional)

- The **Wait** node adds a 5-second delay per loop  
- Helps throttle requests when handling large batches

---

## How to Use It

1. Clone or import the workflow into your n8n instance  
2. Update the **Webhook URL** in your frontend form’s POST action  
3. Connect your **Google Sheets account** in the Google Sheets node  
4. Confirm that your target sheet matches the required column structure  
5. Start sending data from your form — new entries will appear in your sheet automatically  


&gt; This setup ensures form submissions are received, cleaned, stored efficiently, and processed in a controlled manner.
---

## Notes

- Use the **Sticky Notes** in the workflow to understand each node’s purpose  
- You can modify the delay duration or disable looping for single submissions  
- For added security, consider securing your webhook with headers or tokens  

---

## Ideal Use Cases

- Contact forms  
- Lead capture pages  
- Event signups or bookings  
- Newsletter or email list opt-ins  
- Surveys or feedback forms  

---
## Support
- WhatsApp Support: [Chat Now](https://wa.me/8801322827799) 
- Discord: [Join SpaGreen Community](https://discord.gg/SsCChWEP) 
- Facebook Group: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd) 
- Website: [spagreen](https://spagreen.net) 
- Developer Portfolio: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
