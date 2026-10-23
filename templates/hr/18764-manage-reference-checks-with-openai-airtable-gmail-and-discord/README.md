# 👥 Manage reference checks with OpenAI, Airtable, Gmail, and Discord

> ⚡ **0 views** · 👥 [HR & Recruitment](../)

## Description

Reference checks without the chasing. This workflow emails referees, tracks every reply in Airtable, summarizes completed feedback for hiring managers, and nudges slow responders daily. No candidate left hanging, no referee forgotten.

*Last updated: September 2026.*

## Quick Overview
This workflow uses webhooks, OpenAI, Airtable, Gmail, and Discord to automate reference check outreach, track referee responses, summarize completed feedback for hiring managers, and send daily reminders for requests that are still pending.

## How it works
1. Receives a new-hire intake via a webhook and normalizes the candidate and manager details.
2. Validates required candidate fields and, if missing, posts an alert to Discord and emails a rejection notice via Gmail.
3. Splits the intake into one item per referee, generates a unique request ID, and uses OpenAI to draft a personalized reference request email.
4. Creates a “requested” record for each referee in an Airtable ReferenceCheck table and sends the drafted email to the referee via Gmail, then confirms the send in Discord.
5. Receives referee feedback via a second webhook, validates the request ID, looks up the matching Airtable record, and updates it to “received” with the rating, recommendation, and feedback.
6. After each response, checks Airtable to see whether all referees for the candidate have replied and posts progress updates to Discord until complete.
7. When all responses are received, fetches the collected feedback from Airtable, uses OpenAI to write a concise manager-ready summary, emails it to the hiring manager via Gmail, and posts a completion notice in Discord.
8. Runs daily on a schedule, finds Airtable requests still in “requested” status for over two days, and sends reminder alerts to Discord and Gmail.

## Setup
1. Create an Airtable base with a table named “ReferenceCheck” that includes fields used by the workflow (at minimum: request_id, candidate_name, candidate_email, job_title, manager_email, referee_name, referee_email, relationship, status, requested_at, received_at, rating, recommend, feedback).
2. Add and select credentials for Airtable Personal Access Token, OpenAI, Gmail OAuth2, and a Discord bot, and set the target Discord server and channel.
3. Configure the intake source (ATS/form) to POST candidate data and a referees array to the /refcheck/intake webhook URL and configure your referee form to POST responses to the /refcheck/respond webhook URL.
4. Update email recipients used for admin alerts (invalid intake and stale reminders) and ensure the workflow’s timezone/schedule match your operating hours.

### Quick Answers
**When are reminders sent?**  
Daily, for requests still sitting in "requested" status after two days.  
**When is the hiring manager looped in?**  
Once all referees replied, with an AI-written summary emailed directly.  
**How do referees respond?**  
Through a second webhook that validates their request ID and files the feedback.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Airtable, Webhook, Discord, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
