# 📋 Create Linear tickets from Notion content

> ⚡ **2,089 views** · 📋 [Project Management](../)

## Description

This workflow allows you to define multiple tickets/issues in a Notion page, then easily import them into Linear. 

### Why is it useful?

We use this workflow internally at n8n for collaboration between Product and Engineering teams:

- Engineering needs all work to be in our ticketing system (Linear) in order to keep track of it
- Product prefers to review features in Notion. This is because it and can be used to dump all your thoughts and organise them into themes afterwards, plus it better supports rich content like videos

### Features

- Supports rich formatting (bullets, images, videos, links, etc.)
- Keeps links between the Notion and Linear version, in case you need to refer back
- Allows you to assign each issue to a team member in the Notion definition
- Avoids importing the same issues twice if you run it again on the same page (meaning you can issues incrementally)

You can see an example of the required format of the Notion page [here](https://www.notion.so/Template-for-importing-Notion-blocks-as-issues-in-Linear-8848dd09892341969faedd1313eea586?pvs=21).

## 🔗 Nodes Used

HTTP Request, GraphQL, Notion, Linear, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
