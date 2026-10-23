# 🔒 Vet supplier payments with Bright Data, GPT-5.6, Slack, and data tables

> ⚡ **1 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow collects supplier and invoice details via an n8n form, runs live website, complaint-search, and invoice-domain checks through Bright Data, generates a plain-language risk verdict with OpenAI, then requests a human approve/block decision in Slack and logs the outcome to an n8n Data Table.

## How it works
1. Receives a supplier check request from an n8n form submission with the supplier name, known website, invoice email domain, amount, and requester.
2. Normalizes the website and invoice domain and builds a complaint-search query.
3. Uses Bright Data Web Unlocker to fetch the supplier website and extracts basic trust signals like terms/privacy links, contact details, address, and registration identifiers.
4. Uses Bright Data SERP to run a Google complaint search and scores how many result titles mention fraud, scams, or lawsuits while ignoring the supplier’s own domain.
5. Uses Bright Data Web Unlocker to fetch the invoice domain (or the supplier site if none is provided) and compares it to the known website using edit distance to detect lookalike domains.
6. Combines the three checks into a weighted 0–100 risk score with human-readable reasons and has OpenAI (GPT-5.6) write a short verdict based only on those findings.
7. Sends a Slack “send and wait” approval request to the payments channel, then records the decision to an n8n Data Table and posts a confirmation to the appropriate Slack channel.

## Setup
1. Create a Bright Data Header Auth credential and ensure you have a Web Unlocker zone and a SERP zone, then set their zone names in the workflow settings values.
2. Add an OpenAI credential (for the GPT-5.6 chat model) and a Slack credential with permission to post and use interactive approvals in your target channels.
3. Create an n8n Data Table named `supplier_checks` with at least a `supplier` column (and any additional columns you want to store), and update the table name if yours differs.
4. Update the Slack channel names in the workflow settings (`approval_channel` and `blocked_channel`) to match your environment and ensure those channels exist.

## 🔗 Nodes Used

HTTP Request, Slack, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
