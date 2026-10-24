# 🎫 Triage and route support tickets with Gemini, Jira, Slack, and Gmail

> ⚡ **7 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives support requests via a webhook, uses Google Gemini to classify and prioritize the message, creates a Jira issue, and routes notifications to the right team via Slack and Gmail.

## How it works
1. Receives a support request via a POST webhook and extracts the request body into a standardized structure.
2. Validates that required fields (at least the customer email and message) are present before continuing.
3. Sends the subject and message to Google Gemini to return a JSON triage decision (category, priority, sentiment, SLA, and suggested team) and parses the response into structured fields.
4. Maps the AI priority label to an internal P1–P4 priority, sets an urgent flag, and generates a consistent ticket title and triage timestamp.
5. Creates a Jira issue containing the original customer details plus the AI summary and triage metadata.
6. Builds a final payload and routes it to billing, technical, or general support, sending the matching Slack channel alert and Gmail notification.

## Setup
1. Create and add credentials for Google Gemini (PaLM/Google AI), Jira, Slack, and Gmail in n8n.
2. Configure the webhook endpoint (POST `/support-triage`) in your support intake source (form, app, or service) and send the expected fields like `message`, `customer_email`, and `subject`.
3. Update the Jira project and issue type in the Jira node to match your Jira instance and desired ticket type.
4. Replace the placeholder team email addresses (the `@yopmail.com` values and the Gmail “send to” fields) and set the target Slack channel ID(s) for your workspace.

## Additional info
## How To Customize Nodes

This workflow can be customized in several practical ways without changing its overall structure.

### Webhook and intake

- Change the webhook path if a different endpoint name is preferred. 
- Extend the input payload by adding more fields in the webhook source and preserving them in `Normalize Support Payload`. 
- Add more required field checks in `Validate Required Fields`, such as subject or source. 

### AI classification

- Edit the prompt in `AI Agent` to support more categories, such as account, refunds, or onboarding, if needed. 
- Adjust the severity definitions for `critical`, `high`, `medium`, and `low` to better match the support process. 
- Change the Gemini model or output settings in the `Google Gemini Chat Model` node if a different model tier is preferred. 

### Priority mapping

- Modify the `Priority Rules Mapper` node to change how AI labels map to internal ticket priorities. 
- Replace the generated `team_email` pattern if real support mailbox addresses are used instead of the testing pattern shown in the JSON. 

### Jira ticket creation

- Change the Jira project, issue type, summary format, or description template in `Create an issue`. 
- Include additional Jira fields if the target project requires labels, assignee, components, or custom fields. 

### Routing and notifications

- Replace the `Switch` conditions with department-specific rules if routing should consider both category and urgency. 
- Update Slack channel IDs and Gmail recipients to reflect real production destinations. 
- Change the content of each Slack or Gmail message to include more or less context. 


## Add-ons

This workflow already covers intake, AI triage, Jira creation and team notification, but several add-ons can extend its value while keeping the same overall pattern.

- Add a data store or spreadsheet logging node after `Merge Ticket Context` for reporting and audit history.
- Add a response node to return a structured API response back to the webhook caller.
- Add a separate branch for invalid input so failed validations are logged instead of silently stopping.
- Add a confidence or quality review layer after parsing if manual approval is needed for uncertain AI outputs.
- Add SLA monitoring with time-based follow-up reminders in Slack or email.
- Add customer auto-reply messaging after Jira ticket creation.

These are not present in the current JSON, but they can be added around the existing structure without changing the core triage logic shown in the file. 


## Use Case Examples

This workflow supports several common support operations, including the following examples. There can be many more similar use cases depending on the support process and connected systems. 

### 1. Billing issue intake

A customer submits a payment or refund problem through a support form. The workflow classifies the request as billing, sets a priority, creates a Jira issue, and sends the case to billing notification channels. 

### 2. Technical issue routing

A customer reports an application bug, login error, or integration issue. The workflow identifies it as technical support, creates the Jira issue, and alerts the technical team through Slack and Gmail. 

### 3. General product inquiries

A customer asks a how-to or onboarding question. The AI triage step marks the request as general, and the workflow routes it to the general support branch for follow-up. 

### 4. High-priority support escalation

A message that implies urgency, blocking impact, or strong customer frustration can be marked as high or critical by the AI agent. The workflow then maps that urgency to an internal priority such as P1 or P2 before the issue is created and routed. 

### 5. Structured support intake from external systems

Any external form, app, or service that can send JSON to the webhook can use this workflow as an automated triage layer. The file already demonstrates webhook-driven intake with a sample support payload. 


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| Webhook test does not start the workflow | Incorrect HTTP method or wrong webhook path | Confirm the request is sent as POST to the `support-triage` webhook path configured in the Webhook node.  |
| Workflow stops before AI triage | Required fields are missing | Make sure `body.message` and `body.customer_email` are included and not empty, since the validation node checks both values.  |
| AI response is not parsed correctly | The model returns markdown-wrapped JSON or malformed JSON | Keep the existing parser logic in `Parse AI Triage JSON.` and review the AI prompt if output quality becomes inconsistent.  |
| Jira issue is not created | Jira credentials, project, or issue type configuration is invalid | Verify the Jira credential, target project value `10000`, and issue type value `10006` in the Jira node.  |
| Slack notification is not sent | Wrong Slack credential or channel ID | Check the Slack API credential and confirm the configured channel ID is valid in the workspace.  |
| Gmail notification is not sent | Gmail credential is missing or recipient setup is incorrect | Reconnect the Gmail OAuth credential and verify the recipient addresses configured in each Gmail node.  |
| Team routing is incorrect | AI suggested team does not match expected branch | Review the AI prompt categories and the `Switch` conditions that compare `suggested_team` to billing, technical, and general.  |
| Ticket title is missing or incorrect | Subject is missing or priority mapping expression is wrong | Confirm the incoming payload includes `subject` and review the expression used in `Priority Rules Mapper`.  |
| Urgency behavior is unclear | The urgent check node is present but only one visible path is connected forward | Review the `Is Urgent Case?.` node in the editor and decide whether separate urgent and non-urgent branches should be added.  |


## Need Help ?

This workflow provides a solid base for AI-assisted support triage in n8n using Gemini, Jira, Slack, Gmail and a webhook-first intake model. It can be adapted for different support teams, categories, ticket systems, notification channels and escalation rules while keeping the same core flow. 

For teams that want help implementing, refining or extending this workflow, WeblineIndia can assist with setup, credential configuration, prompt tuning, routing logic, Jira customization, notification design and add-on features such as logging, dashboards, SLA tracking and customer response automation. WeblineIndia can also help [build complex business process automation workflows](https://www.weblineindia.com/process-automation-solutions.html) tailored to specific support operations and internal systems.

## 🔗 Nodes Used

Slack, Webhook, Jira Software, Gmail, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
