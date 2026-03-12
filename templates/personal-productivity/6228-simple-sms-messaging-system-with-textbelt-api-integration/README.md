# ⚡ Simple SMS messaging system with Textbelt API integration

> ⚡ **409 views** · ⚡ [Personal Productivity](../)

## Description

This n8n workflow sends SMS messages through the Textbelt API by accepting phone numbers, messages, and API keys as inputs. It uses a manual trigger to start the process, sets the necessary data, and executes an HTTP POST request to deliver the SMS.

Step-by-Step Explanation:
1. Manual Trigger: Starts the workflow manually by clicking ‘Execute workflow’.
2. Set Data Node: Defines the required input parameters (phone, message, and key) that will be sent to the SMS API. You can populate these fields with your target phone number, the text message, and your Textbelt API key.
3. HTTP Request Node: Sends a POST request to https://textbelt.com/tex with the phone number, message, and API key in the request body to send the SMS. The response from the API confirms whether the message was successfully sent.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
