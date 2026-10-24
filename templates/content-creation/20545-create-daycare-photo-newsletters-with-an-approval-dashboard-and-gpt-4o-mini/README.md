# 🎬 Create daycare photo newsletters with an approval dashboard and GPT-4o-mini

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow serves a web dashboard for daycare staff and uses OpenRouter (OpenAI GPT-4o-mini) plus n8n Data Tables to generate, edit, and approve per-child daily newsletter drafts from uploaded photos and staff notes.

## How it works
1. Receives a GET request on the `/newsletter-app` webhook and loads active children plus any newsletter records for today from n8n Data Tables.
2. Merges each child with today’s newsletter status and renders an HTML dashboard page that staff can use on mobile or desktop.
3. When staff uploads 1–3 photos and an optional memo, the dashboard sends a POST request to `/newsletter-app/generate` to create a draft.
4. The workflow validates the request, sends the photos and memo to OpenRouter (OpenAI GPT-4o-mini) to generate a single newsletter text capped at 100 characters, and returns the draft text.
5. It saves or updates the newsletter in the `newsletters` Data Table with status “下書き”, storing the AI text, final text, memo, photo count, and photo data.
6. When staff requests a rewrite, a POST to `/newsletter-app/regenerate` reloads the stored memo/photos, generates a new draft via OpenRouter, updates the newsletter record, and returns the refreshed text.
7. When staff approves the edited text, a POST to `/newsletter-app/approve` updates the newsletter status to “承認済み” with the final text and an approval timestamp.

## Setup
1. Add an OpenRouter API credential and select it in both HTTP Request steps that call `https://openrouter.ai/api/v1/chat/completions`.
2. Create n8n Data Tables named `children` and `newsletters`, and ensure `children` includes an `is_active` field and `newsletters` includes fields such as `newsletter_id`, `child_id`, `date`, `status`, `ai_text`, `final_text`, `staff_memo`, and the photo fields used in this workflow.
3. Copy your `/webhook/newsletter-app` URL from the GET webhook and open it in a browser to access the dashboard (and ensure your n8n instance is reachable from staff devices).

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
