# 📈 Collect historical price data from Polymarket Up/Down markets into Supabase

> ⚡ **520 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

This workflow automatically collects historical price data from Polymarket Up/Down markets and stores it in Supabase, creating a structured and query-ready dataset for analysis. By continuously fetching price movements from prediction markets such as Bitcoin, S&P 500, and other Up/Down series, the automation enables reliable historical tracking without manual intervention. The data is normalized and persisted in Supabase, making it easy to run SQL queries, build dashboards, perform quantitative analysis, or integrate with analytics and AI pipelines. This setup is ideal for traders, data analysts, and developers who need accurate Polymarket price history for research, strategy testing, or long-term market monitoring

**How it works**

- Provide the slug of the serial market you want to analyze in the initial form. The workflow is designed for live Polymarket “Up or Down” markets; copy the slug from the current market and submit it.

- From the slug, the workflow extracts the event ID and derives the corresponding series ID. All events in that series are retrieved, organized, and stored in an internal n8n table. This process runs only once per series to avoid duplicate data.

- A second workflow reads the stored events, retrieves the Up and Down token IDs, records market closing times, and filters out open markets so only historical data is processed.

- Market end times are converted to Unix timestamps, and start times are calculated. The workflow is structured for 1-hour markets, but the time-conversion node can be adjusted for other durations.

- Historical price data is then fetched and stored in a Supabase table for later analysis.

**How to use**

- Copy the slug of the desired Up or Down market from Polymarket and submit it through the form.

- After the first workflow finishes, run the second workflow to collect historical price data.

- Events are processed in batches of 100 to avoid performance issues. If execution stops, simply rerun the workflow and it will continue from where it left off.

**Need help with implementation or customization?**

If you require assistance setting up this workflow, adapting it to your infrastructure, or extending it for advanced analytics, feel free to reach out by email at caio@caravelsai.com
.

## 🔗 Nodes Used

HTTP Request, Supabase, n8n Form Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
