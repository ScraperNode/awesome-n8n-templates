# 📱 Automated daily posting to 9 social platforms with Google Sheets, Drive and Blotato

> ⚡ **1,065 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Description
This automation publishes to 9 social platforms daily! Manage your content in a simple Google Sheet. When you set a post's status to "Ready to Post" in your Google Sheet, this workflow grabs your image/video from your Google Drive, posts your content to 9 social platforms, then updates the Google Sheet post status to "Posted".

## Overview
**1. Trigger: Check Every 3 Hours**
- Check Google Sheet for posts with Status ""Ready to Post""
- Return 1 post that is ready to go

**2. Upload Media to Blotato**
- Fetch image/video from Google Drive
- Upload image/video to Blotato

**3. Publish to Social Media via Blotato**
- Connect your Blotato account
- Choose your social accounts
- Either post immediately or schedule for later
- Includes support for images, videos, slideshows, carousels, and threads

## Setup
- Sign up for [Blotato](https://www.blotato.com)
- Generate Blotato API Key by going to Settings &gt; API &gt; Generate API Key (paid feature only)
- Ensure you have "Verified Community Nodes" enabled in your n8n Admin Panel. Install "Blotato" community node.
- Create credential for Blotato.
- Connect your Google Drive to n8n: https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service
- Copy this sample Google Sheet. Do NOT change the column names, unless you know what you're doing: https://docs.google.com/spreadsheets/d/1v5S7F9p2apfWRSEHvx8Q6ZX8e-d1lZ4FLlDFyc0-ZA4/edit
- Make your Google Drive folder containing images/videos PUBLIC (i.e. Anyone with the link)
- Complete the 3 setup steps shown in BROWN sticky notes in this template

## Troubleshooting Checklist
- your Google Drive is public
- column names in your Google Sheet match the original example
- file size &lt; 60MB; for large files, Google Drive does not work, use Amazon S3 instead

## 📄 Documentation
[Full Tutorial](https://help.blotato.com/api/templates/1-post-everywhere)

## Troubleshooting
Check your [Blotato API Dashboard](https://my.blotato.com/api-dashboard) to see every request, response, and error. Click on a request to see the details.

## Need Help?
In the Blotato web app, click the orange button on the bottom right corner. This opens the Support messenger where I help answer technical questions

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
