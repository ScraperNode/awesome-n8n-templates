# 🎬 Generate catalog concept PNGs with OpenAI gpt-image-1 and CSV manifests

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow runs manually to turn a small product catalog JSON, approved scene descriptions, and target aspect ratios into a validated matrix of product-image creative briefs, then exports the briefs as a downloadable CSV for review and handoff.

## How it works
1. Starts when you run the workflow manually.
2. Loads your brand style, aspect ratios, product catalog JSON (SKU, subject, must-keep details, optional reference asset), and approved scene JSON.
3. Validates the inputs (required fields, unique SKUs, supported aspect ratios, and a maximum of 100 brief combinations).
4. Builds a creative brief for every product × scene × aspect ratio combination, including a standardized prompt, review checklist, status, and a unique brief ID.
5. Converts the brief matrix into a CSV (with spreadsheet-formula injection protection) and outputs it as a downloadable file.

## Setup
1. Replace the sample product JSON with your own items, ensuring each product includes a unique sku, a subject description, and mustKeep constraints (and optionally referenceAsset).
2. Add or edit the approved scenes JSON (each needs a name and setting) and set brandStyle and aspectRatios to the formats you plan to produce.
3. Run the workflow and download the CSV file from the final step’s binary output; no credentials or external service configuration is required.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
