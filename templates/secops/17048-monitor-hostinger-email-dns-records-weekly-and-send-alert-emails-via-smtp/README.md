# 🔒 Monitor Hostinger email DNS records weekly and send alert emails via SMTP

> ⚡ **16 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This workflow runs every Monday at 8am to check email-related DNS records (MX, SPF, DMARC, and DKIM) for all domains in your Hostinger account and sends an HTML alert email when it detects missing records, tracking prior results to highlight new breakage.

## How it works
1. Runs every Monday at 8am and sets the notification email address used for alerts.
2. Fetches the full domain list from Hostinger and processes each domain one by one.
3. Retrieves the DNS zone for each domain from Hostinger and checks for active MX records plus valid SPF, DMARC, and DKIM TXT records.
4. Compares the current results to the previous run stored in workflow static data to mark problems as new or ongoing.
5. Builds an HTML email describing the missing records for any affected domain and sends the alert via SMTP/email credentials to the configured recipient.

## Setup
1. Add your Hostinger API credentials for the steps that list domains and retrieve DNS zones.
2. Configure your SMTP/email-sending credentials for the email node used to send alerts.
3. Update the notification email address (and, if needed, the from/to fields) so alerts go to the right recipient.
4. Review and adjust the DNS validation rules in the code steps if your SPF/DMARC/DKIM record naming or expectations differ.

## 🔗 Nodes Used

Send Email, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
