# 🧾 Split shared rental utility bills with gpt-5.6-terra Vision, Postgres and Gmail

> ⚡ **3 views** · 🧾 [Invoice Processing](../)

## Description

Split the utility bill fairly without spreadsheet drama. Snap a photo of the bill and this workflow reads it with AI vision, splits charges across rental units by occupancy weight, and notifies owners and tenants. A daily sweep catches anything left unpaid.

*Last updated: September 2026.*

## Quick Overview
This workflow accepts forwarded utility bill images via a webhook, uses OpenAI gpt-5.6-terra Vision to extract bill details, splits the total across rental units using Postgres tenant weights, and then notifies owners and tenants via Gmail and Discord, with daily follow-ups for any bills not completed.

## How it works
1. Receives a POST webhook request containing a utility bill image (URL or base64) and basic metadata from an email forward or form.
2. If an image is present, sends it to OpenAI gpt-5.6-terra Vision and parses the returned JSON fields such as provider, dates, period, and total amount.
3. Rejects unreadable bills, missing totals, or non-positive totals by logging them to Postgres and alerting the team via Discord and Gmail.
4. For valid bills, loads the tenant roster from Postgres and calculates a deterministic per-unit charge split proportional to each unit’s occupancy weight with cent-accurate rounding.
5. Stores the bill and per-unit charge records in Postgres, posts a split summary to Discord, emails the owner a detailed breakdown, and emails each tenant their individual charge.
6. Marks the bill as done in Postgres after tenant notifications are sent.
7. Runs daily on a schedule to find older bills not marked done in Postgres and posts/email a follow-up list (or an all-clear) to Discord and the owner.

## Setup
1. Add credentials for OpenAI (API key), Postgres, Gmail OAuth2, and a Discord bot, and ensure the Discord server/channel IDs match your workspace.
2. Create the Postgres tables used by the workflow (ub_tenants, ub_bills, and ub_meter_readings) and ensure ub_bills has a unique constraint on bill_id.
3. Populate ub_tenants with each unit’s tenant name, email, and occupancy_weight values used to split bills.
4. Update the owner notification email address in the Gmail steps and confirm tenant emails in ub_tenants are correct.
5. Copy the webhook URL for the “utilitybill” endpoint and configure your email forwarding rule or intake form to POST the image_url or image_base64 fields to it.
6. Adjust the daily sweep cron expression (default 08:00) and workflow timezone if needed.

### Quick Answers
**How is the split calculated?**  
Proportionally by each unit's occupancy weight, with cent-accurate rounding.  
**What if a bill can't be read?**  
It gets logged to Postgres and the team is alerted via Discord and Gmail.  
**Which tables do I need?**  
ub_tenants, ub_bills, and ub_meter_readings in Postgres.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Discord, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
