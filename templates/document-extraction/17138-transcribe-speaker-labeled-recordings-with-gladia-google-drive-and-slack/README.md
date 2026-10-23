# 🔬 Transcribe speaker-labeled recordings with Gladia, Google Drive, and Slack

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a public media URL via an n8n form, sends it to Gladia for diarized transcription, formats the result as a speaker-labeled Markdown note, saves it to Google Drive, and posts the Drive link (or any failure reason) to a Slack channel.

## How it works
1. Receives a form submission containing a public audio/video URL and an optional hint for the number of speakers.
2. Starts an asynchronous Gladia pre-recorded transcription job with speaker diarization enabled.
3. Waits and repeatedly polls Gladia for the job status until it is done, errors, or reaches the configured maximum number of attempts.
4. When complete, converts Gladia’s diarized utterances into a readable Markdown transcript grouped by speaker and timestamped.
5. Uploads the transcript file to Google Drive and posts a Slack message with the share link.
6. If the Gladia requests fail or the job times out/errors, posts a Slack message describing the failure.

## Setup
1. Create an HTTP Header Auth credential for Gladia (header `x-gladia-key`) and select it on both Gladia HTTP Request steps.
2. Connect a Google Drive OAuth2 account and choose the target Drive/folder where transcripts are uploaded.
3. Connect a Slack account and select the channel to receive “transcript ready” and failure notifications.
4. Share the form URL with users and ensure submitted media links are publicly accessible by Gladia.

## Requirements
- Gladia account with an API key (the free tier is enough to start) from gladia.io
- Google account with Google Drive access, connected over OAuth2
- Slack workspace where the connected account can post messages
- Recordings hosted at a publicly reachable URL, since Gladia fetches the audio or video by link
- Works on n8n Cloud or self-hosted, since it uses only core nodes

## Customization
- Tune the polling in Configure Polling: change wait_seconds and max_attempts to adjust the check interval and timeout (default is 10 seconds times 60 attempts, about 10 minutes)
- Enter a speaker count on the form when you know it to sharpen diarization, or leave it blank to auto-detect
- Reshape the output in Format Speaker Transcript: change the speaker labels, the [mm:ss] timestamp style, the file name, or the header fields
- Change destinations: pick a different Slack channel, or swap Slack and Google Drive for another notifier or storage node
- Extend the Gladia request in Start Gladia Transcription with options like language hints, translation, or summarization
- Swap the Form trigger for a webhook, a schedule, or a Drive-folder watcher to transcribe recordings automatically

## Additional info
The workflow is built entirely on core n8n nodes, so it runs the same on n8n Cloud and self-hosted with no community nodes to install. Gladia's pre-recorded API is asynchronous, so rather than assume the transcript is ready, the workflow starts the job and then polls it on a Wait plus HTTP Request loop until Gladia returns done or the attempt limit is reached. Every Gladia call and the Drive upload use continue-on-error, so a transient API failure or a timeout is routed to Slack with a clear reason instead of failing the run silently.

The readable output is the point. Gladia numbers speakers from zero, so the Format Speaker Transcript node relabels them to Speaker 1, Speaker 2, and so on, groups consecutive lines from the same speaker into one block, and stamps each block with its start time. If a recording comes back without diarized utterances, it falls back to the plain full transcript so nothing is lost. All sample values in the template are fictional and no credentials, IDs, or real endpoints are included, so you only need to add your own Gladia, Google Drive, and Slack connections to run it.

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
