# 💬 Voiceflow demo support chatbot

> ⚡ **9,739 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

### Submission Overview for Voiceflow Demo Workflow

[View the YouTube video for this workflow here.](https://youtu.be/ET2VgV8ICDI)

#### Who is this for?
This workflow is ideal for businesses and developers using Voiceflow to power AI voice chatbots. It benefits teams that want to enhance chatbot functionality through integrations with platforms like Zendesk, Google Calendar, and Airtable.

#### What problem is this workflow solving?
The workflow addresses the need for seamless integration of chatbot interactions with backend systems. It automates customer service tasks such as ticket creation, meeting scheduling, and data reporting, reducing manual effort and enhancing efficiency.

#### What does this workflow do?
- **Customer Lookup:** Checks the database for existing customers and returns relevant details or a "NOT_FOUND" status.
- **Zendesk Ticket Creation:** Automates the creation of support tickets for customer issues.
- **Meeting Scheduling:** Integrates with Google Calendar to provide availability and schedule meetings.
- **Transcript Reporting:** Aggregates interaction data and sends it to Airtable for analysis by the product team.

#### Setup
1. Configure your Voiceflow chatbot to connect to this workflow via a webhook.
2. Set up the required integrations:
   - **Zendesk API:** For ticket creation.
   - **Google Calendar API:** For scheduling.
   - **Airtable API:** For storing transcripts.
3. Customize the workflow's nodes to match your use case, such as database fields or API endpoints.
4. Deploy the workflow on your n8n instance and test the integrations.

#### How to customize this workflow to your needs
- Adjust database queries to match your customer data schema.
- Modify the Zendesk ticket payload to include additional fields or custom formats.
- Update Google Calendar configurations for different scheduling requirements.
- Add or remove Airtable fields based on the product team's analysis needs.

This template adheres to n8n’s submission guidelines, ensuring clarity, relevance, and broad applicability for users in customer service, product development, and automation.

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Webhook, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
