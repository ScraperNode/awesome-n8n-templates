# 🎬 Create real estate listing flyers with Google Sheets, Drive and Canva

> ⚡ **86 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow watches a Google Sheet for listings marked ready, finds the matching photo in Google Drive, uploads it to Canva, and uses Canva Data Autofill to generate a listing flyer from a brand template, then writes the finished design URL back to the sheet.

## How it works
1. Triggers when the `ready` column changes in the configured Google Sheets worksheet.
2. Checks whether the updated row is marked `YES` in `ready` and ignores all other edits.
3. Searches a specified Google Drive folder for a photo file matching the listing ID.
4. If a photo is found, uploads the image to Canva as an asset and runs Canva Data Autofill to create a new design from your brand template using the row’s listing details.
5. Updates the same Google Sheets row with `ready` set to `DONE`, a `DESIGN_WITH_PHOTO` status, and the Canva design URL.
6. If no photo is found, updates the Google Sheets row with `ready` set to `DONE` and the status `NO_PHOTO`.

## Setup
1. Create a Canva Enterprise brand template with a dataset whose field names match the workflow (for example `property_photo`, `address`, `price`, `beds_baths`, `agent_name`, and `agent_phone`) and copy the brand template ID into the workflow.
2. Prepare a Google Sheet that includes at least `ready`, `listing_id`, `address`, `price`, `beds`, `baths`, `agent_name`, `agent_phone`, `design_url`, and `status`, and set the trigger to watch the correct spreadsheet and sheet.
3. Add Google Sheets and Google Drive credentials, and ensure the workflow user has access to the target spreadsheet and Drive folder.
4. Share the Google Drive photo folder so Canva can download images by URL, then paste the Drive folder ID into the workflow configuration.
5. Install and connect the verified community Canva node (`@canva/n8n-nodes-canva`) and add your Canva credentials.

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
