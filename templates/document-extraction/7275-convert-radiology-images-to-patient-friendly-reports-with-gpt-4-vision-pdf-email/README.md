# 🔬 Convert radiology images to patient-friendly reports with GPT-4 Vision & PDF email

> ⚡ **823 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This automated n8n workflow transforms uploaded radiology images into professional, patient-friendly PDF reports. It uses AI-powered image analysis to interpret medical scans, simplify technical terms, and produce clear explanations. The reports are formatted, converted to PDF, stored in a database, and sent directly to patients via email, ensuring both accuracy and accessibility.

## 🏥 **Workflow Overview:**

**Simple Process Flow:**
1. **Upload Image** → 2. **AI Analysis** → 3. **Generate Report** → 4. **Send to Patient**

## 🔧 **How It Works:**

1. **Webhook Trigger** - Receives image uploads via POST request
2. **Extract Image Data** - Processes patient info and image data
3. **AI Image Analysis** - Uses GPT-4 Vision to analyze the radiology image
4. **Process Analysis** - Structures the AI response into readable sections
5. **Generate PDF Report** - Creates a beautiful HTML report
6. **Convert to PDF** - Converts HTML to downloadable PDF
7. **Save to Database** - Logs all reports in Google Sheets
8. **Email Patient** - Sends the report via email
9. **Return Response** - Confirms successful processing

## 📊 **Key Features:**

- **AI-Powered Analysis** using GPT-4 Vision
- **Patient-Friendly Language** (no medical jargon)
- **Professional PDF Reports** with clear sections
- **Email Delivery** with report attachment
- **Database Logging** for record keeping
- **Simple Webhook Interface** for easy integration

## 🚀 **Usage Example:**

Send POST request to webhook with:
```json
{
  "patient_name": "John Smith",
  "patient_id": "P12345",
  "scan_type": "X-Ray",
  "body_part": "Chest",
  "image_url": "https://example.com/xray.jpg",
  "doctor_name": "Dr. Johnson",
  "patient_email": "john@email.com"
}
```

## ⚙️ **Required Setup:**

1. **OpenAI API** - For GPT-4 Vision image analysis
2. **PDF Conversion Service** - HTML to PDF converter
3. **Gmail Account** - For sending reports
4. **Google Sheets** - For logging reports
5. **Replace** `YOUR_REPORTS_SHEET_ID` with your actual sheet ID

Want a tailored workflow for your business? Our experts can craft it quickly [Contact our team](https://www.oneclickitsolution.com/contact-us/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
