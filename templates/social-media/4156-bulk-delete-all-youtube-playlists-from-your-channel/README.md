# 📱 Bulk delete all YouTube playlists from your channel

> ⚡ **860 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

### 🧑‍💼 Who is this for?

This workflow is for **any YouTube user** who wants to **bulk delete all playlists** from their own channel — whether to start fresh, clean up old content, or prepare the account for a new purpose.

It’s useful for:

* Creators reorganizing their channel
* People transferring content to another account
* Anyone who wants to avoid deleting playlists manually one by one

### 🧠 What problem is this workflow solving?

YouTube does not offer a built-in way to delete multiple playlists at once. If you have dozens or hundreds of playlists, removing them manually is extremely time-consuming.

This workflow **automates the entire deletion process** in seconds, saving you hours of repetitive effort.

### ⚙️ What this workflow does

* Connects to your YouTube account
* Fetches **all playlists** you’ve created (excluding system playlists)
* **Deletes them one by one** automatically

&gt; ⚠️ This action is **irreversible**. Once a playlist is deleted, it cannot be recovered. Use with caution.

### 🛠️ Setup

1. 🔐 **Create a YouTube OAuth2 credential** in n8n for your channel.
2. 🧭 Assign the credential to both YouTube nodes.
3. ✅ Click **“Test workflow”** to execute.

&gt; 🟨 By default, this workflow deletes everything. If you want to be more selective, see the customization tips below.

### 🧩 How to customize this workflow to your needs

* ✅ **Add a confirmation flag**
  Insert a `Set` node with a custom field like `confirm_delete = true`, and follow it with an `IF` node to prevent accidental execution.

* ✂️ **Delete only some playlists**
  Add a `Filter` node after fetching playlists — you can match by title, ID, or keyword (e.g. only delete playlists containing “old”).

* 🛑 **Add a pause before deletion**
  Insert a `Wait` or `NoOp` node to give you a moment to cancel before it runs.

* 🔁 **Adapt to scheduled cleanups**
  Use a `Cron` trigger if you want to periodically clear temporary playlists.

## 🔗 Nodes Used

YouTube

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
