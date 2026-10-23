# 📊 Track Japanese law amendments with the e-Gov Law API, Claude and Google Sheets

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow checks selected Japanese laws daily via the e-Gov Law API, compares the latest revision to the last watched revision, uses Anthropic Claude to explain article-level changes, logs results to Google Sheets, and posts a per-law summary to Slack.

## How it works
1. Runs every day on a schedule (or manually in demo mode to compare the two newest revisions).
2. Reads the current watch state from a Google Sheets “Watch” tab and builds a per-law list from the configured law IDs.
3. Calls the e-Gov Law API to fetch each law’s revision list and determines whether to baseline (first run), compare revisions (new change), or report an invalid law ID.
4. For laws with a new revision, fetches the old and new law texts from the e-Gov Law API and computes an article-by-article diff (including supplementary provisions).
5. Sends the changed-article excerpts to Anthropic Claude to generate a JSON explanation with verbatim before/after quotes, then validates the output against the diff (keys, quotes, and numbers) and formats a Slack-ready summary.
6. Writes detailed change rows to a Google Sheets “Changes” tab, posts one summary message per law to Slack, and updates the “Watch” tab with the newest revision so the next run compares from that point.

## Setup
1. Create a Google Sheets spreadsheet, paste its ID in the workflow’s Spreadsheet ID value, then run the “set up the sheet” branch once to create the “Watch” and “Changes” tabs and headers.
2. Add Google Sheets OAuth2 credentials and select the target spreadsheet in the Google Sheets nodes that read/write the Watch and Changes tabs.
3. Add an Anthropic credential for the Claude node.
4. Add a Slack credential, choose the target channel, and update the channel selection in the Slack message node.
5. Update the Config values for watched_laws (e-Gov law IDs), output_language, and the max_articles/max_chars limits to control how much text is sent for explanation.

## Requirements
- Anthropic API key (Claude Haiku 4.5 by default; one call per law that has a new version)
- Google account (Google Sheets OAuth2) and a blank Google Sheet
- Slack app that is a member of the channel you choose
- Law IDs of the laws you want to watch (the ID is in the e-Gov URL: laws.e-gov.go.jp/law/322AC0000000049 is the Labor Standards Act)
- The e-Gov Law API (Version 2) needs no API key. I found no usage terms or rate limit in its specification, so the fetches are spaced one second apart; check the e-Gov terms yourself before you rely on it
- Not legal advice: it points you to the articles to read

## Customization
- Config: law IDs, output_language (default Japanese), max_articles explained per law (default 10), max_chars of each article sent to Claude (default 1500)
- Change the schedule in "Every day" (default: daily at 8:00)
- Change the model in "AI: Explain the changes"
- Orders, ordinances and rules have their own IDs: list them like any law
- The Slack text is in Japanese; edit the "Check explanation" code to change it
- Run the Demo trigger first: it compares the two newest versions of each law and changes nothing

## Additional info
What the checks cannot catch:
- A passing check does not prove the explanation is right. In my test Claude said Article 115 of the Labor Standards Act now "unifies the wage claim period at five years". The five years were already in the old text; what changed was how the other claims and accident compensation are written. The quote and the number 5 are real, so every check passed. The code diff shown next to it is the real change: read the diff and the law.
- If a law is renumbered, the diff is noisy: articles are matched by position, not by meaning. The Subcontract Act, rewritten and renamed in 2025-2026, shows almost every article as "modified".
- Only the first 10 changed articles are explained; the rest are listed with the code diff. In my first run, 20 at once made Claude's answer too long to be valid JSON; all 20 were flagged "Needs review", none shown with a wrong explanation. I raised the output limit and lowered the default.
- The law_data JSON format is marked as a trial version in the API specification and may change. Claude's one-sentence overview of an amendment is not checked by code.

What I tested: the real e-Gov API on 3 laws (Labor Standards Act, Personal Information Protection Act, Subcontract Act): the demo, the first run (record), a run with an older remembered version (the amendment was found, logged and sent; the Watch tab was updated), a second run (nothing happens), and a wrong law ID (reported in Slack). Plus 30 unit checks of the code. One run each; that is not a measure of accuracy.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
