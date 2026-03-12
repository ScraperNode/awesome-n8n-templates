# 🔬 Collects images from web search results and send to Google Sheets

> ⚡ **3,652 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow collects images from web search results on a specific query, analyzes the image for labels, formats the text, and adds the information in Google Sheets.

![workflow-screenshot](fileId:590)

- **HTTP Request node** gets images from the web.
- **AWS Rekognition node** analyzes the images (in this case, it detects text in an image).
- **Set node** sets the values necessary for the data set.
- **Function node** transforms the text detected in the image to lower case.
- **Google Sheets node** adds the image information to a sheet that serves as data set.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, AWS Rekognition

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
