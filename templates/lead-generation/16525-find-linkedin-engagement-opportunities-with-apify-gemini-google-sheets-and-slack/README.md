# 🎣 Find LinkedIn engagement opportunities with Apify, Gemini, Google Sheets and Slack

> ⚡ **23 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Youtube Video: https://youtu.be/ehsagyRmri4

This workflow runs on a schedule to scrape recent LinkedIn posts with Apify, stores and evaluates them in Google Sheets using Google Gemini, then enriches shortlisted authors with Apify profile data, saves profile results to a second Sheet, and sends Slack alerts for comment and connection opportunities.

## How it works
1. Runs on a schedule and sets the Ideal Customer Profile (ICP) text used for evaluation.
2. Scrapes LinkedIn posts from Apify using the configured search query and merges the results with existing rows from a Google Sheets “Linkedin_Outreach_oppurtunities” sheet.
3. Limits processing to two posts, upserts the post details into Google Sheets, and sends each post’s content to Google Gemini to score whether it is a comment opportunity.
4. If the post is marked as an opportunity with a confidence score above 80, the workflow updates the corresponding Google Sheets row with the AI reasoning and suggested comment angle.
5. Aggregates the qualified opportunities, compares their author profile URLs against an existing “Profile_scraper” Google Sheet, and keeps only authors that are not already present.
6. Scrapes each new author profile with an Apify profile scraper, uses Google Gemini to score ICP match, saves the profile details and qualification summary to the “Profile_scraper” Google Sheet, and posts a Slack message with the shortlisted profile link.
7. Separately, a Google Sheets trigger watches the opportunities sheet for row updates and sends a Slack alert containing the post link, reasoning, and comment angle.

## Setup
1. Add Apify credentials and verify the actor IDs and input parameters for the LinkedIn post scraper and the profile scraper.
2. Configure Google Sheets access (service account for read/write nodes and a Google Sheets Trigger OAuth connection) and update the document IDs/sheet tabs for both the opportunities sheet and the profile sheet.
3. Add Google Gemini (Google PaLM) credentials and confirm the selected Gemini model names in both AI evaluation steps.
4. Add Slack credentials, choose the target channel, and adjust the Slack message text if needed.
5. Customize the ICP text and the LinkedIn search query/posted time window to match the audience and volume you want to monitor.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Google Sheets Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
