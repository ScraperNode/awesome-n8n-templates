# 🎣 Qualify Facebook leads with ElevenLabs voice calls, Supabase and Slack

> ⚡ **133 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow captures new Facebook Lead Ads submissions, stores them in Supabase, and uses ElevenLabs Conversational AI (via Twilio outbound calls) to auto-qualify leads during business hours. When the call completes, it updates the lead record and notifies your team via Slack and Gmail based on the outcome.

## How it works
1. Triggers when a new Facebook Lead Ads form submission is received.
2. Normalizes the lead fields, checks Supabase for an existing record by Facebook lead ID, and skips duplicates.
3. Inserts the new lead into a Supabase leads table and checks whether the current time is within your configured calling window.
4. If within calling hours, sends an HTTP request to ElevenLabs to start an outbound AI phone call to the lead and updates Supabase with the conversation ID and call status, or logs a failure and alerts the team in Slack.
5. If outside calling hours, updates the lead in Supabase as queued for manual callback and posts an after-hours notification to Slack.
6. Receives an ElevenLabs post-call webhook, extracts the transcript, summary, qualification, and booking signals, and updates the matching Supabase lead record by call ID.
7. Routes the result as booked, qualified (no booking), or other, then sends a tailored Slack message and (for booked and qualified) a detailed Gmail email including the transcript.

## Setup
1. Connect credentials for Facebook Lead Ads, Supabase, Slack, and Gmail OAuth2.
2. Create/configure an ElevenLabs Conversational AI agent with a Twilio-linked phone number and add an HTTP Header Auth credential for the ElevenLabs API.
3. Create a Supabase `leads` table (or update the table name) with fields used by the workflow such as `fb_lead_id`, `call_id`, `status`, `call_status`, transcript and summary fields.
4. Select the Facebook Page and Lead Form in the Facebook Lead Ads trigger.
5. Fill in the Configuration and Notification Settings values (ElevenLabs agent ID, phone number ID, business timezone/hours, notification email, and Supabase table name) and choose the target Slack channel(s) in each Slack step.
6. Copy the webhook URL from the “ElevenLabs Call Complete” trigger and paste it into your ElevenLabs agent’s post-call webhook configuration so call results are sent back to n8n.

## Additional info
# Qualify Facebook lead ads with an AI voice agent and Supabase
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Qualify-Facebook-lead-ads-with-an-AI-voice-agent-and-Supabase-3a03d6550fd98175864fc792bb2b0671)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail, Supabase, Facebook Lead Ads Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
