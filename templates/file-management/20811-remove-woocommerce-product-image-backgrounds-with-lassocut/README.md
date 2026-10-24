# 📁 Remove WooCommerce product image backgrounds with LassoCut

> ⚡ **0 views** · 📁 [File Management](../)

## Description

## Quick Overview
This workflow collects a photo upload via an n8n form and uses LassoCut to remove the background based on the selected color and output size, returning a downloadable PNG cut-out to the browser or showing an error message if processing fails.

## How it works
1. Receives a photo, background choice, and size selection through an n8n Form Trigger.
2. Sends the uploaded image to LassoCut to remove the background, mapping the selected background to a hex color and choosing preview or full-size processing.
3. Returns the cut-out image to the browser as a downloadable PNG file when processing succeeds.
4. Displays the error message in a completion page when LassoCut returns an error (for example, invalid key or insufficient credits).

## Setup
1. Install the community node package `n8n-nodes-lassocut` in your n8n instance.
2. Create a LassoCut account and add your LassoCut API key as an n8n credential for the LassoCut node.
3. Execute the workflow and use the generated form test URL to upload a photo and receive the processed download.

## 🔗 Nodes Used

HTTP Request, WooCommerce, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
