# 🔬 Maintain and rewrite knowledge base articles with Claude and Slack

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs weekly to audit knowledge base articles for staleness, broken links, user sentiment, factual accuracy, and SEO, then uses Anthropic Claude to rewrite low-complexity updates, routes larger changes to Jira for SME review, logs results to PostgreSQL, and posts reports to Slack and an analytics API.

## How it works
1. Runs on a weekly schedule and sets configuration values like the knowledge base API URL, current product version, staleness thresholds, and Slack channel.
2. Fetches knowledge base articles via HTTP, calculates staleness signals (age, view trend, helpfulness), and filters down to articles that exceed the staleness threshold.
3. Extracts links from each stale article, validates them with HTTP HEAD requests, then loads recent article feedback from PostgreSQL and analyzes sentiment with Anthropic Claude.
4. Routes articles by staleness severity and uses a web search API (Tavily) plus Anthropic Claude to fact-check content and identify inaccuracies.
5. Calculates an overall quality score, runs an Anthropic Claude SEO audit, and stores audit history to PostgreSQL.
6. Pulls top support-ticket topics from PostgreSQL and uses Anthropic Claude to identify knowledge gaps and propose new article titles.
7. Audits each stale article with Anthropic Claude to classify the update as minor or major, automatically rewrites minor updates and patches the article back to the knowledge base, or creates a Jira ticket for SME review for major updates.
8. Logs content diffs and change history to PostgreSQL, then aggregates results into a weekly report, posts it to Slack, and sends metrics to an external analytics endpoint.

## Setup
1. Provide the knowledge base API base URL and API token, and ensure the API supports listing articles and PATCH updates to `/{articleId}`.
2. Add Anthropic credentials for the Claude models used for sentiment analysis, fact checking, SEO recommendations, gap analysis, content auditing, and rewriting.
3. Configure PostgreSQL credentials and ensure tables exist for `support_tickets`, `article_feedback`, `article_audit_history`, and `article_change_log` (or update the SQL/table names to match your schema).
4. Configure Jira access (API URL, project key, and API token) and set the assignee value used when creating SME review tasks.
5. Add Slack credentials and set the target channel ID in the workflow configuration, then set the analytics platform URL and token if you want metrics exported.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
