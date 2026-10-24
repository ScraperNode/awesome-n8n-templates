# 📱 Tag Zoom webinar attendance by engagement thresholds with KlickTipp

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow listens for Zoom meeting end events, fetches past-meeting participants and approved registrants, calculates each person’s attendance level, and then tags or subscribes contacts in KlickTipp with attended, fully attended, or not attended tags for webinar follow-up segmentation.

## How it works
1. Receives a Zoom webhook event when a meeting ends and handles Zoom’s endpoint URL validation challenge when required.
2. Responds to Zoom immediately and then waits 60 seconds to ensure the past-meeting reports are available.
3. Calls the Zoom API to retrieve all past-meeting participants (paginated) and the meeting’s approved registrants (paginated, ignored if registration is disabled).
4. Aggregates participant sessions by email, resolves missing emails via registrant IDs, calculates attendance ratio against the actual meeting length, and classifies each person as attended/fully attended or not attended.
5. For attendees, looks up the contact in KlickTipp and either tags the existing contact as attended or subscribes a new contact (using the Zoom name) with the attended tag.
6. If an attendee’s ratio exceeds the configured threshold (default 90%), adds the “fully attended” tag in KlickTipp.
7. For registrants who never joined, tags the existing KlickTipp contact as “not attended” (and skips unknown contacts).

## Setup
1. Create a Zoom app with Event Subscriptions for `meeting.ended`, add the workflow’s webhook URL to Zoom, and set the webhook secret token used for the HMAC URL validation response.
2. Add Zoom OAuth2 credentials in n8n with permissions to read past meeting participants and registrants.
3. Add KlickTipp API credentials (community KlickTipp node) in n8n.
4. Create the required KlickTipp tags for each webinar (attended, fully attended, not attended) and enter their numeric tag IDs and meeting topic match strings in the workflow’s configuration code.
5. Set the KlickTipp opt-in process/list ID used when subscribing new contacts.

## Requirements
- n8n instance with permission to install community nodes (n8n-nodes-klick-tipp)
- Zoom account with Webinar add-on and Server-to-Server OAuth / Webhook access
- Active KlickTipp account with API access
- Companion workflow: Automate Webinar Registration with Zoom & KlickTipp Form Integration (must be active)

## Customization
- Adjust Thresholds: Change the percentage values in the IF nodes (e.g., change full attendance from 90% to 80% or specify exact minute thresholds).
- Add More Topics: Duplicate the routing branches and IF blocks to support additional webinar titles and categories.
- Error Handling: Add error trigger nodes or notification channels (e.g., Slack, email) for failed API requests or unregistered attendees.
- Additional Contact Fields: Map extra participant metadata (such as join time or questions asked) into custom KlickTipp contact fields.

## 🔗 Nodes Used

HTTP Request, Webhook, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
