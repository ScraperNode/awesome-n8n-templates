# 🔍 Create recurring AI-powered data digests in Slack with Super Assistant

> ⚡ **112 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

Stop the daily grind of checking multiple apps just to stay updated. This template automates the creation of recurring digests by querying a powerful AI assistant you build on the Super platform.

First, create an assistant in Super (https://super.work/) and connect it to all your key data sources like Notion, Jira, Slack, and HubSpot. 

Then, use this n8n workflow to ask it a specific question on a recurring schedule (e.g., "What was the progress on our key projects yesterday?"). 

The workflow delivers a concise, AI-generated summary directly to a Slack channel of your choice. It's the easiest way to get the information that matters most, without the manual work.


## Who is this for?

* **Team leads & managers:** Get automated daily or weekly reports on project progress, sales performance, or customer support trends without having to chase down information.
* **Operations teams:** Monitor key business activities by receiving automated summaries from various sources in a single, convenient message.
* **Anyone overwhelmed by information:** Replace manual check-ins across multiple platforms with a single, intelligent digest tailored to your needs.

## What problem does this solve?

* **Eliminates manual reporting:** Frees you from the repetitive, time-consuming task of gathering updates from different tools every day.
* **Centralizes key insights:** Delivers crucial information from all your connected apps (via your Super assistant) into a single, easy-to-read Slack message.
* **Saves time and improves focus:** Start your day with a concise, actionable summary instead of context-switching between numerous tabs and dashboards.
* **Makes powerful, data-connected AI accessible:** Simplifies the process of querying a sophisticated AI assistant on a recurring basis to get answers from your own company's data.

## How it works

1.  **First, in Super:** The process starts on the Super platform (https://super.work/), where you create a new assistant. You'll define its purpose with a prompt and connect it to your live data sources (e.g., your Jira projects, Notion databases, etc.).
2.  **Scheduled trigger:** The n8n workflow runs automatically on a schedule you define (e.g., every weekday morning at 8:30 AM).
3.  **Define the recurring query:** A **Set** node holds the specific question you want to ask your Super assistant each time the workflow runs.
4.  **Query the Super assistant:** An **HTTP Request** node sends this query, along with your unique assistant ID, to the Super API.
5.  **Deliver the digest to Slack:** Your Super assistant generates an answer based on the live data it can access. The workflow then formats this answer and posts it as a clear, concise message in your designated Slack channel.

## Setup

1.  **Set up your Super assistant (Prerequisite):** First, go to [Super](https://super.work/), create an assistant, connect it to your data sources, and copy its **Assistant ID** and your **API Token**.
2.  **Configure the query:** In the **Set query** node, write the question you want to ask your assistant on a recurring basis (e.g., "Summarize all new deals created in HubSpot yesterday.").
3.  **Connect to the Super API:** In the **Query Super Assistant** (HTTP Request) node:
    * Paste your **Assistant ID** into the `assistantId` field in the body.
    * Add your Super **API Token** for authentication. We recommend creating a "Generic Credential" of type "Bearer Token" for this.
4.  **Connect Slack:** In the **Send digest in Slack** node, select your Slack account and choose the channel where you want the digest to be posted.
5.  **Set the schedule:** Adjust the **Schedule Trigger** to your desired frequency and time.
6.  **Activate the workflow**, and your automated digests will start arriving as scheduled!

## Taking it further

* **Change the destination:** Not a Slack user? Easily swap the **Slack** node for an **Email** node to send the digest to your inbox, or a **Google Sheets** node to log all digests over time.
* **Create dynamic queries:** Use n8n's expression editor in the **Set query** node to make your questions dynamic. For example, you could automatically insert yesterday's date into the query each day.
* **Build multi-step reports:** Chain multiple **HTTP Request** nodes to ask your Super assistant several different questions, then combine all the answers into a single, more comprehensive report.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
