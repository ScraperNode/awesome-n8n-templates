# ⚒️ Reliable AI agent output without structured output parser - w/ OpenAI & Switch

> ⚡ **1,281 views** · ⚒️ [Engineering](../)

## Description

This workflow serves as a **solid foundation** when you need an **AI Agent to return output in a specific JSON schema**, without relying on the often-unreliable **Structured Output Parser**.

## What It Does
The example workflow takes a simple input (like a food item) and expects a JSON-formatted output containing its nutritional values.

## Why Use This Instead of Structured Output Parser?

The built-in [Structured Output Parser](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserstructured/common-issues/) node is known to be unreliable when working with AI Agents.

While the **n8n documentation recommends using a “Basic LLM Chain”** followed by a **Structured Output Parser**, this alternative workflow **completely avoids using the Structured Output Parser node**.  
Instead, it implements a custom loop that manually validates the AI Agent's output.

This method has **proven especially reliable** with OpenAI's `gpt-4.1` series (`gpt-4.1`, `gpt-4.1-mini`, `gpt-4.1-nano`), which tend to **produce correctly structured JSON** on the first try, as long as the **System Prompt is well defined**.
In this template, `gpt-4.1-nano` is set by default.

### How It Works

Instead of using the *Structured Output Parser*, this workflow loops the AI Agent through a manual schema validation process:

- A **custom schema check** is performed after the AI Agent response.
- A **runIndex counter** tracks the number of retries.
- A **Switch node**:
  - If the output does **not** match the expected schema, it routes back to the AI Agent with an updated prompt asking it to return the correct format. The process allows up to **4 retries** to avoid infinite loops.
  - If the output **does** match the schema, it continues to a **Set node** that serves as chat response (you can customize this part to fit your use case).


This approach ensures schema consistency, offers flexibility, and avoids the brittleness of the default parser.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
