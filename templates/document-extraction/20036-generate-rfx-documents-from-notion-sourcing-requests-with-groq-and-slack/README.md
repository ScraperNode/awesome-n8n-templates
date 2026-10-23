# 🔬 Generate RFx documents from Notion sourcing requests with Groq and Slack

> ⚡ **14 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Notion sourcing pipeline for RFx requests, uses Groq-hosted LLMs to draft an RFx using context from similar past Notion projects, writes the formatted document back into Notion, and waits for a manager approval webhook to update the request status.

## How it works
1. Triggers every minute when a page changes in the Notion “Sourcing Pipeline” database.
2. Checks that the request Status equals “Generate RFx” and stops if it does not match.
3. Queries the Notion “Past Projects” database for the top three similar projects (same Category and Sourcing Type) sorted by Success Score.
4. Selects the correct RFx system prompt (RFI/RFP/RFQ) and sends the request requirements to Groq to generate the draft scope content.
5. Sends the scope plus historical evaluation and timeline context to Groq to generate evaluation/pricing tables and a project timeline with submission guidelines.
6. Combines the AI outputs, converts the Markdown into Notion block JSON, sets the Notion page status to “Pending Approval,” and appends the generated blocks to the original Notion page.
7. Waits for a manager decision via a resume webhook and updates the Notion page status to “Sent to Suppliers” when approved or “Needs Revisions” when rejected.

## Setup
1. Add Notion credentials and select your Notion “Sourcing Pipeline” and “Past Projects” databases, ensuring the properties used by the workflow exist (Status, Project Name, Category, Sourcing Type, Business Requirements, Success Score, evaluation criteria, and standard timelines).
2. Add a Groq API credential and confirm the selected Groq chat models are available in your Groq account.
3. Ensure your Status property includes the values “Generate RFx,” “Pending Approval,” “Sent to Suppliers,” and “Needs Revisions,” and update the workflow’s status strings if your labels differ.
4. Provide Notion API access for the HTTP request that appends blocks (Notion predefined credentials) and keep the Notion-Version header aligned with your workspace API compatibility.
5. Share the Wait node’s resume webhook URL with your approver system (for example, an interactive Slack message) so it can call back with an action value of approve or reject.

## Additional info
## How To Customize Nodes

* **Adjust AI Prompts:** Open the *Prompt Library (RFI/RFP/RFQ)* node to customize the exact headers, rules, and procurement terminology the AI agents use when drafting documents.
* **Swap AI Models:** Open any of the Groq Model nodes to select a different language model (e.g., switching from `qwen3.8-27b` to `llama3-70b`) based on your preference for speed versus complex reasoning.
* **Customize Slack Messaging:** Modify the text in the *Slack: Request Approval* or *Notify Team (RFx Live)* nodes to include different database properties, @mentions for specific executives, or specific channel IDs.


## Add‑ons

* **PDF Export Generation:** Add an HTML-to-PDF conversion node after the final approval to automatically generate a formal PDF version of the RFx for direct email to suppliers.
* **Email Distribution:** Connect an Outlook or Gmail node at the end of the "Approve" branch to automatically email the finalized RFx link to a predefined list of vendor contacts.
* **Jira/Asana Ticketing:** If revisions are needed (the Reject branch), add a node to automatically create a ticket in your engineering or legal team's project board to review the draft.


## Use Case Examples

While tailored for procurement, this core architecture is highly adaptable. Similar use cases include:

1. **Automated Request for Information (RFI):** Translating rough business requirements into exploratory market research documents.
2. **Structured Request for Proposal (RFP):** Generating formal Scope of Work documents outlining core objectives, technical requirements, and vendor responsibilities.
3. **Specific Request for Quotation (RFQ):** Drafting exact specifications, Service Level Agreements (SLAs), and delivery compliance requirements for vendor pricing.
4. **HR Job Description Drafting:** Replacing the procurement prompts to draft highly customized job descriptions based on historical hiring data, sending them to a hiring manager on Slack for approval.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| --- | --- | --- |
| **Workflow doesn't trigger on new Notion items** | Wrong polling configuration or status mismatch. | Check the *Trigger* node to ensure it is actively polling. Verify that the Notion item's status exactly matches "Generate RFx" as required by the If node. |
| **HTTP Request to Notion fails (Status 400)** | Markdown parser failed or incorrect API version. | Check the *Parse Markdown to Blocks* output to ensure valid JSON. Verify the *Inject Content* node uses the correct `Notion-Version` header. |
| **Slack Wait Node times out** | Interactive buttons in Slack are not configured properly. | Ensure the execution resume URL is properly formatted in the Slack message and that your n8n webhook URL is accessible to the public internet. |
| **AI Nodes return errors** | Groq API limits exceeded or model unavailable. | Open the Groq nodes and check your account limits. Try switching to a smaller model if rate limits are hit. |


## Need Help?

Building multi-agent AI workflows with custom JavaScript parsing and interactive Slack loops can be complex. If you need a helping hand to set up your Notion API integration, tune your Groq AI prompts, or customize Add-Ons like automated email distribution, we are here for you!

We encourage you to [contact WeblineIndia](https://www.weblineindia.com/contact-us.html) for expert assistance with setting up this specific workflow or to help you build similar custom automation processes tailored exactly to your business needs.

## 🔗 Nodes Used

HTTP Request, Notion, Notion Trigger, Basic LLM Chain, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
