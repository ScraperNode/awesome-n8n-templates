# 🎬 Generate accessible alt text with AI from Google Sheets to WordPress

> ⚡ **645 views** · 🎬 [Content Creation & Video](../)

## Description

# AI-powered alt text generation from Google Sheets to WordPress media
## Who's it for
WordPress site owners, content managers, and accessibility advocates who need to efficiently add alt text descriptions to multiple images for better SEO and web accessibility compliance.
## What it does
This workflow automates the process of generating and updating alt text for WordPress media files using AI analysis. It reads image URLs from a Google Sheet, analyzes each image with Claude AI to generate accessibility-compliant descriptions, updates the sheet with the generated alt text, and automatically applies the descriptions to the corresponding WordPress media files. The workflow includes error handling to skip unsupported media formats and continue processing.
## How it works

Input: Provide a Google Sheets URL containing image URLs and WordPress media IDs
Authentication: Retrieves WordPress credentials from a separate sheet and generates Base64 authentication
Processing: Loops through each image URL in the sheet
AI Analysis: Claude AI analyzes each image and generates concise, accessible alt text (max 125 characters)
Error Handling: Automatically skips unsupported media formats and continues with the next item
Update Sheet: Writes the generated alt text back to the Google Sheet
WordPress Update: Updates the WordPress media library with the new alt text via REST API

## Requirements

Google Sheets with image URLs and WordPress media IDs
WordPress site with Application Passwords enabled
Claude AI (Anthropic) API credentials
WordPress admin credentials stored in Google Sheets
Export Media URLs WordPress plugin for generating the media list

## How to set up
### Step 1: Export your WordPress media URLs

Install the "Export Media URLs" plugin on your WordPress site
Go to the plugin settings and check both ID and URL columns for export (these are mandatory for the workflow)
Export your media list to get the required data

### Step 2: Configure WordPress Application Passwords

Go to WordPress Admin → Users → Your Profile
Scroll down to "Application Passwords" section
Enter application name (e.g., "n8n API")
Click "Add New Application Password"
Copy the generated password immediately (it won't be shown again)

### Step 3: Set up Google Sheets
[Duplicate this Google Sheets template](https://docs.google.com/spreadsheets/d/1BKGQRx_xDiuh3QD3ACOOTJomsWFuPBjCHYMQX8UzTBE/edit?usp=sharing\) to get the correct structure.
The template includes two sheets:
Sheet 1: "Export media" - Paste your exported media data with columns:

ID (WordPress media ID)
URL (image URL)
Alt text (will be populated by the workflow)

Sheet 2: "Infos client" - Add your WordPress credentials:

Admin Name: Your WordPress username
KEY: The application password you generated
Domaine: Your site URL without https:// (format: "example.com")

### Step 4: Configure API credentials

Add your Anthropic API credentials to the Claude node
Connect your Google Sheets account to the Google Sheets nodes

## How to customize

Language: The Claude prompt is in French - modify it in the "Analyze image" node for other languages
Alt text length: Adjust the 125-character limit in the Claude prompt
Batch processing: Change the batch size in the Split in Batches node
Error handling: The workflow automatically handles unsupported formats, but you can modify the error handling logic
Authentication: Customize for different WordPress authentication methods

This workflow is perfect for managing accessibility compliance across large WordPress media libraries while maintaining consistent, AI-generated descriptions. It's built to be resilient and will continue processing even when encountering unsupported media formats.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, Chat Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
