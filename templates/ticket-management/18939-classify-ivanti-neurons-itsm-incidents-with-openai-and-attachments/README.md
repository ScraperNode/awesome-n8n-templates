# 🎫 Classify Ivanti Neurons ITSM incidents with OpenAI and attachments

> ⚡ **5 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls Ivanti Neurons for ITSM for unclassified incidents, pulls related attachments for added context, and uses an OpenAI chat model to choose the best Service and Category, then writes the classification back to the incident and adds an explanatory note.

## How it works
1. Runs on an hourly polling trigger in Ivanti Neurons for ITSM to fetch incidents where the XSC_Classified flag is not set and the status matches the configured filter.
2. Extracts and cleans the incident Symptom HTML into a plain Description, then fetches any related attachment links from Ivanti.
3. Builds a list of attachment record IDs (including any embedded attachment links) and, when present, downloads each attachment from Ivanti.
4. Maps each incident into a single payload that includes key fields plus the list of available Ivanti services, and passes supported attachment binaries (images and PDFs) along for context.
5. Uses an OpenAI-powered agent to select the most appropriate Ivanti Service, look up its available Categories in Ivanti, and choose the best Category.
6. Updates the Ivanti incident with the chosen Service and Category, sets XSC_Classified to true, and creates a journal note explaining the classification.

## Setup
1. Set up Ivanti Neurons for ITSM credentials for the Synergy Consulting community nodes (requires a self-hosted n8n instance) and ensure the workflow can read incidents, services, categories, attachments, and write incident updates and notes.
2. Add an OpenAI API credential for the OpenAI Chat Model used by the agent.
3. Verify your Ivanti incident schema includes the Service, Category, and XSC_Classified fields used for write-back, and adjust the polling filter (for example, status and XSC_Classified) to match the incidents you want to auto-classify.
4. Confirm attachments are accessible and that sending incident data and attachment content (images/PDFs) to OpenAI is acceptable for your security and compliance requirements.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
