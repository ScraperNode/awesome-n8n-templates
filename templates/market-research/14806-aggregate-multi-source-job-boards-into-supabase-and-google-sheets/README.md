# 📊 Aggregate multi-source job boards into Supabase and Google Sheets

> ⚡ **65 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Stop manually checking dozens of career pages. This workflow runs every morning, hits the public APIs of 8+ ATS platforms and job boards, normalizes every listing into a single clean schema, and syncs everything to Supabase and Google Sheets deduplicated and ready to query.

## Who it's for

Job seekers, recruiters, or career platforms that want a consolidated, up-to-date feed of openings from specific companies without scraping, without API keys, and without paying for a jobs aggregator.

## How it works

1. A Schedule Trigger fires daily at 8 AM IST
2. A Company List code node defines all sources grouped by ATS type (Greenhouse, Lever, Ashby, Workable, SmartRecruiters, RemoteOK, and board APIs like Remotive, Himalayas, Arbeitnow, Jobicy)
3. A Prepare Request node builds the correct API URL and headers for each source, including multi-page pagination for SmartRecruiters (up to 500 jobs via offset) and Himalayas (up to 500 via page param)
4. An HTTP Request node fetches all sources in batches of 5
5. A Parse + Enrich + Filter node normalizes all divergent JSON structures into a unified schema — resolving ISO country codes, Indian city detection, salary parsing across all formats, and domain-based filtering
6. Deduplicated results are upserted to a Supabase (Postgres) table and written to Google Sheets

## ATS platforms supported

Greenhouse, Lever, Ashby, Workable, SmartRecruiters, RemoteOK, Remotive, Himalayas, Arbeitnow, Jobicy

## Normalized output schema

`job_id`, `title`, `company`, `location`, `country`, `salary`, `job_type`, `apply_url`, `posted_at`, `source_ats`

## Setup

1. Open the **Company List** node and edit the `sources` array — add or remove companies and their ATS slugs
2. Update `ALLOWED_DOMAINS` in the Parse node to filter by location or job type relevant to you
3. Add your **Supabase** credentials in the Postgres node and confirm your table name and schema match the output fields
4. Connect your **Google Sheets** credentials and set the target spreadsheet and sheet ID
5. (Optional) Adjust pagination limits per source in the Prepare Request node

## Requirements

- Self-hosted or cloud n8n instance
- Supabase project with a jobs table
- Google Sheets with headers matching the normalized schema
- No external API keys required — all sources use public endpoints

## 🔗 Nodes Used

Google Sheets, HTTP Request, Postgres, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
