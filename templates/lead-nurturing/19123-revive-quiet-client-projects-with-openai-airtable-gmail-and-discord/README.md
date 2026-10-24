# 💬 Revive quiet client projects with OpenAI, Airtable, Gmail and Discord

> ⚡ **1 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Win back quiet clients on autopilot. This workflow watches your Airtable projects, spots the ones gone silent for 10+ days, and sends personalized check-in emails. Every Friday you also get a health digest, so no relationship goes cold unnoticed.

*Last updated: September 2026.*

## Quick Overview
This workflow checks Airtable client projects on a schedule, uses OpenAI to draft check-in emails for projects that have gone quiet, sends them via Gmail, logs the outreach back to Airtable, and posts status updates to Discord, plus a weekly health digest every Friday.

## How it works
1. Runs every Monday at 09:00 (workflow timezone) and reads the “Client Projects” table from Airtable.
2. Calculates days since each active project’s last_touch date, flags projects that have been quiet for 10+ days, and emails an internal address if some rows have missing or malformed last_touch values.
3. If no projects are quiet, posts an “all clear” message to Discord.
4. For each quiet project, uses OpenAI to generate a short check-in email (subject and body) that references the project name and stage.
5. Sends the check-in email to the client via Gmail, appends a record to the Airtable “Touch Log” table, and updates the project’s last_touch date in Airtable.
6. Posts a one-line summary to Discord for each check-in email that is sent.
7. Runs every Friday at 16:00, compiles project health metrics from Airtable (including recent check-ins), uses OpenAI to write a brief digest, and sends it via Gmail and Discord.

## Setup
1. Create (or update) an Airtable base with a “Client Projects” table and a “Touch Log” table, including fields used by the workflow such as project_id, status, last_touch, client_email, and log_id.
2. Add Airtable personal access token credentials and set the correct base ID and table names for both the project read/update steps and the touch log append step.
3. Add a Gmail OAuth2 credential, then set the sender mailbox and confirm the internal notification recipient addresses for data-problem alerts and the Friday digest.
4. Add a Discord webhook credential and configure the target Discord channel(s) for the “all clear”, per-check-in summary, and weekly digest messages.
5. Add an OpenAI API credential and optionally adjust the model, prompts, schedules, and the quiet threshold (currently 10 days) to match your process.

### Quick Answers
**What counts as quiet?**  
No touch for 10+ days based on each project's last_touch date.  
**What arrives on Friday?**  
A health digest with project metrics and recent check-ins, via Gmail and Discord.  
**What if nothing is quiet?**  
Discord gets an "all clear" message instead of emails.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Airtable, Discord, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
