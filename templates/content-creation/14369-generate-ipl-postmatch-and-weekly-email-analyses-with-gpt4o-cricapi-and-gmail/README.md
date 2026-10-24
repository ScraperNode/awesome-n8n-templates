# 🎬 Generate IPL post‑match and weekly email analyses with GPT‑4o, CricAPI and Gmail

> ⚡ **189 views** · 🎬 [Content Creation & Video](../)

## Description

## 📊 Description
The scoreboard shows you what happened. This workflow tells you why it happened. Every time an IPL match ends this automation detects the completed result, fetches the full scorecard, and sends it to GPT-4o which produces a detailed journalist-style post-match analysis — innings breakdowns, tactical decisions, key turning points, player of the match, and what the result means for both teams. Every Monday it also generates a weekly roundup digest covering all the week's matches in one beautifully designed email.
Built for sports media companies, IPL fan platforms, cricket newsletters, and automation agencies who want to produce expert-level match analysis at scale without a dedicated editorial team.

## What This Workflow Does
⏰ Polls CricAPI every 30 minutes for recently completed IPL matches
📋 Checks the Match Log sheet to avoid analyzing the same match twice
🏏 Detects new completed IPL matches and saves them to the Match Log
🧮 Computes both innings run rates and builds a structured analytical prompt
🤖 Sends full match context to GPT-4o which generates a complete post-match analysis
📧 Assembles the analysis into a branded HTML email and sends it immediately after the match
📝 Logs every analysis to the Analysis Log sheet with match name, winner, and player of match
📊 Every Monday reads all analyses from the past 7 days and generates a weekly roundup
🤖 GPT-4o writes the weekly digest with match recaps, player of the week, and next week preview
📧 Sends the weekly roundup as a branded HTML email every Monday at 9AM

## Key Benefits
✅ Fully automatic — detects match completion and triggers analysis without manual input
✅ Duplicate prevention — never analyzes the same match twice
✅ GPT-4o writes like a cricket journalist not a data report
✅ Two email formats — immediate post-match deep dive and weekly roundup digest
✅ Complete audit trail across two Google Sheets
✅ Falls back to any completed T20 when IPL is off-season so testing always works
✅ Clean termination on both IF nodes — no dangling branches

## How It Works

SW1 — Match Completion Detector Every 30 minutes the workflow fetches all current and recent matches from CricAPI and reads the Match Log sheet. The Code node filters for completed IPL T20 matches by checking that the match name contains IPL or Indian Premier League, the match type is T20, and both matchStarted and matchEnded are true. It then compares every completed match against the set of already-analyzed match IDs in the Match Log. If a new unanalyzed match is found it gets saved to the Match Log with analyzed set to false and all scorecard data flows forward into the analysis engine. If no new match is found an IF node stops the workflow cleanly.

SW2 — Deep Dive Analyzer The match data flows directly from SW1 into the analysis prompt builder. The Code node computes run rates for both innings and assembles a structured prompt containing both innings stats, the match result, and clear instructions for GPT-4o to act as a cricket journalist. GPT-4o returns a headline, 3-4 sentence match summary, separate tactical breakdowns for each innings, three key moments that decided the match, an overall tactical assessment, player of the match with reasoning, and a one-sentence forward-looking note. The response is parsed and assembled into a branded HTML email with a dark blue header, score display, color-coded analysis sections, and a player of the match spotlight. The email is sent immediately and both Google Sheets are updated to record that this match has been analyzed and the email has been sent.

SW3 — Weekly Digest Every Monday at 9AM the workflow reads all rows from the Analysis Log and filters for entries from the past 7 days. If matches exist GPT-4o generates a weekly roundup covering the week's headline, individual one-liner recaps for each match, player of the week, the biggest talking point or controversy, and a preview of the upcoming week. The response is assembled into a branded weekly roundup email and sent. If no matches were analyzed in the past 7 days the workflow stops cleanly without sending a blank email.

## Features
- 30-minute polling for match completion detection
- Dynamic IPL match filtering — no hardcoded IDs
- Duplicate prevention via Match Log sheet lookup
- Both innings run rate computation
- GPT-4o post-match analysis with 8 structured output fields
- Immediate post-match email delivery
- Weekly Monday digest with recaps, POTW, talking point, and preview
- Two branded HTML email templates with dark blue cricket theme
- Two Google Sheets for match tracking and analysis history
- IF nodes with No Operation fallbacks on both SW1 and SW3
- Fallback to any completed T20 for off-season testing

## Requirements
- CricAPI account and API key — free tier at cricapi.com
- OpenAI API key (GPT-4o access)
- Google Sheets OAuth2 connection
- Gmail OAuth2 connection

## Setup Steps
- Sign up at cricapi.com and get your free API key
- Create a Google Sheet called "IPL Post Match Analyzer" with 2 sheets — Match Log and Analysis Log
- Add the correct column headers to both sheets.
- Paste your Sheet ID into all Google Sheets nodes
- Connect Google Sheets OAuth2 credentials
- Add your OpenAI API key to both OpenAI nodes
- Add your Gmail OAuth2 credentials and set your email in both Gmail nodes
- Activate the workflow — the system runs itself from here

## Target Audience
📺 Sports media companies automating post-match editorial content
🏏 IPL cricket newsletters and fan platforms delivering expert analysis
🤖 Automation agencies building cricket intelligence products for media and franchise clients
📱 Fan apps that want to surface match analysis without hiring a commentary team

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
