# ⚡ Add liked songs to a Spotify monthly playlist

> ⚡ **4,166 views** · ⚡ [Personal Productivity](../)

## Description

# 🎶 Add liked songs to a monthly playlist
&gt; This Workflow is a port of **Add saved songs to a monthly playlist** from IFTTT.

![image.png](fileId:798)

When you like a song, the workflow will save this song in a monthly playlist.

E.g.: It's June 2024, I liked a song. The workflow will save this song in a playlist called `June '24`. If this playlist does not exist, the workflow will create it for me.

## ⚙ How it works
Each 5 minutes, the workflow will start automatically. He will do 3 things :
1. Get the last 10 songs you saved in the "Liked song" playlist (by clicking on the heart in the app) and save them in a NocoDB table (of course, the workflow avoid to create duplicates).
2. Check if the monthly playlist is already created. Otherwise, the playlist is created. The created playlist is also saved in NocoDB to avoid any problems.
3. Check if the monthly playlist contains all the song liked this month by getting them from NocoDB. If they are not present, add them one by one in the playlist.

You may have a question regarding the need of NocoDB. Over the last few weeks/months, I've had duplication problems in my playlists and some playlists have been created twice because Spotify wasn't returning all the information but only partial information.
Having the database means I don't have to rely on Spotify's data but on my own, which is accurate and represents reality.

## 📝 Prerequisites
You need to have :
- Spotify API keys, which you can obtain by creating a Spotify application here: [https://developer.spotify.com/dashboard](https://developer.spotify.com/dashboard).
- Create a NocoDB API token

## 📚 Instructions
1. Follow the [instructions below](https://n8n.io/workflows/1074#instructions)
2. Create your Spotify API credential
3. Create your NocoDB credential
4. Populate all Spotify nodes with your credentials
5. Populate all Spotify nodes with your credentials
6. Enjoy !

If you need help, feel free to ping me on the N8N Discord server or send me a DM at "LucasAlt"

## Show your support

- Share your workflow on X and mention @LucasCtrlAlt
- Consider buying me a coffee 😉

[![yellowbutton.png](fileId:801)](https://www.buymeacoffee.com/lucasalt)

## 🔗 Nodes Used

Spotify, NocoDB, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
