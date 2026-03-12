# 📈 Send daily currency exchange rate updates via CurrencyFreaks API and Gmail

> ⚡ **290 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Daily Currency Update Workflow (n8n)

- Trigger: ScheduleTrigger node (configurable interval)
- Set Variables: API Key, Preferred Currencies (PKR, GBP, EUR, USD, BDT, INR)
- HTTP Request: Fetch latest exchange rates from CurrencyFreaks API
- Set Recipient Email
- Set Email Subject
- Send Email: HTML formatted via Gmail OAuth2 with dynamic rate data (date, base currency, rates)
- Flow: ScheduleTrigger → Set API Key & Currencies → HTTP Request → Set Recipient → Set Subject → Gmail Send

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
