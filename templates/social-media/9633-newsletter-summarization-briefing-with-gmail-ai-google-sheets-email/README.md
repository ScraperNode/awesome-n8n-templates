# 📱 Newsletter summarization & briefing with Gmail, AI, Google Sheets & Email

> ⚡ **1,891 views** · 📱 [Social Media & Email Marketing](../)

## Description

Your inbox is overflowing with daily newsletters: Public Affairs, ESG, Legal, Finance, you name it.
You want to stay informed, but reading 10 emails every morning? Impossible.

What if you could get one single digest summarizing everything that matters, automatically?

❌ No more copy-pasting text into ChatGPT
❌ No more scrolling through endless email threads
✅ Just one smart, structured daily briefing in your inbox



## Who Is This For

Public Affairs Teams: Stay ahead of political and regulatory updates—without drowning in emails.
Executives & Analysts: Get daily summaries of key insights from multiple newsletters.
Marketing, Legal, or ESG Departments: Repurpose this workflow for your own content sources.



## How It Works
 1. Gmail collects all newsletters from the day (based on sender or label).
 2. HTML noise and formatting are stripped automatically.
 3. Long texts are split into chunks and logged in Google Sheets.
 4. An AI Agent (Gemini or OpenAI) summarizes all content into one clean daily digest.
 5. The workflow structures the summary into an HTML email and sends it to your chosen recipients.



## Setup Guide
 • You’ll need Gmail and Google Sheets credentials.
 • Add your own AI Model (e.g., Gemini or OpenAI) with an API key.
 • Adjust the prompt inside the “Public Affairs Consultant” node to fit your topic (e.g., Legal, Finance, ESG, Marketing).
 • Customize the email subject and design inside the “Structure HTML-Mail” node.
 • Optional: Use Memory3 to let the AI learn your preferred tone and style over time.


## Cost & Runtime

Runs once per day.
Typical cost: ~$0.10–0.30 per run (depending on model and input length).
Average runtime: &lt;2 minutes.

## 🔗 Nodes Used

Send Email, Google Sheets, Gmail, Schedule Trigger, LangChain Code, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
