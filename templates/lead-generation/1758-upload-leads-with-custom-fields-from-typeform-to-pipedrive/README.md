# 🎣 Upload leads with custom fields from Typeform to Pipedrive

> ⚡ **1,304 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This automated workflow takes a Typeform form, and once it is filled out, it is automatically uploaded as a Lead in Pipedrive.  There is an option for custom fields (this workflow works with company size), and leaves notes in the note section based on questions answered. 

## Prerequisites
- Typeform account and [Typeform credentials](https://docs.n8n.io/integrations/credentials/typeform/) and a form for people to fill out
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/credentials/pipedrive/)

## Nodes
- Typeform node gets the data after the survey is completed
- Set node extracts data from the Typeform node and keeps only relevant data
- Function node maps the company size 
- Pipedrive node populates a pipeline with a deal and adds custom fields

## 🔗 Nodes Used

Function Item, Pipedrive, Start, Typeform Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
