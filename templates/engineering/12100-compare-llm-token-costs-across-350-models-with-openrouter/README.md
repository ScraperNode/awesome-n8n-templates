# ⚒️ Compare LLM token costs across 350+ models with OpenRouter

> ⚡ **118 views** · ⚒️ [Engineering](../)

## Description

###  This n8n template lets you run prompts against 350+ LLM models and see exactly what each request costs with real-time pricing from OpenRouter

  Use cases are many: Compare costs across different models, plan your AI budget, optimize prompts for cost efficiency, or track expenses for client billing!

  ## Good to know

  - OpenRouter charges a platform fee on top of model costs. See [OpenRouter Pricing](https://openrouter.ai/pricing) for details.
  - You need an OpenRouter account with API credits. Free signup available with some free models included.
  - Pricing data is fetched live from OpenRouter's API, so costs are always up-to-date.

  ## How it works

  1. All available models are fetched from OpenRouter's API when you start.
  2. You select a model and enter your prompt via the form (or just use the chat).
  3. The prompt is sent to OpenRouter and the response is captured.
  4. Token usage (input/output) is extracted from the response using a LangChain Code node.
  5. Real-time pricing for your selected model is fetched from OpenRouter.
  6. The exact cost is calculated and displayed alongside your AI response.

  ## How to use

  - **Chat interface**: Quick testing - just type a prompt and get the response with costs.
  - **Form interface**: Select from all available models via dropdown, enter your prompt, and get a detailed cost breakdown.
  - Click **"Show Details"** on the result form to see the full breakdown (input tokens, output tokens, cost per type).

  ## Requirements

  - OpenRouter account with API key ([Get one here](https://openrouter.ai/settings/keys))

  ## Customising this workflow

  - Add a database node to log all requests and costs over time
  - Connect to Google Sheets for cost tracking and reporting
  - Extend with LLM-as-Judge evaluation to also check response quality

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Filter, LangChain Code, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
