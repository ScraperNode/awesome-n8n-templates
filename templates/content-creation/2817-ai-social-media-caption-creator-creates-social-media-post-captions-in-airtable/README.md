# 🎬 AI social media caption creator creates social media post captions in Airtable

> ⚡ **4,803 views** · 🎬 [Content Creation & Video](../)

## Description

# Welcome to my **AI Social Media Caption Creator** Workflow!

## What this workflow does
This workflow automatically creates a social media post caption in an editorial plan in Airtable. It also uses background information on the target group, tonality, etc. stored in Airtable.

## This workflow has the following sequence:

1. Airtable trigger (scan for new records every minute)
2. Wait 1 Minute so the Airtable record creator has time to write the Briefing field
3. retrieval of Airtable record data
4. AI Agent to write a caption for a social media post. The agent is instructed to use background information stored in Airtable (such as target group, tonality, etc.) to create the post.
5. Format the output and assign it to the correct field in Airtable.
6. Post the caption into Airtable record.

## Requirements
- Airtable Database: [Documentation](https://docs.n8n.io/integrations/builtin/credentials/airtable)
- AI API access (e.g. via OpenAI, Anthropic, Google or Ollama)

### Example of an editorial plan in Airtable:
[Editorial Plan example in Airtable](https://airtable.com/appIXeIkDPjQefHXN/shrwcY45g48RpcvvC)

For this workflow you need the Airtable fields "created_at", "Briefing" and "SoMe_Text_AI"

**Feel free to [contact me via LinkedIn](https://www.linkedin.com/in/friedemann-schuetz), if you have any questions!**

## 🔗 Nodes Used

Airtable, Airtable Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
