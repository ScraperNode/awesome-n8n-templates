# 🔒 Audit AI and search bot access using robots.txt checks and Gmail reports

> ⚡ **0 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs monthly to audit whether popular AI and search crawlers can access a specific page by comparing robots.txt rules with real HTTP responses, then emails a verdict report via Gmail.

## How it works
1. Runs on a monthly schedule trigger.
2. Sets the target URL, the bot user-agent list, a browser user-agent control, and the delay between requests.
3. Fetches the site’s robots.txt and evaluates, for each bot, whether the target page is allowed based on longest-match and wildcard fallback rules.
4. Requests the target page once per bot using that bot’s User-Agent, pacing requests to reduce rate limiting.
5. Makes one additional request as a normal browser and compares each bot’s HTTP status and response size against the control response.
6. Classifies each bot as ALLOWED, BLOCKED, PARTIAL, CONTRADICTION, RATE_LIMITED, or UNKNOWN and aggregates the results into a summary.
7. Sends the full audit report to the configured recipient using Gmail.

## Setup
1. Add a Gmail OAuth2 credential and set the recipient address in the email step.
2. Update the testUrl value to the page you want to audit.
3. Adjust the schedule timing and the secondsBetweenRequests delay to match your site’s rate limiting behavior.
4. Optionally edit the bot list and user-agent strings to add or remove specific crawlers you want to test.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
