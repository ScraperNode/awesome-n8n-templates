# ⚡ Get Airtable data via AI and Obsidian notes

> ⚡ **2,681 views** · ⚡ [Personal Productivity](../)

## Description

I am submitting this workflow for the Obsidian community to showcase the potential of integrating Obsidian with n8n. While straightforward, it serves as a compelling demonstration of the potential unlocked by integrating Obsidian with n8n.

**How it works**

This workflow  lets you retrieve specific Airtable data you need in seconds, directly within your Obsidian note, using n8n. By highlighting a question in Obsidian and sending it to a webhook via the [Post Webhook Plugin](https://github.com/Masterb1234/obsidian-post-webhook/), you can fetch specific data from your Airtable base and instantly insert the response back into your note. The workflow leverages OpenAI’s GPT model to interpret your query, extract relevant data from Airtable, and format the result for seamless integration into your note.

**Set up steps**

- Install the [Post Webhook Plugin](https://github.com/Masterb1234/obsidian-post-webhook/): Add this plugin to your Obsidian vault from the plugin store or GitHub.
- Set up the n8n Webhook: Copy the webhook URL generated in this workflow and insert it into the Post Webhook Plugin's settings in Obsidian.
- Configure Airtable Access: Link your Airtable account and specify the desired base and table to pull data from.
- Test the Workflow: Highlight a question in your Obsidian note, use the “Send Selection to Webhook” command, and verify that data is returned as expected.

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
