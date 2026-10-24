# 🎬 Convert edited Notion pages into explainer videos with Ozor AI

> ⚡ **20 views** · 🎬 [Content Creation & Video](../)

## Description

## Turn Any Notion Document into an Explainer Video — Automatically

Got a Notion doc? Turn it into a polished explainer video without lifting a finger. This workflow watches your Notion database for recently edited pages and uses Ozor AI to automatically generate a professional video from the content — then drops the finished video right back into the original Notion page.

Perfect for SOPs, training materials, wikis, product docs, or any content you want to bring to life visually.


![noaeuwcboucb.png](fileId:6226)

## How it works

1. **Schedule Trigger** checks for updates every 15 minutes
2. **Notion** fetches the most recently edited page from your database
3. **Notion** reads all content blocks from that page (text, headings, images)
4. **JavaScript** compiles the content into a structured prompt for Ozor AI
5. **Ozor AI** analyzes the document and creates a video production plan
6. **Ozor AI** generates the full video project from that plan
7. **Ozor AI** exports the finished video as a public 1080p MP4
8. **Notion** appends the new video back to the original page

## Set up steps

- Connect your **Notion** credential with read + write access to your database (~2 min)
- Connect your **Ozor** credential in n8n (~1 min)
- Update the Notion database ID in Node 2 to point to your own database
- Activate the workflow — any edited Notion page will get a video automatically

## 🔗 Nodes Used

Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
