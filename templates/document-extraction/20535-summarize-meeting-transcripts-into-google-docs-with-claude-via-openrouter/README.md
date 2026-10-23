# 🔬 Summarize meeting transcripts into Google Docs with Claude via OpenRouter

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects a plain-text meeting transcript via an n8n form, sends it to Claude through OpenRouter to generate a structured summary and action items, then prepends the formatted notes to the top of an existing Google Doc stored in Google Drive.

## How it works
1. Receives a form submission with a single .txt transcript upload plus optional meeting date and meeting title.
2. Validates the file type and size, cleans the transcript text, derives the meeting date and title, and determines whether speaker labels match the configured attendee names.
3. Sends the transcript and meeting context to Claude via the OpenRouter chat completions API and requests a strict JSON response containing agenda, topic bullets, and action items.
4. Validates Claude’s JSON output against word limits, agenda/topic consistency, action-item length, allowed owners, and valid due dates, and stops if any checks fail.
5. Exports the existing Google Doc from Google Drive as HTML, inserts the new meeting notes at the top (keeping older meetings below a divider), and uploads the updated HTML back to the same file.
6. Shows a completion page to the uploader with a link to the updated Google Doc and a count of action items (including unassigned owners).

## Setup
1. Create a Google Doc to store meeting notes, copy its document ID, and paste it into the notesDocId field in the configuration step.
2. Add a Google Drive OAuth2 credential and select it in the Google Drive export and upload steps.
3. Add an OpenRouter HTTP Header Auth credential with header name Authorization and value Bearer <your OpenRouter API key>, and select it in the OpenRouter request step.
4. Update the configuration values for organisation name, attendee names, meeting days, timezone, glossary terms, model slug, and transcript/summary limits to match your team.
5. Use the form’s Test URL while building, then activate the workflow and use the Production URL for day-to-day transcript uploads.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
