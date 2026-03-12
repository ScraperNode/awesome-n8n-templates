# 🔬 Extract passport data with OpenAI OCR and generate QR codes

> ⚡ **68 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Overview
This workflow processes passport images submitted through a form, extracts structured data using OpenAI OCR, and generates QR codes with the extracted information. Results are displayed on the form completion page and sent via email.

The workflow reduces manual data entry and speeds up document processing workflows where passport information needs to be captured consistently. It works best with clear, front-facing passport images.

### How it works
1. User submits a form with one or more passport images
2. Files are split and processed individually
3. Each file is validated as an image and resized for OCR accuracy
4. Image is converted to base64 and sent to OpenAI for data extraction
5. Extracted fields are cleaned, standardized, and validated
6. QR payload is generated from standardized data and converted to QR code image URL
7. Results are aggregated into HTML summary
8. Summary is displayed on form completion page and sent via email

### Setup steps
- Add OpenAI API credentials to the OCR request node
- Connect your Gmail account for email delivery
- Replace YOUR_EMAIL placeholder with recipient address
- Test with 1–3 clear passport images

### Customization
- Modify OCR prompt to support other document types
- Adjust QR payload format to match your system requirements

## 🔗 Nodes Used

Edit Image, HTTP Request, Gmail, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
