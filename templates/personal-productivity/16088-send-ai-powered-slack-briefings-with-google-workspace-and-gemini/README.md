# ⚡ Send AI-powered Slack briefings with Google Workspace and Gemini

> ⚡ **33 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow connects Slack with Google Workspace, Cal.com, OpenWeather, and Google Gemini to act as a Slack-based assistant for Gmail, Calendar, Docs, Sheets, Drive, and Contacts, and to post an automated morning briefing with today’s schedule, unread emails, upcoming bookings, and local weather.

## How it works
1. A Slack event triggers the workflow when a message is sent; the workflow extracts the message text and thread context for the Gemini agent.Triggers when a Slack event is received, extracts the user’s message and context, and uses a Google Gemini-powered agent with conversation memory to interpret the request.
2. The Gemini AI agent uses conversation memory to understand the user's intent and selects the appropriate tool Gmail search/send, Google Calendar read/create, Google Docs create/fetch, Google Sheets read/append/update, Google Drive search, or Google Contacts lookup. Depending on the user’s intent, the agent searches or sends Gmail messages, reads or creates Google Calendar events, creates or fetches Google Docs, reads or appends/updates Google Sheets rows, searches Google Drive, and looks up Google Contacts.
3. For scheduling requests, the agent queries Cal.com for available slots using your event type ID and can create a booking with the provided attendee name, email, and event details.
4. The agent's response is posted back to the same Slack channel and thread for contextual continuity.
5. A separate cron-triggered branch runs every weekday and Saturday morning in Asia/Kolkata timezone, collecting today's Google Calendar events, up to 15 unread Gmail messages, and upcoming Cal.com bookings.
6. Current weather data for the configured city is fetched from OpenWeather using the OPENWEATHER_API_KEY environment variable.
7. All collected data is passed to Gemini, which generates a prioritized morning briefing with a concise summary and a detailed breakdown, both posted to the configured Slack channel.

## Setup
1. Create a Slack app at api.slack.com, configure Bot Token Scopes (app_mentions:read, channels:history, chat:write, etc.), and register your n8n webhook URL under Event Subscriptions.
2. Connect Google Workspace OAuth2 credentials in n8n covering Gmail, Google Calendar, Google Docs, Google Sheets, Google Drive, and Google Contacts.
3. Add your Google Gemini credential used for both the Slack assistant agent and the morning briefing agent.
4. Add your Cal.com API key as an HTTP Header Auth credential, then set your event type ID in the Cal.com nodes for availability checking and booking creation.
5. Set OPENWEATHER_API_KEY as an environment variable in n8n and update the city query in the OpenWeather node to match your location.
6. Replace REPLACE_WITH_SLACK_CHANNEL_ID in both morning briefing Slack nodes with your actual target channel ID.
7. Activate the workflow the Slack Trigger and morning briefing cron will begin running automatically.

## Requirements
- Slack app with OAuth2 credentials, Event Subscriptions enabled, and the bot added to your target channel.
- Google Workspace OAuth2 credentials with access to Gmail, Calendar, Docs, Sheets, Drive, and Contacts.
- Google Gemini API credential for the AI agent and briefing generation.
- Cal.com API key (HTTP Header Auth) with a valid event type ID for availability and booking operations.
- OpenWeather API key set as an OPENWEATHER_API_KEY environment variable in n8n.

## Customization
- The Gemini system prompt in the AI agent node controls the assistant's personality, response style, and tool-use behavior adjust it to match your team's communication tone or to restrict which actions the bot can take. You can add new tools to the agent (e.g., Notion, HubSpot, Linear) without restructuring the core routing logic.
- The morning briefing prompt in the Gemini briefing node determines how the daily summary is prioritized and formatted. You can change the city in the OpenWeather node, adjust the cron schedule for different timezones or days, increase the Gmail unread message limit, or split the briefing into separate Slack channels by department or team.
- For teams running multiple Cal.com event types, you can extend the Cal.com tool nodes to support dynamic event type routing based on the Slack message content, making the scheduler smarter without rebuilding the workflow.

## Additional info
This n8n template is a complete Slack-native AI workspace assistant for individuals and teams who want a single conversational interface across Google Workspace and Cal.com, plus an automated daily briefing that arrives before the workday begins. You send one Slack message the workflow handles research, drafting, scheduling, and reporting automatically.

It reads and sends Gmail, manages Google Calendar, creates Docs, updates Sheets, searches Drive, looks up Contacts, checks Cal.com availability, books appointments, fetches live weather, and posts a Gemini-prioritized morning briefing every weekday and Saturday all without leaving Slack.

Need help setting this up or customizing it for your team?
👉 https://patelravi.co.in/n8n_expert

## 🔗 Nodes Used

HTTP Request, Slack, Google Calendar, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
