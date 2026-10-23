# 📊 Generate a Sleeper preseason league command center from a public league form

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow collects a Sleeper username and public league ID via an n8n Form, fetches league data from Sleeper, and generates a self-contained HTML preseason “command center” report that is displayed directly in the submitter’s browser.

## How it works
1. Receives a submission from an n8n Form containing a Sleeper username to highlight and a Sleeper league ID.
2. Looks up the Sleeper user profile from the submitted username using the n8n-nodes-sleeper community node.
3. Retrieves the league details, league users, rosters, drafts, traded picks, and current NFL state from Sleeper using the provided league ID.
4. Combines the returned Sleeper datasets, identifies the selected user’s roster when available, and formats league tables and highlights as Markdown and responsive HTML.
5. Returns the generated HTML report as the form completion response so it renders in the submitter’s browser.

## Setup
1. Install the verified `n8n-nodes-sleeper` community node in n8n (Settings → Community nodes).
2. Open the “Sleeper League Form” and use its Test URL while building, then publish/activate the workflow to use the Production URL.
3. Submit a Sleeper username and a public league ID (from the Sleeper league URL) that the workflow can read without any Sleeper login or API credentials.

## Requirements
- The verified n8n-nodes-sleeper community node, installed from Settings → Community Nodes.
- A public Sleeper username and league ID. No Sleeper login or API credentials are required.

## 🔗 Nodes Used

n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
