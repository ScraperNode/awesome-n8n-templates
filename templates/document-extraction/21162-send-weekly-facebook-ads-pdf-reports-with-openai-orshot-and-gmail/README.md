# 🔬 Send weekly Facebook Ads PDF reports with OpenAI, Orshot and Gmail

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every Monday, pulls each active client’s weekly Meta Ads performance via the Facebook Graph API, uses OpenAI to write a short summary and next steps, renders a branded PDF report with Orshot, emails it via Gmail, and logs the outcome to Google Sheets.

## How it works
1. Runs every Monday at 8am.
2. Reads a client list from Google Sheets and keeps only rows marked as active.
3. Queries the Facebook Graph API (Meta Ads insights) for the last 7 days by campaign and the prior 7-day period at account level for comparison.
4. Calculates key KPIs (spend, impressions, clicks, CTR, results, cost per result, and ROAS), skips clients with no spend, and prepares template variables for the report.
5. Sends the KPI data to OpenAI to generate a short narrative summary and three concrete recommendations.
6. Renders a two-page branded PDF in Orshot using the generated text and KPI/template variables, then downloads the PDF.
7. Emails the PDF to each client via Gmail and appends a row to a Google Sheets report log with the PDF link, status, and any errors.

## Setup
1. Connect credentials for Google Sheets, Facebook Graph API (Meta Ads access token with ads_read), OpenAI, Orshot, and Gmail.
2. Create a Google Sheets file with a Clients tab (Client name, Ad account ID, Email, Currency, Result type, Active) and a Reports tab, then select the correct document and sheet names in both Google Sheets steps.
3. Add the report template to your Orshot workspace ([See example template](https://orshot.com/templates/2469)) and pick it in Render report PDF. You can change colors, fonts and add your logo in the Orshot editor.
4. Update the agency name and footer text constants in the report-building code step to match your branding.
5. Verify each client row has a valid ad account ID (with or without the act_ prefix), currency code, result type (e.g. purchase/lead/complete_registration), and recipient email address.

## Requirements
- An Orshot API key from [Orshot](https://orshot.com/?utm_source=n8n&utm_medium=template&utm_campaign=facebook-ads-reports). The free plan includes 100 credits every month, no card needed
- A Meta access token with ads_read for the ad accounts you report on
- OpenAI, Google Sheets and Gmail credentials

## Customization
- Change the schedule to monthly and the date ranges in the two Meta steps to 30 days for monthly reports
- Add your agency email in CC in Email report to client, or send the PDF to Slack instead
- Add more KPIs or a chart page to the template in Orshot, then map the new fields in Render report PDF

## Additional info
What the PDF looks like: [sample report](https://storage.orshot.com/cloud/w-131/renders/images/ink-lime-report-harbor-test-eR8cgOOX30I.pdf). How Orshot turns templates into PDFs from any app or API: [PDF Generation API](https://orshot.com/solutions/pdf-generation-api?utm_source=n8n&utm_medium=template&utm_campaign=facebook-ads-reports)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Facebook Graph API, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
