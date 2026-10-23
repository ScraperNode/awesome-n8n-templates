# 🔒 Review Terraform pull requests with GitHub, GPT-4.1, Postgres and Slack

> ⚡ **2 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow reviews Terraform pull requests in GitHub using an OpenAI tool-calling agent that can run plan, security, cost, and standards checks, then logs results to Postgres, comments on the PR, and auto-approves clean changes or routes flagged ones to Slack for human sign-off.

## How it works
1. Triggers on GitHub pull request events for the selected repository.
2. Extracts PR metadata (repo, branch, author, title, and PR number) and fetches the PR details from GitHub for review context.
3. Uses an OpenAI agent with session memory to review the PR and, as needed, calls HTTP tools to run a Terraform plan, run a Terraform security scan, estimate cost impact, and query a vector store of internal IaC standards.
4. Parses the agent’s structured JSON output into fields such as findings, overall risk, verdict, blocking issues, and cost impact summary.
5. Inserts the review record into a Postgres `terraform_pr_reviews` table and posts a formatted review comment back to the GitHub PR.
6. If the verdict is pass, submits a GitHub PR approval; otherwise, sends the findings to a Slack channel, waits for a human security decision, and then either approves the PR or requests changes in GitHub.

## Setup
1. Connect GitHub credentials with permission to read pull requests and create comments/reviews, and select the target owner and repository in the GitHub trigger and GitHub nodes.
2. Add OpenAI credentials for the Chat Model and configure the model selection (for example, `gpt-4.1`).
3. Configure the HTTP endpoints used by the Terraform plan, security scan, and cost estimate tools (for example, CI/internal APIs) so they return usable results for the agent.
4. Set up a vector store for your internal IaC standards and connect the vector store credentials used by the RAG search tool.
5. Add Postgres credentials and create a `terraform_pr_reviews` table with columns matching the insert (pr_number, repo, author, findings, overall_risk, verdict, blocking_issues, cost_impact_summary, created_at).
6. Add Slack credentials, set the target channel (for example, `#terraform-security-review`), and configure how reviewers resume the workflow by calling the Wait node’s webhook with a `securityApproved` value.

## 🔗 Nodes Used

GitHub, Github Trigger, Postgres, Slack, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
