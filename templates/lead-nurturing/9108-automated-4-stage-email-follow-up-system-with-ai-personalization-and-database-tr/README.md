# 💬 Automated 4-stage email follow-up system with AI personalization and database tracking

> ⚡ **361 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This n8n template demonstrates how to automate personalized cold email follow-ups using AI personalization and database tracking. Perfect for sales teams, recruiters, and agencies managing high-volume outreach.

**Use cases:** Follow up with cold leads, re-engage trial users, nurture conference contacts, recruit candidates, or follow up with proposal recipients.

**PS**: 1) This was created as a Follow Up workflow 
it was not meant for inital outreach. (However if you can customize it to include initial outreach then go ahead)

    2)This workflow sends a maximum of 4 follow Ups



## How it works

* NocoDB fetches all leads and filters those needing follow-up today based on the "Next Follow up/Contact" date
* A switch node routes leads to the appropriate follow-up stage (1-4) based on which follow-ups have already been sent
* AI personalizes each email template by inserting the recipient's name while keeping the rest of the content intact
* Emails are sent via SMTP (or Gmail node), then the database updates to mark the follow-up as sent and schedule the next one
* The workflow runs daily at 10 AM to automatically process follow-ups without manual intervention



## Good to know

* Each AI personalization costs ~$0.001 with Groq (free tier available). See Groq pricing for details.
* Follow-up schedule: Day 3, 7, 12, 16 after initial contact (fully customizable)
* Leads marked "Not Interested" are automatically excluded from future follow-ups
* The workflow only processes leads with an "Initial Contact Date" set - this triggers the entire sequence (The initial Contact is done manually and updated manually)



## How to use

* The schedule trigger runs daily but can be replaced with manual trigger or webhook for immediate testing
* Customize the 4 email templates in the AI nodes to match your brand voice and offering
* Adjust follow-up intervals by modifying the "Update a row" nodes (currently +4 or +5 days between follow-ups)
* Import your lead list to NocoDB with minimum required fields: first_name, last_name, email, Initial Contact Date



## Requirements

* **NocoDB account** - Free lead database (You can use any database-Google Sheets, Airtable etc. However ensure the essential details below are in the database)
* **Groq API key** (or OpenAI/Ollama) - For AI personalization (Swap this for any LLM you like/have)
* **SWITCH** the 'Send Email' nodes for the  **Gmail** Node and set it up using OAuth

## 🔗 Nodes Used

Send Email, NocoDB, Schedule Trigger, Filter, Basic LLM Chain, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
