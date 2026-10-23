# 🔬 Monitor ISF-10 filing deadline risk with GPT-4o-mini, Telegram and Gmail

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow polls a freight forwarder API every two hours to monitor open ocean shipments for ISF-10 filing deadline risk, drafts red-tier escalation memos with OpenAI, sends urgent Telegram alerts, files cases to an internal compliance API, and emails a Gmail run summary.

## How it works
1. Runs every two hours on a schedule.
2. Fetches all open ocean shipments from a freight forwarder API and processes them one bill of lading at a time.
3. Looks up each bill of lading’s previous filing state in an n8n Data Table and calculates hours-to-vessel-load plus a green/yellow/red risk tier based on ISF filed status.
4. Proceeds only when the shipment’s risk tier has changed since the last check.
5. For red-tier (unfiled and imminent) shipments, confirms the latest vessel load time via the forwarder API, uses OpenAI to draft an internal escalation memo, sends an urgent Telegram alert, and posts the memo to an internal compliance API.
6. For non-red tier changes, records the change without paging.
7. Updates the n8n Data Table with the latest state for each shipment and sends a Gmail summary email for the batch run.

## Setup
1. Create an HTTP Header Auth credential for the freight forwarder and compliance APIs and replace the example base URLs with your real endpoints.
2. Create an n8n Data Table named "isf_filing_state" with columns billOfLading, riskTier, filedStatus, and lastChecked.
3. Add an OpenAI API credential (for the OpenAI Chat Model) and a Telegram bot credential, then set the Telegram chat ID in the alert step.
4. Add a Gmail OAuth2 credential and update the recipient address for the batch summary email.

## 🔗 Nodes Used

HTTP Request, Telegram, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
