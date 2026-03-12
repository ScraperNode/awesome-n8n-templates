# ⚡ Route user requests to specialized agents with GPT-4o Mini

> ⚡ **837 views** · ⚡ [Personal Productivity](../)

## Description

This **n8n workflow template** is designed to **route user input to specialized agents** (like a Reminder Agent, Email Agent, etc.) using a **structured output from a language model**. Here's a complete description of what it does and how each part works:

---

### 🔁 **Workflow Purpose:**

This template receives a user's request via **Webhook**, processes it using an **LLM**, extracts structured data like the agent name and user query, and routes the input to the appropriate sub-workflow (agent) based on the specified agent type.

---

### 🧩 **Workflow Breakdown:**

#### 1. **Webhook (Trigger)**

* Node: `Webhook`
* Purpose: Accepts a POST request from any frontend or API source. It contains the **raw user input**.

---

#### 2. **GPT Model (LLM Inference)**

* Node: `GPT 4o Mini`
* Purpose: Interprets the user input and determines:

  * Which **agent** should handle it (e.g., "Reminder Agent", "Email Agent", etc.)
  * The **actual user request** (in structured format)

---

#### 3. **Auto-Fixing Output Parser**

* Node: `Auto-fixing Output Parser`
* Purpose: Ensures that the output from the LLM matches the expected structure. If there's a mismatch, it automatically corrects it using a re-prompt.

---

#### 4. **Structured Output Parser**

* Node: `Structured Output Parser`
* Purpose: Converts the language model's response into a **strict JSON structure** with keys like:

  * `"Agent Name"`
  * `"user input"`
  * `"sessionID"`

---

#### 5. **Agent Router**

* Node: `Switch ("Agent Route")`
* Purpose: Based on `"Agent Name"`, it routes the input to one of the following sub-workflows:

  * 📅 `Reminder Agent`
  * 📧 `Email Agent`
  * 🧾 `Document Agent`
  * 🤝 `Meeting Agent`

---

#### 6. **Sub-Workflow Call (Execute Workflow)**

Each agent is implemented as a separate n8n workflow:

* The input is forwarded to the selected agent.
* For example, if `"Agent Name"` is `"Reminder Agent"`, the workflow `"Reminder Agent"` is called with `"user input"`.

---

#### 7. **Webhook Response**

* After the sub-agent workflow finishes, a `Respond to Webhook` node sends the output back as an HTTP response.

---

### ✅ **Key Features:**

* Fully modular and extensible
* LLM-driven routing using **OpenRouter GPT-4o**
* Auto-corrects structured output errors
* Clean separation of concerns (agent logic is decoupled in sub-workflows)
* Easily add more agents by updating the switch logic

---

### 📦 **Use Case Examples:**

* User says: “Remind me to call my mom tomorrow.”
  → Routed to **Reminder Agent**

* User says: “Send an email to the HR team.”
  → Routed to **Email Agent**

* User says: “Schedule a meeting with John next week.”
  → Routed to **Meeting Agent**

---

## 🔗 Nodes Used

Webhook, Execute Sub-workflow, AI Agent, Auto-fixing Output Parser, Structured Output Parser, Postgres Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
