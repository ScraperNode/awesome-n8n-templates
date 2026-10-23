# ⚒️ Optimize RFx supplier awards with Groq, Notion, and Slack alerts

> ⚡ **14 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow receives an RFx completion webhook, scores suppliers against cost, risk, lead time, and rating constraints, generates award scenarios, and uses Groq (LangChain agent) to produce a structured procurement recommendation, then stores results in Notion and posts success or failure alerts to Slack.

## How it works
1. Receives an HTTP POST webhook with an RFx ID, a suppliers array, and optional evaluation constraints.
2. Validates that at least one supplier is provided, and if not, posts an error to Slack and returns an “invalid input” webhook response.
3. Filters and scores suppliers using weighted cost, risk, lead time, and rating factors, then selects three scenarios (best cost, lowest risk, and balanced) and returns a ranked supplier list.
4. Sends the scenario data to a Groq-hosted LLM via a LangChain agent to generate a JSON-only executive summary, insights, trade-off analysis, and a final recommendation.
5. Parses and validates the AI JSON output, and if it fails, posts an error to Slack and returns an “AI error” webhook response.
6. Stores the recommendation and insights in a Notion database, posts a completion message to a Slack channel, and returns a success response to the original webhook request.

## Setup
1. Copy the webhook URL from the Webhook trigger and configure your RFx system to POST `rfx_id`, `suppliers[]` (with cost, risk, lead_time, rating), and optional `constraints` to that endpoint.
2. Add Groq API credentials for the LangChain Groq Chat Model used by the AI analysis step.
3. Add Notion credentials and select the target database, ensuring it has properties for RFx ID, Best Supplier, Executive Summary, Cost Insight, Risk Insight, Trade-off, and Final Recommendation.
4. Add Slack credentials and set the target channel for both success and failure notifications.
5. Review and adjust the scoring weights and constraint defaults in the supplier scoring logic to match your award criteria.

## Additional info
## Customization

- Change scoring weights in code node
- Add new constraints (e.g., location, certifications)
- Modify AI prompt
- Customize Slack message format
- Extend Notion fields


## Add-ons

- Email alerts
- ERP integration
- Approval workflows
- Historical supplier tracking
- Dashboard reporting


## Use Cases

1. RFQ supplier selection
2. Vendor comparison automation
3. Risk-based sourcing
4. Procurement analytics
5. AI-driven decision making


## Troubleshooting Guide

| Issue                      | Possible Cause          | Solution                                   |
| -------------------------- | ----------------------- | ------------------------------------------ |
| No suppliers processed     | Empty suppliers array   | Ensure suppliers are passed correctly      |
| Workflow stops early       | Validation failure      | Check webhook payload                      |
| Incorrect scoring          | Missing supplier fields | Ensure cost, risk, lead_time, rating exist |
| AI output invalid          | Improper JSON response  | Adjust AI prompt formatting                |
| Slack not sending messages | Invalid credentials     | Reconnect Slack API                        |
| Notion not saving data     | Wrong database mapping  | Verify database fields                     |
| API returns error          | AI validation failed    | Check AI output node                       |
| Unexpected results         | Constraints too strict  | Relax constraints                          |


## Need Help?

WeblineIndia can help you build advanced automation workflows, integrate AI, scale procurement systems and provide [n8n workflows developers for hire](https://www.weblineindia.com/hire-n8n-developers/).

[Contact us to build smarter automation solutions](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

HTTP Request, Slack, Notion, Notion Trigger, Basic LLM Chain, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
