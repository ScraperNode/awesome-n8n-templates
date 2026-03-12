# 🎫 Automate customer support issue resolution using AI text classifier

> ⚡ **28,198 views** · 🎫 [Ticket Management & Triage](../)

## Description

This n8n template is designed to assist and improve customer support team member capacity by automating the resolution of long-lived and forgotten JIRA issues.

## How it works

* Schedule Trigger runs daily to check for long-lived unresolved issues and imports them into the workflow.
* Each Issue is handled as a separate subworkflow by using an execute workflow node. This allows parallel processing.
* A report is generated from the issue using its comment history allowing the issue to be classified by AI - determining the state and progress of the issue.
* If determined to be resolved, sentiment analysis is performed to track customer satisfaction. If negative, a slack message is sent to escalate, otherwise the issue is closed automatically.
* If no response has been initiated, an AI agent will attempt to search and resolve the issue itself using similar resolved issues or from the notion database. If a solution is found, it is posted to the issue and closed.
* If the issue is blocked and waiting for responses, then a reminder message is added.

## How to use

* This template searches for JIRA issues which are older than 7 days which are not in the "Done" status. Ensure there are some issues that meet this criteria otherwise adjust the search query to suit.
* Works best if you frequently have long-lived issues that need resolving.
* Ensure the notion tool is configured as to not read documents you didn't intend it to ie. private and/or internal documentation.

## Requirements

* JIRA for issues management
* OpenAI for LLM
* Slack for notifications

## Customising this workflow

* Why not try classifying issues as they are created? One use-case may be for quality control such as ensuring reporting criteria is adhered to, summarising and rephrasing issue for easier reading or adjusting priority.

## 🔗 Nodes Used

Slack, Jira Software, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
