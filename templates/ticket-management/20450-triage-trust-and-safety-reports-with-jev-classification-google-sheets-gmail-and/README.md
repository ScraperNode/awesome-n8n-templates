# 🎫 Triage trust and safety reports with Jev Classification, Google Sheets, Gmail and Telegram

> ⚡ **3 views** · 🎫 [Ticket Management & Triage](../)

## Description

Triage trust and safety reports for a moderation team without losing the ones that matter. This workflow takes every report from your form webhook, sorts it into a policy category with Jev Classification, sends each category down its own queue with a real SLA, logs the decision to Google Sheets, and pages the right human on Telegram or email before the clock runs out.

*Last updated: October 2026.*

## Quick Overview
This workflow receives trust and safety reports through the Report Intake webhook, keeps the policy-relevant fields in Normalize Report, and guards against textless submissions. Usable report text goes to the Jev Classify Policy Category node, which sorts it into one of five policy categories at a 0.6 confidence threshold and sends uncertain calls to human review. Each of the six outputs gets its own route with a queue, SLA hours, priority and required action, the row is appended to the Report Triage tab, and the matching human is paged on Telegram or emailed.

## How it works
1. Report Intake receives a POST webhook at jev-c1-report-intake with report_id, content_id, content_text and reporter_note.
2. Normalize Report keeps report_id, content_id, reporter_note and report_text, so the policy fields survive the rest of the payload.
3. Report Text Usable? checks that report_text is not empty. If it is empty, Mark Incomplete Report sets status to intake_rejected and required_action to ask_reporter_to_resend_the_report, then Email Intake Problem notifies ops and the report is never classified.
4. Jev Classify Policy Category runs the report text against the jev-latest model with a confidence threshold of 0.6 and five categories: Harassment or threat, Scam or fraud, Self-harm risk, Spam or off-topic, and No policy violation. Uncertain calls are sent to the needs review output.
5. Each of the six outputs lands on its own route Set carrying the business decision: Route Harassment Or Threat (trust_and_safety, 4 hours, P1), Route Scam Or Fraud (fraud_review, 8 hours, P1), Route Self Harm Risk (wellbeing_escalation, 1 hour, P0), Route Spam Or Offtopic (bulk_moderation, 24 hours, P3), Route No Violation (closed, 0 hours, P4) and Route Human Review (senior_moderator_review, 2 hours, P2).
6. Every route appends one row to the Report Triage tab with the case id, received time, channel, category, confidence, queue, SLA hours, priority, required action, excerpt, status and routing timestamp.
7. Harassment or threat reports page the on-call person on Telegram and email the safety lead, scam or fraud reports alert the fraud queue and email the reporter, self-harm risk reports page the crisis lead and email the escalation, no violation reports email the reporter that no action was taken, and human review cases reach the senior moderator on Telegram and by email.
8. Weekly Moderation Brief Trigger fires every Monday at 09:00, reads the Report Triage log, counts cases per outcome, and has gpt-6-luna draft a plain text brief under 120 words that is emailed to the owner.

## Setup
1. Create a Google Sheets file with a tab named "Report Triage" and the columns case_id, received_at, channel, category, confidence, needs_review, queue, sla_hours, priority, required_action, report_excerpt, status and routed_at, then point the Google Sheets nodes at your document id.
2. Connect the Jev (TypeSafe) API credential on the Jev Classify Policy Category node, plus Google Sheets OAuth2, Gmail OAuth2 and Telegram credentials on the sending nodes.
3. Point your report form or helpdesk at the Report Intake webhook with a POST and send report_id, content_id, content_text and reporter_note.
4. Replace the placeholder email addresses and the Telegram chat id with your own destinations.
5. Add an [OI] chat model credential to the Moderation Brief Model node and confirm the Monday 09:00 schedule in your timezone.
6. Adjust the queues, SLA hours, priorities and required actions in the six route nodes to match your policy, then activate the workflow.

### Quick Answers
**What happens if a report arrives without usable text?**
It is not classified. The guard marks it intake_rejected with missing_field report_text and emails ops that the reporter has to resend.

**How does Jev Classification decide the queue?**
It scores the report against five policy categories with the jev-latest model at a 0.6 confidence threshold. A confident call picks its category route, and anything under the threshold goes to the human review output instead.

**How urgent is a self-harm risk report?**
It routes to wellbeing_escalation with P0 priority and a 1 hour SLA, pages the crisis response lead on Telegram and emails the escalation in the same run.

**Where do I see the whole week?**
Every route appends to the Report Triage tab, and a Monday 09:00 lane reads that tab, counts cases per outcome and emails a short brief written by gpt-6-luna.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
