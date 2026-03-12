# 📱 Automate Instagram carousel posts with Google Sheets, Drive & Cloudinary

> ⚡ **8,214 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who is this for?

This workflow is ideal for social media managers, content creators, marketers, and small businesses who want to automate Instagram Carousel posts using Google Sheets and Google Drive. It is also suitable for anyone looking to streamline repetitive Instagram publishing tasks with n8n, Cloudinary, and the Instagram Graph API.

## What problem is this workflow solving? / Use case

Managing and publishing Instagram Carousel posts manually can be time-consuming, especially when handling multiple accounts or campaigns. This workflow solves that by automatically fetching scheduled posts from Google Sheets, uploading images from Google Drive to Cloudinary, and publishing them to Instagram, saving time and reducing the risk of errors.

## What this workflow does

This n8n workflow checks a Google Sheet every 5 minutes for new Carousel posts marked as "ToDo." When found, it uploads images from a specified Google Drive folder to Cloudinary, prepares the media on Instagram using the Graph API, and publishes the Carousel post with the given caption.

## Setup

- Prepare a Google Sheet to track posts and image folder URLs.
 Example : https://docs.google.com/spreadsheets/d/1WEUHeQXFMYsWVAW3DykWwpANxxD3DxH-S6c0i06dW1g/edit?usp=sharing
- Upload post images to a dedicated Google Drive folder.
- Set up a Cloudinary account and gather API credentials.
- Obtain Instagram `access_token` and `ig_business_id` for API publishing.
- Configure the n8n workflow with required credentials and your custom intervals.

## How to customize this workflow to your needs

- Adjust the schedule trigger interval to fit your publishing frequency.
- Expand the Google Sheet with additional metadata as required.
- Modify the filter logic to support different content types or statuses.
- Add extra automation steps, such as sending notifications after publishing.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
