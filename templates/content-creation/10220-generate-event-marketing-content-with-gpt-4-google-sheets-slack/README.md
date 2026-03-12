# 🎬 Generate event marketing content with GPT-4, Google Sheets & Slack

> ⚡ **188 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n workflow automates the generation of personalized marketing content for events, including emails, social media posts, and advertisements. Leveraging AI, it tailors content based on event details and target audience preferences, enhancing promotional efforts and engagement for organizers.

### Key Features
- Generates customized email, social media, and ad content for event promotion.
- Personalizes content based on event specifics and audience insights.
- Streamlines content creation with AI-driven suggestions and formatting.
- Delivers content ready for distribution across multiple channels.
- Supports real-time updates and adjustments for campaign optimization.

### Workflow Process
- The **Webhook for Event Planning** node receives event details and marketing preferences to initiate the workflow.
- The **Read Event Details** node extracts and organizes event data from Google Sheets for content creation.
- The **Set Variables** node defines key parameters and audience targeting criteria.
- The **AI Agent for Event Plan** node uses AI to generate optimized marketing content, including emails, social media posts, and ads.
- The **Format Plan** node structures the generated content into a polished, actionable format.
- The **Save to Google Sheets** node stores the generated content for tracking and future use.
- The **Email Report** node compiles a comprehensive event marketing plan and sends it to organizers via email.
- The **Send Email Report** node delivers the finalized report to the organizer.

### Setup Instructions
- Import the workflow into n8n and configure the Webhook for Event Planning with your event management system's API credentials.
- Set up Google Sheets integration for the Read Event Details and Save to Google Sheets nodes.
- Configure the AI Agent for Event Plan node with a suitable language model for content generation.
- Set up email credentials for the Email Report and Send Email Report nodes.
- Test the workflow by inputting sample event data to verify content generation and delivery.
- Monitor the output and adjust AI parameters or node settings as needed for optimal results.

### Prerequisites
- Webhook integration with the event management or input system.
- Google Sheets account for data storage and retrieval.
- AI/LLM service for content generation and personalization.
- Email service for report delivery.
- Access to event details and audience data for customization.

### Modification Options
- Modify the **Read Event Details** node to include additional data fields or sources.
- Adjust the **Set Variables** node to incorporate specific audience segments or branding guidelines.
- Customize the **AI Agent for Event Plan** node to focus on particular content types (e.g., video scripts, banners).
- Add social media posting nodes to directly publish content from the **Format Plan** node.
- Configure the **Email Report** node to include additional metrics or campaign analytics.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
