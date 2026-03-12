# 📱 Daily NASA APOD Images to Instagram with Telegram Notifications

> ⚡ **184 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow fetches NASA’s Astronomical Picture of the Day (APOD), prepares a caption combining the title and explanation, publishes the image to Instagram and sends you a Telegram notification with the result. 

It runs on a schedule so you can share inspiring space images without manual effort.

## Who is it for?
Designed for science communicators, educators, astronomy fans and social media managers who want to share the APOD each day without searching for content. It’s also helpful for anyone looking to automate daily posts while receiving clear success or failure notifications.

## How it works
1.	A Schedule Trigger fires every day at 18:00 (adjustable) to start the workflow.
2.	The Get APOD HTTP request node calls https://api.nasa.gov/planetary/apod using your NASA API key and retrieves the image URL, title and explanation.
3.	The Prepare Caption node builds a caption by concatenating the title and explanation, and extracts the image URL.
4.	Prepare IG Post node sends a POST request to https://graph.facebook.com/v23.0/{YOUR_APP_ID}/media with the image URL and caption to create a media container on Instagram.
5.	A Wait node pauses the workflow while Instagram processes the media.
6.	The Get Status for Publish request checks the status of the media; the If node proceeds only when the status_code equals FINISHED.
7.	When ready, the Publish Post node calls to https://graph.facebook.com/v23.0/{YOUR_APP_ID}/media_publish endpoint with the creation_id to publish the photo on Instagram.
8.	On success, a Telegram node sends a message such as “PUBLISH STATUS: FINISHED” to your chat; on failure, another Telegram node notifies you that the upload failed and the workflow stops with an error.
## Setup steps
1.	++Node Get APOD:++ Configure Query Auth with your own Nasa credential.
2.	++Node: Prepare IG Post:++ Create a Facebook app and generate an access token with instagram_basic and pages_manage_posts permissions; Configure the url with you ID from you Meta Graph {YOUR_APP_ID}. Configure Facebook Graph API Credential Type with your token, you can generate in your API Graph Explorer
3.	++Node Get Status For Publish:++ Configure your Facebook Graph API token like before.
4.	++Node Publish Post:++ Configure your Facebook Graph API token like before and configure the url with you ID from you Meta Graph {YOUR_APP_ID}.
5.	++Node Send Finish Message:++ Configure your token from Telegram API and your Telegram Chat ID {YOUR_CHAT_ID}.
6.	++Node Send Fail Message:++  Configure your token from Telegram API and your Telegram Chat ID {YOUR_CHAT_ID}.
6.	Test the workflow to ensure the image posts correctly and that the Telegram notifications reflect the status.
## Requirements
·	NASA APOD API key from api.nasa.gov.
·	Instagram account linked to a Facebook page and a valid Facebook Graph API token with the appropriate permissions.
·	Telegram bot token and chat ID.
## How to customise it
You can change the posting time or frequency, edit the caption template to include hashtags or links, or send success/failure notifications via email or Slack instead of Telegram. You might also save the images to cloud storage or cross‑post to other platforms, and adjust the error handling logic based on your needs.

## 🔗 Nodes Used

HTTP Request, Telegram, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
