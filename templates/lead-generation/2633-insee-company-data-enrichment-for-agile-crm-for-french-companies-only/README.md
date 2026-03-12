# 🎣 INSEE company data enrichment for Agile CRM (For French companies only)

> ⚡ **1,418 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works 
1) Extracts all company entries in Agile CRM
2) Search for company name in French INSEE OpenData database to extract address and government ID (SIREN)
3) Updates entries with data extracted from French Insee OpenData dabase

Workflow also has a readonly feature to make sure entry is not overwritten.

## Setup steps 
1. Add your AgileCRM credentials
2. Add your INSEE OpenData credentials
3. Add two company custom fields in your Agile CRM (for SIREN data and ReadOnly support)

## 🔗 Nodes Used

HTTP Request, Agile CRM, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
