# 🎣 Find high-mismatch local business leads with Firecrawl and Groq

> ⚡ **141 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

### Find businesses with strong reputations but weak digital presence 

You know the businesses that need your services, but finding them is the hard part. They have 150+ five-star reviews, customers raving about specific services, and zero way to book online. They exist, they're profitable, and they don't know they're leaving money on the table.

This workflow hunts them down automatically. Every Monday morning, it searches directory sites, scrapes websites, analyzes competitors, and generates a ranked list of high-opportunity leads with custom sales pitches already written. You get businesses to contact, not raw data to interpret.

This is not a "scrape Google Maps for emails" template. It finds the **mismatch** between reputation and digital capability, calculates exactly why each business is an opportunity, and writes the pitch hook based on what their own customers are saying. Your outreach becomes specific, not generic.

## How the Workflow Works

![image.png](fileId:5813)

The workflow runs in ten stages:

**1. Category signal generation**: AI analyzes your target category and location to determine seasonal peak months and localized conversion keywords (e.g., "varaa aika" for Finnish bookings). Language detection adapts the search terms automatically.

**2. Directory discovery**: Firecrawl searches Yelp, Google Maps, and TripAdvisor for businesses matching your criteria. Returns top 8 directory profiles with ratings, reviews, and basic info.

**3. Business extraction**: AI parses the search results and selects exactly 3 high-potential leads based on review count, ratings, and signals of digital weakness (no website listed, basic directory presence only).

**4. Deduplication check**: Queries the n8n database to filter out businesses already processed in previous runs. Only new leads proceed to avoid duplicate API costs.

**5. Website scraping (with rate limiting)**: Each new lead enters a processing loop with a 2-second delay. Firecrawl attempts to scrape their actual website. If the site exists, captures full markdown content plus screenshot. If no site found, marks as "missing website" and continues.

**6. Competitor discovery and analysis**: For each lead, searches for 3 nearby competitors in the same category, excluding directory sites. Scrapes competitor websites to compare digital sophistication (booking systems, mobile optimization, conversion paths).

**7. Review mining**: Searches for recent customer reviews mentioning the business name. Extracts snippets for sentiment analysis.

**8. AI service extraction**: Analyzes review text to identify specific services customers are praising (e.g., "best balayage," "amazing brunch," "professional brake repair"). These become the foundation for revenue leak detection.

**9. Mismatch calculation engine**: Scores each business on two axes. **Reputation score** (0-100) based on review count and rating average. **Digital score** (0-100) based on HTTPS presence, mobile viewport, copyright freshness, conversion path detection, and CMS quality. **Mismatch score** = gap between the two. Higher gap = bigger opportunity.

**10. Revenue leak detection and pitch generation**: Compares services praised in reviews against services mentioned on the website. If customers rave about Service X but the website never mentions it, flags as "revenue leak." Generates a custom sales pitch based on the primary gap detected (revenue leak, missing conversion, seasonal timing, or competitor pressure).

**11. Aggregation and reporting**: Ranks all processed leads by opportunity score. Saves top leads to n8n database. Generates a professional HTML report with dark theme design, gradient headers, progress bar visualizations, and embedded website screenshots. Report includes observed facts, heuristic assessments, and exact pitch hooks for each lead.

## Benefits

**Finds businesses ready to buy, not just browsing**: The dual-scoring system means you're not contacting everyone with an old website. You're finding businesses where the reputation-to-digital gap creates urgency.

**Revenue leak detection writes your pitch**: When the workflow finds "customers praise Service X but your website doesn't mention it," that becomes your opening line. Specific beats generic every time.

**Stops wasted API calls with deduplication**: Every business name checked against the existing database before processing. You never pay to analyze the same lead twice.

**Professional client-ready reports**: The HTML output looks like something a market research firm would charge $500 for. Dark gradient design, progress bars, screenshot embeds, and color-coded risk levels.

**Seasonal timing creates urgency**: The workflow calculates weeks until peak season for each category. "Your busy season starts in 8 weeks" hits different than "you should improve your website."

**Competitor pressure backs up your claim**: Shows exactly how many nearby competitors have booking systems this business lacks. Social proof without naming names.

## Target Audience

- Web design agencies prospecting local businesses
- Digital marketing consultants finding clients with conversion gaps
- SEO specialists identifying visibility opportunities
- Business brokers locating digitally underperforming companies
- SaaS companies selling booking/scheduling tools to local services
- Freelance developers building websites for brick-and-mortar businesses

## Required APIs

- **Firecrawl API** web scraping and directory search.

- **Groq API** LLM analysis

- **n8n Database** built-in, no external service needed

## Easy Customization

**Change target markets**: Open the Configuration node and modify two fields: `location` (any city/region) and `category` (any local business type). The AI adapts seasonal analysis and search terms automatically.

**Adjust lead quantity**: The "Business extraction" LLM prompt requests exactly 3 leads. Change the number in the prompt to get 1-5 leads per run. More leads = higher API costs but faster database growth.

**Modify scoring weights**: Open "The Mismatch Engine" code node and adjust the scoring formula. Current weights: HTTPS (20 points), mobile viewport (20), conversion path (30), CMS quality (15), copyright freshness (15). Change these to prioritize different factors.

**Customize HTML report design**: The "Build HTML Report" node contains the full template. Change the gradient colors, adjust card layouts, swap fonts, or add your agency logo to the header.

**Slack notifications**: Connect your Slack workspace, choose a channel, and new leads will post automatically with opportunity scores and pitch hooks. Perfect for sales teams who live in Slack instead of email.

**Extend document limits**: The workflow truncates website text at reasonable limits. Modify the extraction code if you need fuller content analysis for enterprise-level businesses.

**Add more competitor depth**: Current setup scrapes 3 competitors per lead. Increase this in the "Filter Competitors" code node, but watch your Firecrawl usage costs.

**Create custom pitch templates**: The pitch generation logic in "The Mismatch Engine" node has five angle types. Add more templates for industry-specific approaches (e.g., healthcare compliance, restaurant food safety).

## 🔗 Nodes Used

Slack, Schedule Trigger, Basic LLM Chain, Groq Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
