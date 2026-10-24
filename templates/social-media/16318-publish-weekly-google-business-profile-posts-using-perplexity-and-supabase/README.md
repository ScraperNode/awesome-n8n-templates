# 📱 Publish weekly Google Business Profile posts using Perplexity and Supabase

> ⚡ **227 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs every Monday at 9AM ET to research recent automation topics with Perplexity, generate a Google Business Profile post with Anthropic Claude, publish it to Google Business Profile, log the published post to Supabase, and send a confirmation email via Microsoft Outlook.

## How it works
1. Runs every Monday at 9AM ET on a schedule.
2. Fetches the 8 most recent published posts from a Supabase table to avoid repeating topics and angles.
3. Selects a rotating industry and post category, then asks Perplexity to research timely examples, trends, or statistics based on that theme.
4. Combines the research and recent-post history into a detailed writing prompt and generates a GBP-ready post using Anthropic Claude.
5. Cleans and trims the generated post to stay under Google Business Profile character limits.
6. Publishes the post to Google Business Profile with a “Learn more” call-to-action link, then logs the published content back to Supabase and emails you the live post details via Microsoft Outlook.

## Setup
1. Add credentials for Supabase (REST API), Perplexity, Anthropic, Google Business Profile OAuth2, and Microsoft Outlook OAuth2.
2. Update the Supabase REST endpoints (YOUR-PROJECT) and ensure a `gbp_posts` table exists with fields like `post_text`, `category`, and `published_at` for fetching and logging posts.
3. Set your Google Business Profile account ID and location ID, and confirm the call-to-action URL and type in the publish step.
4. Replace the email recipient address in the Outlook step with the address that should receive publishing notifications.
5. Adjust the schedule (timezone/day/time) if you want the workflow to run at a different posting cadence.

## Additional info
The workflow reads your last 8 published posts before choosing the next topic, so the schedule keeps a varied editorial calendar instead of repeating the same angle every week. The rotating industry and category picker is a plain list you can edit to match whatever you actually sell.

Two things worth adjusting before you run it: the "Learn more" call-to-action URL in the publish step, and the character trim, which is set for Google Business Profile's limit.

Questions or help getting it running: support@priscgroup.com

Built by PRISC Group. Automate. Relentlessly. Ruthlessly.

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Microsoft Outlook, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
