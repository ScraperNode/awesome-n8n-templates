# ⚡ AI Job Crawler with Suitability Scoring

> ⚡ **1,359 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Stop reading job listings that aren't a fit. This workflow automatically crawls five major job boards (LinkedIn, Indeed, WeAreDevelopers, Stepstone, and Xing) and scores every listing against your personal applicant profile, and emails you the jobs worth your time.

An AI agent rates each job from 0 to 100 based on role, tech stack, salary, location, and deal-breakers you define. Anything below 60 gets dropped. The rest lands in your inbox, formatted and ready to review.

---

## What problem is it solving?

Job searching is time-consuming and noisy. Most listings are irrelevant, but you still have to read each one to know that. Manually filtering across five platforms for a specific stack, salary band, and working arrangement takes hours a week.

This workflow removes that friction entirely. You define your profile once and the crawler does the rest on a schedule. You get a clean digest of only the matches that pass the bar.

---

## What this workflow does

1. **Triggers** on a schedule (or manually via the Firecrawl Execute trigger)
2. **Queries** LinkedIn (via HTTP + Firecrawl), Indeed, WeAreDevelopers, Stepstone, and Xing in parallel
3. **Scrapes** each job listing with Firecrawl to extract full content
4. **Processes** posting dates with an AI agent to normalise inconsistent formats
5. **Scores** each listing 0–100 against your applicant profile using an OpenAI agent with a structured output parser
6. **Filters** out anything below 60% suitability
7. **Runs detailed research** on high-scoring jobs for additional context
8. **Sends an HTML email** with your curated job list — or a "no jobs" email if nothing passed the threshold

---

## Setup

1. **Configure your applicant profile** — edit the sticky note JSON in the workflow with your role, stack, experience, salary minimum, location preference, and deal-breakers
2. **Connect OpenAI credentials** — used for suitability scoring and date parsing
3. **Connect Firecrawl credentials** — used to scrape job board listings
4. **Configure email** — set your SMTP credentials and recipient address in both email nodes (`Job Mail` and `No Jobs Mail`)
5. **Adjust the schedule** — set how frequently the crawler runs (daily recommended)
6. **Activate the workflow**

---

## How to customize this workflow to your needs

- **Change the scoring threshold** — the filter is set to 60% by default; raise it to 75%+ for tighter results or lower it if you're early in your search
- **Add or remove job boards** — each source (LinkedIn, Indeed, etc.) is modular; you can disable boards by bypassing their query node
- **Modify the applicant profile** — update the JSON sticky note at any time to reflect a new role or changed requirements; no other changes needed
- **Adjust the detail research** — the "Detailed Research" agent runs on high-scoring jobs; you can expand or simplify what it looks for
- **Change the output** — swap the email nodes for a Notion database write, a Slack message, or a Google Sheet if you prefer a different delivery format
- **Filter by posting age** — the `max_listing_age_days` field in the profile JSON controls how recent listings must be

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
