# 🎣 Add Netlify form submissions to Airtable

> ⚡ **1,080 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow demonstrates how to use the Netlify Trigger node to capture form submissions and add it Airtable. You can reuse the workflow to add the data to another similar database by replacing the Airtable node with the corresponding node.

![workflow-screenshot](fileId:544)

**Netlify Trigger node:** This node triggers the workflow when a new form is submitted. Select your site from the ***Site Name/ID*** dropdown list and the form from the ***Form ID*** dropdown list.

**Set node:** This node extract the required data from the Netlify Trigger node. In this example, we only want to add the Name, Email, and Role of the user.

**Airtable node:** This node appends the data to Airtable. If you want the data to Google Sheets or a database, replace this node with the corresponding node.

## 🔗 Nodes Used

Airtable, Netlify Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
