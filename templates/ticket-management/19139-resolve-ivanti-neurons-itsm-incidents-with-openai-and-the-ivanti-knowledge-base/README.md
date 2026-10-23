# 🎫 Resolve Ivanti Neurons ITSM incidents with OpenAI and the Ivanti knowledge base

> ⚡ **3 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls Ivanti Neurons for ITSM incidents, extracts and cleans the symptom text, collects any related attachments, and uses an OpenAI-powered agent to search and retrieve Ivanti knowledge articles to write a KB-grounded resolution back to the incident or add a journal note.

## How it works
1. Runs every hour and polls Ivanti Neurons for ITSM for incidents with Status = Logged and an empty XSC_AI_Resolution field.
2. Extracts readable text from the incident’s Symptom HTML, tags embedded attachment links, and removes inline images.
3. Fetches attachments related to each incident from Ivanti Neurons for ITSM, combines them with any attachment IDs found in the text, and reads each attachment when present.
4. Builds a clean incident payload (RecId, summary, status, description) and includes any retrieved attachment binaries for additional context.
5. Processes incidents one at a time and sends the incident context to an OpenAI chat model agent.
6. Uses the agent to search the Ivanti Knowledge Base, determine each candidate article’s type, retrieve full article content, and either update XSC_AI_Resolution on the incident or create an Ivanti journal note when no suitable article is found.

## Setup
1. Install and configure the Ivanti Neurons for ITSM community node and add Ivanti Neurons for ITSM credentials with permission to read incidents/attachments/knowledge, update incidents, and create journal notes.
2. Add OpenAI credentials and confirm the selected chat model (gpt-5-mini) is available in your account and approved for sending incident data and attachments.
3. Create a writable custom field named XSC_AI_Resolution on the Ivanti Incident business object (or update the workflow’s incident filter and update step to use your preferred field).
4. Review and adjust the Ivanti polling filter and schedule (Status = Logged and XSC_AI_Resolution is null) to match your incident lifecycle and target scope.
5. Test in a non-production Ivanti environment first, since the workflow writes back to live incidents and creates journal notes.

## Requirements
- The Ivanti Neurons for ITSM community node installed in n8n
- Valid Ivanti Neurons for ITSM credentials
- Valid OpenAI credentials
- A compatible AI model capable of processing the attachment types you enable
- An Ivanti Knowledge Base with searchable Knowledge Articles
- An Ivanti integration account with permission to:
- Read incidents
- Read incident relationships and attachments
- Read Knowledge Articles
- Update incident fields
- Create incident journal notes

## Customization
- Replace the OpenAI model with another compatible model.
- Change the polling filters or interval.
- Adjust the Knowledge Base search strategy and agent instructions.
- Add or remove incident fields supplied to the AI Agent.
- Change the custom field used to store AI generated resolutions.

## Additional info
Incident data and supported attachments are sent to the configured external AI provider. Review your organization's data-handling requirements before enabling the workflow on production incidents.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
