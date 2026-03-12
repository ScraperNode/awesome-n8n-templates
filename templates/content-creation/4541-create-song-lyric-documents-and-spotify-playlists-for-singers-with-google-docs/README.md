# 🎬 Create song lyric documents and Spotify playlists for singers with Google Docs

> ⚡ **591 views** · 🎬 [Content Creation & Video](../)

## Description

## Setlist Manager
This workflow takes a Google spreadsheet called 'Setlist_Manager' with 'Artist' and 'SongTitle' entries and get's Lyrics for each song and creates a playlist for that set of songs.

1. Create Spotify Playlist (naming it 'Setlist - [date of today]')
2. Create the Google doc that will store the lyrics found. (naming it 'Setlist - [date of today]')
3. Get the rows of songs from 'Setlist_Manager'.
4. Use AI to verify the Artist name and song title.
5. Get the lyrics to the song.
6. Append the Google Doc with the lyrics.
7. Search for the song in Spotify.
8. Add that song to the Spotify Playlist.
9. Go to band practice and be prepared! =)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Spotify, Google Docs, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
