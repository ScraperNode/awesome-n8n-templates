# ⚙️ Back up databases and files to Box with Mailgun email notifications

> ⚡ **22 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Scheduled Backup Automation – Mailgun & Box

This workflow automatically schedules, packages, and uploads backups of your databases, files, or configuration exports to Box cloud storage, then sends a completion email via Mailgun. It is ideal for small-to-medium businesses or solo developers who want hands-off, verifiable backups without writing custom scripts.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or n8n.cloud)
- Box account with a folder dedicated to backups
- Mailgun account & verified domain
- Access to the target database/server you intend to back up
- Basic knowledge of environment variables to store secrets

### Required Credentials
- **Box OAuth2** – For uploading the backup file(s)
- **Mailgun API Key** – For sending backup status notifications
- **(Optional) Database Credentials** – Only if the backup includes a DB dump triggered from inside n8n

### Specific Setup Requirements
| Variable                | Example                                  | Purpose                               |
|-------------------------|------------------------------------------|---------------------------------------|
| `BOX_FOLDER_ID`         | `1234567890`                             | ID of the Box folder that stores backups |
| `MAILGUN_DOMAIN`        | `mg.example.com`                         | Mailgun domain used for sending email |
| `MAILGUN_FROM`          | `Backups &lt;backup@mg.example.com&gt;`        | “From” address in status emails       |
| `NOTIFY_EMAIL`          | `admin@example.com`                      | Recipient of backup status emails     |

## How it works

This workflow automatically schedules, packages, and uploads backups of your databases, files, or configuration exports to Box cloud storage, then sends a completion email via Mailgun. It is ideal for small-to-medium businesses or solo developers who want hands-off, verifiable backups without writing custom scripts.

## Key Steps:
- **Webhook (Scheduler Trigger)**: Triggers the workflow on a CRON schedule or external call.
- **Code (DB/File Dump)**: Executes bash or Node.js commands to create a tar/zip or SQL dump.
- **Move Binary Data**: Converts the created file into n8n binary format.
- **Set**: Attaches metadata (timestamp, file name).
- **Split In Batches** *(optional)*: Splits multiple backup files for sequential uploads.
- **Box Node**: Uploads each backup file into the specified Box folder.
- **HTTP Request (Verify Upload)**: Calls Box API to confirm upload success.
- **If**: Branches on success vs failure.
- **Mailgun Node**: Sends confirmation or error report email.
- **Sticky Notes**: Provide inline documentation inside the workflow canvas.

## Set up steps

**Setup Time: 15-20 minutes**

1. **Clone or import** the workflow JSON into your n8n instance.
2. **Create credentials**:
   - Box OAuth2: paste Client ID, Client Secret, perform OAuth handshake.
   - Mailgun API: add Private API key and domain.
3. **Update environment variables** (`BOX_FOLDER_ID`, `MAILGUN_DOMAIN`, etc.) or edit the relevant Set node.
4. **Modify the Code node** to run your specific backup command, e.g.:
   ```bash
   pg_dump -U $DB_USER -h $DB_HOST $DB_NAME &gt; /tmp/db_backup.sql
   tar -czf /tmp/full_backup_{{new Date().toISOString()}}.tar.gz /etc/nginx /var/www /tmp/db_backup.sql
   ```
5. **Set the CRON schedule** inside the Webhook node (or replace with a Cron node) to your desired frequency (daily, weekly, etc.).
6. **Execute once manually** to verify the Box upload and email notification.
7. **Enable** the workflow.

## Node Descriptions

### Core Workflow Nodes:
- **Webhook / Cron** – Acts as the time-based trigger for backups.
- **Code** – Creates the actual backup archive (tar, zip, SQL dump).
- **Move Binary Data** – Moves the generated file into `binary` property.
- **Set** – Adds filename and timestamp metadata for Box.
- **Split In Batches** – Handles multiple files when necessary.
- **Box** – Uploads the backup file to Box.
- **HTTP Request** – Optional re-check to ensure the file exists in Box.
- **If** – Routes the flow based on success or error.
- **Mailgun** – Sends success/failure notifications.
- **Sticky Note** – Explains credential handling and customization points.

### Data Flow:
1. **Webhook/Cron** → **Code** → **Move Binary Data** → **Set** → **Split In Batches** → **Box** → **HTTP Request** → **If** → **Mailgun**

## Customization Examples

### Add Retention Policy (Auto-delete old backups)
```javascript
// In a Code node before upload
const retentionDays = 30;
const cutoff = Date.now() - retentionDays * 24*60*60*1000;

items = items.filter(item =&gt; {
  return item.json.modifiedAt &gt; cutoff; // keep only recent files
});
return items;
```

### Parallel Upload to S3
```javascript
// Duplicate the Box node, replace with AWS S3 node
// Use Merge node to combine results before the HTTP Request verification
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "fileName": "full_backup_2023-10-31T00-00-00Z.tar.gz",
  "boxFileId": "9876543210",
  "uploadStatus": "success",
  "timestamp": "2023-10-31T00:05:12Z",
  "emailNotification": "sent"
}
```

## Troubleshooting

### Common Issues
1. **“Invalid Box Folder ID”** – Verify `BOX_FOLDER_ID` and ensure the OAuth user has write permissions.
2. **Mailgun 401 Unauthorized** – Check that you used the Private API key and the domain is verified.
3. **Backup file too large** – Enable chunked upload in Box node or increase `client_max_body_size` on reverse proxy.

### Performance Tips
- Compress backups with gzip or zstd to reduce upload time.
- Run the database dump on the same host as n8n to avoid network overhead.

**Pro Tips:**
- Store secrets as environment variables and reference them in Code nodes (`process.env.MY_SECRET`).
- Chain backups with version numbers (`YYYYMMDD_HHmm`) for easy sorting.
- Use n8n’s built-in execution logging to audit backup history.

---

*This is a community workflow template provided “as-is” without warranty. Adapt and test in a safe environment before using in production.*

## 🔗 Nodes Used

HTTP Request, Mailgun, Webhook, Convert to/from binary data, Box

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
