# ⚙️ Automated meta token renewal system with Graph API and data storage

> ⚡ **244 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Meta long-lived user tokens typically expire after ~60 days. If a token expires, any workflows that rely on it start failing. Manual renewal is easy to forget and time consuming.
**This template monitors the token you store in an n8n Data Table and refreshes it automatically before expiration, so your social automations keep running without surprises or late-night fire drills.**

### Who’s it for

* Agencies, marketing team, creators managing Meta apps or scheduled social automations
* Anyone tired of “token expired” errors breaking flows at 2 a.m.

### How it works / What it does

* Triggers: scheduled every 10 days, plus a Manual Trigger for testing.
* Reads: pulls the current token row from your "Meta credential" Data Table (fields: token and expires_at).
* Decides: IF the token expires in ≤ 15 days, proceed to renewal; otherwise do nothing.
* Calls the Graph API to get a new access token
* Updates: computes the new ISO expires_at from expires_in and writes the fresh token + expires_at back to the Data Table. Note: Meta typically issues ~60-day long-lived tokens; confirm for your app.

### Requirements

* A Meta app with an initial (short-lived or long-lived) user access token
* n8n Data Tables enabled (you might need to update your instance to see the option) and a table named "Meta credential" with:
** token (string)
** expires_at (datetime)

### How to set up

* Create the data table: name it "Meta credential" with columns "token" and "expires_at". Insert one row with your current token and its expiration date.
* Configure the IF node "Needs renewal?": keep (or tweak) the 15-day threshold logic.
* Run once with the Manual Trigger to validate, then enable the Schedule Trigger (10-day cadence by default).

### How to customize the workflow

* Change the Schedule Trigger interval and hour.
* Notify on renewal: Add a Slack/Email node after "Update Record" to alert on token refreshes.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
