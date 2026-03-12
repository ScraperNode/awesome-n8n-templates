# 📊 Track SEO keyword position in Google SERP (Google Sheets + SerpAPI integration)

> ⚡ **1,779 views** · 📊 [Market Research & Insights](../)

## Description

This **n8n workflow** automates scheduled checks for your target keywords’ positions in Google’s organic search results using **SerpAPI**. It logs new positions in **Google Sheets**, compares them to previous rankings, and sends **notifications via WhatsApp and/or email** based on the movement.  

---

## Problem Statement & Target Audience

### **Who is this for?**  
This workflow is ideal for:
- SEO specialists monitoring keyword rankings.
- Website owners tracking performance.
- Agencies managing multiple client campaigns.

It helps reduce manual effort by automatically checking rankings on a schedule and sending notifications only when there’s movement in position.

---

## Pre-conditions & API Requirements

### **APIs & Services Used**
1. **SerpAPI** – Fetch Google search results  
   - Get API Key: [https://serpapi.com/manage-api-key](https://serpapi.com/manage-api-key)  
   - Docs for usage: [SerpAPI Search API](https://serpapi.com/search-api)  
   - **Note:** Use `Generic` credential type in n8n for this to work with the preset configuration.

2. **Google Sheets API** – To store and update keyword data  
3. **Email API** – To notify users of position changes  
4. **WhatsApp API** (e.g., Twilio, Ultramsg) – To send notifications  

&gt; Setup help for Google Sheets, Email, and WhatsApp is available via the **Docs tab** in each respective node in n8n.

---

## Step-by-Step Workflow Explanation

### 🗓 1. **Scheduled Trigger (Support Workflow)**
- Marks all rows in the sheet as `"notchecked"` in the `checkstatus` column.
- This is the user-defined frequency trigger (e.g. weekly, daily).
- Triggers the main workflow.

### 🚀 2. **Main Workflow Trigger**
- Starts when a row with `checkstatus = notchecked` is found.

### 🔍 3. **HTTP Node (SerpAPI Call)**
- Sends a request to SerpAPI for each keyword.
- Fetches the current Google SERP for that keyword.

### 🧠 4. **JavaScript Node (Parse Position)**
- Loops through the SERP results and finds the position of the target URL.
- Extracts and returns the current rank.

### ✍️ 5. **Google Sheets Node (Update Data)**
- Writes the new ranking into the spreadsheet.
- Updates the `currentposition` and sets `checkstatus` to `"checked"`.

### 🔀 6. **Switch Node (Compare Rankings)**
- Compares `previousposition` with `currentposition`:
  - If rank has improved → send positive alert.
  - If rank has dropped → send negative alert.
  - If unchanged → no alert.

### 📩 7. **Notification Nodes (WhatsApp / Email)**
- Sends a message to chosen channels when a change is detected.

---

## Customization Guide

### ⏱️ Change Frequency
- Adjust the **supporting schedule workflow** to change how often the tracker runs.

### ✉️ Edit Notification Content
- Customize the **WhatsApp and Email message content** in their respective nodes.

### 🔗 Track Multiple URLs per Keyword (Advanced)
- Extend the JavaScript logic if you need to monitor several pages for the same keyword.

### 🌐 Expand Search Engine Targets
- SerpAPI also supports other search engines like Bing and Yahoo. Modify the request params to switch.

---

## How to Set Up This Workflow

### ✅ Step 1: Use This Google Sheets Template
To get started quickly, **make a copy** of the template below:

👉 [Google Sheets Template](https://docs.google.com/spreadsheets/d/1mWXr7qonRLOtNYU8cPYr-PXTNLh6vFasu5L_iAjvdQ0/edit?gid=0#gid=0)

This template includes the required structure:
- `keyword`
- `Website_url`
- `position`
- `timestamp`
- `checkstatus`

&gt; ⚠️ Be sure to make your own copy to edit and connect via the Google Sheets node.

---

### 🔐 Step 2: Configure Your APIs
- **SerpAPI:** Get API key from [serpapi.com/manage-api-key](https://serpapi.com/manage-api-key)
  - Set credential type to `Generic` in n8n for compatibility.
- **Google Sheets, Email & WhatsApp:** Use the instructions found in each node’s **Docs tab** to connect your accounts.

---

### 📦 Step 3: Import the Workflow
- Both the **main keyword tracking workflow** and the **supporting scheduler workflow** are in one file

---

### ▶️ Step 4: The workflow will start
- Since the check status columns will be 'notChecked' **schedule workflow**.
- The update sheets node will update each processed row's checkstatus to 'checked' and the workflow will process the next row
- the schedule trigger workflow will update `checkstatus = notchecked` and triggers the keyword tracking automatically.

---

### 🎉 Done!
From now on, your keyword positions will be monitored at the frequency you set. You’ll receive WhatsApp and/or email updates only when rankings change. in case you need customized workflows or wanna reach out here is my [twitter](https://x.com/juppfy) and [email](mailto:joseph@uppfy.com).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, WhatsApp Business Cloud, Schedule Trigger, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
