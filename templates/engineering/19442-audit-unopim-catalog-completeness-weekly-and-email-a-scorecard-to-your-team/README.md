# ⚒️ Audit UnoPim catalog completeness weekly and email a scorecard to your team

> ⚡ **3 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
Every Monday morning this workflow scores the whole UnoPim catalog against the fields you cannot ship without, opens a Linear issue for each product with gaps, and emails one scorecard so the trend is visible over months.

## How it works
1. A Schedule Trigger runs every Monday at 7am, and the Settings node holds the required attribute codes, the locale and the channel, so you change the rules in one place rather than in code.
2. The UnoPim node reads the whole catalog with Return All. UnoPim pages with a keyset cursor, so this stays fast on a large catalog.
3. A code node scores each product, reading every value from the correct UnoPim scope, common first, then locale specific, then channel and locale specific, and also requires a family and at least one category.
4. Products with gaps become a Linear issue naming the exact missing fields, with a short Slack ping, so the work reaches an owner instead of sitting in a spreadsheet.
5. In parallel every score is aggregated into one scorecard, appended to Google Sheets for a trend line, and emailed with Gmail. Aggregating first is deliberate: one email per run, not one per product.

## Setup
1. Install the community node n8n-nodes-unopim from Settings, Community nodes. This template is self-hosted only, because n8n Cloud cannot install community nodes.
2. In UnoPim open Configuration, Integrations, API Keys and create a key. All four credential values come from that row. Add the UnoPim API credential using the application root as the URL, not the admin address, then connect Linear, Slack, Google Sheets and Gmail.
3. In the Settings node set requiredFields to the attribute codes your catalog cannot ship without, and set the locale and channel you sell in.

## Requirements
- Self-hosted n8n, UnoPim 3.0 or newer with the connector package installed, and Linear, Slack, Google Sheets and Gmail accounts.

## Customization
- Change the schedule to daily if your catalog moves fast, swap Linear for Jira or Asana, and on a very large catalog add an updated_at filter to the UnoPim node so each run audits only what changed.

## Additional info
- The scoring node returns the missing field names, not just a pass or fail, so the Linear issue tells the owner exactly what to fix.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Linear, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
