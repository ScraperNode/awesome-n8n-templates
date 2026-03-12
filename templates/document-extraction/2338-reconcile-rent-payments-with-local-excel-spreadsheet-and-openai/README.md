# 🔬 Reconcile rent payments with local Excel spreadsheet and OpenAI

> ⚡ **8,005 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow is designed to work on the local network and assists with reconciling downloaded bank statements with internal tenant records to quickly highlight any issues with payments such as missed or late payments or those of incorrect amounts.

This assistant can then generate a report to quick flag attention to ensure remedial action is taken.

## How it works

* The workflow monitors a local network drive to watch for new bank statements that are added.
* This bank statement is then imported into the n8n workflow, its contents extracted and sent to the AI Agent.
* The AI Agent analyses the line items to identify the dates and any incoming payments from tenants.
* The AI agent then uses an locally-hosted Excel ("XLSX") spreadsheet to get both tenant records and property records. From this data, it can determine for each active tenant when payment is due, the amount and the tenancy duration.
* Comparing to the bank statement, the AI Agent can now report on where tenants have missed their payments, made late payments or are paying the incorrect amounts.
* The final report is generated and logged in the same XLSX for a human to check and action.

## Requirements

* A self-hosted version of n8n is required.
* OpenAI account for the AI model

## Customising this workflow

If you organisation has a Slack or Teams account, consider sending reports to a channel for increased productivity. Email may be a good choice too.

## Want to go fully local?

A version of this workflow is available which uses Ollama instead. You can download this template here: https://drive.google.com/file/d/1YRKjfakpInm23F_g8AHupKPBN-fphWgK/view?usp=sharing

## 🔗 Nodes Used

Local File Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, Code Tool, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
