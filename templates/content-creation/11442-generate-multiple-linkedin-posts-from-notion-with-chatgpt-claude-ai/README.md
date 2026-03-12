# 🎬 Generate multiple LinkedIn posts from Notion with ChatGPT & Claude AI

> ⚡ **116 views** · 🎬 [Content Creation & Video](../)

## Description

# LinkedIn Content Generation Workflow

## Summary
Automated workflow that transforms Notion content notes into publication-ready LinkedIn posts using Claude AI. Monitors Notion database and generates multiple variations based on structured outlines, so that the author can pick the one they like most.

## Use Cases
- Automate LinkedIn content creation from content planning database.
- Generate multiple post variations from a single outline.
- Maintain consistent voice and formatting across all posts.
- Scale content production while preserving quality.

## How It Works

1. **Trigger** - Monitors Notion "Content Plan" database hourly for updates. 
2. **Conditional Check** - Verifies "LinkedIn Post (Main)" tag and "Ready for Writing" status
3. **Main Post** - Claude generates single post from project name and notes
4. **Outline Analysis** - Parallel process creates 3 distinct post concepts with different angles
5. **Multi-Post Generation** - Each outline becomes a complete LinkedIn post
6. **Save to Notion** - All posts automatically saved to database

**AI Setup:**
- Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)
- Main post: temperature 0.8 (creative)
- Multi-post: default temperature (consistent)

## How to Use

1. **Setup a content database in notion, or link your existing one:**
   - Use field mapping as outlined below or update field mapping in n8n template.

1. **Add content to Notion:**
   - Project name (topic)
   - Notes (article content/key points)
   - Tag: "LinkedIn Post (Main)"
   - Status: "Ready for Writing"

2. **Workflow triggers automatically** (hourly check)

3. **Retrieve posts** from Notion database

4. **Review and publish** to LinkedIn

## Requirements

**Credentials:**
- Notion API (access to Content Plan database)
- Anthropic API key
- OpenAI API Key

**Notion Database:**
- Connect Database
- Required properties:
  - Project name (text)
  - Notes (rich text)
  - Tags (multi-select with "LinkedIn Post (Main)")
  - Status (select with "Ready for Writing")


**Notes:**
- Posts optimized for 1800 character limit
- Generates both single posts and multi-angle variations

## 🔗 Nodes Used

Notion, Notion Trigger, AI Agent, Anthropic Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
