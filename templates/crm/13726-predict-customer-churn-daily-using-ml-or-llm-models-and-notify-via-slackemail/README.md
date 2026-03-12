# 🤝 Predict customer churn daily using ML or LLM models and notify via Slack/email

> ⚡ **14 views** · 🤝 [CRM & Sales Operations](../)

## Description

This n8n workflow runs daily to analyze active customer behavior, engineers relevant features from usage and transaction data, applies a machine learning or AI-based model to predict churn probability, classifies risk levels, triggers retention actions for at-risk customers, stores predictions for tracking, and notifies relevant teams.

### Key Insights
- Prediction accuracy heavily depends on feature quality — ensure login frequency, spend trends, support interactions, and engagement metrics are consistently captured and up-to-date.
- Start with simple rule-based scoring or AI prompting (e.g., OpenAI/Claude) before integrating full ML models for easier testing and faster value.
- High-risk thresholds (e.g., &gt;70%) should be tuned based on your actual churn data to avoid alert fatigue or missed opportunities.

### Workflow Process
1. Initiate the workflow with the **Daily Schedule Trigger** node (runs every day at 2 AM).
2. Query the customer database to fetch active user profiles, recent activity logs, login history, transaction records, and support ticket data.
3. Perform feature engineering: calculate metrics such as login frequency (daily/weekly), average spend, spend velocity, days since last activity, number of support tickets, NPS/sentiment if available, and other engagement signals.
4. Feed engineered features into the prediction step: call an ML model endpoint, run a Python code node with a lightweight model, or use an AI agent/LLM to estimate churn probability (0–100%).
5. Classify each customer into risk tiers: HIGH RISK, MEDIUM RISK, or LOW RISK based on configurable probability thresholds.
6. For at-risk customers (especially HIGH), trigger retention actions: create personalized campaigns, add to nurture sequences, generate discount codes, or create tasks in CRM.
7. Store predictions, risk scores, features, and actions taken in an analytics database for historical tracking and model improvement.
8. Send summarized alerts (e.g., list of high-risk customers with scores and recommended actions) via Email and/or Slack to customer success or retention teams.

### Usage Guide
- Import the workflow into n8n and configure credentials for your customer database (PostgreSQL/MySQL), ML API (if external), analytics DB, Slack webhook, SMTP/email, and CRM/retention platform.
- Define feature extraction queries and thresholds carefully in the relevant nodes — test with a small customer subset first.
- If using AI/LLM for prediction, refine the prompt to include clear examples of churn signals.
- Run manually via the **Execute workflow** button with sample data to validate data flow, scoring logic, and notifications.
- Once confident, activate the daily schedule.

### Prerequisites
- Customer database with readable tables for users, activity logs, transactions, and support interactions
- ML integration option: either an external ML API endpoint, Python code node with scikit-learn/simple model, or LLM node (OpenAI, Claude, etc.) for probabilistic scoring
- Separate analytics database (or same DB) with a table ready for churn predictions (customer_id, date, churn_prob, risk_level, etc.)
- SMTP credentials or email service for alerts
- Slack webhook URL (optional but recommended for team notifications)
- CRM or marketing automation API access (e.g., HubSpot, ActiveCampaign, Klaviyo) for creating retention campaigns/tasks

### Customization Options
- Adjust the daily trigger time or make it hourly for near real-time monitoring of high-value accounts.
- Change risk classification thresholds or add more tiers in the scoring logic node.
- Enhance the prediction step: switch from LLM-based to a trained ML model (via Hugging Face, custom endpoint, or Code node).
- Personalize retention actions: use AI to generate custom email content/offers based on the customer's behavior profile.
- Add filtering (e.g., only high-value customers &gt; certain MRR) to focus retention efforts.
- Extend notifications: integrate with Microsoft Teams, Discord, or create tickets in Zendesk/Jira for follow-up.
- Build feedback loop: after actual churn occurs, update a training dataset or adjust weights/rules in future runs.

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
