# 🔬 Fact-check ChatGPT product claims with Bright Data, GPT-5.6, Data Tables and Gmail

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs weekly or on demand to ask ChatGPT (via Bright Data) buyer-style questions about your product, extracts checkable claims with OpenAI, verifies them against your own trusted webpages fetched through Bright Data, stores claim history in an n8n Data Table, and emails a report via Gmail.

## How it works
1. Runs every Monday morning on a schedule or starts manually from an n8n form submission with an optional extra buyer question.
2. Builds a capped list of questions and trusted page URLs from the workflow settings, then triggers a Bright Data dataset job to query ChatGPT with web search enabled.
3. Polls Bright Data until the ChatGPT snapshot is ready (or times out), downloads the results, and cleans the returned answer text and citations.
4. Uses OpenAI (GPT-5.6) to extract a limited set of checkable, product-specific claims from each ChatGPT answer.
5. Fetches your trusted documentation/pricing pages through Bright Data Web Unlocker, cleans the page content, and combines it into a comparison context.
6. Uses OpenAI (GPT-5.6) to judge each claim as supported, contradicted, or not on the page, and only keeps verdicts that include a verbatim evidence sentence that can be string-matched to the fetched page text.
7. Upserts each claim and its verdict into an n8n Data Table to track first/last seen dates, then sends an HTML email via Gmail when there are contradictions, missing coverage, unreadable pages, or nothing could be checked.

## Setup
1. Create a Bright Data HTTP Header Auth credential with header name `Authorization` and value `Bearer YOUR_KEY`, and ensure you can access both the Datasets API and Web Unlocker (`unlocker_zone`).
2. Add an OpenAI credential (used by the GPT-5.6 model in the two LangChain steps) and a Gmail credential with permission to send email.
3. Create an n8n Data Table named `chatgpt_claims` with string columns `claim_key`, `claim`, `verdict`, `correct_value`, `question`, `first_seen`, and `last_seen`.
4. Update the Settings values for `product_name`, `trusted_pages` (pipe-separated URLs that contain the authoritative text), `questions` (pipe-separated), and `report_to` (recipient email address).

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, OpenAI Chat Model, n8n Form Trigger, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
