# 🔒 Rank and triage dependency risk with GitHub, OSV, Slack, npm, PyPI and OpenAI

> ⚡ **0 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to scan GitHub repositories for JavaScript and Python dependencies, checks their release health via npm/PyPI and known vulnerabilities via OSV, then ranks the highest-risk packages and posts a single Slack digest and (when needed) opens a GitHub issue for replacements.

## How it works
1. Runs every Monday morning on a schedule.
2. Reads `package.json` and a configured Python manifest (for example `pyproject.toml` or `requirements.txt`) from each listed GitHub repository and extracts dependency names and versions, normalizing version ranges to bare numbers.
3. Looks up each dependency in npm or PyPI to capture the latest version, last release date, deprecation/yank status, and basic maintenance signals.
4. Queries OSV for advisories affecting the specific dependency version and filters out findings that are already fixed, flagging advisories with no fix available.
5. Calculates a risk score and verdict (replace/upgrade/watch/fine) from staleness, deprecation, severity, and fix availability, then builds a ranked shortlist.
6. Uses an OpenAI-compatible chat model to generate one actionable sentence per shortlisted package.
7. Upserts the results into an n8n Data Table, posts a single summary message to Slack, and creates one GitHub issue when any packages are marked for replacement.

## Setup
1. Add a GitHub credential with access to the repositories you want to scan and the repository where issues should be created.
2. Add a Slack credential and set the target channel for the digest message.
3. Add an OpenAI-compatible model credential/configuration for the chat model used to write one-line recommendations.
4. Create an n8n Data Table named `dependency_risk` with columns `package_key`, `verdict`, `risk`, `summary`, and `last_reported`.
5. Update the Settings values for `repos` (comma-separated `owner/name`), `python_manifest`, `issue_owner`, `issue_repo`, and any thresholds like `max_packages`, `shortlist`, and staleness day limits.

## Requirements
- A GitHub credential that can read the repositories you list. npm, PyPI and OSV take no credential at all.

## Customization
- Point python_manifest at whichever file your repos actually use - pyproject.toml, requirements.txt, or a path of your own. Both PEP 621 and Poetry layouts are parsed.

## 🔗 Nodes Used

GitHub, HTTP Request, Slack, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
