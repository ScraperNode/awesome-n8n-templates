# ⚒️ Route AI prompts between Anthropic, Google Gemini, Mistral and OpenAI

> ⚡ **77 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
A reusable sub-workflow that routes text prompts to Anthropic Claude, Google Gemini, Mistral, or OpenAI and returns a normalised response - including estimated token usage and cost - regardless of the provider. Drop it into any workflow via Execute Workflow to add LLM capability without rebuilding the API plumbing each time.

## How it works
1. The workflow is called as a sub-workflow from other workflows using n8n's Execute Workflow node. It accepts a prompt payload and routes it through five stages:
2. **Initialise** — a CONFIG node exposes all defaults (provider, model, temperature, token limit, response format) in one place.
3. **Normalise & validate** — the inbound payload is merged with CONFIG defaults, prompts are coerced to strings and stripped of null bytes, and model-specific quirks are handled (OpenAI o-series reasoning models omit temperature; GPT-5.x uses max_completion_tokens).
4. **Token budget check** — an estimated input token count is compared against the selected model's context limit. If the prompt would exceed 70% of the limit, the workflow errors early with a clear message rather than sending an oversized request.
5. **Route to provider** — a Switch node dispatches to one of four HTTP Request nodes, each pre-configured for its provider's API shape. Google Gemini enforces application/json response MIME type when JSON output is requested; all other providers use prompt-based JSON guidance.
6. **Merge & return** — a single Code node extracts the response text from whichever provider ran, normalises it (strips code fences, optionally repairs malformed JSON), pulls actual token counts from the API response, calculates an estimated cost, and returns a consistent output shape regardless of provider.
7. Every call returns the original payload plus:

| Field | Description |
|---|---|
| `llm_response` | Model text output, or `[API ERROR] ...` on failure |
| `model_used` | Model that handled the request |
| `provider_used` | Provider that handled the request |
| `llm_response_length` | Character length of `llm_response` |
| `llm_response_empty` | `true` if response is empty or an API error occurred |
| `_input_tokens` | Input token count - actual from API if available, otherwise estimated |
| `_output_tokens` | Output token count - actual from API if available, otherwise estimated |
| `_estimated_cost_usd` | Estimated cost in USD. `null` if model not in pricing table |

## Setup
1. Create credentials for each provider you plan to use: Anthropic API, Google AI (PaLM) API for Gemini, Mistral Cloud API, and/or OpenAI API.
2. Set your preferred defaults in the CONFIG step (default provider, default model per provider, temperature, max tokens, and response format).
3. Call this workflow from other workflows using Execute Workflow and pass at minimum a `userPrompt` field (optionally `systemPrompt`, `llm_provider`, model overrides, `temperature`, `max_tokens`, and `response_format`).
4. Activate the workflow so it can be executed as a sub-workflow.

## Customization
- **Change the default provider or model**
Open the CONFIG node and update DEFAULT_PROVIDER and/or the relevant DEFAULT_*_MODEL field. This is the only change needed for most customisations — every downstream node reads from CONFIG.
- **Override per-call**
Callers can pass llm_provider, anthropic_model, google_model, mistral_model, or openai_model in their payload to override the CONFIG defaults for that specific call. This makes it straightforward to use different models for different tasks from the same caller workflow.
- **Adjust token limits**
The Validate Token Budget node contains a MODEL_LIMITS object mapping model names to their context window sizes. If you're using a newer model that isn't listed, add it here. Unknown models fall back to a conservative 32,000-token limit.
- **Update cost prices**
The Cost Tracking node contains a COSTS table (cost per 1,000 tokens by provider and model). Prices are approximate and dated — check provider pricing pages and update the table when rates change. Add new models by adding an entry to the relevant provider block.
- **Add a new provider**
- Add a new output case to the Which Provider? Switch node
- Add a new HTTP Request node configured for that provider's chat API
- Connect it to Merge Provider Response
- Add token extraction logic for the new provider's response shape in the Merge Provider Response node
- Add cost rates for the new provider in the Cost Tracking node

## Additional info
### Who's it for
- Builders running multi-provider setups who want a single call interface regardless of which AI model is in use
- Teams that switch AI models frequently - swap the default in one CONFIG node rather than touching every workflow 
- Developers who want to experiment working with different AI providers (customise to use your preferred models)

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
