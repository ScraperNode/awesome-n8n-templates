# 🔬 Compare LINE palm images and log Gemini health insights to Google Sheets

> ⚡ **8 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## AI Palm Health Tracker – Overview

This workflow receives palm images sent via LINE and provides AI-generated health insights.

## Step-by-step process:
1.User sends a palm image via LINE
2.Webhook receives the image
3.Image is saved to Google Drive
4.Past records are checked in Google Sheets

If this is the first submission:
→ AI will perform a palm reading

If previous records exist:
→ Retrieve the latest saved image
→ Validate that two images are available
→ AI performs a comparison analysis

All results are saved in Google Sheets and sent back to the user via LINE.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
