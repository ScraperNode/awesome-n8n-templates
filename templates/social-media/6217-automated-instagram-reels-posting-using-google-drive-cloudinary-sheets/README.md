# 📱 Automated Instagram reels posting using Google Drive, Cloudinary & Sheets

> ⚡ **1,953 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who is this for?

This workflow is ideal for social media managers, content creators, marketing teams, and automation enthusiasts looking to streamline their Instagram Reels posting from Google Drive using n8n, Google Sheets, and Cloudinary.

## What problem is this workflow solving? / Use case

Manually downloading video files, uploading to third-party platforms, and posting to Instagram Reels is time-consuming. This workflow automates the whole process, ensuring timely, consistent content delivery and reducing manual errors.

## What this workflow does

- Automatically fetches scheduled Reel content from Google Sheets ([Sample link](https://docs.google.com/spreadsheets/d/1TjZL_eWbs01DdRYs8pJNDr5UMXzYe8u311o6rVUwjdg/edit?usp=sharing))
- Downloads video files from Google Drive folders
- Uploads videos to Cloudinary for hosting
- Posts the videos as Instagram Reels with custom captions
- Updates the Google Sheet to mark content as posted

## Setup

- Prepare a Google Drive folder set to public sharing for your videos
- Create a Cloudinary account and configure upload presets
- Connect an Instagram Business account (linked to a Facebook Page)
- Set up a Google Sheet with video post details: `Video Name`, `Type`, `Caption`, `Status`
- Configure the workflow schedule in n8n

## How to customize this workflow to your needs

- Adjust the schedule for desired posting frequency
- Add fields to your sheet for custom tags or content variations
- Change the Cloudinary or Instagram settings for different media types
- Integrate additional steps for error handling or approval workflows

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
