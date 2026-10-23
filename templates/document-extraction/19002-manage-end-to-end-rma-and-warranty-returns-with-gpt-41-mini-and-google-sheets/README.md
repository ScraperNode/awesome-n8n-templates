# 🔬 Manage end-to-end RMA and warranty returns with GPT-4.1-mini and Google Sheets

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow captures warranty or return requests via an n8n form, validates order and product details in Google Sheets, uses OpenAI to classify issues and assess risk, routes cases for auto or human approval via Gmail, and manages RMA creation, return monitoring, inspection, and customer notifications.

## How it works
1. Receives a customer warranty/return request through an n8n Form and normalizes the submitted fields while generating a unique case ID.
2. Looks up the order and product details in Google Sheets, verifies the customer matches the order, and checks for any open duplicate RMA case.
3. Calculates warranty and return-window eligibility, confirms evidence is attached, and uses OpenAI to classify the issue and produce a confidence score.
4. Computes claim value and a risk level, then either auto-approves low-risk cases or sends an approval request to a reviewer via Gmail and waits for their decision.
5. Selects the resolution path (refund, replacement, or repair), checks and reserves replacement inventory when needed, generates an RMA number, and appends the case to the Google Sheets RMA Cases table.
6. Emails the RMA authorization and return instructions to the customer via Gmail, then waits and checks the case status to send reminders or mark the return as overdue and notify the customer.
7. When the return is marked as received, requests an inspection decision via Gmail, updates Google Sheets with the final resolution (refund/replacement/repair or rejection), and sends and logs the final decision email to the customer.

## Setup
1. Create and connect a Google Sheets credential, then provide your Google Sheets document ID in the workflow configuration and ensure it contains the Orders, Products, Inventory, and RMA Cases sheets with the expected columns (orderId, productSku, customerEmail, statuses, quantities, and timestamps).
2. Connect a Gmail credential and set the reviewer email address (and optional test customer email) in the workflow configuration used for approval and inspection decisions.
3. Add an OpenAI credential for the OpenAI (LangChain) node and confirm the selected model is available in your account.
4. Review and adjust business rules in the workflow configuration (warranty months, return window days, auto-approval limit, risk threshold, and return deadline) to match your policies before activating.

## 🔗 Nodes Used

Google Sheets, Gmail, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
