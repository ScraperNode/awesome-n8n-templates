# 🎣 Scrape LinkedIn hiring posts with Apify and save qualified leads to Google Sheets

> ⚡ **698 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

&gt; 📊 **See real sample data this workflow collects:**
&gt; [View Sample Google Sheet →](https://docs.google.com/spreadsheets/d/1E3fxJDn8E-q6Z4Ietptb18R-WJUuslFtDqZ4zrPE41c/edit?gid=0#gid=0)

Stop manually searching LinkedIn every day. This workflow runs every 6 hours, scrapes LinkedIn posts, filters out all the noise, confirms real hiring intent, and saves only clean, qualified leads to your Google Sheet — automatically.

**Pre-configured for n8n automation roles, but fully customizable for any job title, skill, or tool.**

---

## What it does

- Scrapes LinkedIn post search results using Apify for your target keywords
- Removes noise posts (tips, self-promo, events, tutorials, engagement bait)
- Filters out job seekers posting "hire me" or "open to work"
- Detects genuine hiring intent using 35+ hiring phrases
- Handles LinkedIn bold/italic Unicode text — so formatted posts like 𝗪𝗲'𝗿𝗲 𝗛𝗶𝗿𝗶𝗻𝗴 are correctly detected
- Matches your target job titles and tool name (fully customizable)
- Extracts emails, phone numbers, WhatsApp links, and apply links from each post
- Prevents duplicates across all runs using a two-layer system (fingerprint + DataTable)
- Saves every clean lead to Google Sheets with author name, LinkedIn profile, post URL, job type, and contact info

---

## Who it's for

**Freelancers** — find clients posting for your exact skill before anyone else responds

**Automation agencies** — build a steady pipeline of inbound hiring signals

**Job seekers** — catch real job posts the moment they go live on LinkedIn

**Anyone** — swap keywords and job titles to track any role in any industry

---

## How it works (Step by Step)

1. **Schedule Trigger** — runs automatically every 6 hours
2. **Get Posts** — Apify scrapes LinkedIn posts from your custom search URLs
3. **Generate Fingerprint** — catches duplicate posts within the same run
4. **Database Check** — skips posts already seen in any previous run using LinkedIn post URN
5. **Removing Noise** — filters out thought leadership, tutorials, events, and self-promo
6. **Remove Job Seekers** — removes "hire me" and "open to work" style posts
7. **Check Hiring Intent** — confirms post has real hiring language (35+ phrases checked)
8. **Match Job Title** — keeps only posts matching your tool name AND target job titles
9. **Enrich Data** — extracts all contact info and detects job type (Remote / Hybrid / On-Site)
10. **Google Sheets** — logs every qualified lead automatically

---

## What you get in Google Sheets

| Field | Description |
|---|---|
| Post Content | Full LinkedIn post text |
| Post URL | Direct link to the post |
| Job Type | Remote / Hybrid / On-Site |
| Published Date | When the post was published |
| Author Name | Who posted it |
| Author LinkedIn | Direct profile link |
| Email | Extracted from post |
| Phone Number | Extracted from post |
| Apply Link | lnkd.in short links |
| WhatsApp | wa.me links if present |

---

## Customization

This workflow is built to be adapted. You are not locked into n8n roles.

**To use it for your own niche:**
- Go to **Get Posts** → replace the LinkedIn search URLs with your own keywords
- Go to **Match Job Title** → replace `n8n` with your tool (e.g. Zapier, Make, Python)
- Add or remove job titles in **Match Job Title** to match what you are targeting
- Add more noise phrases in **Removing Noise** if needed

**Other ideas:**
- Add a Telegram or Slack notification node after Google Sheets for instant alerts
- Use the sheet as a mini-CRM — add outreach status, reply date, and notes columns
- Run multiple copies for different niches or platforms

---

## Setup Requirements

- **Apify account** — for LinkedIn post scraping (paid plan recommended)
- **n8n DataTable** — built-in n8n feature, used to track seen posts across runs
- **Google Sheets** — to store and manage your leads
- **Google Sheets OAuth2** credentials connected in n8n

---

## Setup Checklist

- [ ] Add your Apify API credentials to the **Get Posts** node
- [ ] Build your LinkedIn search URL and paste it into the `urls` array in **Get Posts**
- [ ] Create a DataTable in your n8n project named **Post Job Scraper** with one column: `post_ID` (string)
- [ ] Link the DataTable in both **If Job Not in Database** and **Insert row** nodes
- [ ] Create your Google Sheet with headers in row 2 and connect it in **Append row in sheet**
- [ ] Customize job titles and tool name inside **Match Job Title**

---

## Support & Questions

Have questions, need help setting it up, or want to suggest improvements?

📧 **Email:** salmanmehboob1947@gmail.com
🔗 **LinkedIn:** https://www.linkedin.com/in/salman-mehboob-pro/

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
