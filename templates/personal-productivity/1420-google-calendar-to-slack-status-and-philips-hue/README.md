# ⚡ Google Calendar to Slack Status and Philips Hue

> ⚡ **1,330 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

I'm currently trialing a 4 day work week for all staff at my company, and one of the major impacts on productivity is interruptions.

As such, I opted to use N8N to create a workflow to monitor my Google Calendar and when an event starts, to update my Slack status with an emote and the title of the calendar task. Additionally I opted to include to change the colour of Philips Hue lamp located in my living room where my wife is currently working so she know's if she can interrupt me or not.

My calendar is built on the theory behind the [Diary Detox](https://diarydetox.com/) system and as such the Slack Status reflect the colours involved. This was achieved using the emote aliases for the relevant colour circles.

![4DW Colours.png](fileId:602)

The Philips Hue lamp status is changed via the local API with Home Assistant. This is a very similiar process to controlling it with something like the Streamdeck, but the workflow calls the Webhook instead of the Streamdeck. This process can be found in lots of Youtube videos such as [this](https://www.youtube.com/watch?v=QI328yziiZs).

This gives my wife a very quick and easy way to know if she can interrupt me in my office (when the lights are Green or Blue) or when I'm busy (Red).

![RedGreenLight.png](fileId:603)

**Please Note:** The above images are not intended to be an incentive to create your own Squid Games.

Additionally, when integrating Slack with N8N, there are 2 x APIs which can be used. Typically the Bot User OAuth Token is used, however in order for your Status to be updated, the **User OAuth Token** must be used with the *users.profile:read* and *users.profile:write* permissions enabled.

For clarity, I have removed the Webhooks from the Workflow as this would allow any person to control my lights. These can be inserted in the HTTP Request nodes. Each node responds to a different automation within the Home Assistant infrastructure.

*Acknowledgement: I would also credit Jon (Discord) aka 8668 (Workflows) for writing the Function node which turns the ColorID into a named variable.*

## 🔗 Nodes Used

Function, HTTP Request, Slack, Google Calendar, Google Calendar Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
