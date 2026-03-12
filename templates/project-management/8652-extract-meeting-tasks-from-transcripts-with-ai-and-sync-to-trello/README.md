# 📋 Extract meeting tasks from transcripts with AI and sync to Trello

> ⚡ **375 views** · 📋 [Project Management](../)

## Description

## Who’s it for
Teams and project managers who want to turn meeting transcripts into actionable Trello tasks automatically, without worrying about duplicate cards.

## What it does
This workflow receives a transcript file in `.txt` format and processes it with AI to extract clear, concise tasks. Each task includes a short title, a description, an assignee (if mentioned), and a deadline (if available).  
The workflow then checks Trello for duplicates across **all lists**, comparing both card titles (`name`) and descriptions (`desc`). If a matching card already exists, the workflow returns the existing Trello card ID. If not, it creates a new card in the predefined default list.  
Finally, the workflow generates a **user-friendly summary**: how many tasks were found, how many already existed, how many new cards were created, and how many tasks had no assignee or deadline.

## Requirements
- A Trello account with API credentials configured in n8n (no hardcoded keys).
- An OpenAI (or compatible) LLM account connected in n8n.

## How to customize
- Adjust similarity thresholds for title/description matching in the Trello Sub-Agent.
- Modify the summary text to always return in your preferred language.
- Extend the Trello card creation step with labels, members, or due dates.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
