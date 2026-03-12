# 🎬 AI DJ: Text-to-Spotify playlist generator with Linkup and GPT4

> ⚡ **859 views** · 🎬 [Content Creation & Video](../)

## Description

Stop manually searching for songs and let an AI DJ do the work for you. This template provides a complete, end-to-end system that transforms any text prompt into a ready-to-play Spotify playlist. It combines the creative understanding of a powerful AI Agent with the real-time web knowledge of **Linkup** to curate perfect, up-to-the-minute playlists for any occasion.

The experience is seamless: simply describe the vibe you're looking for in a web form, and the workflow will automatically create the playlist in your Spotify account and redirect you straight to it. Whether you need "upbeat funk for a sunny afternoon" or "moody electronic tracks for late-night coding," your personal AI DJ is ready to deliver.

## **Who is this for?**

* **Music lovers:** Create hyper-specific playlists for any mood, activity, or niche genre without the hassle of manual searching.
* **DJs & event planners:** Quickly generate themed playlists for parties, weddings, or corporate events based on a simple brief.
* **Content creators:** Easily create companion playlists for your podcasts, videos, or articles to share with your audience.
* **n8n developers:** A powerful example of how to build an AI agent that uses an external web-search tool to accomplish a creative task.


## **What problem does this solve?**

* **Creates up-to-date playlists:** A standard AI doesn't know about music released yesterday. By using Linkup's live web search, this workflow can find and include the very latest tracks.
* **Automates the entire creation process:** It handles everything from understanding a vague prompt (like "songs that feel like a summer road trip") to creating a fully populated Spotify playlist.
* **Saves time and effort:** It completely eliminates the tedious task of searching for individual tracks, checking for relevance, and manually adding them to a playlist one by one.
* **Provides a seamless user experience:** The workflow begins with a simple form and ends by automatically opening the finished playlist in your browser. There are no intermediate steps for you to manage.

## **How it works**

1.  **Submit your playlist idea:** You describe the playlist you want and the desired number of tracks in a simple, Spotify-themed web form.
2.  **The AI DJ plans the search:** An **AI Agent** (acting as your personal DJ) analyzes your request. It then intelligently formulates a specific query to find the best music.
3.  **Web research with Linkup:** The agent uses its **Linkup** web-search tool to find artists and tracks from across the web that perfectly match your request, returning a list of high-quality suggestions.
4.  **The AI DJ curates the list:** The agent reviews the search results and finalizes the tracklist and a creative name for your playlist.
5.  **Build the playlist in Spotify:** The workflow takes the agent's final list, creates a new public playlist in your Spotify account, then searches for each individual track to get its ID and adds them all.
6.  **Instant redirection:** As soon as the last track is added, the workflow automatically redirects your browser to the newly created playlist on Spotify, ready to be played.

## **Setup**

1.  **Connect your accounts:** You will need to add your credentials for:
    * **Spotify:** In the **Spotify** nodes.
    * **Linkup:** In the **Web query to find tracks** (HTTP Request Tool) node. Linkup's free plan is very generous!
    * **Your AI provider** (e.g., OpenAI): In the **OpenAI Chat Model** node.
2.  **Activate the workflow:** Toggle the workflow to "Active."
3.  **Use the form:** Open the URL from the **On form submission** trigger and start creating playlists!


## **Taking it further**

* **Change the trigger:** Instead of a form, trigger the playlist creation from a **Telegram** message, a **Discord** bot command, or even a webhook from another application.
* **Create collaborative playlists:** Set up a workflow where multiple people can submit song ideas. You could then have a final AI step consolidate all the requests into a single, cohesive prompt to generate the ultimate group playlist.
* **Optimize for speed:** The **Web query to find tracks** node is set to `deep` search mode for the highest quality results. You can change this to `standard` mode for faster and cheaper (but potentially less thorough) playlist creation.

## 🔗 Nodes Used

Spotify, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
