# 🤝 Weekly HubSpot lead report to Slack

> ⚡ **1,420 views** · 🤝 [CRM & Sales Operations](../)

## Description

This n8n template posts a quick weekly snapshot to Slack so your team sees last week’s funnel movement at a glance. It counts how many contacts **entered the Lead stage** in the past week—and optionally reports **closed-won deals** from the same period.

Perfect for GTM standups and Monday pipeline reviews.

---

## How it works

* A **weekly schedule** (e.g., Mondays 07:00) kicks things off.
* **HubSpot → Get all contacts** pulls contacts with `hs_v2_date_entered_lead`.
* A **filter** keeps only those whose lead date is **within the last 7 days**.
* **Summarize** counts the resulting leads.
* **Slack** posts: “Last week we generated **X** leads.”
* (Optional branch) **Deals**:

  * **HubSpot → Get all deals** with `hs_is_closed_won` and `hs_closed_won_date`.
  * **Filter** to **closed-won last week**.
  * **Summarize** to report count and (if mapped) total amount.

---

## How to use

1. **Connect HubSpot** on the contacts and (optional) deals nodes.
2. **Connect Slack** and pick the destination channel.
3. In **Schedule the report**, set your preferred day/time.
4. (Optional) For the Deals branch, include the `amount` property on “Get all deals” and set **Summarize → sum over `amount`**.
5. Activate the workflow.

---

## Requirements

* **HubSpot** (OAuth2)
* **Slack** (OAuth2)

---

## Notes & customization

* **Time windows:** Adjust the filter to different periods (e.g., last 14 or 30 days).
* **More stages:** Duplicate the contacts branch for MQL/SQL or custom lifecycle events.
* **Richer Slack message:** Add emojis, trend vs. prior week, or a tiny leaderboard by owner.
* **Segments:** Split by country/industry using HubSpot lists or additional filters.

## 🔗 Nodes Used

Slack, HubSpot, Schedule Trigger, Filter, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
