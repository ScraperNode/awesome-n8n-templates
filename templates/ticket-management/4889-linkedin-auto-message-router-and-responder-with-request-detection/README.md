# 🎫 LinkedIn auto message router and responder with request detection

> ⚡ **4,354 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## Who is this for?

Public-facing professionals (developer advocates, founders, marketers, content creators) who get bombarded with LinkedIn messages that aren't actually for them - support requests when you're in marketing, sales inquiries when you're a devrel, partnership pitches when you handle content, etc.

## What problem is this workflow solving?

When you're visible online, people assume you handle everything at your company. You end up spending hours daily playing human router, forwarding messages like "How do I reset my password?" or "What's your enterprise pricing?" to the right teams. This **LinkedIn automation workflow** stops you from being your company's unofficial customer service representative.

## What this workflow does

This **AI-powered LinkedIn DM management** workflow automatically assesses incoming LinkedIn messages and routes them intelligently:

1. **Automated Message Assessment**: Receives inbound LinkedIn messages via UniPile and looks up sender details from both personal and company LinkedIn profiles.

2. **Smart Route Matching**: Compares the message content against your **message routing workflow** table in Notion, which contains:
  - **Question**: "How can I become an n8n ambassador?"
  - **Description**: "Route here when a user is requesting to become an n8n ambassador. Also when they're asking how they could do more to evangelize n8n in their city, or to start organizing n8n meetups and events in their city."
  - **Action**: "Tell the user to open the following notion page which has details on ambassador program including how to apply, as well as perks of the program: https://www.notion.so/n8n-Ambassador-Program-d883b2a130e5448faedbebe5139187ea?pvs=21"

3. **AI Response Generation**: When a message matches an existing route, this **AI assistant** generates a personalized response draft based on the "Action" instructions from your routing table.

4. **Human-in-the-Loop Approval**: Sends the draft response to Slack with approve/reject buttons, so you maintain control while saving time. Draft can be edited from within Slack on desktop and mobile.

5. **Automated LinkedIn Responses**: Once approved, sends the reply back via LinkedIn and marks the original message as handled.

The result: You stop being a human switchboard and can focus on your actual job while people still get helpful, timely responses through **automated customer service**. You can also add routes for things you do handle but get asked about daily (like 'How do I join your beta?' or 'What's your content strategy?') to standardize your responses.

## Setup

1. Sign up for a [UniPile](https://unipile.com) account and create a webhook under the Messaging section
2. Set the callback URL to this workflow's production URL
3. Generate a UniPile API key with all required scopes and store it in your n8n credentials
4. Create a Slack app and enable interactive message buttons and webhooks

Here is a slack App manifest template for easy deployment in slack:

```json
{
    "display_information": {
        "name": "Request Router",
        "description": "A bot that alerts when a new linkedin question comes in.",
        "background_color": "#12575e"
    },
    "features": {
        "bot_user": {
            "display_name": "Request Router",
            "always_online": false
        }
    },
    "oauth_config": {
        "scopes": {
            "bot": [
                "chat:write",
                "chat:write.customize",
                "chat:write.public",
                "links:write",
                "im:history",
                "im:read",
                "im:write"
            ]
        }
    },
    "settings": {
        "interactivity": {
            "is_enabled": true,
            "request_url": "Your webhook url here"
        },
        "org_deploy_enabled": false,
        "socket_mode_enabled": false,
        "token_rotation_enabled": false
    }
}
```


5. Set up your Notion database with the three-column structure (Question, Description, Action)
6. Configure the AI node with your preferred provider (OpenAI, Gemini, Ollama etc)
7. Replace placeholder LinkedIn user and organization IDs with your own

## How to customize this workflow to your needs

- **Database Options**: Swap Notion with Google Sheets, Airtable, or another database
- **Filtering Logic**: Add custom filters based on keywords, message length, follower count, or business logic
- **AI Customization**: Adjust the system prompt to match your brand tone and response goals
- **Approval Platform**: Replace Slack with email, Discord, or another review platform
- **Team Routing**: Use Slack metadata to route approvals to specific team members based on message category
- **Enrichment**: Add secondary data enrichment using tools like Clearbit or FullContact
- **Response Rules**: Create conditional logic for different response types based on sender profile or message content

Perfect for anyone who's tired of being their company's accidental customer service department while trying to do their real job.

This **LinkedIn automation template** was inspired by a live build done by [Max Tkacz](https://www.linkedin.com/in/maxtkacz/) and [Angel Menendez](https://www.linkedin.com/in/angelgmenendez/) for [The Studio](https://www.youtube.com/playlist?list=PLlET0GsrLUL7LWMf4Q3gHNu5mk-hur7QV).

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Notion, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
