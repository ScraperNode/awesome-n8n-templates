# 🎣 Enrich company leads with Firecrawl, OpenRouter AI, and Supabase

> ⚡ **993 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**What this does**

Uses Firecrawl to scrape any company website and extract structured business signals from it. The enriched profile is automatically saved to Supabase. A self-hosted, free alternative to paid enrichment APIs like Apollo or Clay, powered by Firecrawl.

**How it works**

1. Webhook receives a POST request with a `url` field (bare domain or full URL)
2. Verify URL node validates and normalizes the domain
3. Firecrawl scrapes the target website and searches for additional company data
4. AI Agent (OpenRouter) extracts structured business signals from the scraped content
5. Structured Output Parser formats the result into a clean JSON profile
6. Supabase checks for duplicates before inserting, then saves the enriched profile
7. Respond to Webhook returns the enriched result (or a 422 error if the URL was invalid)

**Business signals extracted**

Company name, industry, pricing model, free trial availability, employee size signal, funding stage, tech stack and integrations detected, target customer profile, trust signals (certifications, reviews, customer count), hiring status and open roles count.

**Requirements**

- Firecrawl API key
- OpenRouter API key (or swap for any OpenAI-compatible model)
- Supabase project (setup SQL provided below)

**Setup**

1. Create a Supabase project and run the following SQL in the SQL editor:

```sql
CREATE TABLE lead_enrichment (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  domain TEXT NOT NULL UNIQUE,
  company_name TEXT,
  industry TEXT,
  pricing_model TEXT,
  has_free_trial BOOLEAN,
  employee_signal TEXT,
  funding_stage TEXT,
  tech_stack TEXT[],
  integrations TEXT[],
  target_customer TEXT,
  trust_signals TEXT[],
  hiring BOOLEAN,
  open_roles_count INT,
  raw_scraped_text TEXT,
  enrichment_source TEXT DEFAULT 'firecrawl'
);

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON lead_enrichment
FOR EACH ROW EXECUTE FUNCTION update_updated_at();
```

2. Add your Firecrawl API key as a credential in n8n
3. Add your OpenRouter API key as a credential (or swap for any OpenAI-compatible provider)
4. Add your Supabase credentials (project URL + service role key)
5. Activate the workflow

**How to use**

Send a POST request to the webhook URL:

```bash
curl -X POST https://your-n8n-instance/webhook/your-id \
  -H "Content-Type: application/json" \
  -d '{"url": "firecrawl.dev"}'
```

## 🔗 Nodes Used

Webhook, Supabase, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
