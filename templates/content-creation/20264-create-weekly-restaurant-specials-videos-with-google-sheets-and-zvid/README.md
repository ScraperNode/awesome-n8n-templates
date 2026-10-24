# 🎬 Create weekly restaurant specials videos with Google Sheets and Zvid

> ⚡ **16 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs weekly and reads menu items from Google Sheets, then builds and validates a Zvid video project to render a branded vertical “weekly specials” reel, returning a shareable video URL and suggested caption.

## How it works
1. Runs every Monday at 9am (or on-demand with a manual test trigger).
2. Loads configuration values (restaurant details, branding, timing, media, and dry-run settings) and reads rows from a Google Sheets menu tab.
3. Filters the sheet to rows marked `ThisWeek = TRUE` and normalizes up to five dishes (name, description, price, and photo URL).
4. Builds a Zvid project with a sizzle hook, one scene per dish and a booking end card. Supported photo sources are bounded to 1920×1920 without distortion; supply custom image URLs already within those limits.
5. Sends the project to Zvid’s validate endpoint to check schema and estimate credits, and stops with a detailed error if validation fails.
6. dryRun=false is the default: submit a Zvid render job and poll until completion or timeout. Optional dryRun=true saves an editor draft only with Zvid Project → Create support; published npm v0.1.8 does not expose this operation. Keep false with that version.
7. Outputs the completed video URL and a suggested caption. The gated Watch video step downloads completed media for review in Binary → data → View. Review the reel and share it manually.

## Setup
1. Use self-hosted n8n. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before configuring credentials; a workspace owner/admin may need to install it. Create a Zvid API credential with a key from https://app.zvid.io/api-keys and Base URL https://api.zvid.io, then select it on every Zvid node.
2. Add a Google Sheets credential and select the target spreadsheet and sheet in the Google Sheets read step.
3. Ensure your sheet has headers `Dish`, `Description`, `Price`, `PhotoUrl`, and `ThisWeek`, and mark 1–5 rows with `ThisWeek = TRUE` each week.
4. Update restaurantName, handle, address, branding, timings, musicUrl and sizzleVideo in Config. dryRun defaults to false and spends Zvid credits after successful validation. Test manually, review the result and check the workflow timezone before activating the schedule. The editor-draft branch requires Project → Create support, unavailable in published v0.1.8.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
