# 📱 Automatic Eventbrite attendance tagging in KlickTipp

> ⚡ **28 views** · 📱 [Social Media & Email Marketing](../)

## Description

![Tag Eventbrite registrants according to attendance in KlickTipp.png](fileId:3036)

&gt; ⚠️ **Community Node Disclaimer**  
&gt; This workflow uses KlickTipp community nodes and works only on **self-hosted** n8n instances.

## Introduction
Automate **attendance tracking for Eventbrite events** and sync participation data to KlickTipp.  
Every 15 minutes, this workflow retrieves attendees, checks who attended, and applies the right segmentation tags.  
Perfect for event marketers who want real-time post-event segmentation—no manual exports needed.

## Who’s it for
For **event organizers**, **digital marketers**, and **KlickTipp users** who already sync Eventbrite registrants and want to automatically track attendance and update CRM tags.

&gt; 💡 **Prerequisite:** Contacts must exist in KlickTipp.  
&gt; Use the related workflow **“Subscribe Eventbrite orders to KlickTipp”** to import registrants first.

## How it works
1. **Schedule Trigger** runs every 15 min.  
2. **Eventbrite API** fetches the latest attendees.  
3. **Split Out** processes each record.  
4. **Switch (Attendance Check)** evaluates `checked_in`:  
   - ✅ **Checked in** → `Eventbrite | Participated`  
   - ❌ **Not checked in** → `Eventbrite | Not participated`  
5. **KlickTipp Nodes** apply tags automatically.  
6. Segmentation in KlickTipp updates instantly.

## Requirements
- Self-hosted n8n (community node support)  
- Eventbrite account (OAuth2)  
- KlickTipp account (API access)  
- Tags in KlickTipp:  
  - `Eventbrite | Participated`  
  - `Eventbrite | Not participated`

## How to set up
1. **Connect accounts:** Eventbrite (OAuth2) & KlickTipp (API).  
2. **Set Event ID:** edit Eventbrite node URL → `/events/{event_id}/attendees/`.  
3. **Update Tag IDs:** replace with your KlickTipp IDs.  
4. **Test:** run manually or wait for trigger; verify correct tags.  

&gt; ⚠️ *Important:* Eventbrite must record check-ins via the **Organizer App** or barcode scan for accurate tagging.

## How to customize
- Adjust **trigger frequency** (e.g., 5 min during event).  
- Duplicate for **multiple events**.  
- Extend logic for **ticket type**, **VIP**, or **refunds**.  
- Combine with **Eventbrite Order Sync** for a full funnel:  
  `Registration → Participation → Refund`.

## Campaign expansion ideas
- **Refund tagging:** detect `refunded: true` and tag accordingly.  
- **Post-event automation:**  
  - `Participated` → thank-you or upsell sequence.  
  - `Not participated` → replay or follow-up invite.  
- **Performance insights:** use tags for segmentation analytics and ROI tracking.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
