# 🎫 Convert Outlook emails to Planner tasks and monitor Secure Score with Teams alerts in M365

> ⚡ **375 views** · 🎫 [Ticket Management & Triage](../)

## Description

**Keep your IT operations moving, every action email becomes a tracked task, and every security alert lands where it belongs, automatically.**

Every IT team deals with the same two problems: important emails that should become tasks but don't, and security posture scores that nobody checks until something breaks. This workflow solves both automatically. It scans your Outlook inbox every 30 minutes for actionable emails and converts them into Microsoft Planner tasks, while a separate Monday morning pipeline monitors your Microsoft Secure Score and creates a priority-1 alert task if you drop below 80%.

---

### How it works

The workflow runs two independent pipelines on a single Microsoft Graph OAuth2 credential:

**Pipeline 1: Email-to-Task Parser (every 30 minutes)**

1. **Email Ingestion:** Polls Outlook for unread emails every 30 minutes. Exits cleanly if the inbox is empty. Splits emails into a sequential batch loop for one-at-a-time processing.
2. **Keyword Extraction & Date Parsing:** Strips HTML from the email body and scans subject and body for configurable action keywords (URGENT, ACTION REQUIRED, TASK:, PLEASE REVIEW, CRITICAL). Extracts due dates from ISO format (`2025-06-30`), structured prefixes (`due: 30.6.2025`), or relative phrases (today, tomorrow, end of week, Friday).
3. **Task Creation Chain:** Creates a Planner task via Graph API with the correct priority and due date, attaches the sender details and a 500-character body preview as the task description, posts a Teams notification, sends an auto-reply to the sender, and marks the email as read. Every node runs with Continue on Fail so a single API error does not crash the batch.
4. **Poison Pill Guard & Rate Limit:** Checks upstream nodes for silent failures before continuing. Waits 2 seconds between emails to respect Graph API rate limits, then loops back for the next email.

**Pipeline 2: Security Score Monitor (every Monday at 08:00)**

1. **Score Fetch & Calculation:** Fetches the latest Microsoft Secure Score from the Graph Security API and calculates it as a percentage of the maximum achievable score.
2. **Alert Routing & Deduplication:** If below 80%, checks whether an open alert task already exists in Planner to avoid duplicate accumulation across weekly runs. Creates a new task or updates the existing one with the latest score.
3. **Security Task & Teams Alert:** Creates or updates a priority-1 Planner task with a 24-hour due date and a Defender portal reference. Posts a Teams alert with current score, maximum score, and scan date. If the score is healthy, posts a green summary instead.

---

### Key benefits

- **Keyword-driven task creation:** Configurable keyword list means no hardcoded triggers, adapt it to your team's exact email language without touching code
- **Smart date extraction:** Parses ISO dates, structured `due:`/`by:` prefixes, and natural language relative phrases in a single pass, timezone-aware for Europe/Helsinki
- **Deduplication guard:** The security monitor checks for open alert tasks before creating new ones, so your Planner bucket stays clean across repeated weekly runs
- **Poison Pill Guard:** Catches silent node failures after each email is processed without crashing the batch loop, failed emails are flagged, not lost
- **Continue on Fail throughout:** A Teams API failure does not prevent the Planner task from being created or the email from being marked read
- **Global error handling:** A dedicated Error Trigger catches any catastrophic workflow failure and sends a structured HTML alert email via Graph API with execution ID, failed node name, and timestamp

---

### Setup

1. **Credentials:** Connect your Microsoft Graph OAuth2 credential to all nodes (covers Outlook, Planner, and Teams)
2. **Workflow variables:** Set the following in the n8n Variables panel:
   - `PLANNER_PLAN_ID`
   - `PLANNER_BUCKET_ID`
   - `TASK_ASSIGNEE_USER_ID`
   - `TEAMS_TEAM_ID`
   - `TEAMS_CHANNEL_ID`
   - `MONITORED_MAILBOX` (UPN of the Outlook mailbox to scan)
   - `ACTION_KEYWORDS` (comma-separated, defaults to: `ACTION REQUIRED,URGENT,TASK:,PLEASE REVIEW,CRITICAL`)
3. **Error alert:** Update the recipient address in the Send Error Notification Email node (`it-admin@company.fi`)
4. **Timezone:** Set the `REPORT_TIMEZONE` environment variable if your team is not in Europe/Helsinki (defaults to `Europe/Helsinki`)
5. **Graph API permissions:** Ensure your registered Azure App has `Mail.ReadWrite`, `Tasks.ReadWrite`, `ChannelMessage.Send`, and `SecurityEvents.Read.All`
6. **Activate:** Turn the workflow on Pipeline 1 starts on the next 30-minute interval, Pipeline 2 fires the following Monday at 08:00

---

### Who this is for

- **IT Operations teams** managing a Microsoft 365 environment who want action emails automatically converted to tracked tasks without manual triage
- **IT managers and security leads** who need a weekly automated check on tenant security posture without logging into Defender every Monday
- **MSPs and internal IT departments** looking to standardize ITSM intake through email without deploying a full helpdesk platform
- **Small and mid-size teams** that live in Microsoft 365 and want automation that stays entirely within the M365 ecosystem

---

### Required credentials

- Microsoft Graph OAuth2 (covers all M365 nodes: Outlook, Planner, Teams)

### Required Graph API permissions

`Mail.ReadWrite` `Tasks.ReadWrite` `ChannelMessage.Send` `SecurityEvents.Read.All`

---

### How to customize it

- **Change the keyword list:** Update the `ACTION_KEYWORDS` workflow variable to match your team's exact email language  no code changes needed
- **Adjust the security threshold:** Change the 80% threshold in the `Is Score Below 80%?` node to match your organization's compliance baseline
- **Add more task destinations:** Fan out from `Keyword Match Found?` to also create Jira tickets, ServiceNow incidents, or send a dedicated Slack message
- **Extend the date parser:** Add additional relative phrase patterns to the `Extract Task from Email` code node to handle phrases like "next week" or "end of month"
- **Change the schedule:** Modify the trigger intervals run the email parser every 15 minutes for high-volume inboxes, or shift the security check to Friday afternoons

## 🔗 Nodes Used

HTTP Request, Microsoft Teams, Microsoft Outlook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
