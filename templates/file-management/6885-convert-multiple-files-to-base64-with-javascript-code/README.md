# 📁 Convert multiple files to base64 with JavaScript code

> ⚡ **700 views** · 📁 [File Management](../)

## Description

## Base64 Encode Multiple Binary Files with a Code Node
This template demonstrates how to handle multiple binary files in n8n by using a Code node to convert them into a Base64 encoded string. It's particularly useful when an API requires file uploads in this format and the standard 'Extract From File' node is not sufficient for batch processing. The workflow starts by downloading a ZIP file, unzipping it to get multiple binary files, and then uses a Code node with custom JavaScript to encode each file individually.
### Instructions
1. Download and import this template into your n8n instance.
2. Run the workflow once to see how it downloads, unzips, and then encodes multiple files.
3. Modify the 'HTTP Request' node to download your own binary file or a ZIP file containing multiple files.
4. Update the 'Code' node if you need to adjust the output format or file paths.
5. Use the output of the 'Code' node in a subsequent node, such as another 'HTTP Request' to send the Base64-encoded files to your desired API.

A link to the full blog post is available [here](https://n8nplaybook.com/post/2025/08/from-binary-to-base64-in-n8n/).

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
