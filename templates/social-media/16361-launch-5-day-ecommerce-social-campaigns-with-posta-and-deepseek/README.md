# 📱 Launch 5-day ecommerce social campaigns with Posta and DeepSeek

> ⚡ **44 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs manually, fetches the product data and image via HTTP, generates 5-day captions in DeepSeek, and schedules posts in Posta for the active social accounts, limiting it to one account per platform.

## How it works
1. Runs when you manually execute the workflow.
2. Fetches a product from a configured HTTP endpoint, downloads the product image, and uploads it to Posta to get a media ID.
3. Retrieves social accounts from Posta, keeps only active accounts, and de-duplicates them so there is one target account per platform.
4. Combines the product data with the selected platforms, then expands each platform into a 5-day campaign schedule.
5. Sends each day/platform entry to DeepSeek (via an LLM chain) to generate a caption with hashtags.
6. Parses the generated captions, assigns a scheduled UTC timestamp (09:00) for each campaign day, and creates scheduled posts in Posta with the caption and uploaded media.

## Setup
1. Add a Posta API credential and ensure your Posta workspace has connected social accounts for the platforms you want to post to.
2. Add a DeepSeek API credential and select the DeepSeek model in the LLM configuration.
3. Update the product source URL in the HTTP request to point to your own product API (and ensure it returns title, description, price, and image URL fields).
4. Adjust the campaign length, posting time, and caption prompt (including hashtags) to match your launch schedule and brand voice.

## Additional info
Video explanation: https://youtu.be/ORQZK_oApIQ

## 🔗 Nodes Used

HTTP Request, Filter, Basic LLM Chain, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
