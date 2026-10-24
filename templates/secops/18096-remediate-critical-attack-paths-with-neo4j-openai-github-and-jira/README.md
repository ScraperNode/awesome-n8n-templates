# 🔒 Remediate critical attack paths with Neo4j, OpenAI, GitHub and Jira

> ⚡ **15 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow scans a Neo4j-compatible security graph on a schedule or manually, automatically identifies and remediates the riskiest attack paths between internet-facing assets and crown-jewel resources using OpenAI, and orchestrates resolution by opening Jira tickets and GitHub pull requests with linked fixes.

## How it works
1. Runs on a daily schedule or manual trigger.
2. Queries the Neo4j-compatible security graph to find shortest paths from internet-facing to critical assets.
3. Parses and structures candidate attack paths and scores them for risk using set criteria.
4. Selects the highest-risk path over the threshold and fetches the related Infrastructure-as-Code file from GitHub.
5. Uses OpenAI to generate a detailed remediation summary, steps, a corrected file, and ticket/PR metadata.
6. Creates a Jira issue describing the finding and its proposed fix.
7. Opens a new GitHub branch, commits the fixed IaC file, and opens a pull request referencing the Jira ticket.
8. Posts the pull request link back to the Jira issue to close the feedback loop.

## Setup
1. Add your Neo4j HTTP Basic Auth credentials to the security graph query node.
2. Add a GitHub API credential with repo scope to all GitHub request nodes.
3. Add a Jira Software Cloud credential (email + API token) to both Jira request nodes.
4. Add your OpenAI API key credential to the OpenAI Chat Model node.
5. Update configuration values in the "Set - Config" node: Neo4j URL, risk score threshold, Jira project info, GitHub repo and branch, and default IaC file path.
6. Ensure your security graph schema includes required Asset properties as described.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
