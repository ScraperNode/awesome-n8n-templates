# 🎬 Generate video ad scenes from URLs with Tavily, Google Gemini, OpenAI and JSON2Video

> ⚡ **15 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow accepts a website URL via webhook, crawls and structures the site content with Tavily and Google Gemini, generates three ad scenes and a voiceover with OpenAI, renders a captioned video via JSON2Video, and stores the final MP4 in Google Drive with a job-based status endpoint.

## How it works
1. Receives a POST webhook request containing a website/product URL and immediately returns a processing response with a generated jobId.
2. Crawls the provided URL with Tavily (including image links) and uses Google Gemini to extract structured brand/product text, links, and up to three image URLs.
3. Uses Google Gemini to write three image-generation prompts (brand, product, lifestyle), fetches the referenced website images, generates three scene images with OpenAI Images, and uploads them to a Google Drive folder.
4. Uses Google Gemini to draft a short 3-scene voiceover script and generates the narration audio with OpenAI Audio, then uploads the audio to Google Drive.
5. Assembles a 3-scene JSON2Video movie using the three Drive-hosted images and the generated audio track, then polls JSON2Video until the render succeeds.
6. Downloads the rendered video, sends it back to JSON2Video to burn in styled subtitles, polls again until complete, downloads the final MP4, and uploads it to Google Drive named with the jobId.
7. Receives status-check webhook requests with a jobId, searches Google Drive for the corresponding MP4, and returns either a processing JSON response or the video file as a binary response.

## Setup
1. Create and add credentials for Tavily API, Google Gemini (PaLM) API, OpenAI API, and Google Drive OAuth2.
2. Get a JSON2Video API key and replace all four YOUR_API_KEY_HERE header values across the JSON2Video HTTP requests.
3. Choose a Google Drive folder for output and update the folder ID used for uploading scenes and the final video (and set the missing Drive/folder values for the audio upload step).
4. Activate the workflow and copy the two webhook URLs, then configure your client to POST {"url":"https://..."} to start a job and POST {"jobId":"..."} to the ad-status endpoint to retrieve the result.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
