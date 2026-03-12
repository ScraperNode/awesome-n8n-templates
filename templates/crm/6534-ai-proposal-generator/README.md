# 🤝 AI proposal generator

> ⚡ **3,707 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Overview
Stop spending hours formatting proposals. This workflow turns a short post-call form into a high-converting, fully-personalized PandaDoc proposal—plus updates your CRM and drafts the follow-up email for you.

After a sales call, just fill out a 3-minute form summarizing key pain points, solutions pitched, and the price. The workflow uses AI to generate polished proposal copy, then builds a PandaDoc draft using dynamic data mapped into the JSON body (which you can fully customize per business). It also updates the lead record in ClickUp with the proposal link, company name, and quote—then creates an email draft in Gmail, ready to send.

### Who’s it for
- Freelancers and consultants sending service proposals  
- Agencies closing deals over sales calls  
- Sales reps who want to automate proposal follow-up  
- Teams using ClickUp as their lightweight CRM  

### How it works
- After a call, fill out a short form with client details, pitch notes, and price  
- AI generates professional proposal copy based on form input  
- Proposal is formatted and sent to PandaDoc via HTTP request  
- ClickUp lead is updated with:
  - Company Name  
  - Proposal URL  
  - Quote/price  
- A Gmail draft is created using the proposal link and a thank-you message  

### Example use case
&gt; You hop off a call, fill out:  
&gt; - Prospect: Shopify agency  
&gt; - Pain: No lead gen system  
&gt; - Solution: Automated cold outreach  
&gt; - Price: $2,500/month  
&gt;  
&gt; 3 minutes later: PandaDoc proposal is ready, CRM is updated, and your email draft is waiting to be sent.

### How to set up
1. Replace the form with your preferred tool (e.g. Tally, Typeform)  
2. Connect PandaDoc API and structure your proposal template  
3. Customize the JSON body inside the HTTP request to match your business  
4. Link your ClickUp space and custom fields  
5. Connect Gmail (or other email tool) for final follow-up draft  

### Requirements
- Form tool for capturing sales call notes  
- OpenAI or LLM key for generating proposal copy  
- PandaDoc API access  
- ClickUp custom fields set up for lead tracking  
- Gmail integration

### How to customize
- Customize your PandaDoc proposal fields in the JSON body of the HTTP node  
- Replace ClickUp with another CRM like HubSpot or Notion  
- Adjust AI tone (casual, premium, corporate) for proposal writing  
- Add Slack or Telegram alerts when the draft is ready  
- Add PDF generation or auto-send email step

## 🔗 Nodes Used

HTTP Request, Typeform Trigger, ClickUp, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
