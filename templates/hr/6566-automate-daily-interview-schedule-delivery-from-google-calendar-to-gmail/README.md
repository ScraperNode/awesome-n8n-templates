# 👥 Automate daily interview schedule delivery from Google Calendar to Gmail

> ⚡ **247 views** · 👥 [HR & Recruitment](../)

## Description

This n8n workflow automatically fetches all interview events scheduled for today from a specified Google Calendar and sends a personalized email to each interviewer. The email contains a formatted HTML table listing their interview details, including meeting times, Google Meet links, and attendees with their response status.

This ensures all interviewers are informed daily at **8:00 AM IST** without any manual coordination.

## Who’s it for
- **Interviewers** who want a quick morning packet instead of opening multiple calendar tabs.
- **Recruiters/coordinators** who need a reliable, zero‑friction daily brief for interviewers.
- **Teams** that paste CV/notes links directly into calendar events (no file search required).

## How it works
1. **Cron** triggers daily at **08:00 IST**.
2. **Google Calendar** reads today’s events from the **Interviews** calendar.
3. A **Code** step parses each event to identify interviewers and extract candidate details, meeting link, and any `CV:` / `Notes:` links from the description and create a table to share via Gmail.
4. A **grouping** step compiles a per‑interviewer list for the day.
5. **Email (Gmail)** sends one digest to interviewer.

## How to set up
1. Ensure all interviews are scheduled on the Google Calendar named **Interviews** and that interviewers are added as **attendees**.
2. Add CV: &lt;url&gt; and Notes: &lt;url&gt; in the **event description** when available.
3. Import the workflow and add credentials:
   - **Google Calendar** (OAuth)
   - **SMTP/Gmail** for sending the email digests
4. Keep the default **08:00 IST** schedule in the Cron node or adjust as needed.

## Requirements
- Google Workspace account with access to the **Interviews** calendar.
- Gmail sender account for digests (App Password if using 2FA).
- n8n instance (cloud or self‑hosted).

## Steps

### Trigger Schedule

* **Node:** `Schedule Trigger`
* **Purpose:** Starts the workflow daily at **8:00 AM**.

---

### Fetch Interview Events

* **Node:** `Google Calendar(Fetch Interview Events)`
* **Purpose:** Retrieves all events (interviews) from the configured calendar.
* **Output:** Event details including summary, time, and organizer email.

---

### Group & Format Schedule

* **Node:** `HTML Table` (JavaScript Code Node)
* **Purpose:** Groups events by interviewer email and generates an HTML schedule table.
* **Output:** Formatted fields:

  * `interviewer_email`
  * `subject`
  * `htmlContent`

---

### Send Personalized Emails

* **Node:** `Gmail`
* **Purpose:** Sends the formatted interview schedule to each interviewer’s email address.
* **Send To:** Dynamically set using `={{ $json.interviewer_email }}`
* **Subject:** `"Interview Reminder"`
* **Body:** `={{ $json.htmlContent }}` (HTML)


## How to customize the workflow
- **Parsing rules:** If your event titles follow a pattern (e.g., `Onsite – {Candidate} – {Role}`), tweak the regex in the Code node.
- **Attendee logic:** Refine how interviewers are detected (e.g., filter only `accepted` responses, or include `tentative`).
- **Digest format:** Adjust table columns/order, or add role/team labels from the title.
- **Schedule:** Duplicate the Cron for regional time zones or add a midday refresh.

## Add-ons to level up the Workflow with additional nodes
- **Reminder pings:** Add 10‑minute pre‑interview reminders via Email or Slack/Teams.
- **Conflict alerts:** Flag if an interviewer is double‑booked within a 15‑minute window.
- **Feedback follow‑up:** After the scheduled time, DM or email a standardized feedback form link.
- **Drive search (optional):** If you later want auto‑attach CVs, add a Google Drive search step (by candidate name) in a designated folder.

## Common troubleshooting points
- **No events found:** Confirm the calendar name is **Interviews** and that events exist **today**.
- **Missing links:** If CV/notes links aren’t in the email, add `CV:`/`Notes:` links to the event description.
- **Email not sent:** Verify SMTP credentials, from‑address permissions, and any sending limits.
- **Time mismatch:** Confirm workflow timezone and Calendar times are set to **Asia/Kolkata** (or adjust).

## A short note
If you need help tailoring the parsing rules, adjusting the schedule or troubleshooting any step, feel free to reach out we will happy to help.

## 🔗 Nodes Used

Google Calendar, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
