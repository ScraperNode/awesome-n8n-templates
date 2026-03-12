# 📈 Daily stock market report with Twelve Data API sent via WhatsApp and email

> ⚡ **919 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

This workflow automates the generation of a daily stock market report, identifying the top gainers and losers among the top 100 stocks. It fetches real-time stock data, processes it to highlight significant price movements, and delivers formatted alerts via WhatsApp and email.

## Quick Notes

- Ensure the Twelve Data API key and stock symbols are correctly configured.
- Verify recipient lists for WhatsApp and email alerts are up-to-date.
- Confirm the workflow triggers at 5:00 PM (IST) from Monday to Friday.

## Process Flow

1. Trigger the workflow daily at 5:00 PM (IST) with the `Daily Market Change Trigger` node.
2. Configure API key, stock symbols, and alert recipients using the `Configuration Variables` node.
3. Fetch stock data from Twelve Data API with the `Fetch Stock Data from Twelve Data` node.
4. Process stock data to identify top gainers and losers with the `Process Stock Movements` node.
5. Format WhatsApp messages with the `Format WhatsApp Message` node.
6. Send WhatsApp alerts with the `Send WhatsApp Alert` node.
7. Format email content with the `Format Email Content` node.
8. Send email alerts with the `Send Email Alert` node.

## Output

![Screenshot from 20250822 131202.png](fileId:2172)

## Getting Started

- Import the workflow into n8n and configure Twelve Data API credentials.
- Set up WhatsApp and email service integrations.
- Run a test execution to ensure data fetching and alert delivery work as expected.

## Tailored Adjustments

- Adjust the `Process Stock Movements` node to change the number of top gainers/losers.
- Modify the `Configuration Variables` node to include additional stock symbols or recipient lists.

## 🔗 Nodes Used

Cron, Send Email, HTTP Request, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
