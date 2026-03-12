# ⚙️ Summarize Microsoft 365 outage alerts with ChatGPT and send to Slack

> ⚡ **1,867 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Built this for a dedicated Slack outage-notifications channel — works well on both desktop and mobile.

This is for:

* IT Administrators & small MSPs looking to streamline M365 alerts from one or multiple mailboxes into a single or specific Slack channels
* IT Admins who prefer ChatOps over management-by-email

## What does it do

* Scans for M365 outage alerts emails (every 1 min)
* Checks if it impacts a specific user region (if the alert calls it out, countries have to be manually set)
* Summarizes the incident using OpenAI o4-mini (cheap model - or you can swap for local Ollama)
* Sends a Slack Block to your outage channel with incident link (can be extended)
* Deletes the original alert email after successful delivery

## Credentials

#### Outlook:

* Create an Outlook credential (OAuth2.0) to point to the mailbox (regular or shared) where M365 service alerts will be received

#### Slack:

* Create a Slack bot credential with access to the slack channel you want updates posted to

#### OpenAI:

* Create a OpenAI credential that has access to the GPT-4O-MINI model.
* Recommend you use projects in OpenAI so that you may set a per-project-budget and not impact other projects.

[Review this OpenAI documentation for more info on managing Projects in the API portal](https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform). Expect this to consume no more than 1-2 cents per month on average.

## Setup

1. Download & import the workflow
2. Modify the first Outlook block (Check for 365 Service Alert) to use the Outlook credential
3. Modify the OpenAI block's system prompt to call out the countries your users reside in
   ie. *"- Assume the organization has users primarily in the U.S. and Australia. If those regions are affected, state: "*Your users may have been affected.*" Otherwise, add: "*No impact expected for your user base.*""* **← swap U.S. & Australia for desired countries**
4. Modify the Slack block (Post outage to Slack) to specify the channel updates will be posted to

![Screenshot 20250506 163031.png](fileId:1289) **Sample Slack Output**

![Screenshot 20250506 162940.png](fileId:1288) **Workflow Diagram**

## 🔗 Nodes Used

Slack, Microsoft Outlook, Microsoft Outlook Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
