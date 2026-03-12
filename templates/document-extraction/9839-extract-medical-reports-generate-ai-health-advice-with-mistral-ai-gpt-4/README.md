# 🔬 Extract medical reports & generate AI health advice with Mistral AI & GPT-4

> ⚡ **632 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Try It Out!

Use n8n to extract medical test data from diagnostic reports uploaded to Google Drive, automatically detect abnormal values, and generate personalized health advice.

### How it works

1. Upload a medical report (PDF or image) to a monitored Google Drive folder
2. Mistral AI extracts text using OCR while preserving document structure
3. GPT-4 parses the extracted text into structured JSON (patient info, test names, results, units, reference ranges)
4. All test results are saved to the "All Values" sheet in Google Sheets
5. JavaScript code compares each result against its reference range to detect abnormalities
6. For out-of-range values, GPT-4 generates personalized dietary, lifestyle, and exercise advice based on patient age and gender
7. Abnormal results with recommendations are saved to the "Out of Range Values" sheet

### How to use

1. Set up Google Drive folder monitoring and Google Sheets with two tabs: "All Values" and "Out of Range Values"
2. Configure API credentials for Google Drive, Mistral AI, and OpenAI (GPT-4)
3. Upload medical reports to your monitored folder
4. Review extracted data and personalized health advice in Google Sheets

### Requirements

* Google Drive and Sheets with OAuth2 authentication
* Mistral AI API key for OCR
* OpenAI API key (GPT-4 access required) for intelligent extraction and advice generation

### Need Help?

* See the detailed Read Me file at https://drive.google.com/file/d/1Wv7dfcBLsHZlPcy1QWPYk6XSyrS3H534/view?usp=sharing
* Join the n8n community forum for support

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Drive Trigger, OpenAI, Mistral AI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
