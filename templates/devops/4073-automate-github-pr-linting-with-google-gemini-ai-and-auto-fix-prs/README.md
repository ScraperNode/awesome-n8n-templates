# ⚙️ Automate GitHub PR linting with Google Gemini AI and auto-fix PRs

> ⚡ **403 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# LintGuardian: Automated PR Linting with n8n & AI

## What It Does

LintGuardian is an n8n workflow template that automates code quality enforcement for GitHub repositories. When a pull request is created, the workflow automatically analyzes the changed files, identifies linting issues, fixes them, and submits a new PR with corrections. This eliminates manual code style reviews, reduces back-and-forth comments, and lets your team focus on functionality rather than formatting.

## How It Works

The workflow is triggered by a GitHub webhook when a PR is created. It fetches all changed files from the PR using the GitHub API, processes them through an AI-powered linting service (Google Gemini), and automatically generates fixes. The AI agent then creates a new branch with the corrected files and submits a "linting fixes" PR against the original branch. Developers can review and merge these fixes with a single click, keeping code consistently formatted with minimal effort.

## Prerequisites

To use this template, you'll need:

1. **n8n instance**: Either self-hosted or using n8n.cloud
2. **GitHub repository**: Where you want to enforce linting standards
3. **GitHub Personal Access Token**: With permissions for repo access (repo, workflow, admin:repo_hook)
4. **Google AI API Key**: For the Gemini language model that powers the linting analysis
5. **GitHub webhook**: Configured to send PR creation events to your n8n instance

## Setup Instructions

1. **Import the template** into your n8n instance
2. **Configure credentials**:
   - Add your [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) under Credentials → GitHub API
   - Add your [Google AI API key](https://ai.google.dev/tutorials/setup) under Credentials → Google Gemini API
3. **Update repository information**:
   - Locate the "Set Common Fields" code node at the beginning of the workflow
   - Change the `gitHubRepoName` and `gitHubOrgName` values to match your repository
   ```javascript
   const commonFields = {
     'gitHubRepoName': 'your-repo-name',
     'gitHubOrgName': 'your-org-name'
   }
   ```
4. **Configure the webhook**:
 Create a file named `.github/workflows/lint-guardian.yml` in your repository replacing the `Trigger n8n Workflow` step with your webhook:
     ```yaml
     name: Lint Guardian
     
     on:
       pull_request:
         types: [opened, synchronize]
     
     jobs:
       trigger-linting:
         runs-on: ubuntu-latest
         steps:
           - name: Trigger n8n Workflow
             uses: fjogeleit/http-request-action@v1
             with:
               url: 'https://your-n8n-instance.com/webhook/1da5a6e1-9453-4a65-bbac-a1fed633f6ad'
               method: 'POST'
               contentType: 'application/json'
               data: |
                 {
                   "pull_request_number": ${{ github.event.pull_request.number }},
                   "repository": "${{ github.repository }}",
                   "branch": "${{ github.event.pull_request.head.ref }}",
                   "base_branch": "${{ github.event.pull_request.base.ref }}"
                 }
               preventFailureOnNoResponse: true
     ```
5. **Customize linting rules** (optional):
   - Modify the AI Agent's system message to specify your team's linting preferences
   - Adjust file handling if you have specific file types to focus on or ignore

## Security Considerations

When creating your GitHub Personal Access Token, remember to:
- Choose the minimal permissions needed (repo, workflow, admin:repo_hook)
- Set an appropriate expiration date
- Treat your token like a password and store it securely
- Consider using GitHub's fine-grained personal access tokens for more limited scope

As GitHub [documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#keeping-your-personal-access-tokens-secure) notes: "Personal access tokens are like passwords, and they share the same inherent security risks."

## Extending the Template

You can enhance this workflow by:
- Adding Slack notifications when linting fixes are submitted
- Creating custom linting rules specific to your team's needs
- Expanding it to handle different types of code quality checks
- Adding approval steps for more controlled environments

This template provides an excellent starting point that you can customize to fit your team's exact workflow and code style requirements.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Convert to File, Extract from File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
