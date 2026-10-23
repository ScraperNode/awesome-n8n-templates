# 🔒 Detect compromised GitHub dependencies with Gemini and Slack alerts

> ⚡ **14 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Know within an hour when a hijacked or malicious npm, PyPI or other open-source package lands in any of your GitHub repositories. This workflow checks new GitHub malware and critical advisories against every repository's dependency graph and sends a Slack alert with an AI response plan.

## How it works
1. Runs every hour and creates its own n8n Data Table on the first run to remember what it already reported.
2. Pulls the malware and critical advisories published in the last 7 days from the GitHub Advisory Database.
3. Lists your repositories and downloads each one's dependency graph (SBOM), covering npm, PyPI, Maven, NuGet, Go, RubyGems, Composer, Rust and more.
4. Compares every dependency version with the affected version ranges, so you are only alerted about versions that are really affected.
5. Skips anything already reported, so each problem is alerted once, and re-checks recent advisories on every run to catch packages installed later.
6. Google Gemini writes an incident response plan for each new advisory: what happened, what to do now and how to check whether you were compromised.
7. Sends the alert to Slack, logs every incident in the Data Table and can open GitHub issues in private repositories.

## Setup
1. Create a GitHub personal access token (classic with the repo scope, or fine-grained with Contents: read and Metadata: read, plus Issues: write if you want issues) and select it as the GitHub credential in Fetch Advisories, List Repositories, Get Dependency Graph and Create GitHub Issue.
2. Make sure the dependency graph is enabled in each repository's settings under Code security (it is on by default for public repositories).
3. Open the Settings node and set github_owner to your organization or username, and owner_type to "org" or "user".
4. Add a free Google Gemini API key from aistudio.google.com to the Gemini node.
5. Connect Slack and set your channel in Slack Supply-Chain Alert (default #security-alerts).
6. Click Execute workflow once, then publish the workflow so it runs every hour.

## Requirements
- A recent n8n 2.x version (the workflow uses built-in Data Tables)
- GitHub personal access token, with the dependency graph enabled on your repositories
- Google Gemini API key (the free tier works)
- Slack workspace

## Customization
- Change lookback_days to re-check a longer window, for example 30 days on the first run.
- Set include_critical_vulnerabilities to false to alert only on malware and hijacked packages.
- Set create_github_issues to true to open an issue in affected private repositories.
- Use repo_name_filter and max_repositories to limit which repositories are scanned.
- Replace the Slack node with Microsoft Teams, Discord or PagerDuty.

## Additional info
Gemini is only called when a new incident is found, so normal hours make no AI calls.
Packages listed without an exact version, for example a manifest without a lockfile, are only reported for advisories that affect every version, and are marked as unconfirmed.
Issues are only opened in private repositories, so incidents are never published in public repos.
The GitHub Advisory Database can lag behind an attack by a few hours, so keep your other defences such as lockfiles and release cooldowns in place

## 🔗 Nodes Used

GitHub, HTTP Request, Slack, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
