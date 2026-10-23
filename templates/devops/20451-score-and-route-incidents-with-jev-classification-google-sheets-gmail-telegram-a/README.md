# ⚙️ Score and route incidents with Jev Classification, Google Sheets, Gmail, Telegram, and GPT-6-Luna

> ⚡ **22 views** · ⚙️ [DevOps & CI/CD](../)

## Description

A production incident report lands on a webhook and the right person is paged while everyone else is still reading the alert. This [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) workflow has Jev Classification score each incident for severity, logs the decision to Google Sheets, then routes it into five lanes: SEV1 declares the incident and pages the commander, SEV2 pages the on call engineer, SEV3 queues a service desk ticket, SEV4 waits in the backlog, and a low confidence score is held for the commander to confirm. A monthly cron turns the log into a counted trend brief for the engineering lead.

*Last updated: October 2026.*

## Quick Overview
This workflow takes production incident reports on the Incident Intake webhook, normalizes the id, service, impact, affected users and timestamps, and refuses to score a report with no service name or impact text. Usable reports go to Jev Score Incident Severity (jev-latest, confidence threshold 0.65), which returns a level, a score, a confidence and a needsReview flag that Route By Confidence And Severity turns into five lanes. Every lane appends the full record to the Incident Severity tab in Google Sheets before it pages or emails anyone, and a monthly cron has gpt-6-luna write a counted trend brief for the engineering lead.

## How it works
1. Incident Intake receives a POST incident report on the jev-c2-incident-intake webhook.
2. Normalize Incident copies incident_id, service, impact_text, affected_users, customer_facing and detected_at from the body and stamps received_at when the report carries none.
3. Incident Report Usable? needs both service and impact_text. If either is missing, Mark Unusable Incident Report records what was missing and sets the status not_scored_report_unusable, and Email Incident Intake Problem mails it back. Nothing is scored.
4. Jev Score Incident Severity scores the service, affected users, customer facing flag, detected time and impact text on jev-latest with operation score and a 0.65 confidence threshold, returning level, score, confidence and needsReview in the jev field, with 3 retries and a 60 second timeout.
5. Route By Confidence And Severity checks needsReview first, then the score: true to the human confirm lane, 2.5 or higher to SEV1, 1.5 or higher to SEV2, 0.5 or higher to SEV3, everything else to SEV4.
6. SEV1 Declare And Page sets sev1_war_room, priority P0 and a 5 minute response SLA. Log SEV1 Incident appends the record, Page Incident Commander And On Call sends the war room message on Telegram, and Draft Stakeholder Update has gpt-6-luna write a 90 word four line update that Email Stakeholder Update sends.
7. SEV2 Page Oncall sets sev2_page, priority P1 and a 15 minute response SLA. Log SEV2 Incident appends the record, then Page On Call Engineer pages the on call engineer on Telegram with the owner and the 1 hour SLA.
8. SEV3 Create Ticket sets sev3_ticket, priority P2 and a 1440 minute (24 hour) SLA. Log SEV3 Incident appends the record, then Create Ticket Notice emails the service desk the impact and the action taken.
9. SEV4 Add To Backlog sets sev4_backlog, priority P4 and a 10080 minute (168 hour) SLA, appends the record and leaves it for the weekly review without paging anyone.
10. Severity Needs Human Decision sets human_confirm, priority P2, a 15 minute response SLA and the reason Jev confidence below 0.65. Log Unconfirmed Severity appends it as awaiting_human_severity_decision, then Ask Incident Commander To Confirm sends the confidence and suggested band to Telegram so a human sets the severity before anyone is paged.
11. Monthly Incident Trend Trigger runs at 08:00 on the first of the month (cron 0 8 1 * *), Read Incident Severity Log reads the Incident Severity tab, Summarize Incidents By Level counts incident_id per severity_level, and Draft Incident Trend Report has gpt-6-luna write the brief that Email Incident Trend Report sends to the engineering lead.

## Setup
1. Create a Google Sheets file with a tab named "Incident Severity" and the columns the log nodes write: incident_id, received_at, service, severity_level, severity_score, confidence, needs_review, paging_owner, sla_hours, action_taken, impact_excerpt, status, routed_at. Point the six Google Sheets nodes at it.
2. Connect a Jev (TypeSafe) API credential for the scoring node, Google Sheets OAuth2, Gmail OAuth2, a Telegram bot credential and an [OI] chat model credential for the two agent nodes.
3. Set the Telegram chat id on the four Telegram nodes and the recipient address on the four Gmail nodes so pages and mail reach your own rota.
4. Point your alerting tool or status page at the Incident Intake webhook (POST, path jev-c2-incident-intake), which expects incident_id, service, impact_text, affected_users, customer_facing and detected_at.
5. Check the severity bands (2.5, 1.5, 0.5), the confidence threshold (0.65) and the SLA values, then activate the workflow and confirm the monthly cron matches your timezone.

### Quick Answers
**What happens to a report that is missing details?**
It is never scored. Mark Unusable Incident Report records which field was missing and sets the status not_scored_report_unusable, and Email Incident Intake Problem sends it back to the intake address.

**What does Jev Classification actually decide?**
It returns a severity level from SEV1 Critical down to SEV4 Negligible, a numeric score, a confidence and a needsReview flag, and the workflow compares the score against 2.5, 1.5 and 0.5 to pick the lane.

**When does a human get involved?**
When needsReview is true, which happens when Jev confidence falls below the 0.65 threshold. That lane logs the incident as awaiting_human_severity_decision and asks the commander on Telegram to confirm the band before anyone is paged.

**Where does the record go before anyone is notified?**
Every lane appends the full severity record to the Incident Severity tab first, then pages or emails, so the log stays complete even if a notification fails.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
