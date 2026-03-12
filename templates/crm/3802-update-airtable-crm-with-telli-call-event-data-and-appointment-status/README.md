# 🤝 Update Airtable CRM with telli call event data and appointment status

> ⚡ **380 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Receive realtime call-event data from telli

### Purpose and Problem Solved

This template automates the process of receiving and acting upon real-time call event data from telli, an AI-powered voice agent platform. It solves the challenge of manually updating CRM records and initiating follow-up actions based on call outcomes. By leveraging webhooks and n8n's powerful workflow capabilities, this template enables businesses to instantly update their Airtable CRM and trigger appropriate follow-up actions, enhancing efficiency and responsiveness in customer interactions.

### Prerequisites

- An active telli account with API access and webhook capabilities
- An Airtable base set up as your CRM
- n8n instance (cloud or self-hosted)

### Airtable Specifications

Create an Airtable base with the following table and fields:

**Table: Contacts**
- Fields:
  - Name (Single line text)
  - Phone (Phone number)
  - Email (Email)
  - Appointment_Booked (Checkbox)
  - Interest (Single select: High, Medium, Low)
  - Last_Call_Date (Date)
  - Notes (Long text)

### Step-by-Step Setup Instructions

1. **Webhook Configuration in telli:**
   - Log into your telli dashboard
   - Navigate to the webhook settings
   - Set the endpoint URL to your n8n Webhook node URL
   - Select the "call_ended" event to trigger the webhook

2. **n8n Workflow Setup:**
   - Create a new workflow in n8n
   - Add a Webhook node as the trigger
   - Configure the Webhook node to receive POST requests

3. **Parse Webhook Data:**
   - Add a Set node to extract relevant information from the webhook payload
   - Map fields such as call_outcome, appointment_booked, and interest

4. **Decision Logic:**
   - Add a Switch node to create different paths based on the call outcome
   - Create branches for scenarios like "Appointment Booked", "Interested", and "Not Interested"

5. **Airtable Integration:**
   - Add Airtable nodes for each outcome to update the Contacts table
   - Configure the nodes to update fields like Appointment_Booked, Interest, and Last_Call_Date

6. **Follow-up Actions:**
   - For "Interested" but not booked outcomes, add an Email node to trigger a follow-up email campaign
   - For "Appointment Booked", add a node to create a calendar event or task

7. **Testing and Activation:**
   - Use the n8n testing feature to simulate webhook calls and verify each path
   - Once satisfied, activate the workflow

### Example Workflow

1. Webhook receives a "call_ended" event from telli
2. Set node extracts call_outcome: appointment_booked = true, interest = true
3. Switch node directs to the "Appointment Booked" path
4. Airtable node updates the contact record:
   - Set Appointment_Booked to true
   - Set Interest to "High"
   - Update Last_Call_Date
5. Calendar node creates an appointment for the booked slot

### Example Payload

Below is an example of the payload you might receive from telli when a call ends:
```json
{
  "event": "call_ended",
  "call": {
    "call_id": "b4a05730-2abc-4eb0-8066-2e4d23b53ba9",
    "attempt": 1,
    "from_number": "+17755719467",
    "to_number": "+16506794960",
    "external_contact_id": "external-123",
    "contact_id": "6bd1e7e0-6d00-4c0b-ad5b-daa72457a27d",
    "agent_id": "d8931604-92ad-45cf-9071-d9cd2afbad0c",
    "triggered_at": 1731956924302,
    "started_at": 1731956932264,
    "booked_slot_for": "2025-02-24T15:30:00Z",
    "ended_at": 1731957002078,
    "call_length_min": 2,
    "call_status": "COMPLETED",
    "transcript": "Agent: Hello...",
    "transcriptObject": [
      {
        "role": "agent",
        "content": "Hello..."
      }
    ],
    "call_analysis": {
      "summary": {
        "value": true,
        "details": "A call between an agent and a customer talking about buying an ice cream machine"
      },
      "appointment": {
        "value": true,
        "details": "2025-02-18T15:30:00Z"
      },
      "interest": {
        "value": true,
        "details": "The customer is interested in buying an ice cream machine"
      }
    }
  }
}
```

In this example, you can see that the call resulted in a booked appointment and showed customer interest. Your n8n workflow would process this data, updating the Airtable CRM and triggering any necessary follow-up actions.

By implementing this template, businesses can automate their post-call processes, ensuring timely follow-ups and accurate CRM updates. This real-time integration between telli's AI voice agents and your Airtable CRM streamlines operations, improves customer engagement, and increases the efficiency of your sales and support teams.

## 🔗 Nodes Used

Airtable, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
