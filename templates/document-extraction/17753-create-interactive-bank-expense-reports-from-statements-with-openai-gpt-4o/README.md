# 🔬 Create interactive bank expense reports from statements with OpenAI GPT-4o

> ⚡ **21 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow accepts a bank statement upload (CSV or text-based PDF), parses transactions, uses OpenAI to categorize merchants and generate narrative insights, and returns an interactive HTML expense report with category totals, monthly breakdowns, recurring-charge detection, and a downloadable CSV.

## How it works
1. Receives a bank statement file upload through an n8n Form trigger.
2. Detects whether the uploaded file is a PDF or CSV/text file and extracts its text accordingly.
3. Parses the raw statement text to normalize dates, amounts, and descriptions into a clean list of transactions and a deduplicated merchant list.
4. Sends the unique merchant list to OpenAI to assign each merchant a spending category and cleaned-up payee name.
5. Calculates spend and income totals, category breakdowns, month-by-month summaries, largest transactions, and repeating charges with annualized cost.
6. Sends the computed summary to OpenAI to generate a short commentary, observations, and questions to check.
7. Builds an HTML report (charts/tables, recurring charges, full transaction table, and CSV download) and returns it as the form response.

## Setup
1. Add an OpenAI API credential in the OpenAI Chat Model node (gpt-4o-mini) and ensure it is connected to both AI agents.
2. Activate the workflow and copy the production form URL from the Upload Statement trigger.
3. Upload a bank-exported CSV or a text-based (not scanned/image) PDF statement via the form to generate the report.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, n8n Form Trigger, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
