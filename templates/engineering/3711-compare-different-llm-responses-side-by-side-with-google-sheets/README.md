# ⚒️ Compare different LLM responses side-by-side with Google Sheets

> ⚡ **1,546 views** · ⚒️ [Engineering](../)

## Description

This workflow allows you to **easily evaluate and compare the outputs of two language models (LLMs)** before choosing one for production.

In the chat interface, both model outputs are shown side by side. Their responses are also logged into a Google Sheet, where they can be evaluated manually or automatically using a more advanced model.

### Use Case
You're developing an AI agent, and since LLMs are non-deterministic, you want to determine which one performs best for your specific use case. This template is designed to help you compare them effectively.

### How It Works
- The user sends a message to the chat interface.
- The input is duplicated and sent to two different LLMs.
- Each model processes the same prompt independently, using its own memory context.
- Their answers, along with the user input and previous context, are logged to Google Sheets.
- You can review, compare, and evaluate the model outputs manually (or automate it later).
- In the chat, both responses are also shown one after the other for direct comparison.

### How To Use It
- Copy this [Google Sheets template](https://docs.google.com/spreadsheets/d/1grO5jxm05kJ7if9wBIOozjkqW27i8tRedrheLRrpxf4/) (File &gt; Make a Copy).
- Set up your **System Prompt** and **Tools** in the **AI Agent** node to suit your use case.
- Start chatting! Each message will trigger both models and log their responses to the spreadsheet.


*Note: This version is set up for two models. If you want to compare more, you’ll need to extend the workflow logic and update the sheet.*

### About Models
You can use **OpenRouter** or **Vertex AI** to test models across providers.  
If you're using a node for a specific provider, like OpenAI, you can compare different models from that provider (e.g., `gpt-4.1` vs `gpt-4.1-mini`).

### Evaluation in Google Sheets
This is ideal for teams, allowing non-technical stakeholders (not just data scientists) to evaluate responses based on real-world needs.

Advanced users can automate this evaluation using a more capable model (like `o3` from **OpenAI**), but note that this will increase token usage and cost.

### Token Considerations
Since **each input is processed by two different models**, the workflow will consume more tokens overall.  
Keep an eye on usage, especially if working with longer prompts or running multiple evaluations, as this can impact cost.

## 🔗 Nodes Used

Google Sheets, AI Agent, Simple Memory, Summarize, Chat Memory Manager, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
