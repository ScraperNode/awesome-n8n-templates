# 💬 Rescue stalled HubSpot deals with OpenAI, Slack, Gmail, and Google Sheets

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Sales teams, founders doing founder-led sales, and agencies whose pipeline goes quiet between reviews. Deals do not die loudly, they decay one ignored follow-up at a time, and this workflow makes sure none decay unnoticed.

## How it works
1. Every morning at 8 AM the workflow pulls your open HubSpot deals and computes days since last activity per deal.
2. Anything quieter than your threshold (default 14 days) is flagged as stalled.
3. AI then drafts a short, human re-engagement email for each one, grounded in the real deal context: name, value, stage, and days quiet, with one low-friction call to action.
4. Deals that are both high-value and long-stalled escalate to your manager Slack channel with the facts plus the draft.
5. Everything else becomes a ready-to-review draft emailed to the sales rep, who edits and sends it themselves.
6. Nothing ever goes to a prospect automatically.
7. Every action is logged to Google Sheets: deal, value, days stalled, and outcome.

## Setup
1. Connect your HubSpot, OpenAI, Gmail, Slack, and Google Sheets credentials in the n8n credentials panel.
2. Tune the Workflow Configuration node: stalledDaysThreshold, escalationMultiplier, minDealValueForEscalation, slackChannelId, salesRepEmail, and the schedule time for the daily scan. Create a blank Google Sheet and paste its ID into the Configuration node, then activate the workflow.
3. Use the manual trigger to test immediately before the first scheduled run.

## Requirements
- HubSpot with deals, an OpenAI API key, Gmail, a Slack workspace, and a blank Google Sheet. Works on n8n Cloud and self-hosted.

## Customization
- Swap HubSpot for Pipedrive or a Google Sheets pipeline, write the AI draft back to the deal as a HubSpot note, add a second nudge sequence with Wait nodes, or route escalations to a PagerDuty or Teams channel instead of Slack.

## 🔗 Nodes Used

Google Sheets, Slack, HubSpot, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
