# 📱 Generate branded social captions and images with OpenAI and PostFast

> ⚡ **1,143 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow runs three times a week to generate a branded social caption and AI image with OpenAI, then uploads the image via PostFast pre-signed URLs and schedules the post across selected connected social accounts.

## How it works
1. Runs on a schedule every Monday, Wednesday, and Friday at 7am.
2. Loads the brand name, image style, topic list, and a platform filter used for the current run.
3. Fetches connected social media accounts from PostFast and keeps only accounts that match the selected platforms.
4. Uses OpenAI (gpt-4o-mini) to generate a JSON response containing a caption and a matching image prompt.
5. Requests pre-signed PostFast upload URLs (one per target account) and uses OpenAI (gpt-image-1) to render a 1024×1024 PNG image.
6. Uploads the image to the provided S3 URLs and schedules a PostFast post per account with the caption and the corresponding uploaded media key for one hour later.

## Setup
1. Install and enable the verified PostFast community node (n8n-nodes-postfast) and add your PostFast API key credentials.
2. Add your OpenAI credentials for both the text generation (gpt-4o-mini) and image generation (gpt-image-1) steps.
3. Update the brand name, image style, topic list, and platform filter values in the brand configuration so they match your posting strategy.
4. Connect the desired social accounts in PostFast and ensure no more than eight connected accounts match the platform filter per run.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
