# 📁 Convert multiple binary files to base64 JSON arrays with no custom code

> ⚡ **403 views** · 📁 [File Management](../)

## Description

## No-Code: Convert Multiple Binary Files to Base64

### Introduction

This template provides a robust, purely **no-code** solution for a common integration challenge: converting multiple binary files contained within a single n8n item (e.g., after unzipping an archive) into a structured JSON array of Base64 encoded strings.

### Purpose

Many external APIs, especially those handling batch file uploads or complex data structures, require files to be submitted as a single JSON payload. This payload typically needs an array containing two elements for each file: the reconstructed file path/name and the Base64 encoded content. This template automatically handles the file isolation, encoding, path reconstruction, and final JSON aggregation, replacing the need for complex custom JavaScript Code nodes.

### Configuration Steps

1. **Input**: Connect your binary data source (e.g., an **HTTP Request** followed by a **Compression** node) to the first node in this template.
2. **Split Out**: This node automatically separates the multiple binary files into individual items.
3. **Extract From File**: This node uses the dynamic expression `{{ $binary.keys()[0] }}` to ensure the correct binary file is targeted and converted to Base64.
4. **Set**: This node uses a conditional expression to reconstruct the full `path` (including the directory, if present) for each file.
5. **Aggregate**: The final node merges all individual items into a single, clean JSON item containing a top-level `files` array, ready for your final API call.


For a detailed walkthrough, including the explanation behind the dynamic expressions and why this is superior to the custom code solution, check out the full blog post: [The No-Code Evolution: Base64 Encoding Multiple Files in n8n (Part 2)](https://n8nplaybook.com/post/2025/10/no-code-base64-encoding-in-n8n).

## 🔗 Nodes Used

HTTP Request, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
