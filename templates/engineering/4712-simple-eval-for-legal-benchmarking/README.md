# ⚒️ Simple eval for legal benchmarking

> ⚡ **755 views** · ⚒️ [Engineering](../)

## Description

This workflow demonstrates a simple way to run evals on a set of test cases stored in a Google Sheet.

The example we are using comes from an info extraction task dataset, where we tested 6 different LLMs on 18 different test cases.

You can see our sample data in this spreadsheet [here](https://docs.google.com/spreadsheets/d/10l_gMtPsge00eTTltGrgvAo54qhh3_twEDsETrQLAGU/edit?usp=sharing) to get started.

Once you have this working for our dataset, you can plug in your own test cases matching different LLMs to see how it works with your own data.

## How it works:
- It loads test cases from Google Sheets. 
- For each row in our Google Sheet, it grabs the source document, converting it to text.
- Our "LLM judge" passes the input/output of each LLM to GPT-4.1 to evaluate each test case (Pass/Fail + Reason).
- It logs the outcome to a Google Sheet.
- A 0.5s pause between each request gets around OpenAI's API rate limits.

## Set up steps:
- Add your credentials for Google Sheets, Google Drive, and [OpenRouter](https://openrouter.ai/).
- Make a copy of the [original data spreadsheet](https://docs.google.com/spreadsheets/d/10l_gMtPsge00eTTltGrgvAo54qhh3_twEDsETrQLAGU/edit?usp=sharing) so that you can edit it yourself. You will need to plug your version in the Update Results node to see the spreadsheet update on each run of the loop.

## 🔗 Nodes Used

Google Sheets, Google Drive, Basic LLM Chain, Structured Output Parser, Extract from File, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
