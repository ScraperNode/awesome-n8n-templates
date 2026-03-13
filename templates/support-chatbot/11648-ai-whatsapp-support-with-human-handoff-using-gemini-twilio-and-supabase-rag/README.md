# 💬 AI WhatsApp support with human handoff using Gemini, Twilio, and Supabase RAG

> ⚡ **556 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Quick Overview
What it is: An n8n workflow that enables AI-first WhatsApp support with seamless human handoff.
Why it’s unique: The AI agent answers queries using RAG (Supabase vector store + Gemini). If a human intervenes, the AI steps down. If there’s no human reply within 2 hours, the AI resumes.
Channel constraints: Respects WhatsApp’s 24-hour customer care window and requires approved message templates for out-of-window messages.
# How It Works
AI-first: Incoming WhatsApp messages are routed to an AI agent (Gemini) with knowledge grounded by a Supabase vector store.
**Human-in-the-loop**: When a human responds in the dashboard, AI pauses for 2 hours for that conversation.
**Auto-resume**: If no human reply within 2 hours, AI automatically resumes.
**Compliance**: Only responds within 24 hours of the user’s last message, or via approved templates when outside this window.
### Architecture (At a Glance)
Transport: Twilio WhatsApp; n8n http node.
RAG: Supabase (Postgres + embeddings) stores knowledgebase.
LLM: Google Gemini (free API key supported).
Handoff: Human dashboard (GitHub project) logs and labels AI vs Human responses, and controls AI pause/resume.
**Prerequisites**
n8n (self-hosted or cloud) with public webhook access.
Twilio account with a WhatsApp-enabled number.
Supabase project for vector store.
Google Gemini API key.
Human dashboard: https://github.com/shadrack-ago/whatsapp-dashboard.git
Setup Steps (n8n + Integrations)
Import workflow in n8n
Create new workflow → Import from JSON → Paste the provided JSON.
Enable the workflow.
Create credentials
Twilio: Add TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER. Do NOT paste real secrets publicly.
Gemini: Add GEMINI_API_KEY.
Supabase: Add SUPABASE_URL, SUPABASE_ANON_KEY (or service role where needed), and your table/bucket names.
Connect Twilio WhatsApp
WhatsApp Business setup in Twilio, or Sandbox for testing.
Point Twilio incoming webhook to your n8n webhook URL.
Ensure approved templates for any out-of-window messaging.
Set environment variables (examples)
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1...
GEMINI_API_KEY=...
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
SUPABASE_TABLE=knowledge_base
EMBEDDING_MODEL
HUMAN_TIMEOUT_MS=7200000 (2 hours)
Human-in-the-loop dashboard
Follow the repo guide: https://github.com/shadrack-ago/whatsapp-dashboard.git
Run the dashboard and connect it to the same conversation store used by the workflow.
Verify that human responses are captured and labeled; confirm AI pause/resume logic.
Supabase for RAG
Create table(s) for documents and embeddings.
Ingest content per this tutorial:[Supabase Tutorial ](https://youtu.be/5uw1wE6niGc?si=hLd8m_PdcH4tts5m)
Confirm your n8n nodes query the vector store before calling Gemini.
Gemini setup
Get API key: [Gemini API](https://aistudio.google.com/api-keys)
Set model (e.g., gemini-pro or latest available in your environment).
Test
Send a WhatsApp message to your Twilio number.
Observe AI response.
Trigger a human reply via the dashboard → confirm AI pauses for that thread.
Wait 2 hours or adjust HUMAN_TIMEOUT_MS to test auto-resume.
Customization
Providers: You can swap Twilio for Meta’s WhatsApp Cloud API; keep the 24-hour and template rules.
Tone/Policies: Adjust system prompts and fallback behaviors in the LLM node.
RAG Quality: Tune chunking, TOP_K, and embedding model for better retrieval.
Timeouts: Change HUMAN_TIMEOUT_MS to alter handoff duration.
WhatsApp Policy Notes
24-hour window: Replies must occur within 24 hours of user’s last message; otherwise use an approved template.
Templates: Create and get approval inside Twilio/Meta before sending out-of-window messages.
Security & Reliability
Secrets: Store all keys in n8n credentials or environment variables. Never commit secrets to repos.
Logging: Use the dashboard to audit AI vs Human messages.
Rate limits: Add retry/backoff nodes for Twilio and LLM calls.
Troubleshooting
No replies: Check Twilio webhook URL and n8n workflow is active.
Policy blocks: Ensure template use outside 24-hour window.
Poor answers: Improve RAG data, increase TOP_K, refine prompts.
Handoff not pausing: Verify dashboard is writing the “human active” flag that the workflow reads.
Links
Human dashboard (Full guide): [GitHub Repo Link](https://github.com/shadrack-ago/whatsapp-dashboard.git)

## 🔗 Nodes Used

HTTP Request, Twilio, Google Drive, Google Drive Trigger, Supabase, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
