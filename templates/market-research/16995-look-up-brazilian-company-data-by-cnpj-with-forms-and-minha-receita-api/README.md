# 📊 Look up Brazilian company data by CNPJ with forms and Minha Receita API

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow hosts an n8n form that accepts a Brazilian CNPJ, validates and normalizes the input, then queries the public Minha Receita API to fetch company registration details and displays either a formatted results page or an error page with a link back to the form.

## How it works
1. Receives a CNPJ through an n8n form submission.
2. Sets the base URL for the Minha Receita API and the redirect URL used by the “Search Again” button.
3. Removes punctuation from the CNPJ and validates that it contains exactly 14 digits.
4. Requests company data from the Minha Receita API endpoint for the cleaned CNPJ.
5. Displays a results form with key company fields (for example, status, CNAE, partners, and address) when the API returns data.
6. Displays an error form when the CNPJ format is invalid or the API request fails, then redirects back to the input form.

## Setup
1. Activate the workflow and copy the Production URL from the form trigger.
2. Paste that URL into the Set URL step (replace `REPLACE_WITH_PRODUCTION_FORM_URL`) so completion pages can redirect users back to the search form.
3. Ensure outbound HTTP access to `https://minhareceita.org/` from your n8n instance, since the workflow relies on the public Minha Receita API and uses no credentials.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
