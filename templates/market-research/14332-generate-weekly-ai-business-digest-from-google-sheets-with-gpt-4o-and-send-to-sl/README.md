# 📊 Generate weekly AI business digest from Google Sheets with GPT-4o and send to Slack and email

> ⚡ **31 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this for

Founders, marketing managers, and ops teams who track weekly business metrics in Google Sheets and want an automated AI-generated performance report delivered to Slack and email every Monday. Perfect for agencies, e-commerce businesses, and SaaS teams who need a quick pulse check without building custom dashboards.

## How it works

Every Monday at 8am, the workflow pulls the last 14 days of business metrics from your Google Sheet. A code node calculates week-over-week comparisons for revenue, leads, conversions, ad spend, and support tickets — plus derived metrics like conversion rate and ROAS.

The calculated data is sent to OpenAI, which generates a concise performance digest with five sections: headline summary, wins, areas to watch, recommended priorities for the week, and a brief outlook. The digest is formatted for both Slack (plain text with emoji) and email (styled HTML with a metrics table), then delivered to both channels simultaneously.

## How to set up

1. Open the **Set report config variables** node and fill in your Google Sheet ID, sheet name, Slack channel, email recipients, and company name.
2. Prepare your Google Sheet with these columns: Date, Revenue, Leads, Conversions, Ad Spend, Support Tickets. Enter at least 14 rows of daily data.
3. Connect your Google Sheets, OpenAI, Slack, and Gmail credentials.
4. Optionally adjust the schedule trigger for a different day or time.
5. Activate the workflow. You can also trigger it manually for an immediate test.

## Requirements

- Google Sheets with weekly business metrics (at least 14 days of data)
- OpenAI API key (GPT-4o-mini recommended for cost efficiency)
- Slack workspace
- Gmail account

## How to customize

- Change the metric columns in the **Calculate weekly comparisons** code node to match your actual data structure.
- Modify the AI prompt to focus on your industry-specific KPIs or add a different reporting tone.
- Add a PDF generation step to create executive-ready downloadable reports.
- Split the delivery to send different summaries to different Slack channels (e.g., marketing metrics to #marketing, support metrics to #support).

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
