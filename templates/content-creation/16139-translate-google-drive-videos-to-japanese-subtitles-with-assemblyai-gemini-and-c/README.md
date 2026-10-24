# 🎬 Translate Google Drive videos to Japanese subtitles with AssemblyAI, Gemini and Creatomate

> ⚡ **33 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow watches a Google Sheets spreadsheet for new Google Drive video links, sends the video to AssemblyAI for English transcription with Japanese translation, refines the Japanese text with Google Gemini, renders burned-in subtitles via Creatomate, and posts the final video URL to Slack.

## How it works
1. Triggers when a new row is added to a specified Google Sheets worksheet.
2. Extracts the latest Google Drive sharing link from the sheet and converts it into a direct download URL.
3. Fetches the video’s metadata from Google Drive to inform subtitle layout decisions.
4. Submits the video URL to AssemblyAI for transcription and Japanese translation, then waits and polls until the transcript status is completed.
5. Sends the Japanese translation to Google Gemini to add natural punctuation and improve subtitle readability without changing meaning.
6. Builds a subtitle timeline and a Creatomate render payload from the polished Japanese text and AssemblyAI word timings, then starts a Creatomate render.
7. Waits and polls Creatomate until rendering succeeds, then posts the rendered video link to a Slack channel.

## Setup
1. Connect credentials for Google Sheets, Google Drive, AssemblyAI (HTTP Header Auth), Google Gemini (PaLM/Gemini API), Creatomate (HTTP Header Auth), and Slack (OAuth2).
2. Update the Google Sheets document and sheet selection to the spreadsheet that receives new Google Drive video URLs.
3. Ensure the Google Drive videos are shared with “Anyone with the link” so AssemblyAI and Creatomate can access the download URL.
4. Adjust the AssemblyAI source language (`language_code`) and target translation languages (`target_languages`) in the transcript request if you need languages other than English → Japanese.
5. Set the destination Slack channel in the Slack message step to receive the final rendered video URL.

## 🔗 Nodes Used

HTTP Request, Slack, Google Sheets Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
