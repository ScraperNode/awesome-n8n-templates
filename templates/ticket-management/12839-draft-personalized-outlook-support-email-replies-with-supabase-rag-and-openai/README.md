# 🎫 Draft personalized Outlook support email replies with Supabase RAG and OpenAI

> ⚡ **62 views** · 🎫 [Ticket Management & Triage](../)

## Description

### Description
This workflow automates the first line of customer support by intelligently drafting email replies. It bridges the gap between your CRM (Supabase), your technical documentation (Vector Store), and your inbox (Outlook). By analyzing the sender's identity and the technical content of the query, it ensures that every draft reply is personalized, accurate, and follows strict business rules.

### How It Works
1.  **Trigger:** Monitors a Microsoft Outlook inbox for new incoming messages.
2.  **Contact Enrichment:** Queries a Supabase `contacts` table using the sender's email to retrieve their name, organization, and department.
3.  **Context Construction:** A Code node prepares a "Chat Input" that includes the email body, sender metadata, and specific brand "Business Rules."
4.  **AI Intelligence (RAG):**
    * An **AI Agent (GPT-4o)** analyzes the request.
    * If technical details are required, the Agent uses a **Supabase Vector Store tool** to retrieve semantic matches from your product manuals.
5.  **Draft Creation:** The AI generates an HTML-formatted reply which is saved as a **Draft** in Outlook for manual review.
6.  **Audit Trail:** Logs the intent, urgency, and outcome into a Google Sheet for performance tracking.

### Requirements
* **Microsoft Outlook:** Business/Office 365 account.
* **Supabase:** * A table for contact lookups.
    * A vector-enabled database containing document embeddings.
* **OpenAI API:** For the GPT-4o model and embeddings.
* **Google Sheets:** To maintain an execution summary log.

### Setup Instructions
1.  **Import:** Paste the workflow JSON into your n8n canvas.
2.  **Credentials:** Set up and select credentials for Outlook, OpenAI, Supabase, and Google Sheets.
3.  **Placeholder Updates:**
    * **Fetch Contact Info:** Set the table name to your specific CRM table.
    * **Vector Store:** Update the table name and query function to match your Supabase Vector Store setup.
    * **Log to Google Sheets:** Replace the Document ID and Sheet Name with your specific spreadsheet details.
4.  **Persona Tuning:** Open the **AI Support Agent** node and the **Build AI Prompt** code node to replace the `[YOUR_COMPANY]` and `[YOUR_NAME]` placeholders with your actual brand identity.

### Customization Ideas
* **Urgency Routing:** Add an `If` node after the Agent to send a Slack or Teams notification if the AI detects the `urgency` is "high."
* **Attachments:** Modify the Outlook node to include specific PDF brochures based on the `primary_product_codes` identified by the AI.
* **Human-in-the-loop:** Use n8n "Wait for Webhook" or "Manual Approval" nodes if you want to approve the draft within the n8n UI before it hits the Outlook drafts folder.

## 🔗 Nodes Used

Google Sheets, Microsoft Outlook, Supabase, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
