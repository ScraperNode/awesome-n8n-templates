# 📋 Send a weekly Keephub task progress report to Slack

> ⚡ **15 views** · 📋 [Project Management](../)

## Description

This workflow fetches all Keephub task templates active in the 
previous week for a given org unit, retrieves detailed progress 
for each one, and posts a formatted summary to Slack every Monday 
at 9:00am.

Each task is shown with its completion percentage and counts, 
grouped by status:
🔴 Overdue — tasks past their due date with no completions
🟡 Open — tasks in progress
✅ Done — fully completed tasks

A totals summary line is included at the top of every report.

## Prerequisites
- Keephub account with Login API credentials
OR Keephub Bearer API token
- Slack workspace with a channel for reports

## Setup
1. Connect your **Keephub Login** or **Keephub Bearer** credential to the "Get Tasks by 
   Orgunit" node
2. Connect your **Keephub Login** or **Keephub Bearer** credential to the "Get Progress" 
   node
3. Set your `orgunitId` in the "Get Tasks by Orgunit" node
4. Connect your **Slack** credential and set your channel in 
   "Send a message"

## Customisation
- Change the date window in the two DateTime nodes to report on 
  different periods (e.g. last 30 days for a monthly report)
- Replace the Slack node with any messaging app — Teams, Discord, 
  email, etc.
- Adjust the task limit (default: 200) in "Get Tasks by Orgunit" 
  if you have more templates

## 🔗 Nodes Used

Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
