# 🤝 Manage KlickTipp contact tags with GPT-5-mini via chat input

> ⚡ **43 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow uses an n8n chat trigger, OpenAI (gpt-5-mini), and KlickTipp community nodes to interpret chat instructions and create, apply, or remove tags for an existing KlickTipp contact, returning a structured JSON result.

## How it works
1. Receives a chat message containing a contact email address and explicit tag add/remove instructions.
2. Uses OpenAI (gpt-5-mini) to extract the email plus the requested tags to apply and/or remove, enforcing strict rules to avoid inventing tags.
3. Looks up the contact in KlickTipp by email and reads the contact’s currently assigned tag IDs.
4. Retrieves the full tag list from KlickTipp and creates any missing tags that were explicitly requested for applying.
5. Applies the resolved tag IDs to the contact in KlickTipp when an explicit apply action is present and the contact does not already have them.
6. Removes specific tag IDs (or all currently assigned tag IDs when requested) from the contact in KlickTipp when an explicit remove action is present.
7. Returns a structured JSON response summarizing what was requested, which tags were created, and which tag IDs were applied or removed.

## Setup
1. Add KlickTipp credentials for the community KlickTipp nodes and ensure the target contact already exists in KlickTipp.
2. Add an OpenAI API key and keep the model set to gpt-5-mini (or update it if you want to use a different OpenAI chat model).
3. Use the built-in chat interface to send requests (or replace the chat trigger with another trigger and map the incoming text to the agent input).

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
