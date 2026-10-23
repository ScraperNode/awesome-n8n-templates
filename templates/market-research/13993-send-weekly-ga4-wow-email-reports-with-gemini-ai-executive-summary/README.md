# 📊 Send weekly GA4 WoW email reports with Gemini AI executive summary

> ⚡ **266 views** · 📊 [Market Research & Insights](../)

## Description

## Weekly Google Analytics 4 Report - Full WoW Tracking & Auto-Generated with Gemini AI

Stop manually building weekly analytics reports. This workflow automatically fetches your GA4 data every Monday morning, generates an AI-written executive summary using Gemini, builds a premium formatted HTML email with deep Week-over-Week (WoW) comparisons for *every* metric, and delivers it straight to your stakeholders' inboxes — fully hands-free.

## 👤 Who is this for?

* **Marketing teams** and **agency owners** who report GA4 metrics weekly to clients
* **Product managers** and **founders** who want a Monday morning performance digest
* **Freelancers** managing analytics for multiple clients who want to automate reporting
* Anyone who spends 30–60 minutes every week manually pulling GA4 numbers and calculating WoW changes

## 🚩 What problem does this solve?

Manual GA4 reporting is repetitive, error-prone, and time-consuming. This template eliminates that entirely — every Monday at 8:00 AM in your configured timezone, a fully formatted report lands in your inbox. With the new dual-node architecture, it automatically calculates accurate WoW trends for your overall metrics, specific pages, traffic sources, and more, all contextualized by a Gemini-generated executive summary.

## ⚙️ What this workflow does

1. **⏰ Triggers every Monday at 8:00 AM** via the Schedule Trigger node
2. **📡 Fetches 14 GA4 reports in parallel** - pulling both *Current Week* and *Previous Week* data simultaneously for speed:
    - Overview metrics
    - Top 5 Screens / Pages by views
    - Top 5 Traffic Sources / Referrals
    - Top 5 Events by count
    - Top 5 Countries by sessions
    - Device breakdown (mobile / desktop / tablet)
    - New vs Returning users


3. **🔀 Merges all 14 responses** and passes the complete historical dataset forward
4. **🤖 Gemini writes a 3-5 bullet point summary** analyzing the full WoW dataset to highlight performance trends, audience behaviour, and actionable recommendations
5. **🧮 Code node processes all data** - aligns current vs. previous week data, calculates WoW % changes for *every single category*, handles new/dropped entries, and builds the full inline-CSS HTML email
6. **📧 Sends the report** via standard SMTP / Email node to your configured recipients

## 📧 What the email report includes

* **Header** - dark luxury card with 4 KPI tiles (Users, Sessions, Bounce Rate, Avg Duration) and WoW arrows
* **AI Executive Summary** - 3-5 bullet point Gemini-generated insight (hidden automatically if Gemini fails)
* **Overview Table** - all 5 core metrics with This Week / Last Week / WoW % change pill badges
* **Audience** - New vs Returning users with visual progress bars and WoW changes
* **Top Screens** - ranked by views, including previous week values and WoW trend pills. `(not set)` and `(empty)` rows are preserved for transparency
* **Traffic Sources** - top referral channels with WoW changes; direct traffic auto-labelled as `Direct / App Open`
* **Top Events** - tracks interaction trends with WoW changes; system events (first_open, os_update, etc.) are filtered out automatically
* **Geography** - top 5 countries by sessions with WoW comparisons
* **Devices** - mobile / desktop / tablet with visual progress bars and WoW trend pills

## 🛠️ Setup Instructions

### Step 1 - Google Analytics 4 Credential

1. Go to n8n Credentials → Add new → search **Google Analytics OAuth2**
2. Sign in with the Google account that has access to your GA4 property
3. Assign this credential to all **14** GA4 nodes

### Step 2 - Set your GA4 Property ID

1. Open each of the **14** GA4 nodes
2. In the **Property ID** field, replace `{YOUR_PROPERTY_ID}` with your GA4 numeric property ID
3. Find your Property ID at: **GA4 Admin → Property Settings → Property ID** (looks like `123456789`)

### Step 3 - Gemini API Credential

1. Get your free API key at [aistudio.google.com](https://aistudio.google.com/api-keys)
2. Go to n8n Credentials → Add new → search **Google Gemini**
3. Paste your API key and assign it to the `Generate AI Summary` node

### Step 4 - Email / SMTP Credential

1. Go to n8n Credentials → Add new → search **SMTP** (or swap the node for Gmail OAuth2 if preferred)
2. Enter your email host, port, and login credentials
3. Assign to the `Send Weekly Report` node

### Step 5 - Set Recipients

1. Open the `Send Weekly Report` node (or the Code node depending on your mapping preference)
2. Update the **To Email** field with your recipient address(es): `'email@example.com, email2@example.com'`
3. Alternatively, update the `recipients:` line at the bottom of the `Build Report & Email HTML` Code node.

### Step 6 - Set Timezone

1. Open the `Weekly Monday Trigger` node
2. Update the workflow settings to match your local timezone so the 8:00 AM trigger fires correctly.

## 🔧 How to Customise

* **Change the schedule** → Open the trigger node, adjust the day and time to any cadence you need (daily, bi-weekly, monthly)
* **Change the client brand in the footer** → Search for `AppStoneLab Technologies` in the Code node and replace it with your client or company name
* **Filter or change events** → In the Code node, find the `EXCLUDE_EVENTS` array and add/remove event names to control which events appear in the report
* **Change the AI summary language or tone** → Edit the prompt inside the `Generate AI Summary` Gemini node to match your client's preferred reporting style

## 📦 Requirements

| Service | Purpose | Free Tier Available |
| --- | --- | --- |
| Google Analytics 4 | Source of all report data | ✅ Yes |
| Google Gemini API | AI executive summary generation | ✅ Yes (via AI Studio) |
| SMTP / Email | Email delivery | ✅ Yes |

## ⚠️ Notes

* **Mobile app properties** - If your GA4 property tracks a mobile app, the workflow uses `unifiedScreenName` instead of `pagePath`, which works correctly for both web and app properties
* **WoW calculations** - Bounce rate change is intentionally inverted (a decrease is shown as positive/green). If a metric like a specific page or country is new this week, the workflow dynamically tags it as "New" instead of breaking the calculation.
* **Gemini failure handling** - If the Gemini node fails for any reason, the AI summary section is automatically hidden and the rest of the report sends normally
* **Execute Once** - All 14 GA4 nodes have Execute Once enabled to prevent duplicate rows from the merge operation

## 🔗 Nodes Used

Send Email, Google Analytics, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
