# 💬 Tag Zoom webinar attendance by engagement thresholds with KlickTipp

> ⚡ **109 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Automatically tag Zoom webinar participants in KlickTipp based on attendance duration. This workflow validates Zoom webhooks, retrieves attendance metrics, evaluates engagement thresholds (such as full, partial, or no attendance), routes by topic, and applies targeted tags for automated follow-up campaigns.

## How it works
1. Webhook Trigger & HMAC Verification: The workflow receives the Zoom webinar.ended event webhook and validates the endpoint challenge using HMAC SHA-256.
2. Fetch Webinar & Attendee Details: Using the webinar UUID, it calls the Zoom API to fetch past webinar metrics, total run time, and participant watch durations.
3. Topic Routing: The flow inspects the webinar title to direct contacts into topic-specific branches (e.g., beginner vs. expert sessions).
4. Threshold Evaluation: IF nodes compare each attendee's watch time against predefined engagement thresholds (such as ≥90% for full attendance and 60–89% for partial attendance).
5. KlickTipp Tagging: The workflow applies the corresponding status tags to each participant in KlickTipp to drive automated follow-up email sequences.

## Setup
1. Install Community Node: Install the KlickTipp community node in your n8n instance under Settings > Community Nodes (n8n-nodes-klick-tipp).
2. Configure Credentials: Set up your Zoom OAuth / API credentials and KlickTipp API credentials in n8n. Add your Zoom webhook secret token for HMAC validation.
3. Configure Zoom Webhook: In your Zoom App Marketplace dashboard, subscribe your app to the webinar.ended event and point it to this workflow's webhook URL.
4. Create KlickTipp Tags: In KlickTipp, manually create the tags for each webinar track (attended, attended fully, and not attended).
5. Activate Companion Workflow: Ensure the registration companion workflow (“Automate Webinar Registration with Zoom & KlickTipp Form Integration”) is configured and active, as both flows work in tandem.
6. Test and Verify: Run a test webinar or simulate the payload to ensure attendees receive the correct tags based on simulated watch time.

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
