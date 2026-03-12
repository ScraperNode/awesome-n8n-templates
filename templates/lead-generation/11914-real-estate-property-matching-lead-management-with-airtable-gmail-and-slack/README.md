# 🎣 Real estate property matching & lead management with Airtable, Gmail and Slack

> ⚡ **267 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## ✅ What problem does this workflow solve?

Real estate leads move fast. Manually matching buyer requirements with available properties, sending details, updating CRM records, and notifying sales teams often causes delays and missed opportunities.

This workflow automates **property discovery, lead management, and team notifications**, ensuring buyers get instant results and sales teams can follow up immediately.

---

## ⚙️ What does this workflow do?

- Captures buyer property requirements from a website form.
- Cleans and standardizes search data automatically.
- Matches buyer criteria with relevant properties from Airtable.
- Emails matched properties to the buyer instantly.
- Stores lead details in Airtable for CRM tracking.
- Notifies the sales team on Slack in real time.

---

## 💡 Main Use Cases

- Automatically match buyer requirements with properties in Airtable.
- Send personalised property listings to buyers via email.
- Store and track every lead centrally for sales follow-up.
- Notify agents instantly to improve response speed.
- Increase conversions with faster, automated engagement.

---

## 🧠 How It Works – Step by Step

### 1. Website Form Submission
A buyer submits a property inquiry form with:
- Location / City  
- Property type (Apartment, Villa, Commercial, etc.)  
- Budget  
- Contact details  

The workflow is triggered instantly via webhook.

---

### 2. Data Cleaning & Standardization
Submitted inputs are cleaned and structured:
- Budget is normalised
- City and property type are standardised
- Data is prepared for property matching

---

### 3. Property Matching (Airtable)
- A dynamic matching formula is generated.
- Airtable is searched for relevant properties.
- Matching includes a **±5% budget tolerance** for flexibility.

---

### 4. Send Matched Properties to Buyer
- A rich, formatted email is generated automatically.
- Includes property images, price, location, features, and a “View More Details” link.
- Email is sent instantly to the buyer.

---

### 5. Lead Storage in Airtable
- Buyer details and preferences are stored in the **Buyers** table.
- Lead status is set to **New** for CRM tracking and follow-up.

---

### 6. Sales Team Notification
- A Slack message is sent to the sales channel with:
  - Buyer details
  - Contact information
  - City and preferred property type
- Agents can respond immediately to maximize conversion.

---

## 🗂 Integrations Used

- **Webhook** – Capture property inquiry submissions
- **Airtable** – Property database and lead CRM
- **Gmail** – Email delivery to buyers
- **Slack** – Real-time sales team alerts
- **n8n Code Nodes** – Dynamic matching logic and email generation

---

## 👤 Who can use this?

This workflow is ideal for:
- 🏢 Real estate agencies
- 🏘 Property brokers
- 📈 Sales-driven real estate teams
- 🚀 PropTech startups

If your team wants faster lead response and smarter property matching, this automation delivers both.

---

## 🚀 Benefits

- ✅ No manual property searching
- ✅ Faster response times
- ✅ Centralised lead tracking
- ✅ Real-time sales alerts
- ✅ Better buyer experience

## 🔗 Nodes Used

Airtable, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
