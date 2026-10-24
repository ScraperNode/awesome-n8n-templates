# 🔬 Audit visual SOP JSON metadata and generate HTML reports from forms

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow audits structured visual SOP JSON submitted via an n8n Form or a manual example, validates step timing and evidence metadata, and generates a downloadable HTML quality report that flags errors and warnings and assigns a status of blocked, needs_review, or checks_passed.

## How it works
1. Starts either from a manual run that loads a sample SOP JSON or from an n8n Form submission where you paste your SOP JSON.
2. Parses the submitted JSON, enforces input size limits, and returns a structured input error if the document is invalid.
3. Audits the SOP metadata by checking schema version, title, video duration, step count, step IDs, step instructions, evidence excerpts, timestamp ordering/overlap, and screenshot metadata (timestamp, filename, optional hash, caption).
4. Evaluates the review metadata (pending/approved/rejected) and calculates an overall status based on the number of errors and warnings.
5. Renders the findings into escaped HTML with metrics, an issues table, and limitations notes.
6. Converts the HTML into a downloadable file and either returns it on the form completion page or exposes the binary output for download in manual runs.

## Setup
1. If using the form, open the Form Trigger, copy its test/production URL, and share it with users who should submit SOP JSON.
2. Ensure your SOP JSON follows the expected structure (schema_version, title, video.duration_seconds, steps with id/title/instruction/start_seconds/end_seconds/evidence_text, and optional screenshot and review fields).
3. Configure n8n execution saving/retention so form submissions can return the generated file on the completion page.
4. Optionally add access protection (for example, Basic Auth) before publishing the form publicly.

## 🔗 Nodes Used

n8n Form Trigger, Convert to File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
