# 💬 Handle clinic appointments via MCP tools for Vapi and Retell voice agents

> ⚡ **480 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow exposes appointment management tools through an n8n MCP Server webhook so an external AI voice agent (for example, Vapi or Retell) can check availability, book appointments, suggest alternate slots, and cancel or reschedule existing bookings. Full setup guide: https://uzzaman.dev/guides/n8n-appointment-booking-vapi-retell/

## How it works
1. Receives an MCP tool request via the MCP Server Trigger webhook endpoint.
2. When asked to verify a requested date and time, calls the “Check Slot Availability” sub-workflow to confirm whether the appointment slot is open.
3. If the slot is available and caller details are confirmed, calls the “Book Appointment” sub-workflow to create the appointment.
4. If the slot is unavailable, calls the “GET Alternate Slot” sub-workflow to return alternative available appointment times.
5. For changes to existing bookings, calls either the “Cancel Appointment” or “Reschedule Appointment” sub-workflow using the caller’s phone number and appointment details.

## Setup
1. Configure your external AI voice agent (for example, Vapi or Retell) to connect to this workflow’s MCP webhook URL and send tool requests to it.
2. Publish and configure the referenced sub-workflows (“Check Slot Availability”, “Book Appointment”, “GET Alternate Slot”, “Cancel Appointment”, and “Reschedule Appointment”) so they can access your scheduling system and return results.
3. Ensure the voice agent provides inputs in the expected formats (dates as YYYY-MM-DD, times as HH:mm 24-hour, and phone numbers in E.164).

## Requirements
- External AI voice platform (Vapi, Retell, or similar) & Published appointment management sub-workflows

## Customization
- Replace the sub-workflows with your own booking, cancellation, and rescheduling logic.
- Modify input validation rules to match your business requirements.
- Extend the MCP server with additional tools such as FAQs, insurance verification, or lead capture.

## Additional info
This template acts as an orchestration layer and requires the dependent appointment workflows to be imported and configured separately.

Designed for AI voice agents serving appointment-based businesses such as clinics, dental practices, salons, and service providers.

## 🔗 Nodes Used

Call n8n Workflow Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
