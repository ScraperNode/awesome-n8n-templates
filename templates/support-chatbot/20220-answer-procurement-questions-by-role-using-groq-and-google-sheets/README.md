# 💬 Answer procurement questions by role using Groq and Google Sheets

> ⚡ **2 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives procurement questions via n8n Chat or a webhook, looks up role and procurement records in Google Sheets, and uses Groq-hosted LLM agents to generate a role-restricted, sheets-grounded answer with suggested next actions.

## How it works
1. Receives a question from n8n Chat or a POST request to the `procurement-copilot` webhook and normalizes the request fields (user identity hints, object ID, and confidence threshold).
2. Loads a Users Google Sheet to resolve the requester’s role and RBAC rules, and returns an access-limited response if the role is unknown.
3. Uses a Groq LLM agent to classify the intent and extract entity IDs (requisition, PO, invoice, supplier, contract), then validates/fills missing entities from the question text.
4. Loads matching procurement data from Google Sheets tabs (Requisitions, Approvals, Suppliers, Contracts, and Invoices) and assembles a single context object.
5. Filters the context by role (allowed entities) and redacts denied fields before sending only the allowed context to a second Groq LLM agent.
6. Generates a grounded JSON answer, removes any suggested actions not permitted for the user’s role, and routes either a confident response or a clarification message based on the confidence threshold.
7. Returns the final result as JSON to the webhook caller or as chat text back to n8n Chat.

## Setup
1. Create and connect Google Sheets credentials, and ensure the spreadsheet includes the Users, Requisitions, Approvals, Suppliers, Contracts, and Invoices tabs with the expected columns (IDs like REQ-…, PO-…, INV-…, CTR-…).
2. Add a Groq API credential and select it for both the intent and answer LLM model nodes.
3. Populate the Users sheet with each caller’s email and a valid role (buyer, approver, requisitioner, category_manager, ap_analyst, supplier_manager) to enable access.
4. If using the webhook entry point, copy the production webhook URL for `procurement-copilot` and configure your portal/application to POST questions (and optional `userEmail`, `roleHint`, `objectId`, and `confidenceThreshold`).

## Additional info
## How To Customize Nodes

*   **Adjusting Confidence Thresholds:** By default, the workflow routes to a "clarification" response if the AI's confidence is below 0.55[cite: 1]. You can modify this threshold in the JavaScript code of the `Normalize Request` node[cite: 1].
*   **Customizing RBAC Permissions:** Open the `Resolve Identity and Role` code node[cite: 1]. Here, you can edit the JSON object to add new roles or modify the `allowedEntities`, `allowedActions`, and `deniedFields` arrays to suit your company's security policies[cite: 1].
*   **Updating Entity ID Formats:** If your company uses different prefixes for purchase orders or invoices, update the Regular Expressions inside the `Validate Extraction` code node (e.g., modifying `/\\bPO[- ]?(\\d{3,})\\b/i`)[cite: 1].
*   **Swapping AI Models:** You can replace the `Groq Intent Model` and `Groq Answer Model` nodes with alternative n8n LangChain chat models (like OpenAI or Anthropic) if you prefer a different AI provider[cite: 1].


## Add‑ons

*   **Slack/Microsoft Teams Integration:** Replace the Webhook triggers and responses with Slack or Teams nodes to allow employees to query the copilot directly from their company messaging apps.
*   **Live ERP Integration:** Swap out the Google Sheets nodes for HTTP Request nodes or native integrations (like SAP, NetSuite, or QuickBooks) to pull real-time procurement data directly from your system of record.
*   **ServiceNow/Jira Ticketing:** Add an HTTP request node on the "Clarification" routing branch to automatically open an IT or Procurement Operations support ticket when the AI's confidence is too low to answer securely.


## Use Case Examples

*   **Requisition Status Inquiries:** A requisitioner asks, "Where is REQ-10482?"[cite: 1]. The copilot identifies the user's role, fetches the requisition and approval chain from the sheets, and returns the status while hiding confidential supplier pricing[cite: 1].
*   **Invoice Exception Handling:** An AP Analyst queries "INV-88901". The AI retrieves the 3-way match status and, recognizing the analyst's role, permits the `hold_payment` suggested action[cite: 1].
*   **Supplier Risk Assessment:** A Category Manager asks about supplier "ACME-44"[cite: 1]. The workflow provides the supplier's ESG score and onboarding status while actively redacting sensitive fields like bank account details[cite: 1].
*   **Contract Utilization Tracking:** A buyer requests data on "CTR-17"[cite: 1]. The assistant pulls the contract data from Google Sheets, calculating the utilized spend and alerting the buyer if the utilization percentage is nearing its limit[cite: 1].
*   *(Note: Because this workflow is highly modular, there can be many more such use cases by simply expanding the Google Sheets tabs and adding new roles!)*


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Workflow returns "Access limited: add [email] to Users sheet..."**[cite: 1] | The user's email was not found in the Google Sheets database, or their assigned role is invalid[cite: 1]. | Ensure the user's email is added to the `Users` sheet with a valid role (e.g., `buyer`, `approver`)[cite: 1]. |
| **AI returns "I could not produce a grounded answer from Google Sheets context."**[cite: 1] | The specific REQ, PO, INV, or Supplier ID was not found in any of the Google Sheets during the data enrichment phase[cite: 1]. | Verify that the record actually exists in the connected Google Sheets and that the ID matches the expected formatting (e.g., `REQ-10482`)[cite: 1]. |
| **Suggested actions are missing from the response.** | The generated action was blocked by the Role-Based Access Control (RBAC) filter[cite: 1]. | Check the `Resolve Identity and Role` node to verify if that specific action is listed in the `allowedActions` array for the user's role[cite: 1]. |
| **Google Sheets nodes fail to execute.** | Missing or expired credentials, or an incorrect Document ID[cite: 1]. | Re-authenticate the `googleSheetsOAuth2Api` credentials and verify the Document ID in all five sheet loading nodes[cite: 1]. |


## Need Help?

If you need a helping hand to set up these API connections, customize the RBAC code nodes or build custom Add-Ons (like integrating this copilot directly into your Slack workspace or ERP system), **contact WeblineIndia**. Our n8n technical experts can help you customize this workflow or build similar automated, enterprise-grade AI solutions tailored exactly to your business needs!

## 🔗 Nodes Used

Google Sheets, Webhook, AI Agent, Chat Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
