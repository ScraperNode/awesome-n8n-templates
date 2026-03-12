# 🎣 Auto-save Instagram leads to Google Sheets

> ⚡ **587 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# 🚀 Auto-Save Instagram Leads to Google Sheets

This workflow automatically captures leads submitted through an Instagram Form and saves the data directly to a Google Sheet. It ensures that every new lead is instantly logged, creating a centralized database for your marketing and sales teams.

---

## ⚙️ How It Works

1. **Receive Lead Data**  
   The workflow starts with an **Instagram Lead Webhook** that listens for new lead submissions from your Instagram account's lead form.

2. **Normalize Data**  
   A **Code node** processes the raw data received from Instagram. This node normalizes the lead information, such as name, email, and phone number, into a consistent format. It also adds a **"Source"** field to identify the lead as coming from Instagram and timestamps the entry.

3. **Save to Google Sheets**  
   Finally, the **Save to Google Sheets node** takes the normalized data and appends it as a new row in your designated Google Sheet. It uses the email field to check for existing entries and can either append a new row or update an existing one, preventing duplicate data.

---

## 🛠️ Setup Steps

### 1. Create Google Sheet
- Create a new Google Sheet with the following headers in the first row (A1):  

### 2. Get Sheet ID
- Find your **Sheet ID** in the URL of your Google Sheet.  
- It's the long string of characters between `/d/` and `/edit`.  
- Example:  
- Replace `YOUR_GOOGLE_SHEET_ID` in the **Save to Google Sheets** node with your actual ID.

### 3. Connect Instagram Form
- Copy the **Webhook URL** from the "Instagram Lead Webhook" node.  
- In your Instagram lead form settings, paste this URL as the webhook destination.  
- Ensure your form fields are mapped correctly (e.g., **name, email, phone, message**).

---
✅ Once configured, every Instagram lead will instantly appear in your Google Sheet — organized, timestamped, and ready for follow-up.

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
