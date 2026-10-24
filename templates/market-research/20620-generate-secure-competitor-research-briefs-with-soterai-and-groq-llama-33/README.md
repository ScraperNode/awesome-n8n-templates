# 📊 Generate secure competitor research briefs with SoterAI and Groq Llama 3.3

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow accepts a competitor research request via n8n Chat, a POST webhook, or manual run, screens it with SoterAI for prompt-injection risk, gathers web intelligence, and uses Groq (via LangChain) to produce an executive dossier with anti-poisoning and DLP checks.

## How it works
1. Receives a research topic from the n8n Chat UI, an HTTP POST webhook, or a manual trigger and normalizes it into a consistent request payload with a session ID.
2. Uses SoterAI’s inbound guard to enforce allowed research topics and block malicious or out-of-policy prompts, sending blocked requests to a SecOps alert endpoint and returning a 403 webhook response.
3. For approved requests, retrieves multiple web intelligence documents and associated metadata for the research topic.
4. Scans each retrieved document with SoterAI’s RAG anti-poisoning guard to quarantine indirect prompt injections and send web-poisoning alerts to a SecOps endpoint.
5. Aggregates only the verified documents into a single research corpus for analysis.
6. Uses a Groq-hosted Llama model through a LangChain agent (with a fee-calculation tool and short-term memory) to synthesize a structured executive competitive intelligence dossier from the verified corpus.
7. Applies an outbound SoterAI DLP guard to redact sensitive data and then returns the final dossier to the webhook caller and/or the n8n Chat UI along with security metadata.

## Setup
1. Add SoterAI credentials for the inbound query guard, RAG anti-poisoning scanner, and outbound DLP guard.
2. Add a Groq API credential for the LangChain chat model used by the research agent.
3. Replace the SecOps alert HTTP endpoints (currently set to https://httpbin.org/post) with your Slack incoming webhook, SIEM, or incident-management webhook URL and adjust the payload as needed.
4. If using the production webhook trigger, copy the POST webhook URL from n8n and configure your calling system to send a JSON body containing fields like researchTopic/query and optionally sessionId and targetCompany.

## Requirements
- • n8n version 0.8.7 or higher
- • n8n-nodes-soterai community node installed (v0.8.7 recommended)
- • Free Groq API account (or OpenAI API key)

## Customization
- • Replace the retriever node with live Tavily Search, Serper, or Firecrawl for live real-time internet scraping.
- • Connect Slack, Discord, or Notion to automatically publish executive briefs to your team channel.
- • Customize business focus areas (pricing, security compliance, APIs, customer sentiment) in the Prompt template.

## Additional info
• OWASP Top 10 for LLM compliant: addresses LLM01 (Prompt Injection & Indirect Prompt Injection) and LLM06 (Sensitive Information Disclosure).
• Zero LLM token wastage: flagged attacks and poisoned web pages are quarantined before reaching the Groq model.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Simple Memory, Code Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
