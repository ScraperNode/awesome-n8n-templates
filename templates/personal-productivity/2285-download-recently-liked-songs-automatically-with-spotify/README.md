# ⚡ Download recently liked songs automatically with Spotify

> ⚡ **3,408 views** · ⚡ [Personal Productivity](../)

## Description

## Purpose
This workflow enables you to listen to your recent favorites in very hight quality offline without sacrificing all of your storage.

## How it works
This workflow automatically creates a playlist in Spotify named "Downloads" which periodically gets updated so it always contains only a defined amount of the latest liked songs.

This enables only the Downloads playlist to set for automatic downloading and thus free up space on the device.

## Setup
- The workflow is ready to go. Just select your Spotify credentials and activate the workflow.
- In Spotify just enable automatic downloads on the automatically created Downloads folder after the first workflow run.

## Current limitations
This setup currently supports a maximum of 50 songs in the Downloads Playlist. This is due to the paylod limits defined by Spotify encountered in the *Get liked songs* node. Implementing batching would solve the issue.

## 🔗 Nodes Used

Spotify, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
