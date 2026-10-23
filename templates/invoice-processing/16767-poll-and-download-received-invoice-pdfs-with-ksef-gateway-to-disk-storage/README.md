# 🧾 Poll and download received invoice PDFs with KSeF Gateway to disk storage

> ⚡ **13 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs every 20 minutes to poll a self-hosted KSeF Gateway for newly received KSeF invoices, maintains a cursor checkpoint in n8n static data, downloads each new invoice PDF via the gateway API, and saves the files to local disk.

## How it works
1. Runs every 20 minutes on a schedule.
2. Reads the last successful polling checkpoint from the workflow’s static data and calls the KSeF Gateway `/ksef/invoices/received/new` endpoint with the `since` cursor.
3. If the gateway response is unsuccessful, records the error details for alerting and leaves the checkpoint unchanged so the next run retries the same window.
4. If the response is successful, stores the returned `nextSince` value as the new checkpoint.
5. If new invoices are returned, processes each invoice summary individually.
6. Downloads each invoice PDF from the KSeF Gateway `/ksef/invoice/{ksefNumber}/pdf` endpoint and saves it to the configured local folder.
7. Outputs invoice metadata (number, seller, amount, and saved file path) as a placeholder where you can plug in notifications (Slack, email, or Discord).

## Setup
1. Deploy and configure a self-hosted KSeF Gateway (https://github.com/jurczykpawel/ksef-gateway) with a token or certificate that has the `InvoiceRead` permission.
2. Set the gateway base URL, your NIP, and the invoice output directory in the Configuration step, and ensure the directory is writable by the n8n host.
3. Provide the KSeF Gateway API key in the configuration so the workflow can authenticate to the gateway endpoints.
4. If you want alerts, connect your preferred notification service to the final “Notify” step and map the provided invoice fields.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
