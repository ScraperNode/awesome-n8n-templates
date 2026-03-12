# 🎣 Sync leads between Google Sheets and HubSpot contacts

> ⚡ **6 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_reczH8mtRj3GIIRiU.jpg)](https://youtu.be/GBKXYh2j74o)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## Workflow Overview

This workflow automatically imports leads from a Google Sheets spreadsheet directly into your HubSpot account. When executed, it reads contact information from a designated spreadsheet and creates or updates corresponding contact records in HubSpot, preventing duplicates by matching on email addresses.

This automation is ideal for teams that collect leads through external forms, landing pages, or other systems that output to Google Sheets. Instead of manually copying contact information into HubSpot, this workflow handles the entire import process, ensuring your CRM stays up-to-date with minimal effort.

## Key Features

- Automatically syncs contact data including email, name, company, and phone number
- Prevents duplicate records by updating existing contacts based on email addresses
- Works with any Google Sheets document containing lead information
- Can be scheduled to run automatically or triggered manually on demand

## Setup Requirements

**HubSpot Credentials:**
1. Create a developer account at `developers.hubspot.com`
2. Navigate to **Legacy Apps** and create a new **private app**
3. In the **Scopes** tab, add these permissions:
   - `crm.objects.contacts.read`
   - `crm.objects.contacts.write`
   - `crm.objects.companies.read`
   - `crm.objects.companies.write`
4. Copy the **Access Token** from the **Auth** tab
5. In n8n, create a HubSpot credential using **APP Token** method and paste your token

**Google Sheets:**
Connect your Google account to n8n when configuring the Google Sheets node.

## Configuration

Update the Google Sheets node to point to your specific spreadsheet containing lead data. The HubSpot node is pre-configured to map common contact properties (Email, Company Name, Name, Phone Number). Adjust these field mappings if your spreadsheet uses different column names or if you need to sync additional contact properties.

## 🔗 Nodes Used

Google Sheets, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
