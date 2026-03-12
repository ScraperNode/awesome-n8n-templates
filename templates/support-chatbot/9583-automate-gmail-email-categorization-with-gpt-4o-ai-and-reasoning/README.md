# 💬 Automate Gmail email categorization with GPT-4o AI and reasoning

> ⚡ **407 views** · 💬 [Support Chatbots](../)

## Description

An AI inbox labelling manager that has reasoning attached to the ChatGPT inbox manager within n8n. Super simple yet highly effective automation.

## How it works: 

• Monitors Gmail inbox → triggers workflow when a new unread email is received.

• Fetches email details including subject, body, and sender information.

• Sends email content to OpenAI → uses AI to determine the most relevant label based on predefined rules.

• AI uses a think tool → justifies why it selected that specific label.

• Retrieves Gmail label IDs → matches AI’s choice to correct Gmail label for that email.

• Adds the chosen label (e.g., Positive reply, priority email, etc) to the email automatically → optionally marks it as read/starred.

• Continues monitoring → every new email is processed automatically, keeping the inbox organized.

## Set Up Steps

• Connect Gmail account to the Gmail Node

• Create OpenAI account & API key → go to OpenAI and sign up or log in. Once logged in, click Dashboard in the top menu. On the left sidebar, find API Keys and click Create new key. Copy this key — you’ll need it for n8n.

Check your account balance → in the top-right, click your profile icon → Your Profile → Billing. Make sure your account has funds (e.g., $5 USD is enough for testing) so the API requests can run.

**Do these steps through this link:** https://platform.openai.com/

• Retrieve Gmail label IDs → use the Gmail “get labels” node to fetch IDs for all labels you want the AI to use.

• Use OpenAI (ChatGPT) node → set up system and user prompts with rules describing each label, and include the **label IDs (Important)**.

• Test the workflow → send example emails, check labeling, and refine AI prompt or label rules if needed.

• Tip: Pin trigger data for testing (Gmail node "Watch Incoming Emails") → re-use the same email record to speed up testing without sending multiple emails.

## About this automation

Handles multiple labels → adding new labels only requires updating the AI prompt (no extra nodes).

Scales easily → works for any number of Gmail labels without cluttering the workflow.

For a complete rundown on how to set this up watch my YouTube tutorial linked below

### See full video tutorial here: 
https://www.youtube.com/watch?v=7nda4drHcWw

#### My LinkedIn: https://www.linkedin.com/in/seb-gardner-5b439a260/

## 🔗 Nodes Used

Gmail, Gmail Trigger, OpenAI, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
