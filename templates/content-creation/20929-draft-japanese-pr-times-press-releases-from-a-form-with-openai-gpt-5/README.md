# 🎬 Draft Japanese PR TIMES press releases from a form with OpenAI GPT-5

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects announcement details through an n8n Form and uses OpenAI to generate a Japanese PR TIMES press release draft, then validates subtitle length and keyword uniqueness and displays a copy-ready draft including company overview, press contact, and points to check.

## How it works
1. Receives form submissions from an n8n Form that collects the facts for a PR TIMES announcement (product name, date, facts, background, features, URLs, and optional CEO comment).
2. Adds fixed company details (company name, headquarters line, representative, company overview, press contact, and writing style rules) to the submission.
3. Sends the combined inputs to OpenAI to generate a structured Japanese draft (title, subtitle, lead, body, 10 keywords, and check points) using only the provided material.
4. Parses the AI output into separate sections and computes checks such as subtitle character count and a warning for “document release” announcements.
5. Deduplicates and formats the keywords list and prepares the final fields for display.
6. Shows the full draft on the form completion page, including warnings, company overview, press contact, keywords, and a list of items to fact-check.

## Setup
1. Update the fixed company fields (company name, representative, overview, and press contact) in the Set Company Information node so they match your organization.
2. Add an OpenAI credential and select the model you want to use in the OpenAI GPT-5 Mini node.
3. Execute the workflow once to get the form URL, then share or open the form and submit an announcement to generate a draft.

## Requirements
- An OpenAI API key (or another chat model supported by the Basic LLM Chain)
- n8n Cloud or self-hosted n8n with the n8n Form Trigger node

## Customization
- Edit the writing rules in the Draft Press Release node to match your house style.
- Add form fields for details you announce often, such as event dates or pricing.
- Swap the OpenAI model for Gemini, Claude, or another chat model.

## Additional info
PR TIMES is a Japanese press release distribution service, so the generated draft is in Japanese. Form labels and the completion page are bilingual (Japanese/English). The AI is told to use only the facts entered in the form and to list anything it inferred under "Points to check", so review the draft before publishing.

## 🔗 Nodes Used

Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
