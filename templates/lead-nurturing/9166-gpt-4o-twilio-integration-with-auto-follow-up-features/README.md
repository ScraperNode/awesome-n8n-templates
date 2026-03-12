# 💬 GPT-4o: Twilio integration with auto follow-up features

> ⚡ **217 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### How it works
• Twilio webhook detects missed/unanswered calls automatically
• Analyzes call context (time of day, business hours, weekend/weekday)
• Checks CRM for existing customer data and purchase history (optional)
• AI Chain (GPT-4o) generates personalized recovery messages for SMS and Email
• Sends instant apology with booking link via SMS and/or Email
• Logs all interactions to Airtable for tracking
• Slack alerts sales team with customer priority and context
• Waits 24 hours and checks if customer booked
• Sends automatic follow-up SMS if no booking detected
• Structured output parser ensures reliable JSON formatting

### Set up steps
• **Time to set up:** 15-20 minutes
• Add Twilio credential and configure phone number in both SMS nodes
• Get Slack channel ID for sales team alerts
• Create Airtable base with 10 columns (Caller_Number, Customer_Name, Call_Time, Priority, SMS_Sent, Email_Sent, Booking_Link, Status, Urgency_Score, Follow_Up_Date)
• Replace booking URL with your Cal.com or Calendly link
• Configure business email for SMTP sending
• Update business phone and name in follow-up SMS
• Add credentials: Twilio API, OpenAI (GPT-4o), Slack OAuth2, Airtable Token, SMTP Email
• Replace placeholder IDs in Slack and Airtable nodes
• Optional: Configure CRM API for existing customer lookup (or disable those nodes)

### What you'll need
• **Twilio** - Phone number with SMS capability
• **OpenAI API** - GPT-4o access for AI message generation
• **Slack** - Standard workspace for sales alerts
• **Airtable** - Free plan works for call tracking
• **Email SMTP** - Gmail, SendGrid, or any SMTP provider
• **Cal.com or Calendly** - Booking link for instant scheduling
• **CRM API** (optional) - HubSpot, Salesforce, or custom CRM

### Who this is for
Service businesses, agencies, and sales teams that lose revenue from missed calls. Perfect for businesses with high call volume that need instant personalized follow-up to recover lost opportunities.

## 🔗 Nodes Used

Airtable, Send Email, HTTP Request, Slack, Twilio, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
