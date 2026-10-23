# ⚙️ Generate network audit reports, GitHub issues, and Slack alerts with Claude

> ⚡ **77 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Reads Network report queries and agent prompts from GitHub, uses AI Agents with a read-only Cisco pyATS MCP tool to generate infrastructure audit reports, automatically opens GitHub issues for detected problems, and sends Slack notifications with report and issue links. Demo: http://cs.co/9006BEWHQy Repo: http://cs.co/9007BEmQdZ

## How it works
1. Runs on a schedule or when executed manually.
2. Pulls a list of report query `.txt` files from a GitHub repository and iterates through them one by one.
3. For each query, fetches the query file and the reporting agent prompt from GitHub
4. Uses a Reporting AI Agent with a read-only Cisco pyATS MCP tool to query network devices and generate a structured report.
5. Saves the generated report as a Markdown file in GitHub and extracts the report URL and tag.
6. Uses a ticketing AI Agent to decide whether the report requires a ticket, then creates a GitHub issue when the decision indicates an issue.
7. Sends a Slack message card with the report link and, when applicable, the GitHub issue link, then continues to the next query file.

## Setup
1. Add GitHub credentials and set the repository owner/name plus the file paths for the report queries folder, the reporting prompt file, the ticketing prompt file, and the reports output folder.
2. Add your LLM API credential of choice for both AI Agents.
3. Configure the read-only Cisco pyATS MCP endpoint URL and ensure the required pyATS tools are enabled and can reach your network devices.
4. Add Slack credentials and replace the target channel ID in both Slack message steps.
5. Populate your GitHub repo with report query `.txt` files formatted as key/value lines (including a `file_prefix`) and adjust the schedule interval to your desired cadence. Check the green post-it in the workflow for examples.

## Requirements
- Check the public repository for more information: http://cs.co/9007BEmQdZ

## 🔗 Nodes Used

GitHub, Slack, Schedule Trigger, AI Agent, Anthropic Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
