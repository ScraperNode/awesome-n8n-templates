# 📋 Automate daily Google Calendar events to Trello cards

> ⚡ **59 views** · 📋 [Project Management](../)

## Description

## 📋 Overview

This n8n workflow automatically converts your **Google Calendar events** for the current day into **Trello cards** every morning at 8 AM. It fetches all calendar events for the day, filters out routine events (like Lunch or Check email), and creates neatly formatted Trello cards with a predefined meeting notes template.

Perfect for professionals who want to keep their daily meetings and tasks synced with their Trello board.

---

## ⚙️ Key Features

* 🕗 **Runs daily at 8 AM** (configurable via Cron node)
* 📅 **Fetches all Google Calendar events** for the current day
* 🚫 **Skips routine/repetitive events** (Lunch, Check email, etc.)
* 🧩 **Creates Trello cards** with structured meeting notes
* 🔗 **Includes event URL and due date** in Trello card
* 🧠 **Customizable filters and templates** for full control

---

## 🧱 Workflow Steps

### 1. **Run Daily at 8 AM** (`Cron Node`)

Automatically triggers the workflow every morning at 8:00 AM. You can adjust the time as needed.

### 2. **Calculate Today's Date Range** (`Function Node`)

Generates the ISO-formatted start and end times for the current day (00:00–23:59). These values are passed to the Google Calendar node for querying events.

### 3. **Fetch All Today's Calendar Events** (`Google Calendar Node`)

Fetches all events scheduled for today using your Google account. The calendar email (`your-email@example.com`) should be replaced with your actual email.

### 4. **Process Events One by One** (`SplitInBatches Node`)

Splits the list of events into single items for individual processing.

### 5. **Extract Event Details for Trello** (`Set Node`)

Maps each event’s details (summary, description, start time, and URL) into structured fields ready for Trello card creation.

### 6. **Filter Out Routine Events** (`If Node`)

Skips over common recurring events (like “Check email,” “Lunch,” “Wrap Up & Clear Desk,” or “Beers and Griping”). You can customize this list as needed.

### 7. **Create New Trello Card with Template** (`Trello Node`)

For non-filtered events, creates a new Trello card using a predefined meeting notes template. Includes:

* Title: Event summary
* Due date: Event start time
* Description: Preformatted meeting notes layout
* Source URL: Event link from Google Calendar

### 8. **Skip Filtered Event** (`NoOp Node`)

Handles skipped events gracefully without performing any action.

---

## 🧰 Setup Instructions

### 1. **Add Credentials**

* Add **Google Calendar OAuth2 credentials** in n8n.
* Add **Trello API credentials** in n8n.

### 2. **Replace Placeholder Values**

* Update the calendar email in the **Google Calendar node**.
* Add your **Trello board and list IDs** in the Trello node.

### 3. **Optional Customizations**

* Modify the **Cron node** to change trigger time.
* Edit the **Trello card template** to match your meeting format.
* Add labels using `idLabels` in the Trello node.
* Adjust the **filter conditions** for different recurring tasks.

---

## 🧠 Example Use Case

Imagine you have daily meetings in your Google Calendar. Each morning, this workflow:

1. Collects all your events for the day.
2. Skips unimportant ones (like lunch breaks).
3. Automatically adds Trello cards for real meetings, each with a structured template for you to take notes and assign next steps.

---

## 🧾 Example Trello Card Template

**Title:** Meeting with Client A
**Due Date:** 2025-11-11T10:00:00Z
**Description:**

```
**Meeting purpose (*Integrations, Playbooks, UI Issues, Project*):**

- Task

**Next Steps (*Task, Assigned to, Checkpoint Date*):**

- Task

**Decisions Made (*What, Why, Impacts*):**

- Task

**Discussion (*Items/Knowledge Shared*):**

- Task
```

---

## ✅ Requirements

* Google Calendar OAuth2 credentials
* Trello API credentials
* Active Google Calendar with events
* A Trello board/list to create cards in

---

## 📌 Notes

* You can adjust the workflow to run multiple times a day if needed.
* You can integrate Slack or email notifications for newly created cards.
* The workflow is lightweight and suitable for daily automation tasks.

---

**✨ Tip:** Combine this with n8n’s Slack or Notion integrations to get a full daily planning system that syncs your meetings, notes, and tasks automatically!

## 🔗 Nodes Used

Cron, Function, Trello, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
