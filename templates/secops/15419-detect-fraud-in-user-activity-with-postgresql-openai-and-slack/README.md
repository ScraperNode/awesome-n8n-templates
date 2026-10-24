# 🔒 Detect fraud in user activity with PostgreSQL, OpenAI and Slack

> ⚡ **59 views** · 🔒 [SecOps & Security Automation](../)

## Description

# AI Fraud Detection Workflow 

&gt; n8n + PostgreSQL + OpenAI + Slack

---

This **AI Fraud Detection Workflow** is an automated n8n pipeline that analyzes user activity in real time using a combination of **rule-based fraud detection, AI interpretation and historical behavioral context**. It processes events like login attempts, password changes or transactions, evaluates risk, stores results in PostgreSQL and triggers alerts for high-risk activity.

### Quick Implementation Steps

1. [Import workflow into n8n](https://n8n.partnerlinks.io/om1efg2qgvwi)
2. Configure webhook endpoint `/user-activity`  
3. Set up PostgreSQL connection and `user_activity_logs` table
4. Add OpenAI API credentials
5. Configure alerting node (Slack or alternative)
6. Activate workflow and test with sample payload


## What It Does

This workflow continuously monitors user activity events and evaluates them for suspicious behavior.

When a user event is received, the system:

- Validates the incoming request
- Fetches last 10 user activity logs from PostgreSQL
- Builds behavioral context
- Applies rule-based fraud scoring
- Sends structured data to AI for interpretation
- Combines AI + rule-based decisions
- Stores results in the database
- Sends alerts for HIGH-risk cases

It helps detect anomalies like:

- New device usage
- Impossible travel (rapid location change)
- Foreign access attempts
- Sensitive actions like password changes


## Who It's For

- Fintech applications
- Banking & payment platforms
- SaaS applications with authentication systems
- E-commerce platforms
- Security and fraud prevention teams
- DevOps and backend engineers


## Requirements to Use This Workflow

- [n8n account (cloud or self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- PostgreSQL database
- OpenAI API key
- Alerting system (Slack / Email / Teams / etc.)
- Webhook support for incoming user activity events

### Database Schema

```sql
CREATE TABLE user_activity_logs (
  id BIGSERIAL PRIMARY KEY,
  user_id TEXT,
  event TEXT,
  ip TEXT,
  location TEXT,
  device TEXT,
  risk_score INT,
  ai_flag TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## How It Works & Setup Guide

### 1. Webhook Trigger

Receives user activity via POST request:

**Endpoint:**

`/user-activity`

**Payload:**
```sql
{
  "user_id": "user_002",
  "event": "password_change",
  "ip": "192.165.1.45",
  "location": "United States",
  "device": "Chrome Browser - Windows"
}
```

### 2. Request Validation

Ensures required fields exist:

- user_id
- event
- ip
- location
- device

### 3. Fetch User History (PostgreSQL)

Retrieves last 10 activity logs for the user to build behavioral context.

### 4. Context Builder

Merges:

- Current event
- Historical activity logs

This helps detect behavioral anomalies.

### 5. Rule-Based Fraud Engine

Applies deterministic fraud logic:
- New device detection
- Impossible travel detection
- Foreign location access
- Sensitive operations (password change, withdrawal)

Outputs:
- `rule_score`
- `rule_risk` (LOW / MEDIUM / HIGH)
- `risk_reasons`

### 6. AI Fraud Interpreter (OpenAI)

The AI does **not calculate risk.**

It only interprets rule-based output and returns:

```json
{
  "risk_level": "LOW | MEDIUM | HIGH",
  "reason": "short explanation"
}
```

### 7. AI Response Cleaner

- Parses AI output safely
- Extracts:
  - ai_risk
  - ai_reason

### 8. Decision Fusion Layer

Final risk logic:

- If rule OR AI = HIGH → **FINAL = HIGH**
- Else if either = MEDIUM → **FINAL = MEDIUM**
- Else → **LOW**

### 9. Database Logger

Stores final result in PostgreSQL:

- user_id
- event
- ip
- location
- device
- risk_score (rule-based)
- ai_flag (AI risk level)

### 10. High Risk Filter

Triggers only when:
```json
final_risk === "HIGH"
```

### 11. Alert Dispatcher

Sends fraud alert via Slack (or can be replaced with email, SMS, Teams, etc.)


## How to Customize Nodes

- **Fraud Rules Engine:** Adjust scoring weights and conditions
- **AI Prompt:** Add domain-specific fraud rules or compliance logic
- **Database Node:** Add extra fields like session_id, user_agent
- **Alert System:** Replace Slack with email, SMS or webhook
- **Threshold Logic:** Modify HIGH/MEDIUM/LOW conditions


## Add-ons (Enhancements)

- GeoIP enrichment using IP tracking
- Device fingerprinting integration
- Real-time fraud dashboard
- Machine learning anomaly scoring
- Multi-channel alerting (Slack + Email + SMS)
- Fraud case management system
- Rate limiting and bot detection


## Use Case Examples

- Detect unauthorized login attempts
- Prevent account takeover (ATO) attacks
- Monitor suspicious password changes
- Detect fraudulent financial transactions
- Identify VPN or proxy-based access

This workflow can be extended to many more fraud detection and security monitoring use cases.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|---------------|----------|
| Webhook not receiving data | Incorrect endpoint or inactive workflow | Ensure workflow is active and webhook URL is correct |
| AI parsing error | Unexpected response format from OpenAI | Verify JSON structure from AI output |
| No historical data found | Empty user logs table | Ensure `user_activity_logs` has existing records |
| Slack alert not triggered | Risk not classified as HIGH | Check fusion logic in decision node |
| PostgreSQL error | Wrong credentials or schema mismatch | Verify DB connection and table structure |
| Incorrect risk score | Rule logic misconfiguration | Review fraud scoring conditions |


## Need Help

If you need help with:

- Setting up this workflow in n8n  
- Customizing fraud detection rules  
- Integrating advanced alerting systems  
- Scaling workflows for production  

You can reach out to our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** for professional assistance in [building and optimizing automation workflows](https://www.weblineindia.com/process-automation-solutions.html) like this.

## 🔗 Nodes Used

Function, Postgres, Slack, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
