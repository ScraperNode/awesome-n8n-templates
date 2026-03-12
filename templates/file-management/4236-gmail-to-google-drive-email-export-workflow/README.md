# 📁 Gmail to Google Drive email export workflow

> ⚡ **1,768 views** · 📁 [File Management](../)

## Description

# 📬 Gmail to Google Drive Email Export Workflow (n8n)

## 🧩 Overview

This n8n workflow automates the process of:

1. Retrieving all emails from a specific sender using Gmail.
2. Extracting essential fields like subject, message, and date.
3. Formatting the email date to the desired time zone (e.g., IST).
4. Exporting the parsed data as a CSV file.
5. Uploading the file to a specified folder in Google Drive.

---

## 🛠 Nodes Breakdown

### 1. **Start Workflow** (`Manual Trigger`)
- **Type**: Manual Trigger  
- **Purpose**: Initiates the workflow manually.

---

### 2. **Gmail Node** (`Get All Emails`)
- **Type**: Gmail  
- **Operation**: `getAll`  
- **Filters**:  
  - `sender`: `akhilgadiraju@gmail.com`  
- **Returns**: All emails from the specified sender.  
- **Credentials**: `Gmail OAuth2 - Akhil`

---

### 3. **Parse Data** (`Set Node`)
- **Purpose**: Extracts key fields from the email JSON.  
- **Mapped Fields**:
  - `id`: Email ID
  - `subject`: Email subject
  - `message`: Email text
  - `time`: Email date

---

### 4. **Convert Time Field** (`Code Node`)
- **Purpose**: Converts the email time (`ISO 8601`) to a human-readable format.  
- **Output Format**:
  - Local time using **Asia/Kolkata** timezone.
  - Format: `"Month Day, Year, Hour:Minute AM/PM"`  
- **Customizable**: Change the timezone as needed:

```javascript
timeZone: 'Asia/Kolkata'
```

---

### 5. **Convert to File**
- **Type**: Convert to File Node  
- **Purpose**: Converts JSON data to a downloadable `.csv` file.  
- **Output File**: CSV containing `id`, `subject`, `message`, and `time`.

---

### 6. **Google Drive**
- **Type**: Google Drive  
- **Purpose**: Uploads the generated CSV file to Google Drive.  
- **Drive**: My Drive  
- **Folder**: Root  
- **File Name**: Current timestamp + `_n8n_export.csv`

---

### 7. **End Workflow** (`NoOp`)
- **Purpose**: Final node to explicitly end the workflow.

---

## ✅ Use Cases

- **Personal Email Archiving**: Back up or export emails from a specific sender (e.g., invoices, reports).
- **Audit Logs**: Save conversations for compliance.
- **Team Reports**: Aggregate project emails into a central file store.

---

## 🔧 Customization Guide

| Customization             | How to Do It                                               |
|---------------------------|------------------------------------------------------------|
| Change Sender Email       | Update the `sender` field in the Gmail node.              |
| Filter by Date/Subject    | Add filters in the Gmail node settings.                   |
| Change Time Zone          | Edit `timeZone` in the Code node.                         |
| Add More Email Fields     | Modify the `Set` node to include more fields.             |
| Change File Format        | Use a different format in the Convert to File node.       |
| Rename Output File        | Adjust the `name` in the Google Drive node.               |
| Change Upload Folder      | Set a different `folderId` in the Google Drive node.      |

---

## 🚀 Deployment Tips

- **Schedule the Workflow**: Replace `Manual Trigger` with a `Cron` node.
- **Avoid Duplicates**: Store email IDs and skip duplicates using conditional logic.
- **Security**: Use environment variables for sensitive credentials.

---

## 🧪 Testing Steps

1. Manually trigger the workflow.
2. Verify email data is parsed and formatted.
3. Confirm CSV is generated correctly.
4. Ensure the file is uploaded to Google Drive.

---

## 🧰 Requirements

- Connected Gmail and Google Drive OAuth2 credentials.
- n8n instance (self-hosted or cloud).
- Required nodes available in the n8n environment.

---

&gt; 💡 Need more features? You can add:
&gt; - Error handling
&gt; - Slack/Email notifications
&gt; - Conditional filters
&gt; - Google Sheets integration instead of Drive

## 🔗 Nodes Used

Google Drive, Gmail, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
