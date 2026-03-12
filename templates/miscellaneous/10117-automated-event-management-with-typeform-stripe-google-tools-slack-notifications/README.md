# 🔧 Automated event management with Typeform, Stripe, Google tools & Slack notifications

> ⚡ **148 views** · 🔧 [Miscellaneous](../)

## Description

## Event Participant Management and Automated Follow-up System

This workflow automates the entire process of managing event participants, from registration and payment to sending reminders and follow-up communications. It's designed for event organizers who want to streamline their operations and ensure a smooth experience for attendees.

### Who is this for?

This template is ideal for event organizers, community managers, and businesses that host workshops, webinars, conferences, or any event requiring participant registration and communication.

### How it works

The workflow is divided into three main parts:

1.  **Registration and Onboarding:**
    *   When a new participant registers via a Typeform, their details are immediately added to a Google Sheet.
    *   Payment is processed via Stripe.
    *   Upon successful payment, a confirmation email is sent to the participant, and the event is added to their Google Calendar.
    *   The organizer receives a Slack notification about the new registration.

2.  **Event Reminders:**
    *   A daily scheduled trigger checks the Google Sheet for upcoming events.
    *   It calculates if an event is within the specified reminder period (e.g., 3 days before).
    *   If a reminder is needed, an email is automatically sent to the participant.

3.  **Post-Event Follow-up:**
    *   Another daily scheduled trigger checks for past events.
    *   It calculates if an event is due for a follow-up (e.g., 2 days after).
    *   A thank-you email, including a survey link, is sent to participants.
    *   The participant's status in the Google Sheet is updated to mark the follow-up as sent.

### How to set it up

1.  **Typeform Registration Form:** Replace `&lt;__PLACEHOLDER_VALUE__Typeform Form ID__&gt;` with your actual Typeform ID.
2.  **Workflow Configuration:** Fill in the placeholder values for `Event Name`, `Event Date`, `Event Time`, `Event Location`, `Participation Fee Amount`, and `Slack Channel ID`.
3.  **Google Sheets:**
    *   Replace `&lt;__PLACEHOLDER_VALUE__Google Sheets Document ID__&gt;` and `&lt;__PLACEHOLDER_VALUE__Sheet Name (e.g., Participants)__&gt;` with your Google Sheet details. Ensure your sheet has columns for "Name", "Email", "Phone", "Registration Date", "Event Name", "Event Date", "Payment Status", "Follow-up Sent", and "Follow-up Date".
    *   You will need to set up Google Sheets OAuth2 API credentials.
4.  **Stripe (Process Payment):** Replace `&lt;__PLACEHOLDER_VALUE__Customer ID__&gt;` and `&lt;__PLACEHOLDER_VALUE__Source ID__&gt;` with your Stripe customer and source IDs. You will need Stripe API credentials.
5.  **Gmail (Send Confirmation Email, Send Reminder Email, Send Thank You & Survey):** You will need to set up Gmail OAuth2 credentials.
6.  **Google Calendar (Add to Calendar):** You will need to set up Google Calendar OAuth2 API credentials.
7.  **Slack (Notify Organizer):** Replace `&lt;__PLACEHOLDER_VALUE__Slack Channel ID__&gt;` (if not already set in Workflow Configuration) and set up Slack OAuth2 API credentials.
8.  **Survey URL (Send Thank You & Survey):** Replace `&lt;__PLACEHOLDER_VALUE__Survey URL__&gt;` with the link to your post-event survey.

### Requirements

*   Typeform account and a registration form.
*   Google Sheet for participant management.
*   Stripe account for payment processing.
*   Gmail account for sending emails.
*   Google Calendar for event scheduling.
*   Slack account for organizer notifications.
*   n8n credentials for Google Sheets, Stripe, Gmail, Google Calendar, and Slack.

### How to customize the workflow

*   **Reminder/Follow-up Timing:** Adjust the `reminderDaysBefore` and `followupDaysAfter` values in the "Workflow Configuration" node to change when reminder and follow-up emails are sent.
*   **Email Content:** Modify the HTML content in the "Send Confirmation Email", "Send Reminder Email", and "Send Thank You & Survey" nodes to match your branding and messaging.
*   **Payment Currency:** Change the `currency` in the "Process Payment" node if your event uses a different currency.
*   **Additional Data:** Extend the Google Sheets nodes to capture more participant information from Typeform if needed.
*   **Integration:** Easily integrate with other services by adding more nodes, for example, a CRM to add new participants as leads.

## 🔗 Nodes Used

Google Sheets, Slack, Typeform Trigger, Google Calendar, Gmail, Stripe

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
