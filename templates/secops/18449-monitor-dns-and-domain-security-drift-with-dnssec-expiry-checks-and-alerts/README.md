# 🔒 Monitor DNS and domain security drift with DNSSEC, expiry checks and alerts

> ⚡ **30 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs hourly (or manually) to resolve DNS records for configured domains using Node.js DNS lookups, compares them to an expected baseline, and classifies detected changes as standard logs or critical security alerts with a short dedup wait before escalation.

## How it works
1. Runs every hour on a cron schedule or starts manually for testing.
2. Loads the monitored domain list, each domain’s expected DNS baseline, and the allowed IP prefixes for A/AAAA records.
3. Resolves live DNS records (A, AAAA, MX, NS, TXT, CNAME, SOA) for each domain using Node.js DNS resolution.
4. Compares current DNS answers to the baseline to detect added/removed records by type and flags suspicious A/AAAA targets outside the allowed IP prefixes.
5. If no changes are detected, outputs a “no action” note.
6. If changes are detected, classifies severity (Info/Warning/Critical) and builds an alert message with recommended actions.
7. Routes Critical findings through a short wait window before outputting a critical alert payload, and sends non-critical findings to a standard security log payload.

## Setup
1. Update the configuration with your domains and their expectedRecords baseline values used for comparison.
2. Set allowedIpCidrPrefixes to the IP prefixes your infrastructure is allowed to resolve to so unexpected A/AAAA targets are flagged.
3. Ensure your n8n runtime environment permits outbound DNS resolution from Code nodes (Node.js built-in dns module).
4. Connect the standard and critical outputs to your notification or ticketing tool (for example Slack, PagerDuty, or email) and map the alert fields as needed.
5. Adjust the schedule trigger (cron expression) and the critical-path wait duration to match your monitoring and escalation requirements.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
