# 🤝 Generate single-use personalized Calendly links with Google Sheets tracking & Slack alerts

> ⚡ **1,000 views** · 🤝 [CRM & Sales Operations](../)

## Description

## This n8n template implements a Calendly Booking Link Generator that creates single-use, personalized booking links, logs them to Google Sheets, and optionally notifies a Slack channel

## Who's it for

This template is designed for **teams and businesses that send Calendly links proactively** and want to **generate trackable, single-use booking links on demand**. It’s perfect for:

- **Sales and SDR teams** sending 1:1 outreach and needing unique booking links per prospect
- **Customer success and support teams** who want prefilled, one-click rescheduling or follow-up links
- **Marketing and growth teams** that want UTM-tagged booking links for campaigns
- **Ops/RevOps** who need a central log of every generated link for tracking and reporting

## How it works / What it does

This workflow turns a simple HTTP request into a fully configured **single-use Calendly booking link**:

1. **Webhook Trigger (`POST`)**
   - Receives JSON payload with recipient details:
   - `name`, `email`, optional `event_type_uri`, optional `utm_source`
2. **Configuration & Input Normalization**
   - `Set Configuration` extracts and normalizes:
     - `recipient_name`, `recipient_email`
     - `requested_event_type` (can be empty)
     - `utm_source` (defaults to `"n8n"` if not provided)
3. **Calendly API – User & Event Types**
   - `Get Current User` calls `GET /users/me` using Calendly OAuth2 to get the current user URI
   - `Extract User` stores `user_uri` and `user_name`
   - `Get Event Types` calls `GET /event_types?user={user_uri}&active=true` to fetch active event types
   - `Select Event Type`:
     - Uses `requested_event_type` if provided, otherwise selects the **first active** event type
     - Stores event type URI, name, and duration (minutes)
4. **Create Calendly Single-Use Scheduling Link**
   - `Create Single-Use Link` calls `POST /scheduling_links` with:
     - `owner`: selected event type URI
     - `owner_type`: `"EventType"`
     - `max_event_count`: `1` (single use)
5. **Build Personalized Booking URL**
   - `Build Personalized Link`:
     - Reads the base `booking_url` from Calendly
     - Appends query parameters to prefill:
       - `name` (encoded)
       - `email` (encoded)
       - `utm_source`
     - Stores:
       - `base_booking_url`
       - `personalized_booking_url`
       - `recipient_name`, `recipient_email`
       - `event_type_name`, `event_duration`
       - `link_created_at` (ISO timestamp)
6. **Optional Logging and Notifications**
   - `Log to Google Sheets` (optional but preconfigured):
     - Appends each generated link to a **“Generated Links”** sheet
     - Columns: Recipient Name, Recipient Email, Event Type, Duration (min), Booking URL, Created At, Status
   - `Notify via Slack` (optional):
     - Posts a nicely formatted Slack message with:
       - recipient name & email
       - event name & duration
       - clickable booking link
7. **API Response to Caller**
   - `Respond to Webhook` returns a structured JSON response:
     - `success`
     - `booking_url` (personalized)
     - `base_url`
     - `recipient` object
     - `event` object (name + duration)
     - `created_at`
     - `expires` explanation (`"Single-use or 90 days"`)

The result is an **API-style service** you can call from any system to generate trackable, single-use Calendly links.

## How to set up

### 1. Calendly OAuth2 setup
- Go to `calendly.com/integrations` or `developer.calendly.com`
- Create an **OAuth2 application** (or use an existing one)
- In n8n, create **Calendly OAuth2 credentials**:
  - Add client ID, client secret, and redirect URL as required by Calendly
  - Connect your Calendly user account
- In the workflow, make sure all Calendly HTTP Request nodes use your **Calendly OAuth2 credential**

### 2. Webhook Trigger configuration
- Open the `Webhook Trigger` node
- Confirm:
  - **HTTP Method**: `POST`
  - **Path**: `generate-calendly-link`
  - **Response Mode**: `Response Node` (points to `Respond to Webhook`)
- Copy the **Production URL** from the node once the workflow is active
- Use this URL as the endpoint for your CRM, outbound tool, or any system that needs to request links

**Expected request body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "event_type_uri": "optional",
  "utm_source": "optional"
}
```

If `event_type_uri` is not provided, the workflow automatically uses the **first active event type** for the current Calendly user.

### 3. Google Sheets setup (optional but recommended)
- Create a Google Sheet for tracking links
- Add a sheet/tab named e.g. **“Generated Links”**
- Set the header row to:
  - `Recipient Name`, `Recipient Email`, `Event Type`, `Duration (min)`, `Booking URL`, `Created At`, `Status`
- In n8n:
  - Create **Google Sheets OAuth2** credentials
  - Open the `Log to Google Sheets` node
  - Update:
    - `documentId` → your spreadsheet ID
    - `sheetName` → your tab name (e.g. “Generated Links”)

### 4. Slack notification setup (optional)
- Create a Slack app at `api.slack.com`
- Add Bot Token scopes (for basic posting):
  - `chat:write`
  - `channels:read` (or `groups:read` if posting to private channels)
- Install the app to your workspace and get the **Bot User OAuth Token**
- In n8n:
  - Create a **Slack API** credential using the bot token
  - Open the `Notify via Slack` node
  - Select your credential
  - Set:
    - `select`: `channel`
    - `channelId`: your desired channel (e.g. `#sales` or `#booking-links`)

### 5. Test the workflow end-to-end
- Activate the workflow
- Use Postman, curl, or another system to `POST` to the webhook URL, e.g.:

```json
{
  "name": "Test User",
  "email": "test@example.com"
}
```

- Verify:
  - The HTTP response contains a valid `booking_url`
  - A new row is added to your Google Sheet (if configured)
  - A Slack notification is posted (if configured)

## Requirements

- **Calendly account** with at least one **active event type**
- **n8n instance** (cloud or self-hosted) with public access for the webhook
- **Calendly OAuth2 credentials** configured in n8n
- (Optional) **Google Sheets account** and OAuth2 credentials
- (Optional) **Slack workspace** with permissions to install a bot and post to channels

## How to customize the workflow

### Input & validation
- Update the `Set Configuration` node to:
  - Enforce required fields (e.g. fail if `email` is missing)
  - Add more optional parameters (e.g. `utm_campaign`, `utm_medium`, `language`)
- Add an `IF` node after the Webhook Trigger for stricter validation and custom error responses

### Event type selection logic
- In `Select Event Type`:
  - Change the fallback selection rule (e.g. pick the **longest** or **shortest** duration event)
  - Add logic to map a custom field (like `event_key`) to specific event type URIs

### Link parameters & tracking
- In `Build Personalized Link`:
  - Add additional query parameters (e.g. `utm_campaign`, `source`, `segment`)
  - Remove or rename existing parameters if needed
- If you don’t want prefilled name/email, remove those query parameters and just keep tracking fields

### Google Sheets logging
- Extend the `Log to Google Sheets` mapping to include:
  - `utm_source` or other marketing attributes
  - Sales owner, campaign name, or pipeline stage
  - Any additional fields you compute in previous nodes

### Slack notification formatting
- In `Notify via Slack`:
  - Adjust the message text to your team’s tone
  - Add emojis or @mentions for certain event types
  - Include `utm_source` or other metadata for debugging and tracking

## Key features

- **Single-use Calendly links** – each generated link is limited to one booking (or expires after ~90 days)
- **Prefilled recipient details** – name and email are embedded in the URL, making it frictionless to book
- **Webhook-first design** – easily call this from CRMs, outreach tools, or any external system
- **Central link logging** – every link is stored in Google Sheets for auditing and reporting
- **Optional Slack alerts** – keep sales/support teams notified when new links are generated
- **Safe error handling** – HTTP nodes are configured with `continueRegularOutput` to avoid hard workflow failures

## Example scenarios

### Scenario 1: Sales outreach
1. A CRM workflow triggers when a lead moves to “Meeting Requested”.
2. It calls this n8n webhook with the lead’s `name` and `email`.
3. The workflow generates a single-use Calendly link, logs it to Sheets, and posts to Slack.
4. The CRM sends an email to the lead with the personalized booking link.

### Scenario 2: Automated follow-up link
1. A support ticket is resolved and the system wants to offer a follow-up call.
2. It calls the webhook with `name`, `email`, and a dedicated `event_type_uri` for “Follow-up Call”.
3. The generated link is logged and returned via API, then included in an automated email.

### Scenario 3: Campaign tracking
1. A marketing automation tool triggers this webhook for each contact in a campaign, passing `utm_source` (e.g. `q1-outbound`).
2. The workflow adds `utm_source` to the link and logs it in Google Sheets.
3. Later, you can analyze which campaigns generated the most completed bookings from single-use links.

This template gives you a **reliable, reusable Calendly link generation service** that plugs into any part of your stack, while keeping tracking, logging, and team visibility fully automated.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
