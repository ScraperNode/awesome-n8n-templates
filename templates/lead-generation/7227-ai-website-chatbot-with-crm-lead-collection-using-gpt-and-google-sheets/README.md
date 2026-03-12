# 🎣 AI website chatbot with CRM lead collection using GPT and Google Sheets

> ⚡ **2,312 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This n8n training workflow demonstrates how to connect a **sub-workflow** as a **tool** to an AI Agent.  
In this example, the main workflow is a **Website Chatbot** that engages visitors, collects contact information, and sends that data to a CRM process.  
The CRM process itself is a separate sub-workflow, connected to the agent as a tool via the **Tool Workflow** node.

---

## Step-by-Step Setup Instructions

### 1. Create the Sub-Workflow (CRM Tool)
This sub-workflow will be triggered by the AI agent to process collected information.  
It will:
1. Receive inputs (email, description) from the main chatbot workflow.
2. Format the data into a structured JSON format.
3. Append the data to a Google Sheet (acting as the CRM database).
4. Send a confirmation message back to the main workflow.

**Steps inside the sub-workflow:**
- **When Executed by Another Workflow** – Triggered by the main workflow’s tool node.
- **Convert Conversation (Agent)** – Uses OpenAI to extract and format the input into a JSON structure:
  ```json
  {
    "email": "jane.doe@example.com",
    "description": "Wants help automating lead intake and sending Slack notifications."
  }

**Structured Output Parser** – Ensures the extracted data matches the expected JSON schema.

**Append row in sheet (Google Sheets)** – Adds the new lead data to your CRM sheet.

**Code Node** – Returns a simple text confirmation like `"Thanks for the info, we will be in touch soon"`.

### Required setup for Google Sheets:
- Enable the Google Sheets API and connect your Google account in n8n.
- Create a sheet with at least the columns `email` and `description`.
- Use the sheet's Document ID and tab name in the Google Sheets node.

---

## 2. Create the Main Workflow (Website Chatbot)
This workflow acts as the main AI Agent handling incoming chat messages.

### Steps in the main workflow:
1. **When chat message received** – Starts the workflow whenever a visitor sends a message via your chatbot integration.
2. **Website Chatbot (Agent Node)** – Configured with a **System Message** that:
   - Briefly explains your services.
   - Asks the visitor what processes they want to automate.
   - Requests their name and email.
   - Sends collected data to the CRM tool once email and description are available.
3. **OpenAI Chat Model** – Connects to the AI agent as its language model.
4. **Simple Memory** – Stores short-term context for the ongoing chat.
5. **CRM Tool (Tool Workflow Node)** – Points to the sub-workflow created in Step 1, allowing the chatbot to trigger it directly.

---

## 3. Connecting the Sub-Workflow to the AI Agent
1. Add a **Tool Workflow** node to the main workflow.
2. Select `"Parameter"` as the source.
3. Paste in your sub-workflow JSON or select it from your n8n workflows.
4. Connect the **Tool Workflow** node to your AI Agent using the `ai_tool` connection.
5. Give the tool a clear description (e.g., `crm tool to store lead information`) so the agent knows when to use it.

---

## 4. How It Works in Action
1. A visitor sends a message through the chatbot.
2. The AI Agent engages, asks questions, and collects their name, email, and request.
3. Once collected, the agent triggers the **CRM Tool**.
4. The sub-workflow formats the data, stores it in Google Sheets, and sends a confirmation.
5. The chatbot confirms with the visitor that their request was received.

---

## 5. Customization Ideas
- Replace Google Sheets with your actual CRM API.
- Add validation to ensure the email format is correct before saving.
- Expand the CRM tool to send a Slack or email notification after storing the lead.

---

**Created by Robert A. – Ynteractive**  
Website: https://ynteractive.com  
Email: robert@ynteractive.com

## 🔗 Nodes Used

Google Sheets, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
