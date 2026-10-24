# 🎬 Create and optimize B2B LinkedIn AI posts with Groq and Telegram alerts

> ⚡ **11 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow generates an AI-written LinkedIn post about business automation and AI using Groq models, audits and optimizes it through multiple review passes, validates the final output, and automatically publishes it to LinkedIn, with Telegram notifications for execution errors or failed validations.

## How it works
1. Runs on a schedule (or manually) to start the post creation process.
2. Uses Groq (via LangChain agents) to generate a LinkedIn post following a defined structure, length, emoji, and tone requirements.
3. Audits the generated post with Groq to score it against specific LinkedIn criteria, then parses the audit JSON for downstream steps.
4. Performs a marketing evaluation and then optimizes the post with Groq to produce a final JSON containing the hook, CTA, and the optimized post text.
5. Validates the optimizer’s JSON, quality score, and required formatting (including minimum length and a final question), then publishes the post to LinkedIn if it passes.
6. If validation fails, sends a Telegram message with the failure reason, waits one minute, and runs a second generation→audit→marketing→optimization→validation pass before attempting LinkedIn publishing again.
7. If the workflow execution errors at any point, sends the error details to Telegram.

## Setup
1. Add a Groq credential and ensure each Groq Chat Model node points to an available Groq model in your account.
2. Add LinkedIn credentials and confirm the target LinkedIn account permissions for the two “Create a post” actions.
3. (Optional) Add Telegram credentials and replace `YOUR_TELEGRAM_CHAT_ID` in both Telegram messages to receive validation and error notifications.
4. Adjust the schedule interval in the schedule trigger and customize the post prompts to match your audience, offer, and language.

## Customization
- je changerais par open ia pour une  meilleur performance 

## Additional info
on peut toujour remplacer le model par un plus performant comme open ia ou antropic

## 🔗 Nodes Used

Telegram, LinkedIn, Schedule Trigger, AI Agent, Simple Memory, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
