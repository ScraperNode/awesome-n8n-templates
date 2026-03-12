# 🔬 Convert an XML file to JSON via webhook call

> ⚡ **4,758 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who this template is for
This template is for everyone who needs to work with XML data a lot and wants to convert it to JSON instead.

## Use case
Many products still work with XML files as their main language. Unfortunately, not every software still supports XML, as many switched to more modern storing languages such as JSON. This workflow is designed to handle the conversion of XML data to JSON format via a webhook call, with error handling and Slack notifications integrated into the process. 

## How this workflow works
1. **Triggering the workflow:**
    - This workflow initiates upon receiving an HTTP POST request at the webhook endpoint specified in the "POST" node. The endpoint, designated as <WEBHOOK_URL>, can be accessed externally by sending a POST request to that URL.
2. **Data routing and processing:**
    - Upon receiving the POST request, the Switch node routes the workflow's path based on conditions determined by the content type of the incoming data or any encountered errors.
    - The Extract From File and Edit Fields (Set) nodes manage XML input processing, adapting their actions according to the data's content type.
3. **XML to JSON conversion**:
    - The XML data extracted from the input is passed through the "XML" node, which performs the conversion process, transforming it into JSON format.
4. **Response handling:**
- If the XML-to-JSON conversion is successful, a success response is sent back with a status of "OK" and the converted JSON data.
- If there are any errors during the XML-to-JSON conversion process, an error response is sent back with a status of "error" and an error message.
- Error handling: in case of an error during processing, the workflow sends a notification to a Slack channel designated for error reporting.

## **Set up steps**
1. Set up your own <WEBHOOK_URL> in the Webhook node. While building or testing a workflow, use a test webhook URL. When your workflow is ready, switch to using the production webhook URL. 
2. Set credentials for Slack.

## 🔗 Nodes Used

Slack, Webhook, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
