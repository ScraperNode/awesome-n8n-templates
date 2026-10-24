# 🎬 Generate short AI videos from images with the img2.video API

> ⚡ **21 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs manually in n8n to turn an image URL into a short AI-generated video by submitting an img2.video generation job, polling for completion, and returning the final MP4 download URL.

## How it works
1. Starts when you manually execute the workflow in n8n.
2. Sets the image URL, model ID, and text prompt used for the video generation request.
3. Sends a POST request to the img2.video API to create an image-to-video generation job.
4. Waits 20 seconds and then polls the img2.video job status endpoint.
5. Repeats the wait-and-poll cycle until the job status is reported as succeeded.
6. Outputs the video download URL from img2.video as the workflow result.

## Setup
1. Create an img2.video account and generate an API token from your dashboard.
2. In n8n, add an HTTP Header Auth credential with header name `Authorization` and value `Bearer <your token>`.
3. Update the image URL, model ID (for example `seedance_mini`), and prompt values in the configuration step before running the workflow.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
