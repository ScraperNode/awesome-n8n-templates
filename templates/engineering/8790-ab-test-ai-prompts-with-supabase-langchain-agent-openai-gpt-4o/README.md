# ⚒️ A/B test AI prompts with Supabase, Langchain Agent & OpenAI GPT-4o

> ⚡ **231 views** · ⚒️ [Engineering](../)

## Description

![n8n.png](fileId:2666)
## Split Test AI Prompts Using Supabase & Langchain Agent

This workflow allows you to A/B test different prompts for an AI chatbot powered by Langchain and OpenAI. It uses Supabase to persist session state and randomly assigns users to either a baseline or alternative prompt, ensuring consistent prompt usage across the conversation.

### 🧠 Use Case

Prompt optimization is crucial for maximizing the performance of AI assistants. This workflow helps you run controlled experiments on different prompt versions, giving you a reliable way to compare performance over time.

### ⚙️ How It Works

1. When a message is received, the system checks whether the session already exists in the Supabase table.
2. If not, it randomly assigns the session to either the baseline or alternative prompt.
3. The selected prompt is passed into a Langchain Agent using the OpenAI Chat Model.
4. Postgres is used as chat memory for multi-turn conversation support.

### 🧪 Features

- Randomized A/B split test per session
- Supabase database for session persistence
- Langchain Agent + OpenAI GPT-4o integration
- PostgreSQL memory for maintaining chat context
- Fully documented with sticky notes

### 🛠️ Setup Instructions

1. Create a Supabase table named `split_test_sessions` with the following columns:
   - `session_id` (text)
   - `show_alternative` (boolean)
2. Add credentials for:
   - Supabase
   - OpenAI
   - PostgreSQL (for chat memory)
3. Modify the **"Define Path Values"** node to set your baseline and alternative prompts.
4. Activate the workflow.
5. Send messages to test both prompt paths in action.

### 🔄 Next Steps

- Add tracking for conversions or feedback scores to compare outcomes.
- Modify the prompt content or model settings (e.g. temperature, model version).
- Expand to multi-variant tests beyond A/B.


### 📚 Learn More

- [How This Workflow Uses Supabase + OpenAI for Prompt Testing](https://banana-ai.art/blog/ab-test-ai-prompts)

## 🔗 Nodes Used

Supabase, AI Agent, OpenAI Chat Model, Chat Trigger, Postgres Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
