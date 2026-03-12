# ⚒️ Beginner manager agent with sub-agent tools

> ⚡ **3,254 views** · ⚒️ [Engineering](../)

## Description

This guide walks you through building an intelligent AI Agent in n8n that routes tasks to the appropriate sub-agent using the new `@n8n/n8n-nodes-langchain` agent framework. You’ll create a **Manager Agent** that evaluates user input and delegates it to either an **Email Agent** or a **Data Agent**—each with its own role, memory, and OpenAI model.

This is perfect for use cases where you want a single entry point but intelligent branching behind the scenes.

---

## 🔧 Step 1: Set Up the Manager Agent

Start by dragging in an **Agent** node and name it something like `ManagerAgent`. This agent will act as the “brain” of your system, analyzing the user's input and determining whether it should be handled by the email-writing sub-agent or the data-summary sub-agent.

Open the node’s settings and paste the following into the **System Message**:

```
You are an AI Manager that delegates tasks to specialized agents. Your job is to analyze the user's message and decide whether it requires:

An EmailAgent for writing outreach, follow-up, or templated emails, or

A DataAgent for tasks involving data summaries, metrics, or analysis.

Send the instructions to the sub agents.
```

This instruction gives the Manager Agent clarity on what roles exist and what types of tasks belong to each one.

---

## 🧠 Step 2: Add Memory to the Manager Agent

Drag in a **Memory (BufferWindow)** node and label it `Manager Memory`. Connect it to the `ai_memory` input of the Manager Agent. This ensures the agent can remember recent inputs and outputs from the user and agents during the conversation.

No extra configuration is needed in this memory node—just connect it to the agent.

---

## 🔌 Step 3: Connect a Language Model to the Manager Agent

Next, add a **Language Model** node and choose `OpenAI Chat Model`. Select a model like `gpt-4o-mini` or `gpt-4`, depending on what you have access to. Under **Credentials**, connect your OpenAI API key. If you haven’t created this credential yet:

1. Click "OpenAI API" under Credentials.
2. Choose "Create New".
3. Paste your OpenAI API key (found at [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)).
4. Save it and return to the workflow.

Once the model is set, connect it to the `ai_languageModel` input of the Manager Agent.

---

## ✉️ Step 4: Create the Email Agent Tool

Now you’ll create a specialized sub-agent that only writes emails.

Add an **Agent Tool** node and call it `EmailAgent`. In the tool’s settings, describe its job clearly. For example:

```
Writes professional, friendly, or action-oriented emails based on instructions.
```

Then scroll down to the **System Message** section and enter the following:

```
You are a professional Email Writing Assistant. You write polished, effective emails for tasks such as outreach, follow-ups, and client communication. Follow the instruction provided exactly and return only the email content. Use a warm, business-appropriate tone.
```

For the text input field, use the expression:

```
{{ $fromAI('Prompt__User_Message_', ``, 'string') }}
```

This allows the Email Agent to receive exactly what the Manager Agent wants it to handle.

Add another **Memory** node and link it to this tool to help it maintain short-term context. Then add a second **Language Model** node, configured just like the first one (you can even clone it), and connect it to the EmailAgent.

Finally, connect this entire EmailAgent setup back to the `ManagerAgent` by attaching it to its `ai_tool` input.

---

## 📊 Step 5: Create the Data Agent Tool

Repeat the same steps, but this time for data summaries and analysis.

Add another **Agent Tool** node and name it `DataAgent`. In the **Tool Description**, write something like:

```
Responds to instructions requiring metrics, summaries, or data analysis explanations.
```

For its input text field, you can use:

```
{{json.query}}
```

If desired, provide a system message that gives the agent more detailed instruction on how to behave:

```
You are a helpful Data Analyst. Summarize trends, explain metrics, and break down data clearly based on user instructions.
```

As with the EmailAgent, you’ll also need:
- A dedicated **Memory** node
- A dedicated **Language Model** node
- A connection to the `ai_tool` input of the Manager Agent

Now the Manager Agent has two tools it can delegate to: one for communication and one for insights.

---

## 🧪 Step 6: Test Your AI Agent System

Deploy the workflow and start testing by sending prompts like:

&gt; “Write a cold outreach email to a software company.”

The ManagerAgent should route that to the EmailAgent.

Then try:

&gt; “Summarize how our lead volume changed last month.”

The DataAgent should receive that task.

If routing isn’t working as expected, double-check your system messages and input bindings in each agent tool.

---

## ✅ You’re Done!

You now have a modular, multi-agent AI system powered by n8n. The Manager Agent delegates intelligently, each sub-agent is optimized for its role, and all of them benefit from context memory.

For more advanced setups, you can chain tools, add additional memory types, or use retrieval (RAG) tools for external document support.

---

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
