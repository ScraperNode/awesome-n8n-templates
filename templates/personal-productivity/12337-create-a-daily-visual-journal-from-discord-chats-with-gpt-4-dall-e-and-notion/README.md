# ⚡ Create a daily visual journal from Discord chats with GPT-4, DALL-E and Notion

> ⚡ **36 views** · ⚡ [Personal Productivity](../)

## Description

I wanted a journal but never had the discipline to write one. Most of my day happens in Discord anyway, so I built this to do it for me.

Every night, it reads my Discord channel, asks GPT-4 to write a short reflection, generates an image that captures the vibe of the day, and saves everything to Notion. I wake up with a diary entry I didn't have to write.

**How it works**
1. Runs daily at whatever time you set
2. Grabs messages from a Discord channel (last 100)
3. Filters to today's messages only
4. GPT-4 writes a title, summary, mood, and tags
5. DALL-E generates an image based on the day's themes
6. Uploads image to Cloudinary (Notion needs a public URL)
7. Creates a Notion page with everything formatted nicely

**Setup**
- Discord Bot credentials (read message history permission)
- OpenAI API key
- Free Cloudinary account for image hosting
- Notion integration connected to your database

**Notion database properties needed**
- Title (title)
- Date (date)
- Summary (text)
- Mood (select): 😊 Great, 😌 Good, 😐 Neutral, 😔 Low, 🔥 Productive
- Message Count (number)

Takes about 15 minutes to set up. I use Gallery view in Notion with the AI image as cover - looks pretty cool after a few weeks.

## 🔗 Nodes Used

HTTP Request, Discord, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
