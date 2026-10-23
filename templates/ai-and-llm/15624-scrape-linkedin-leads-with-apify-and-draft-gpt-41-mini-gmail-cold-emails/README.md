# ✨ Scrape LinkedIn leads with Apify and draft GPT-4.1 Mini Gmail cold emails

> ⚡ **143 views** · ✨ [AI & LLMs](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow fully automates the outbound lead generation process using LinkedIn, Apify, OpenAI, Google Sheets, and Gmail.

The workflow:

- Finds targeted LinkedIn leads automatically
- Enriches profiles with verified email addresses
- Stores lead data inside Google Sheets
- Filters high-quality email addresses
- Generates personalized AI cold emails using GPT-4.1 Mini
- Creates Gmail drafts ready for manual review and sending

---


# Workflow Architecture

```text
Schedule Trigger
      ↓
Find LinkedIn Leads (Apify)
      ↓
Enrich Leads using LinkedIn URL (Apify)
      ↓
Store Leads in Google Sheets
      ↓
Filter High-Quality Emails
      ↓
Generate Personalized AI Cold Emails
      ↓
Create Gmail Drafts
```

---

# Explanation

## 1. Schedule Trigger

This node automatically starts the workflow at a predefined schedule.

### Current Configuration

- Runs daily at **11:06 AM**

### Purpose

- Fully automates lead generation
- Removes manual workflow execution
- Keeps your outreach pipeline continuously active

---

## 2. Find LinkedIn Leads (Apify)

This node uses the Apify LinkedIn scraping actor to search for targeted LinkedIn profiles.

### Current Search Filters

- Job Role: `CEO`
- Location: `New York`
- Experience: `5+ years`

### What It Does

- Searches LinkedIn profiles matching the criteria
- Extracts LinkedIn profile URLs
- Returns targeted prospects for enrichment

---

## 3. Enrich Leads using LinkedIn URL

This node enriches every LinkedIn profile using the Apify LinkedIn Profile Scraper.

### Extracted Information

- First name
- Last name
- Verified email addresses
- Email deliverability score
- LinkedIn profile URL
- Company website
- Company LinkedIn URL
- About section
- Job headline

---

## 4. Store Leads (Google Sheets)

This node appends all enriched lead information into Google Sheets automatically.

### Stored Data

- First Name
- Last Name
- Email
- Deliverability status
- Email quality score
- LinkedIn URL
- Company website
- Job title
- About section
- Company LinkedIn URL

### Benefits

- Creates a centralized lead database
- Makes lead management easier
- Enables campaign tracking and organization

---

## 5. Filter High-Quality Emails

This node filters leads based on email quality score.

### Current Filter Condition

```text
Email Score &gt;= 70
```

### Purpose

- Removes low-confidence emails
- Reduces bounce rates
- Improves outreach deliverability
- Increases campaign effectiveness

Only high-quality leads proceed to the AI outreach stage.

---

## 6. Draft Cold Email (OpenAI GPT-4.1 Mini)

This node uses OpenAI GPT-4.1 Mini to generate personalized cold emails.

### AI Uses the Following Data

- Lead name
- Job title
- About section
- Company LinkedIn profile

### Generated Output

- Personalized subject line
- Curiosity-driven hook
- Concise outreach message
- HTML-formatted email body

---

## 7. Create a Draft (Gmail)

This node automatically creates a Gmail draft using the AI-generated email content.

### Included in Draft

- Personalized subject line
- HTML email body
- Recipient email address

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
