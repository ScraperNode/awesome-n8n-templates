# 🤖 Update Dialogflow intent responses via Telegram bot commands

> ⚡ **314 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## Update a Dialogflow Intent's Response via Telegram

This template allows you to easily update the response of a Dialogflow intent by simply typing a keyword in Telegram. Ideal for those who need to edit responses without accessing the Dialogflow console.

---

### 🔧 What does this flow do?

1. **Listens for incoming messages** from a Telegram bot using the `Telegram Trigger` node.
2. **Validates the user** by ID through the `User validation by ID` node to ensure only authorized people can execute the action.
3. **Checks if the message contains the keyword** `update` using the `Keyword validation` node.
4. If both conditions are met:
   - Executes an **HTTP GET** request using the `HTTP Request GET` node to fetch the full intent in JSON format from the Dialogflow API.
   - The user copies that JSON, edits the response content, and pastes it into the `HTTP Request UPDATE` node (`PATCH`).
   - Finally, the flow sends a **confirmation message** via Telegram using the `Mensaje de confirmación` node.
5. If the user or keyword is invalid, the bot replies with an **error message** using the `Invalid user message` or `Invalid keyword message` nodes.

---

### 📌 Requirements

- A configured **Google API credential** (Service Account).
- Obtain the `PROJECT_ID` and `INTENT_ID` from the intent's URL in Dialogflow.
- Edit the `jsonBody` content in the `HTTP Request UPDATE` node, **removing the outer curly braces `{}`**.

---

### ✅ Use Cases

- Quickly modify responses in production without accessing Dialogflow.
- Allow non-technical users to update intents from Telegram.
- Foundation for more advanced flows that dynamically manage multiple intents.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
