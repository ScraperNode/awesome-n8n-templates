# 🎫 Automated customer feedback triage & follow-up with Gemini, Jotform, Gmail, Jira

> ⚡ **128 views** · 🎫 [Ticket Management & Triage](../)

## Description

## AI-Powered Customer Feedback: Triage and Insight-Driven Chat

This n8n workflow creates a two-phase system for handling customer feedback received via a **Jotform** submission. The first agent quickly triages the issue, and the second agent engages in a persistent, conversational exchange over email to collect the information necessary for a resolution.

### Phase 1: Triage and Initial Action (AI Agent)

This phase is triggered by a new submission on the **Jotform**. The goal is to immediately categorize the feedback and take the appropriate initial action.

1.  **Jotform Trigger:** The workflow starts instantly when a user submits your designated feedback form.
2.  **AI Agent (Triage):** This agent (powered by **Google Gemini**) is tasked with two primary jobs:
    * **Sentiment Analysis and Response Drafting:** It reads the feedback (`q6_typeA6`) and the user's name (`q3_name.first`).
        * **If Positive:** It uses the **Send a message in Gmail** tool to send a concise, appreciative thank you note.
        * **If Negative:** It uses the **Send a message in Gmail** tool to send an initial, empathetic response acknowledging the issue and stating that a team member will follow up with questions. It also uses the **Create an issue in Jira Software** tool to log the bug or issue immediately.
    * **Data Structuring:** It uses the **Structured Output Parser** to extract key data points, most importantly the `threadId` of the initial email, which is crucial for the follow-up conversation agent.

### Phase 2: Conversational Insight Gathering (AI Agent (Chat))

This phase takes over for all negative feedback, engaging the customer in a back-and-forth exchange to collect essential details required for the development or support team.

1.  **Gmail Trigger:** This node is set to **poll for new, unread emails** (which are expected to be replies from the customer).
2.  **Simple Memory:** This node is vital for the conversational aspect. It is configured to use the unique email **`threadId`** as its session key, allowing the AI Agent to remember the entire history of the conversation (previous questions asked and details provided) across multiple emails.
3.  **AI Agent (Chat):** This is the **2nd agent** and the core of the conversational process.
    * **Role:** It acts as a dedicated feedback assistant.
    * **Goal:** Its instruction is to **reply and ask for specific, missing information** needed for the ticket, such as: *what device they were using*, *if they know the steps to reproduce the issue*, and to confirm that the team will send a **free coupon for credits** as a thank you for their help.
    * **Tool:** It uses the **Reply to a message in Gmail** tool to continue the conversation directly within the original email thread.
    * **Resolution:** The agent is trained to look for confirmation that all necessary information has been provided. Once it determines the issue details are complete, it will send a final thank you email and automatically use the **Jira tool** to **summarize and update the existing Jira issue** with the new insights, closing the loop on the data collection process.


---

## Requirements

To implement and run this automated customer feedback workflow, the following accounts and credentials are required:

### 1. Automation Platform

* **n8n Instance:** A running instance of n8n (Cloud or self-hosted) to host and execute the workflow.
**Sign up for n8n using:** [https://n8n.partnerlinks.io/pe6gzwqi3rqw](https://n8n.partnerlinks.io/pe6gzwqi3rqw)

### 2. Service Credentials

You must set up and connect the following credentials within your n8n instance:

* **Google Gemini API Key:** Required to power both **AI Agent** nodes for sentiment analysis and conversational follow-up.
* **Gmail OAuth2/API Key:** Required for:
    * The **Send a message in Gmail** tool (for initial replies).
    * The **Gmail Trigger** (to detect new replies).
    * The **Reply to a message in Gmail** tool (for the ongoing conversation).
* **Jotform API Key:** Required for the **Jotform Trigger** node to instantly receive and process new form submissions.
**Sign up for Jotform using:** [https://www.jotform.com/?partner=zainurrehman](https://www.jotform.com/?partner=zainurrehman)
* **Jira Software Credentials:** Required for the **Create an issue in Jira Software** tool (for the first agent) and the **Jira Tool** (for the second agent to update the ticket).

### 3. External Configurations

* **Jotform Setup:** A live Jotform must be configured with specific fields to capture the user's name, email, and the feedback text.
* **Jira Setup:** You need a designated **Jira Project** and a defined **Issue Type** for the workflow to create and update tickets.

## 🔗 Nodes Used

Jotform Trigger, Gmail Trigger, AI Agent, Simple Memory, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
