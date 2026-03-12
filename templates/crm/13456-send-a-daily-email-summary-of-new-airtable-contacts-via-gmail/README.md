# 🤝 Send a daily email summary of new Airtable contacts via Gmail

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_recidrbznaXlmqFUI.jpg)](https://youtu.be/lQh1fuIrBN8)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## Workflow Overview

This automation sends you a daily email summary of all new contacts added to your Airtable base. Every evening, it searches for contacts created that day, formats them into a clean HTML table, and delivers them directly to your inbox—keeping you updated without any manual effort.

This workflow is perfect for sales teams, recruiters, community managers, or anyone who needs to stay on top of new contacts without manually checking Airtable. Instead of logging into Airtable each day, you'll receive a nicely formatted email with all the essential information about your new contacts, including their name, company, and email address.

## First Setup

**Airtable Connection:**
1. Create a Personal Access Token at [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Add these scopes: `data.records:read`, `data.records:write`, and `schema.bases:read`
3. Grant access to your bases and paste the token into n8n credentials

**Gmail Connection:**
- Connect your Gmail account through n8n's OAuth2 authentication

## Configuration

- **Schedule**: The trigger is set to run daily at 11 PM. Adjust the time in the Schedule Trigger node to match your preference
- **Airtable Base & Table**: Update the Search records node to point to your own Airtable base and contacts table
- **Email Recipient**: Change the recipient email address in the Gmail node to your own
- **Data Fields**: Customize which contact fields appear in the report by modifying the Output Fields in the Airtable node

## 🔗 Nodes Used

Airtable, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
