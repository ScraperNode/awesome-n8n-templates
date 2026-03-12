# 🎣 Qualify & auto-reply to leads with OpenAI, Airtable, and Gmail

> ⚡ **199 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## 🧠 How it works
This workflow turns your website form into a fully automated AI Lead Qualification system.  
Whenever a new lead submits your form, the workflow:

1. Receives the submission through a Webhook  
2. Cleans and normalizes the input fields  
3. Uses the AI Agent node to score and qualify the lead  
4. Saves all details (including AI analysis) into an Airtable CRM  
5. Automatically routes high-quality leads (score ≥ 7)  
6. Sends an instant Gmail notification  
7. Sends an AI-generated personalized auto-reply back to the lead  

This gives you a hands-free, intelligent front-door to your business — ensuring you only spend time on high-value opportunities.

---

## ⚙️ Set-up steps
These steps help users configure the workflow quickly:

1. **Create a Webhook trigger**  
   – Copy the webhook URL and add it to your form tool (Tally, Typeform, Webflow, etc.).

2. **Prepare your Airtable base**  
   – Create a "Leads" table with fields for name, email, website, message, lead score, priority, use case, timeline, budget, and AI notes.

3. **Add the AI Agent node**  
   – Insert the provided System + User prompts  
   – Enable Structured Output  
   – Paste the JSON Schema included in the sticky note inside the workflow.

4. **Connect Airtable**  
   – Map the original form fields + AI Agent “output” fields to Airtable columns.

5. **Set up the Gmail node**  
   – Connect your Gmail account  
   – Configure the notification email and auto-reply templates.

6. **Configure the IF node**  
   – Score ≥ 7 routes to the “Hot Lead” branch  
   – Everything else is captured but not routed.

7. **Run a test submission**  
   – Verify that the workflow writes to Airtable  
   – Confirm the Gmail notification + auto-reply are delivered  
   – Adjust prompting if needed.

All detailed explanations and prompt configurations are included inside the workflow through sticky notes for easy reference.

## 🔗 Nodes Used

Airtable, Slack, Gmail, Gmail Trigger, WhatsApp Business Cloud, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
