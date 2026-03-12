# 📋 Predict construction delays with Claude, OpenWeather and Slack alerts

> ⚡ **51 views** · 📋 [Project Management](../)

## Description

This workflow monitors active construction projects in real time, ingests weather forecasts, supplier delivery statuses, and crew/resource availability, then uses Claude AI to predict delay risk, estimate schedule impact, and generate mitigation playbooks for project managers.

### How it works

1. **Trigger** — Webhook (on-demand) or daily schedule kick-off
2. **Load Active Projects** — Pulls project list from your PM system (Procore / Airtable / Sheets)
3. **Fetch Weather Forecast** — 7-day forecast for each project site location
4. **Fetch Supplier Status** — Checks open purchase orders and delivery ETAs
5. **Fetch Resource Availability** — Crew headcount, equipment, subcontractor status
6. **Combine Risk Data** — Merges all data streams per project
7. **AI Delay Prediction** — Claude AI scores delay probability and generates mitigation plan
8. **Severity Routing** — Routes CRITICAL/HIGH risk projects to immediate alert path
9. **Notify Project Managers** — Slack alert with risk summary and action items
10. **Update PM Dashboard** — Writes prediction back to Airtable / Google Sheets
11. **Create Risk Ticket** — Opens Jira / Linear issue for HIGH+ risk projects
12. **Send Daily Briefing** — Email digest of all at-risk projects

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Anthropic API** — Claude AI for delay prediction
   - **OpenWeatherMap API** — Site weather forecasts
   - **Airtable / Google Sheets** — Project & resource data
   - **Procore API** — Schedule and RFI data (optional)
   - **Slack OAuth** — Project manager alerts
   - **Jira API** — Risk issue tracking
   - **SendGrid / SMTP** — Daily email briefing
3. Set your Airtable base ID and table names
4. Configure Slack channel IDs per severity level
5. Set your risk threshold (default: 60%) in the routing node
6. Activate the workflow

### Sample Webhook Payload
```json
{
  "projectId": "PROJ-2025-042",
  "projectName": "Riverside Commercial Tower",
  "siteLocation": { "lat": -33.8688, "lon": 151.2093 },
  "plannedEndDate": "2025-11-15",
  "currentPhase": "Structure",
  "forceRefresh": true
}
```

### AI Prediction Criteria (Claude)
- **Weather Risk** — Rain days, wind, temperature extremes blocking site work
- **Supplier Risk** — Lead time slippage, back-orders, sole-source dependencies
- **Resource Risk** — Labour shortages, equipment breakdown, subcontractor delays
- **Schedule Slack** — Float remaining vs. risk exposure
- **Phase Complexity** — Current phase sensitivity to external delays
- **Historical Patterns** — Similar project delay patterns

### Features
- Multi-source real-time risk ingestion
- AI-powered delay probability scoring (0–100%)
- Automated severity routing and escalation
- Mitigation playbook generation per risk type
- Google Sheets / Airtable dashboard sync
- Daily briefing email and Slack digest

---

**Explore More Automation:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to design AI-powered lead nurturing, content engagement, and multi-platform reply workflows tailored to your growth strategy.

## 🔗 Nodes Used

Airtable, Send Email, Google Sheets, HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
