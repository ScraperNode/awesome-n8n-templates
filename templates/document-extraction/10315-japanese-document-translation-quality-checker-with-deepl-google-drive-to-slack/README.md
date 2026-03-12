# 🔬 Japanese document translation quality checker with DeepL & Google Drive to Slack

> ⚡ **78 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Title

Japanese Document Translation Quality Checker with DeepL & Google Drive to Slack

## Who’s it for

Localization teams, QA reviewers, and operations leads who need a fast, objective signal on Japanese document translation quality without manual checks.

## What it does / How it works

This workflow watches a Google Drive folder for new Japanese documents, exports the text, translates JA→EN with DeepL, then back-translates EN→JA. It compares the original and back-translation to estimate a quality score and summarizes differences. A Google Docs report is generated, and a Slack message posts the score, difference count, and report link—so teams can triage quickly.

## How to set up

1. Connect credentials for Google Drive, DeepL, and Slack.
2. Point the Google Drive Trigger to your “incoming JP docs” folder.
3. In the **Workflow Configuration (Set)** node, fill `targetFolder` (report destination) and `slackChannel`.
4. Run once, then activate and drop a test doc.

## Requirements

n8n (Cloud or self-hosted), Google Drive, DeepL, and Slack credentials; two Drive folders (incoming, reports).

## How to customize the workflow

Tune the diff logic (character → token/line level, normalization rules), adjust score thresholds and Slack formatting, or add reviewer routing/Jira creation for low-score cases. Always avoid hardcoded secrets; keep user-editable variables in the Set node.

## 🔗 Nodes Used

HTTP Request, Slack, DeepL, Google Docs, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
