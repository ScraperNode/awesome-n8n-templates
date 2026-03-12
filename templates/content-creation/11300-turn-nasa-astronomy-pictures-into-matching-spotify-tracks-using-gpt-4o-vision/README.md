# 🎬 Turn NASA astronomy pictures into matching Spotify tracks using GPT-4o Vision

> ⚡ **199 views** · 🎬 [Content Creation & Video](../)

## Description

Who is this for
- **Space Enthusiasts & Music Lovers**: Discover new music paired with stunning cosmic visuals.
- **Community Managers**: specific Slack channels with engaging, creative daily content.
- **n8n Learners**: Learn how to chain Image Analysis (Vision), Logic, and API integrations (Spotify/Slack).

## How it works
1. **Schedule**: The workflow runs every night at 10 PM.
2. **Mood Logic**: It checks the day of the week to adjust the energy level (e.g., higher energy for Friday nights, calmer vibes for Mondays).
3. **Visual Analysis**: **OpenAI (GPT-4o)** analyzes the NASA APOD image to determine its color palette, mood, and subject matter, converting these into musical parameters (Valence, Energy).
4. **Curation**: **Spotify** searches for a track that matches these specific parameters.
5. **Creative Writing**: OpenAI generates a short poem or caption linking the image to the song.
6. **Delivery**: The image, track link, and poem are posted to **Slack**, and the track is automatically saved to a designated **Spotify Playlist**.

## Requirements
- **NASA API Key** (Free)
- **OpenAI API Key** (Must have access to GPT-4o model)
- **Spotify Developer Credentials** (Client ID and Client Secret)
- **Slack** Workspace and Bot Token

## How to set up
1. Set up your credentials for NASA, OpenAI, Spotify, and Slack in n8n.
2. Create a specific Playlist in Spotify and copy its **Playlist ID**.
3. Copy the **Channel ID** from the Slack channel where you want to post.
4. Paste these IDs into the respective nodes (marked with `&lt;__PLACEHOLDER__&gt;`) or use the **Set Fields** node to manage them globally.

## 🔗 Nodes Used

Slack, Spotify, NASA, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
