# 💬 Auto-reply to Udemy student Q&A with Mistral AI and Google Sheets

> ⚡ **36 views** · 💬 [Support Chatbots](../)

## Description

## Stop Drowning in Repetitive Udemy Student Questions

If you teach on Udemy at any meaningful scale, you already know the problem: 80% of student messages are variations of the same handful of questions, but every one of them needs a thoughtful reply to keep your response rate up and your reviews healthy. Meanwhile, the *actually* important messages — students asking about other courses you offer, career advice, coaching opportunities — get buried in the noise and answered late, if at all.

This workflow fixes that. It connects to Udemy's Instructor API, pulls every unreplied message thread, and routes each one to one of two destinations:

- **Auto-reply** — for technical questions, course clarifications, greetings, and routine support, an AI agent (Mistral Large primary, Claude Sonnet 4.5 fallback) generates a context-aware Markdown response in your voice and posts it back to Udemy automatically
- **Escalate to you** — for sales opportunities, refund requests, complaints, personal questions, and anything genuinely ambiguous, you get an email with the message and a deep link to your inbox so you can respond personally

The result: you reply faster, students get help quicker, and you never miss a high-value conversation that could turn into another course enrollment.

## What's Inside

- **Smart routing logic** — A structured-output AI agent decides between auto-reply and escalation based on 18+ explicit rules covering sales triggers, complaint detection, scope ambiguity, and conversation openers
- **Full conversation context** — Pulls the entire thread history into the AI's prompt so replies feel continuous, not robotic
- **Per-thread memory isolation** — Redis-backed chat memory with unique session keys per conversation, so threads never bleed into each other
- **Built-in research** — Jina AI deep research tool lets the agent verify technical claims before answering instead of hallucinating
- **Audit trail** — Every message, reply, AI confidence score, and escalation reason is logged to Google Sheets for review and quality control
- **Markdown output** — Replies post in clean Markdown that Udemy renders natively (no HTML soup)
- **Self-loop prevention** — Skips threads where you replied last to avoid awkward double-responses

## Use Case

Built for Udemy instructors with growing course catalogs who want to maintain personal, high-quality Q&A responsiveness without spending hours per week typing the same answers. Especially valuable if you run multiple courses, sell premium offerings (coaching, consulting, advanced courses), or care about your response-rate metric on Udemy's instructor dashboard.

## Required Services

- Udemy Instructor API access (free, available to all instructors)
- Mistral Cloud, Anthropic, OpenAI, and Jina AI accounts (combined cost: ~$0.001–0.005 per message)
- Google Sheets, Gmail, and a Redis instance (free tiers fine)

Comprehensive setup instructions are baked into the workflow as sticky notes — column schema, global constants, and credential mapping all documented inline.

## Tags

`udemy` `ai-agent` `customer-support` `mistral` `claude` `gpt` `google-sheets` `gmail` `redis` `automation` `online-teaching` `creator-economy`

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
