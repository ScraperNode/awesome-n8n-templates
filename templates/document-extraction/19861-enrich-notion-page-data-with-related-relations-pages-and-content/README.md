# 🔬 Enrich Notion page data with related relations, pages, and content

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow is called by another n8n workflow to expand selected Notion page properties, resolving relation fields via a helper sub-workflow, and returns the original page object enriched with the requested nested property data.

## How it works
1. Receives a Notion page object and a list of property names to expand as inputs from another n8n workflow.
2. Splits the requested Properties list into individual items and iterates through them.
3. For each property, calls the “Get Relation Info” sub-workflow to resolve the Notion relation property into related page data.
4. If the current property includes nested properties to expand and the resolved data is not empty, it iterates through the related items and recursively calls this same workflow to expand the nested properties.
5. Aggregates the resolved property objects from all iterations.
6. Merges the aggregated resolved properties back into the original Notion page object and outputs the enriched page.

## Setup
1. Configure the Notion credentials required by the “Get Relation Info” sub-workflow (and any Notion calls it performs).
2. Ensure the “Get Relation Info” workflow (ID: 14yGdu1YOQ0RgCzZ) exists in your workspace and is compatible with the provided inputs (Page and Propriedade).
3. Ensure this workflow is invoked from a parent workflow using the Execute Workflow node, passing a Notion page object in Page and an array of objects in Properties (for example: { "nome": "📝 Anotações", "propriedades": [...] }).

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
