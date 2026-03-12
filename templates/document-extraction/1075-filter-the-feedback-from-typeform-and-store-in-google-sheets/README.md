# 🔬 Filter the feedback from Typeform and store in Google Sheets

> ⚡ **1,098 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow allows you to filter positive and negative feedback received from a Typeform and insert the data into Google Sheets.

![workflow-screenshot](fileId:496)

**Typeform Trigger node:** Start the workflow when a new form is submitted via Typeform

**Set node:** Extract the information submitted in typeform

**IF node:** Filter positive and negative reviews (i.e. ratings above or below 3 out of 5).

**Google Sheets node**: Store the positive and negative reviews and ratings in two different sheets for each case.

## 🔗 Nodes Used

Google Sheets, Start, Typeform Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
