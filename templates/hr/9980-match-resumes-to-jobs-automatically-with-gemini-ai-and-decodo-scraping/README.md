# 👥 Match resumes to jobs automatically with Gemini AI and Decodo Scraping

> ⚡ **485 views** · 👥 [HR & Recruitment](../)

## Description

## Match Resumes to Jobs Automatically with Gemini AI and Decodo Scraping

Sign up for Decodo [HERE](https://visit.decodo.com/discount) for Discount

This automation intelligently connects candidate profiles to job opportunities. It takes an intake form with a short summary, resume link, and optional LinkedIn profile, then enriches the data using Decodo and Gemini. The workflow analyzes skills, experience, and role relevance, ranks top matches, and emails a polished HTML report directly to your inbox—saving hours of manual review and matching effort.

## Who’s it for?

This template is designed for recruiters, hiring managers, and talent operations teams who handle large candidate volumes and want faster, more accurate shortlisting. It’s also helpful for job seekers or career coaches who wish to identify high-fit openings automatically using structured AI analysis.

## How it works

1. Receive an intake form containing a candidate’s resume, summary, and LinkedIn URL.
2. Parse and summarize the resume with Gemini for core skills and experience.
3. Enrich the data using Decodo scraping to gather extra profile details.
4. Merge insights and rank job matches from Decodo’s job data.
5. Generate an HTML shortlist and email it automatically through Gmail.

## How to set up

1. Connect credentials for Gmail, Google Gemini, and Decodo.
2. Update the Webhook path and test your form connection.
3. Customize variables such as location or role preferences.
4. Enable **Send as HTML** in the Gmail node for clean reports.
5. Publish as **self-hosted** if community nodes are included.

## 🔗 Nodes Used

Webhook, Gmail, AI Agent, Google Gemini Chat Model, Information Extractor, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
