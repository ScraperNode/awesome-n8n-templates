# ⚡ Extract vocabulary flashcards from Spotify listening with Gemini and Google Sheets

> ⚡ **53 views** · ⚡ [Personal Productivity](../)

## Description

## What this workflow does

This workflow turns your Spotify listening history into vocabulary flashcards for language learning.

When you listen to music in your target language, you hear words hundreds of times without trying, they're already in your subconscious. This workflow extracts those words and turns them into flashcards, so you're connecting meaning to sounds you already know.

Every Sunday, the workflow:
1. Fetches your recently played songs from Spotify
2. Finds lyrics via lrclib.net
3. Extracts 40-60 useful words (B1-B2 level) using Google Gemini
4. Deduplicates against all previously learned words
5. Writes new vocabulary to Google Sheets (master + weekly tab)

Review with the free **Flashcard Lab** app (iOS + Android) which reads directly from Google Sheets with spaced repetition. Works for **any language**, just change the AI prompt.

## Setup

**Setup time: ~15 minutes**

1. **Google Cloud Console:** Create project, enable Sheets API + Drive API, create OAuth2 credentials, set app to **"In Production"** (tokens expire after 7 days in Testing mode)
2. **Gemini API:** Get a free key from [Google AI Studio](https://aistudio.google.com/apikey)
3. **Spotify Developer Dashboard:** Create app, note Client ID + Secret
4. **Google Sheet:** Create a sheet with tab "All Vocabularies" and headers `Word` + `Translation`
5. **Import workflow**, connect credentials, select your Google Sheet in all Sheets nodes
6. Click **"Execute Workflow"** to test
7. Enable the schedule trigger for weekly runs

## Changing the language

Edit the prompt in **"Prepare all Lyrics into Pairs"** — that's the only place you need to change. All other nodes use generic `Word` and `Translation` columns.

&gt; 🎧 **Tip:** Listen to music in the language you're learning. The whole point is that your brain already absorbed these words passively — the flashcards connect meaning to sounds you already know.

## Full documentation

👉 [GitHub Repository](https://github.com/Welat-E/-Learn-Any-Language-from-Your-Spotify-History)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Spotify, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
