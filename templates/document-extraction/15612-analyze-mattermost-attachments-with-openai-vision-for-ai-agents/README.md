# 🔬 Analyze Mattermost attachments with OpenAI vision for AI agents

> ⚡ **16 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview

Subworkflow for analyzing Mattermost attachments.

## Per-attachment behavior
- **Image** (mime starts with `image/`, size ≤ `MAX_IMAGE_SIZE_BYTES`): downloaded and analyzed by OpenAI vision model.
- **Text small** (text-like by mime/extension, size ≤ `MAX_TEXT_SIZE_BYTES`): downloaded as plain text and inlined into the context block (with line count check ≤ `MAX_TEXT_LINES`).
- **Text too large** (text-like, exceeds byte or line limit): replaced with a "too big" marker so the agent asks the user for the relevant excerpt.
- **Other** (binaries, oversized images, unknown): replaced with a generic "not analyzed" marker.

## Setup checklist
1. Set `MATTERMOST_BASE_URL` in the Config node.
2. Create an `HTTP Header Auth` credential called "Mattermost PAT" with:
   - Name: `Authorization`
   - Value: `Bearer &lt;your_personal_access_token&gt;`
3. Attach this credential to all three HTTP Request nodes (Get file info, Download file, Download text file).
4. Attach your OpenAI credential to the "OpenAI: Analyze Image" node.
5. Tune in Config: `VISION_MODEL`, `MAX_IMAGE_SIZE_BYTES`, `MAX_TEXT_SIZE_BYTES`, `MAX_TEXT_LINES`.

## Notes
- The IF guard short-circuits when `file_ids` is empty so the parent workflow can call this subworkflow unconditionally.
- Classification by mime + extension catches `.log` files served as `application/octet-stream`.
- Final output is always a single item with the same shape — safe to consume in the parent.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
