# 🧾 Verify French suppliers before payment with Google Sheets, Sirenic, and Slack

> ⚡ **2 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow watches a Google Sheets payment list for new French suppliers, checks each SIREN (and optional IBAN) with the Sirenic French Pack, then logs approved suppliers or alerts Slack.

## How it works
1. Triggers every minute when a row is added to the source worksheet.
2. Sends the SIREN and optional IBAN to the Sirenic French Pack: legal identity, VAT number checked live against VIES, IBAN and bank.
3. Reads the verdict field (pret_a_facturer): is the supplier ready to invoice?
4. If yes, appends a "ready to invoice" entry (supplier name, timestamp, VIES VAT status) to a Google Sheets verification log.
5. If not, posts the supplier to Slack with the closed-list reasons returned by Sirenic, plus VAT and IBAN hints when available.

## Setup
1. Self-host n8n, install the n8n-nodes-sirenic community node and create Sirenic credentials.
2. Add Google Sheets credentials, then set the document and sheet in both Google Sheets nodes (source and verification log).
3. Add Slack credentials and choose the channel for blocked suppliers.
4. Give the source sheet a SIREN column and, optionally, an IBAN column, named as in the Sirenic step.

## Additional info
What the check catches and what it cannot, step by step: [verify a supplier before payment: identity, VAT, IBAN](https://api.sirenic.eu/en/use-cases/verify-supplier-before-payment-identity-vat-iban?utm_source=n8n&utm_campaign=17756).

## 🔗 Nodes Used

Google Sheets, Slack, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
