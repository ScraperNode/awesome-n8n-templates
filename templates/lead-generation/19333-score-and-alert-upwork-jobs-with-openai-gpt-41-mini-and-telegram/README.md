# 🎣 Score and alert Upwork jobs with OpenAI GPT-4.1-mini and Telegram

> ⚡ **8 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Searches Upwork every 15 minutes using the GraphQL API, loads matching preferences from a dynamic profile.md file, filters and scores new jobs with an AI chat model, sends high-scoring opportunities to Telegram, and stores processed jobs in an n8n Data Table to prevent duplicate alerts.

## How it works
1. Runs every 15 minutes on a schedule.
2. Loads a profile.md file over HTTP, extracts a JSON configuration block, and validates required fields and defaults.
3. Builds one Upwork GraphQL search request per configured search lane and fetches the latest job postings using Upwork OAuth2.
4. Normalizes job data, applies deterministic filters (age, budget floors, blocked keywords), deduplicates within the run, and skips jobs already stored in the upwork_seen_jobs n8n Data Table.
5. On the first run with “seed” behavior or for deterministically rejected jobs, records the job as seen without sending any alert.
6. For remaining jobs, prompts an OpenAI chat model to score fit and draft a proposal opening, then decides whether to alert based on the configured score thresholds.
7. Sends a formatted HTML alert to Telegram for jobs above the threshold and upserts each processed job (alerted or not) into the upwork_seen_jobs table to prevent reprocessing.

## Setup
1. The workflow automatically creates or reuses the upwork_seen_jobs Data Table when required.
2. Host a profile.md file containing the required profile-config JSON block and enter its raw URL in Runtime Settings.
3. Add your Upwork OAuth2 credential to the Upwork GraphQL request node.
4. Add an OpenAI API credential, or connect another compatible chat model for scoring and proposal generation.
5. Add your Telegram bot credential and enter the destination Telegram chat ID in Runtime Settings.
6. Run the workflow manually once to verify profile loading, Upwork access, AI scoring, Telegram delivery, and Data Table storage before activating the schedule.

## Requirements
- An n8n instance with Data Tables and AI/LangChain nodes available.
- Upwork API access with OAuth2 credentials that can search marketplace job postings.
- An OpenAI API credential, or another compatible chat model configured in n8n.
- A Telegram bot credential and the Telegram chat ID where job alerts should be delivered.
- A publicly accessible raw URL for profile.md, such as a GitHub raw file URL.

## Customization
- Edit profile.md to define skills, experience, preferred job types, search queries, rates, budgets, and blocked keywords.
- Adjust AI scoring weights, minimum alert score, and high-priority score inside profile.md.
- Change the workflow schedule from the default 15-minute interval to your preferred monitoring frequency.
- Replace the included OpenAI chat model with another n8n-compatible AI model if preferred.
- Extend Telegram notifications to Slack, WhatsApp, email, Discord, or other notification channels.
- Change first-run behavior between seed mode, which records existing jobs silently, and alert mode.

## Additional info
This workflow only monitors, filters, scores, and notifies users about Upwork job opportunities. It does not automatically submit proposals, spend Connects, contact clients, or perform other Upwork account actions. Freelancer-specific matching rules are stored in profile.md rather than hard-coded into the workflow, allowing the same template to be reused by different users. API keys, OAuth tokens, Telegram bot tokens, and other secrets should always be stored using n8n Credentials and never inside profile.md. The default first-run seed behavior prevents users from receiving a large number of alerts for jobs that existed before monitoring was enabled.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
