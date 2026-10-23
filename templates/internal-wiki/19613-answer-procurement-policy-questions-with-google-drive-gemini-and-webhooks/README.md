# 📖 Answer procurement policy questions with Google Drive, Gemini, and webhooks

> ⚡ **15 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow exposes a webhook-based helpbot that answers employee questions using a policy PDF from Google Drive, generates a structured response with Google Gemini, and escalates low-confidence answers by creating a support ticket via an HTTP request.

## How it works
1. Receives an employee question via a POST webhook request.
2. Fetches a policy PDF from a Google Drive download URL and extracts its text content.
3. Analyzes the document text to detect the likely policy domain and document structure, then builds a system prompt that instructs Google Gemini to answer using only the document.
4. Sends the prompt and the user’s question to Google Gemini and parses the model’s JSON response, including a confidence score.
5. If the confidence is 0.70 or higher, returns the policy-based answer (plus section, next action, and summary) as the webhook response.
6. If the confidence is below 0.70 (or parsing fails), creates a support ticket by POSTing the question and the bot’s best attempt to an external helpdesk endpoint and returns an escalation notice to the webhook caller.

## Setup
1. Configure the webhook endpoint in your chatbot or frontend to POST a JSON body containing at least `message`, `userId`, `channel`, and `sessionId`.
2. Replace the Google Drive download URL in the PDF fetch step with your own policy document link that is accessible to n8n.
3. Add a Google Gemini (PaLM) API credential and select an appropriate Gemini model.
4. Set the helpdesk/ticketing system URL in the support-ticket HTTP request step and adjust the JSON payload fields to match your ticket API.

## Additional info
## Additional Possibilities

The same architecture can be adapted for:

- Employee handbooks
- SOP documentation
- Compliance manuals
- Vendor management guides
- Corporate knowledge bases
- Internal operating procedures
- Quality assurance documentation

and many other document-driven support use cases.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---------|---------|---------|
| Webhook returns no response | Workflow inactive | Activate workflow and use production URL |
| PDF extraction fails | Invalid PDF URL or permissions issue | Verify PDF is publicly downloadable |
| Gemini node errors | Missing or invalid credentials | Reconnect Gemini API credentials |
| JSON parsing error | AI returned invalid JSON | Review prompt configuration and Gemini output |
| Constant escalations | Confidence threshold too high | Lower threshold from 0.70 to a suitable value |
| Empty answers returned | Policy content missing required information | Verify PDF contains the requested information |
| Ticket creation fails | Incorrect helpdesk API URL | Verify endpoint and authentication settings |
| Wrong policy domain detected | Domain keywords do not match document content | Update keyword patterns in analysis node |
| Slow responses | Large PDF size | Reduce document size or implement retrieval methods |
| Employee receives escalation unexpectedly | AI confidence below threshold | Review policy coverage and prompt instructions |


## Need Help?

Whether you need help with:

- n8n workflow setup
- Gemini AI integration
- Helpdesk integrations
- Slack or Teams deployment
- Policy document automation
- Multi-document knowledge bases
- Vector database integrations
- Enterprise AI assistants
- [Hiring n8n developers](https://www.weblineglobal.com/hire/n8n-developers/)

the team at **WeblineIndia** can help.

We can assist with workflow installation, customization, advanced integrations, performance optimization and development of similar AI-powered automation solutions tailored to your business processes.

If you need a custom version of this workflow or additional enterprise features, reach out to WeblineIndia for consultation and implementation support.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Extract from File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
