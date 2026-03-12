# ⚡ Send daily translated Calvin and Hobbes comics to Discord

> ⚡ **1,696 views** · ⚡ [Personal Productivity](../)

## Description

### How it works
- Automates the retrieval of Calvin and Hobbes daily comics.
- Extracts the comic image URL from the website.
- Translates comic dialogues to English and Korean.
- Posts the comic and translations to Discord daily.

### Set up steps
- Estimated setup time: ~10-15 minutes.
- Use a **Schedule Trigger** to automate the workflow at 9 AM daily.
- Add nodes for parameter setup, HTTP request, data extraction, and integration with Discord.
- Add detailed notes to each node in the workflow for easy understanding.

## 🔗 Nodes Used

HTTP Request, Discord, Schedule Trigger, OpenAI Chat Model, OpenAI, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
