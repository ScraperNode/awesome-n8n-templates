# ⚡ Send a daily AI-ranked job match digest with Anthropic and Gmail from 6+ boards

> ⚡ **81 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow runs every morning to pull jobs from multiple free job boards (and optional Adzuna), filters and de-duplicates results, scores each role against your resume and preferences using Anthropic, then emails a ranked digest via Gmail.

## How it works
1. Runs every morning at 08:00 using a schedule trigger.
2. Builds a list of job board API URLs (RemoteOK, Remotive, Arbeitnow, Jobicy, Himalayas, TheMuse, and optional Adzuna) based on your search settings.
3. Fetches job listings from each board over HTTP.
4. Normalizes all responses into a single job format, applies your filters (title keywords, tags, locations/remote, salary, and excluded terms), and de-duplicates roles across boards.
5. Sends your resume, preferences, and the short-listed jobs to an Anthropic-powered AI agent to return a structured fit score, fit reason, risk/concerns, and a tailored first-person pitch for each job.
6. Keeps only roles at or above your minimum score, ranks them by score, and generates an HTML email digest with links and source board attribution.
7. Sends the digest to your target address using Gmail.

## Setup
1. Add an Anthropic API credential, select an Anthropic chat model, and keep the structured output parser enabled for consistent scoring output.
2. Add a Gmail credential with permission to send email from your account.
3. In the configuration step, paste your resume and fill in your profile, preferences, position keywords, locations/remote setting, excluded terms, minimum score, maximum jobs, and recipient email address.
4. (Optional) Add your Adzuna app ID, app key, and country codes to include Adzuna search results.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
