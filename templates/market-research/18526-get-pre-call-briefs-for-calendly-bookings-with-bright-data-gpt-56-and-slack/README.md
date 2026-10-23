# 📊 Get pre-call briefs for Calendly bookings with Bright Data, GPT-5.6 and Slack

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow triggers from a Calendly booking (or a manual n8n form), researches the invitee’s company using Bright Data for LinkedIn, website, and news lookups, generates a short pre-call brief with OpenAI GPT-5.6, and posts the brief to a Slack channel.

## How it works
1. Triggers when a Calendly invitee is created, or when you submit the “Brief me on this person” n8n form.
2. Extracts the person, work email, company/domain, meeting time, and notes, and skips enrichment for free-mail addresses that don’t map to a company.
3. Uses Bright Data SERP to search Google for the company’s LinkedIn page, then fetches the LinkedIn company record from a Bright Data dataset.
4. Uses Bright Data Web Unlocker to read the company homepage and extract a short positioning/pitch summary.
5. Uses Bright Data SERP to search recent Google News results for the company and keeps a small set of matching headlines.
6. Combines the research into an evidence block, asks OpenAI GPT-5.6 to write a <200-word brief (who they are, what changed, three questions, one thing to avoid), and posts the formatted brief and sources to Slack.

## Setup
1. Add a Calendly connection (for the invitee.created trigger) and/or plan to use the included n8n form trigger for manual testing.
2. Add a Bright Data HTTP Header Auth credential and ensure the configured zones exist (SERP zone and Web Unlocker zone).
3. Add an OpenAI credential and confirm the model name used (gpt-5.6-terra) is available in your account.
4. Add a Slack credential, then set the target channel name in the workflow settings (the slack_channel value and the Slack message channel) to the channel where briefs should be posted.

## 🔗 Nodes Used

HTTP Request, Slack, Calendly Trigger, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
