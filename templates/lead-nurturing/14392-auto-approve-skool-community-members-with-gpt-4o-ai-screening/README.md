# 💬 Auto-approve Skool community members with GPT-4o AI screening

> ⚡ **50 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# Auto-Approve Skool Community Members with AI Screening using GPT-4o

Automatically screen and approve Skool community membership requests using AI. Stop manually reviewing dozens of applications — let GPT-4o-mini evaluate each applicant based on your custom criteria and auto-approve qualified members.

## How it works

1. Runs on a schedule (every 6 hours by default)
2. Connects to your Skool community via the [Skool All-in-One API](https://apify.com/cristiantala/skool-all-in-one-api) on Apify
3. Fetches all pending member applications with their answers
4. GPT-4o-mini evaluates each application against your criteria (LinkedIn profile, answer quality, email validation)
5. Approved members are automatically accepted into your community
6. Rejected members stay pending for your manual review — no one gets auto-declined

## Perfect for

- **Skool community managers** handling high volumes of membership requests
- **Course creators** who want quality control without the manual work
- **Paid communities** that need to verify applicants before granting access
- **Anyone running a Skool group** who wants to save hours every week

## What makes this template unique

- **The only n8n template that can WRITE to Skool** — approve, reject, create posts, reply to comments
- **AI-powered screening** with customizable prompts — adapt criteria for any type of community
- **Detailed sticky notes** explain how to customize the AI prompt, choose alternative models (Claude, Gemini, Llama), and extend the workflow
- **Cookie-based auth** for fast operations (~2 seconds per action)

## Setup

1. Get an [Apify API token](https://console.apify.com/account/integrations) (free tier available)
2. Get an [OpenAI API key](https://platform.openai.com/api-keys)
3. Add both as credentials in n8n
4. Set your Skool email, password, and community slug in the **Config** node
5. Customize the AI screening prompt in the **AI Screen Applicant** node
6. **Test first** with the Approve Member node disconnected
7. Activate the workflow

## Customizing the AI prompt

The system prompt defines your screening criteria. Adapt it for your community:

- **Entrepreneurship community?** Check for LinkedIn, specific challenges, business experience
- **Fitness community?** Check for fitness goals, experience level, commitment
- **SaaS/Tech?** Check for company, role, technical background
- **Course community?** Check for learning objectives, prior knowledge

### Alternative AI models

You can replace GPT-4o-mini with:
- **GPT-4o** — More nuanced judgment, 10x cost
- **Claude 3.5 Haiku** — Similar speed and cost, use the Anthropic node
- **Gemini 2.0 Flash** — Google's fast model, use the Google AI node
- **Llama 3 via Ollama** — Free and self-hosted, use the Ollama node

## Requirements

| Service | What you need | Where to get it |
|---------|--------------|-----------------|
| Apify | API token | [apify.com/account/integrations](https://console.apify.com/account/integrations) |
| OpenAI | API key | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) |
| Skool | Admin access to your community | [skool.com](https://skool.com) |

## Built with

[Skool All-in-One API](https://apify.com/cristiantala/skool-all-in-one-api) — the most complete Skool automation on Apify. Read AND write: posts, comments with nesting, members, mentions, and more.

## 🔗 Nodes Used

Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
