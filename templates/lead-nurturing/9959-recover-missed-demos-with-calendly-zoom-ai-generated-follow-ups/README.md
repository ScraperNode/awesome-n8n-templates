# 💬 Recover missed demos with Calendly, Zoom & AI-generated follow-ups

> ⚡ **81 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## One-Line Description
Automatically detects missed Zoom demos booked via Calendly and triggers AI-powered follow-up sequences.

## Detailed Description

### What it does:
When a prospect books a demo through Calendly but fails to join the Zoom meeting, this workflow automatically detects the no-show, generates personalized recovery messages using AI, updates your database, and notifies your sales team—all within minutes of the meeting ending. It bridges Calendly, Zoom, and your follow-up channels to ensure no lead falls through the cracks.

### Who it's for:
- **Sales teams** running high-volume demo calendars who lose 20-40% of booked meetings to no-shows
- **Customer success managers** conducting onboarding calls where attendance tracking matters
- **SDRs and BDRs** who need immediate alerts when prospects miss scheduled meetings
- **Revenue operations teams** seeking to improve demo-to-opportunity conversion rates through faster follow-up

### Key Features:
- **Real-time no-show detection** - Automatically checks Zoom participant lists against expected attendees within seconds of meeting end
- **AI-generated recovery messaging** - Creates contextual, empathetic follow-up emails and LinkedIn messages tailored to each no-show scenario
- **Instant team notifications** - Sends formatted Slack alerts with attendee details and suggested next actions so reps can manually follow up if needed
- **Attendance tracking database** - Maintains a searchable record of all bookings and attendance status for reporting and analysis
- **Multi-channel follow-up orchestration** - Coordinates email, Slack notifications, and optional CRM updates from a single automation
- **Selective event filtering** - Processes only specific Calendly event types so you control which meetings trigger the workflow

### How it works:
1. **Booking capture**: Calendly webhook fires when a demo is scheduled, extracting Zoom meeting details and attendee information
2. **Meeting monitoring**: When the Zoom meeting ends, a second webhook triggers attendance verification by pulling the participant list from Zoom's API
3. **No-show identification**: Workflow cross-references the expected attendee email with actual Zoom participants to confirm whether they attended
4. **Automated response**: For confirmed no-shows, AI generates personalized recovery messages while the system updates your database and notifies your team via Slack
5. **Optional integrations**: Simultaneously updates CRM deal stages or triggers additional follow-up sequences based on your configuration

## Setup Requirements

### Prerequisites:
- **Calendly account** (any paid plan) with webhook access and Personal Access Token
- **Zoom account** (Pro or higher) with Server-to-Server OAuth app credentials for API access
- **OpenAI API key** for AI-generated follow-up message creation
- **Slack workspace** with OAuth permissions to post messages (optional but recommended)
- **n8n Data Table** created with columns: meeting_id, email, status (built-in n8n feature, no external database needed)
- **Email sending service** configured in n8n (SMTP, Gmail, SendGrid, etc.) if enabling automated email sending
- **CRM API access** (HubSpot, Salesforce, Pipedrive, etc.) if enabling deal updates (optional)

Note: Zoom API has rate limits (varies by plan); this workflow makes 1-2 API calls per meeting end event.

### Estimated Setup Time:
45-60 minutes including Zoom app creation, Calendly webhook configuration, and Data Table setup

## Installation Notes

**Critical setup steps:**
- **Zoom webhook validation**: You must complete Zoom's webhook endpoint validation process before receiving real events. The workflow includes a dedicated validation path—run it once after creating your Zoom app.
- **Calendly webhook creation**: Use the "Manual Setup Trigger" path in the workflow to programmatically create your Calendly webhook subscription. This only needs to run once.
- **Event type filtering**: Replace the placeholder `YOUR_CALENDLY_EVENT_TYPE_URI` with your specific demo event type URI from Calendly to avoid processing all meeting types.
- **Test with a real meeting**: Book a test demo, join briefly with a different email than the booking email, then leave. The workflow should detect the "no-show" for the booking email.

**Common pitfalls to avoid:**
- Forgetting to enable the disabled "Send Recovery Email" node after testing (it's disabled by default to prevent accidental sends during setup)
- Not configuring Zoom Server-to-Server OAuth correctly (requires Account ID, Client ID, and Client Secret—not JWT credentials)
- Using a personal Calendly account instead of an organization account (webhooks require organization-level access)
- Overlooking the Data Table creation step—the workflow will fail without this internal database

**Testing recommendations:**
- Start with Slack notifications only (leave email sending disabled) to verify the workflow logic
- Use your own email as a test booking to safely generate AI messages without sending to real prospects
- Check the Data Table after each test to confirm booking records are being created and updated correctly

## Customization Options

**Easy modifications:**
- **Swap email for SMS**: Replace the email node with Twilio SMS to send text message follow-ups instead
- **Add delays**: Insert "Wait" nodes to schedule follow-ups hours or days later rather than immediately
- **Change AI tone**: Modify the OpenAI prompt to match your brand voice (casual, formal, humorous, etc.)
- **Multi-step sequences**: Duplicate the AI and email nodes to create a 3-touch follow-up cadence over several days
- **Different CRM platforms**: The HubSpot node can be swapped for Salesforce, Pipedrive, or any CRM n8n supports

**Extension possibilities:**
- Add Google Sheets logging for executive dashboard reporting on no-show rates
- Integrate with Calendly's rescheduling API to automatically send rebooking links
- Connect to Loom or Vidyard APIs to attach pre-recorded demo videos in follow-up emails
- Create a "second chance" discount workflow that offers incentives for rescheduling
- Build a predictive model by exporting no-show data to analyze patterns (time of day, lead source, etc.)

## Category
Sales

## Tags
- calendly
- zoom
- no-show-recovery
- demo-automation
- lead-follow-up
- sales-automation
- meeting-tracking
- ai-messaging
- slack-notification
- openai

## Use Case Examples

- **SaaS sales team**: A B2B software company runs 40+ demos per week. When prospects no-show, this workflow immediately notifies the assigned rep in Slack with a pre-written LinkedIn message, sends an empathetic recovery email offering a Loom recording alternative, and flags the deal in HubSpot for manual outreach within 2 hours.

- **Agency onboarding**: A marketing agency conducts discovery calls with new clients. If a client misses their scheduled kickoff meeting, the workflow logs the no-show, updates the client status in their CRM, and sends a friendly rescheduling email with three alternative time slots—all before the account manager even notices.

- **Customer success**: A customer onboarding team tracks training session attendance. When users don't join their scheduled implementation calls, the workflow automatically sends a resource-rich email with documentation links, notifies the CSM team channel, and schedules a follow-up task in their project management tool.

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Webhook, HubSpot, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
