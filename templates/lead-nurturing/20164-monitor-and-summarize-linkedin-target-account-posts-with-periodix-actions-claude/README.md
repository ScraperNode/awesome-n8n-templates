# 💬 Monitor and summarize LinkedIn target account posts with Periodix Actions, Claude, and Slack

> ⚡ **5 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Get a Slack alert when target LinkedIn accounts post. Periodix Actions pulls recent posts from companies and people in a Google Sheet, skips seen posts, and Claude summarizes each with a comment angle and DM opener. One node instead of an Apify post scraper plus cookies.

## How it works
1. Every morning at 8:00 the workflow reads your target accounts from the Accounts tab and the posts you have already seen from the Posts tab.
2. For each account without a stored author ID, Periodix resolves it once (Get Company Profile for company pages, Get Profile for people) and writes it back to the sheet, so later runs skip this step.
3. Get User Posts pulls the latest posts for each account.
4. New posts are kept only if they were not seen before, are not reposts (optional), and are newer than your age limit.
5. Claude Haiku summarizes each new post, rates how relevant it is to what you sell, and suggests a comment angle and a DM opener.
6. The post and the AI insight are saved to the Posts tab, and a Slack alert goes to your channel.

## Setup
1. Install the Periodix LinkedIn node (@periodix/n8n-nodes-actions) and connect your Periodix Actions API key. Start a 3-day free trial at actions.periodix.net.
2. Create a Google Sheet with two tabs. Accounts: account_name, linkedin_url, author_id (leave author_id empty). Posts: post_id, social_id, account_name, linkedin_url, post_url, posted_at, text, reactions, comments, reposts, summary, relevance, why, comment_angle, dm_opener, slack_text, found_at.
3. Add your target company pages and people to the Accounts tab.
4. Connect Google Sheets, Anthropic, and Slack credentials, and choose your Slack channel.
5. Edit Monitor Config: what_we_sell, posts_per_account, max_age_days, include_reposts.

## Requirements
- Periodix Actions account with a connected LinkedIn profile
- Google Sheets account
- Anthropic API key
- Slack workspace

## Customization
- Replace Slack with email, Microsoft Teams, or a CRM task.
- Filter alerts by relevance so only high-relevance posts reach Slack.
- Add Get Post Reactions and Get Post Comments to capture the people engaging with each post as warm leads.
- Change the schedule to run several times a day for fast-moving accounts.

## Additional info
Pricing: $10/month per connected LinkedIn profile with 1,000 results included, and every next 2,000 results for just $10, or $49/month unlimited. No cookies, no proxies, no actor rentals: unlike an Apify post scraper, one Periodix node covers resolving IDs, pulling posts, and, when you are ready, engaging and messaging. 0 LinkedIn accounts lost across 25,000 connected profiles in the last 24 months. Built by the team behind Periodix, rated 4.9/5 on G2.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
