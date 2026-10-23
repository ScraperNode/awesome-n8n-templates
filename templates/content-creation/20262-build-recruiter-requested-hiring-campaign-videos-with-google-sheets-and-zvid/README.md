# 🎬 Build recruiter-requested hiring campaign videos with Google Sheets and Zvid

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs daily (or manually) to read job openings from Google Sheets, generate a branded vertical “we’re hiring” video project for each opening, render it with Zvid, and write the resulting VideoUrl back to the matching spreadsheet row.

## How it works
1. Runs every day at 9am (or starts manually) and loads your company branding and rendering settings.
2. Checks the optional soundtrack once per run. An unreachable or oversized track is omitted so the hiring video can render without music.
3. Reads job openings from Google Sheets and selects rows where Role and ApplyUrl are filled and VideoUrl is empty, capped by maxPerRun.
4. For each selected row, builds a Zvid project JSON (role, perks, salary, branding, and media) and validates it with Zvid to get warnings and a credit estimate.
5. The default dryRun=false branch renders. Optional dryRun=true saves an editor draft only with a Zvid node exposing Project → Create; published npm v0.1.8 does not expose this operation. Keep false with that version.
6. If dryRun is disabled, submits a Zvid render job, polls until it completes (or fails/timeouts), and gets the final video URL.
7. Updates the source Google Sheets row with the rendered VideoUrl and outputs a run summary (and optionally downloads the finished video file for review).

## Setup
1. Use self-hosted n8n. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before configuring credentials; a workspace owner/admin may need to install it. Create a Zvid API credential with a key from https://app.zvid.io/api-keys and Base URL https://api.zvid.io, then select it on every Zvid node.
2. Add a Google Sheets OAuth credential and set the spreadsheet document ID and sheet/tab name in both the read and update steps.
3. Create a sheet with headers Role, Team, Location, SalaryRange, Perk1, Perk2, Perk3, ApplyUrl, VideoUrl, and leave VideoUrl empty for rows that should be rendered.
4. Update companyName, companyLogoUrl, heroVideoUrl, optional musicUrl, colors, maxPerRun and polling settings in Company Config. dryRun defaults to false and spends Zvid credits after successful validation. The optional editor-draft branch requires Project → Create support, unavailable in published v0.1.8.
5. If using the schedule trigger, confirm the workflow timezone and the 9am schedule settings match your preferred run time.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
