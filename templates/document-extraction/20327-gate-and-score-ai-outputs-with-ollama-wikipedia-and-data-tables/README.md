# 🔬 Gate and score AI outputs with Ollama, Wikipedia, and data tables

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Send any AI output to this workflow and get PASS, FLAG or BLOCK for every factual claim, proven by quotes from your trusted facts or Wikipedia. Runs on local Ollama with no API key, fails closed when the model is down, and emails a weekly truth score.

## How it works
1. Receives AI output through a POST webhook, or runs a built-in sample, and reads all settings from Read Request & Config.
2. Loads your trusted facts from the Data Table `truth_facts` and asks a local Ollama model to extract only checkable factual claims: names, numbers, dates and events. Opinions are ignored.
3. Gathers evidence for each claim: matching trusted facts first, then Wikipedia extracts (free, no key). The search subject is taken from the claim by code, not by the model.
4. A judge model rates each claim VERIFIED, UNSUPPORTED or CONTRADICTED using only that evidence, and must cite a quote for its verdict.
5. Plain code checks every quote: it must exist word for word in the evidence and prove this exact claim, numbers included. Unproven verdicts are downgraded to UNSUPPORTED. Any contradiction means BLOCK, too many unsupported claims mean FLAG, otherwise PASS. If the model fails, the answer is FLAG with a truth score of 0.
6. Returns the verdict to the caller first, then logs the check to `truth_checks` and emails an alert on FLAG or BLOCK.
7. Every Monday at 08:00, emails a truth score per AI source compared with the previous week, then deletes checks older than 90 days.

## Setup
1. Install Ollama and run `ollama pull qwen3:4b-instruct`.
2. In Read Request & Config, set `LLM_URL`. If n8n runs in Docker, use `http://host.docker.internal:11434/v1/chat/completions` (on Linux, start n8n with `--add-host=host.docker.internal:host-gateway`).
3. Create two Data Tables. `truth_facts`: `fact` and `topic` (string); add your trusted facts as rows. `truth_checks`: `checked_at`, `request_id`, `source`, `decision`, `text_excerpt`, `details` (string) and `truth_score`, `claims_total`, `verified`, `unsupported`, `contradicted` (number). Both tables are found by name.
4. Add an SMTP credential to Send Alert and Send Weekly Report and set your addresses. No email account? Deactivate both email nodes, otherwise alert runs end marked as error.
5. Click Test With Sample, then publish the workflow and POST `{"text": "AI output", "source": "my-bot"}` to `/webhook/truth-gate`.

## Requirements
- n8n with Data Tables (tested on n8n 2.41.5); Ollama with qwen3:4b-instruct, or any OpenAI-compatible endpoint; optional SMTP account for alerts and weekly reports

## Customization
- Tune MAX_CLAIMS, FLAG_RATIO and BLOCK_ON_CONTRADICTED in Read Request & Config; set USE_WIKIPEDIA to false for fully offline checks against your trusted facts; set WIKI_LANG for another Wikipedia language; for a cloud model, point LLM_URL at any OpenAI-compatible API and add a Header Auth credential to both LLM nodes

## Additional info
Tested end to end in a real n8n instance: a false height claim is blocked with the Wikipedia quote "330 metres", a claim with no evidence is flagged instead of blocked, and a model outage returns FLAG with a truth score of 0.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
