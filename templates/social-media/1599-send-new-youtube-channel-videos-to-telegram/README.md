# 📱 Send new YouTube channel videos to Telegram

> ⚡ **10,600 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

![](https://hostux.pics/images/2022/04/17/image8c74c187fe43f155.png)
A simple node to send new YouTube videos from a channel to a Telegram chat (private, group or channel).
**CheckTime**: set how often videos should be fetched from YouTube. Default is 30 minutes.
**GetVideosYT**: this node will fetch the list of videos from a given channel. Here you need to specify on "Limit" the number of videos to fetch, and on "Channel ID" the ID of the desired channel (it should be the ending part of the URL). You need Google OAuth2 credentials to make it work. A guide is available [here](https://docs.n8n.io/integrations/credentials/google/). (If you use n8n's tunneling, you may need to adjust the OAuth callback URL on Google Cloud Platform)
**Set**: this node will set some variables to work easily with the next nodes. You shouldn't edit this.
**Function**: this node checks if the video was seen previously by the workflow, so that it won't be published a second time on Telegram. You shouldn't edit this.
**SendVideo**: this node sends the message to Telegram. You need to set your bot's credentials ([guide here](https://docs.n8n.io/integrations/credentials/telegram)), specify the Chat ID to send the message ([how to get](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.telegram/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.telegram#how-do-i-get-the-chat-id)) and personalize the Text of your message.

This workflow works correctly only when it's activated. If you manually execute the workflow, it will send every time the latest videos.

## 🔗 Nodes Used

Function, Interval, Telegram, YouTube

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
