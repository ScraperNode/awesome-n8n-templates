# 🤝 Smart CSM assignment & AI welcome emails for HubSpot deal wins with Gmail

> ⚡ **139 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Who's it for
This template is for Customer Success and Sales teams who use HubSpot. It automates the critical handoff from sales to success, ensuring every new customer gets a fast, personalized welcome. It's perfect for anyone looking to standardize their onboarding process, save time on manual tasks, and improve the new customer experience using AI.

## What it does
This workflow triggers when a deal's "Is closed won" property is set to `True` in HubSpot. It assigns a Customer Success Manager (CSM) by querying an **n8n Data Table to find the 'least busy' CSM (based on a deal count)** and fetches the deal's details to find all associated contacts.

It then loops to identify the "Champion" contact by checking their "Buying Role" (`hs_buying_role`). An AI agent (in the `AI: Write Welcome Email` node) generates a personalized welcome email, which is converted to HTML and sent via Gmail. Finally, the workflow updates the Champion's contact record in HubSpot and **updates the CSM's deal count in the Data Table** to keep the logic in sync.

## How to set up
1.  **Create and Populate Data Table:** This template requires an n8n Data Table to manage CSM assignments.
    * Create a Data Table named `csm_assignments`.
    * Add two columns: `csm_id` (String) and `deal_count` (Number).
    * Add one row for each CSM with their HubSpot Owner ID and a starting `deal_count` of `0`.
2.  **Link Data Table Nodes:** Open the `Get CSM List` and `Increment CSM Deal Count` nodes and select the `csm_assignments` table you just created from the **Table** dropdown.
3.  **Configure Variables:** In the `Configure Template Variables` node, you must set your sender info (`company_name`, `sender_name`, and `sender_email`).
4.  **Customize AI Prompt:** In the `AI: Write Welcome Email` node, update the placeholder `[Link to Your Video]` and `[Link to Your Help Doc]` links with your own URLs.
5.  **Check HubSpot Property:** This workflow assumes you use the "Buying Role" (`hs_buying_role`) contact property to identify your "Champion". If you use a different property, you must update the `HubSpot: Get Contact Details` and `If Role is 'Champion'` nodes.

## Requirements
* Access to **n8n Data Tables**.
* **HubSpot (Developer API):** A credential for the `Trigger: Deal Is 'Closed Won'` node.
* **HubSpot (OAuth2):** A credential for all other HubSpot nodes (`Get Deal Details`, `Get Contact Details`, `Assign Contact Owner`).
* **AI Credentials:** (e.g., OpenAI) Credentials for the `AI Model` node (the node connected to `AI: Write Welcome Email`).
* **Email Credentials:** (e.g., Gmail) Credentials for the `Gmail: Send Welcome Email` node.

## How to customize the workflow
You can easily customize this workflow to send different emails based on deal properties. Add an `If` node after the `HubSpot: Get Deal Details` node to check for the deal's value, product line, or region.

Based on these properties, you can route the flow to different `AI: Write Welcome Email` nodes with unique prompts. For example, you could **check the contact's 'industry' or 'company size' to send them links to different, more relevant 'Getting Started' videos and documentation.**

## 🔗 Nodes Used

HubSpot, HubSpot Trigger, Gmail, Markdown, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
