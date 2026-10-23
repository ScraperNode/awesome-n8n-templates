# ⚡ Create a daily Jira to-do email with Gmail and OpenRouter GPT

> ⚡ **21 views** · ⚡ [Personal Productivity](../)

## Description

## ⚙️ How it Works
Every morning at 8:00 AM (just before you start your day), this workflow automatically runs and sends you an email with your daily plan. It does this by extracting your assigned issues from Jira and organizing them into a clear, actionable To-Do list.

## 🚀 How to Set It Up
**Prerequisites:** You will need API keys for the three services used in this workflow.
1.  **Google Gmail:** [Create API Key](https://console.cloud.google.com/apis)
2.  **Jira:** [Create API Token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/#Create-an-API-token)
3.  **OpenRouter:** [Create API Key](https://openrouter.ai/workspaces/default/keys/)

*Need help creating or adding API keys? Watch my step-by-step YouTube tutorial! (Find the link in the sticky note on the far right).*

## 🛠️ Customization Options
Make this workflow your own!
*   **Swap the AI Model:** Easily replace the current AI model with any free or paid model you prefer within OpenRouter.
*   **Refine the Prompt:** Edit the AI prompt in the agent node to get results perfectly tailored to how you like your To-Do list structured.
*   **Expand the Workflow:** Feel free to add new nodes, connect other apps (like Slack or Notion), and tweak the workflow to get your desired output!

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
