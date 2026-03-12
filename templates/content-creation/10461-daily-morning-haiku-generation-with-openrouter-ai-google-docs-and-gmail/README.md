# 🎬 Daily morning haiku generation with OpenRouter AI, Google Docs and Gmail

> ⚡ **26 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works
This workflow automatically generates a new haiku poem every morning using AI, formats it in 5-7-5 structure, saves it to Google Docs, and sends it to your email inbox.

**Workflow steps:**
1. **Schedule Trigger** – Runs daily at 7:00 AM.
2. **AI Agent** – Asks AI to output four words (*kigo*, *noun*, *verb1*, *verb2*) in JSON format.
3. **Code in JavaScript** – Builds a 5-7-5 haiku using the AI-generated words and sets today’s title.
4. **Edit Fields** – Prepares document fields (title and body) for Google Docs.
5. **Create a document** – Creates a new Google Document for the haiku.
6. **Prepare Append** – Collects the document ID and haiku text for appending.
7. **Update a document** – Inserts the haiku into the existing Google Doc.
8. **Send a message** – Sends the haiku of the day to your Gmail inbox.
9. **OpenRouter Chat Model** – Connects the OpenRouter model used by the AI Agent.

---

## Setup steps
1. Connect your **OpenRouter API key** as a credential (used in the AI Agent node).  
2. Update your **Google Docs folder ID** and Gmail account credentials.  
3. Change the **email recipient address** in the “Send a message” node.  
4. Adjust the **Schedule Trigger** time as you like.  
5. Run the workflow once to test and verify document creation and email delivery.

---

## Ideal for
- Writers and poets who want daily creative inspiration.  
- Individuals seeking a fun morning ritual.  
- Educators demonstrating AI text generation in a practical example.  

---

⚙️ **Note:**  
Each node includes an **English Sticky Note** above it for clarity and documentation.

## 🔗 Nodes Used

Gmail, Google Docs, Schedule Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
