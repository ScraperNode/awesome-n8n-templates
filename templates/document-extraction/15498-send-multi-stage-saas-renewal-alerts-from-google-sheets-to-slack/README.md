# 🔬 Send multi-stage SaaS renewal alerts from Google Sheets to Slack

> ⚡ **33 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Your automated SaaS contract renewal monitor that sends multi-stage Slack alerts 45, 30, 14, and 7 days before each contract expires.

Stop missing renewal deadlines and overpaying on auto-renewals. This workflow monitors your contract calendar in Google Sheets, sends progressive Slack notifications with manual research checklists, and tracks alert history to prevent duplicate notifications. You manage the vendors; it manages the reminders.

This is not a generic reminder bot. It is a production-ready procurement intelligence system designed to give finance and operations teams the advance notice needed to research alternatives, negotiate better terms, and avoid costly auto-renewals.

---

## How the workflow works

The workflow executes in four stages:

### 1. TRIGGER & SCHEDULE
The workflow runs **daily at 9:00 AM** using a cron trigger (`0 9 * * *`). The schedule runs in your configured timezone (default: UTC). A single daily check scans your entire contract portfolio and identifies which renewals are entering their alert windows.

### 2. LOAD & VALIDATE
Using Google Sheets' native integration, the workflow reads your contract tracking spreadsheet (columns A-F: Contract Name, Vendor Name, Renewal Date, Annual Cost, Pricing URL, Status). A validation engine checks each row for:
- Valid contract names (non-empty)
- Proper ISO dates (YYYY-MM-DD format)
- Positive costs (allows zero for free-tier contracts)
- Valid HTTP/HTTPS URLs
- Active status (skips Cancelled/Renewed contracts)

Invalid rows are silently filtered out to prevent workflow crashes from bad data.

### 3. MULTI-STAGE ALERT LOGIC
A Brain node calculates days-until-renewal using native JavaScript `Date` objects (no external dependencies). For each contract, it checks four alert windows:
- **45 days out:** 🟡 REMINDER — "Research Phase: Look for alternatives"
- **30 days out:** 🟠 ATTENTION — "Quote Phase: Get competitor pricing"
- **14 days out:** 🔴 URGENT — "Decision Phase: Finalize negotiation"
- **7 days out:** 🚨 FINAL NOTICE — "Action Phase: Confirm or cancel"

Each window spans 5 days (`daysUntil &lt;= alert.days && daysUntil &gt; alert.days - 5`) to catch missed runs from weekends or server outages. The workflow only fires once per stage by checking if the Status column already contains that stage marker (e.g., `alerted_45d`).

**Deduplication:** A Set-based tracker prevents duplicate alerts if the same contract appears multiple times in your sheet.

### 4. NOTIFICATION & TRACKING
**Success Path:** When a contract enters an alert window:
1. Slack receives a formatted message with:
   - Urgency indicator (🟡/🟠/🔴/🚨)
   - Contract details (vendor, renewal date, annual cost)
   - ROI calculation (potential savings: 15-25% of contract value)
   - Manual research checklist (vendor pricing URL, competitor search terms)
   - Upgrade CTA with UTM tracking (`utm_campaign` = contract slug, `utm_content` = alert stage)
2. Google Sheets Status column updates to append the alert stage: `"Active, alerted_45d"`
3. Next day, the workflow knows this contract was already alerted and won't send duplicate messages

**Empty Path:** When no contracts are in alert windows, a daily summary message confirms the workflow ran successfully: *"✅ Daily check complete. Reviewed 12 contracts. No renewals in alert windows."*

**Error Path:** If Google Sheets/Slack APIs fail, an Error Trigger fires and sends a troubleshooting alert to the same Slack channel with specific fix instructions.

---

## Benefits

- **Multi-Stage Progression:** Four strategic touchpoints (45d, 30d, 14d, 7d) give you time to research alternatives, get quotes, negotiate terms, and finalize decisions — not just a last-minute panic alert.
- **No Duplicate Spam:** Status column tracking ensures each contract only triggers once per stage, even if the workflow runs daily.
- **Catch-Up Logic:** 5-day alert windows prevent missed notifications if your n8n server is down for a weekend or you skip a few days.
- **ROI-Focused Messaging:** Every alert shows potential savings (15-25% of contract value) to justify the time spent on renewal research.
- **Freemium Conversion Funnel:** Built-in upgrade CTAs with UTM tracking measure which contracts drive the most premium conversions.
- **Production Error Handling:** Error Trigger workflow ensures you know immediately if credentials expire or APIs fail.

---

## Target Audience

- **Finance/Ops Teams** at startups managing 5-50 SaaS contracts who want automated renewal reminders but are willing to do manual research.
- **Procurement Managers** who need advance notice to negotiate better terms and avoid auto-renewal price hikes.
- **CFOs/Controllers** looking to reduce SaaS spend by 15-25% through systematic renewal reviews.
- **Bootstrapped Founders** wearing multiple hats who can't afford dedicated procurement software but need basic contract monitoring.

---

## Required APIs

- **Google Sheets OAuth2:** Read/write access to your contract tracking spreadsheet.
  - Scope required: `https://www.googleapis.com/auth/spreadsheets`
- **Slack API:** Post messages to your `#contract-renewals` channel.
  - Scopes required: `chat:write`, `chat:write.public`
  - Bot must be added to the channel before first run

---

## Easy Customization

- **Alert Stages:** Modify the `alertStages` array in the Brain node to change days (e.g., 60d, 45d, 30d, 14d for longer lead times) or urgency labels.
- **Notification Channels:** Replace Slack nodes with Email (Gmail), Microsoft Teams, or Discord to match your team's communication stack.
- **Timezone:** Change `Workflow Settings → Timezone` from UTC to your local timezone (e.g., `Europe/Helsinki`, `America/New_York`) so 9 AM means 9 AM local time.
- **Schedule Frequency:** Modify cron expression in Schedule node to run twice daily (`0 9,17 * * *`) or weekly (`0 9 * * 1`) instead of daily.
- **Data Destination:** Swap Google Sheets for Airtable, Notion, or PostgreSQL by replacing the Sheets nodes while keeping the same logic flow.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
