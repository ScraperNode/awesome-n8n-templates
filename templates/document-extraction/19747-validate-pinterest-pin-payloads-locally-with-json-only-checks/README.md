# 🔬 Validate Pinterest Pin payloads locally with JSON-only checks

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Validate single-image Pinterest Pin payloads locally before publishing elsewhere. Get actionable errors, warnings, and normalized fields, with synthetic examples included. No credentials, network calls, or publishing actions are required. Passing local validation does not guarantee Pinterest acceptance.

## How it works
1. Runs manually to start a test execution.
2. Generates sample Pin payload items (meant to be replaced with your own incoming data).
3. Uses the native URL parser to check whether destination and image URLs parse; the validator separately enforces HTTPS and URL syntax policy without fetching either URL.
4. Applies the documented F1 single-image profile to required title, destination_url, board_id, image_url, and media_rights_status fields, plus optional description, alt_text, image_metadata, and scheduled_at fields. Media rights are a local declaration, not proof of rights.
5. Produces a validation result per item that includes ACCEPTED/REJECTED status, a normalized payload, and structured error and warning lists.
6. Routes each item to an accepted or rejected branch based on whether any validation errors are present.

## Setup
1. Replace the synthetic example generator with your own input (for example, connect a webhook, form submission, or upstream workflow) and feed one flat JSON object per item.
2. Ensure your incoming JSON uses the expected field names and types, especially HTTPS URLs for destination_url and image_url and a digit-string board_id.
3. If you use scheduled_at, provide an explicit ISO 8601 timestamp with timezone (YYYY-MM-DDTHH:mm:ss[.SSS]Z or ±HH:MM).

## Requirements
- A compatible n8n runtime supporting the native extractUrlPath() expression; tested on n8n 2.34.6. No credentials or community nodes required.

## Additional info
FORGE F1 by JusGro, version 1.0.0. The workflow JSON is the unchanged engineering-cleared release. Native import, demo, and repeated 192-item regression passed on n8n 2.34.6, observed September 18, 2026, with no import warnings reported. The companion release package includes reproducible fixtures and documented validation rules. No images are fetched, no board access or media rights are verified, and no URL reachability checks are performed. Passing validation does not guarantee Pinterest acceptance. The original sticky notes are intentionally retained to preserve the cleared JSON.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
