# 💬 Medical symptom analysis & doctor recommendations with Ollama AI & WhatsApp

> ⚡ **1,935 views** · 💬 [Support Chatbots](../)

## Description

This n8n workflow enables an AI-powered symptom checker where users input symptoms via a form or chat, analyzes them using an AI model, matches possible conditions, and suggests relevant doctors with contact details via WhatsApp or email, enhancing healthcare accessibility.

## Why Use It

This workflow improves healthcare outreach by providing quick, AI-driven symptom analysis and doctor recommendations, reducing the burden on medical staff, empowering users with informed choices, and streamlining appointment scheduling.

## How to Import It

1. **Download the Workflow JSON**: Obtain the workflow file from the n8n template or create it based on this document.
2. **Import into n8n**: In your n8n instance, go to "Workflows," click the three dots, select "Import from File," and upload the JSON.
3. **Configure Credentials**: Set up form/webhook, AI model, WhatsApp, email (e.g., SMTP), and optional doctor database API credentials in n8n.
4. **Run the Workflow**: Test with a sample symptom input and verify responses.

## System Architecture

- **Symptom Input Pipeline**:
  - **Form/Chat Trigger**: Initiates the workflow when a user submits symptoms.
  - **Extract Symptom Data**: Processes the input from the form or chat.
- **AI Analysis Flow**:
  - **Send to AI Model**: Analyzes symptoms using an AI model.
  - **Match Possible Conditions**: Identifies potential health conditions.
- **Doctor Suggestion Flow**:
  - **Retrieve Doctor Details**: Fetches relevant doctor data from a Google Sheet or API.
  - **Prepare Suggestion Message**: Formats the suggestion with doctor names and contacts.
  - **Send WhatsApp Suggestion**: Delivers the suggestion via WhatsApp.
  - **Send Email Suggestion**: Delivers the suggestion via email.
  - **Update Log**: Logs the request and response in a Google Sheet.

## Google Sheet File Structure
- **Columns**:
  - `timestamp`: Date and time of the symptom submission.
  - `user_id`: Unique identifier for the user (e.g., form ID or chat handle).
  - `symptoms`: List of symptoms entered by the user.
  - `condition`: AI-identified possible condition.
  - `doctor_name`: Name of the suggested doctor.
  - `contact`: Doctor’s contact (phone or email).
  - `sent_via`: Channel used for delivery (e.g., WhatsApp, Email).

## Customization Ideas
- **Add More Channels**: Integrate SMS or Slack for additional notifications.
- **Enhance AI**: Train the AI model with more medical data for better accuracy.
- **Include Appointment Booking**: Add a node to schedule appointments with suggested doctors.
- **Multilingual Support**: Adapt responses for different languages.
- **Severity Alerts**: Flag critical conditions for immediate medical attention.

## Requirements to Run This Workflow
- **Google Sheets Account**: For logging symptom data and doctor details.
- **AI Model**: Ollama or similar for symptom analysis (requires API access).
- **Form/Chat Service**: Google Forms, WhatsApp webhook, or similar for user input.
- **WhatsApp Business API**: For sending WhatsApp messages (requires token and phone number).
- **Email Service**: Gmail, SMTP, or similar for email delivery.
- **n8n Instance**: With Google Sheets, AI, WhatsApp, and email connectors configured.
- **Internet Connection**: To access APIs and services.

Want a tailored workflow for your business? Our experts can craft it quickly [Contact our team](https://www.oneclickitsolution.com/contact-us/)

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, AI Agent, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
