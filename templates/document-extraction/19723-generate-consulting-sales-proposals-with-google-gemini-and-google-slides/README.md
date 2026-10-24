# 🔬 Generate consulting sales proposals with Google Gemini and Google Slides

> ⚡ **18 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow turns an Upmeet meeting transcript or newly uploaded Google Drive audio/PDF discovery files into a validated consulting proposal by extracting BEBEDC fields with Google Gemini, selecting and pricing consultants and options from Google Sheets, and generating one Google Slides offer deck per recommended profile.

## How it works
1. Receives a POST webhook from Upmeet or detects a new audio recording/PDF discovery file added to specific Google Drive folders.
2. Downloads the new Drive file when applicable and uses Google Gemini to extract a structured BEBEDC-style client dossier as strict JSON.
3. Normalizes and validates the extracted JSON dossier and stops the flow when the dossier cannot be parsed.
4. Uses Google Gemini agents with Google Sheets tools to select matching consultant profiles and retrieve pricing from consultant, TJM (régie), forfait, and options tables.
5. Builds a three-tier proposal (économique/intermédiaire/premium), then runs a separate Google Gemini quality check that flags blocking inconsistencies and triggers a remediation step to replace rejected profiles.
6. For each resulting profile, copies a Google Slides template in Google Drive, replaces placeholders with client/profile/pricing content, inserts the consultant photo and pictograms, and loops to generate the next profile deck.

## Setup
1. Create Google OAuth credentials for Google Drive, Google Slides, and Google Sheets, and add a Google Gemini (Google PaLM) API credential.
2. Replace all REPLACE_WITH_* values with your Google Drive folder IDs (audio/PDF input and output), the Google Slides template ID, and the Google Sheets document IDs for profiles, TJM régie, forfait, and options.
3. Ensure your Google Slides template contains the exact placeholders used in the workflow (for example {{ENTREPRISE}}, {{PROFIL}}, {{TJM_HT}}, {{PHOTO}}, {{PICTO1}}–{{PICTO4}}, {{BESOINS_CLIENT}}, {{SOLUTIONS_PROPOSEES}}).
4. Copy the Upmeet webhook URL from the trigger and configure Upmeet to POST the meeting transcript payload to that endpoint (and adjust the mapping if your transcript field differs).

## Requirements
- Google Workspace (Drive, Sheets, Slides) + accès API Google Gemini

## Additional info
Each full run of the workflow triggers several calls to the Gemini API (dossier extraction, consultant selection, options pricing, proposal generation, quality control, and possibly remediation), so plan your API quota accordingly. The workflow stops cleanly and routes to a dedicated node if the client dossier is unreadable, if no profile matches the needs, or if quality control rejects a proposal and no valid replacement can be found.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Google Slides, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
