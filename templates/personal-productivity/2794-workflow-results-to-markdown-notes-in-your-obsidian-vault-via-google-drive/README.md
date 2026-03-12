# ⚡ Workflow results to markdown notes in your Obsidian vault, via Google Drive

> ⚡ **4,898 views** · ⚡ [Personal Productivity](../)

## Description

This workflow converts any n8n workflow outputs into Markdown notes that are accessible in your Obsidian Vault through Google Drive synchronization.

**Setup Requirements**
1.	Create a designated folder in Google Drive (Desktop).
2.	Create a symbolic link between this folder and a new target folder in your Obsidian Vault.
3.	Configure Google Drive n8n node settings.
4.	Send the output of any workflow to the trigger, and the notes will appear in your Vault folder.
	
**Optional Features**
You can use AI agents to:
- Write notes in your preferred format (e.g., Zettelkasten).
- Compose YAML front matter.
- Suggest tags.

**Use Cases**
- Convert RSS feed items to notes.
- Create notes from YouTube video transcripts.
- Transform tasks in Slack messages into Obsidian tasks.
(Requires setting up a corresponding workflow, e.g., RSS trigger, YouTube transcriber, or Slack bot.)

## 🔗 Nodes Used

Google Drive, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
