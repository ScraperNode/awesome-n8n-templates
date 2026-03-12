# 🎫 Auto-resolve Jira tickets with GitHub Copilot using Port Context

> ⚡ **790 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Auto-resolve Jira tickets with coding agents

Coding agents can significantly speed up development, but crucial engineering context often gets lost in the process. This guide demonstrates how to use Port as a context lake in n8n workflows to automatically generate GitHub issues from Jira tickets with rich organizational context, ensuring that important information is preserved when assigning them to GitHub Copilot and linking pull requests back to Jira. This setup helps establish a seamless ticket-to-PR workflow, bridging the gap between Jira and GitHub while leveraging Port's comprehensive software catalog as a source of truth.

## How it works
The n8n workflow orchestrates the following steps:

- Jira trigger — The workflow listens for Jira issue updates via webhook.
- Condition check — Verifies that the issue status is "In Progress" and has the required label (e.g., "product_approved") without the "copilot_assigned" label.
- Port context extraction — Uses Port's n8n node to query your software catalog for relevant context about services, repositories, teams, dependencies, and documentation related to the Jira issue.
- Parse response — Retrieves the AI-generated GitHub issue title and body from Port.
- Create GitHub issue — Creates a new GitHub issue with the enriched context from Port.
- Assign to Copilot — Adds a comment to the GitHub issue instructing Copilot to take ownership.
- Add issue link to Jira ticket — Adds a comment to the Jira ticket with the GitHub issue URL, providing clear traceability.
- Mark ticket as assigned — Updates the Jira ticket to add the "copilot_assigned" label, preventing duplicate processing.

## Setup
- [ ] Connect your Jira Cloud account and enable issue_updated events
- [ ] Register for free on [Port.io](https://www.port.io)
- [ ]  Connect your Port.io account and add the API key
- [ ] Connect your GitHub account and select the target repository
- [ ] Ensure a Copilot bot or @copilot user has access to the repository
- [ ] Confirm the workflow webhook or Jira trigger URL is active
- [ ] Test by moving a `product_approved` ticket to `In Progress`.
- [ ] You should be good to go!

## Prerequisites
- You have a Port account and have completed the onboarding process.
- Port's GitHub app is installed in your account.
- Port's Jira integration is installed in your account.
- You have a working n8n instance (Cloud or self-hosted) with Port's n8n custom node installed.
- Your GitHub organization has GitHub Copilot enabled, so Copilot can be automatically assigned to any issues created through this guide.


⚠️ This template is intended for Self-Hosted instances only.

## 🔗 Nodes Used

GitHub, Jira Software, Jira Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
