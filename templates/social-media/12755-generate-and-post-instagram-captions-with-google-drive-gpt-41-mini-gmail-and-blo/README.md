# 📱 Generate and post Instagram captions with Google Drive, GPT-4.1-mini, Gmail and Blotato

> ⚡ **321 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Social Media Post & Caption Generator (Google Drive → AI Caption → Approval → Auto-Post)

Automatically turn your existing content library into approved, AI-written social media posts.
This workflow selects a random file from Google Drive, generates an Instagram caption using AI, sends it to you for approval, and—once approved—uploads and publishes the post via Blotato.

🎥 Watch Step-By-Step Guide:
https://youtu.be/9XU9ECcj9dg

## What this template does

On a scheduled basis (default: 10:00 AM), this workflow:
Searches a specified Google Drive folder for content files
Randomly selects one file to avoid repetitive posting
Uses AI to generate an Instagram-ready caption based on the file name
Sends the caption + file link to you via email for approval

If approved:
Downloads the file from Drive
Uploads the media to Blotato
Creates and publishes the social media post

If rejected:
Automatically loops back and selects a different random file

## Why it’s useful
Keeps your social media consistent with minimal manual effort
Adds a human-in-the-loop approval step for quality control
Eliminates the need to manually write captions or pick content
Ideal for creators, solo marketers, and small teams managing content at scale

Requirements
Before using this template, connect the following credentials in n8n:
Google Drive OAuth (searching & downloading files)
OpenAI API (caption generation)
Gmail OAuth (approval email workflow)
Blotato API (media upload & social posting)

All credentials must be added manually after importing the template.
No sensitive data is included in the template.
How it works (Node overview)
Schedule Trigger
Runs the workflow at a fixed time each day.
Google Drive – Search Files and Folders
Fetches all files from a specified Drive folder.
Randomizer (Code Node)
Selects a random file from the available list to ensure content variety.
Caption Generator AI
Uses an AI model to generate a descriptive Instagram caption based on the file name.
Gmail – Send for Approval and Wait
Emails the generated caption and file link to you and pauses execution until approval or rejection.
IF (Approved)
Yes: proceeds to download, upload, and publish
No: loops back to select another random file
Google Drive – Download File
Downloads the approved content file.
Blotato – Upload Media & Create Post
Uploads the media and publishes the post to the connected social account.

## Setup instructions

Import the template into your n8n workspace
Open the Google Drive nodes and connect your Drive OAuth credential
Replace the Folder ID with your own content folder
Connect your OpenAI credential in the Caption Generator node
Connect Gmail OAuth and set your approval email address
Connect your Blotato account and select the target social profile
Run the workflow once to test the approval loop
Activate the workflow to start automated posting

## Customization ideas

Adjust the AI system prompt to change tone (funny, educational, sales-focused)

Add hashtag rules (e.g. max 5 hashtags, niche-specific only)

Replace random selection with “least recently posted” logic using a Data Table

Duplicate the Blotato node to post to multiple platforms

Add a fallback step to auto-edit captions that exceed character limits

## Troubleshooting

No files found: confirm the Google Drive folder ID and permissions

Approval email not received: check Gmail OAuth scopes and spam folder

Caption quality not ideal: refine the AI system prompt

Upload fails: confirm Blotato account permissions and social account connection

## 🔗 Nodes Used

Google Drive, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
