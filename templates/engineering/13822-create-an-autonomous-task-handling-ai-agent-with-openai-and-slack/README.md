# ⚒️ Create an autonomous task-handling AI agent with OpenAI and Slack

> ⚡ **29 views** · ⚒️ [Engineering](../)

## Description

This workflow creates a self-improving AI agent inside n8n that can understand natural language tasks, plan steps, use tools (HTTP, code, search, …), reflect on results, and continue until the goal is reached — then deliver the final answer.

### How it works

1. Webhook or manual trigger receives a task description  
2. LLM creates initial plan + first tool call (or finishes immediately)  
3. Loop:  
   • Execute chosen tool  
   • Send observation back to LLM  
   • LLM reflects → decides next action or finish  
4. When finished → format final answer, save result, send Slack notification

### Setup steps

1. Connect **OpenAI** (or Anthropic/Groq/Gemini) credential  
2. (Optional) Connect **Slack** credential for notifications  
3. Replace the placeholder “Other Tools” Code node with real tool nodes (Switch + HTTP Request, Google Sheets, Code node, etc.)  
4. Test with simple tasks first:  
   • “What is the current weather in Ahmedabad?”  
   • “Calculate 17×42 and explain the steps”  
5. Adjust max iterations (via SplitInBatches or custom counter) to prevent infinite loops  
6. Activate the workflow and send POST request to webhook with JSON:  
   ```json
   {"task": "your task here"}

### Requirements

- LLM API access (gpt-4o-mini works well for testing)
- Optional: Slack workspace for alerts

### Customization tips

- Upgrade to stronger reasoning models (o1-preview, Claude 3.5/3.7 Sonnet, Gemini 2.0)
- Add real tools: browser automation, vector DB lookup, file read/write, calendar
- Improve memory: append full history or use external vector store
- Add cost/safety guardrails (max iterations, forbidden actions)

### Contact Us
If you need help setting up this workflow, want custom modifications, or have questions about integrating specific tools/services:
🌐 Website: https://www.oneclickitsolution.com/contact-us/

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
