# 📱 Import CSV or Excel campaigns and schedule social posts with PinFlow

> ⚡ **308 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow collects a CSV/XLSX/XLS campaign file via an n8n form, validates each row, then uploads images to PinFlow and schedules posts for Pinterest, Instagram, and Facebook at a defined interval (default 5 hours).

## How it works
1. Receives a file upload through an authenticated n8n form along with the file format, posting interval in hours, and an optional first publish timestamp.
2. Parses the uploaded file as CSV, XLSX, or XLS based on the selected format and converts each row into an item.
3. Validates required fields (HTTPS image URL and either title or description) and assigns a scheduled time per row using either `scheduled_at` or an interval-based schedule starting from the provided first publish time.
4. Processes the campaign one row at a time, downloading the row’s image from the provided URL.
5. Uploads the downloaded image to PinFlow media storage and uses the returned media URL.
6. Schedules a Pinterest pin, then an Instagram post, then a Facebook post in PinFlow using the row’s text, link, and computed scheduled time.

## Setup
1. Create and assign a PinFlow credential for the PinFlow nodes.
2. Fill in your PinFlow targets: Pinterest profile ID and board ID, Instagram profile ID, and Facebook page ID.
3. Prepare a spreadsheet with required columns (`image_url` and at least one of `title` or `description`) and optional columns (`destination_url`, `instagram_caption`, `facebook_message`, `scheduled_at`).
4. Enable basic authentication on the form and share the form URL with anyone who should upload campaign files.

## Requirements
- Pinflow node

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
