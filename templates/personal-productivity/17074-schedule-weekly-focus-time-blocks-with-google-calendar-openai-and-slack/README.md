# ⚡ Schedule weekly focus-time blocks with Google Calendar, OpenAI, and Slack

> ⚡ **331 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs every Sunday at 18:00 to scan your Google Calendar for next week, find free gaps of at least two hours within your working hours, auto-book them as “🧘 Focus Time” events, and then DM you a personalized deep-work plan in Slack using OpenAI.

## How it works
1. Runs every Sunday at 18:00 on a schedule.
2. Loads your working-hour preferences and fetches all events from your Google Calendar.
3. Calculates weekday-only free gaps within your working hours and keeps only gaps that meet the minimum block length.
4. If no qualifying gap exists, sends you a Slack DM warning that next week is too fragmented for a focus block.
5. If gaps exist, limits the number of blocks for the week and creates “🧘 Focus Time (protected by n8n)” events in Google Calendar for each selected slot.
6. Uses OpenAI to generate a short, personal Slack message that lists the protected blocks and suggests what kind of work fits each.
7. Sends the generated deep-work plan to you as a Slack DM.

## Setup
1. Add Google Calendar credentials, select the calendar to read from and the calendar to create “🧘 Focus Time” events in.
2. Add Slack credentials and set your target Slack username in both the plan DM and warning message steps.
3. Add OpenAI credentials (Chat Model) and ensure the selected model is available for your account.
4. Adjust the working hours, minimum block length, and maximum blocks per week in the preferences values to match your schedule.

## 🔗 Nodes Used

Slack, Google Calendar, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
