# 🎯 Automate LinkedIn post summaries to Slack with AI and Apify

> ⚡ **336 views** · 🎯 [AI Summarization & Classification](../)

## Description

## Turn LinkedIn Noise Into Weekly Slack Insights 🚀

What if your team could skim the *best* of LinkedIn in 2 minutes instead of scrolling for hours?  
This workflow transforms raw LinkedIn posts into a **bite-sized Slack digest** — summarized, grouped, and delivered automatically every week.

---

## ⚡ What It Does
- **Scrapes Posts Automatically**: Pulls fresh posts from LinkedIn profiles you specify (via Apify).
- **Summarizes with AI**: Condenses each post into **2–3 bullets** (≤15 words).
- **Keeps It Lean**: Digest capped at **500 words total**.
- **Organized by Author**: See exactly who said what, without searching.
- **Delivers to Slack**: Neatly formatted digest drops in your channel on schedule, with post links in thread replies.

---

## 🛠 How It Works
1. **Google Sheets → Profile URLs**  
   Add LinkedIn profile URLs into a Google Sheet tab — this is your watchlist.

2. **Apify Scraper → Posts**  
   Fetches up to 10 posts per profile within the past 7 days.

3. **Clean & Format**  
   Code nodes strip out clutter (hashtags, broken links, escapes).

4. **OpenAI Summarizer**  
   AI rewrites posts into concise bullets and trims the digest under 500 words.

5. **Slack Delivery**  
   Digest posts directly in Slack every Sunday morning, with original links attached as thread replies.

---

## ✅ Pre-conditions / Requirements
- **Google Sheets API credentials** connected in n8n.  
- **Apify account + API Token** for the LinkedIn profile posts actor.  
- **OpenAI API Key** for summarization.  
- **Slack Bot Token** with permission to post messages in your chosen channel.  
- Profiles you want to track must be publicly viewable or accessible to Apify.

---

## 🎛 Customization Options
- **Schedule**: Change the Cron node if you prefer daily or monthly digests.  
- **Batch Size**: Default is 5 profiles per batch — increase or decrease for performance.  
- **Summaries**: Adjust OpenAI system prompt to allow longer or shorter bullet points.  
- **Filters**: Extend `extendOutputFunction` to exclude reposts, sponsored posts, or keep specific authors only.  
- **Slack Output**: Change formatting, channel, or send as direct message instead of posting in a channel.  

---

## 💡 Why This Is Valuable
- Saves your team **3–5 hours/week** of scrolling.  
- Keeps everyone updated with **actionable insights, not filler**.  
- Turns a chaotic LinkedIn feed into a **signal-only digest**.  
- Positions you as the one who always brings the smartest highlights to the table.  

---

## 🎯 Best For
- Founders who want LinkedIn insights without endless scrolling.  
- Marketing and growth teams tracking thought leaders.  
- Operators who want *signal over noise*, delivered straight to Slack.

---

No more mindless scrolling. Just sharp insights, automatically packaged. ✅

## 🔗 Nodes Used

Cron, Google Sheets, HTTP Request, Slack, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
