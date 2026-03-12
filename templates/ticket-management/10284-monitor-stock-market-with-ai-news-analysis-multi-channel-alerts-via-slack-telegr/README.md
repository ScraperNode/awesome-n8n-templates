# 🎫 Monitor stock market with AI: news analysis & multi-channel alerts via Slack & Telegram

> ⚡ **573 views** · 🎫 [Ticket Management & Triage](../)

## Description

# AI Customer Support Triage with Gmail, OpenAI, Airtable & Slack

## How it Works
This workflow monitors your Gmail support inbox every minute, automatically sending each unread email to OpenAI for intelligent analysis. The AI evaluates sentiment (Positive/Neutral/Negative/Critical), urgency level (Low/Medium/High/Critical), categorizes requests (Technical/Billing/Feature Request/Bug Report/General), extracts key issues, and generates professional response templates.

The system calculates a priority score (0-110) by combining urgency and sentiment weights, then routes tickets accordingly. Critical issues trigger immediate Slack alerts with full context and 30-minute SLA reminders, while routine tickets post to standard monitoring channels. Every ticket logs to Airtable with complete analysis and thread tracking, then updates a Google Sheets dashboard for real-time analytics.

A secondary AI pass generates strategic insights (trend identification, risk assessment, actionable recommendations) and stores them back in Airtable. The entire process takes seconds from email arrival to team notification, eliminating manual triage and ensuring critical issues get immediate attention.

---

## Who is this for?
- Customer support teams needing automated prioritization for high email volumes
- SaaS companies tracking support metrics and response times
- Startups with lean teams requiring intelligent ticket routing
- E-commerce businesses managing technical, billing, and return inquiries
- Support managers needing data-driven insights into customer pain points

---

## Setup Steps
- **Setup time:** 20-30 minutes
- **Requirements:** Gmail, OpenAI API key, Airtable account, Google Sheets, Slack workspace

1. **Monitor Support Emails:** Connect Gmail via OAuth2, configure INBOX monitoring for unread emails
2. **AI Analysis Engine:** Add OpenAI API key, system prompt pre-configured for support analysis
3. **Parse & Enrich Data:** JavaScript code automatically calculates priority scores (no changes needed)
4. **Route by Urgency:** Configure routing rules for critical vs routine tickets
5. **Slack Alerts:** Create Slack app, get bot token and channel IDs, replace placeholders in nodes
6. **Airtable Database:** Create base with "tblSupportTickets" table, add API key and Base ID (replace `appXXXXXXXXXXXXXX`)
7. **Google Sheets Dashboard:** Create spreadsheet, enable Sheets API, add OAuth2 credentials, replace Sheet ID (`1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)
8. **Generate Insights:** Second OpenAI call analyzes patterns, stores insights in Airtable
9. **Test:** Send test email, verify Slack alerts, check Airtable/Sheets data logging

---

## Customization Guidance
- **Priority Scoring:** Adjust urgency weight (25) and sentiment weight (10) in Code node to match your SLA requirements
- **Categories:** Modify AI system prompt to add industry-specific categories (e.g., healthcare: appointments, prescriptions)
- **Routing Rules:** Add paths for High urgency, VIP customers, or specific categories
- **Auto-Responses:** Insert Gmail send node after routine tickets for automatic acknowledgment emails
- **Multi-Language:** Add Google Translate node for non-English support
- **VIP Detection:** Query CRM APIs or match email domains to flag enterprise customers
- **Team Assignment:** Route different categories to dedicated Slack channels by department
- **Cost Optimization:** Use GPT-3.5 (~$0.001/email) instead of GPT-4, self-host n8n for unlimited executions

---

Once configured, this workflow operates as your intelligent support triage layer—analyzing every email instantly, routing urgent issues to the right team, maintaining comprehensive analytics, and generating strategic insights to improve support operations.

---

**Built by Daniel Shashko**  
[Connect on LinkedIn](https://www.linkedin.com/in/daniel-shashko/)

## 🔗 Nodes Used

Airtable, Google Sheets, RSS Read, Slack, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
