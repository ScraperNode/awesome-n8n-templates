# 📊 Collect conference feedback with Forms and log to Excel OneDrive with Outlook notifications

> ⚡ **2,111 views** · 📊 [Market Research & Insights](../)

## Description

# Conference Feedback Collection and OneDrive Logging Workflow

This n8n workflow is designed to collect feedback through a web form, log the responses into an Excel file stored in Microsoft OneDrive, and notify the support team via email.

---

## 🧭 Overall Goal

To collect user feedback from a web form, structure the data, log it into a OneDrive Excel file, and notify support via Outlook email.

---

## 🔄 Workflow Breakdown

### 1. **Form Submission** (`On form submission`)
- **Node Type**: `formTrigger`
- **Purpose**: Captures user feedback via a web form.
- **Form Fields**:
  - Full Name (Required)
  - Email (Required)
  - Company Name
  - Job Title
  - How did you hear about the conference? (Required)
  - Overall experience rating (Required)
  - Favorite sessions/speakers
  - Relevance to interests/work (Required)
  - Networking opportunities (Required)
  - Suggestions for improvement
  - Future topics/speakers
  - Willingness to attend again (Required)
  - Additional comments
  - Contact permission (Required)
- **Access URL**: `/webhook/feedback` (or `/webhook-test/feedback` during testing)

---

### 2. **Parse Data** (`Set`)
- **Purpose**: Renames form fields to `snake_case`.
- **Output**: Structured JSON with renamed fields.

---

### 3. **Sample File** (`Convert to File`)
- **Purpose**: Generates a file name reference for search.
- **Filename**: `test-n8n-feedback-form-data.xlsx`

---

### 4. **Search Document** (`Microsoft OneDrive`)
- **Purpose**: Searches OneDrive for the specified Excel file.
- **Query**: `test-n8n-feedback-form-data.xlsx`

---

### 5. **Extract File ID** (`Code`)
- **Purpose**: Extracts the ID of the file from the search result.
- **Output**: `{ "id": "someFileId" }` or `{ "id": null }`

---

### 6. **Check File Existence** (`If`)
- **Purpose**: Branch logic based on file existence.
- **Condition**: If `id` exists.

---

### 7. **Build Sheet Data** (`Set`)
- **Purpose**: Prepares the data to match the Excel column headers.
- **Only Runs If**: File was found.

---

### 8. **Append Data to Excel** (`Microsoft Excel`)
- **Purpose**: Appends the new feedback as a row.
- **Workbook ID**: `{{ $('Code').item.json.id }}`
- **Worksheet Name**: `Sheet1`
- **Mode**: Auto-map from input fields

---

### 9. **Notify Support** (`Microsoft Outlook`)
- **Purpose**: Sends a notification email with key feedback details.
- **To**: `test@gmail.com`
- **Subject**: `"New Feedback Submission Received"`
- **Body**: Includes key details from submission

---

### 10. **End Workflow** (`NoOp`)
- **Purpose**: Marks logical end of the workflow.

---

## 📝 Sticky Notes

- ✅ **Upload Target Excel File First**: Ensure the Excel file exists in OneDrive.
- 📝 **Filename Consistency**: Filename should match in "Sample File" and "Search Document" nodes.
- 📧 **Customize Email Content**: Update "Notify Support" node with your desired message and recipient.

---

## 🔧 Customization Guide

### 🧾 Form Customization
- Change form title, description, fields, or path.

### 🧪 Parsing Logic
- Update field mappings if form labels change.

### 📁 Excel File Settings
- Filename must match your actual OneDrive file.
- Worksheet name and column headers must match in "Build Sheet Data".

### 📬 Email Settings
- Update subject and body using variables like `{{ $('Parse Data').item.json.full_name }}`.

---

## ❗ Error Handling Tips
- Adjust email content based on file presence.
- Add an "Error Trigger" for advanced error management.

---

## 🔁 Alternatives and Extensions
- Use Google Sheets, Airtable, or databases instead of OneDrive/Excel.
- Add Slack or SMS notifications.

---

## 📌 Use Cases
- Post-event Feedback
- CSAT Surveys
- Employee Feedback
- Bug Reporting
- Lead Capture
- Contact Forms
- Webinar Registration

---

## 🔐 Required Credentials

### 1. **Microsoft OneDrive (OAuth2)**
- **Used by**: "Search Document"
- **Credential Name**: Microsoft Drive account

### 2. **Microsoft Excel (OAuth2)**
- **Used by**: "Append Data"
- **Credential Name**: Microsoft Excel account

### 3. **Microsoft Outlook (OAuth2)**
- **Used by**: "Notify Support"
- **Credential Name**: Outlook 0Auth2

---

## ❤️ Made with n8n by Akhil

## 🔗 Nodes Used

Microsoft Excel 365, Microsoft OneDrive, Microsoft Outlook, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
