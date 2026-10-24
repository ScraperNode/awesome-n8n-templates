# ⚙️ Detect AWS cost spikes and open Terraform fix PRs with OpenAI and Slack

> ⚡ **3 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs every 6 hours to detect AWS Cost Explorer spend spikes, correlates the spike to the latest Terraform change in GitHub, uses OpenAI to draft a root-cause analysis and updated Terraform file, opens a GitHub pull request with the fix, and posts the results to Slack.

## How it works
1. Runs on a schedule (or via manual trigger) and sets repository, Terraform path, thresholds, and date ranges for analysis.
2. Queries AWS Cost Explorer for daily unblended cost by AWS service over the last 8 days and calculates today’s spend against a rolling baseline average.
3. If the percent increase exceeds the configured threshold, identifies the top contributing AWS service and continues; otherwise the run stops.
4. Uses the GitHub API to list recent commits that touched the target Terraform file and selects the most recent commit as the likely source of the change.
5. Fetches the current Terraform file from GitHub and sends the cost spike metrics, suspect commit details, and file content to OpenAI to generate a root-cause summary, fix description, and a complete corrected file.
6. Creates a new GitHub branch from the base branch, commits the updated Terraform file to that branch, opens a pull request, and posts a Slack message with the cost impact, analysis, and PR link.

## Setup
1. Add an AWS credential with Cost Explorer permissions (ce:GetCostAndUsage) and ensure Cost Explorer calls are made in us-east-1.
2. Add a GitHub API credential (personal access token with repo scope) and ensure it can create branches, commit to the target file path, and open pull requests.
3. Add an OpenAI credential and select a compatible chat model (for example, gpt-4.1-mini) for the agent step.
4. Add a Slack credential with chat:write access and ensure the target channel exists.
5. Update the configuration values for repoOwner, repoName, terraformPath, baseBranch, costSpikeThresholdPercent, and slackChannel to match your environment.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
