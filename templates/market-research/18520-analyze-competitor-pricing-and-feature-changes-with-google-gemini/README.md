# 📊 Analyze competitor pricing and feature changes with Google Gemini

> ⚡ **25 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a weekly schedule (or manually) to compare a competitor’s previous vs current pricing/feature snapshot, analyzes the changes with Google Gemini, and produces a structured market-intelligence record with threat scoring and an alert or digest based on severity.

## How it works
1. Runs on a weekly Monday 8AM schedule or when you manually test the workflow.
2. Loads a competitor name, pricing URL, and previous/current pricing-and-features snapshots to compare.
3. Builds an analysis prompt that highlights the before/after snapshots and sends it to Google Gemini via an AI chain with structured JSON output parsing.
4. Routes the result by threat score to produce either a critical founder alert, a moderate product digest, or a minor update archive record.
5. Merges the selected alert/digest with the intelligence data and generates a final market-intelligence log entry containing the threat score, summary, detected changes, and recommended counter-actions.

## Setup
1. Add Google Gemini (PaLM) API credentials for the Google Gemini chat model used by the AI analysis step.
2. Replace the seeded competitor snapshots with your own source data (for example, update the competitor name/URL and feed real “previous” and “current” snapshots from your monitoring process).
3. Adjust the threat-score thresholds used for routing so the critical/moderate/minor paths match your internal escalation criteria.

## 🔗 Nodes Used

Schedule Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
