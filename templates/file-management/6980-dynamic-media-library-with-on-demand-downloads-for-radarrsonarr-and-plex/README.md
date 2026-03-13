# 📁 Dynamic media library with on-demand downloads for Radarr/Sonarr and Plex

> ⚡ **459 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

## n8n Placeholdarr for Plex (BETA)

 This flow creates **dummy files** for every item added in your *Arrs (Radarr/Sonarr) with the tag `unprocessed-dummy`.

It’s useful for maintaining a large Plex library **without needing the actual movies or shows to be present on your Debrid provider**.

---

### How It Works
- When a dummy file is played, the corresponding item is automatically **monitored in *Arr** and added to the download queue.
- This ensures that the content becomes available within **~3 minutes** for playback.
- If the content finishes downloading **while the dummy is still being played**, **Tautulli** triggers a webhook that **stops the stream** and notifies the user.

---

### Requirements

- Each n8n node must have the correct **URL** and **authorization headers** configured.
- The **SSH host** (used to create dummy files) must have **FFmpeg** installed.
- A **Trakt.TV API key** is required if you're using **Trakt collections**.

---

### Warning

&gt; ⚠️ This flow is currently in **BETA** and under active development.  
&gt; It is **not recommended** for users without technical experience.  
&gt; Keep an eye on the GitHub repository for updates.

https://github.com/arjanterheegde/n8n-workflows-for-plex

## 🔗 Nodes Used

HTTP Request, Webhook, SSH

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
