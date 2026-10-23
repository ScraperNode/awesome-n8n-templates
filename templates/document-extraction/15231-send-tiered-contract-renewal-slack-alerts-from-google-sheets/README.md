# 🔬 Send tiered contract renewal Slack alerts from Google Sheets

> ⚡ **8 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## **What this workflow does**
Runs every morning at 9am. Reads every contract from the 5 tabs in your Contracts sheet, checks how many days are left until each `Cancellation Deadline`, and pings Slack with tiered alerts so no renewal slips through.

---

### Alert tiers

| Days until deadline | Tier | Message |
|---|---|---|
| ≤ 7 | 🔴 Urgent | Act now |
| ≤ 14 | 🟡 Action needed | Plan this week |
| ≤ 30 | 🟢 Heads-up | On your radar |
| &gt; 30 or past due | — | No alert |

Auto-renewing contracts get a stronger warning than contracts that simply expire – because that's the case where money is actually at stake.

---

### Setup guide

**1. Add two columns to every tab in your Contracts sheet**
Open your sheet and add these two columns to all 5 tabs (SaaS, Leases, Services, Insurance, Other):
- `Last Alert Tier`
- `Last Alert Date`

Leave both empty for existing rows. These drive the de-duplication – without them you'll get the same ping every day for weeks.

**2. Paste your Sheet ID**
Replace `YOUR_GOOGLE_SHEET_ID` in all 5 Read nodes. It's the same Sheet you used in Part 1.

**3. Set your Slack channel**
Replace `YOUR_SLACK_CHANNEL_ID` in all 3 Slack nodes with the channel (or DM) where alerts should land. `#contracts` or `#finance-alerts` work well; DM to the contract owner is fine too.

**4. Connect credentials**
- Google Sheets → OAuth
- Slack → OAuth

**5. Activate and test**
Before turning it on, temporarily set one row's `Cancellation Deadline` to ~10 days from today and clear its `Last Alert Tier`. Click **Execute Workflow** and confirm a 🟡 Slack message lands. Revert the row, then activate.

---

### Known limitations (v1)

**No automatic writeback.** Today the workflow alerts but doesn't mark the row as "alerted". To stop daily re-pings, either:
- Fill `Last Alert Tier` manually when the alert fires (🟢 / 🟡 / 🔴), or
- Add a Google Sheets Update node per tab (Switch by `Contract Class`, match on Start Date + Provider Name as a composite key)

**Works on ISO dates only.** The `days_left` calculation assumes `Cancellation Deadline` is stored as `YYYY-MM-DD`. Part 1 produces this format correctly, so this is only a concern if you're adding rows manually.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
