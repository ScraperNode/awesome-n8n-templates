# 🎬 Classify Plex music into smart playlists using Ollama and local LLMs

> ⚡ **6 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
A scheduled workflow that (1) fetches all tracks from a Plex Music library, (2) sends them in batches to a local Ollama LLM for playlist classification, (3) recreates and populates matching Plex playlists.

## How it works
1. Runs weekly on a schedule and queries the Plex server for library sections and the server machine identifier.
2. Selects the Plex music library section and paginates through the library to collect and normalize all track metadata.
3. Splits the full track list into batches, builds a classification prompt, and sends each batch to Ollama (/api/generate) to assign every track to one of the predefined playlist names.
4. Parses and validates the Ollama responses, accumulates an ID-to-playlist map across all batches, and groups track IDs by playlist.
5. For each playlist group, retrieves existing Plex playlists by name, deletes any matching playlist, and creates a new playlist seeded with the first 50 tracks.
6. Chunks the remaining track IDs into sets of 50 and appends them to the newly created Plex playlists via the Plex playlists items API.

## Setup
1. Provide a Plex HTTP header credential (including X-Plex-Token) and replace MY_HOST_OR_IP in all Plex HTTP Request nodes with your Plex server address (check the workflow instruction for more details).
2. Ensure your Plex server is reachable from n8n and that the target library contains a Music section (type "artist") with track items.
3. Run Ollama on a reachable host, confirm the model name used in the request (for example, gemma2:9b) is installed, and update the Ollama URL (MY_OLLAMA_HOST_OR_IP:11434) to match with your local IP.
4. Review or adjust the schedule timing and the predefined playlist names in the prompt to match the playlists you want created in Plex.

## Requirements
- This Flow has been tested successfully on a Ugreen NAS DXP4800PLUS Intel Pentium Gold 8505, 40GB DDR5 RAM with 16 GB allocated to Ollama (should be able to run on similar hardware with the same of higher specs).
- Ollama instance (self-hosted, Docker).
- n8n Orchestration (self-hosted, Docker).
- Plex Media Server (self-hosted, Docker).
- Plex Media Server Library size 16k+ tracks.
- Plex Media Server Target playlists Deep Focus, Morning Energy, Late Night Drive, Workout Power, Chill & Unwind, Nostalgia Trip, Discover Gems, Party Mode, Audiobooks & Podcasts.

## Customization
- Tested with several models such as qwen2.5:7b, Mistral:7b and gemma2:9b (check the "Build Prompt" node for details). Can be integrated with Cloud based LLMs but this n8n workflow version has not yet been tested with this specific configuration (only with OLLAMA and local LLMs).

## Additional info
While this template provides an out-of-the-box architecture for exhaustive, 100% coverage music classification using local LLMs (like gemma2:9b or mistral:7b), your final playlist accuracy depends heavily on two factors: ID3 Metadata Quality, Personalized Prompt Tuning.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
