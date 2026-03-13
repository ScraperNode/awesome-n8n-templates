# 📊 Find competitor keyword gaps and log opportunities to Notion with DataForSEO

> ⚡ **44 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![Pull competitor’s ranked keywords and run gap analysis in Notion with DataForSEO.png](fileId:4465)

This workflow helps you discover new SEO content opportunities by automatically identifying keyword gaps between your website and a competing domain.

On each manual run, the workflow retrieves the top 100 organically ranked keywords for your domain and for a selected competitor using the DataForSEO Labs API. It then compares both keyword lists to find valuable search terms where your competitor already has visibility on Google, but your website doesn’t.

For every missing keyword, the workflow adds useful SEO metrics, including search volume, competition level, competitor ranking position, and the competitor’s exact URL that ranks on Google. All identified keywords are stored in a structured Notion database, making it easy to review, prioritize, and turn them into actionable content ideas.

Once the keywords are saved, you can use Notion AI to instantly generate a content plan based on these opportunities. Recommended prompt: **“Analyze the keyword gap between my website’s page {{your URL}} and competitor website’s page and build a content strategy for me.”**

## Who’s it for
This workflow is ideal for SEO specialists, content marketers, and website owners who want to discover new content ideas, improve organic visibility, and systematically close the keyword gap with competitors.

## What it does
This workflow automatically identifies keywords that your competitor ranks for on Google, but your domain does not, and saves them in Notion with key SEO context for content planning.

## How it works
Triggers manually whenever you want to perform the research.
Fetches the top 100 organically ranked keywords for your website via DataForSEO Labs API.
Fetches the competitor’s top-ranked organic keywords from the same source.
Compares both datasets to find keywords missing for your domain.
Extracts key metrics, including search volume, competition, ranking position, and ranking URL.
Writes all keyword gap opportunities into a Notion database for review and planning.
Allows you to generate a content roadmap using Notion AI.

## Requirements
- DataForSEO account and API credentials 
- Notion account with a prepared database (matching the required column structure)
- Notion integration to n8n

## Customization
You can easily customize this workflow by increasing the number of keywords analyzed, filtering by specific countries or languages, adding wider SEO context (CPC, keyword difficulty, SERP features), exporting results to other tools, or automating content brief creation rather than storing keywords only.

## 🔗 Nodes Used

Notion, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
