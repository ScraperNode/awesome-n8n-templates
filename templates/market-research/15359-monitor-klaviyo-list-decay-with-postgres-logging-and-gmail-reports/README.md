# 📊 Monitor Klaviyo list decay with Postgres logging and Gmail reports

> ⚡ **33 views** · 📊 [Market Research & Insights](../)

## Description

Klaviyo List Decay Detection

Protect your sender reputation by automatically identifying and suppressing unengaged Klaviyo profiles every night.

This workflow fetches your entire Klaviyo audience, scores each profile based on days since last engagement, and classifies them into four decay tiers — Active, Moderate, High, and Critical. Profiles inactive for 90+ days are bulk-suppressed automatically via the Klaviyo API. A styled HTML report is emailed daily with a full tier breakdown, and all results are logged to Postgres for historical tracking. Any workflow failure is caught, logged, and alerted immediately.

What you get:

Nightly automated list health monitoring
Four-tier decay scoring (0–100 engagement score per profile)
Automatic bulk suppression of critical profiles in batches of 100
Daily HTML email report with tier counts and run metadata
Full Postgres audit trail per profile and per run
Error handling with instant email alerts on failure
Requires: Klaviyo API key, Postgres database, Gmail OAuth2

## 🔗 Nodes Used

HTTP Request, Postgres, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
