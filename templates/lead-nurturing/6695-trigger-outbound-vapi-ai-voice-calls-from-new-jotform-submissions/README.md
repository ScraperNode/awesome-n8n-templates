# 💬 Trigger outbound Vapi AI voice calls from new Jotform submissions

> ⚡ **1,182 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This workflow connects JotForm submissions to **[Vapi AI](https://vapi.ai/?aff=onenode)**, triggering a personalized outbound call via an AI voice assistant immediately after a user submits your form.

## Requirements

### JotForm
- A **[JotForm account](https://www.jotform.com/?partner=https://1node.ai)**
- **JotForm API credentials** enabled in n8n
- A **published JotForm form** with a phone number field

### Vapi
- A **[Vapi account](https://vapi.ai/?aff=onenode)** with credit
- A connected **phone number** for making calls
- An **assistant** created and ready for outbound calls
- Your **Vapi API key**

---

## Workflow Steps

### 1. JotForm Trigger
- Starts the workflow when a new form submission is received.

### 2. Information Extractor
- **Formats the phone number** with a `+`, country code, and full number (e.g., `+391234567890`) for compatibility with Vapi.

### 4. Set Fields for Vapi
- Configure these fields:
    - `phone_number_id`: ID of the Vapi number used for the call
    - `assistant_id`: ID of the Vapi assistant
    - `api_key`: Your Vapi API key

### 5. Start Outbound Vapi Call
- Sends a POST request to `https://api.vapi.ai/call` with:
    - The formatted phone number
    - All required Vapi fields
    - Any additional info mapped from the form, for personalization

---

## Customization

- **Add more form fields:** Include extra data (such as name, appointment time) and add to the Vapi payload.
- **Conditional logic:** Use n8n filter nodes to control if/when calls are made.
- **Dynamic assistant selection:** Route submissions to different assistants or numbers based on user responses.

---

## Notes

- Ensure phone numbers are formatted correctly in the extractor node to prevent call errors.
- Any field from your form can be passed in the API payload and used in the assistant's script.

---

## Need Help?

For additional resources or help, visit **[1 Node](https://1node.ai)**.

## 🔗 Nodes Used

HTTP Request, Jotform Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
