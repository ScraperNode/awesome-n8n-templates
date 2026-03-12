# 🎫 AI-powered bug triage system with OpenAI, Jira and Slack alerts

> ⚡ **59 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Webhook → OpenAI → Jira “Bug Suspicion” → Slack QA Escalation

This workflow ingests bug reports via a webhook, uses OpenAI to triage and tag them, creates a Jira Bug in project `APP` with AI-driven labels and alerts QA in Slack. Import the JSON, add OpenAI + Jira + Slack credentials, set the webhook path, choose your Slack channels and activate.

### Quick Start – Implement in 60 Seconds
1. Import the JSON into n8n.
2. Add credentials to **AI Bug Analysis** (OpenAI), **Create Jira** nodes and both **Slack Alert** nodes.
3. Set webhook path `advanced-bug-triage`; test with a POST body containing `priority`, `summary` and `category`.
4. Adjust Slack channels `qa-alerts-high` and `qa-general` if needed.
5. Activate and verify a test POST flows through Jira and Slack.

That’s it. Jira issue gets created and Slack gets notified instantly.

## What It Does

The workflow acts as an AI-assisted bug triage bridge. A webhook receives incoming bug suspicions, which are then analyzed by OpenAI to determine priority and category. Based on the AI output, the flow routes to the appropriate Jira creation path and applies standardized labels for consistent reporting.

After creating the Jira Bug in project `APP`, the workflow escalates to Slack: high-priority items go to `qa-alerts-high`, while normal items go to `qa-general`. The result is a fast, low-friction path from external bug signals to actionable Jira issues with immediate QA visibility.

## Who’s It For

- QA teams wanting automated Jira escalation.
- Developers integrating external systems with Jira.
- Product teams capturing automated “bug suspicion” signals.
- Monitoring or Sentry-like pipelines.
- Companies wanting lightweight reporting without building custom infrastructure.


## Pre-Requisites
- n8n (cloud or self-hosted).
- Jira account with permission to create Bug issues.
- Jira project key: APP (or customize).
- OpenAI credentials (for **AI Bug Analysis**) 
- Slack Workspace + Bot token.
- Ability to send POST request to n8n Webhook endpoint.


## How It Works & Setup Instructions

- **Webhook Trigger** (`advanced-bug-triage`): Accepts POST payloads (e.g., summary, description, priority, category).
- **AI Bug Analysis** (OpenAI): Analyzes the payload for sentiment/priority/category (configure your prompt/fields as needed).
- **Priority Switch**: Routes items to the correct Jira creation path (High/Medium/Low).
- **Create Jira (High/Medium/Low)**: Creates Bug issues in project `APP`, labeling with `ai-triaged` and the AI-detected category.
- **Slack Alert (High / Normal)**: Notifies QA with the Jira key; high priority goes to `qa-alerts-high`, others to `qa-general`.  

### Step 1: Configure Webhook Node
- Method: POST  
- Path: `bug-suspicion`  
- Endpoint example:  
  ```
  https://YOUR-N8N-URL/webhook/bug-suspicion
  ```

### Step 2: Add OpenAI Credentials
- Open **OpenAI** node  
- Select credentials
- Modify the prompts as needed


### Step 3: Add Jira Credentials
- Open **Create Jira Bug** node  
- Select credentials  
- Ensure access to project `APP`  
- Ensure permission to create `Bug` issue type  

### Step 4: Add Slack Credentials
- Open **Slack QA Escalation** node  
- Choose Slack Bot credentials  
- Set QA channel  
- Slack message uses:  
  ```
  Issue is created in jira for this key &lt;ISSUE-KEY&gt;
  ```

### Step 5: Test Webhook
```json
{
  "title": "Login button unresponsive"
}
```

### Step 6: Activate Workflow
Enable **Active** toggle.


## How to Customize Nodes

### Webhook Trigger
- Add API keys, tokens or Basic Auth  
- Add JSON validation  

### Jira Node
You may add:
```json
"additionalFields": {
  "labels": "bug-suspicion,auto-detected",
  "description": "={{$json["details"]}}"
}
```

### Slack Node
Customize formatting, attachments, mentions or channels.

### AI Node for Bug Analysis

Tune the prompt, map input fields or adjust model parameters for stricter/looser triage.  

### Priority Switch
Modify routing thresholds, add more branches or change default fallback.  


## Add-ons (Optional Enhancements)

- Email alerts.
- Severity scoring using AI.
- Push bug data to Notion or Google Sheets.
- Add screenshots/logs.
- Multi-channel notifications.
- Auto-assign Jira issues based on category or component.  
- Add a fallback email notification for high-priority tickets.  
- Push payloads to a data store (e.g., Sheets/DB) for analytics.  
- Add a secondary Slack DM to on-call for P1.  
- Enrich tickets with logs/links/screenshots from the payload.  


## Use Case Examples
1. Automated QA test failures → Jira + Slack.
2. Monitoring system detects abnormal activity.
3. Browser extension for internal bug reporting.
4. CI/CD pipeline error → instant QA alert.
5. External scripts or tools triggering bug reports.
6. Monitoring alerts auto-create Jira bugs with AI-prioritized severity and Slack escalation.
7. Customer support form pushes suspected bugs directly into Jira with category labels.
8. QA automation failures stream into Jira with priority-based Slack alerts.
9. SRE on-call receives P1 Slack alerts while lower priorities route to the general QA channel.
10. Product beta feedback is categorized by AI and logged as Jira bugs for triage.


## Troubleshooting Guide

| Issue | Cause | Solution |
|-------|--------|-----------|
| Webhook not receiving data | Wrong URL/method | Use POST + correct path |
| Jira issue not created | Wrong credentials/project | Verify Jira credentials + APP project |
| Slack message not sent | Bot not allowed in channel | Invite bot to channel |
| Jira fields empty | Missing JSON field | Ensure payload includes `"title"` |
| Slack shows undefined | Jira response changed | Add Debug node to inspect output |
| Workflow not running | Not activated | Turn ON "Active" |


## Need Help?

If you want help customizing this workflow or building similar [n8n workflow automations](https://www.weblineindia.com/n8n-automation/), the WeblineIndia team can assist with:  

- Jira integrations  
- Slack automation  
- API-based bug pipelines  
- DevOps automation  
- AI-driven severity scoring  
- And so much more.

Reach out anytime for implementation or enhancements.

## 🔗 Nodes Used

Slack, Webhook, Jira Software, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
