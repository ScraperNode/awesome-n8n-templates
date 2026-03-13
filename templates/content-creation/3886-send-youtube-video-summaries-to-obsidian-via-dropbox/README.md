# 🎬 Send YouTube video summaries to Obsidian via Dropbox

> ⚡ **994 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

[![Click Here!](https://i.imgur.com/KDE34Ay.png)](https://www.youtube.com/watch?v=B6kP8vdGP1M)

---

### How it works

This workflow runs on a schedule you set (default is every 10 minutes). It fetches all videos from a specific YouTube playlist, retrieves details and transcripts for each video using RapidAPI, cleans the transcript text, and then uses OpenAI (GPT models) to generate detailed notes, YAML frontmatter, and internal links formatted for Obsidian. Finally, it assembles everything into a Markdown file, saves it to your designated Dropbox folder, and removes the processed video from the source YouTube playlist.

### Set up steps

Getting started should take about **5 minutes**. A **Quick Start Guide (PDF)** is included in the download with step-by-step instructions!

Here's a quick overview of the setup:

1.  **Connect Credentials:** Add your n8n credentials for YouTube (OAuth2), OpenAI, and Dropbox (OAuth2).
2.  **Add API Keys:**
    *   **RapidAPI:** You'll need a key for the `yt-api` service. The template uses `={{ $env["RAPIDAPI_API_KEY"] }}`. You can either set up an environment variable in n8n named `RAPIDAPI_API_KEY` *or* simply delete that expression in the "Get Video Details" and "Get Video Transcript" nodes and paste your API key directly into the `x-rapidapi-key` field.
3.  **Configure Nodes:**
    *   Update the **Playlist ID** in the "Get Playlist Videos" node to your target YouTube playlist.
    *   (Optional) Adjust the **Save Path** in the "Save Note to Dropbox" node if you want to save files to a different folder.
4.  **Activate:** Turn on the workflow.

&gt; **Bonus Trick**: Symlink the Dropbox folder (using the Dropbox desktop app) to a folder in your Obsidian vault for beautifully organized YouTube summary notes!

## 🔗 Nodes Used

Dropbox, HTTP Request, YouTube, Schedule Trigger, Convert to File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
