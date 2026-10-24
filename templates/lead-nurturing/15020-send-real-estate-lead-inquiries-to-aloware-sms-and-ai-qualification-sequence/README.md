# 💬 Send real estate lead inquiries to Aloware SMS and AI qualification sequence

> ⚡ **80 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Description

When a buyer inquires about a property on Zillow, Realtor.com, your IDX site, or Facebook Lead Ads, this workflow instantly creates an Aloware contact with full property details, sends a hyper-personalized SMS referencing the exact listing, and enrolls them in an AI Buyer Qualification sequence.
In real estate, the first agent to respond wins the client. This template gets your name in front of the buyer within seconds — mentioning the specific property they looked at — and kicks off an AI-powered qualification flow that asks about timeline, budget, and pre-approval status.

## How it works

1. A Webhook receives the property inquiry from any lead source (Zillow, Realtor.com, Follow Up Boss, IDX forms, or Facebook/Google Lead Ads).
2. A Set node normalizes the incoming data — buyer name, phone, email, property address, list price, MLS number, and inquiry source.
3. An HTTP Request creates the contact in Aloware via /webhook/forms, storing the property address, price, and MLS# in custom fields and notes.
4. A second HTTP Request sends a personalized SMS: "Hi {name}! This is {agent} from {brokerage}. I saw your interest in {property address} — great choice! Reply YES or call me…"
5. A final HTTP Request enrolls the buyer in an AI Buyer Qualification Sequence that will follow up with calls and texts to qualify timeline, budget, pre-approval status, and preferred showing times.

## How to use

1. Import the JSON into n8n.
2. Add these n8n Variables: ALOWARE_API_TOKEN, ALOWARE_LINE_PHONE, ALOWARE_SEQUENCE_ID, AGENT_NAME, and BROKERAGE_NAME.
3. In Aloware, create an AI Buyer Qualification Sequence (e.g., SMS → AI call → wait 1 day → follow-up SMS) and copy the Sequence ID.
4. Configure your lead source to POST to the Webhook URL:
5. 
6. Zillow Premier Agent → API webhook
7. Follow Up Boss → Outbound webhook
8. IDX website → Contact form webhook
9. Facebook Lead Ads → n8n Facebook trigger node


Activate and test with a sample inquiry.

## Requirements

Aloware account with API access and an outbound line
At least one property lead source that can send webhooks (Zillow, Realtor.com, Follow Up Boss, IDX site, Facebook Lead Ads, etc.)

#### Customising this workflow

Edit the SMS in the "Aloware: Send Property Inquiry SMS" node — mention open house dates, neighborhood highlights, or a virtual tour link.
Add a branch after contact creation to tag the contact with the property type (condo, single-family, etc.) for segmented follow-up.
Duplicate this workflow for listing inquiries vs. buyer inquiries with different sequences and messaging.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
