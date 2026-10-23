# 🎫 Intelligent Support Triage & Auto-Response Engine with Jotform, Airtable, Gemini

> ⚡ **65 views** · 🎫 [Ticket Management & Triage](../)

## Description

## AI-Driven Support Triage and Auto-Response Engine

This n8n workflow establishes a sophisticated, multi-stage support system. It automatically validates user identity, analyzes ticket severity and sentiment, and attempts to resolve lower-priority issues using an AI agent connected to a knowledge base (Pinecone). It ensures high-priority or complex issues are immediately escalated to the team via Slack.

### Phase 1: Intake and User Validation

The workflow triggers whenever a new support ticket is submitted, ensuring that only registered users receive automated assistance.

1.  **Jotform Trigger:** The process begins when a customer submits a support request via your designated Jotform.
2.  **Airtable User Check:** The workflow immediately searches your **Airtable "Users" table** to verify if the provided email matches an existing account.
3.  **Validation Logic (If Node):** * **If User Found:** The workflow proceeds to Phase 2 for analysis.
    * **If User Not Found:** It sends an automated **Gmail message** asking the user for the correct account email and updates the Airtable ticket status to "Need User Input"

### Phase 2: AI Triage and Severity Analysis

Once validated, the issue is analyzed by a Senior Support AI to determine how it should be handled.

1.  **AI Agent (Triage):** Powered by **Google Gemini**, this agent analyzes the "Issue Type" and "Description." It uses a **Structured Output Parser** to categorize the ticket by:
    * **Severity:** High, Medium, or Low.
    * **Sentiment:** Frustrated or Normal.
2.  **Airtable Logging:** The analysis (Severity/Sentiment) is immediately appended to the support record in Airtable.
3.  **Escalation Path (If High Severity):** If the issue is flagged as "High," the workflow bypasses automated response attempts and triggers a **Slack alert** to the team for immediate manual intervention.

### Phase 3: Automated Resolution and Escalation

For non-critical issues, the system attempts to solve the problem using your internal documentation.

1.  **AI Agent (Resolution):** This agent is equipped with a **Pinecone Vector Store** (containing your Support FAQs) and **Gmail Tools**.
2.  **Vector Search:** The agent searches the FAQ database for a solution.
    * **Success (&gt;90% confidence):** The agent automatically drafts and sends a polite solution via **Gmail** and updates the Airtable status to "Responded."
    * **Failure (No solution found):** The agent returns "MANUAL_REVIEW_REQUIRED," which triggers a **Slack notification** to the support channel, including deep links to the Airtable record and specific user details (Plan type, Start date).

### Phase 4: Verification Loop (Email Reply Detection)

The workflow also includes a secondary logic branch to handle incoming replies from users who were previously asked for identity verification.

1.  **Gmail Trigger (Polling):** Monitors for new unread replies from users with correct emails.
2.  **Verification Check:** Searches Airtable for tickets currently in "Require User Input" status.
3.  **Status Restoration:** Once the user replies, it notifies the team via **Slack** that a ticket has been "Verified" and moves the status back to "Pending" for regular processing.

---

## Requirements

### 1. Automation & AI Platforms
* **n8n Instance:** Cloud or self-hosted.
* **Google Gemini API:** Required for the Triage and Resolution AI agents.
* **Pinecone:** A vector database containing your FAQ embeddings for AI retrieval.

### 2. Service Credentials
* **Airtable Personal Access Token:** To search users and update support entries.
* **Gmail OAuth2:** To send automated resolutions and monitor for user replies.
* **Slack OAuth2:** To send real-time alerts and escalation blocks to the team.
* **Jotform API Key:** To trigger the workflow upon form submission.

### 3. External Configurations
* **Airtable Schema:** Two tables are required:
    * `Users`: Containing `Email`, `First Name`, `Last Name`, and `Current Plan`.
    * `Support Entries`: Containing `Submission ID`, `Status`, `Severity`, `Sentiment`, and `Message id`.
* **Pinecone Index:** An index named `support-faqs` populated with relevant documentation embeddings.

## 🔗 Nodes Used

Airtable, Slack, Jotform Trigger, Gmail, Gmail Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
