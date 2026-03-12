# 💬 Forward Chatwoot Messages to WhatsApp via Evolution API with Media Support

> ⚡ **1,405 views** · 💬 [Support Chatbots](../)

## Description

## Description
This workflow automates forwarding messages received in Chatwoot to WhatsApp using the Evolution API. It provides full support for different types of messages, ensuring rich and seamless communication with the end user.

## What Problem Does This Solve?
Manually forwarding messages from Chatwoot to WhatsApp can be time-consuming and error-prone, especially when handling diverse message types like media files. This subworkflow streamlines the process, automating message delivery while maintaining message fidelity and media compatibility.

## Features

- Support for plain text messages;
- Support for media messages including images, videos, documents, and audio;
- Automatic detection of media type based on the content_type field;
- Automatic processing of incoming messages from Chatwoot via webhook or native integration

## Prerequisites
Before using this subworkflow, make sure you have:
1. Evolution API key and URL;
2. Incoming messages from Chatwoot via webhook or native integration;
3. Configured HTTP Request node in n8n

## Suggested Usage
This subworkflow should be attached to a main workflow that receives messages from Chatwoot. It is ideal for automated customer service, help desks, or hybrid bots (human + automated), enabling messages originating from Chatwoot to be faithfully redirected to WhatsApp.


![image.png](fileId:1895)

## 🔗 Nodes Used

Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
