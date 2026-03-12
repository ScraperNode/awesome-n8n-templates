# 🔬 Transcribe audio files from Cloud Storage

> ⚡ **10,703 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow transcribes audio files stored in AWS S3 and stores the information in Google Sheets.

![workflow-screenshot](fileId:592)

- **Google Drive Trigger node** triggers the workflow when a new file is uploaded in Google Drive.
- **AWS S3 1 node** uploads the new file to an S3 bucket.
- **AWS S3 2 node** gets the file from the S3 bucket.
- **AWS Transcribe 1 node** creates a transciption job for the respective audio file.
- **Wait node** waits for the transcription job from the previous node to be complete before proceeding with the workflow (necessary in case the service is busy or the file to be transcribed is large, delaying the workflow).
- **AWS Transcribe 2 node** gets the information of the transcription job.
- **Set node** sets the necessary values to be included in the data set.
- **Google Sheets node** adds the transcription information to a sheet that serves as data set.

## 🔗 Nodes Used

Google Sheets, AWS S3, AWS Transcribe, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
