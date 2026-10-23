# 📈 Monitor portfolio correlation and diversification with Google Sheets and Slack

> ⚡ **18 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs monthly to read portfolio holdings from Google Sheets, fetch 90 days of historical prices via an HTTP endpoint, calculate pairwise correlations and a diversification score, store results back to Google Sheets, generate a QuickChart visualization, and post a diversification report to Slack.

## How it works
1. Runs on a monthly schedule trigger.
2. Loads portfolio holdings from Google Sheets and filters to rows with a non-empty ticker and asset type plus a positive quantity.
3. Calculates per-holding portfolio weights and calls an HTTP market-data endpoint to retrieve 90 days of historical closing prices for each ticker.
4. Consolidates the returned price data, converts prices into daily returns, and computes a Pearson correlation matrix and pairwise correlation list across all holdings.
5. Derives portfolio diversification metrics such as average correlation, diversification score, risk level, and the highest/lowest correlated pairs.
6. Builds a QuickChart bar chart URL from the pairwise correlations and requests the rendered chart image.
7. Appends the diversification summary and pairwise correlation records to separate Google Sheets tabs and posts the formatted diversification report to a Slack channel.

## Setup
1. Create a Google Sheets OAuth credential and point the workflow to your spreadsheet, ensuring you have tabs for “Portfolio Holdings”, “Diversification Log”, and “Pairwise Correlations” with matching column names.
2. Populate the “Portfolio Holdings” sheet with at least two rows containing ticker, quantity, and asset_type values.
3. Update the HTTP Request URL (and add any required authentication headers) to a market-data service that returns each ticker’s historical daily close prices for the requested number of days.
4. Create a Slack credential/connection, select the destination channel, and verify the workflow has permission to post messages.

## Additional info
## Add-ons

The following are optional extensions and are not included in the current workflow:

* **Correlation Threshold Alerts:** Send an alert when selected asset correlations exceed a defined threshold.
* **Diversification Trend Tracking:** Compare current diversification scores with previous analysis runs.
* **Email Reporting:** Send the diversification report through Gmail in addition to Slack.
* **Additional Charts:** Generate historical diversification or correlation trend charts.
* **Advanced Portfolio Weighting:** Calculate weights using market value or another portfolio-specific methodology.


## Use Case Examples

1. **Monthly Portfolio Review:** Automatically analyze asset correlations and diversification as part of a recurring portfolio review.

2. **Diversification Monitoring:** Track the relationship between portfolio holdings and identify highly correlated assets.

3. **Investment Research:** Review the strongest and weakest relationships between assets using historical price data.

4. **Team Risk Reporting:** Send a concise diversification summary to a Slack channel after each scheduled analysis.

5. **Historical Correlation Tracking:** Maintain portfolio-level and pairwise correlation records in Google Sheets for future analysis.

Additional use cases can be supported through workflow customization.


## Troubleshooting Guide

| Issue                               | Possible Cause                                                                           | Solution                                                                                 |
| ----------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Workflow does not start             | The workflow is inactive or the schedule has not executed                                | Run the workflow manually for testing and verify the schedule configuration              |
| Holdings are rejected               | Ticker, quantity, or asset type is missing or invalid                                    | Check the `Portfolio Holdings` sheet and provide valid values                            |
| Fewer than two assets are available | Not enough valid portfolio holdings or market-data results                               | Ensure at least two holdings contain valid historical price data                         |
| Market data request fails           | The webhook-test endpoint is unavailable or the production API is incorrectly configured | Configure the appropriate production endpoint and verify its request and response format |
| Correlation calculation fails       | Insufficient overlapping historical observations                                         | Ensure the assets have enough overlapping daily price data                               |
| Google Sheets records are missing   | Google Sheets credential or sheet configuration is incorrect                             | Verify the credential, spreadsheet, and target sheet configuration                       |
| Slack notification is not received  | Slack credential or channel configuration is incorrect                                   | Verify the Slack credential and selected destination channel                             |
| Correlation chart is not generated  | QuickChart URL or chart configuration is invalid                                         | Review `Build Correlation Chart Configuration` and verify the generated chart request    |


## Need Help

WeblineIndia can help with n8n workflow setup, Google Sheets and Slack integration, production market-data API configuration, customization, troubleshooting, and optional add-ons. If you need a similar n8n automation for portfolio monitoring, financial analysis, reporting or another business process, [contact WeblineIndia](https://www.weblineindia.com/contact-us.html) for implementation and customization support.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
