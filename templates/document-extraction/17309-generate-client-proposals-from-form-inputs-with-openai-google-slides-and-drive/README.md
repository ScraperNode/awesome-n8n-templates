# 🔬 Generate client proposals from form inputs with OpenAI, Google Slides, and Drive

> ⚡ **31 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects prospect and project details via an n8n form, uses OpenAI to generate proposal copy variables, copies a Google Slides proposal template from Google Drive, and replaces placeholders in the new deck to produce a personalized proposal saved in your Drive.

## How it works
1. Receives proposal inputs from an n8n form submission (contact details, problem, solution, scope, cost, and timeline).
2. Sends the form data to OpenAI to generate a single JSON object of proposal text variables (titles, summaries, scope items, and milestones).
3. Copies a predefined Google Slides proposal template file in Google Drive and names the copy using the generated proposal title.
4. Calculates a half-upfront cost value by dividing the submitted cost by two.
5. Uses the Google Slides API to replace placeholder tokens in the copied presentation with the generated copy, contact details, milestone labels, and the calculated cost split.

## Setup
1. Add an OpenAI credential and select the model used in the OpenAI step.
2. Add Google Drive OAuth2 credentials and set the template file ID to the Google Slides deck you want to copy.
3. Add Google Slides OAuth2 credentials with access to the same Drive and ensure your template contains the placeholders used for text replacement (for example, {{proposalTitle}}, {{cost}}, and {{firstName}}).
4. Publish the n8n form and share its URL with whoever needs to submit proposal details.

## 🔗 Nodes Used

Google Drive, Google Slides, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
