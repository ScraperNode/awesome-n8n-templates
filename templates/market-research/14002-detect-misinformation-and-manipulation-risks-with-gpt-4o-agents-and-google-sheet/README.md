# 📊 Detect misinformation and manipulation risks with GPT-4o agents and Google Sheets

> ⚡ **141 views** · 📊 [Market Research & Insights](../)

## Description

## How It Works
This workflow automates misinformation and information manipulation detection using a coordinated multi-agent AI architecture. It is designed for trust and safety teams, media analysts, researchers, and platform moderators who need scalable, structured threat assessment. The pipeline begins when a trigger initiates content analysis. A central Misinformation Detection supervisor agent coordinates three specialised sub-agents: a Narrative Pattern Detector that identifies recurring disinformation themes via semantic clustering, a Bot Behaviour Analyser that detects coordinated inauthentic activity using propagation and temporal pattern tools, and a Manipulation Technique Classifier that maps content to known influence tactics using a risk heatmap and taxonomy tools. Each agent uses a dedicated AI model and memory. Results are passed to a structured output parser, formatted for readability, and appended to Google Sheets for ongoing risk tracking and audit.

## Setup Steps
1. Connect OpenAI credentials to Supervisor, Narrative, Bot, and Manipulation classifier model nodes.
2. Configure Google Sheets credentials and set target spreadsheet ID in the Store Risk Assessment node.
3. Set memory buffer windows in each sub-agent's Memory node to match your analysis context length.
## Prerequisites
- Google Sheets API credentials
- n8n instance (v1.0+)
- Access to propagation/temporal data APIs
- Google account with target Sheet pre-created
## Use Cases
- Platform trust and safety teams flagging viral misinformation campaigns
## Customisation
- Replace Google Sheets with a database or SIEM output
## Benefits
- Parallel multi-agent analysis cuts manual review time significantly

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Structured Output Parser, Code Tool, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
