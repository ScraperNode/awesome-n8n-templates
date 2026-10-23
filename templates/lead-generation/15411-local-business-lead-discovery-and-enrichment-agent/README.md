# 🎣 Local Business Lead Discovery and Enrichment Agent

> ⚡ **1,690 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

A weekly agent that finds local businesses with weak or missing web presence, and scores them as sales leads for web agencies, freelance developers, and digital consultants.

The agent searches local business directories in your target area. It scrapes each business website with Firecrawl, evaluates quality signals, scores opportunity as High / Medium / Low, deduplicates against a database so you never process the same business twice, and sends you a clean weekly email with fresh leads ready to act on.

---

## What problem is it solving?

Finding clients who genuinely need your help is the hardest part of running a web agency or freelance business. Cold outreach to random businesses wastes time. This workflow automates prospecting: it identifies businesses that have strong reviews but a weak digital presence.

The deduplication layer means every lead in your inbox is genuinely new. The scoring system means you can focus on High-opportunity leads first and work down as needed.

---

## What this workflow does

1. **Triggers** on a weekly schedule (Mondays at 9:00 AM)
2. **Randomises the search seed** each run to explore different categories and areas, reducing repetition across weeks
3. **AI agent searches** local business directories for target business types in the configured area
4. **Firecrawl scrapes** each business website to evaluate quality signals:
   - Mobile-friendliness
   - Outdated design indicators
   - Missing key pages (contact, services, booking)
   - Tech signals (old frameworks, no HTTPS)
   - Freshness (last updated, stale content)
5. **Scores each lead** as High / Medium / Low opportunity, with a written reason for why it's a lead
6. **Deduplicates** against the `marco_leads` Postgres table — businesses already in the database are skipped
7. **Saves new leads** to the database with full enrichment data
8. **Sends a Gmail digest** with the week's new leads, formatted for quick review

---

## Setup

1. **Create the database table** — run the SQL provided in the workflow's sticky note to create the `marco_leads` table in Supabase (or any Postgres database)
2. **Connect Postgres credentials** — point them at your Supabase project
3. **Connect Firecrawl credentials** — used for directory and website scraping
4. **Connect OpenAI credentials** — used by the AI agent for discovery and scoring
5. **Configure Gmail** — set your Gmail address in the Gmail node as the sender and recipient
6. **Adjust the target parameters** — update the AI agent's instructions with your preferred city, radius, and business types
7. **Activate the workflow** — it will run automatically every Monday at 9:00 AM

---

## How to customize this workflow to your needs

- **Change the target location** — update the city and radius in the AI agent prompt; the workflow works for any geography
- **Change business types** — swap dentists, salons, gyms, and restaurants for any local business category relevant to your market (e.g. lawyers, accountants, florists)
- **Adjust lead scoring criteria** — modify the agent prompt to emphasise the signals that matter most to your outreach strategy
- **Change the output** — replace the Gmail node with a Slack message, a Notion database entry, or a CRM webhook to slot leads directly into your sales pipeline
- **Change the schedule** — run it daily for higher volume, or bi-weekly if you have a smaller target area
- **Add enrichment** — extend the workflow with a phone/email lookup step after scoring to enrich High-opportunity leads with contact details before they hit your inbox
- **Filter by opportunity score** — add a filter node before the Gmail step to only send High-opportunity leads, saving review time when volume is high

## 🔗 Nodes Used

Postgres, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
