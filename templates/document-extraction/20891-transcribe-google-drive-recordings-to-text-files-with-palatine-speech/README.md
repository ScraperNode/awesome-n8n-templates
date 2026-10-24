# 🔬 Transcribe Google Drive recordings to text files with Palatine Speech

> ⚡ **9 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Google Drive folder for new audio or video recordings, downloads each file, transcribes it with Palatine Speech, converts the transcript into a .txt file, and uploads the text file back to Google Drive.

## How it works
1. Triggers when a new file is created in a selected Google Drive folder.
2. Filters the event so only audio and video files (by MIME type or extension) continue.
3. Downloads the recording file from Google Drive.
4. Sends the audio/video binary to Palatine Speech to generate a text transcription.
5. Converts the transcription into a plain-text .txt file named after the original recording.
6. Uploads the transcript text file to the chosen Google Drive folder.

## Setup
1. Add Google Drive credentials in n8n and select the folder to watch in the Google Drive trigger.
2. Install the community node package `n8n-nodes-palatine-speech` and add your Palatine Speech credentials.
3. Choose a separate output folder for .txt transcripts in Save Transcript to Drive. Keep Only Audio or Video Files enabled so non-media files are skipped. Test a short recording, verify the transcript in the output folder, and activate only after the destination is correct.

## Requirements
- Google Drive OAuth2 and Palatine Speech API credentials; n8n-nodes-palatine-speech installed.

## Customization
- Add a summary step after transcription or send a link to the saved transcript to your team.

## Additional info
### Need help with Palatine Speech?

Check info here: [speech.palatine.ru](https://speech.palatine.ru/)

Documentation: [docs.speech.palatine.ru](https://docs.speech.palatine.ru/)

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
