# 💬 Connect Airtable contacts to telli for automated AI voice call scheduling

> ⚡ **671 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# Upload your CRM contacts to telli and schedule AI voice-agent calls

## Introduction to telli and AI Voice-Agent Calls

telli is an innovative platform that provides AI-powered voice agents capable of making calls and performing tasks tailored to specific customer use cases. These AI voice-agents can handle a wide range of communication tasks, from appointment scheduling to customer support, with remarkable efficiency and natural conversation flow.

This template is designed for businesses and organizations looking to automate their outbound calling processes using telli's AI voice-agents in conjunction with Airtable as their CRM. It solves the problem of manual call scheduling and data transfer between your CRM and calling system, saving time and reducing human error.

### Prerequisites

- telli account
- Airtable base with contact information
- n8n instance

### Step-by-Step Setup Guide

1. **n8n Setup**:
   - Create a new workflow in n8n.
   - Add the Airtable node to connect to your CRM table.

2. **telli API Configuration**:
   - Log in to your telli dashboard.
   - Locate and copy your API key under telli - Settings - API/Webhooks.

3. **Workflow Configuration**:
   - Add two telli nodes to your n8n workflow.
   - Configure the first telli node to use the "Add a contact" operation.
   - Set up the second telli node to use the "Schedule a call" operation.

4. **Data Mapping**:
   - Map the relevant fields from your Airtable node to the telli API requests.

5. **Testing and Activation**:
   - Run a test execution of your workflow.
   - Once satisfied with the results, activate the workflow.

### API Endpoint Details

#### Add Contact

- **URL**: `https://api.telli.com/v1/add-contact`
- **Method**: POST
- **Headers**:
  - `Authorization: YOUR-API-KEY`
  - `Content-Type: application/json`
- **Payload**:
```json
{
  "external_contact_id": "string",
  "salutation": "string",
  "first_name": "string",
  "last_name": "string",
  "phone_number": "string",
  "email": "jsmith@example.com",
  "contact_details": {},
  "timezone": "string"
}
```

#### Schedule Call Endpoint

- **URL**: `https://api.telli.com/v1/schedule-call`
- **Method**: POST
- **Headers**:
  - `Authorization: YOUR-API-KEY`
  - `Content-Type: application/json`
- **Payload**:
```json
{
  "contact_id": TELLI-CONTACT-ID,
  "agent_id": "string",
  "max_retry_days": 123,
  "call_details": {
    "message": "Hello, this is your friendly reminder!",
    "questions": [
      {
        "fieldName": "email",
        "neededInformation": "email of the customer",
        "exampleQuestion": "What is your email address?",
        "responseFormat": "email string"
      }
    ]
  },
  "override_from_number": "string"
}
```

### Use Cases

This template is versatile and can be applied to various scenarios, including:

***- Lead Qualification***: Automatically schedule calls to new leads entered in your CRM.

***- Appointment Reminders***: Set up calls to remind clients of upcoming appointments.

***- Customer Feedback***: Schedule follow-up calls after product deliveries or service completions.


### Uploading Multiple Contacts

For bulk operations, you can use the Loop node in your n8n workflow to process multiple contacts sequentially.

By leveraging this template, you can seamlessly integrate your Airtable CRM with telli's powerful AI voice-agents, automating your outbound calling process and enhancing your customer communication strategy.

## 🔗 Nodes Used

Airtable Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
