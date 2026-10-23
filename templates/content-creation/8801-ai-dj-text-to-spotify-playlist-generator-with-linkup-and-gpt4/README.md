# 🎬 AI DJ: Text-to-Spotify playlist generator with Linkup and GPT4

> ⚡ **1,029 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Describe a playlist idea and track count in a web form, and an AI agent researches matching songs on the live web via Linkup, curates a tracklist and title, builds the playlist in your Spotify account, then redirects you straight to it.

## How it works
1. The workflow starts with the On form submission trigger, a web form asking for a "Playlist request" (free text describing style, mood, artists) and a "Number of tracks" to include.
2. The Ideate playlist AI Agent node receives the form data and acts as a DJ: it plans a search query based on the request and track count.
3. The agent calls its connected tool, Web query to find tracks, an HTTP Request node that sends a POST request to the Linkup API (api.linkup.so/v1/search) with a structured output schema, returning candidate tracks with title, artist, and a short explanation for each.
4. Using the OpenAI Chat Model (gpt-4.1-mini) and the Structured Output Parser node, the agent selects the final tracks and creates a playlist name, returning a strict JSON object with "playlistName" and a "tracks" array.
5. The Create playlist node (Spotify node) creates a new public playlist in your Spotify account using the generated name.
6. The Get tracks array and Split out tracks nodes turn the agent's track list into individual items, one per track.
7. For each track, the Search the track node (Spotify node, search operation) looks up the track by "artist - title" and the Get track IDs node extracts its Spotify ID.
8. The Add track to playlist node adds each track to the newly created playlist one by one, then Get the final playlist retrieves the completed playlist.
9. The Opening the playlist node (form completion) redirects the user's browser directly to the playlist's Spotify URL, so it's ready to play immediately.

## Setup
1. Add your Spotify credentials to the three Spotify nodes: Create playlist, Search the track, Add track to playlist, and Get the final playlist. These require an authenticated Spotify account (via OAuth2) with permission to create and edit playlists.
2. Add your Linkup API credentials to the Web query to find tracks node (HTTP Request Tool). This node uses generic HTTP Bearer Auth authentication, so create a Bearer Auth credential with YOUR_LINKUP_API_KEY. Linkup's free plan covers this use case.
3. Add your OpenAI credentials to the OpenAI Chat Model node, which powers the Ideate playlist AI Agent (model: gpt-4.1-mini). Any OpenAI account with API access and available credit works.
4. No changes are required to the Structured Output Parser node; it already defines the expected JSON schema (playlistName and tracks array with artist/title/explanation) and should be left as-is.
5. Activate the workflow by toggling it to "Active" so the form trigger becomes reachable.
6. Open the form URL exposed by the On form submission trigger (path: spotify-playlist-generator), describe your desired playlist and the number of tracks, and submit to generate and open the playlist.

## Requirements
- A Spotify account with permission to create and edit playlists, connected via OAuth2 credentials in n8n.
- A Linkup account and API key (linkup.so) for the live web-search tool; the free plan is sufficient.
- An OpenAI account with API access for the gpt-4.1-mini chat model used by the AI agent.

## Customization
- Replace the On form submission trigger with another entry point, such as a Telegram message, a Discord bot command, or a generic webhook, to launch playlist generation from a different channel.
- Add a step to collect and merge multiple people's song ideas before the Ideate playlist agent runs, to build collaborative group playlists.
- In the Web query to find tracks node, change the "depth" body parameter from "deep" to "standard" for faster, cheaper (but less thorough) track research.

## Additional info
The Web query to find tracks node runs in "deep" search mode by default for higher-quality results; switch it to "standard" mode to trade some research depth for speed and lower cost. The workflow relies on Linkup's structured output feature to get consistently formatted track suggestions, so the "structuredOutputSchema" body parameter in that node should not be altered.

## 🔗 Nodes Used

Spotify, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
