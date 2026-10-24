# 📱 Send a daily AI news digest using Google News, GPT-4o-mini, Sheets and Gmail

> ⚡ **214 views** · 📱 [Social Media & Email Marketing](../)

## Description

### Description

Add your news topics to a Google Sheet once — with keywords, article limits, and an Active toggle — and every morning at 7AM a personalized news digest lands in your inbox automatically. The workflow fetches fresh articles from Google News for each active topic, parses the RSS feed to extract titles, sources, and timestamps, and uses GPT-4o-mini to write a clear 3-sentence summary per article. All summaries are grouped by topic, assembled into a styled HTML email with dark section headers and article cards, sent to your inbox via Gmail, and logged to a Digest Log sheet with topic count, article count, and sent time. Built for anyone who wants a personalized daily news briefing without manually visiting news sites or curating articles each morning.

---

## What This Workflow Does

- **Reads active topics from Google Sheets and skips paused ones** — You control which topics appear in your digest by setting Active to TRUE or FALSE — no need to delete rows to pause a topic
- **Fetches fresh articles from Google News RSS per topic** — Each topic's keywords are used to build a live Google News RSS query so you always get today's articles
- **Respects per-topic article limits** — Each row in your Topics sheet has a Max Articles column so you can get 5 articles for important topics and 2 for lower-priority ones
- **Skips topics with no results today** — If Google News returns nothing for a topic on a given day, that topic is silently skipped rather than breaking the workflow
- **Summarizes each article in 3 plain sentences** — GPT-4o-mini reads the article title and description and writes a factual, no-bullet summary so you can scan the digest quickly
- **Groups all summaries into one styled HTML email** — Articles are organized by topic with dark headers, article cards, source attribution, and time-ago labels — all ready to read in any email client
- **Logs every digest run to Google Sheets** — Date, topics count, articles found, and sent time are saved in a Digest Log tab so you can track your daily coverage

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- Google Sheets (two tabs: **Topics** and **Digest Log**)
- OpenAI account with GPT-4o-mini API access
- Gmail account

### Credentials Required
- Google Sheets OAuth2 (used in **2. Google Sheets — Read Topics** and **12. Google Sheets — Log Digest**)
- OpenAI API key
- Gmail OAuth2

&gt; ⚠️ **Two separate Google Sheet IDs are used** — replace `YOUR_GOOGLE_SHEET_ID` in **2. Google Sheets — Read Topics** and `YOUR_LOG_SHEET_ID` in **12. Google Sheets — Log Digest**. These can be the same spreadsheet or different ones — just make sure each uses the correct Sheet ID.

&gt; ⚠️ **Your email address** — replace `YOUR_EMAIL_ADDRESS` in **11. Gmail — Send Digest Email** with the inbox where you want to receive your daily digest.

**Estimated Setup Time: 20–25 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Create your Topics tab** — Open your Google Sheet → add a tab named **Topics** → add these 4 column headers in row 1: `Topic`, `Search Keywords`, `Max Articles`, `Active` → add your first topics with Active set to `TRUE`

   Example rows:
   | Topic | Search Keywords | Max Articles | Active |
   |---|---|---|---|
   | AI News | artificial intelligence 2025 | 3 | TRUE |
   | Cricket | india cricket latest | 2 | TRUE |

3. **Create your Digest Log tab** — In the same spreadsheet or a new one → add a tab named **Digest Log** → add these 5 column headers: `Date`, `Topics Count`, `Articles Found`, `Email Sent`, `Sent At`

4. **Get your Google Sheet ID for Topics** — Open the spreadsheet containing the Topics tab in a browser → copy the string between `/d/` and `/edit` in the URL

5. **Connect Google Sheets for reading topics** — Open node **2. Google Sheets — Read Topics** → replace `YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID → click the credential dropdown → add Google Sheets OAuth2 → authorize access

6. **Get your Digest Log Sheet ID** — If the Digest Log tab is in the same spreadsheet, use the same Sheet ID; if it is a different spreadsheet, open it and copy that Sheet ID

7. **Connect Google Sheets for logging** — Open node **12. Google Sheets — Log Digest** → replace `YOUR_LOG_SHEET_ID` with the correct Sheet ID → confirm Google Sheets OAuth2 is selected

8. **Connect OpenAI** — Open node **9. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

9. **Set your email address** — Open node **11. Gmail — Send Digest Email** → replace `YOUR_EMAIL_ADDRESS` in the Send To field with your actual email address

10. **Connect Gmail** — Open the same node **11. Gmail — Send Digest Email** → click the credential dropdown → add Gmail OAuth2 → complete the Google authorization flow

11. **Activate the workflow** — Toggle the workflow to Active — it will run automatically every day at 7AM. To test immediately, click on node **1. Schedule — Every Day 7AM** and use the manual Execute option.

---

## How It Works (Step by Step)

**Step 1 — Schedule: Every Day 7AM**
The workflow fires automatically every day at 7AM using the cron expression `0 7 * * *`. It can also be triggered manually using the Execute option in n8n.

**Step 2 — Google Sheets: Read Topics**
All rows from your Topics tab are read. Each row contains a topic name, search keywords, max articles limit, and Active status.

**Step 3 — IF: Active Topics Only**
This filter checks the Active column for each row. If it equals `TRUE` (YES path), the topic is included and passes forward to the RSS fetch. If it is `FALSE` or blank (NO path), the topic is silently skipped — no error is thrown. This lets you pause any topic without deleting it from the sheet.

**Step 4 — HTTP: Fetch Google News RSS**
For each active topic, the Search Keywords value is used to build a Google News RSS URL — for example `https://news.google.com/rss/search?q=artificial+intelligence+2025&hl=en-US`. The RSS feed is fetched as plain text.

**Step 5 — Code: Parse RSS + Extract Articles**
The RSS XML text is parsed using regex to extract individual article items. For each item, the title, link, description, source name, and publication date are extracted. HTML tags are stripped from the description. A time-ago label is calculated (e.g. "3 hours ago") from the publication date. Only up to the Max Articles limit for that topic are kept. The output is one object containing the topic name and the articles array.

**Step 6 — IF: Has Articles?**
This check confirms whether any articles were found for this topic today. If the articles array has results (YES path), the topic proceeds to splitting and summarizing. If no articles were returned (NO path), the topic is silently skipped — the rest of the workflow continues normally with other topics.

**Step 7 — Code: Split Into Individual Articles**
The articles array is split into individual rows — one per article — each carrying the topic name, article title, link, description, source, time-ago, and publication date. Every article then flows through GPT separately.

**Step 8 — AI Agent: Summarize Article**
GPT-4o-mini receives the article title, description, and source for each article. The system prompt instructs GPT to write exactly 3 sentences in plain English — factual and specific, no bullet points, no formatting, maximum 60 words total. The 3 sentences are returned as plain text separated by line breaks.

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model powering the article summaries.

**Step 10 — Code: Build HTML Email**
All summarized articles from all topics are collected together. They are grouped by topic name. For each topic, an emoji is assigned from a built-in map (🤖 for AI News, 🏏 for Cricket, ₿ for Bitcoin, ⚙️ for n8n, 🚀 for Startup India, 📰 for everything else). The HTML email is assembled with a dark header showing today's date, a blue stats bar with topic and article counts, topic sections with dark header blocks, and article cards with the article title as a link, source and time-ago, the 3-sentence summary, and a "Read full article →" link. The email is truncated to 4000 characters if needed. Total topic and article counts are also returned for the log step.

**Step 11 — Gmail: Send Digest Email**
The formatted HTML email is sent to your address via Gmail. The subject line is automatically set to `☀️ Your Daily News Digest — [Date]`. The sender name is set to "Daily News Digest".

**Step 12 — Google Sheets: Log Digest**
One row is appended to your Digest Log tab with today's date, the number of topics that had articles, the total article count, Email Sent set to Yes, and the time the email was sent.

---

## Key Features

✅ **Active toggle per topic** — Set Active to FALSE in the sheet to pause any topic without deleting it — it is excluded from that day's digest and re-included when you set it back to TRUE
✅ **Per-topic article limits** — Each topic has its own Max Articles setting so you can get more coverage on high-priority topics and less on lower-priority ones
✅ **Topics with no results are silently skipped** — If Google News has nothing for a topic on a given day, it is skipped without breaking the workflow or generating an empty section in the email
✅ **Emoji auto-assigned per topic** — Topics like AI News, Cricket, and Bitcoin get recognizable emojis in the email header — making sections instantly scannable
✅ **Time-ago labels on every article** — Each article card shows how recently it was published (e.g. "2 hours ago") so you can tell at a glance which news is freshest
✅ **Styled HTML email — no setup required** — The email uses inline CSS with dark headers, article cards, and a footer — readable in Gmail, Outlook, and Apple Mail without any template configuration
✅ **Daily run logged to Google Sheets** — Every digest run is recorded with topic and article counts so you can track coverage trends over time

---

## Customisation Options

**Add a new topic** — In your Topics tab, add a new row with the topic name, search keywords (any words or phrase you would search on Google News), your preferred article limit, and Active set to TRUE — it will appear in the next morning's digest.

**Change the digest delivery time** — In node **1. Schedule — Every Day 7AM**, edit the cron expression from `0 7 * * *` to a different time — for example `0 6 * * *` for 6AM or `0 8 * * 1-5` for weekdays only at 8AM.

**Add more topic emojis** — In node **10. Code — Build HTML Email**, add entries to the `topicEmojis` object — for example `'Finance': '💰'` or `'Sports': '⚽'` — so your new topics get a matching icon.

**Add a Slack notification alongside the email** — After node **11. Gmail — Send Digest Email**, add a Slack step that posts the topic count, article count, and a note that the digest has been sent to a `#news-digest` channel.

**Target a specific country in RSS results** — In node **4. HTTP — Fetch Google News RSS**, edit the URL to change `&hl=en-US&gl=US&ceid=US:en` to a different locale — for example `&hl=en-IN&gl=IN&ceid=IN:en` for India-specific news results.

---

## Troubleshooting

**Workflow not triggering at 7AM:**
- Confirm the workflow is Active — inactive workflows do not run on a schedule
- Check that your n8n instance is running at 7AM — self-hosted instances that are off will not fire scheduled workflows
- Check your n8n server's timezone setting — the cron expression runs based on server time, which may differ from your local timezone
- To test immediately, click on node **1. Schedule — Every Day 7AM** and use the manual Execute option

**No topics appearing in the email (digest sent with no articles):**
- Confirm your Topics tab has at least one row with Active set to exactly `TRUE` (not `true` or `True`) — the filter check is case-insensitive but the value must be present
- Confirm `YOUR_GOOGLE_SHEET_ID` in node **2. Google Sheets — Read Topics** is replaced with your actual Sheet ID
- Open the execution log of step 3 to check how many rows passed the active filter

**Articles not loading for a specific topic:**
- The Search Keywords for that topic may be too specific or produce no results on Google News — try broader keywords or check the topic's keywords work in a direct Google News search
- Open the execution log of node **4. HTTP — Fetch Google News RSS** and check the raw RSS response — if it is empty or returns an error, the keywords or URL format may be incorrect
- Some topics may simply have no new articles on a given day — the workflow skips them silently; this is expected behavior

**Gmail failing to send:**
- Confirm the Gmail OAuth2 credential in node **11. Gmail — Send Digest Email** is connected and not expired — re-authorize if needed
- Confirm `YOUR_EMAIL_ADDRESS` in the Send To field is replaced with a valid email address
- Check your Gmail account's daily sending limit — if you send many test runs, you may approach Gmail's limit

**Google Sheets log not saving rows:**
- Confirm `YOUR_LOG_SHEET_ID` in node **12. Google Sheets — Log Digest** is replaced with your actual Sheet ID — note this may differ from the Topics Sheet ID
- Confirm the tab is named **Digest Log** exactly and all 5 column headers in row 1 match exactly
- Check that the Google Sheets OAuth2 credential is connected in node 12 — it is easy to authorize in node 2 but forget in node 12

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
