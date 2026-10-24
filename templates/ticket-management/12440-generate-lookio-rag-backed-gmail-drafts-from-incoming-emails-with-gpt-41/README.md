# 🎫 Generate Lookio RAG-backed Gmail drafts from incoming emails with GPT-4.1

> ⚡ **35 views** · 🎫 [Ticket Management & Triage](../)

## Description

This n8n template automatically generates knowledge-backed draft email replies when a new message arrives in a connected **Gmail** account. The workflow extracts a clean question from the incoming email using an LLM, queries a **[Lookio](https://lookio.app/)** assistant (your RAG knowledge base) for verified context, then writes a subject and body draft with an AI writer and saves it as a **Gmail draft** so a human agent can review and send.

Watch the full tutorial here: https://www.youtube.com/watch?v=VLz3pCXDGd4&t=1s

## Who is this for?

* **Customer support teams:** Produce fast, fact-based draft replies for support tickets referencing internal docs.
* **Sales teams:** Auto-generate informed responses to product or pricing questions using your product docs.
* **Ops & onboarding teams:** Create consistent, accurate answers to frequent procedural questions.
* **No-code automators:** Quickly add RAG-backed email automation without building your own retrieval stack.

## What it does / What problem does this solve?

* **Saves time:** Reduces manual drafting by producing a polished draft a human can review and send.
* **Ensures factual answers:** Uses your Lookio assistant so replies are grounded in your uploaded documents and resources.
* **Maintains human oversight:** Messages are created as **Gmail drafts** (not sent) so agents can edit tone and details.
* **Flexible filtering:** You can restrict which emails trigger the template (labels, senders, or patterns) to avoid unnecessary drafts.

## How it works

1. **Trigger:** **New email incoming** (Gmail Trigger) detects a new message.
2. **Clean question:** **OpenAI Chat Model** formats the email into a concise question for lookup.
3. **RAG lookup:** **Lookio API call** posts the question to your Lookio Assistant and returns research-backed output.
4. **Draft generation:** **Write email draft** LLM composes an email subject and body based on the Lookio output.
5. **Save draft:** **Create email draft** (Gmail node) saves the message as a draft in the original thread.

## How to set up

1. **Create a Lookio assistant:** Sign up at [https://lookio.app/](https://lookio.app/) and upload your documents (PDFs, DOCX, CSV, text, URLs). Create an assistant and copy its **Assistant ID** and your workspace **API Key**.
2. **n8n credentials:** Add **Gmail OAuth2** credentials in n8n for the Gmail trigger and Gmail node, and add your **OpenAI** (or other LLM) credentials for the LLM nodes.
3. **Configure the nodes:**
   1. In **New email incoming** (Gmail Trigger) pick poll method or label filters if needed.
   2. In **Formulate question for knowledge base** (LLM) adjust the prompt if you want different question extraction rules.
   3. In **Lookio API call** (HTTP Request) replace `&lt;YOUR-API-KEY&gt;` and `&lt;YOUR-ASSISTANT-ID&gt;` placeholders and set desired **query_mode** (`eco`, `flash`, or `deep`).
   4. In **Write email draft** (LLM) confirm the output parser and desired style/tone.
   5. In **Create email draft** (Gmail) confirm **threadId** mapping and recipient extraction; the node saves as **draft** by default.
4. **Activate workflow:** Enable the workflow in n8n and test by sending a sample email to the connected Gmail account.

## Requirements

* An n8n instance with access to the workflow editor
* A **Gmail** account connected via **Gmail OAuth2** credentials
* A Lookio account with an assistant, plus **API Key** and **Assistant ID**
* An AI provider account (OpenAI or equivalent) for the LLM nodes

## What is Lookio and how it provides answers

**Lookio** is an API-first RAG platform that converts uploaded documents into assistants your workflows can query. Upload PDFs, DOCX, CSVs, or paste text, then create an assistant with instructions and resource access. Use the Lookio API (`POST https://api.lookio.app/webhook/query`) with `assistant_id`, `query`, and `query_mode` (`eco`, `flash`, `deep`) to retrieve sourced, context-aware answers. Lookio offers a free trial with credits—visit https://lookio.app/ to sign up and get started.

## How to take it further

* **Selective triggers:** Only trigger on specific labels, senders, or keywords to limit drafts to high-value emails.
* **Auto-categorization:** Add an LLM classification step to detect whether an email requires RAG or a short reply.
* **Alternate channels:** Replace the Gmail trigger with Slack, Intercom, or a webhook to draft responses for other channels.
* **Audit & logging:** Add an **Airtable** or **Google Sheets** node to log queries, Lookio outputs, draft versions and agent actions.
* **Custom tone & templates:** Add a step that maps customer segments to different reply styles or templates before creating the draft.

## 🔗 Nodes Used

HTTP Request, Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
