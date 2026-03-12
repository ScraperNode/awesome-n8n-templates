# ⚡ Archive Spotify's discover weekly playlist

> ⚡ **2,056 views** · ⚡ [Personal Productivity](../)

## Description

![workflow-screenshot](fileId:264)

This workflow will archive your Spotify Discover Weekly playlist to an archive playlist named "Discover Weekly Archive" **which you must create yourself**. If you want to change the name of the archive playlist, you can edit `value2` in the "Find Archive Playlist" node.

It is configured to run at 8am on Mondays, a conservative value in case you forgot to set your `GENERIC_TIMEZONE` environment variable (see the docs [here](https://docs.n8n.io/reference/configuration.html#timezone)).

Special thanks to [erin2722](https://community.n8n.io/u/erin2722) for creating the Spotify node and [harshil1712](https://community.n8n.io/u/harshil1712) for [help with the workflow logic](https://community.n8n.io/t/if-block-matches-string-literal-but-not-string-expression/2484).

To use this workflow, you'll need to:

- Create then select your credentials in each Spotify node
- Create the archive playlist yourself

Optionally, you may choose to:
- Edit the archive playlist name in the "Find Archive Playlist" node
- Adjust the Cron node with an earlier time if you know `GENERIC_TIMEZONE` is set
- Setup an error workflow like [this one](https://n8n.io/workflows/696) to be notified if anything goes wrong

## 🔗 Nodes Used

Spotify, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
