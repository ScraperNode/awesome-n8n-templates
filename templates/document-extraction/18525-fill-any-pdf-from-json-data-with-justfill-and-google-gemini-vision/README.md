# 🔬 Fill any PDF from JSON data with JustFill and Google Gemini vision

> ⚡ **14 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a PDF and a JSON payload via an n8n form, uses JustFill to detect fields and render previews, then uses Google Gemini Vision to map data to field IDs and visually review the filled result before generating a downloadable filled PDF.

## How it works
1. Receives a PDF upload and a “Data JSON” object through an n8n form.
2. Requests an upload slot from JustFill, uploads the PDF, and opens it to detect fillable fields and create a workspace.
3. Renders labelled page previews for all pages with detected fields using JustFill.
4. Sends the labelled previews plus the user’s JSON keys to Google Gemini to map each data key to a specific JustFill field ID.
5. Renders filled previews with the proposed values and asks Google Gemini to independently review the placement and readability across pages.
6. If Gemini approves with no issues, fills the PDF in JustFill and returns a redirect link to download the completed document.

## Setup
1. Add a JustFill API key and a Google Gemini API key, then paste them into the Config step (including the model name, if you want to change it).
2. Ensure your JustFill account can access the MCP tools used by the workflow (request_file_upload, open_pdf, render_preview, render_filled_preview, and fill_pdf).
3. Customize the n8n form fields (and any sample JSON) to match the kinds of data you plan to submit, then copy the form URL for users who will upload PDFs.

## Requirements
- A JustFill API key. The free plan works for testing, downloads are watermarked. You also need a Google Gemini API key for the vision model set in Config.

## Customization
- Swap the n8n form for a webhook, a Google Sheets row or your CRM, and change the model name in Config if you prefer another Gemini model. For a form you fill often, save it as a JustFill template and use the simpler template-based workflow instead.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
