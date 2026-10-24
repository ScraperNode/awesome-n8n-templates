# 🎬 Notify and manage podcast edit status with WizCut and Slack

> ⚡ **4 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow listens for WizCut job status webhooks and routes updates to Slack, prompting a speaker-to-camera mapping review, automatically starting the final render when cuts are ready, and notifying your team with the finished episode download link when rendering completes.

## How it works
1. Receives a webhook event from WizCut whenever a job status changes.
2. Checks the incoming payload status and routes it to the matching handling path.
3. When the status is "mapping", posts a Slack message listing detected speakers and a link to review and map speakers to cameras in WizCut.
4. When the status is "ready", calls the WizCut API to start rendering the final episode output for the job.
5. When the status is "complete", posts a Slack message with the rendered episode download link.

## Setup
1. Add your WizCut API credentials in n8n (get an API key from wizcut.com).
2. Add your Slack credentials and set the target channel (for example, #podcast-production) in the two Slack message steps.
3. Copy the WizCut Trigger webhook URL from n8n and pass it as the callbackUrl when you create WizCut jobs so status updates are sent to this workflow.

## Requirements
- A WizCut account with an API key (from wizcut.com)
- A Slack workspace and a channel for notifications
- The @wizcut/n8n-nodes-wizcut community node installed in n8n

## Customization
- Swap Slack for Email, Discord, or Microsoft Teams
- After render completes, auto-upload the finished video to YouTube
- Remove the Start Render step to review cuts in the WizCut editor first

## Additional info
WizCut is an AI tool that automatically syncs, detects speakers, and cuts multicam video podcasts, turning raw camera angles into a finished edit. Learn more and get an API key at https://wizcut.com. Have a different workflow in mind (Google Drive triggers, batch processing, a custom pipeline)? Reach out to WizCut support. Feature requests are welcome 🙌

## 🔗 Nodes Used

Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
