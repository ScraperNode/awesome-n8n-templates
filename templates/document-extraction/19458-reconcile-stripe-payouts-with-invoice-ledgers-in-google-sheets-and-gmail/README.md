# 🔬 Reconcile Stripe payouts with invoice ledgers in Google Sheets and Gmail

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Stripe pays me in lumps and my invoice sheet lists single amounts, so I built this to do the matching every Monday. It opens each payout and pairs the charges inside it with your invoices. Each line gets a verdict in a report tab. I only read the exceptions.

## How it works
1. A schedule fires every Monday morning, and one Settings node holds everything you would ever change.
2. The workflow fetches recent paid payouts inside your lookback window.
3. It opens each payout to list the balance transactions behind it, then reads your invoice ledger once.
4. My matcher pairs those lines to invoices on a reference first, and falls back to an exact amount inside a date window where there is none.
5. A tolerance in pence stops a rounding difference from being reported as a fault, and every verdict lands in your report tab beside its payout ID.
6. When something fails to match and the summary is switched on, a Gmail draft is written for you to read before anyone sends it.

## Setup
1. Import the workflow, then add a Stripe credential. The two HTTP Request nodes use it as a predefined credential type, so there is no key to paste anywhere.
2. Add a Google Sheets credential and point both sheet nodes at your ledger document.
3. In Settings, swap every placeholder for your own values, and make sure the column names match your ledger exactly.
4. Give the report tab the headers listed on the canvas note beside the report node.
5. I would run it once by hand and read the report before switching the schedule on. Gmail is optional, so add it only if you want the exceptions draft.

## Requirements
- You need an n8n instance, cloud or self hosted. Stripe read access and a Google account for Sheets cover the rest. Gmail is optional, and I only use it for the summary draft when something failed to match.

## Customization
- If your invoices live in Airtable or Postgres, swap the Google Sheets nodes and the rest keeps working. I kept the matcher to one Code node with its rules in plain view at the top, so widening the date window or matching on a customer name is a single edit. The summary stays a draft until you change that node on purpose.

## Additional info
The download carries a START-HERE guide and a TESTED note that says exactly what I checked before shipping it. The headers your report tab needs are on the canvas note beside the report node.

I spell out what it checks and where it stops at https://fractionalhq.uk/use-cases/stripe-payout-reconciliation

If you would rather not set it up yourself, I can set it up for you on your own n8n account for £49. Tell me what you use at https://fractionalhq.uk/brief and I will reply with what I need from you before any work starts.

All nine of my paid n8n templates also come together as one download for $15: https://buy.stripe.com/00w3co8NR6Mq8r0eaV4c80M

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
