# ⚒️ Evaluate AI prompts with OpenRouter LLM-as-judge and Notion reports

> ⚡ **18 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow collects a prompt and model choice via an n8n Form, uses OpenRouter LLMs to generate an evaluation dataset, run the prompt against each test case, and grade the responses, then saves per-item results and a synthesized one-line report to Notion.

## How it works
1. Receives prompt, dataset size, and target model input from an n8n Form submission.
2. Uses OpenRouter (via LangChain) to generate a JSON evaluation dataset with categorized questions and difficulty distribution.
3. Iterates through each evaluation question and calls the selected OpenRouter model using the submitted prompt as the system message to produce an answer.
4. Sends each answer to a separate OpenRouter grader model that returns a JSON score plus strengths, weaknesses, and reasoning.
5. Saves each graded evaluation item as a new page in a Notion database.
6. Aggregates all graded items and uses an OpenRouter synthesis model to produce a concise overall evaluation line, then saves it as a Notion page under a specified parent page.

## Setup
1. Add an OpenRouter API credential in n8n and ensure the models referenced in the form and LLM nodes are available to your OpenRouter account.
2. Add a Notion integration credential in n8n and share both the target database and parent page with that integration.
3. Create a Notion database with the required properties (Category, Difficulty, Question, Response, Strengths, Weaknesses, Reasoning, Score) and paste its database ID plus the parent page ID into the Config values.

## Requirements
- OpenRouter account and API key
- Notion account with an integration configured in n8n
- Notion database matching the schema above

## Customization
- Adjust the number of test cases in the form (default: 50)
- Swap the grader or synthesis model by editing the corresponding LLM node
- Edit the Synthesis Agent system prompt to change the report format or length

## Additional info
This workflow uses OpenRouter as the LLM provider, which gives access to 
hundreds of models (including free tiers) through a single API key.

The evaluation dataset follows a structured distribution across 7 categories 
and 3 difficulty levels, making results comparable across prompt iterations.

For best results, test prompts that define a specific role, scope, and output 
format — vague prompts will score low by design, which is the point.

## 🔗 Nodes Used

Notion, AI Agent, n8n Form Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
