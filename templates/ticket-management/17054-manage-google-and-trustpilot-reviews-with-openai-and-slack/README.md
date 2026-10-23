# 🎫 Manage Google and Trustpilot reviews with OpenAI and Slack

> ⚡ **63 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs hourly to fetch new Google Business Profile and Trustpilot reviews, deduplicates them, uses OpenAI via a LangChain agent to draft sentiment-aware replies, escalates negative reviews in Slack, and routes positive replies to Slack for approval before posting the reply back to Trustpilot.

## How it works
1. Runs every hour on a schedule.
2. Fetches the latest reviews from the Google Business Profile API and the Trustpilot API and combines the results.
3. Deduplicates reviews by tracking previously seen review IDs in workflow static data and stops if there are no new reviews.
4. Processes each new review and uses OpenAI (via a LangChain agent) to generate structured JSON containing sentiment, a draft reply, and an optional suggested resolution.
5. Sends negative reviews to a Slack channel for the owner along with the suggested resolution.
6. Sends positive draft replies to Slack for one-tap approval (with a 24-hour timeout) and, if approved, publishes the reply to the Trustpilot API.
7. Sends a Slack alert to the ops channel if the workflow errors.

## Setup
1. Configure authentication and replace placeholders for the Google Business Profile reviews endpoint (account and location) in the Google reviews HTTP request.
2. Configure Trustpilot API authentication, set your business unit ID in the fetch URL, and ensure the reply endpoint can post to `v1/reviews/{reviewId}/reply`.
3. Add an OpenAI credential for the Chat Model node (model set to gpt-5-mini) used by the LangChain agent.
4. Add a Slack OAuth credential and set the channel IDs for owner alerts, review approvals, and ops error notifications.
5. Review the agent system message to match your brand voice and confirm the sentiment schema (positive/negative) fits your routing needs.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
