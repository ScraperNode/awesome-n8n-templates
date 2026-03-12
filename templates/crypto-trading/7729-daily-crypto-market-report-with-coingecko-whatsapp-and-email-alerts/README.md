# 📈 Daily crypto market report with CoinGecko, WhatsApp, and email alerts

> ⚡ **541 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

This workflow automates the generation of a daily crypto market report, identifying the top 24-hour gainers and losers among the top 100 cryptocurrencies. It fetches real-time data, processes it to highlight significant price movements, and delivers formatted alerts via WhatsApp and email.

## Quick Notes

- Ensure the CoinGecko API key is correctly configured.
- Verify phone numbers and email addresses for alert recipients.
- Confirm the workflow triggers at 00:00 UTC daily.

## Process Flow

1. Trigger the workflow daily at 00:00 UTC with the `Daily Crypto Trigger` node.
2. Configure phone numbers, email addresses, and API key with the `Set Configuration Variables` node.
3. Fetch crypto data from CoinGecko API with the `Fetch Crypto Data from CoinGecko` node.
4. Process crypto data to rank top 24-hour movements with the `Process Crypto Movements` node.
5. Format WhatsApp messages with the `Format WhatsApp Message` node.
6. Send WhatsApp alerts with the `Send WhatsApp Alert` node.
7. Format email content with the `Format Email Content` node.
8. Send email alerts with the `Send Email Alert` node.

## Output
![Screenshot from 20250822 151230.png](fileId:2173)
## Getting Started

- Import the workflow into n8n and set up CoinGecko API credentials.
- Configure WhatsApp and email service integrations.
- Run a test execution to verify data fetching and alert delivery.

## Tailored Adjustments

- Adjust the `Process Crypto Movements` node to change the number of top gainers/losers.
- Modify the `Set Configuration Variables` node to include additional recipient contacts or API parameters.

## 🔗 Nodes Used

Cron, Send Email, HTTP Request, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
