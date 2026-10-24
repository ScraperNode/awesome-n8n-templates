# 🔒 Audit SPF DNS lookup limits with Google DNS, Slack, and Gmail

> ⚡ **4 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs daily (or manually) to audit SPF DNS lookup usage for your domains via Google DNS-over-HTTPS, then sends an alert digest to Slack and Gmail when records are missing, unsafe, or near/over the 10-lookup limit.

## How it works
1. Runs every morning at 07:00 or when you manually execute the workflow.
2. Reads a comma-separated domain list and alert destinations (Slack channel and email recipient) from the configuration values.
3. Queries Google’s DNS-over-HTTPS endpoint to fetch each domain’s SPF TXT record, then follows any SPF include and redirect targets for two additional DNS resolution rounds.
4. Replays the RFC 7208 SPF lookup counting rules offline to calculate total DNS lookups per domain, flagging issues like missing SPF, +all, multiple SPF records, macro-based targets, and over-limit trees.
5. Builds a Slack Block Kit message and an HTML email digest that prioritizes the most severe findings and includes recommended actions.
6. Posts the digest to the configured Slack channel and sends the email via Gmail only when there is something actionable (manual runs always produce a report).

## Setup
1. Update the domain list, Slack channel name, and alert recipient email address in the configuration values.
2. Add Slack OAuth2 credentials with permission to post to your target channel.
3. Add a Gmail credential for the account that sends the security digest email.
4. (Optional) Adjust the schedule time if 07:00 is not suitable, then run the workflow manually once to verify output before activating it.

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
