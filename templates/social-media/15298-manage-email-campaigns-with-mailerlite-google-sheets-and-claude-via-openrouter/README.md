# 📱 Manage email campaigns with MailerLite, Google Sheets and Claude via OpenRouter

> ⚡ **152 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Email Marketing Manager

**What**
- Native n8n chat-operated AI employee for a single wellness SaaS brand
- Handles three intents: send campaign, report campaign, reactivate cold subscribers

**Why**
- Replace repetitive email manager execution work without pretending to replace brand judgment
- Keep v1 narrow, testable, and draft-first for internal lists

**Assumptions**
- Single brand only
- Draft first
- Reject unknown or mixed intents
- One shared context node handles default information for every intent.
- Generate subject + preview text + body
- Log only task, status, time, IDs, and notes

**Integrations** 
- MailerLite (core email platform)
- Google sheets
- OpenRouter (or any AI)


**Required setup before testing**
- Provide Openrouter credential or change it to openAI API. 
- Connect MailerLite HTTP Bearer Auth credential
- Connect Google Sheets OAuth2 credential
- Replace placeholder Google Sheet URL and verified sender email
- Replace Postgres DB with others for chat memory.


**SAMPLE INPUTS**

1. Send a campaign to long term VIP users.
    Goal: Introduce an early bird vip invite to personalised dietician. 
      Key message: tailored diet buddy early access.
      CTA: Link to website
      Timing: today

2. Give me a report  for all campaigns

3. I want to re-engage all the subscribers. Tempt with a free, limited time access (for 3 days) to personalised dietician. Share 1-2 reviews from customers on success with this feature. 
Real review data-{[ "I have to say I was skeptical at first, but I finally stopped emotional eating and have lost 3 lbs in 2 weeks!", "Been a long time user of Noom. Hit a ceiling and stopped using it. This new dietician helped me tweak my macros and micros for my vegetarian diet and back on track baby! Thanks guys 😍"]} 


**Enhancements** 
- Provide brand voice via  DB storage & retrieval for AI mail copy.
- Make the emails multi modal.
- Use RAG for context management & injecting better information to AI agent. (example : previous written samples) 
- Use native chat integrations for delivering to customers so you can integrate using Slack, WhatsApp, discord etc.
---------

**More AI Employees** 

I am building an AI employee roster, giving away 3 full templates with setup guides.
Get early access now: [AI Employee Roster](https://earnwithai.co.uk/ai-employee-roster/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Chat Trigger, Postgres Chat Memory, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
