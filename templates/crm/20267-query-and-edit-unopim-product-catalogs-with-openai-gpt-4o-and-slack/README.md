# 🤝 Query and edit UnoPim product catalogs with OpenAI GPT-4o and Slack

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
A chat window for your UnoPim catalog. An OpenAI GPT-4o agent answers questions about your products and writes catalog data back through six UnoPim tools. Every reply is then routed by the workflow itself: a write is read back from UnoPim to confirm it landed, logged to a Google Sheet and announced in Slack, while anything the agent could not resolve opens a Linear issue.

## How it works
1. The Chat Trigger opens a chat window that anyone on your team can use, with no n8n knowledge needed.
2. A Settings node holds the locale, the channel and a read-only switch, so the rules live in one place rather than buried in the prompt.
3. An OpenAI GPT-4o model drives a tool-calling agent whose system message teaches it how UnoPim stores data.
4. Six UnoPim tools are attached to the agent. List products browses the catalog, Look up a product reads one SKU in full, and Update a product writes back with PATCH.
5. List attributes and List families are what stop the agent inventing an attribute code or missing a field the family requires. It checks both before any write. Look up a configurable product covers products with variants, which UnoPim keeps on a separate endpoint keyed by code rather than SKU.
6. A window buffer memory keeps the last fifteen messages, so a follow-up such as "now do the same for the other three" still makes sense.
7. The agent ends every reply with a STATUS block naming the SKU, the field, the old value, the new value and the reason. A Code node parses that block into real fields, so the rest of the workflow is deterministic rather than trusting the model to call the right tool.
8. A Switch routes on that status. On changed, the SKU is fetched back from UnoPim, because a write is only believed once it reads back. The before and after values are appended to a Google Sheet with a confirmed flag, and the change is posted to Slack.
9. On unresolved, the gap becomes a Linear issue instead of an invented value. On answered, the reply goes straight back to the chat.

## Setup
1. Install the community node n8n-nodes-unopim from Settings, Community nodes. This template is self-hosted only, because n8n Cloud cannot install community nodes.
2. In UnoPim open Configuration, Integrations, API Keys and create a key. All four values the credential needs come from the same row.
3. Add the UnoPim API credential. The URL is the application root, for example https://demo.unopim.com, not the admin address.
4. Add an OpenAI credential and confirm it can reach gpt-4o.
5. Pick the Google Sheet and worksheet for the change log, choose your Linear team, and select the Slack channel for announcements.
6. Read the system message before you share the chat. It is what keeps the agent from writing something you did not approve.

## Requirements
- Self-hosted n8n. Community nodes cannot be installed on n8n Cloud.
- UnoPim 3.0 or newer with the n8n connector package installed.
- An OpenAI API key with access to gpt-4o.
- Google Sheets, Linear and Slack accounts for the change log, the issues and the notifications.

## Customization
- Swap gpt-4o for any chat model n8n supports.
- Remove Update a product and the agent becomes read only, and the changed branch simply never fires.
- Edit the system message to change the safety rules, or the locale and channel the agent reads values from.
- Change the memory window from fifteen messages to suit shorter or longer sessions.
- Add a tool for any other catalog resource the node supports, such as categories, channels or currencies.
- Replace Slack, Google Sheets or Linear on the branches with whatever your team already uses. They are ordinary nodes, not agent tools, so swapping one does not change how the agent behaves.

## Additional info
- Point the agent at a staging UnoPim first, because the credential it uses can reach a live catalog. The system message requires the agent to confirm before writing, and the workflow re-reads every SKU it wrote, so a claimed change that did not actually land shows up in the change log as not found.
- Update a product sends PATCH rather than PUT, so it can never replace a whole record.
- A video walkthrough is embedded as a sticky note on the canvas.

## 🔗 Nodes Used

Google Sheets, Slack, Linear, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
