# 🎬 Turn RSS feed content into AI avatar videos with HeyGen, Claude, and PostPulse

> ⚡ **228 views** · 🎬 [Content Creation & Video](../)

## Description

### **How it works**

This workflow takes content from an RSS feed, turns it into script with Anthropic's Claude, turns script into AI avatar videos using HeyGen's create video endpoint, retrieves the generated clip with the get video endpoint and schedules the video to social media with PostPulse.

**Setup Steps**

**RSS Feed Trigger:** Triggers a workflow whenever an RSS feed item is returned.
**Anthropic Claude**: Creates a script using the description from the RSS feed.
**HTTP Node:** 3rd party API call to HeyGen's create a video endpoint.
**Wait:** Pause workflow for 5 minutes whilst video from HeyGen is being generated.
**2nd HTTP Node:** 3rd party API call to HeyGen’s get video endpoint to retrieve the results of our generated video.
**3rd HTTP Node:** Download generated video.
**Upload Media:** Upload downloaded video to PostPulse for attachment ID.
**Schedule Video:** Schedule video in PostPulse.

## 🔗 Nodes Used

HTTP Request, RSS Feed Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
