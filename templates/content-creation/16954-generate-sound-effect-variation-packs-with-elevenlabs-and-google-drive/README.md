# 🎬 Generate sound effect variation packs with ElevenLabs and Google Drive

> ⚡ **5 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a single sound-effect brief via an n8n form, generates multiple variation takes with the ElevenLabs sound-generation API, and uploads each MP3 into a timestamped Google Drive folder, then returns a results page with links and per-take status.

## How it works
1. Receives a sound-effect brief (plus optional take count, duration, and prompt influence) from an n8n form submission.
2. Validates and clamps the inputs, plans the requested number of takes with slightly varied prompt influence values, and generates a timestamped subfolder name.
3. Creates a new subfolder in Google Drive under the configured parent output folder for this run.
4. Builds one ElevenLabs sound-generation API request per take and calls ElevenLabs to generate an MP3 for each variation.
5. Uploads each generated MP3 to the run’s Google Drive subfolder and records whether each take succeeded or failed.
6. Displays an HTML completion page that links to the Google Drive folder and lists each take with a file link or error message.

## Setup
1. Create an ElevenLabs HTTP Header Auth credential that sends your API key as the `xi-api-key` header and select it in the ElevenLabs request step.
2. Add a Google Drive OAuth2 credential and select it on both Google Drive steps.
3. Set `PARENT_FOLDER_ID` in the planning code step to the Google Drive folder ID where you want variation packs created.

## Requirements
- ElevenLabs account and API key, stored as an HTTP Header Auth credential that sends xi-api-key
- Google account with a Google Drive OAuth2 credential (used on both Drive steps)
- A Google Drive parent folder to hold the generated packs, plus its folder ID
- An ElevenLabs plan with sound-generation access and enough credit quota for the number of takes

## Customization
- Set PARENT_FOLDER_ID in the planning code step to your target Drive folder
- Change the default take count, duration, and prompt influence, or the min/max clamps applied to form input
- Adjust how prompt influence is varied across takes (the spread between the first and last take)
- Edit the timestamped subfolder naming pattern
- Restyle the HTML completion page shown after the run

## Additional info
ElevenLabs bills sound generation by credits, so more takes and longer durations cost more per run. Each take is an independent API call, which means one failed take does not stop the others, and the results page shows the status of every take. Because the workflow is triggered by an n8n form, it works as an on-demand tool rather than a scheduled job.

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
