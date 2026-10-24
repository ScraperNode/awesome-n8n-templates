# 🎣 Label genuine sales leads in Gmail with OpenAI GPT-4.1-mini

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Small business owners, freelancers and solo operators whose Gmail mixes real inbound sales interest with newsletters, vendor pitches and other noise. This workflow uses OpenAI to spot genuine sales leads and labels them in Gmail. It only adds a label; it never sends, deletes or drafts email.

## How it works
1. **Gmail Trigger** checks for new emails every minute.
2. **Settings** holds your business name, OpenAI model, the Gmail label to apply (default `AI/Lead`) and optional notes.
3. **OpenAI** (`gpt-4.1-mini` by default) decides whether each email is a genuine sales lead (someone who wants to buy from you) and returns strict JSON with `is_lead`, a short summary and a reason.
4. When `is_lead` is true, the workflow applies your label. If the label does not exist yet, it is created once (with its parent, `AI`) and then applied.
5. Cold pitches, newsletters and invalid AI output are skipped (treated as not-a-lead).
6. It only adds a label. It never sends, deletes or drafts email.

## Setup
1. Attach your **Gmail OAuth2** credential to **Gmail Trigger**, **Get Gmail Labels**, **Create Lead Label**, **Re-fetch Gmail Labels** and **Apply Gmail Label**, and your **OpenAI** credential to **Classify Email**.
2. Open **Settings**: set `business_name`, keep or change `openai_model` (default `gpt-4.1-mini`), optionally rename `lead_label` (the label is created automatically; for a nested label, write its full path, for example `AI/Lead`), and add plain-English `classification_notes` if you need them (for example, "Inbound demo requests from the website are always leads").
3. Send yourself a test enquiry, click **Execute workflow**, confirm the `AI/Lead` label appears, then flip the workflow to **Active**.

## Requirements
- n8n (Cloud or self-hosted, version 1.x or 2.x; built on 2.43.5)
- A Gmail / Google Workspace account
- An OpenAI API key (usage billed by OpenAI; with `gpt-4.1-mini` usually a fraction of a cent per email)

## Customization
- Change what counts as a lead in the **Classify Email** system prompt.
- Rename the label via `lead_label` in **Settings**. Use the full path for nested labels (for example `AI/Lead` or `Sales/Hot`). Missing labels are created automatically.
- Raise or lower `max_body_chars` to control how much of each email is sent to the model.
- Swap the OpenAI node for another provider's chat model with an LLM Chain if you prefer.

## 🔗 Nodes Used

Gmail, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
