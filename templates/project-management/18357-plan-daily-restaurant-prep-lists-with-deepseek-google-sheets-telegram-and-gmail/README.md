# 📋 Plan daily restaurant prep lists with DeepSeek, Google Sheets, Telegram and Gmail

> ⚡ **26 views** · 📋 [Project Management](../)

## Description

Mise en place, automated. This workflow builds your daily restaurant prep list from a Google Sheets master, has AI plan the quantities, logs tasks back to Sheets, and notifies the team. Crews confirm completion from their stations, and Mondays bring a completion report.

*Last updated: September 2026.*

## Quick overview
This workflow generates a daily restaurant prep list from a Google Sheets master, uses an OpenAI (DeepSeek) model to plan quantities, logs tasks back to Google Sheets, and notifies the team via Telegram and Gmail, with webhook-based completion updates and a weekly completion report.

## How it works
1. Runs every day at 07:00 (Asia/Jakarta) or when a POST request hits the /prep/generate webhook to start prep planning.
2. Reads the PrepItems master list from Google Sheets and compiles a day-specific context (date, weekday, items, par levels, and units).
3. Sends the context to an OpenAI (DeepSeek) chat model to generate a JSON prep plan and validates that at least one prep item is returned.
4. Appends each planned prep item to the PrepLog sheet in Google Sheets with a PENDING status, then posts a formatted prep summary to Telegram and emails it to the manager via Gmail.
5. Receives POST requests on /prep/complete to mark items DONE or SKIPPED, updates the matching row_key status in the PrepLog sheet, and confirms the update in Telegram and by email.
6. Runs every Monday at 09:00 to read the PrepLog sheet, calculate completion stats, generate a short weekly digest with the OpenAI (DeepSeek) model, and send the report via Gmail and Telegram (or posts a “no data” notice if nothing is logged).
7. If daily planning fails (for example, the plan is empty or a completion payload is invalid), sends an error alert to Telegram and the manager via Gmail.

## Setup
1. Create a Google Sheets spreadsheet with a PrepItems sheet (item, station, par_qty, unit) and a PrepLog sheet (prep_date, row_key, item, station, qty, unit, status), then update the Google Sheets document ID if you are not using the included one.
2. Add credentials for Google Sheets OAuth2, Gmail OAuth2, Telegram Bot API, and an OpenAI-compatible API key for the DeepSeek model used by the AI agent nodes.
3. Set the Telegram chat ID for kitchen notifications and the manager email address in the Telegram and Gmail send steps.
4. Copy the /prep/generate and /prep/complete webhook URLs from [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) and configure your kitchen tool (or a simple form) to POST row_key and status (DONE/SKIPPED) to the completion endpoint.
5. Adjust the cron schedules (07:00 daily and 09:00 Mondays) and the AI prompts if you need different planning rules, stations, or report wording.

### Quick Answers
**When does planning run?**  
Daily at 07:00, or on demand via the /prep/generate webhook.  
**How do stations confirm?**  
POST DONE or SKIPPED with the row_key to /prep/complete. Telegram and email confirm back.  
**Is there a weekly review?**  
Yes. Monday 09:00 completion stats and digest, or a "no data" notice when empty.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
