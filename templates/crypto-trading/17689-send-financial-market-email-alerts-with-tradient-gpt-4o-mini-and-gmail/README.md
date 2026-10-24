# 📈 Send financial market email alerts with Tradient, GPT-4o mini, and Gmail

> ⚡ **37 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs daily during Indian market hours, pulls the latest stock-market news from the Tradient API, uses OpenAI to classify event severity and relevance, and emails concise investor alerts via Gmail for high-impact events.

## How it works
1. Runs every day on a schedule and starts only if the current time is within NSE/BSE market hours (9:15 AM–3:30 PM IST).
2. Fetches the latest market news from the Tradient API and normalizes each article into a consistent structure.
3. Filters out routine announcements and keeps only news in important sub-categories or containing high-signal keywords.
4. Sends each remaining item to OpenAI to classify the event type, severity, market impact, investor relevance, and whether an alert should be sent.
5. Keeps only items where OpenAI recommends sending an alert and the severity is not Low, then removes duplicate articles by article ID.
6. Uses OpenAI to generate a short, actionable investor alert in JSON, formats it for email, and sends it through Gmail.

## Setup
1. Add an OpenAI credential (or compatible OpenAI connection in the LangChain OpenAI node) and confirm the selected model (gpt-4o-mini) is available in your account.
2. Configure the Tradient market news endpoint and any required authentication or headers in the HTTP request node.
3. Add a Gmail OAuth2 credential and set the recipient(s) and other email options in the Gmail node.
4. Adjust the schedule time, timezone assumptions (Asia/Kolkata), and the keyword/category allowlist and ignore patterns to match your alerting needs.

## Additional info
## How To Customize Nodes

### Customize Market Hours

Inside:
- `Filter & Normalize News`

Modify:

```javascript
(hour > 9 || (hour === 9 && minutes >= 15))
```

and

```javascript
(hour < 15 || (hour === 15 && minutes <= 30))
```

to support different market timings.


### Customize Important Keywords

Inside:
- `Filter & Normalize News`

Modify:

```javascript
const importantKeywords = [...]
```

You can add:
- IPO
- bankruptcy
- dividend
- layoffs
- share buyback
- guidance

or any market-specific keywords.


### Customize Ignored News Types

Modify:

```javascript
const ignorePatterns = [...]
```

to filter additional unwanted announcements.


### Change AI Model

Inside:
- `AI Event Classification Node`
- `Generate Advisor Alert`

You may switch:
- `gpt-4o-mini`
- `gpt-4.1`
- `gpt-4.1-mini`

depending on performance and cost requirements.


### Customize Alert Severity Rules

Inside:
- `Check Important Market Event`

You can:
- Allow Medium alerts
- Restrict to only Critical alerts
- Add custom scoring logic


### Customize Email Content

Inside:
- `Send Investor Email Alert`

Modify:
- HTML formatting
- Branding
- Footer
- Investor disclaimer
- Contact information


## Add-ons (Additional Features You Can Extend)

You can extend this workflow with additional automation features such as:

- Slack investor alerts
- Telegram notifications
- Discord alerts
- WhatsApp integration
- Google Sheets logging
- Airtable market event database
- Portfolio-specific filtering
- AI sentiment scoring dashboards
- Real-time market monitoring
- Multi-market support (US, EU, Crypto)
- SMS notifications
- Priority escalation workflows
- Daily investor digest generation
- Sector-specific alert channels


## Use Case Examples

### 1. Real-Time Investor Alerting

Automatically notify investors when companies announce:
- large contracts
- strategic partnerships
- acquisitions
- regulatory approvals


### 2. Trading Desk Monitoring

Help traders monitor high-impact corporate developments without manually reading market feeds.


### 3. Portfolio Risk Monitoring

Track negative developments such as:
- fraud investigations
- penalties
- operational shutdowns
- compliance warnings


### 4. Financial Research Automation

Research teams can automate the identification of market-moving events across sectors.


### 5. AI-Powered Financial News Digest

Build automated investor newsletters using AI-generated summaries and categorized market events.

Additional use cases can be created by integrating this workflow with CRMs, portfolio systems, trading dashboards, or internal business intelligence platforms.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| No alerts are being sent | Market is closed | Verify market-hour validation logic |
| Workflow stops after API fetch | Invalid API response | Verify market news API availability |
| AI classification fails | Invalid OpenAI credentials | Reconnect OpenAI credentials |
| Duplicate alerts received | Missing article IDs | Verify `article_id` availability |
| Gmail node fails | Gmail authentication expired | Reconnect Gmail credentials |
| Low-quality alerts | AI prompt too generic | Improve AI prompt instructions |
| Too many alerts | Keyword filtering too broad | Refine important keywords |
| Important events are ignored | Severity filtering too strict | Adjust IF node conditions |
| JSON parsing errors | AI returned invalid JSON | Strengthen prompt formatting rules |
| Workflow executes outside market hours | Timezone mismatch | Verify `Asia/Kolkata` timezone logic |


## Need Help?

Whether you want to:

- add Slack or Telegram alerts
- integrate trading systems
- build investor dashboards
- create sector-specific AI monitoring
- automate portfolio intelligence
- extend multi-market coverage
- improve AI classification accuracy

our [n8n workflow development team at WeblineIndia](https://www.weblineindia.com/hire-n8n-developers/) can help you build production-ready financial automation workflows tailored to your business needs.

WeblineIndia can also assist with:

- custom n8n workflow development
- AI workflow integrations
- FinTech automation solutions
- enterprise workflow optimization
- cloud deployment
- scalable automation architecture
- workflow maintenance and monitoring

If you need a customized version of this workflow or a completely new [AI-powered automation solution](https://www.weblineindia.com/process-automation-solutions.html), feel free to reach out to WeblineIndia for professional assistance.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
