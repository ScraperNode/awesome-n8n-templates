# 📱 Generate gender-aware email greetings with OpenAI and KlickTipp

> ⚡ **5 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow triggers when a contact is tagged in KlickTipp, uses OpenAI to estimate gender from the contact’s first name or to extract a name from the email address, and then writes an HTML greeting (Lieber/Liebe/Hallo) back to a KlickTipp custom field.

## How it works
1. Triggers when a contact is tagged in KlickTipp.
2. If the contact already has a first name, OpenAI estimates the most likely gender and a confidence score from that first name.
3. If the first name is missing but an email address exists, OpenAI extracts a first and last name from the email address, estimates gender, and returns confidence scores.
4. If the gender confidence is below 85%, the workflow selects a neutral greeting (Hallo {first name},) and updates the KlickTipp contact.
5. If the gender confidence is 85% or higher, the workflow chooses a gendered greeting (Liebe/Lieber {first name},) and updates the KlickTipp contact.
6. When a name was extracted from the email address, the workflow also writes the parsed first name and conditionally updates the last name in KlickTipp if its confidence is high.

## Setup
1. Create a KlickTipp tag that triggers this workflow and configure the KlickTipp trigger/webhook to fire when that tag is applied.
2. Add KlickTipp credentials in n8n and ensure the workflow can update subscribers.
3. Add an OpenAI API key credential for the OpenAI Chat Model nodes.
4. Create or select a KlickTipp custom field to store the HTML greeting and update the field ID (for example, field228721) in the KlickTipp update steps.
5. Review and adjust the confidence threshold (85%) and the greeting text (Lieber/Liebe/Hallo) to match your brand voice.

## Requirements
- Authenticate your KlickTipp connection with username/password credentials (API access required).
- Connect your OpenAI account using an API Key.

## Customization
- Threshold: increase (stricter) or decrease (more coverage)
- Adjust greeting style: if needed, change “Lieber/Liebe/Hallo” to other words and phrases

## 🔗 Nodes Used

Filter, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
