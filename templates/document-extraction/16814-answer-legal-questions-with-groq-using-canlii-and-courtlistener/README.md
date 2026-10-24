# 🔬 Answer legal questions with Groq using CanLII and CourtListener

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a legal question via an n8n form, retrieves supporting authorities from CourtListener or CanLII, and uses a Groq-hosted Llama model to produce an answer grounded only in the retrieved text with verified, non-hallucinated citations.

## How it works
1. Receives a legal question through an n8n form and captures the selected source database (CourtListener or CanLII) plus optional CanLII database and case IDs.
2. Routes the request to CourtListener full-text search or to CanLII case metadata and citator endpoints based on the selected database.
3. For CourtListener, pulls the top search results and fetches the full text of the top-ranked opinion; for CanLII, loads the selected case and a list of related cases from the CanLII citator.
4. Normalizes the retrieved items into a single numbered “sources” block with excerpts that the model can cite.
5. Sends the question and sources to a Groq Chat Model (Llama 3.3 70B) and parses the response into a structured format containing an answer, a supported flag, and a list of citations.
6. Verifies every cited source index against the retrieved sources, drops any mismatches, and renders an HTML result page showing the answer, verified citations, and a disclaimer.
7. If any retrieval step fails, returns an error page explaining that no sources were retrieved and no answer was generated.

## Setup
1. Add credentials for CourtListener (HTTP Header Auth token), CanLII (HTTP Query Auth API key), and Groq (Groq API credential).
2. If using CanLII mode, provide a valid CanLII database ID and case ID when submitting the form (for example, a court database like csc-scc and a decision ID like 2024scc1).
3. Review and adjust the research settings (result count, language, citator direction, snippet length, and disclaimer text) in the configuration step before activating the workflow.

## Requirements
- n8n with the built-in LangChain nodes/
- A CourtListener API token (Header Auth) for US case law.
- A CanLII API key (Query Auth) if you use CanLII mode; CanLII issues API keys on approval.
- A Groq API credential; the free tier is enough to test.

## Customization
- Set result count, response language, and citator direction (citing vs cited cases) in the configuration node.
- Adjust the source-excerpt length the model may cite, and edit the disclaimer text on the result page.
- Swap the Groq model for any other supported chat model.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Groq Chat Model, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
