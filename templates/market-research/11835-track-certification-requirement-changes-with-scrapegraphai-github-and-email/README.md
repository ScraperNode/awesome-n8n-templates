# 📊 Track certification requirement changes with ScrapeGraphAI, GitHub and email

> ⚡ **11 views** · 📊 [Market Research & Insights](../)

## Description

# Job Posting Aggregator with Email and GitHub


**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow automatically aggregates certification-related job-posting requirements from multiple industry sources, compares them against last year’s data stored in GitHub, and emails a concise change log to subscribed professionals. It streamlines annual requirement checks and renewal reminders, ensuring users never miss an update.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or n8n cloud)
- ScrapeGraphAI community node installed
- Git installed (for optional local testing of the repo)
- Working SMTP server or other Email credential supported by n8n

### Required Credentials
- **ScrapeGraphAI API Key** – Enables web scraping of certification pages  
- **GitHub Personal Access Token** – Allows the workflow to read/write files in the repo  
- **Email / SMTP Credentials** – Sends the summary email to end-users  

### Specific Setup Requirements
| Resource | Purpose | Example |
|----------|---------|---------|
| GitHub Repository | Stores `certification_requirements.json` versioned annually | `https://github.com/&lt;you&gt;/cert-requirements.git` |
| Watch List File  | List of page URLs & selectors to scrape | Saved in the repo under `/config/watchList.json` |
| Email List       | Semicolon-separated list of recipients | `me@company.com;team@company.com` |

## How it works

This workflow automatically aggregates certification-related job-posting requirements from multiple industry sources, compares them against last year’s data stored in GitHub, and emails a concise change log to subscribed professionals. It streamlines annual requirement checks and renewal reminders, ensuring users never miss an update.

## Key Steps:
- **Manual Trigger**: Starts the workflow on demand or via scheduled cron.
- **Load Watch List (Code Node)**: Reads the list of certification URLs and CSS selectors.
- **Split In Batches**: Iterates through each URL to avoid rate limits.
- **ScrapeGraphAI**: Scrapes requirement details from each page.
- **Merge (Wait)**: Reassembles individual scrape results into a single JSON array.
- **GitHub (Read File)**: Retrieves last year’s `certification_requirements.json`.
- **IF (Change Detector)**: Compares current vs. previous JSON and decides whether changes exist.
- **Email Send**: Composes and sends a formatted summary of changes.
- **GitHub (Upsert File)**: Commits the new JSON file back to the repo for future comparisons.

## Set up steps

**Setup Time: 15-25 minutes**

1. **Install Community Node**: From n8n UI → Settings → Community Nodes → search and install “ScrapeGraphAI”.
2. **Create/Clone GitHub Repo**: Add an empty `certification_requirements.json` ( `{}` ) and a `config/watchList.json` with an array of objects like:  
   ```json
   [
     {
       "url": "https://cert-body.org/requirements",
       "selector": "#requirements"
     }
   ]
   ```
3. **Generate GitHub PAT**: Scope `repo`, store in n8n Credentials as “GitHub API”.
4. **Add ScrapeGraphAI Credential**: Paste your API key into n8n Credentials.
5. **Configure Email Credentials**: E.g., SMTP with username/password or OAuth2.
6. **Open Workflow**: Import the template JSON into n8n.
7. **Update Environment Variables** (in the Code node or via n8n variables):  
   - `GITHUB_REPO` (e.g., `user/cert-requirements`)  
   - `EMAIL_RECIPIENTS`  
8. **Test Run**: Trigger manually. Verify email content and GitHub commit.
9. **Schedule**: Add a Cron node (optional) for yearly or quarterly automatic runs.

## Node Descriptions

### Core Workflow Nodes:
- **Manual Trigger** – Initiates the workflow manually or via external schedule.
- **Code (Load Watch List)** – Reads and parses `watchList.json` from GitHub or static input.
- **SplitInBatches** – Controls request concurrency to avoid scraping bans.
- **ScrapeGraphAI** – Extracts requirement text using provided CSS selectors or XPath.
- **Merge (Combine)** – Waits for all batches and merges them into one dataset.
- **GitHub (Read/Write File)** – Handles version-controlled storage of JSON data.
- **IF (Change Detector)** – Compares hashes/JSON diff to detect updates.
- **EmailSend** – Sends change log, including renewal reminders and diff summary.
- **Sticky Note** – Provides in-workflow documentation for future editors.

### Data Flow:
1. **Manual Trigger** → **Code (Load Watch List)** → **SplitInBatches**  
2. **SplitInBatches** → **ScrapeGraphAI** → **Merge**  
3. **Merge** → **GitHub (Read File)** → **IF (Change Detector)**  
4. **IF (True)** → **Email Send** → **GitHub (Upsert File)**

## Customization Examples

### Adjusting Scraper Configuration
```javascript
// Inside the Watch List JSON object
{
  "url": "https://new-association.com/cert-update",
  "selector": ".content article:nth-of-type(1) ul"
}
```

### Custom Email Template
```javascript
// In Email Send node → HTML Content
<div>
  <h2>📋 Certification Updates – {{ $json.date }}</h2>
  <p>The following certifications have new requirements:</p>
  <ul>
    {{ $json.diffHtml }}
  </ul>
  <p>For full details visit our GitHub repo.</p>
</div>
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "timestamp": "2024-09-01T12:00:00Z",
  "source": "watchList.json",
  "current": {
    "AWS-SAA": "Version 3.0, requires renewed proctored exam",
    "PMP": "60 PDUs every 3 years"
  },
  "previous": {
    "AWS-SAA": "Version 2.0",
    "PMP": "60 PDUs every 3 years"
  },
  "changes": {
    "AWS-SAA": "Updated to Version 3.0; exam format changed."
  }
}
```

## Troubleshooting

### Common Issues
1. **ScrapeGraphAI returns empty data** – Check CSS/XPath selectors and ensure page is publicly accessible.  
2. **GitHub authentication fails** – Verify PAT scope includes `repo` and that the credential is linked in both GitHub nodes.  

### Performance Tips
- Limit `SplitInBatches` size to 3-5 URLs when sources are heavy to avoid timeouts.
- Enable n8n execution mode “Queue” for long-running scrapes.

**Pro Tips:**
- Store selector samples in comments next to each watch list entry for future maintenance.  
- Use a Cron node set to “0 0 1 1 *” for an annual run exactly on Jan 1st.  
- Add a Telegram node after Email Send for instant mobile notifications.

## 🔗 Nodes Used

Send Email, GitHub

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
