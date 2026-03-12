# 📈 Predict next 5-day stock trends with Twelve Data API & Google Sheets

> ⚡ **558 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

This automated n8n workflow fetches stock data from the Twelve Data API after market close, predicts 5-day trends using AI analysis, updates Google Sheets with the results, and sends an email summary report. This process helps users stay informed about stock movements and make data-driven decisions efficiently.

## Good to Know
- AI prediction accuracy improves with more historical stock data.
- Market conditions and external factors can influence prediction outcomes.
- Google Sheets access must be authorized to ensure smooth data updates.
- Email notifications ensure timely delivery of summary reports.
- The system relies on the Twelve Data API as the primary data source.

## How It Works
- **Daily Market Close Trigger** - Initiates the workflow daily at 9:00 PM (after market close), Monday to Friday.
- **Read Stock Symbols** - Reads stock symbols from a Google Sheet to determine which stocks to analyze.
- **Set Configuration Variables** - Configures API keys and other necessary variables manually.
- **Fetch 5-Day Stock Data** - Retrieves 5-day stock data from the Twelve Data API.
- **Analyze Stock Trends** - Uses AI to predict 5-day stock price movements based on the fetched data.
- **Update Google Sheet** - Appends the analysis results to a Google Sheet for tracking.
- **Format Email Report** - Creates a concise, human-friendly summary of the stock predictions.
- **Send Email Report** - Delivers the summary report via email to designated recipients.

## Data Sources
The workflow utilizes one Google Sheet:

- **Stock Data Sheet** - Contains stock analysis data with columns:
  - Date (date)
  - Stock Symbol (text)
  - Current Price (number)
  - Predicted 5-Day Trend (text)
  - Confidence Level (number)
  - Notes (text)

## How to Use
- Import the workflow into n8n.
- Configure Google Sheets API access and authorize the application.
- Set up email credentials for report delivery.
- Create the required Google Sheet with the specified column structure.
- Configure the Twelve Data API key.
- Test with sample stock data to verify predictions and email delivery.
- Adjust analysis parameters based on your specific stock monitoring needs.
- Monitor and refine the system based on actual vs. predicted trends.

## Requirements
- Google Sheets API access.
- Email service credentials (Gmail, SMTP, etc.).
- Twelve Data API key.
- Initial stock data for analysis.

## Customizing This Workflow
Modify the Stock Trend Predictor parameters to focus on specific stock sectors or adjust prediction horizons. Customize the email report format to match your preferences and integrate additional data sources like news feeds or financial indicators if needed.

## 🔗 Nodes Used

Cron, Send Email, Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
