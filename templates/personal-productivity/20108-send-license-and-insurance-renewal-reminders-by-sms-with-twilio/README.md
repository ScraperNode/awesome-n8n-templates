# ⚡ Send license and insurance renewal reminders by SMS with Twilio

> ⚡ **2 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs daily and uses Twilio SMS to remind you about upcoming or overdue license and insurance renewals from a text list, with optional “Done” links via an n8n webhook to roll repeating items forward and stop one-time reminders.

## How it works
1. Runs every day at 8:00 AM (or starts when you open a “Done” link webhook) and loads your renewal list and reminder settings.
2. Parses each line into a tracked renewal item with a due date, optional repeat interval, and optional note, and validates phone numbers, time zone, and n8n base URL for links.
3. On the daily run, determines which items are on a configured reminder offset, due today, overdue (optionally repeating every N days), and optionally compiles a monthly look-ahead for the next set number of days.
4. Builds a single SMS message (including per-item “Done?” links when enabled) and skips sending if the workflow already ran that day.
5. Sends the SMS through the Twilio REST API. If Twilio accepts it, the queued text is cleared; if not, the text is kept and goes out again with the next morning's run, for up to three days.
6. When a “Done?” link is tapped, updates the item in workflow static data by rolling repeating items to the next due date or marking one-time items complete, then returns an HTML confirmation page with an Undo link. A used or out-of-date link changes nothing.

## Setup
1. Add a Twilio API credential and select it in both Twilio HTTP Request steps used to look up your account and send SMS.
2. Update “Your settings” with your Twilio phone number (From), your mobile number (To), your time zone, and your n8n base URL for the “Done?” links (or set done_links to false).
3. Enter your renewal items in the provided `name | due date | repeat | note` format and adjust reminder offsets, overdue frequency, and monthly outlook settings as needed.
4. Publish the workflow. The “Done?” links use its production webhook (/webhook/renewal-done), so your n8n must be reachable from your phone. The first text arrives the next morning at 8.

## Requirements
- A Twilio account and number that can text your own cell (in the US that means A2P 10DLC registration or a verified toll-free number)
- An n8n instance your phone can reach for the Done links (n8n Cloud, or self-hosted with a public URL). Set done_links to false if yours is not reachable
- No database or spreadsheet: the list lives in the Your settings node and the rolled dates in the workflow's static data

## Customization
- Add, change or remove lines in items, one per line: name | due date | repeat | note. Repeat takes yearly, monthly, quarterly, every 2 years, every 6 months, any "every N days, weeks, months or years", or none
- Change remind_days to choose how many days ahead you hear about each item (default 60, 30, 14, 7, 3, 1, 0)
- Change overdue_every_days to repeat overdue items every few days instead of daily, or set it to 0 to stop overdue repeats
- Set monthly_outlook to false to skip the look ahead on the 1st of the month, or change outlook_days to look further out (default 90)
- Change the send time on the Every morning at 8 node, and set the workflow time zone so 8 AM is your 8 AM
- To get the reminders by email instead, replace the Text you node and change the Went out? check to match the new node's output

## Additional info
Tested live on n8n Cloud with a real Twilio number, plus 61 automated checks. Test notes and the texts it sends: https://github.com/mikematthewsai/n8n-renewal-reminders-sms

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
