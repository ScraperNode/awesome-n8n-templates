# 💬 Handle dental booking calls with Vapi, Airtable, and gotoHuman

> ⚡ **108 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow powers a voice AI receptionist for dental clinics that never bluffs. It answers calls via Vapi, checks availability, verifies insurance, and books appointments in Airtable then instantly escalates urgent or distressed callers to a real human through gotoHuman. Narrow scope, honest handoffs, zero guessing.

## How it works
1. Receives POST requests from Vapi during a live call via a webhook and extracts which tool was invoked and its arguments.
2. If the caller requests availability, it returns a mocked set of open time slots based on the appointment type and estimated duration.
3. If the caller asks about insurance, it checks the provided carrier against a mocked in-network list and returns an in-network or fallback message.
4. If the caller books an appointment, it normalizes the booking details and creates a call/booking record in Airtable.
5. If the assistant escalates, it packages the caller context and sends an asynchronous review request to gotoHuman, then returns a handoff message for Vapi to speak.
6. For any unrecognized request, it returns a fallback message and responds to Vapi with the appropriate JSON payload.
7. Receives a separate webhook callback from gotoHuman for approve/reject outcomes and logs the raw decision payload to Airtable.

## Setup
1. Create a Vapi assistant and configure four “API Request” tools (check_availability, check_insurance, book_appointment, escalate_to_human) to call this workflow’s Vapi Tool Call Webhook URL.
2. Add an Airtable Personal Access Token credential, select your base/table in both Airtable nodes, and create a Calls table with the fields used for booking (for example: Caller Name, Phone, Appointment Type, Insurance Provider, Slot Time, Source).
3. Create a gotoHuman agent and review form, add your gotoHuman credentials, and select the agent and template in the escalation node.
4. Copy this workflow’s gotoHuman Review Callback webhook URL into your gotoHuman agent webhook settings so approve/reject decisions are delivered to n8n.

## 🔗 Nodes Used

Airtable, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
