# 🔧 Send daily World Cup 2026 briefings to Slack with OpenAI GPT-5 Mini

> ⚡ **70 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow runs every morning in Asia/Dhaka, pulls FIFA World Cup 2026 fixtures, standings, teams, and stadium data from worldcup26.ir, uses OpenAI to generate a compact next-day briefing with Bangladesh-local kickoff times, and posts the report to a Slack channel.

## How it works
1. Runs daily at 07:00 (Asia/Dhaka) on a schedule trigger.
2. Calculates yesterday and tomorrow’s dates in Bangladesh time to define the reporting window.
3. Fetches games, group standings, team details, and stadium/host city information from the worldcup26.ir HTTP endpoints.
4. Merges the feeds, converts venue-local kickoff times to Asia/Dhaka, selects tomorrow’s fixtures (plus recent results and relevant standings), and builds a mobile-friendly briefing prompt.
5. Sends the prompt to an OpenAI chat model and generates a Slack-formatted matchday briefing.
6. Cleans and normalizes the generated text (or adds a fallback warning if empty) and posts it to the selected Slack channel with mrkdwn enabled.

## Setup
1. Add an OpenAI API credential for the OpenAI chat model used by the AI Agent.
2. Add a Slack OAuth2 credential and select the target Slack channel for the daily post.
3. Update the schedule cron expression if you want a different send time than 07:00 Asia/Dhaka.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
