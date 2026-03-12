# 💬 Voice agent for dental appointment booking with Gemini AI

> ⚡ **19,405 views** · 💬 [Support Chatbots](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# AI dental appointment booking with Google Calendar and Sheets

## Who's it for

This workflow is perfect for dental practices, medical offices, and healthcare providers who want to automate their appointment scheduling process. It's ideal for practices that receive high volumes of appointment requests and want to reduce manual booking while maintaining accurate patient records.

## What it does

This AI-powered voice agent handles complete appointment booking workflows for "Pearly Whites Dental." When patients call or submit requests, the system:

- Analyzes the request using Google Gemini AI to understand patient needs
- Checks calendar availability in real-time via Google Calendar integration
- Automatically finds and offers up to 2 available appointment slots when the preferred time isn't available
- Books confirmed appointments directly to the practice calendar
- Logs all patient information (name, insurance, concerns) to Google Sheets for record-keeping
- Maintains conversation context across interactions for natural dialogue flow

The workflow operates in Central Time Zone and assumes standard business hours (8 AM - 5 PM, excluding lunch).

## How it works

The system receives webhook requests containing patient interaction data. The AI agent processes this information and determines which tools to use based on the request type. For availability checks, it intelligently searches multiple time slots in 30-minute increments until finding suitable options. All appointments are automatically formatted as "Dental Appointment | [Patient Name]" and logged with complete patient details.

## Requirements

- Google Calendar API access with OAuth2 credentials
- Google Sheets API access for patient data logging
- Google Gemini API key for AI processing
- Webhook endpoint for receiving requests
- Pre-configured Google Calendar and Sheets document

## How to set up

1. **Configure Google Calendar credentials** in the calendar tool nodes
2. **Set up Google Sheets integration** with your patient tracking spreadsheet
3. **Add your Google Gemini API key** to the language model node
4. **Update the calendar ID** in both calendar nodes to match your practice calendar
5. **Modify the Google Sheets document ID** to point to your patient records sheet
6. **Test the webhook endpoint** to ensure proper request processing

## How to customize the workflow

- **Adjust business hours** by modifying the availability checking logic in the system prompt
- **Change appointment duration** by updating the end time calculation (currently set to 1 hour)
- **Modify patient data fields** by updating the Google Sheets column mapping
- **Update practice name** by changing "Pearly Whites Dental" references in the system prompt
- **Customize response format** by adjusting the AI agent's instructions for different appointment types

## 🔗 Nodes Used

Webhook, AI Agent, Simple Memory, Google Gemini Chat Model, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
