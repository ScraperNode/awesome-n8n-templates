# 📈 Provide latest euro exchange rates from European Central Bank via webhook

> ⚡ **3,695 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

### What is this workflow doing?
This simple workflow is pulling the latest Euro foreign exchange reference rates from the European Central Bank and responding expected values to an incoming HTTP request (GET) via a Webhook trigger node.

### Setup
* **no authentication** needed
* the workflow is **ready to use**
* **test** the workflow template by hitting the test workflow button and calling the URL in the webhook node
* optional: choose your own Webhook listening path in the Webhook trigger node

### Usage
There are two possible usage scenarios:
1. get all Euro exchange rates as an array of objects
2. get only a specific currency exchange rate as a single object

#### All available rates
Using the HTTP query `?foreign=USD` (where USD is one of the available currency symbols) will provide only that specificly asked rate.

Response example:
```json
{"currency":"USD","rate":"1.0852"}
```

#### Single exchange rate
If no query is provided, all available rates are returned.

Response example:
```json
[{"currency":"USD","rate":"1.0852"},{"currency":"JPY","rate":"163.38"},{"currency":"BGN","rate":"1.9558"},{"currency":"CZK","rate":"25.367"},{"currency":"DKK","rate":"7.4542"},{"currency":"GBP","rate":"0.85495"},{"currency":"HUF","rate":"389.53"},{"currency":"PLN","rate":"4.3053"},{"currency":"RON","rate":"4.9722"},{"currency":"SEK","rate":"11.1675"},{"currency":"CHF","rate":"0.9546"},{"currency":"ISK","rate":"149.30"},{"currency":"NOK","rate":"11.4285"},{"currency":"TRY","rate":"33.7742"},{"currency":"AUD","rate":"1.6560"},{"currency":"BRL","rate":"5.4111"},{"currency":"CAD","rate":"1.4674"},{"currency":"CNY","rate":"7.8100"},{"currency":"HKD","rate":"8.4898"},{"currency":"IDR","rate":"16962.54"},{"currency":"ILS","rate":"3.9603"},{"currency":"INR","rate":"89.9375"},{"currency":"KRW","rate":"1444.46"},{"currency":"MXN","rate":"18.5473"},{"currency":"MYR","rate":"5.1840"},{"currency":"NZD","rate":"1.7560"},{"currency":"PHP","rate":"60.874"},{"currency":"SGD","rate":"1.4582"},{"currency":"THB","rate":"38.915"},{"currency":"ZAR","rate":"20.9499"}]
```


### Further info
Read more about Euro foreign exchange reference rates [here](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html).

## 🔗 Nodes Used

HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
