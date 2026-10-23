# 🔬 Generate personalized patient education reports with Google Sheets, Gemini, Brave, and Google Docs

> ⚡ **39 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Generate personalized, print-ready patient education documents from physician-provided diagnoses, treatment plans, and messages. The workflow finds relevant trusted medical information with Brave Search, uses Gemini to create patient-friendly explanations without overriding the physician’s plan, and generates a structured Google Docs document for patients and families.

## How it works
1. Reads a pending patient education request from Google Sheets, including the diagnosis, physician plan, physician message, target region, output language, and additional notes.
2. Validates the required patient information, marks the request as processing, and prepares the workflow context for medical source retrieval.
3. Searches for relevant medical information with the Brave Search API and evaluates the returned sources for authority, relevance, and suitability for patient education.
4. Selects the best available medical source, downloads the source page, and extracts usable medical content while filtering unnecessary webpage elements.
5. Uses Google Gemini to generate a personalized patient education report based on the physician’s diagnosis, treatment plan, message, additional notes, and the selected medical source.
6. Keeps the physician’s diagnosis and treatment plan authoritative and prevents the AI from independently changing the plan, recommending additional treatment, or inventing unsupported medical information.
7. Splits the generated report into print-friendly sections and creates a Google Docs document with controlled page breaks and spacing for easier printing and patient handouts.
8. Updates the original Google Sheets request with the completed status, generated document URL, and completion information.

## Setup
1. Create a Google Sheets spreadsheet for patient education requests and configure the workflow to use the correct spreadsheet and sheet.
2. Include the required request fields: Diagnosis, Physician Plan, Physician Message, Target Region, Output Language, Additional Notes, and Status.
3. Add a Brave Search API key as an HTTP Header Auth credential and configure the medical source search node.
4. Add Google Gemini credentials and connect them to the Gemini Chat Model used to generate the personalized patient education document.
5. Add Google Docs and Google Sheets OAuth credentials and select the Google Drive folder where generated patient education documents should be stored.
6. Review the Gemini system and user prompts if needed, while preserving the safeguards that keep the physician’s diagnosis and treatment plan authoritative.
7. Add a request with the status set to “pending”, then run the workflow and review the generated Google Docs document before using it with patients.

## Requirements
- Google Sheets account and OAuth credentials
- Google Docs / Google Drive account and OAuth credentials
- Brave Search API key
- Google Gemini API credentials

## Customization
- Change the target region and output language for different patient populations.
- Customize the physician input fields or add additional clinical context required by your organization.
- Adjust trusted-source selection rules to prioritize preferred government, academic, hospital, or professional medical sources.
- Modify the patient education prompt to match your organization’s communication style while preserving the physician-plan safeguards.
- Adjust the Google Docs page splitting and spacing rules for different print layouts or patient handout formats.

## Additional info
This workflow is designed to support healthcare professionals in creating easier-to-understand patient education materials. The physician-provided diagnosis and treatment plan remain authoritative, and the AI is instructed not to replace, contradict, or independently modify them.

Generated documents should be reviewed by an appropriate healthcare professional before being provided to patients. Source quality and available medical information may vary depending on the diagnosis and search results.

This workflow is intended for patient education and communication support, not autonomous diagnosis or treatment decision-making.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Docs, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
