# 🔬 Audit digital identities with Apify BreachHound and PDF.co

> ⚡ **22 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow starts from an n8n form submission, runs the BreachHound actor on Apify to discover where an email address is registered, then summarizes the results into an HTML audit report and converts it to a downloadable PDF using PDF.co.

## How it works
1. Receives an email address (and options) when a user submits the n8n form.
2. Sends the submitted inputs to the BreachHound actor on Apify to check the email across online services.
3. Loads the actor’s results from the Apify dataset.
4. Aggregates the dataset into audit statistics and a list of platforms where the email is found.
5. Generates an HTML report containing the totals and a table of found accounts.
6. Converts the HTML report to a PDF using the PDF.co Convert from HTML API and fetches the generated file via HTTP.

## Setup
1. Connect an Apify API credential and select/configure the BreachHound actor in the Apify “Run an Actor” step.
2. Create a PDF.co account, replace `YOUR_API_KEY_HERE` with your PDF.co API key, and keep the HTML-to-PDF endpoint settings as needed.
3. Review the form fields and the default options (for example, the “onlyUsed” and “useResidentialProxy” values) to match the audit behavior you want before activating the workflow.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
