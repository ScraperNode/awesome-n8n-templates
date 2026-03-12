# 📁 Process incoming files and notify via email with GitHub storage

> ⚡ **4 views** · 📁 [File Management](../)

## Description

# File Processing Pipeline with Email and GitHub

This workflow automatically ingests newly-uploaded files, validates and transforms their contents, stores the processed files in a GitHub repository, and sends email notifications upon completion. It is ideal for teams that regularly receive data drops and need an auditable, automated pipeline to clean, version, and distribute those files.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or n8n cloud)
- GitHub and SMTP credentials with appropriate permissions
- Basic understanding of JavaScript for custom validation/transform code

### Required Credentials
| Credential | Purpose | Minimum Scope |
|------------|---------|---------------|
| **GitHub OAuth2** | Commit transformed files to a repository | `repo` |
| **SMTP (Email Send)** | Dispatch success/failure notifications | `send` |

### Repository & Email Setup Requirements
| Item | Example | Notes |
|------|---------|-------|
| GitHub Repository | `git@github.com:org/data-pipeline.git` | Branch must exist (default: `main`) |
| Email Recipients | `ops@company.com, data@company.com` | Comma-separated list |

## How it works

This workflow automatically ingests newly-uploaded files, validates and transforms their contents, stores the processed files in a GitHub repository, and sends email notifications upon completion. It is ideal for teams that regularly receive data drops and need an auditable, automated pipeline to clean, version, and distribute those files.

## Key Steps:
- **Schedule Trigger**: Executes the pipeline on a defined schedule (e.g., hourly).
- **HTTP Request**: Pulls a file manifest or fetches file blobs from an upstream service.
- **SplitInBatches**: Iterates over each file individually for isolated processing.
- **Code (Validate)**: Runs custom JavaScript to ensure file integrity and schema compliance.
- **If (Validation Pass?)**: Routes good files forward and diverts failures.
- **Code (Transform)**: Performs any data re-formatting, enrichment, or cleansing.
- **Set**: Prepares commit metadata (file path, commit message).
- **GitHub**: Creates or updates a file in the target repository/branch.
- **Email Send**: Notifies stakeholders of overall job status, including summary metrics.

## Set up steps

**Setup Time: 10-15 minutes**

1. **Clone the Workflow**: Import the JSON file or copy from the n8n community templates gallery.
2. **Configure Schedule Trigger**: Set your desired cron expression (e.g., `0 * * * *` for hourly).
3. **HTTP Request Node**:  
   - Enter the endpoint that lists or returns your new uploads.  
   - Add authentication headers if required.
4. **Adjust Validation Code**: Open the first Code node and replace the schema rules with your own logic.
5. **Modify Transformation Logic**: In the second Code node, apply formatting (e.g., CSV → JSON) or enrichment steps.
6. **GitHub Node**:  
   - Select your GitHub OAuth2 credential.  
   - Specify repository, branch, and file path template (e.g., `processed/{{ $json.filename }}`).
7. **Email Send Node**:  
   - Set SMTP credential.  
   - Add recipients and customize subject/body with variables.
8. **Test Run**: Click “Execute Workflow” to ensure end-to-end success.
9. **Activate**: Toggle workflow to “Active” for autonomous execution.

## Node Descriptions

### Core Workflow Nodes:
- **Sticky Note** – Documentation and inline comments for maintainers.
- **Schedule Trigger** – Initiates the automation on a fixed timetable.
- **HTTP Request** – Retrieves incoming file list or contents.
- **SplitInBatches** – Paginates large manifests to conserve memory.
- **Code (Validate / Transform)** – Custom JS powering data quality checks and format conversion.
- **If** – Branching logic for pass/fail handling.
- **Set** – Crafts commit metadata and email summaries.
- **GitHub** – Commits each transformed file to the repository.
- **Email Send** – Dispatches completion notices or error alerts.

### Data Flow:
1. **Schedule Trigger** → **HTTP Request** → **SplitInBatches** → **Code (Validate)** → **If**  
   - `true` → **Code (Transform)** → **Set** → **GitHub**  
   - `false` → **Set (Error)**  
2. Both branches converge → **Email Send**

## Customization Examples

### Custom Validation Rule
```javascript
// Reject files larger than 5 MB or missing required columns
if (items[0].binary.data.size &gt; 5 * 1024 * 1024) {
  throw new Error('File exceeds 5MB limit');
}
const required = ['id', 'email', 'created_at'];
required.forEach(col =&gt; {
  if (!items[0].json.headers.includes(col)) {
    throw new Error(`Missing column: ${col}`);
  }
});
return items;
```

### Dynamic Commit Path Based on Date
```javascript
const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
item.json.gitPath = `archive/${date}/${item.json.filename}`;
return item;
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "filename": "orders_2023-10-01.csv",
  "status": "committed",
  "commitSha": "a1b2c3d4",
  "linesProcessed": 523,
  "errors": []
}
```

## Troubleshooting

### Common Issues
1. **GitHub authentication error** – Ensure OAuth app is approved and the token has `repo` scope.
2. **Email not delivered** – Verify SMTP host, port, and that “less secure apps” are allowed (if using Gmail).

### Performance Tips
- Batch large manifests (e.g., 100 records) to avoid memory spikes.
- Enable n8n queue mode for parallel processing on self-hosted instances.

**Pro Tips:**
- Use environment variables (`{{ $env["VAR_NAME"] }}`) for endpoints and secrets.
- Configure branch protection in GitHub to enforce pull requests instead of direct commits.
- Aggregate success vs. failure counts in the Email body for quick health checks.

---

_This is a community n8n workflow template provided “as-is.” Always review and adapt the workflow to meet your security, compliance, and operational requirements._

## 🔗 Nodes Used

Send Email, GitHub, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
