# 📈 Currency converter via webhook using ExchangeRate.host

> ⚡ **874 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

This n8n template allows you to perform real-time currency conversions by simply sending a webhook request. By integrating with the ExchangeRate.host API, you can get up-to-date exchange rates for over 170 world currencies, making it an incredibly useful tool for financial tracking, e-commerce, international business, and personal budgeting.

---

## 🔧 How it works
- Receive Conversion Request Webhook: This node acts as the entry point for the workflow, listening for incoming POST requests. It's configured to expect a JSON body containing:

  - from: The 3-letter ISO 4217 currency code for the source currency (e.g., USD, PHP).
  - to: The 3-letter ISO 4217 currency code for the target currency (e.g., EUR, JPY).
  - amount: The numeric value you want to convert.

*Important: The ExchangeRate.host API access_key is handled securely by n8n's credential system and should not be included in the webhook body or headers.*

- Convert Currency: This node makes an HTTP GET request to the ExchangeRate.host API (api.exchangerate.host). It dynamically constructs the URL using the from, to, and amount from the webhook body. Your API access key is securely retrieved from n8n's pre-configured credentials (HTTP Query Auth type) and automatically added as a query parameter (access_key). The API then performs the conversion and returns a JSON object with the conversion details.

- Respond with Converted Amount: This node sends the full currency conversion result received from ExchangeRate.host back to the service that initiated the webhook.

---

## 👤 Who is it for?
### This workflow is ideal for:

- E-commerce Platforms:
  - Display prices in local currencies on the fly for international customers.
  - Convert incoming international payments to your local currency for accounting.
  - Calculate shipping costs in different currencies.
- Financial Tracking & Budgeting Apps:
  - Update personal or business budgets with converted values.
  - Track expenses incurred in foreign currencies.
  - Automate portfolio value conversion for multi-currency investments.
- International Business & Freelancers:
  - Generate invoices in a client's local currency based on your preferred currency.
  - Quickly estimate project costs or earnings in different currencies.
  - Automate reconciliation of international transactions.
- Travel Planning:
  - Convert travel expenses from one currency to another while abroad.
  - Build simple tools to estimate costs for trips in different countries.
- Data Analysis & Reporting:
  - Standardize financial data from various sources into a single currency for unified reporting.
  - Build dashboards that display converted financial metrics.
- Custom Integrations:
  - Connect to CRMs, accounting software, or internal tools to automate currency-related tasks.
  - Build chatbots that can answer currency conversion queries.

---

# 📑 Data Structure
When you trigger the webhook, send a POST request with a JSON body structured as follows:

```
{
  "from": "USD",
  "to": "PHP",
  "amount": 100
}
```

The workflow will return a JSON response similar to this (results will vary based on currencies and amount):

```
{
  "date": "2025-06-03",
  "historical": false,
  "info": {
    "rate": 58.749501,
    "timestamp": 1717398188
  },
  "query": {
    "amount": 100,
    "from": "USD",
    "to": "PHP"
  },
  "result": 5874.9501,
  "success": true
}
```

---

## ⚙️ Setup Instructions
- Get an ExchangeRate.host Access Key:
  - Go to https://exchangerate.host/ and sign up for a free API key.

- Create an n8n Credential for ExchangeRate.host:
  - In your n8n instance, go to Credentials.
  - Click "New Credential" and search for "HTTP Query Auth".
  - Set the Name (e.g., ExchangeRate.host API Key).
  - Set API Key to your ExchangeRate.host access key.
  - Set Parameter Name to access_key.
  - Set Parameter Position to Query.
  - Save the credential.
- Import Workflow:
  - In your n8n editor, click "Import from JSON" and paste the provided workflow JSON.

- Configure ExchangeRate.host API Node:
  - Double-click the Convert Currency node.
  - Under "Authentication", select "Generic Credential Type".
  - Choose "HTTP Query Auth" as the Generic Auth Type.
  - Select the credential you created (e.g., "ExchangeRate.host API Key") from the dropdown.

- Configure Webhook Path:
  - Double-click the Receive Conversion Request Webhook node.
  - In the 'Path' field, set a unique and descriptive path (e.g., /convert-currency).
 
- Activate Workflow:
  - Save and activate the workflow.
---

## 📝 Tips
This workflow is a powerful starting point. Here's how you can make it even more robust and integrated:

- Robust Error Handling:
  - Add an IF node after Convert Currency to check {{ $json.success }}. If false, branch to an Error Trigger node or send an alert (e.g., Slack, Email) with {{ $json.error.info }} to notify you of API issues or invalid inputs.
  - Include a Try/Catch block to gracefully handle network issues or malformed responses.

- Input Validation & Defaults:
  - Add a Function node after the webhook to validate if from, to, and amount are present and in the correct format. If not, return a clear error message to the user.
  - Set default from or to currencies if they are not provided in the webhook, making the API more flexible.
- Logging & Auditing:
  - After a successful conversion, use a Google Sheets, Airtable, or database node (e.g., PostgreSQL, MongoDB) to log every conversion request, including the input currencies, amount, converted result, date, and possibly the calling IP (from the webhook headers). This is crucial for financial auditing and analysis.
- Rate Limits & Caching:
  - If you anticipate many requests, be mindful of ExchangeRate.host's API rate limits. You can introduce a Cache node to store recent conversion results for a short period, reducing redundant API calls for common conversions.
  - Alternatively, add a Delay node to space out requests if you're hitting limits.
- Format & Rounding:
  - Use a Function node or Set node to format the result to a specific number of decimal places (e.g., {{ $json.result.toFixed(2) }}).
  - Add currency symbols or full currency names to the output for better readability.
- Alerting on Significant Changes:
  - Chain this workflow with a Cron or Schedule node to periodically fetch exchange rates for a pair you care about (e.g., USD to EUR).
  - Use an IF node to compare the current rate with a previously stored rate. If the change exceeds a certain percentage, send an alert via Slack, Email, or Telegram to notify you of significant market shifts.
- Integration with Payment Gateways:
  - For e-commerce, combine this with nodes for payment gateways (e.g., Stripe, PayPal) to automatically convert customer payments received in foreign currencies to your base currency before recording.
- Multi-currency Pricing for Products:
  - Use this workflow in conjunction with your product database. When a user selects a different country/currency, trigger this webhook to dynamically convert product prices and display them instantly.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
