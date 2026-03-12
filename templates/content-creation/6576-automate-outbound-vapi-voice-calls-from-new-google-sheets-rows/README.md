# 🎬 Automate outbound Vapi voice calls from new Google Sheets rows

> ⚡ **2,143 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n automation connects your Google Sheets to **[Vapi](https://vapi.ai/?aff=onenode)**, enabling you to automatically **call new contacts** as soon as their information is added to your spreadsheet. Instantly reach out with a personalized voice call from a Vapi AI assistant, based on any event that adds a new row to your sheet.

## 🧾 Requirements

### Google Sheets
- **Google Sheets credentials** enabled and tested in n8n.
- A table in your Google Sheet formatted as follows:

#### Required Columns & Data Types

| Column Name   | Example Value   | Data Type         | Notes                                         |
|---------------|----------------|-------------------|-----------------------------------------------|
| phone_number  | +11234567890   | Text (String)     | Must include the `+` and country code, no spaces or dashes. Mandatory for workflow. |
| *(optional)*  | first_name     | John              | Text (String)     | For call personalization.                     |
| *(optional)*  | email          | test@email.com    | Text (String)     | For follow-ups or records.                    |
| *(additional)*| Any extra info |                   |                 | Can be used for advanced customization.       |

- Ensure all columns contain data in plain text format.
- Phone number field **must never be empty** and follow the E.164 international format: `+` + country code + phone number.

----

### Vapi
- A [**Vapi**](https://vapi.ai/?aff=onenode) account with credit.
- A connected **phone number** (to originate calls).
- An **assistant** (AI voice agent) created and ready to make calls.
- Your **Vapi API key**.

### 🔗 Useful Link
- [Vapi Docs](https://docs.vapi.ai/)

---

## 🛠️ Comprehensive Setup Instructions

### 1. **Prepare Your Google Sheet**
- Create a Google Sheet with the required column names as listed above.
- Ensure your `phone_number` column is correctly formatted (international format, no spaces).
- Optionally, add columns such as `first_name`, `email`, or any field your workflow should use.

### 2. **Set Up Google Sheets Credentials in n8n**
- In n8n, go to "Credentials" and create Google Sheets credentials.
- Authenticate with your Google account and test the connection.

### 3. **Configure the n8n Workflow**
- Add a **Google Sheets Trigger** node:
    - Set trigger mode to "New Row".
    - Select your Google Sheet and worksheet.
- Add a **Wait** node:
    - Configure a wait time (e.g., 4 minutes) between trigger and next action.

### 4. **Map & Set Vapi Fields**
- Add a **Set** node:
    - Create fields required by the Vapi API:
        - `phone_number_id`: Copy from your Vapi dashboard.
        - `assistant_id`: Use the ID of your AI assistant.
        - `api_key`: Store securely (see n8n secret management).
        - `to`: Set as the Google Sheet's `phone_number` value.  
          Example: `{{ $json["phone_number"] }}`
    - (Optional) Map extra fields from Sheet (e.g., `first_name`, `email`) for personalized calls.

### 5. **Add the HTTP Request to Vapi**
- Add an **HTTP Request** node:
    - Method: `POST`
    - URL: `https://api.vapi.ai/call`
    - Body parameters: Use all mapped fields from previous step.

### 6. **Test the Workflow**
- Add a new row to your Google Sheet.
- Verify that, after the wait period, Vapi attempts the call and uses personalized information.

---

## 🎨 Customization Options

- **Personalize Calls Further:**  
  Add additional columns like `first_name`, `product`, or `appointment_time` in Google Sheets. Map these into the API call so Vapi can use them for dynamic greetings or contextual responses.
- **Conditional Flows:**  
  Insert n8n logic nodes (IF, Switch) before making the Vapi call. For example, only call if a "Consent" column is TRUE, or select different assistants based on region or product interest.
- **Multiple Assistants/Numbers:**  
  Store different assistant IDs or phone number IDs in columns, and dynamically route calls based on sheet data (e.g., region-specific assistants).
- **Advanced Field Mapping:**  
  Pass any relevant sheet fields into the API payload and configure your Vapi assistant scripts to utilize these variables for high-touch, customized user interactions.

---

## 📇 Example Google Sheet Setup

| phone_number | first_name | email            | product    | consent |
|--------------|------------|------------------|------------|---------|
| +11234567890 | John       | j@email.com      | Widget A   | TRUE    |
| +44207123456 | Maria      | maria@x.co.uk    | Widget B   | FALSE   |

- In n8n, map only those rows where `consent`=TRUE.

---

## 🙋‍♂️ Need Help?

Feel free to contact us at [**1 Node**](https://1node.ai)  
Get instant access to a library of [**free resources**](https://1node.ai/resources) we created.

## 🔗 Nodes Used

HTTP Request, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
