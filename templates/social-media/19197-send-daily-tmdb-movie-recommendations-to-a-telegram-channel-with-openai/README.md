# 📱 Send daily TMDB movie recommendations to a Telegram channel with OpenAI

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow finds a high-rated movie from TMDB, selects one at random, uses OpenAI to generate a short recommendation, and automatically posts the movie poster with the generated caption to a Telegram channel.

## How it works
1. Runs on a schedule at specified times during the day.
2. Calls the TMDB Discover API with predefined filters (rating, release date, votes, language, genre exclusions) and a randomized page to fetch a list of candidate movies.
3. Splits the TMDB results into individual items and randomly selects one movie.
4. Sends the selected movie’s details to OpenAI to generate a concise English Telegram recommendation caption.
5. Builds a Telegram post payload by combining the generated caption with the movie’s TMDB poster image URL.
6. Sends the poster image and caption to the configured Telegram channel.

## Setup
1. Add your TMDB API key in the TMDB Discover request and adjust the query filters if needed.
2. Connect an OpenAI credential for the OpenAI node and confirm the selected model is available in your account.
3. Connect a Telegram Bot credential, replace @your_channel_username with your channel username, and add the bot as an administrator of the channel.

## Requirements
- TMDB API key
- OpenAI API credential
- Telegram Bot credential
- Telegram channel where the bot has administrator access

## Customization
- Change minimum TMDB rating and vote count
- Change movie release date filters
- Change excluded genres or countries
- Change the OpenAI prompt and output language
- Change the posting schedule
- Change the Telegram channel

## Additional info
The workflow uses TMDB movie data and poster images. Replace all placeholder values with your own credentials and channel username before running it. Test the workflow in a private or test Telegram channel first.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
