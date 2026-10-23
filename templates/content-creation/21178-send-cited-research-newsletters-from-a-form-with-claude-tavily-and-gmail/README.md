# 🎬 Send cited research newsletters from a form with Claude, Tavily and Gmail

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a newsletter brief via an n8n form, uses Tavily web search plus Anthropic Claude to plan and write cited sections, validates links against search results, and then assembles and delivers the finished newsletter as a Gmail draft or sends it directly.

## How it works
1. Receives a newsletter request from an n8n form with a topic, target audience, tone, and number of sections.
2. Searches the web with Tavily for an initial scan of the topic and sends the results to Anthropic Claude to generate a JSON plan with section titles and search queries.
3. Iterates through each planned section, runs a focused Tavily search, and has Anthropic Claude write the section using only the provided search results and explicit citations.
4. Removes any links Claude included that are not present in Tavily’s returned URLs and sanitizes the section HTML to safe email-friendly tags.
5. Combines all sections, deduplicates sources into a single numbered list, and generates a summary of section takeaways.
6. Uses Anthropic Claude to write the email subject line, preheader, and intro, then assembles the full HTML newsletter.
7. Creates a Gmail draft by default or sends the newsletter email immediately when delivery mode is set to "send".

## Setup
1. Add an Anthropic credential for the Claude steps used to plan sections, write sections, and generate the subject and intro.
2. Create an HTTP Bearer Auth credential with your Tavily API key and select it for both Tavily HTTP requests.
3. Connect a Gmail credential for creating drafts and sending emails.
4. Update the Settings values (at minimum `send_to`, and optionally `delivery_mode`, `sender_name`, `words_per_section`, `search_depth`, and `search_window`).
5. Open the form trigger URL in n8n and share it only with trusted users, since anyone with the link can submit requests using your API quota.

## Requirements
- Anthropic API key, Tavily API key (free tier works) and a Gmail account.

## Customization
- Edit the form's tone options, or change section length, search depth and time window in **Settings**.

## 🔗 Nodes Used

HTTP Request, Gmail, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
