# 🎣 Qualify Meta ads leads with WhatsApp verification, Gemini AI & Zoho CRM

> ⚡ **2,185 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## 🧩 What Problem Does It Solve?
Meta’s ad forms often generate unqualified leads from casual scrollers. This workflow uses WhatsApp and AI to automatically verify, qualify, and prioritize real leads — saving time and boosting sales efficiency.

# 📝 Description
This workflow automates lead qualification for businesses using Meta Ads (Facebook/Instagram Lead Ads) to filter out irrelevant leads. It ensures only confirmed prospects enter your CRM by:

Collecting new Facebook leads

Verifying via WhatsApp confirmation

Classifying responses with AI

Updating CRM status based on intent

When a new Facebook lead arrives:

Lead details are extracted (name/phone/email)

Zoho CRM is checked for existing contacts

WhatsApp confirmation request is sent

AI classifies the response (confirmed/declined/human/invalid)

CRM status is updated automatically

Sales team receives only verified leads
## 🎯 Key Advantages for Meta Ads
✅ Blocks 60%+ irrelevant leads based on WhatsApp non-response
✅ Reduces fake submissions by requiring active confirmation
✅ Prevents CRM bloat through duplicate checking
✅ Identifies hot leads via instant "human_requested" escalation
✅ Saves sales team hours by auto-declining "no" responses

## 🛠️ Features

Facebook Lead Ads integration via Graph API

WhatsApp messaging via Twilio

AI response classification (Gemini)

Zoho CRM synchronization

Duplicate lead prevention

Customizable confirmation flow

Error-resistant JSON parsing

CRM owner assignment

Status-based routing

## 🔧 Requirements

Facebook Access Token with ads_management & leads_retrieval permissions

Twilio Account with WhatsApp-enabled number

Zoho CRM with custom "Status" field

Gemini API Key (or alternative LLM)

n8n credentials configured for:

Twilio (API SID/token)

Zoho CRM (OAuth2)

Google Gemini (or alternative LLM)

## ⚙️ Customization Tips
1-Adjust Classification Criteria
Modify the AI prompt in Classify Response (AI) node
2-Customize CRM Status Values
Update field IDs in Zoho nodes
3-Modify Messaging
Edit WhatsApp templates in Send WhatsApp Confirmation
4-Set Owner Assignment
Replace owner ID in Prepare Owner ID node

## 🧠 Use Case Examples

Real Estate Agencies: Filter speculative inquiries from serious buyers

Medical Clinics: Verify appointment requests before scheduling

SAAS Companies: Qualify free trial sign-ups

Education Providers: Confirm course interest before counselor assignment

Auto Dealerships: Screen test drive requests from tire-kickers

If you need help get in touch on [Linkedin](https://www.linkedin.com/in/abdallaelshikh0/)

## 🔗 Nodes Used

HTTP Request, Webhook, Zoho CRM, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
