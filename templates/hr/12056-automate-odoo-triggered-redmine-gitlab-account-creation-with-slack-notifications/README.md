# 👥 Automate Odoo-triggered Redmine & GitLab account creation with Slack notifications

> ⚡ **42 views** · 👥 [HR & Recruitment](../)

## Description

## 📌Who is this for?
HR teams, IT Operations, and System Administrators managing employee onboarding at scale.
It’s perfect if you use Odoo 18 to trigger account requests and need Redmine + GitLab accounts created instantly and consistently.

## 📌The Problem
Manual account creation creates bottlenecks:
- IT waits for HR notifications that often get missed or delayed.
- Duplicate accounts pile up when no one checks existing data first.
- Account creation timelines are inconsistent (sometimes correct, sometimes wrong).
- Zero visibility into what succeeded or failed.

## 📌What It Does
 Catches an employee account creation request from Odoo 18 → queries employee data → checks for existing accounts → creates only the accounts that are missing → notifies your team via Slack with the full status.
Here's the flow in detail:
1. **Webhook trigger from Odoo 18** - automatically fires when your HR team marks an employee as needing Redmine, GitLab, or both.
2. **Fetch employee data from Odoo 18** - pulls email and account type requirements.
3. **Deduplicate requests** - separates "needs both," "GitLab only," and "Redmine only" cases.
4. **Check for existing accounts** - queries Redmine and GitLab to avoid duplicate creation attempts.
5. **Create accounts** - uses Redmine and GitLab APIs to spin up accounts (only if they don't exist).
6. **Slack notification** - sends a summary showing what was created, skipped, or failed- including error details if something went wrong.

## 📌Quick Setup
- Generate a Webhook URL in n8n and configure Odoo 18 to call it during onboarding.
- Add Redmine admin API key and GitLab admin access token.
- Enable /users.json (Redmine) and /users (GitLab) endpoints.
- Configure Slack webhook for notifications.
- Test with sample data, then activate.

## 📌Results
- Zero duplicates - the system checks before creating.
- Full visibility - Slack reports every single attempt.
- Instant delivery - new hires get accounts on day one.
- Dramatically reduced IT workload.

## 📌Take It Further
- Auto-assign projects in Redmine/GitLab post-creation.
- Generate passwords or TOTP setup and email them to new hires.
- Log everything to Google Sheets, Notion, or a database.
- Handle multi-tenant setups if your Odoo manages multiple organizations.
- Add provisioning for Slack, Google Workspace, VPN, or other systems.

## 📌Need help customizing?
Contact me for consulting and support:
[Linkedin](https://www.linkedin.com/company/bac-ha-software/posts/?feedView=all) / [Website](https://bachasoftware.com/bhsoft-contacts)

## 🔗 Nodes Used

HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
