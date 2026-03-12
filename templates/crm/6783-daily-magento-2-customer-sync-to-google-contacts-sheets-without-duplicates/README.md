# 🤝 Daily Magento 2 customer sync to Google Contacts & Sheets without duplicates

> ⚡ **191 views** · 🤝 [CRM & Sales Operations](../)

## Description

### Automatically sync newly registered Magento 2 customers to Google Contacts and Google Sheets every 24 hours — with full duplication control and seamless automation.

This workflow is a plug-and-play customer contact automation system designed for Magento 2 store owners, marketers, and CRM teams. It fetches customer records registered within the last 24 hours (from 00:00:00 to 23:59:59), checks against an existing Google Sheet to avoid reprocessing, and syncs only the new ones into Google Contacts. This ensures your contact list is always fresh and up to date — without clutter or duplicates.

#### ✅ What This Workflow Does:
1. Automates Customer Syncing
2. Every day, it fetches newly registered Magento 2 customers via API based on the exact date range (midnight to midnight).
3. Deduplicates Using Google Sheets
4. A master Google Sheet tracks already-synced emails. Before adding a customer, the workflow checks this list and skips if already present.
5. Creates Google Contacts Automatically
6. For each unique customer, it creates a new contact in your Google Contacts, saving fields like first name, last name, and email.
7. Logs New Entries to Google Sheets
8. In Google Sheets, it even records magento 2 customer group, created_at, website_id & store_id
8. After syncing, it adds each new email to the tracking sheet, building a cumulative record of synced contacts.
9. Fully Scheduled & Automated
10. Can be scheduled with the Cron node to run daily (e.g., 12:05 AM) with no manual intervention required.

#### 🔧 Modules Used:
- HTTP Request (Magento 2 API)
- Date & Time (for filtering registrations)
- Google Sheets (for reading/writing synced emails)
- Google Contacts (for contact creation)
- Set, IF, and Merge nodes (for control logic)
- Cron (for scheduling the automation)

#### 💼 Use Cases:
- Keep your email marketing tools synced with Magento 2 customer data.
- Build a CRM-friendly contact base in Google Contacts without duplicates.
- Share customer data with sales or support teams through synced Google Sheets.
- Reduce manual work and human error in data transfer processes.

#### 🔒 Credentials Required

- Magento 2 Bearer Auth: Set up as a credential in n8n using your Magento 2 API access token.
- Google API 

#### 📂 Category

E-commerce → Magento 2 (Adobe Commerce)

#### 💬 Need Help?

💡 Having trouble setting it up or want to customize this workflow further?
Feel free to reach out — I’m happy to help with setup, customization, or Magento 2 API integration issues.

Contact: Author

### 👤 Author

Kanaka Kishore Kandregula
Certified Magento 2 Developer
https://gravatar.com/kmyprojects
https://www.linkedin.com/in/kanakakishore

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Contacts, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
