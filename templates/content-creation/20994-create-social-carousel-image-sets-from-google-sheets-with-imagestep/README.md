# 🎬 Create social carousel image sets from Google Sheets with ImageStep

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Every new row in a Google Sheet becomes four social carousel images with the same character on every card. The character is saved once as a subject on an ImageStep preset and sent with every generation; the four published image URLs are written back to the row.

## How it works
1. A Google Sheets trigger picks up each new row (`headline`, `subline`).
2. A Code node writes the row's scene and puts `{{subject.hero}}` where the character goes; ImageStep replaces it with the wording saved on the preset, so the fortieth row describes the character exactly as the first did.
3. The ImageStep node runs the preset `carousel-brand` with Count 4: one job, four cards, the preset version recorded on every one.
4. A Code node collects the four published image URLs, the job id and the status.
5. A Google Sheets node writes them back to the same row, matched on `row_number`.

## Setup
1. Install the ImageStep node (`n8n-nodes-imagestep`) and create an ImageStep credential with an API key from [imagestep.dev/keys](https://imagestep.dev/keys?utm_source=n8n-templates&utm_medium=template&utm_campaign=social-carousel).
2. Save the `carousel-brand` preset once from your reference images — the [recipe script](https://github.com/imagestep/imagestep-sdk/tree/main/recipes/social-carousel?utm_source=n8n-templates&utm_medium=template&utm_campaign=social-carousel) does it in one command.
3. Make a sheet with the columns `headline`, `subline`, `url1`–`url4`, `jobId` and `status`, connect your Google Sheets credentials, and select the sheet in both Google Sheets nodes.
4. Turn on **Dry Run** in the ImageStep node for the first row: it returns the exact price and spends nothing.

## Requirements
- An ImageStep account (the Free plan includes a welcome credit) and the ImageStep community node
- Google Sheets credentials

## Additional info
More pipelines, with the pictures a real run made: [imagestep.dev/docs/recipes](https://imagestep.dev/docs/recipes?utm_source=n8n-templates&utm_medium=template&utm_campaign=social-carousel#social-carousel).

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
