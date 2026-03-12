# ⚒️ Benchmark LLM performance on legal documents with Google Sheets and OpenRouter

> ⚡ **756 views** · ⚒️ [Engineering](../)

## Description

This workflow demonstrates a simple way to run evals on a set of test cases stored in a Google Sheet.

The example we are using comes from an info extraction task dataset, where we tested 6 different LLMs on 18 different test cases.

This workflow extends the functionality of my simple eval for benchmarking legal tasks [here](https://n8n.io/workflows/4712-simple-eval-for-legal-benchmarking/).

Rather than running executions sequentially (waiting for each one to respond before making another request), we use parallel processing to fire 2 requests every second.

You can see our sample data in this spreadsheet [here](https://docs.google.com/spreadsheets/d/10l_gMtPsge00eTTltGrgvAo54qhh3_twEDsETrQLAGU/edit?usp=sharing) to get started.

Once you have this working for our dataset, you can plug in your own test cases matching different LLMs to see how it works with your own data.

## How it works
- Pull our test cases from Google Sheets.
- For each case, fire off an HTTP request to a webhook.
- That webhook grabs the relevant source file from Google Drive and converts it to text.
- The text gets sent to an LLM via Open Router (so we can easily swap out models).
- Results come back and are logged in Google Sheets.


## Set up steps:
- Add your credentials for Google Sheets, Google Drive, and [OpenRouter](https://openrouter.ai/).
- Make a copy of the [original data spreadsheet](https://docs.google.com/spreadsheets/d/10l_gMtPsge00eTTltGrgvAo54qhh3_twEDsETrQLAGU/edit?usp=sharing) so that you can edit it yourself. You will need to plug your version in the Update Results node to see the spreadsheet update on each run of the loop.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
