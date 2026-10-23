# ⚙️ Rotate on-call schedules around leave and holidays with Google Calendar, Slack and Nager.Date

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow rotates weekly on-call duty using Google Calendar events, factoring in team history, leave, and public holidays from the Nager.Date API, then announces the assignment and swap outcomes in Slack and updates a channel topic at handover time.

## How it works
1. Runs every Thursday at 10:00 and also triggers when an on-call Google Calendar event is updated.
2. Reads past on-call events and upcoming leave events from Google Calendar and fetches the next public holidays from the Nager.Date API.
3. Calculates the target on-call week and selects the fairest available person based on recent on-call history, required rest weeks, leave events, and region-specific public holidays.
4. If it is the weekly run and no on-call event exists yet, creates an all-day on-call event in Google Calendar and posts the assignment to a Slack channel.
5. Waits until the configured handover time and then updates the Slack channel topic to reflect the current on-call person.
6. If an on-call event edit looks like a swap, validates the new assignee against the same rules and sends them an approval request in Slack.
7. If the swap is approved, updates the Google Calendar event marker and posts a confirmation to Slack, otherwise reverts the Google Calendar event and posts the reason to Slack.

## Setup
1. Add Google Calendar OAuth2 credentials and select the on-call calendar and leave calendar in the Google Calendar nodes (including the “On-Call Week Edited” trigger).
2. Add Slack OAuth2 credentials and set the target Slack channel in the message and channel-topic nodes.
3. In the Rota Rules node, define your team as `Name; region; Slack member ID`, set your holiday country code (for Nager.Date), and optionally set a lead Slack member ID for escalation messages.
4. Ensure leave events in the leave calendar include the person’s name in the event title so the workflow can match leave correctly.
5. Adjust fairness_weeks, rest_weeks, handover_time, and swap_answer_hours in Rota Rules to match your rotation policy and response expectations.

## Requirements
- A Google account with Google Calendar
- A Slack workspace, and each team member's Slack member ID
- Two calendars: one for on-call weeks, one for leave

## Customization
- Change how many weeks count for fairness, and the rest weeks between turns
- Change the handover time and how long people have to answer a swap
- Use a different country for public holidays
- Change the event title if your team calls it something other than "On call"

## Additional info
In plain words: someone on the team has to carry the pager each week, and working out who is fair, free and not on holiday is a weekly chore that is easy to get wrong. This workflow does it from your calendars. People swap simply by editing the on-call event; the workflow checks the swap, asks the new person in Slack, and puts the week back if they say no or the swap breaks the rules.

Example: Alex had last week, Robin is on holiday on Tuesday. The workflow books Sam for next week, posts it in Slack and changes the channel topic on Monday morning.

Leave counts for a person when the leave event's title contains their name, for example "Robin holiday".

## 🔗 Nodes Used

HTTP Request, Slack, Google Calendar, Google Calendar Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
