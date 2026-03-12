# 💬 🤖 Self Improving Email AI Support with Human-in-the-Loop

> ⚡ **2,604 views** · 💬 [Support Chatbots](../)

## Description

## How it works

This workflow creates a sophisticated, self-improving customer support system that automatically handles incoming emails. It's designed to answer common questions using an AI-powered knowledge base and, crucially, to learn from human experts when new or complex questions arise, continuously expanding its capabilities.

Think of it like having an AI assistant with a smart memory and a human mentor. Here's the step-by-step process:

1.  **New Email Received:** The workflow is triggered whenever a new email arrives in your designated support inbox (via Gmail).
2.  **Classify Request:** An AI model (`Google Gemini 2.5 Flash Lite`) first classifies the incoming email to ensure it's a genuine support request, filtering out irrelevant messages.
3.  **Retrieve Knowledge Base:** The workflow fetches all existing Question and Answer pairs from your dedicated Google Sheet knowledge base.
4.  **AI Answer Attempt:** A powerful AI model (`Google Gemini 2.5 Pro`) analyzes the customer's email against the entire knowledge base. It attempts to find a highly relevant answer and drafts a complete HTML email response if successful.
5.  **Decision Point:** An `IF` node checks if the AI found a confident answer.
    *   **If Answer Found:** The AI-generated HTML response is immediately sent back to the customer via Gmail.
    *   **If No Answer Found (Human-in-the-Loop):**
        *   **Escalate to Human:** The customer's summarized question and original email are forwarded to a human expert (you or your team) via Gmail, requesting their assistance.
        *   **Human Reply & AI Learning:** The workflow waits for the human expert's reply. Once received, another AI model (`Google Gemini 2.5 Flash`) processes both the original customer question and the expert's reply to distill them into a new, generic, and reusable Question/Answer pair.
        *   **Update Knowledge Base:** This newly created Q&A pair is then automatically added as a new row to your Google Sheet knowledge base, ensuring the system can answer similar questions automatically in the future.

## Set up steps

**Setup time: ~10-15 minutes**

This workflow requires connecting your Gmail and Google Sheets accounts, and obtaining a Google AI API key. Follow these steps carefully:

1.  **Connect Your Gmail Account:**
    *   Select the `On New Email Received` node.
    *   Click the **Credential** dropdown and select **`+ Create New Credential`** to connect your Gmail account. Grant the necessary permissions.
    *   Repeat this for the `Send AI Answer` and `Ask Human for Help` nodes, selecting the credential you just created.

2.  **Connect Your Google Sheets Account:**
    *   Select the `Get Knowledge Base` node.
    *   Click the **Credential** dropdown and select **`+ Create New Credential`** to connect your Google account. Grant the necessary permissions.
    *   Repeat this for the `Add to Knowledge Base` node, selecting the credential you just created.

3.  **Set up Your Google Sheet Knowledge Base:**
    *   **Create a new Google Sheet** in your Google Drive.
    *   Rename the first sheet (tab) to `QA Database`.
    *   In the first row of `QA Database`, add two column headers: `Question` (in cell A1) and `Answer` (in cell B1).
    *   Go back to the `Get Knowledge Base` node in n8n. In the **Document ID** field, select your newly created Google Sheet. Do the same for the `Add to Knowledge Base` node.

4.  **Get Your Google AI API Key (for Gemini Models):**
    *   Visit Google AI Studio at [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey).
    *   Click **"Create API key in new project"** and copy the key.
    *   In the workflow, go to the `Google Gemini 2.5 Pro` node, click the **Credential** dropdown, and select **`+ Create New Credential`**.
    *   Paste your key into the **API Key** field and **Save**.
    *   Repeat this for the `Google Gemini 2.5 Flash Lite` and `Google Gemini 2.5 Flash` nodes, selecting the credential you just created.

5.  **Configure Human Expert Email:**
    *   Select the `Ask Human for Help` node.
    *   In the **Send To** field, replace the placeholder email address with the actual email address of your human expert (e.g., your own email or a team support email).

6.  **Activate the Workflow:**
    *   Once all credentials and configurations are set, activate the workflow using the toggle switch at the top right of your n8n canvas.

**Start Learning!**
Send a test email to the Gmail account connected to the `On New Email Received` node. Observe how the AI responds, or how it escalates to your expert email and then learns from the reply. Check your Google Sheet to see new Q&A pairs being added!

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
