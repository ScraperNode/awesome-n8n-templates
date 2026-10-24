# 🔬 Answer Notion knowledge base questions with You.com Research

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Notion questions database and, for items marked “To Research,” uses You.com Research to generate a cited answer, then writes the answer and sources back to the same Notion page and updates the status to “Answered”.

## How it works
1. Triggers when a new page is added to a specified Notion database (polled every minute).
2. Checks that the page has a non-empty Question field and that Status equals “To Research”.
3. Sends the question text to You.com using the Research operation to generate an answer with sources.
4. Updates the same Notion page with the generated Answer and Sources fields and sets Status to “Answered”.
5. If the You.com request fails, writes an error message into the Answer field and leaves the item in “To Research” so it can be retried.

## Setup
1. Use self-hosted n8n and install the community node package `@youdotcom-oss/n8n-nodes-youdotcom`.
2. Add Notion API credentials and a You.com API credential, then select them in the corresponding nodes.
3. Replace the Notion database ID in the trigger and ensure the database has properties named Question, Status (select), Answer (text/rich text), and Sources (text/rich text) with Status options “To Research” and “Answered”.

## Requirements
- A self-hosted n8n instance where community package installation is enabled. That is an owner-level setting, and n8n Cloud cannot run community nodes at all.
- A You.com account and API key with access to the Research operation.
- A Notion internal integration, with the questions database explicitly shared with it. Without that share the trigger returns nothing and both write nodes fail.
- Edit access to the database, since the workflow writes back into the same rows it reads.
- No model provider credential of any kind. You.com returns the written answer and the source list in a single call.

## Customization
- The trigger polls every minute. Drop it to hourly if that is more Notion API traffic than you want.
- The guard compares Status to To Research with case sensitivity on, so the text must match exactly. Change the string, or add a topic or requester condition.
- Both success writes trim to 1900 characters to stay under Notion's 2000-character property limit. Raise it, or write the answer into page blocks instead of a property.
- Source lines are built as 1. Title - url and joined with newlines. Change the format to Markdown links or bare URLs.
- Answered is the status value written on success. Swap it for whatever your board uses.
- The failure branch writes only into Answer and deliberately leaves Status alone. Add a Failed status there, or replace it with a Slack alert.

## Additional info
Cost follows rows rather than clock time, since exactly one You.com call fires per question that clears the guard, though the trigger still polls Notion every minute whether or not anything arrives. The trigger fires on pages added to the database, which has a consequence worth understanding before you rely on the retry behaviour: a failed lookup does leave the row at "To Research", but nothing re-triggers it, so retrying means re-running that execution by hand or adding the question again. For the same reason, flipping an existing row to "To Research" will not start anything. Rows that fail the guard end the execution quietly with nothing written back, so a question typed without a status gives no signal on the board. The failure note is written into the Answer field itself, so it replaces whatever was there and a later successful run replaces it in turn. Only the You.com call has an error branch, so a Notion write failure stops the whole run and leaves the row untouched, and no node has retries enabled. Answers are generated text, so wording and sources will differ between two runs of the same question.

## 🔗 Nodes Used

Notion, Notion Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
