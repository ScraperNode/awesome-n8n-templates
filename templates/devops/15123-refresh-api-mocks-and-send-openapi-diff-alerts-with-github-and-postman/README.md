# ⚙️ Refresh API mocks and send OpenAPI diff alerts with GitHub and Postman

> ⚡ **45 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# API Mock Auto-Refresh with GitHub, Postman & OpenAPI Diff Alerts

This n8n workflow automates the full API specification update lifecycle whenever changes are pushed to GitHub. It refreshes a Postman mock server, downloads the old and new OpenAPI specs, compares them using `openapi-diff`, then posts detected API changes directly to the GitHub Pull Request and emails the team. This helps engineering teams instantly validate API contract changes, catch breaking updates early and keep testers/mobile developers synced automatically.

### Quick Start Setup

1. [Import the workflow JSON into your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
2. Add your GitHub, Postman and Gmail credentials.
3. Update values inside **Set: Config** node.
4. Create a GitHub webhook pointing to `/webhook/api-update`.
5. Configure GitHub Actions to run `openapi-diff` and POST results to `/webhook/api-diff-result`.
6. Activate the workflow.
7. Push an API spec update and test the automation.


## What It Does

Managing API changes across backend, QA, mobile and frontend teams can become messy when OpenAPI specs are updated manually. This workflow solves that by creating an automated pipeline between GitHub, Postman and your internal notification channels.

Whenever code or spec changes are pushed to the `develop` branch, the workflow first refreshes your Postman Mock Server so testers can immediately work with the latest API behavior. It then downloads both old and new API spec files.

Next, an external GitHub Actions process runs `openapi-diff` to compare the specs and sends the result back into n8n. If changes exist, the workflow cleans the output, posts it as a GitHub Pull Request comment and emails the summary to stakeholders.


## Who It's For

- API development teams
- Mobile app teams relying on mocks
- QA / testing engineers
- DevOps teams managing CI/CD pipelines
- Product teams reviewing API changes
- Enterprises maintaining multiple consumers of internal APIs


## Requirements to Use This Workflow

### Accounts / Tools Needed

- [n8n account (cloud or self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- GitHub repository access
- Postman account with Mock Server
- Gmail account for notifications
- GitHub Personal Access Token
- GitHub Actions enabled in repository
- OpenAPI spec files stored in repository

### Recommended Files

```text
/openapi_specs/openapi_old.yaml
/openapi_specs/openapi_new.yaml
```


## How It Works & Set Up

### Workflow Logic

```text
GitHub Push Trigger
   ↓
Load Config
   ↓
Refresh Postman Mock
   ↓
Download Old Spec
   ↓
Download New Spec
   ↓
GitHub Actions runs openapi-diff
   ↓
Send Result to n8n Webhook
   ↓
If changes found:
   ├─ Comment on PR
   └─ Send Email
Else:
   └─ Stop execution
```

### Setup Instructions

#### 1. Import Workflow

Upload the JSON file into n8n.

#### 2. Configure Credentials

Connect:

- GitHub Header Auth
- Postman API Key
- Gmail OAuth2

#### 3. Update Set: Config Node

Replace sample values with your real values:

- `postman.apiKey`
- `postman.mockId`
- `github.repo`
- `github.token`
- `github.prId`

#### 4. GitHub Webhook

Create webhook inside your repository:

```text
POST https://your-n8n-domain/webhook/api-update
```

Trigger on:

- Push events
- Pull requests (optional)

#### 5. GitHub Actions Setup

Use Docker image for `openapi-diff` and POST response to:

```text
https://your-n8n-domain/webhook/api-diff-result
```

#### 6. Activate Workflow

Turn workflow ON and test with a sample OpenAPI change.


## How To Customize Nodes

### Set: Config

Use environment variables or credentials instead of plain text values.

### Update Postman Mock

Point to another mock server or workspace.

### Comment to PR

Customize PR comment format:

- Add markdown tables
- Mention reviewers
- Highlight breaking changes only

### Send Summary Email

Send to:

- Product managers
- QA team
- Slack email channel
- Multiple recipients

### If Node

Filter only:

- Breaking changes
- Path additions
- Schema changes


## Add-ons (Optional Enhancements)

1. Slack notifications instead of email
2. Microsoft Teams alerts
3. Jira ticket creation for breaking changes
4. Auto-approve PR if no breaking changes
5. Save diff history to database
6. Daily digest of API changes
7. Trigger mobile regression tests automatically
8. Publish docs automatically after merge


## Use Case Examples

### 1. Mobile App Sync

Backend updates endpoints → mobile team receives diff instantly.

### 2. QA Regression Planning

Tester receives changed API list before release testing.

### 3. API Governance

Architecture team tracks breaking changes across repos.

### 4. Faster PR Reviews

Reviewers see API contract changes directly in GitHub comments.

### 5. Multi-Team Communication

Frontend, backend and product teams stay aligned.

There can be many more enterprise and SaaS use cases for this workflow.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| Webhook not triggering | Wrong GitHub webhook URL | Recheck endpoint |
| No PR comment posted | Invalid GitHub token | Regenerate PAT |
| Mock not refreshed | Wrong Postman mock ID | Verify mock server ID |
| Email not sent | Gmail OAuth expired | Reconnect Gmail |
| No diff detected | Same specs or bad file path | Validate YAML files |
| Workflow stops early | Empty diff payload | Check GitHub Actions POST body |


## Need Help?

Need help deploying or customizing this workflow for production use?

Our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** can help you with:

- n8n workflow implementation
- GitHub CI/CD integrations
- API governance automation
- Postman mock lifecycle systems
- Enterprise DevOps automations
- Custom notification pipelines

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
