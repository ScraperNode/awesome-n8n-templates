# 🔧 Reconcile and diagnose discrepancies between two CSV exports with Gemini

> ⚡ **33 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow collects two CSV exports via an n8n form, reconciles them by a user-specified key and amount column, and uses Google Gemini to diagnose likely systemic causes of any drift, returning either a “balances” confirmation or a downloadable Excel reconciliation workbook.

## How it works
1. Receives an n8n form submission where the user describes the reconciliation, specifies the linking and amount columns, and uploads two CSV files.
2. Extracts both CSV files into structured rows and compares the datasets by the chosen key column to identify matches, mismatches, and missing records.
3. Groups results into four buckets (agrees, values disagree, only in the source of truth, only in your records) and calculates counts, totals, and the net gap.
4. Sends the reconciliation summary and representative examples to Google Gemini and parses the response into a structured diagnosis with likely causes, checks, and materiality.
5. If everything balances, returns a completion page confirming there are no differences.
6. If differences exist, builds an Excel workbook that starts with the diagnosis and then lists every differing row by bucket, and returns it as a download from the form.

## Setup
1. Add a Google Gemini (PaLM) API credential for the language model used to generate the drift diagnosis.
2. Open the form trigger and copy the production form URL if you want to share it with teammates.
3. Export both systems as CSV files with a header row, and ensure both contain the linking column and the amount column you enter in the form.

## 🔗 Nodes Used

Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Convert to File, Extract from File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
