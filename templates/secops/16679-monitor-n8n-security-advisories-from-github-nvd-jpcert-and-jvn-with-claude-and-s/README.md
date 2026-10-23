# 🔒 Monitor n8n security advisories from GitHub, NVD, JPCERT and JVN with Claude and Slack

> ⚡ **55 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs hourly to monitor n8n-related security information from GitHub Advisories, NVD (NIST) CVE data, GitHub n8n security release notes, and JPCERT/JVN RSS feeds, then summarizes new findings with Anthropic Claude and posts an alert to Slack.

## How it works
1. Runs every hour on a schedule.
2. Fetches the latest items from the GitHub Advisory API, the NVD CVE API, the n8n GitHub Releases Atom feed, and the JPCERT and JVN RSS feeds.
3. Parses the XML feeds, normalizes all sources into a single list of n8n-related security items, and removes duplicates and previously notified items using stored IDs.
4. Checks whether any new items were found and stops if there are none.
5. Sends the new items to Anthropic Claude to generate a concise Japanese summary including importance, affected product, and urgency.
6. Formats a Slack Block Kit message and posts the alert to the configured Slack channel.
7. Saves the notified item IDs to workflow static data to prevent repeat notifications in future runs.

## Setup
1. Create an NVD API key and add it as an HTTP Header Auth credential named (or mapped to) `NVD_API_Key` with header name `apiKey`.
2. Add an Anthropic API credential for the Claude model used in the summarization step.
3. Add a Slack OAuth2 credential and set the target channel name (for example, `#security-alerts`) in the Slack message step.

## Requirements
- n8n (self-hosted or Cloud)
- NVD API key (free, request at https://nvd.nist.gov/developers/request-an-api-key)
- Anthropic API key (paid, Claude Haiku recommended for cost efficiency)
- Slack workspace with permission to create a Bot App (chat:write, chat:write.public scopes)

## Customization
- To monitor a different package instead of n8n, update the query parameters in the GitHub Advisory API and NVD CVE API nodes, and change the filter condition (`name === 'n8n'`) inside the New Item Filter code node.
- To change the run frequency, edit the interval on the "1h Schedule" node.
- To use a different AI model (e.g

## Additional info
Known limitations:
- GitHub Advisory API and NVD API responses are capped at 10 results per call. If more than 10 new items appear within a single hour, the excess items may be missed in that run.
- The n8n release-notes filter only matches titles containing the word "security". Releases with different wording may not be detected.
- The GitHub Advisory API's `package` query parameter does not reliably filter results server-side; this workflow re-filters client-side inside the Code node to ensure only n8n-related advisories are reported.

Troubleshooting tip: n8n's Slack node requires the Blocks field to be wrapped as `{"blocks": [...]}` rather than a bare array — passing a plain array silently falls back to plain text instead of rendering Block Kit.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
