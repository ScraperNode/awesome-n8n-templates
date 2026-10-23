# ⚒️ Modify Liveblocks storage with JSON Patch and Anthropic Claude

> ⚡ **26 views** · ⚒️ [Engineering](../)

## Description

## Modify Liveblocks Storage with JSON Patch

This example uses [Liveblocks Storage](https://liveblocks.io/docs/ready-made-features/multiplayer/sync-engine/liveblocks-storage), a sync engine created by [Liveblocks](https://liveblocks.io) that allows you to create collaborative applications like Figma, Pitch, and Spline. When we fetch the Storage value for a [room](https://liveblocks.io/docs/concepts#Rooms), we're fetching the state of the multiplayer document which users are collaborating on.   

In this workflow example, our document holds a list of shapes, like a drawing tool. Here's a rectangle, for example:

```
{
  "id": "rect-1",
  "type": "rectangle",
  "x": 100,
  "y": 150,
  "width": 200,
  "height": 100,
  "color": "#ff0000"
}
```

Picture this hooked up to a design tool like Figma, with the user asking AI to edit their document.

In these nodes, to generates a [JSON Patch](https://liveblocks.io/docs/guides/modifying-storage-via-rest-api-with-json-patch) operation from the user's request ("Add a blue circle, and make the square orange") and applies it to the collaborative document. 

As soon as the JSON Patch operation has run, each user's design tool in their web browser will update with the changes in real time.

Additionally, we're setting presence in the room, which means that the AI will appear in the document's live avatar stacks while it works, before disappearing shortly after.

## 🔗 Nodes Used

AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
