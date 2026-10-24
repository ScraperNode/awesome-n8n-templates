# ⚙️ Inventory AI workflows and risk paths using the n8n API and CSV reports

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs on demand or weekly to scan all workflows on your n8n instance via the n8n API, detect nodes that call AI models, and generate an inventory with exposure status plus a one-line summary and a downloadable CSV report.

## How it works
1. Runs manually, or every Monday at 09:00 on the schedule trigger.
2. Retrieves all workflows (including nodes and connections) from your n8n instance using the n8n API.
3. Analyzes each workflow to identify AI/model-calling nodes and traces downstream paths to nodes that may publish to people (for example email, messaging, or social destinations).
4. Classifies each AI system’s paths for disclosure and human-gate coverage, producing a per-system status and an evidence trail of nodes traversed.
5. Outputs a one-line inventory summary with counts by exposure status.
6. Converts the full inventory into a CSV file named ai-systems-inventory.csv.

## Setup
1. Create an n8n API key (Settings → n8n API) and add it to the n8n node that reads all workflows.
2. Review and, if needed, standardize node naming conventions in your workflows (for example tagging nodes with [exit], [ai disclosure], [ai disclosed]/[persons informed], or [human gate]) to improve classification accuracy.
3. Enable the schedule trigger or run the workflow manually, and optionally connect the summary or CSV output to your preferred destination (for example Slack, email, or storage).

## Requirements
- An n8n instance with the public API enabled (self-hosted or n8n Cloud) and an n8n API key
- No AI credentials: the analysis is plain JavaScript in a Code node, nothing is sent to a model

## Customization
- Tag your own nodes to replace guesses with facts: [exit] on a publishing node, [ai disclosure] on a labelling step, [human gate] on an approval sub-workflow
- Extend the lists at the top of the Code node (AI_TYPE, AI_HOST, EXIT_TYPE) to cover the providers and channels you use
- Send the one-line summary to Slack or email, or store the CSV in Drive, instead of reading it in the execution
- Change the day and hour of the weekly run on the schedule trigger

## Additional info
Each AI system gets one status, worst first: uncovered (reaches people with no disclosure and no gate), likeness, inform, chatbot, verify (destination unclear, tag it), editorial (human gate but no disclosure), disclosed, informed, internal (never reaches people). Unclear paths come back as verify rather than a false pass. This is the registry half of an open-source EU AI Act transparency kit: https://github.com/karusrus/transparency-kit. The labelling half is published as a separate template: https://n8n.io/workflows/19797

## 🔗 Nodes Used

n8n, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
