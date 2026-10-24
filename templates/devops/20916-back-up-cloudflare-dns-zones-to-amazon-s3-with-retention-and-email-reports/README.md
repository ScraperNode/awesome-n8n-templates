# ⚙️ Back up Cloudflare DNS zones to Amazon S3 with retention and email reports

> ⚡ **2 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs daily to export DNS records for your Cloudflare zones as BIND zone files, store them in Amazon S3 with a retention policy, and email a per-run report showing successes, failures, and any backups removed.

## How it works
1. Runs every day at 03:00 on a schedule.
2. Validates the backup configuration (S3 bucket/prefix, retention values, and report email addresses) and stops with a clear error if placeholders remain.
3. Calls the Cloudflare API to list zones, optionally filters to the zone names you specify, and emits actionable errors for missing or inaccessible zones.
4. For each zone, exports the zone file from Cloudflare, compares the exported record count to Cloudflare’s DNS record count, and uploads the BIND-formatted `.zone` file to Amazon S3 under `prefix/zone/YYYY-MM-DD.zone`.
5. Lists existing backups for each successfully uploaded zone and deletes dated `.zone` files past the retention window while always keeping the newest `keep_at_least` copies and skipping cleanup for zones that failed today.
6. Sends a plain-text email report via SMTP summarizing which zones were backed up, which failed (with reasons), and which old backups were removed.

## Setup
1. Create a Cloudflare API token with Zone permissions for **Zone:Read** and **DNS:Read**, and add it in n8n as a Cloudflare API credential.
2. Add an AWS credential with permission to list, upload, and delete objects in your target S3 bucket.
3. Add an SMTP credential for sending the report email.
4. Update the "Backup settings" values (zones list optional, S3 bucket and prefix, retention_days, keep_at_least, and notify_email/notify_from).
5. Run the workflow once manually to confirm the S3 uploads and review the email report before enabling the schedule.

## Requirements
- A Cloudflare account with at least one zone (tested on the Free plan)
- A Cloudflare API token with Zone - Zone - Read and Zone - DNS - Read
- A private Amazon S3 bucket, and an IAM user with s3:ListBucket and s3:GetBucketLocation on the bucket plus s3:PutObject and s3:DeleteObject under your prefix
- An SMTP credential for the report

## Customization
- Change the schedule in the trigger node - it runs daily at 03:00 by default
- List zone names in zones, separated by commas, to back up only those
- retention_days and keep_at_least set how long copies are kept and how many are always kept

## Additional info
Full setup and restore guide: https://datadrifter.io/cloudflare-dns-backup-restore/

To restore a deleted record, copy its line from the latest backup into a new file and import it in the Cloudflare dashboard under DNS > Records > Import and Export. Cloudflare's import only adds records, so import a whole file only into an empty zone. Check the proxy setting of each restored record.

This backs up DNS records only - not zone settings, page rules, firewall rules or Workers.

## 🔗 Nodes Used

Send Email, HTTP Request, AWS S3, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
