# 🔬 Extract and structure Thai documents to Google Sheets using Typhoon OCR and Llama 3.1

> ⚡ **3,545 views** · 🔬 [Document Extraction & Analysis](../)

## Description

![20250522_93100.png](fileId:1356)
⚠️ **Note:** This template requires a community node and works **only on self-hosted** n8n installations. It uses the Typhoon OCR Python package and custom command execution. Make sure to install required dependencies locally.

---

## Who is this for?

This template is for developers, operations teams, and automation builders in Thailand (or any Thai-speaking environment) who regularly process PDFs or scanned documents in Thai and want to extract structured text into a Google Sheet.

### It is ideal for:
* Local government document processing
* Thai-language enterprise paperwork
* AI automation pipelines requiring Thai OCR

---

## What problem does this solve?

Typhoon OCR is one of the most accurate OCR tools for Thai text. However, integrating it into an end-to-end workflow usually requires manual scripting and data wrangling.

### This template solves that by:
* Running Typhoon OCR on PDF files
* Using AI to extract structured data fields
* Automatically storing results in Google Sheets

---

## What this workflow does

1. **Trigger**: Run manually or from any automation source
2. **Read Files**: Load local PDF files from a `doc/` folder
3. **Execute Command**: Run Typhoon OCR on each file using a Python command
4. **LLM Extraction**: Send the OCR markdown to an AI model (e.g., GPT-4 or OpenRouter) to extract fields
5. **Code Node**: Parse the LLM output as JSON
6. **Google Sheets**: Append structured data into a spreadsheet

---

##  Setup

### 1. **Install Requirements**

* Python 3.10+
* `typhoon-ocr`: `pip install typhoon-ocr`
* Install [Poppler](https://github.com/oschwartz10612/poppler-windows/releases/) and add to system PATH (needed for `pdftoppm`, `pdfinfo`)

### 2. **Create folders**

* Create a folder called `doc` in the same directory where n8n runs (or mount it via Docker)

### 3. **Google Sheet**

Create a Google Sheet with the following column headers:

| book\_id | date | subject | detail | signed\_by | signed\_by2 | contact | download\_url |
| -------- | ---- | ------- | ------ | ---------- | ----------- | ------- | ------------- |

You can use this [example Google Sheet](https://docs.google.com/spreadsheets/d/1h70cJyLj5i2j0Ag5kqp93ccZjjhJnqpLmz-ee5r4brU) as a reference.

### 4. **API Key**

Export your `TYPHOON_OCR_API_KEY` and `OPENAI_API_KEY` in your environment (or set inside the command string in `Execute Command` node).

---

## How to customize this workflow

* Replace the LLM provider in the `Basic LLM Chain` node (currently supports OpenRouter)
* Change output fields to match your data structure (adjust the prompt and Google Sheet headers)
* Add trigger nodes (e.g., Dropbox Upload, Webhook) to automate input

---

## About Typhoon OCR

[Typhoon](https://docs.opentyphoon.ai/en/) is a multilingual LLM and toolkit optimized for Thai NLP. It includes `typhoon-ocr`, a Python OCR library designed for Thai-centric documents. It is open-source, highly accurate, and works well in automation pipelines. Perfect for government paperwork, PDF reports, and multilingual documents in Southeast Asia.

---

## 🔗 Nodes Used

Google Sheets, Basic LLM Chain, Read/Write Files from Disk, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
