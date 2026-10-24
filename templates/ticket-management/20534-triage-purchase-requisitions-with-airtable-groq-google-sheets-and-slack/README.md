# 🎫 Triage purchase requisitions with Airtable, Groq, Google Sheets, and Slack

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors new purchase requisitions in Airtable, uses Groq LLM scoring plus keyword checks and department rules to determine an urgency-based routing decision, logs each decision to Google Sheets, updates the requisition status in Airtable, and notifies the right team in Slack.

## How it works
1. Triggers when a purchase requisition is submitted in Airtable (based on the submitted_at field).
2. Sends the requisition description to a Groq-hosted LLM to return a strict JSON urgency score (1–5) and short reasoning.
3. Scans the requisition description and business justification for critical/urgent keywords (for example, “outage” or “breach”) and produces a keyword-based urgency score.
4. Looks up department-specific routing rules from a separate Airtable base and calculates a final priority score and routing decision, with cost thresholds forcing VP escalation.
5. Routes the requisition into VP approval, auto fast-track, or the standard queue based on the calculated routing decision.
6. Logs the decision (scores, routing decision, reason, cost, and metadata) to a Google Sheets audit log and updates the original Airtable requisition with the new status and routing note.
7. Sends a Slack message for VP-approval and fast-tracked requisitions to notify the appropriate channel.

## Setup
1. Connect Airtable credentials (personal access token) and set the correct base/table for both the requisition trigger and the requisition update steps.
2. Create and connect the Airtable base/table that stores department rules (including baseline_criticality, requires_vp_approval_over, and fast_track_eligible) and ensure department names match the requester_department values.
3. Add a Groq API credential for the LLM step and confirm the selected model is available in your Groq account.
4. Connect Google Sheets credentials and set the target spreadsheet and sheet tab used for the append/update audit log.
5. Connect Slack credentials and configure the target channels for VP escalation and fast-track notifications.

## Additional info
## How To Customize Nodes

* **Adjust AI Rules:** Open the *LLM: Evaluate Urgency* node to modify the scoring guide. For example, you can train the prompt to specifically target software renewals or physical inventory depending on your industry.
* **Modify Critical Keywords:** Open the *Scan: Critical Keywords* custom code node. You can easily add or remove specific industry jargon from the `criticalKeywords` or `urgentKeywords` arrays.
* **Tweak Math Thresholds:** If you want to change what qualifies as a "Fast Track," open the *Calculate Final Route* code node and adjust the `finalScore >= 6.0` threshold to a higher or lower number to make the workflow more or less strict.


## Add‑ons

* **ServiceNow / Jira Integration:** Swap the Airtable trigger for a webhook to ingest purchase requests directly from your IT service management ticketing system.
* **Automated Email Fallbacks:** Add an Outlook or Gmail node parallel to the Slack alerts to ensure executives who are not active on Slack still receive high-cost escalation alerts.
* **ERP Write-Back:** Connect an HTTP Request node at the end of the Fast-Track route to push approved purchase orders directly into SAP, NetSuite, or Workday.


## Use Case Examples

While designed for standard procurement, this triage logic is incredibly versatile. By simply adjusting the Airtable columns and AI prompt, similar use cases include:

1. **IT Helpdesk Triage:** Automatically scanning IT support tickets to fast-track critical security vulnerabilities while placing password resets in a standard queue.
2. **Marketing Budget Approvals:** Evaluating ad-hoc marketing spend requests against campaign budgets, fast-tracking small digital asset purchases but escalating major event sponsorships.
3. **Maintenance & Facilities:** Routing work orders for building repairs, instantly pinging emergency maintenance teams for water leaks while queuing standard lightbulb replacements.
4. **Legal Contract Review:** Prioritizing incoming vendor contracts based on total contract value and critical keywords (e.g., "liability," "indemnity") to route high-risk agreements to senior counsel.

*(Note: There can be many more such use cases of this workflow by simply adjusting the data properties and the mathematical constraints!)*


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| --- | --- | --- |
| **Workflow isn't triggering on new requests** | Airtable polling issue or wrong field. | Open the *Trigger: New PR* node. Ensure the Trigger Field is set to the correct date/time column (e.g., `submitted_at`) and your polling interval is active. |
| **AI Evaluation fails or returns empty** | Groq API rate limit or context window exceeded. | Verify your Groq API credentials. Ensure the *Parse: JSON Output* node is correctly enforcing the strict JSON schema. |
| **Routing logic sends everything to the standard queue** | Department rules missing or data type mismatch. | Check the *Fetch: Dept Rules* node output. If it fails to find a matching department name in the secondary table, the fallback math logic will send it to the standard queue. |
| **Google Sheets audit log is skipping rows** | Spreadsheet schema mismatch. | Open the *Log: Google Sheets Audit* node and ensure the column headers in your actual spreadsheet perfectly match the mapped fields (e.g., `PR_ID`, `Routing_Decision`). |


## Need Help?

Building workflows that combine mathematical scoring algorithms, custom JavaScript and advanced AI prompt engineering can be challenging. If you need a helping hand to set up your specific Airtable relational databases, fine-tune the AI intent scoring, or customize Add-Ons like ERP integrations, we are here for you! Our n8n team at [WeblineIndia](https://www.weblineindia.com/) is happy to provide expert assistance with setting up this specific workflow or help you build similar custom enterprise automation processes tailored exactly to your unique business operations.

## 🔗 Nodes Used

Airtable, Google Sheets, Slack, Airtable Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
