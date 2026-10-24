# ⚡ Delay football goal alerts with API-Football, Google Sheets and Gmail

> ⚡ **136 views** · ⚡ [Personal Productivity](../)

## Description

**Your streaming service is 45 seconds behind live. Your phone notifications aren't. This workflow fixes that.**

Real-time alerts arrive before they happen on your screen. You're watching a corner kick, your phone buzzes with a goal notification, moment destroyed. This workflow monitors live match data, detects goals for your team, then holds the notification for however long your stream is lagging. Test your delay once, never get spoiled again.

### How it actually works

The schedule runs every 10 minutes, but here's the thing: it doesn't just blindly hit the API 144 times a day (which would blow through the free tier in like 18 hours). There's a timing check that reads your match kickoff from a Google Sheet and does the math: if you're more than 2 hours before or after the match, it just skips the whole thing. Saves about 80-90% of your rate limit for when matches are actually live.

Once you're inside the match window, the API call happens, and the data splits into two parallel branches (this took me forever to get right, more on that in a second):

**Branch 1 - Goal Detection:**
Parses the event feed, checks if any goals happened that aren't already in your "notified" log (stored in the Sheet as a comma-separated string—yeah, I know, but it works). If there are new goals, it logs them, waits for your delay (you set this once, like 45 seconds or whatever your service needs), then fires off an email via Gmail with the scorer, minute, score, opponent. Done.

**Branch 2 - Auto Reset:**
Reads the match status from the same API response. If it says FT (full time) or any of the finished codes (AET, PEN, CANC, etc.), it flips your `Active` column to "No" in the Sheet. This stops the polling automatically so you're not burning API calls after the match ends.


### Setup 

1. Make a Google Sheet with these columns: `User Email`, `Team ID`, `Active`, `Delay Seconds`, `Streaming Service`, `Match Datetime`, `Last Notified Goals`, `Last Notification`. Only the first six need data from you, the last two auto-populate.

2. Get an API-Football account (free tier is 100 requests/day). Grab your API key and find your team's ID from their docs.

3. Connect your Google Sheets OAuth in n8n (you'll use it in 3 different nodes) and your Gmail OAuth (1 node).

4. Replace `YOUR_SPREADSHEET_ID` in all the Google Sheets nodes with your actual Sheet ID (it's in the URL). Paste your API key into the HTTP Request node's headers.

5. Before a match: add the kickoff time in ISO format (`2026-06-15T15:00:00Z`), set your delay in seconds (test with 45-60 first), flip `Active` to "Yes". That's it.

### Who this is for

Football fans who are tired of the phone-muting game. Expats watching via VPN who have weird delays. Anyone who wants a free alternative to those paid spoiler blocker apps (which are like $5/month for something you can self-host in 15 minutes).

### What you need

- API-Football (free or paid, depending on how many matches you watch)
- Google account (Sheets + Gmail)
- n8n instance (cloud or self-hosted, doesn't matter)

### If you want to extend it

**Multi-channel:** Add Slack/WhatsApp nodes in parallel with Gmail so you get notifications everywhere.

**More events:** Tweak the goal detection code to also catch cards, subs, VAR decisions, it's all in the same API response.

**Auto-delay detection:** Right now you set the delay manually. You could build a lookup table that maps streaming services to known delays and auto-populate it.

√

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
