# 🎫 Manage Google reviews with Claude Sonnet, Supabase, and Slack

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs every three hours to dedupe and log new customer reviews in Supabase, uses Anthropic to analyze sentiment and draft public replies, requests Slack approval for risky cases, publishes approved responses via an HTTP endpoint, and stores structured feedback insights.

## How it works
1. Runs every 3 hours on a schedule to fetch the latest reviews (demo data that you can replace with the Google Business Profile Reviews API).
2. Checks Supabase for existing review IDs and filters out already-processed or duplicate reviews.
3. Processes each new review one at a time, using Anthropic to classify sentiment/topics/urgency and draft a concise public reply.
4. Routes the review by sentiment (positive/neutral/negative), then runs an additional AI escalation check and rule-based safeguards to decide if human approval is required.
5. Saves the full review record (analysis, drafted reply, priority, and statuses) to the Supabase `reviews` table.
6. If approval is required, posts the review and proposed response to Slack and waits for an approve/reject decision via a resume link (with a timeout).
7. Publishes approved replies to a configured HTTP endpoint (replace with the Google Business Profile Reply API), updates the review status in Supabase, notifies the owner in Slack for important cases, and saves a per-review insight to Supabase `feedback_insights`.

## Setup
1. Add Supabase credentials and create the `reviews` and `feedback_insights` tables with fields matching the workflow’s inserts/updates.
2. Add Slack OAuth2 credentials and set the channel ID used for approval requests and owner notifications.
3. Add an Anthropic credential (or n8n AI Gateway-managed Anthropic access) for the analysis, reply drafting, escalation check, and insight extraction steps.
4. Replace the demo “Get New Reviews” step with a real integration (for example, Google Business Profile Reviews API) and map the response to `review_id`, `customer_name`, `rating`, `review_text`, `review_date`, `business_id`, and `business_name`.
5. Replace the mock publish URL with your real review-reply endpoint (for example, Google Business Profile Reply API) and ensure it uses the workflow’s `final_response` text.

## Requirements
- Google Business Profile access: the client adds you as a manager on their listing, and you set up OAuth2 with the Business Profile API. This is needed to read reviews and post replies.
- Accounts and credentials: an OpenAI API key, a Supabase project with the reviews and feedback_insights tables, and a Slack workspace with the app invited to the channel.
- Business details: the business name, a business ID, the Slack channel ID, and the person who approves risky replies.
- Brand voice: the tone they want (formal, friendly, local language), the sign-off name, and a private contact (phone or email) to put in negative-review replies.
- Escalation rules: what counts as serious for them (refund, legal, safety, staff complaints), and who gets the Slack alert.

## Customization
- Reply tone: edit the system prompt in Generate AI Response (language, length, emoji or none, sign-off).
- Approval level: the default is human approval for ratings of 2 or below, risky keywords, or high urgency. Strict clients can require approval for every reply, and relaxed ones only for ratings of 1.
- Check frequency: change the Schedule Trigger from every 3 hours to hourly or daily.
- Alerts: change which reviews notify the owner (all 5-star and negative by default), or send to email or WhatsApp instead of Slack.
- Keywords and topics: adjust the risk keyword list in Build Review Record and the allowed topics (for example room_service or food for a hotel or restaurant).

## 🔗 Nodes Used

HTTP Request, Slack, Supabase, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
