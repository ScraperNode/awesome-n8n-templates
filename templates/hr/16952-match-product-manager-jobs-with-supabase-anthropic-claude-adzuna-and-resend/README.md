# 👥 Match product manager jobs with Supabase, Anthropic Claude, Adzuna, and Resend

> ⚡ **244 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
 This workflow ingests job postings from Greenhouse/Lever/Ashby job boards, Adzuna, and RemoteOK into a Supabase jobs pool, then daily uses Anthropic Claude to score a short list against a single candidate profile and emails the best matches via Resend.


## How it works
1. Runs every 3 hours to fetch job listings from curated Greenhouse, Lever, and Ashby ATS boards, Adzuna searches, and the RemoteOK API.
2. Parses each source into a common job format (title, company, location, URL, description, and posted date).
3. Deduplicates jobs, drops postings older than 90 days, marks “fresh” jobs, and upserts the results into a Supabase `jobs` table.
4. Runs daily at 08:00, loads the single role profile and pulls up to 15 fresh jobs from Supabase that roughly match the role keyword.
5. Removes jobs already matched for that role using the Supabase `user_job_matches` table, then batches the remaining jobs and sends them to Anthropic Claude for fit scoring.
6. Keeps jobs at or above the configured minimum score, saves the new matches back to Supabase, and sends an HTML email digest to the role’s email address via Resend.
7. If any execution fails, an error workflow formats the failure details and sends an alert email using the Resend API.

## Setup
1. Create a Supabase project, add `jobs` and `user_job_matches` tables (as described in the notes), and set `YOUR_SUPABASE_URL` and `YOUR_SUPABASE_SERVICE_ROLE_KEY` in the Supabase HTTP requests and the Supabase node credential.
2. Add your Adzuna `app_id` and `app_key` in the Adzuna API request node.
3. Set an `ANTHROPIC_API_KEY` environment variable in n8n (or replace the header with a credential) so the Anthropic Messages API request can score jobs.
4. Add a Resend API key, update `fromEmail`, `YOUR_RESEND_API_KEY`, and the alert recipient (`YOUR_ALERT_EMAIL@example.com`), and verify a sending domain if needed.
5. Edit the Role profile (email, function keyword, acceptable locations, and `min_score`) to match the candidate you want to run daily scoring for.

## Requirements
- Anthropic API key (paid, for Claude scoring)
- Supabase project (free tier)
- Adzuna app_id + app_key (free)
- Resend API key with a verified sending domain 
- Greenhouse, Lever, Ashby, and RemoteOK need no key

## Customization
- Adjust the Set Search Queries node, the ATS board list, the freshness window, the Claude scoring prompt, batch size, and min_score to target different roles, locations, or quality bars

## 🔗 Nodes Used

HTTP Request, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
