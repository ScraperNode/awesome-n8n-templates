# ⚡ Automated daily Outlook calendar meeting digest

> ⚡ **4,523 views** · ⚡ [Personal Productivity](../)

## Description

# Automated Daily Outlook Calendar Meeting Digest

## Overall Goal
This workflow automatically runs at a scheduled time (daily at 8 AM by default), calculates the current day's date range, fetches all calendar events from a specified Microsoft Outlook account for that day, formats these events into a user-friendly HTML email, and then sends this digest to a designated email address.

---

## How it Works (Step-by-Step Breakdown):

### Node: **Schedule Trigger** (Schedule Trigger Node)
- **Type:** `n8n-nodes-base.scheduleTrigger`  
- **Purpose:** Automatically starts the workflow at a predefined time.  
- **Configuration:**  
  - Rule &gt; Interval &gt; Trigger At Hour: 8  
    (Triggers every day at 8:00 AM according to the n8n server's timezone)  
- **Output:** Triggers the workflow execution at the scheduled time.

### Node: **Code** (Code Node)
- **Type:** `n8n-nodes-base.code`  
- **Purpose:** Dynamically calculates the start and end timestamps for "today," based on when the workflow is triggered.  
- **Configuration (JS Code):**  
  - Gets the current date and time (workflow runtime).  
  - Sets `today` to beginning of current day (00:00:00).  
  - Sets `tomorrow` to beginning of next day (00:00:00).  
  - Converts these to ISO string format (e.g., `2023-10-27T00:00:00Z`).  
- **Output:** JSON object with `today` and `tomorrow` ISO date strings.

### Node: **Microsoft Outlook** (Microsoft Outlook Node)
- **Type:** `n8n-nodes-base.microsoftOutlook`  
- **Purpose:** Fetch calendar events from Outlook within the calculated date range.  
- **Configuration:**  
  - Resource: Event  
  - Filters (Custom):  
    ```
    start/dateTime ge '{{$json.today}}' and start/dateTime lt '{{$json.tomorrow}}'
    ```  
  (OData filter to fetch events starting on or after today and before tomorrow, i.e., all today's events.)  
- **Output:** List of event objects from Outlook.

### Node: **Edit Fields** (Set Node)
- **Type:** `n8n-nodes-base.set`  
- **Purpose:** Transform and simplify the event data structure from Outlook.  
- **Configuration:** Maps fields from Outlook event to new field names:  
  - `id`  
  - `subject`  
  - `description` (from `bodyPreview`)  
  - `meeting_start`  
  - `meeting_end`  
  - `attendees`  
  - `meeting_organizer`  
  - `meeting_organizer_email`  
  - `meeting_link`  
- **Output:** List of JSON objects with simplified meeting details.

### Node: **Generate HTML** (Code Node)
- **Type:** `n8n-nodes-base.code`  
- **Purpose:** Generate a single HTML email body summarizing all meetings and create the email subject line.  
- **Configuration (JS Code):**  
  - Processes all meeting items from "Edit Fields" node.  
  - Defines `generateMeetingReminderEmail` function to format each meeting into an HTML "card."  
  - Escapes HTML special characters, formats times, attendees, etc.  
  - Concatenates all cards into a full HTML document.  
  - Generates subject line (e.g., "🗓️ Your Meetings Today – Friday, Oct 27").  
- **Output:** JSON object with:  
  ```json
  {
    "subject": "email subject string",
    "html": "generated HTML content string"
  }
  ```

### Node: **Send Email** (Email Send Node)
- **Type:** `n8n-nodes-base.emailSend`  
- **Purpose:** Send the generated HTML digest email to the designated recipient.  
- **Configuration:**  
  - From Email: `test@gmail.com`  
  - To Email: `akhilgadiraju@gmail.com`  
  - Subject: `{{ $json.subject }}` (dynamic from Generate HTML node)  
  - HTML: `{{ $json.html }}` (dynamic from Generate HTML node)  
- **Output:** Email sending status.

---

## Sticky Notes
- **Update Time:** Near "Schedule Trigger" node; configure trigger time as needed.  
- **Update Email Details:** Near "Send Email" node; change sender and receiver email addresses.

---

## How to Customize It

- **Schedule (Schedule Trigger node):**  
  Modify the trigger hour, minutes, or days of week to change when the workflow runs.

- **Date Range (Code node):**  
  Adjust JS to change date range (e.g., next business day, upcoming week).

- **Outlook Calendar (Microsoft Outlook node):**  
  Specify Calendar ID or refine OData filters for event selection.

- **Event Details (Edit Fields node):**  
  Add/remove/modify event fields extracted.

- **Email Appearance and Content (Generate HTML node):**  
  Change CSS styling, meeting details, or subject line logic.

- **No Meetings Scenario:**  
  Use an "If" node after "Edit Fields" to handle no-meeting days (e.g., send "No meetings today!" email or skip email).

- **Email Recipients (Send Email node):**  
  Update "From" and "To" emails; multiple recipients separated by commas.

---

## Error Handling
- Use "Error Trigger" nodes to catch and handle failures (Outlook API, SMTP errors).
- Send alerts or log errors accordingly.

---

## Use Cases
- **Automated Daily Personal Meeting Briefing:** Get daily email summaries of your meetings.  
- **Automated Team Meeting Digest:** Send daily team calendar digest emails.  
- **Proactive Daily Planning:** Automatically stay informed of your day’s schedule.

---

## Required Credentials

Add these credentials in your n8n instance under **Credentials**:

- **Microsoft Outlook (OAuth2 API):**  
  - Used by: "Microsoft Outlook" node  
  - Credential Name in Workflow: `Outlook` (ID: `JcYqVJwcwZIhB8oy`)  
  - Requires OAuth2 with `Calendars.Read` permission.

- **SMTP:**  
  - Used by: "Send Email" node  
  - Credential Name in Workflow: `SMTP account` (ID: `vCexcphurglwGBfk`)  
  - Requires SMTP server details (host, port, username, password).

Ensure these credentials are configured correctly with required permissions. Activate the workflow for scheduled execution.

---

Made with ❤️ using n8n by Akhil.

## 🔗 Nodes Used

Send Email, Microsoft Outlook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
