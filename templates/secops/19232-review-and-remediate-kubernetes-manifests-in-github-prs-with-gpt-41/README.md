# 🔒 Review and remediate Kubernetes manifests in GitHub PRs with GPT-4.1

> ⚡ **2 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow reviews Kubernetes manifest changes in GitHub pull requests using OpenAI with policy RAG and external scanner APIs, logs results to Postgres, posts findings back to the PR, and—after Slack approval—commits secure manifest fixes to a remediation branch and opens a remediation PR.

## How it works
1. Triggers on GitHub pull_request events when a PR is opened or updated.
2. Collects PR context and retrieves the list of changed files and their Kubernetes YAML contents from GitHub.
3. Uses an OpenAI agent with session memory to analyze each manifest, calling HTTP scanner tools for privileged settings, RBAC permissions, exposed services, and resource limits, and querying a vector store for internal Kubernetes security policies.
4. Parses the agent’s structured JSON output and logs findings, risk, verdict, and proposed secure manifests to a Postgres audit table.
5. Posts a detailed security review comment (including findings and proposed fixes) back to the originating GitHub pull request.
6. If issues are found, requests remediation approval in Slack and, when approved, creates a remediation branch, commits the secure manifest changes, and opens a remediation PR before notifying Slack.

## Setup
1. Add GitHub credentials with permission to read PR files, create branches, commit changes, and open PRs, and select the target repository in the GitHub trigger and GitHub nodes.
2. Add an OpenAI credential for the Chat Model node and configure a vector store connection for the RAG policy search tool.
3. Replace the internal HTTP endpoints for the four scanner tools (privileged, RBAC, exposure, resource limits) with your own reachable services that accept manifest YAML and return findings.
4. Add a Postgres credential and create a public.k8s_manifest_reviews table matching the columns used by the logging node (pr_number, repo, author, findings, overall_risk, verdict, secured_manifests, created_at).
5. Add Slack credentials and set the target channel (for example, #k8s-security-review) for approval requests and notifications.
6. Implement the remediation approval input so the workflow receives remediationApproved=true/false before the approval gate continues.

## 🔗 Nodes Used

GitHub, Github Trigger, Postgres, Slack, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
