# 📈 Automate fundamental stock analysis with FinnHub data and Google Sheets DCF calculator

> ⚡ **139 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

![DCF.png](fileId:3594)

[Demonstration video](https://youtu.be/mMlM2P4Vf0g)


## Disclaimers

This workflow contains custom community nodes that requires local network version of n8n.

This analysis is for informational and educational purposes only and does not constitute financial advice, investment advice, or a recommendation to buy or sell any security. This model is based on historical, publicly available data and future projections are purely theoretical. Stock market investing involves substantial risk, including the loss of principal. All investment decisions are solely the responsibility of the user.

 

# What It Does

Our proprietary workflow automates the most time-intensive components of fundamental research: Data Acquisition, TTM Aggregation, Growth Forecasting, and Intrinsic Valuation.





Institutional Data Engine: Automatically extracts and cleans the last 6 years of annual reports and quarterly reports from FinnHub.



TTM & Q4 Derivation: Proprietary code handles calculates the true Trailing Twelve Months (TTM) figures for Revenue, Net Income, FCF, Dividends, and Stock-Based Compensation (SBC).



Advanced Growth Metrics: The system instantly calculates vital performance indicators: 3-Year & 5-Year Compound Annual Growth Rates (CAGR) for Revenue, Net Income, Free Cash Flow (FCF), and Dividends.



Intrinsic Valuation (DCF): The workflow applies a Discounted Cash Flow (DCF) model, using the calculated TTM FCF as the base for a multi-year explicit forecast, generating a theoretical intrinsic price target for the company's stock.



Automated Reporting: All current snapshots, growth metrics, and historical data are cleanly transferred to a Google Sheets template where charts, tables, and dashboards auto-populate instantly.

This solution provides investors with rapid, objective, and institutional-grade financial modeling at zero cost-to-run.

 

# Who This is For

This platform is designed for data-driven investors and financial analysts who need to quickly screen companies, compare competitors, and access precise DCF valuations and growth trends without the manual effort of data compilation and spreadsheet modeling. It is ideal for anyone seeking objective, automatically generated financial insights.

 

# How It Works
- Data Acquisition & Structuring: The system initiates by securely extracting comprehensive historical financial data and regulatory filings (10-K, 10-Q) from FinnHub using the target stock ticker.
- Core Metric Calculation & Cleaning: Proprietary code processes the raw reports to extract key financial metrics, including revenue, net income, free cash flow, debt, cash & cash equivalents, dividends, stock based compensation, outstanding shares for all periods.
- TTM metrics: The workflow calculates the current TTM for all flow metrics (revenue, net income, FCF, and dividends) by summing the four most recent periods.
- Growth Rate Calculation (CAGR & YoY): The workflow branches to calculate long-term performance indicators, generating the 3 & 5-Year CAGR for revenue, net income, FCF, and dividends.
- Discounted Cash Flow (DCF) Valuation: The workflow initiates the DCF model, projecting the calculated TTM FCF forward over an explicit period and discounting the cash flows to generate a theoretical intrinsic stock price.
- Presentation & Reporting (Google Sheets): All calculated data (TTM and SEC reports), Growth Metrics, and DCF model is organized and written to a dedicated Google Sheet. The sheet's pre-built charts and tables instantly auto-populate upon execution.

 

# Set Up Steps
1. You will need a FinnHub account and API key to connect to the Https Request Nodes. FinnHub is a free service.
2. You will need a Google cloud and sheets account to create and connect the final Google Sheets document.
3. Requires OAuth which is free.
4. There is no cost to execute the workflow.
5. Detailed instructions included to obtain API keys and OAuth for Google cloud.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
