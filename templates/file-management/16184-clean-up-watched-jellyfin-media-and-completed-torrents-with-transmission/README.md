# 📁 Clean up watched Jellyfin media and completed torrents with Transmission

> ⚡ **26 views** · 📁 [File Management](../)

## Description

## Quick Overview
This scheduled workflow cleans up watched media in Jellyfin and removes completed torrents from Transmission by calling both APIs, deleting played items in Jellyfin, refreshing the Jellyfin library, and deleting torrents (including local data) once they reach the completed status.

## How it works
1. Runs daily on a schedule at the configured hour.
2. Sets the Jellyfin base URL, Jellyfin user ID, and Transmission base URL used for subsequent API calls.
3. Fetches played Movies and Episodes from Jellyfin for the configured user, deletes each returned item, and triggers a Jellyfin library refresh.
4. Calls the Transmission RPC endpoint to retrieve the required X-Transmission-Session-Id, then re-requests the torrent list using that session header.
5. Splits the Transmission response into individual torrents, filters to those with status 6 (completed), and removes each matching torrent while also deleting its local data.

## Setup
1. Add Jellyfin HTTP Header Auth credentials (for example, an API key header) and fill in the Jellyfin server URL and target Jellyfin user ID in the Variables step.
2. Add Transmission Bearer Auth credentials and set your Transmission base URL in the Variables step.
3. Confirm your Transmission instance allows RPC access at `/transmission/rpc` and that your Jellyfin server exposes the `/Users/{userId}/Items`, `/Items/{id}`, and `/Library/Refresh` endpoints for the provided credentials.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
