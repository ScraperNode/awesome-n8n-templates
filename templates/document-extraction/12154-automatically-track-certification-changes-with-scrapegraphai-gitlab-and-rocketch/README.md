# 🔬 Automatically track certification changes with ScrapeGraphAI, GitLab and Rocket.Chat

> ⚡ **20 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Certification Requirement Tracker with Rocket.Chat and GitLab

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow automatically scrapes certification-issuing bodies once a year, detects any changes in certification or renewal requirements, creates a GitLab issue for the responsible team, and notifies the relevant channel in Rocket.Chat. It helps professionals and compliance teams stay ahead of changing industry requirements and never miss a renewal.

## Pre-conditions/Requirements

### Prerequisites
- An n8n instance (self-hosted or n8n.cloud)
- ScrapeGraphAI community node installed and activated
- Rocket.Chat workspace with Incoming Webhook or user credentials
- GitLab account with at least one repository and a Personal Access Token (PAT)
- Access URLs for all certification bodies or industry associations you want to monitor

### Required Credentials
- **ScrapeGraphAI API Key** – Enables web scraping services  
- **Rocket.Chat Credentials** – Either:
  - Webhook URL, or  
  - Username & Password / Personal Access Token  
- **GitLab Personal Access Token** – To create issues and comments via API

### Specific Setup Requirements
| Service       | Requirement                                    | Example/Notes                                        |
| ------------- | ---------------------------------------------- | ---------------------------------------------------- |
| Rocket.Chat   | Incoming Webhook URL OR user credentials       | `https://chat.example.com/hooks/abc123…`             |
| GitLab        | Personal Access Token with `api` scope         | Generate at **Settings → Access Tokens**             |
| ScrapeGraphAI | Domain whitelist (if running behind firewall)  | Allow outbound HTTPS traffic to target sites         |
| Cron Schedule | Annual (default) or custom interval            | `0 0 1 1 *` for 1-Jan every year                     |

## How it works

This workflow automatically scrapes certification-issuing bodies once a year, detects any changes in certification or renewal requirements, creates a GitLab issue for the responsible team, and notifies the relevant channel in Rocket.Chat. It helps professionals and compliance teams stay ahead of changing industry requirements and never miss a renewal.

## Key Steps:
- **Scheduled Trigger**: Fires annually (or any chosen interval) to start the check.
- **Set Node – URL List**: Stores an array of certification-body URLs to scrape.
- **Split in Batches**: Iterates over each URL for parallel scraping.
- **ScrapeGraphAI**: Extracts requirement text, effective dates, and renewal info.
- **Code Node – Diff Checker**: Compares the newly scraped data with last year’s GitLab issue (if any) to detect changes.
- **IF Node – Requirements Changed?**: Routes the flow based on change detection.
- **GitLab – Create/Update Issue**: Opens a new issue or comments on an existing one with details of the change.
- **Rocket.Chat – Notify Channel**: Sends a message summarizing any changes and linking to the GitLab issue.
- **Merge Node**: Collects all branch results for a final summary report.

## Set up steps

**Setup Time: 15-25 minutes**

1. **Install Community Node**: In n8n, navigate to **Settings → Community Nodes** and install “ScrapeGraphAI”.
2. **Add Credentials**:  
   a. In **Credentials**, create “ScrapeGraphAI API”.  
   b. Add your Rocket.Chat Webhook or PAT.  
   c. Add your GitLab PAT with `api` scope.  
3. **Import Workflow**: Copy the JSON template into n8n (**Workflows → Import**).  
4. **Configure URL List**: Open the **Set – URL List** node and replace the sample array with real certification URLs.  
5. **Adjust Cron Expression**: Double-click the **Schedule Trigger** node and set your desired frequency.  
6. **Customize Rocket.Chat Channel**: In the **Rocket.Chat – Notify** node, set the `channel` or use an incoming webhook.  
7. **Run Once for Testing**: Execute the workflow manually to ensure issues and notifications are created as expected.  
8. **Activate Workflow**: Toggle **Activate** so the schedule starts running automatically.

## Node Descriptions

### Core Workflow Nodes:
- **stickyNote – Workflow Notes**: Contains a high-level diagram and documentation inside the editor.
- **Schedule Trigger** – Initiates the yearly check.
- **Set (URL List)** – Holds certification body URLs and meta info.
- **SplitInBatches** – Iterates through each URL in manageable chunks.
- **ScrapeGraphAI** – Scrapes each certification page and returns structured JSON.
- **Code (Diff Checker)** – Compares the current scrape with historical data.
- **If – Requirements Changed?** – Switches path based on diff result.
- **GitLab** – Creates or updates issues, attaches JSON diff, sets labels (`certification`, `renewal`).
- **Rocket.Chat** – Posts a summary message with links to the GitLab issue(s).
- **Merge** – Consolidates batch results for final logging.
- **Set (Success)** – Formats a concise success payload.

### Data Flow:
1. **Schedule Trigger** → **Set (URL List)** → **SplitInBatches** → **ScrapeGraphAI** → **Code (Diff Checker)** → **If** → **GitLab / Rocket.Chat** → **Merge**

## Customization Examples

### Add Additional Metadata to GitLab Issue
```javascript
// Inside the GitLab "Create Issue" node ↗️
{
  "title": `Certification Update: ${$json.domain}`,
  "description": `**What's Changed?**\n${$json.diff}\n\n_Last checked: {{$now}}_`,
  "labels": "certification,compliance," + $json.industry
}
```

### Customize Rocket.Chat Message Formatting
```javascript
// Rocket.Chat node → JSON parameters
{
  "text": `:bell: *Certification Update Detected*\n&gt;*${$json.domain}*\n&gt;See the GitLab issue: ${$json.issueUrl}`
}
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "domain": "example-cert-body.org",
  "scrapeDate": "2024-01-01T00:00:00Z",
  "oldRequirements": "Original text …",
  "newRequirements": "Updated text …",
  "diff": "- Continuous education hours increased from 20 to 24\n- Fee changed to $200",
  "issueUrl": "https://gitlab.com/org/compliance/-/issues/42",
  "notification": "sent"
}
```

## Troubleshooting

### Common Issues
1. **No data returned from ScrapeGraphAI** – Confirm the target site is publicly accessible and not blocking bots. Whitelist the domain or add proper headers via ScrapeGraphAI options.  
2. **GitLab issue not created** – Check that the PAT has `api` scope and the project ID is correct in the GitLab node.  
3. **Rocket.Chat message fails** – Verify webhook URL or credentials and ensure the channel exists.

### Performance Tips
- Limit the batch size in **SplitInBatches** to avoid API rate limits.
- Schedule the workflow during off-peak hours to minimize load.

**Pro Tips:**
- Store last-year scrapes in a dedicated GitLab repository to create a complete change log history.
- Use n8n’s built-in **Execution History Pruning** to keep the database slim.
- Add an **Error Trigger** workflow to notify you if any step fails.

## 🔗 Nodes Used

Slack, GitLab, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
