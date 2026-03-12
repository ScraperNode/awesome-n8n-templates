# 🎫 Automate customer support triage with GPT, Gmail, Slack & analytics dashboard

> ⚡ **109 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How it Works
This workflow automatically monitors your Gmail support inbox every minute for new unread messages, instantly sending each email to OpenAI for intelligent analysis. The AI engine evaluates sentiment (Positive/Neutral/Negative/Critical), urgency level (Low/Medium/High/Critical), and categorizes requests into Technical, Billing, Feature Request, Bug Report, or General Inquiry, while extracting key issues and generating professional response templates.

The system calculates a priority score (0-110 points) by combining urgency weight (25 points per level) with sentiment impact (10 points per level), automatically flagging any Critical urgency or Critical sentiment tickets for immediate attention. Critical issues trigger instant Slack alerts with full context, suggested responses, and 30-minute SLA reminders, while routine tickets route to monitoring channels for standard processing.

Every ticket is logged to Airtable with complete analysis data and thread tracking, then simultaneously posted to a Google Sheets analytics dashboard for real-time metrics. A secondary AI pass generates strategic insights including trend identification, risk assessment, and actionable recommendations for the support team, storing these insights back in Airtable linked to the original ticket.

The entire process takes seconds from email arrival to team notification, eliminating manual triage and ensuring critical customer issues receive immediate attention while building a searchable knowledge base of support patterns.

---

## Who is this for?
- Customer support teams drowning in high email volumes needing automated prioritization
- SaaS companies tracking support metrics and response times for customer satisfaction
- Startups with lean support teams requiring intelligent ticket routing and escalation
- E-commerce businesses managing technical support, returns, and billing inquiries simultaneously
- Support managers needing data-driven insights into customer pain points and support trends

---

## Setup Steps
- Setup time: Approx. 20-30 minutes (OpenAI API, Gmail connection, database setup)
- Requirements:
    - Gmail account with support email access
    - OpenAI API account with API key
    - Airtable account with workspace access
    - Google Sheets for analytics dashboard
    - Slack workspace with incoming webhooks

- Sign up for OpenAI and obtain your API key for the AI analysis nodes.
- Create an Airtable base with two tables: "tblSupportTickets" (main records) and "tblInsights" (AI insights) with matching column names.
- Create a Google Sheet with columns for Date, Time, Customer, Email, Subject, Sentiment, Urgency, Category, Priority, Critical, Status.
- Set up these nodes:
    - **Monitor Support Emails:** Connect Gmail account, configure to check INBOX label for unread messages.
    - **AI Analysis Engine:** Add OpenAI credentials and API key, system prompt pre-configured.
    - **Parse & Enrich Data:** JavaScript code automatically extracts and scores data (no changes needed).
    - **Route by Urgency:** Configure routing rules to split critical vs. routine tickets.
    - **Slack Alert Nodes:** Set up webhook URLs for critical alerts channel and routine monitoring channel.
    - **Log to Airtable Database:** Connect Airtable, select base and table, map all data fields.
    - **Update Analytics Dashboard:** Connect Google Sheets and select target sheet/range.
    - **Generate Insights & Store AI Insights:** OpenAI credentials already set, Airtable connection for storage.
- Replace placeholder IDs: Airtable base ID (appXXXXXXXXXXXXXX), table names, Google Sheet document ID (1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX).
- Credentials must be entered into their respective nodes for successful execution.

---

## Customization Guidance
- **Priority Scoring Formula:** Adjust urgency multiplier (currently 25) and sentiment weight (currently 10) in the Code node to match your SLA requirements.
- **Urgency Thresholds:** Modify critical routing logic—currently any "Critical" urgency or sentiment triggers immediate alerts.
- **AI Analysis Temperature:** Lower OpenAI temperature (0.1-0.2) for more consistent categorization, or raise (0.4-0.5) for nuanced sentiment detection.
- **Polling Frequency:** Change Gmail trigger from every minute to every 5/15/30 minutes based on support volume and urgency needs.
- **Email Filters:** Add sender whitelist/blacklist, specific label filters, or date ranges to focus on particular customer segments.
- **Category Customization:** Modify AI system prompt to add industry-specific categories like "Compliance," "Integration," "Onboarding," etc.
- **Multi-Language Support:** Add language detection and translation steps before AI analysis for international support teams.
- **Auto-Response:** Insert Gmail send node after AI analysis to automatically send suggested responses for low-priority inquiries.
- **Escalation Rules:** Add additional routing for VIP customers, enterprise accounts, or tickets mentioning "cancel/refund."
- **Dashboard Enhancements:** Connect to Data Studio, Tableau, or Power BI for advanced support analytics and team performance tracking.

---

Once configured, this workflow transforms your support inbox into an intelligent triage system that never misses critical issues, provides instant team visibility, and builds actionable customer insights—all while your team focuses on solving problems instead of sorting emails.

---

**Built by Daniel Shashko**  
[Connect on LinkedIn](https://www.linkedin.com/in/daniel-shashko/)

## 🔗 Nodes Used

Airtable, Google Sheets, Slack, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
