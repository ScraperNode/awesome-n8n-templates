# 🤝 Sync Eventbrite orders & refunds to KlickTipp for automated event marketing

> ⚡ **97 views** · 🤝 [CRM & Sales Operations](../)

## Description

![Subscribe Eventbrite orders to KlickTipp3.png](fileId:3105)


**Community Node Disclaimer**  
This workflow uses KlickTipp community nodes and works only on **self-hosted** n8n instances.

## Introduction
Automate **Eventbrite order and refund processing** by syncing data directly to **KlickTipp**.  
Whenever a participant registers or requests a refund, their profile is updated with event details and tags—keeping your segmentation accurate and automated.

## Who’s it for
Perfect for **event organizers**, **digital marketers**, and **automation specialists** using Eventbrite and KlickTipp who want to eliminate manual imports and keep contact data consistent.

## How it works
1. **Eventbrite Trigger** captures `order.placed` and `order.refunded` events.  
2. **Switch Node** routes logic:
   - 🟢 *Order placed* → Adds contact, fetches event data, and tags buyer.  
   - 🔴 *Refunded* → Adds refund tag and removes buyer tag.  
3. **Enrichment** stores event name, page URL, and end date in KlickTipp fields.  
4. **Fee check** applies extra segmentation for paid vs. free events.  
5. KlickTipp updates contacts automatically—no manual steps needed.

## Requirements
- Self-hosted **n8n** (community node support)  
- **Eventbrite** account (OAuth2)  
- **KlickTipp** account (API access)  
- KlickTipp custom fields:
  - `Eventbrite | Event name`  
  - `Eventbrite | Start timestamp`  
  - `Eventbrite | Event page URL`  
- KlickTipp tags:
  - `Eventbrite | Buyer`  
  - `Eventbrite | Refundee`  
  - `Eventbrite | Registrant`

## How to set up
1. **Connect accounts:** Eventbrite (OAuth2) & KlickTipp (API).  
2. **Map fields:** Event name, date, and URL to KlickTipp custom fields.  
3. **Update tag IDs:** Replace with your own KlickTipp IDs.  
4. **Test the flow:** Place an order → verify tags → trigger a refund to test removal.  

&gt; 💡 *Tip:* Enable auto tag removal in KlickTipp so `Buyer` tags are removed when `Refundee` tags are added.

## How to customize
- Adapt field mappings to match your KlickTipp setup.  
- Adjust tag rules for different event types or ticket tiers.  
- Extend for multiple events or recurring campaigns.

## Campaign expansion ideas
- Track **attendance vs. no-shows** using participation tags.  
- Add **VIP or ticket-type** segmentation.  
- Trigger **follow-up automations** for refundees or attendees.  
- Connect to other tools for reminders, surveys, or upsells.

## 🔗 Nodes Used

HTTP Request, Eventbrite Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
