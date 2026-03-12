# 📋 Create Onfleet tasks from local spreadsheets

> ⚡ **796 views** · 📋 [Project Management](../)

## Description

**Summary**

Onfleet is a last-mile delivery software that provides end-to-end route planning, dispatch, communication, and analytics to handle the heavy lifting while you can focus on your customers.

This workflow template loads in a spreadsheet from your **local storage** and **automatically creates Onfleet tasks** on a one-time basis upon workflow trigger. You can use this workflow as a task importer.

**Configurations**

- Update the `Read Binary File` node with the absolute file path to the local spreadsheet of interest
- Update the Onfleet node with your own Onfleet credentials, to register for an **Onfleet API key**, please visit https://onfleet.com/signup to get started
- You can easily change how the Onfleet task is created by mapping to additional data in the spreadsheet
- For import templates, visit [Onfleet Support](https://support.onfleet.com/hc/en-us/articles/360023910131-Task-Overview#h_4667f289-d298-49bc-9faa-00898a922dab) to learn more 👍

## 🔗 Nodes Used

Read Binary File, Spreadsheet File, Onfleet

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
