# 💬 Automated personalized email outreach with AI, database tracking & scheduling

> ⚡ **421 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# Initial Outreach Email Workflow

This n8n template demonstrates how to automate personalized cold email outreach using AI and a lead database.  
It’s designed to contact unengaged leads, personalize messages at scale, and schedule follow-ups automatically.  

**Use cases are many:** Reach out to new leads, qualify prospects, start conversations, and set up consistent follow-up routines.  
Great for sales teams, recruiters, and agencies running cold outreach campaigns.  

---

## Good to know
- Each AI personalization costs about **$0.001 with Groq** (free tier available; pricing may vary by provider).  
- The workflow limits emails to **15 per day by default** to protect your email reputation and reduce spam risk.  
- The email template is fully customizable to match your **brand tone and offer**.  
- Outreach timing and follow-up intervals are easy to adjust within the workflow.  

---

## How it works
- **NocoDB** fetches leads who haven’t been contacted yet (no “Initial Contact Date”).  
- The **Limit node** ensures no more than 15 emails per run.  
- **AI personalizes** your chosen email template with lead name and company.  
- Emails are sent via **SMTP or Gmail node**.  
- Each contacted lead is updated in the database with today’s **Initial Contact Date** and a **Next Follow-up Date** (default 3 days later).  
- The workflow runs on a **daily schedule** at 10:30 AM (configurable).  

---

## How to use
- Set up a **NocoDB/any database table** with:  
  - `first_name`  
  - `email`  
  - `Initial Contact Date`  
  - `Next Follow up/Contact`  
  - `organization_name` (optional)  
- Customize the **email template** inside the AI node.  
- Adjust the **daily limit** and schedule to match your outreach capacity.  
- Import leads into NocoDB and configure credentials for **NocoDB, AI provider, and SMTP**.  
- Run the workflow manually for testing before going live.

## 🔗 Nodes Used

Send Email, NocoDB, Schedule Trigger, Filter, Basic LLM Chain, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
