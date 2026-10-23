# 📊 Monitor brand visibility in AI search with ChatGPT, Perplexity, Gemini, Claude, and Supabase

> ⚡ **53 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow asks buyer-intent questions to ChatGPT Search (OpenAI), Perplexity, Google Gemini Search, and Anthropic Claude, scores whether your brand is cited or mentioned in each answer, logs every check to Supabase, and outputs an overall and per-engine visibility scorecard.

## How it works
1. Starts when you run the workflow manually.
2. Sets your brand name/domain and a list of buyer questions, then creates one item per question.
3. Sends each question to Anthropic Claude, OpenAI Chat Completions (gpt-4o-search-preview), Perplexity (sonar), and Google Gemini with Google Search enabled.
4. Parses each engine’s response to detect whether your brand domain is cited or your brand name is mentioned, and assigns a score (1 for cited, 0.5 for mentioned, 0 for absent).
5. Writes each scored check (brand, engine, question, score, cited, mentioned) as a row into a Supabase table.
6. Aggregates the results into a per-engine percentage and an overall panel score, then prints a console scorecard with top “not cited” targets.

## Setup
1. Add environment variables in n8n for ANTHROPIC_API_KEY, OPENAI_API_KEY, PERPLEXITY_API_KEY, and GEMINI_API_KEY.
2. Create a Supabase table named ai_visibility_log with columns for run time, brand, engine, question, score, cited, and mentioned.
3. Add a Supabase credential in n8n and select it for the Supabase logging step.
4. Update the brand domain/name and buyer questions in the configuration code step to match what you want to monitor.
5. Optionally add a Schedule trigger to run the checks automatically (for example, weekly) instead of running manually.

## 🔗 Nodes Used

HTTP Request, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
