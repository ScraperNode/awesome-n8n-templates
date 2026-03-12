# 📈 Deliver daily currency exchange rates from CurrencyFreaks API to email & WhatsApp

> ⚡ **382 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

This automated n8n workflow delivers daily multi-currency exchange rate updates via API to email and WhatsApp. The system fetches the latest exchange rates, formats the data, and sends alerts to designated recipients to keep users informed of currency fluctuations.

## What is Multi-Currency Exchange Update?
Multi-currency exchange updates involve retrieving the latest exchange rates for multiple currencies against a base currency (INR) via an API, formatting the data, and distributing it through email and WhatsApp for real-time financial awareness.

## Good to Know
- Exchange rate accuracy depends on the reliability of the external API source
- API rate limits should be respected to ensure system stability
- Manual configuration of API keys and recipient lists is required
- Real-time alerts help users stay updated on currency movements

## How It Works
- **Daily Trigger** - Triggers the workflow daily at 7:30 AM IST to fetch and send exchange rates
- **Set Config: API Key & Currencies** - Defines the API key and target currencies (INR, CAD, AUD, CNY, EUR, USD) for use in the API call
- **Fetch Exchange Rates (CurrencyFreaks)** - Calls the exchange rate API and fetches the latest rates with INR as the base
- **Wait for API Response** - Adds a short delay (5s) to ensure API rate limits are respected and system stability is maintained
- **Set Email & WhatsApp Recipients** - Sets the list of email addresses and WhatsApp numbers who should receive the currency update
- **Create Message Subject & Body** - Dynamically generates a subject line (e.g., "Today's Currency Exchange Rates [(Date)]") and the body containing all rates
- **Send Email Alert** - Sends the formatted currency rate update via email
- **Send WhatsApp Alert** - Sends the formatted currency rate update via WhatsApp

## How to Use
- Import the workflow into n8n
- Configure the API key for the CurrencyFreaks API
- Set the list of target currencies and ensure INR is the base currency
- Configure email credentials for sending alerts
- Configure WhatsApp credentials or API integration for sending messages
- Test the workflow with sample data to verify rate fetching and alert delivery
- Adjust trigger time or recipient list as needed

## Requirements
- CurrencyFreaks API credentials
- Email service credentials (Gmail, SMTP, etc.)
- WhatsApp API or integration credentials

## Customizing This Workflow
- Modify the target currencies in the Set Config node to include additional currencies
- Adjust the delay time in the Wait node based on API rate limits
- Customize the email and WhatsApp message formats in the Create Message node to suit user preferences

## 🔗 Nodes Used

Send Email, HTTP Request, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
