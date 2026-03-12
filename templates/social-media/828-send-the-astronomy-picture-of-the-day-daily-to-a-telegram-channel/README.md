# 📱 Send the astronomy picture of the day daily to a Telegram channel

> ⚡ **3,426 views** · 📱 [Social Media & Email Marketing](../)

## Description

![workflow-screenshot](fileId:340)

This is a workflow that sends daily astronomy picture of the day using the NASA node to a channel on Telegram.

**Cron node:** The Cron node triggers the workflow daily at 8 PM. You can update the time in the Cron node to trigger the workflow at your desired time.

**NASA node:** After the Cron node triggers the workflow, the NASA node fetches the Astronomy Picture of the Day from the NASA API. You can also get the binary file of the image. Toggle ***Download Image*** to `true` to get the file.

**Telegram node:** The Telegram node sends the image to a Telegram channel.

If you want to share the image on another platform, you can replace the Telegram node with the node of that platform. For example, if you want to post the image on a channel on Slack, replace the Telegram node with the Slack node.

You can learn to build this workflow on the documentation page of the [NASA](https://docs.n8n.io/nodes/n8n-nodes-base.nasa/#nasa) node.

## 🔗 Nodes Used

Cron, Start, Telegram, NASA

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
