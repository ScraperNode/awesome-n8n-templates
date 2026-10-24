# 🔬 Extract doctor stamp details from images with AWS Bedrock Claude and SNS

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives a webhook request, fetches a doctor stamp/pad image from a separate file-management workflow, uses AWS Bedrock (Claude) vision OCR to extract structured doctor and facility details, and publishes the base64-encoded result to an AWS SNS topic, with matching SNS-based error notifications.

## How it works
1. Receives a POST request via a webhook and immediately returns a JSON acknowledgement containing the execution and workflow IDs.
2. Calls a separate n8n workflow to fetch the source document image from file management based on the webhook payload.
3. Resizes the image to a maximum of 800×800 pixels to standardize input and reduce payload size.
4. Sends the image to an AWS Bedrock Claude vision chat model through an AI Agent that is instructed to strictly extract only clearly visible doctor and facility details and output valid JSON.
5. Builds a success response that includes the extracted JSON plus the incoming executionRequestId and queryId.
6. Base64-encodes the response payload and publishes it to an AWS SNS topic for downstream processing.
7. If any execution error occurs, builds a standardized failure response, base64-encodes it, and publishes the error message to the same AWS SNS topic.

## Setup
1. Configure the Webhook endpoint and ensure the calling system sends the required request body fields (including executionRequestId and queryId) and an image reference that your file-management workflow can resolve.
2. Set up and select AWS credentials for AWS Bedrock, and ensure access to the specified Claude inference profile/model.
3. Set up AWS credentials for Amazon SNS and update the SNS topic ARN used for publishing success and error messages.
4. Update the referenced “file import” (Execute Workflow) workflow to correctly fetch and return the image binary data expected by the image resize and AI steps.

## 🔗 Nodes Used

Edit Image, Webhook, AWS SNS, Execute Sub-workflow, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
