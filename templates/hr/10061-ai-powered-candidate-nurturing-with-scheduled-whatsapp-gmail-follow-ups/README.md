# 👥 AI-powered candidate nurturing with scheduled WhatsApp & Gmail follow-ups

> ⚡ **85 views** · 👥 [HR & Recruitment](../)

## Description

## What This Workflow Does

This workflow automates the candidate nurturing process, solving the common problem of candidates losing interest or "ghosting" after an application. It keeps them engaged and informed by sending a personalized, multi-channel (WhatsApp & Gmail) sequence of follow-up messages over their first week.

The automation triggers when a new candidate is added to your ATS (e.g., via a Recrutei webhook). It then uses AI to generate a custom 3-part message (for Day 1, Day 3, and Day 7) tailored to the candidate's age and the specific job they applied for, ensuring a professional and empathetic experience that strengthens your employer brand.

## How it Works

1.  **Trigger:** A Webhook node captures the new candidate data from your Applicant Tracking System (ATS) or form.
2.  **Data Preparation:** Two Code nodes clean the incoming data. The first (`Separating information`) extracts key fields and formats the phone number. The second (`Extract age`) calculates the candidate's age from their birthday to be used by the AI.
3.  **AI Content Generation:** The workflow sends the candidate's details (name, age, job title) to an AI model (`AI Recruitment Assistant`). The AI has a detailed system prompt to generate three distinct messages for Day 1 (Thank You), Day 3 (Friendly Reminder), and Day 7 (Final Reinforcement), adapting its tone based on the candidate's age.
4.  **Split Messages:** A Code node (`Separating messages per days`) receives the single text block from the AI and splits it into three separate variables (`day1`, `day3`, `day7`).
5.  **Day 1 Send:** The workflow immediately sends the `day1` message via both Gmail and WhatsApp (configured for Evolution API).
6.  **Day 3 Send:** A "Wait" node pauses the workflow for 2 days, after which it sends the `day3` message.
7.  **Day 7 Send:** Another "Wait" node pauses for 4 more days, then sends the final `day7` message, completing the 7-day nurturing sequence.

## Setup Instructions

This workflow is plug-and-play once you configure the following 5 steps:

1.  **Webhook Node:** Copy the **Test URL** from the Webhook node and configure it in your ATS (e.g., Recrutei) or form builder to trigger whenever a new candidate is added. Run one test submission to make the data structure visible to n8n.
2.  **AI Credentials:** In the `AI Recruitment Assistant` node, select or create your OpenAI API credential.
3.  **MCP Credential (Optional):** If you use a Recrutei MCP, paste your endpoint URL into the `MCP Recrutei` node.
4.  **Gmail Credentials:** In all three `Message Gmail` nodes (Day 1, 3, 7), select or create your Gmail (OAuth2) credential.
    * *Optional:* In the same nodes, go to **Options** and change the `Sender Name` from `your_company` to your actual company name.
5.  **WhatsApp (Evolution API):** This template is pre-configured for the Evolution API. In all three `Message WhatsApp` nodes (Day 1, 3, 7), you must:
    * **URL:** Replace `{server-url}` and `{instance}` with your Evolution API details.
    * **Headers:** In the "Header Parameters" section, replace `your_api_key` with your actual Evolution API key.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, OpenAI, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
