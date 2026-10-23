# 🔬 Convert LINE handwritten memo images to tagged, searchable notes with Gemini, Google Drive and Google Sheets

> ⚡ **70 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## LINE AI Handwritten Memo OCR & Tag Search System

This workflow converts handwritten memo images sent via LINE into structured, searchable knowledge using AI.Users simply send a handwritten memo photo. The workflow automatically performs OCR, summarizes the content, generates tags, and stores the results in Google Sheets.Images are archived in Google Drive, allowing easy access to the original memo later.

## Main Features

• AI OCR for handwritten memo recognition  
• Automatic title and summary generation  
• Tag extraction for knowledge organization  
• Image archiving in Google Drive  
• Structured storage in Google Sheets  
• Tag-based memo search via LINE  
• Tag list generation for easy navigation

## User Commands (via LINE)

Send an image  
→ The memo is analyzed, summarized, tagged, and saved automatically.

#タグ名  
→ Searches memos that contain the specified tag.

#タグリスト  
→ Displays all tags currently stored in the database.

## Workflow Steps

1. Receive message from LINE via Webhook  
2. Validate message type (image or command)  
3. Save image to Google Drive  
4. Run AI OCR and generate structured JSON  
5. Parse and validate AI output safely  
6. Store memo data in Google Sheets  
7. Send completion message to the user

If OCR fails, the user receives guidance to retake the photo.

Stored Data Structure

Each memo record includes:

• Title  
• Summary  
• Tags  
• Timestamp  
• Link to the original image

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
