# 🔬 Review stale Notion docs with Gmail alerts, Slack reports, and OpenAI

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every Friday to scan a Notion documentation database for pages not edited in 90+ days, marks them as “Needs review,” emails owners of critical stale docs via Gmail, and uses OpenAI to generate a prioritized weekly review plan that it posts to a Slack channel.

## How it works
1. Runs every Friday at 10:00 on a schedule.
2. Retrieves all pages from a selected Notion database and calculates how many days it has been since each page was last edited, along with its title, URL, owner email, and importance.
3. Filters the list to only documentation pages that have been untouched for 90 days or more.
4. Updates each stale page in Notion by setting its Status to “Needs review.”
5. Sends a Gmail email to the page owner when the stale document is marked as Critical and an owner email is present.
6. Aggregates all stale documents and sends them to OpenAI to draft a short, risk-ranked weekly docs review plan.
7. Posts the generated review plan to a specified Slack channel.

## Setup
1. Connect credentials for Notion, Gmail, OpenAI (Chat Model), and Slack.
2. Select your target Notion database in the Notion “getAll” step and ensure it contains properties for Owner Email, Importance (Critical/Normal), and Status (including “Needs review”).
3. Set the Slack channel (for example, #docs) where the weekly report should be posted.
4. Confirm or adjust the staleness threshold (90 days) and the schedule time (Friday 10:00) to match your team’s cadence.

## 🔗 Nodes Used

Slack, Gmail, Notion, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
