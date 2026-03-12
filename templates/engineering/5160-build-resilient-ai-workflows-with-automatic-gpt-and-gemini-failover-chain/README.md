# ⚒️ 🤖 Build resilient AI workflows with automatic GPT and Gemini failover chain

> ⚡ **2,214 views** · ⚒️ [Engineering](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

### How it works

This workflow demonstrates how to create a resilient AI Agent that automatically falls back to a different language model if the primary one fails. This is useful for handling API errors, rate limits, or model outages without interrupting your process.

1.  **State Initialization:** The `Agent Variables` node initializes a `fail_count` to 0. This counter tracks how many models have been attempted.
2.  **Dynamic Model Selection:** The `Fallback Models` (a LangChain Code node) acts as a router. It receives a list of all connected AI models and, based on the current `fail_count`, selects which one to use for this attempt (0 for the first model, 1 for the second, etc.).
3.  **Agent Execution:** The `AI Agent` node attempts to run your prompt using the model selected by the router.
4.  **The Fallback Loop:**
    *   **On Success:** The workflow completes successfully.
    *   **On Error:** If the `AI Agent` node fails, its "On Error" output is triggered. This path loops back to the `Agent Variables` node, which increments the `fail_count` by 1. The process then repeats, causing the `Fallback Models` router to select the *next* model in the list.
5.  **Final Failure:** If all connected models are tried and fail, the workflow will stop with an error.

### Set up steps

**Setup time: ~3-5 minutes**

1.  **Configure Credentials:** Ensure you have the necessary credentials (e.g., for OpenAI, Google AI) configured in your n8n instance.
2.  **Define Your Model Chain:**
    *   Add the AI model nodes you want to use to the canvas (e.g., OpenAI, Google Gemini, Anthropic).
    *   Connect them to the **`Fallback Models`** node.
    *   **Important:** The order in which you connect the models determines the fallback order. The model nodes first created/connected will be tried first.
3.  **Set Your Prompt:** Open the **`AI Agent`** node and enter the prompt you want to execute.
4.  **Test:** Run the workflow. To test the fallback logic, you can temporarily disable the `First Model` node or configure it with invalid credentials to force an error.

## 🔗 Nodes Used

AI Agent, LangChain Code, OpenAI Chat Model, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
