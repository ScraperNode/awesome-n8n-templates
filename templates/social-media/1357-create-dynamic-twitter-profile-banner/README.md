# 📱 Create dynamic Twitter profile banner

> ⚡ **2,785 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow updates your Twitter profile banner when you have a new follower.

![workflow-screenshot](fileId:573)

To use this workflow:
1. Configure Header Auth in the **Fetch New Followers** to connect to your Twitter account.
2. Update the URL of the template image in the **Fetch BG** node.
3. Create and configure your Twitter OAuth 1.0 credentials in the last **HTTP Request** node.

You can configure the size, and position of the avatar images in the Edit Image nodes.

Check out this video to learn how to build it from scratch: [How to automatically update your Twitter Profile Banner](https://youtu.be/WgJgHWym7xQ)

## 🔗 Nodes Used

Edit Image, Function, HTTP Request, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
