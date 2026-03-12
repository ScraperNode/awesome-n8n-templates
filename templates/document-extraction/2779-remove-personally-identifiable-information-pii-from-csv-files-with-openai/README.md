# 🔬 Remove personally identifiable information (PII) from CSV files with OpenAI

> ⚡ **1,762 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# What this workflow does
- Monitors Google Drive: The workflow triggers whenever a new CSV file is uploaded.
- Uses AI to Identify PII Columns: The OpenAI node analyzes the data and identifies PII-containing columns (e.g., name, email, phone).
- Removes PII: The workflow filters out these columns from the dataset.
- Uploads Cleaned File: The sanitized file is renamed and re-uploaded to Google Drive, ensuring the original data remains intact.


# How to customize this workflow to your needs
- Adjust PII Identification: Modify the prompt in the OpenAI node to align with your specific data compliance requirements.
- Include/Exclude File Types: Adjust the Google Drive Trigger settings to monitor specific file types (e.g., CSV only).
- Output Destination: Change the folder in Google Drive where the sanitized file is uploaded.

# Setup
### Prerequisites:
- A Google Drive account.
- An OpenAI API key.
### Workflow Configuration:
- Configure the Google Drive Trigger to monitor a folder for new files.
- Configure the OpenAI Node to connect with your API
- Set the Google Drive Upload folder to a different location than the Trigger folder to prevent workflow loops.

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
