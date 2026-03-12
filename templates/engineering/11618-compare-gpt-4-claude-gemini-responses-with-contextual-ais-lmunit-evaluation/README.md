# ⚒️ Compare GPT-4, Claude & Gemini Responses with Contextual AI's LMUnit Evaluation

> ⚡ **2,833 views** · ⚒️ [Engineering](../)

## Description

## PROBLEM  
Evaluating and comparing responses from multiple LLMs (OpenAI, Claude, Gemini) can be challenging when done manually.  
- Each model produces outputs that differ in clarity, tone, and reasoning structure.  
- Traditional evaluation metrics like ROUGE or BLEU fail to capture nuanced quality differences.  
- Human evaluations are inconsistent, slow, and difficult to scale.  

### This workflow automates **LLM response quality evaluation** using **Contextual AI’s LMUnit**, a natural language unit testing framework that provides systematic, fine-grained feedback on response clarity and conciseness.  
&gt; **Note:** LMUnit offers natural language-based evaluation with a 1–5 scoring scale, enabling consistent and interpretable results across different model outputs.

## How it works  
- A **chat trigger node** collects responses from multiple LLMs such as **OpenAI GPT-4.1, **Claude 4.5 Sonnet**, and **Gemini 2.5 Flash**.  
- Each model receives the same input prompt to ensure fair comparison, which is then aggregated and associated with each test cases
- We use Contextual AI's LMUnit node to evaluate each response using predefined quality criteria:  
  - “Is the response clear and easy to understand?” - Clarity 
  - “Is the response concise and free from redundancy?”  - Conciseness 
- **LMUnit** then produces evaluation scores (1–5) for each test 
- Results are aggregated and formatted into a structured summary showing model-wise performance and overall averages.

## How to set up  
- Create a free [Contextual AI account](https://app.contextual.ai/) and obtain your `CONTEXTUALAI_API_KEY`.  
- In your **n8n** instance, add this key as a credential under “Contextual AI.”  
- Obtain and add credentials for each model provider you wish to test:  
  - **OpenAI API Key:** [platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)  
  - **Anthropic API Key:** [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys)  
  - **Gemini API Key:** [ai.google.dev/gemini-api/docs/api-key](https://ai.google.dev/gemini-api/docs/api-key)  
- Start sending prompts using chat interface to automatically generate model outputs and evaluations.

## How to customize the workflow  
- Add more **evaluation criteria** (e.g., factual accuracy, tone, completeness) in the LMUnit test configuration.  
- Include additional **LLM providers** by duplicating the response generation nodes.  
- Adjust **thresholds and aggregation logic** to suit your evaluation goals.  
- Enhance the final summary formatting for dashboards, tables, or JSON exports.  
- For detailed API parameters, refer to the [LMUnit API reference](https://docs.contextual.ai/api-reference/lmunit/lmunit).  
- If you have feedback or need support, please email **feedback@contextual.ai**.

## 🔗 Nodes Used

Chat Trigger, OpenAI, Google Gemini, Anthropic, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
