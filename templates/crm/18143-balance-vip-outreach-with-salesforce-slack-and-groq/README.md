# 🤝 Balance VIP outreach with Salesforce, Slack and Groq

> ⚡ **22 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs daily at 8AM to audit a Salesforce account, uses Groq LLM agents to decide between a VIP “rescue” outreach or a cool-down approach, posts guidance to Slack, and logs the final outcome back to the Salesforce account.

## How it works
1. Runs every day at 8AM and fetches a specific Account record from Salesforce.
2. Routes the account based on Salesforce fields, treating Platinum-tier accounts as “Neglected VIP” and accounts with “Alert” in the Description as “Over-Saturated.”
3. For neglected VIPs, uses Groq to generate a rescue strategy, creates a high-priority Salesforce Task for the account, and sends the strategy to Slack.
4. Waits 24 hours, re-fetches the created Salesforce Task, and checks whether its Status is set to Completed.
5. Posts a Slack message confirming completion or escalating if the task is still not completed, then updates the Salesforce Account Description with a timestamped audit result.
6. For over-saturated accounts, uses Groq to generate a low-touch cool-down plan, posts the recommendation to Slack without creating a task, and logs “cool-down mode” to the Salesforce Account Description.

## Setup
1. Add Salesforce credentials with permission to read Accounts, create/get Tasks, and update Account fields.
2. Add Slack credentials and set the target user/channel details in each Slack message node.
3. Add Groq credentials and confirm the selected models are available in your Groq account.
4. Replace the hardcoded Salesforce Account ID with the account you want to audit (or modify the workflow to iterate over multiple accounts).
5. Ensure your Salesforce Account includes the Customer_Tier__c field and that Description contains the signals you want to route on (for example, the word “Alert”).

## Additional info
## How To Customize Nodes

* **Switching AI Models**: You can easily swap the **Groq Chat Model** nodes for **OpenAI** or **Gemini** Chat Model nodes. The prompt logic will remain compatible.
* **Adjusting the Audit Window**: Change the **Wait: 24h Completion Window** to a shorter duration (e.g., 1 minute) during testing to see the full loop execute immediately.
* **Slack Routing**: Update the "User" field in Slack nodes to a specific `#channel` name to broadcast alerts to an entire team.


## Add‑ons

* **Email Integration**: Add a Gmail or Outlook node to automatically draft the AI-suggested email as a "Draft" for the CSM to review.
* **CRM Expansion**: Adapt this logic for HubSpot or Pipedrive by simply swapping the Salesforce nodes for your preferred CRM nodes.
* **Sentiment Analysis**: Insert a sentiment analysis node before the triage logic to gauge the "mood" of recent support tickets and adjust the AI strategy accordingly.


## Use Case Examples

1. **VIP Churn Prevention**: Automatically flagging Platinum partners who haven't had a "Health Check" in 30 days.
2. **Sales Rep Coaching**: Providing junior reps with AI-generated "no-ask" value-add ideas for busy clients.
3. **Management Oversight**: Ensuring that high-priority tasks for top-tier accounts are actually being completed within 24 hours.
4. **Automated Account Audits**: Running a weekly batch audit of all "Platinum" accounts to log their current status back into the CRM.
5. **Communication Load Balancing**: Preventing "over-mailing" a client who is already dealing with a technical alert or open support ticket.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Salesforce 404 Error** | The Account ID in the first SF node is invalid or deleted. | Verify the 18-character Salesforce ID in the "Fetch Account Data" node. |
| **AI Strategy is Blank** | The API key is expired or the model name is incorrect. | Check your credentials and ensure the model (e.g., GPT-4o, Llama-3) is active. |
| **Slack Messages Not Arriving** | The Slack User ID is incorrect or the Bot is not in the channel. | Ensure the Slack Bot has been invited to the target channel or the User ID is accurate. |
| **Audit Loop Skipping** | The Salesforce Task ID wasn't passed correctly. | Check the "SF: Create Rescue Task" output to ensure a valid Task ID was generated. |


## Need Help?

Setting up complex CRM logic and AI agents can be a challenge! If you need assistance customizing this "Load Balancer" logic, adding advanced features or building a bespoke workflow from scratch, we are here to help.

**[Contact WeblineIndia](https://www.weblineindia.com/contact-us.html)** to [hire n8n workflow developers](https://www.weblineglobal.com/hire/n8n-developers/) and take your business processes to the next level.

## 🔗 Nodes Used

Slack, Salesforce, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
