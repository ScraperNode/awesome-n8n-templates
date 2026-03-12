# 💬 Book WhatsApp consultations and sync contacts with Airtable and Google Calendar

> ⚡ **99 views** · 💬 [Support Chatbots](../)

## Description

##### WhatsApp Booking Flow | Consultation Scheduling

This n8n template automates appointment booking via WhatsApp Flows with real-time calendar availability, AI-powered intent classification, and CRM synchronization. It transforms manual booking conversations into a seamless self-service experience directly within WhatsApp.

##### Who is this for?

Service businesses wanting WhatsApp-based appointment booking
Consultants and agencies offering scheduled calls or consultations
Teams using Airtable for CRM and Google Calendar for scheduling
Businesses looking to reduce booking friction with conversational commerce

##### What problem does this workflow solve?

Appointment booking typically involves back-and-forth messaging to find available times, collect customer details, and confirm bookings. This workflow eliminates that friction by providing an interactive booking flow within WhatsApp that checks real-time calendar availability, collects customer information, and automatically syncs bookings to your CRM and calendar.

##### How it works

**Webhook Entry Point:** A single webhook handles both GET (Meta verification) and POST (messages/flows) requests - required due to Meta's single-webhook-per-app restriction.

**Message Routing:** Incoming requests are classified as either regular WhatsApp messages or encrypted Flow requests, then routed accordingly.

**WhatsApp Flow Handling:** Flow requests are decrypted using RSA/AES-GCM encryption. The workflow handles multiple Flow actions:
- INIT: Returns consultation types and date constraints
- SERVICE_SELECTION: Processes service and customer details
- DATE_TIME_SELECTION: Queries calendar availability for selected date
- CONFIRMATION: Displays booking summary
- COMPLETE_BOOKING: Finalizes the booking

**AI Agent:** For regular text messages, an OpenAI-powered agent classifies user intent. When booking intent is detected, it triggers the consultation template with the WhatsApp Flow.

**Booking Process:** On completion, the workflow:
1. Creates or updates customer in Airtable
2. Creates booking record with event details
3. Creates Google Calendar event
4. Sends WhatsApp confirmation message

##### Good to Know

**Verify Token:** The `WHATSAPP_VERIFY_TOKEN` environment variable is required for Meta webhook verification. Set this to any secure string and use the same value in Meta Developer Portal.

**Cloud vs Self-hosted:** Cloud n8n instances are easier to configure as they have public URLs. Self-hosted instances require additional setup for public accessibility.

**Hostinger/Docker Setup:** For self-hosted instances, configure public webhook access in your `docker-compose.yml` or reverse proxy configuration.

**Meta Prerequisites:** You'll need:
- Facebook Account
- Meta Developer App
- WhatsApp Business Account (linked to Developer App)
- WhatsApp Business Phone Number

**Health Checks:** Meta sends periodic ping requests to verify webhook availability. The workflow handles these automatically with a 200 response.

**Single Webhook Restriction:** Meta only allows one webhook URL per WhatsApp app, which is why all message types flow through a single endpoint with routing logic.

**Encryption:** WhatsApp Flows use end-to-end encryption. The workflow handles RSA decryption (for AES key exchange) and AES-128-GCM encryption/decryption for Flow data.

##### Requirements

- Meta Business Account with WhatsApp Business API access
- WhatsApp Business App in Meta Developer Portal
- n8n instance (cloud or self-hosted with public URL)
- OpenAI API key (for intent classification with GPT-4o)
- Airtable account with base containing: Customers, Services, Bookings tables
- Google Calendar with OAuth credentials

##### Environment Variables

| Variable | Description |
|----------|-------------|
| `WHATSAPP_VERIFY_TOKEN` | Webhook verification token (match in Meta Developer Portal) |
| `WHATSAPP_PRIVATE_KEY` | RSA private key for Flow encryption (PEM format) |
| `WHATSAPP_PRIVATE_KEY_PASSPHRASE` | Passphrase for the RSA private key |
| `GOOGLE_CALENDAR_ID` | Calendar ID for availability checks and event creation |

##### Setup

1. **Meta Business Setup**
   - Create a Meta Developer App at developers.facebook.com
   - Add WhatsApp product to your app
   - Set up a WhatsApp Business Account
   - Generate a permanent access token

2. **Import Workflow**
   - Import `personal-booking-whatsapp-flow.json` into n8n
   - Replace placeholder credential IDs with your actual credentials

3. **Configure Credentials**
   - WhatsApp: HTTP Bearer Auth with your access token
   - OpenAI: API key for GPT-4o
   - Airtable: OAuth2 authentication
   - Google Calendar: OAuth2 authentication

4. **Set Environment Variables**
   - Configure all variables listed above in n8n settings

5. **Configure Webhook in Meta**
   - Navigate to WhatsApp &gt; Configuration in Developer Portal
   - Set webhook URL to your n8n webhook endpoint
   - Enter your verify token
   - Subscribe to messages webhook field

6. **Create WhatsApp Flow**
   - In WhatsApp Manager, create a new Flow
   - Use the JSON from `whatsapp-flow.json` as your Flow definition
   - Publish the Flow and note the Flow ID

7. **Create Message Template**
   - Create a template with a Flow button component
   - Link it to your published Flow
   - Submit for approval

##### Airtable Schema

**Customers Table:**
- `customer_name` (text)
- `customer_email` (email)
- `phone_number` (text)
- `created_at` (date)

**Services Table:**
- `service_name` (text)
- `service_key` (text) - e.g., "30_min", "60_min"
- `duration_minutes` (number)

**Bookings Table:**
- `customer_email` (text)
- `service_type` (linked to Services)
- `event_date` (date)
- `event_time` (text)
- `booking_status` (select: Pending, Confirmed, Cancelled)
- `calendar_event_id` (text)
- `created_at` (date)

##### Customizing this workflow

**Consultation Types:** Modify the INIT handler code node to add/change consultation options and durations.

**Business Hours:** Adjust the calendar availability logic in the date refresh handler to match your working hours.

**AI Agent Prompts:** Customize the system prompt in the AI Agent node to match your business context and available services.

**Messaging Templates:** Create additional WhatsApp templates for different services (quotes, information requests) and add corresponding tools to the AI agent.

**CRM Fields:** Extend the Airtable schema and update the booking creation nodes to capture additional customer data.

Made by [www.fenrirlabs.nl](https://www.fenrirlabs.nl)

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Google Calendar, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
