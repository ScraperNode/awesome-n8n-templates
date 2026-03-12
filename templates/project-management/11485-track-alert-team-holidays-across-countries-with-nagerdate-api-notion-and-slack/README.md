# 📋 Track & alert team holidays across countries with Nager.Date API, Notion and Slack

> ⚡ **48 views** · 📋 [Project Management](../)

## Description

## Who is this for
This template is essential for **Remote Operations Managers**, **HR Teams**, and **Project Leads** managing distributed teams across different countries. It prevents scheduling conflicts by automatically flagging when a regional team is out of office and identifying when multiple teams are off simultaneously.

## What it does
Stop manually Googling "Is it a holiday in Berlin today?" This workflow automates your team availability calendar.
1.  It triggers on a weekly schedule.
2.  It takes your team's locations (e.g., KR, MX) and a "Lookahead" range (e.g., 50 days).
3.  It fetches official public holidays for **both the current and next year** using the **Nager.Date API** (to ensure year-end holidays aren't missed).
4.  It filters the results to find only holidays occurring within your defined lookahead window.
5.  **It compares dates across countries to identify "Shared Holidays" (dates where multiple teams are off).**
6.  It logs these holidays into a **Notion** database and notifies the team via **Slack**, specifically highlighting if a holiday is shared.

## How to set up
1.  **Notion:** Create a Database with properties: `Name` (Title), `Date` (Date), and `Shared Countries` (Text).
2.  **Slack:** Connect your Slack account in the credentials.
3.  **Configuration:**
    *   **Define Team Countries:** Enter the 2-letter country codes (e.g., "KR", "US") in the Set node.
    *   **Define Days to Lookahead:** Set how many days into the future you want to check (default is 50).
    *   **Add to Notion:** Select your Database ID.

## How to customize
*   **Filter Logic:** The "Filter Upcoming" node handles the date logic. You can modify this to check for specific holiday types (e.g., exclude "Optional" holidays).
*   **Shared Logic:** The "Find Shared Holidays" node calculates overlaps. You can adjust the JavaScript here if you want to change the format of the shared message sent to Slack.
*   **Destinations:** Swap the Notion node for Google Calendar to block off time directly.

## 🔗 Nodes Used

HTTP Request, Slack, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
