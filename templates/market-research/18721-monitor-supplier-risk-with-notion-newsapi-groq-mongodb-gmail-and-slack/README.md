# 📊 Monitor supplier risk with Notion, NewsAPI, Groq, MongoDB, Gmail and Slack

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow pulls suppliers from Notion, searches NewsAPI.org for recent articles about each supplier, and uses Groq to flag labor or human rights violation signals. When risk is detected, it enriches the alert from MongoDB, drafts a Gmail warning email, posts to Slack, and updates the supplier record in Notion.

## How it works
1. Manually starts the workflow and fetches all supplier records from a Notion “Supplier Master List” database.
2. Queries NewsAPI.org for recent articles using each supplier’s configured news search query.
3. Uses a Groq chat model to analyze up to three articles and returns a strict JSON verdict indicating whether a violation signal is detected.
4. Stops processing for suppliers marked safe, and for flagged suppliers pulls the supplier’s contract profile (contract value, penalty clause, contact email) from MongoDB.
5. Combines the violation findings with the contract details and has Groq draft a formal warning email body using the enriched context.
6. Saves the drafted warning as a Gmail draft addressed to the supplier contact and posts a high-risk alert message to a Slack channel.
7. Updates the supplier’s Notion record by setting Risk Status to “At Risk,” logging the current date, and saving the AI-generated action plan.

## Setup
1. Create and connect credentials for Notion, Groq, MongoDB, Gmail, and Slack in n8n.
2. Provide a NewsAPI.org API key and replace the hardcoded apiKey query parameter in the NewsAPI request.
3. Ensure your Notion database includes properties for Supplier Name, a news search query field, Risk Status (select), Last Violation Date (date), and AI Action Plan (rich text), then set the correct database ID in the Notion node.
4. Configure MongoDB with a supplier_contracts collection containing company_name, contract_value, penalty_clause, and contact_email fields that match your Notion supplier names.
5. Set the target Slack channel and confirm the Gmail draft settings (recipient mapping and subject template) match your environment.

## Additional info
## How To Customize Nodes

* **Modify the Search Query:** In the NewsAPI node, you can adjust the search query to look for different types of risks (e.g., environmental disasters, bankruptcies, or data breaches) instead of just labor violations.
* **Tweak the AI Prompt:** Open the **AI: Draft Warning Email** node and edit the System Message to change the tone of the email. You can make it softer, more aggressive, or align it strictly with your company's internal communication guidelines.
* **Change the Alert Platform:** If your company uses Microsoft Teams or Discord instead of Slack, you can simply delete the Slack node and drop in a Teams/Discord node, mapping the same message data.


## Add‑ons

* **ERP Integration:** Add an HTTP request node at the end of the workflow to automatically place a temporary "Hold" on payments to the supplier in your ERP system (like SAP or Oracle) until the risk is reviewed.
* **Jira/Asana Ticketing:** Swap or add a node alongside the Slack alert to automatically generate a compliance review ticket for your legal team.
* **Human-in-the-Loop:** Instead of saving an email to drafts, you could use a tool like an n8n Form Trigger to send the draft to a manager for one-click approval before actually sending the email out.


## Use Case Examples

1. **Supply Chain Compliance Monitoring:** The primary use case. Keeping a watchful eye on vendors to ensure they comply with global labor laws and human rights standards.
2. **ESG (Environmental, Social, Governance) Tracking:** By tweaking the AI prompt and news search terms, you can monitor suppliers for environmental spills or corporate governance scandals.
3. **Vendor Financial Risk Management:** Adjust the NewsAPI query to search for "bankruptcy," "layoffs," or "lawsuit" to get early warnings if a supplier might fail to deliver due to financial distress.
4. **PR Crisis Management:** Automatically alert your PR and communications team if a high-profile partner is suddenly in the news for negative reasons, giving them time to prepare a public statement.
5. **Automated Contract Enforcement:** Reminding suppliers of their contractual obligations and financial penalties the moment negative news breaks, setting a strong legal precedent. 
*(Note: With minor tweaks to the API sources and AI prompts, this structure can be adapted for countless other industry monitoring needs!)*


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Notion node fails to fetch data** | Incorrect Database ID or missing integration permissions. | Verify the Database ID. Ensure your n8n integration has been "invited" or connected to the specific Notion page/database. |
| **NewsAPI returns empty results or 401 error** | Expired API key or the search query is too restrictive. | Check your API key limits on NewsAPI.org. Test with a broader search term. |
| **MongoDB cannot find the supplier** | Data mismatch between Notion and MongoDB. | Ensure the `Supplier Name` in Notion perfectly matches the `company_name` field in your MongoDB collection (watch out for extra spaces). |
| **Groq AI node times out** | API rate limits or incorrect model name. | Verify your Groq API dashboard for rate limits. Ensure `gpt-oss-safeguard-20b` is an active model in your tier. |
| **Email Draft doesn't appear in Gmail** | Gmail OAuth token expired or missing permissions. | Reconnect your Gmail credentials in n8n and ensure you granted draft creation permissions during the OAuth flow. |


## Need Help?

Building robust, automated compliance systems can be complex and every organization has unique data structures and security needs. If you need assistance setting up this workflow, connecting your internal databases or customizing advanced Add-Ons (like direct ERP integrations or human-in-the-loop approvals), our [n8n workflow development team at WeblineIndia](https://www.weblineindia.com/hire-n8n-developers/) is here to help!

Reach out to **WeblineIndia** for expert assistance in deploying, customizing and scaling n8n automation workflows tailored exactly to your business requirements.

## 🔗 Nodes Used

HTTP Request, Slack, MongoDB, Gmail, Notion, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
