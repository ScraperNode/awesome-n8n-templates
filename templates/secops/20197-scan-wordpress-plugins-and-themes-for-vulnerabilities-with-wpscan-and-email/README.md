# 🔒 Scan WordPress plugins and themes for vulnerabilities with WPScan and email

> ⚡ **21 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs nightly to inventory your WordPress plugins and themes via the WordPress REST API, checks them against the WPScan vulnerability database within your API quota, stores scan history in an n8n Data Table, and emails a report of any applicable issues.

## How it works
1. Runs every night at 03:30 on a schedule.
2. Validates the scan settings (site URL, email addresses, and per-run lookup limit) and fetches the remaining daily API quota from WPScan.
3. Retrieves the installed plugins and themes from the WordPress REST API and loads prior check timestamps from an n8n Data Table.
4. Selects which components to scan based on the available quota, prioritizing active components and those checked least recently.
5. Queries WPScan for each selected component and filters vulnerabilities to only those that affect the installed version.
6. Upserts the results (including last checked time and findings) into the `wpscan_scan_history` Data Table.
7. Builds a plain-text report (including items not checked or lookup failures) and sends it by SMTP email when configured to do so.

## Setup
1. Create an n8n Data Table named `wpscan_scan_history` with String columns `component`, `kind`, `slug`, `version`, `last_checked`, `findings` and a Number column `affected_count`.
2. Add a WordPress Application Password for an administrator user and configure an n8n HTTP Basic Auth credential for the WordPress REST API requests.
3. Create a WPScan API token and configure an n8n Header Auth credential with `Authorization: Token token=YOUR_TOKEN`.
4. Add an SMTP credential for the email node and set the allowed sender address.
5. Update `site_url`, `notify_email`, `notify_from`, and (optionally) `wp_core_version`, `max_lookups_per_run`, and `alert_only_on_findings` in the Scan settings before activating the workflow.

## Requirements
- A WordPress site with the REST API reachable from n8n
- A WordPress administrator account (for the Application Password)
- A WPScan API token (free tier: 25 lookups a day)
- n8n with Data tables, and an SMTP server for the report

## Customization
- Set wp_core_version to include WordPress core in the scan
- Set alert_only_on_findings to true to email only when something is found
- Raise max_lookups_per_run if you have a paid WPScan plan
- Change the time in the schedule trigger

## Additional info
This is a known-vulnerability check, not a malware scanner, firewall or penetration test. The Application Password is administrator-level because listing plugins requires it; revoke it when you stop using this workflow. Full setup guide: https://datadrifter.io/wordpress-plugin-vulnerabilities-wpscan-api/

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
