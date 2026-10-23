# 🎬 Generate real-time IPL commentary from CricAPI data with GPT-4o

> ⚡ **280 views** · 🎬 [Content Creation & Video](../)

## Description

## 📊 Description
IPL fans expect more than a scoreboard. They want to know what the score means — is the batting team ahead of the game, is the chase getting away from them, who has the pressure right now. This workflow answers all of that automatically by fetching live IPL match data every 6 minutes, computing key cricket indicators, and sending everything to GPT-4o which generates a punchy 2-sentence analyst-style narrative ready to embed in any fan app, widget, or dashboard without a single line of custom backend code.
Built for fantasy cricket platforms, sports media companies, IPL fan apps, and broadcast technology teams who want to add intelligent real-time commentary to their products without hiring a commentary team or training machine learning models.

## What This Workflow Does
⏰ Fires automatically every 6 minutes between 2PM and 11PM covering all IPL match windows
🌐 Accepts manual triggers via webhook for on-demand narrative generation at any time
🏏 Fetches all current cricket matches from CricAPI in real time on every execution
🔍 Dynamically identifies the live IPL match from the API response — no hardcoded match IDs
🧮 Detects which innings is active and computes all key match indicators automatically
🤖 Sends structured match context to GPT-4o which generates a 2-sentence human-sounding narrative
📝 Logs every narrative to Google Sheets with full match context for audit and analytics
📤 Returns a clean JSON response via webhook that any app or widget can poll in real time
⚠️ Fires an email alert if any node fails so you always know when the workflow needs attention

## Key Benefits
✅ Fully dynamic — no hardcoded match IDs, works across the entire IPL season
✅ Handles both 1st and 2nd innings with different logic and prompts per scenario
✅ GPT-4o sounds like a human analyst not a notification system
✅ Webhook response makes it embeddable in any fan app or widget instantly
✅ Complete match log in Google Sheets — every narrative timestamped and stored
✅ Falls back to any live T20 match when IPL is off-season so testing never breaks
✅ Error trigger ensures failures never go unnoticed

## How It Works

Trigger Layer Two triggers run this workflow. The Schedule Trigger fires every 6 minutes between 2PM and 11PM IST covering both day games starting around 3:30PM and evening games starting around 7:30PM. The Webhook Trigger provides a manual entry point so developers can fire the workflow on demand for testing or to power a real-time polling architecture where a frontend app hits the webhook URL every few minutes to get the latest narrative. Both triggers feed into the same API call so the logic is completely identical regardless of how the workflow was triggered.

Data Fetch & Match Detection A single HTTP Request node fetches all current cricket matches from CricAPI's /v1/currentMatches endpoint. The Code node then scans the response and dynamically finds the live IPL match by checking that the match name contains "IPL" or "Indian Premier League", the match type is T20, and the match has started but not ended. No match IDs are hardcoded anywhere — the workflow finds the right match on every execution. When IPL is not in season the workflow falls back to any live T20 match so development and testing are never blocked.

Indicator Computation Once the match is identified the Code node detects which innings is active based on how many score entries the API returns. For the 1st innings it computes the current run rate, overs remaining, wickets in hand, projected total, match phase (Powerplay / Middle / Death), and pressure level. For the 2nd innings it additionally computes the required run rate, runs needed, run rate gap between RRR and CRR, and a pressure index based on how difficult the chase is becoming. Both scenarios produce a structured flat object that gets assembled into a context-rich GPT-4o prompt tailored to the specific innings situation.

AI Narrative Generation The prompt is sent to GPT-4o via HTTP Request with a system prompt that instructs the model to write exactly 2 sentences, use the specific numbers provided, sound like a human cricket analyst, use cricket language fans understand, and never use percentages. The result is a narrative like "Mumbai Indians need 45 off 24 balls with 7 wickets in hand — the muscle is there but one collapse changes everything. Jasprit Bumrah has to be kept for the final two overs or this chase gets away from Kolkata." The narrative is then parsed from the API response and passed to both output nodes.

Output & Logging Every narrative is appended to a Google Sheets log with the full match context — timestamp, match name, innings, current over, score, target, RRR, CRR, phase, pressure level, and the narrative text. This creates a complete over-by-over record of every narrative generated across the entire match. Simultaneously the Respond to Webhook node returns a clean JSON payload containing the match name, innings, score, over, phase, pressure, narrative, and timestamp — ready for any frontend app or dashboard to consume directly.

## Features
- Cron-based schedule trigger covering all IPL match hours
- Manual webhook trigger for on-demand generation and frontend polling
- Single API call architecture — one HTTP node, no unnecessary API calls
- Dynamic live IPL match detection — no hardcoded IDs
- 1st innings mode — CRR, projected total, wickets in hand, phase, pressure
- 2nd innings mode — RRR, CRR, run rate gap, runs needed, overs remaining, pressure
- Three-tier match phase detection — Powerplay, Middle overs, Death overs
- Pressure index computation based on RRR and wickets
- GPT-4o via HTTP Request — stable across all n8n versions
- Structured system prompt enforcing 2-sentence format and cricket language
- Google Sheets append logging with full match context per narrative
- Webhook JSON response for real-time frontend integration
- No Operation node on false branch for clean workflow termination
- Workflow-level Error Trigger with Gmail alert on any failure

## Requirements
- CricAPI account and API key — free tier at cricapi.com
- OpenAI API key (GPT-4o access)
- Google Sheets OAuth2 connection
- Gmail OAuth2 connection (for error alerts)

## Setup Steps
- Sign up at cricapi.com and get your free API key
- Create a Google Sheet called "IPL Win Probability Log" with the columns listed above
- Paste your Sheet ID into the Google Sheets node
- Connect your Google Sheets OAuth2 credentials
- Add your OpenAI API key to the Authorization header of the GPT-4o HTTP Request node in the format Bearer YOUR_KEY
- Connect your Gmail OAuth2 credentials to the error alert node
- Activate the workflow

## Target Audience
🏏 Fantasy cricket platforms who want to add real-time match intelligence to their user experience
📱 IPL fan apps and cricket portals looking for AI-generated commentary without a commentary team
📺 Broadcast technology teams building real-time graphics and insight widgets
🤖 Automation agencies building sports intelligence products for IPL franchise and media clients

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
