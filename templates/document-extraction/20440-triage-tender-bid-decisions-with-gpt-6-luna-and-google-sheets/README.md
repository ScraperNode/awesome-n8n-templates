# 🔬 Triage tender bid decisions with GPT-6-Luna and Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Tenders arrive and somebody has to decide whether they are worth the paperwork. This workflow takes each incoming tender, has gpt-6-luna score the fit out of 100 and flag the risks, logs the decision to Google Sheets, and emails the bid manager the verdict with the requirements to check. A Monday digest keeps the tenders still being tracked and due soon in view.

*Last updated: October 2026.*

## Quick Overview
This workflow collects tender submissions through an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) webhook, normalizes the tender title, client, due date, estimated value and description, and checks that the required fields are present. Tenders that pass validation go to gpt-6-luna, which scores the fit from 0 to 100, recommends bid, no_bid or needs_review, and lists strengths, risks, key requirements and a deadline risk. Every assessed tender is logged to the "Tenders" tab in Google Sheets and emailed to the bid manager, no-bid tenders get a short note explaining why the company passed, and a Monday digest lists the tracked tenders that are due within 14 days.

## How it works
1. "When Tender Received" is a POST webhook on the path tender-intake-0925. It accepts a tender payload from a form, a CRM or a script.
2. "Normalize Tender" builds a tender_id (TD- plus timestamp plus a four digit random suffix) and a received_at timestamp, then trims tender_title, client_name, due_date, est_value, tender_summary, source_url and bid_manager_email from the request body.
3. "Validate Tender Input" checks that tender_title, due_date and tender_summary are not empty. Incomplete submissions skip the AI step entirely and "Email Invalid Tender Notice" emails the bid manager the list of required fields.
4. "AI Assess Tender" is the agent node, running on the "Tender Model" gpt-6-luna chat model. It returns JSON with fit_score (0 to 100), recommendation (bid, no_bid or needs_review), strengths, risks, key_requirements, deadline_risk and a two sentence summary.
5. "Parse Tender Assessment" parses that JSON, joins the array fields with semicolons, defaults unreadable values to needs_review and a medium deadline risk, and sets status to Tracking.
6. "Route Bid Decision" sends anything that is not a no_bid to "Log Tracked Tender", which appends the row to the "Tenders" tab with status Tracking, then "Email Tender Assessment" emails the fit score, recommendation, deadline risk, strengths, risks and requirements to check.
7. no_bid tenders go to "Log No Bid Tender", which appends the same row with status No Bid, then "Email No Bid Note" sends the reason, the fit score and the risks so the team stays consistent about why it passed.
8. "Weekly Digest Trigger" runs on the cron expression 0 8 * * 1 (Mondays at 08:00). It reads the "Tenders" tab, "Keep Tracked Tenders" keeps rows with status Tracking, and "Build Digest Text" keeps only those due within the next 14 days. "Email Weekly Digest" sends one digest, and says so when nothing is due in that window.
9. "Tender Error Trigger" catches workflow errors and "Email Error Alert" emails the first 2000 characters of the error payload.

## Setup
1. Create a Google Sheets spreadsheet with a tab named "Tenders" and columns matching the append nodes: tender_id, tender_title, client_name, est_value, due_date, fit_score, recommendation, status, strengths, risks, key_requirements, deadline_risk and received_at.
2. Add credentials for Google Sheets OAuth2, Gmail OAuth2 and an [OI] chat model credential, then select that credential on the "Tender Model" node.
3. Set the spreadsheet id on the three Sheets nodes (Log Tracked Tender, Log No Bid Tender and Read Tracked Tenders).
4. Point your intake form or script at the webhook path tender-intake-0925. The payload keys it reads are tender_title, client_name, due_date, est_value, tender_summary, source_url and bid_manager_email.
5. Send bid_manager_email in the payload, or change the fallback address on the email nodes. The error alert node has its own recipient to set.
6. Confirm the Monday 08:00 schedule matches your timezone, then activate the workflow.

### Quick Answers
**What happens when a tender arrives without the required fields?**
It is not assessed and not logged. "Validate Tender Input" checks tender_title, due_date and tender_summary after normalization, and the bid manager gets an email listing the missing fields.

**What does gpt-6-luna actually decide?**
It returns a fit score from 0 to 100 and one recommendation: bid, no_bid or needs_review, plus strengths, risks, key requirements and a deadline risk of low, medium or high. needs_review means the tender is not obviously good or bad and a person should look closer.

**Where do the decisions end up?**
In the "Tenders" tab of your Google Sheets file. Tracked tenders are appended with status Tracking and no-bid tenders with status No Bid, and the bid manager gets the matching email in the same run.

**How does the weekly digest pick what to show?**
It runs Mondays at 08:00, reads the Tenders tab, keeps rows with status Tracking, and lists only those due within the next 14 days. If nothing qualifies, the email says no tracked tenders are due in that window.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
