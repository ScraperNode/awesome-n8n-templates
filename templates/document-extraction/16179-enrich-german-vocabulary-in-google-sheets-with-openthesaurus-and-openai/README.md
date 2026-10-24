# 🔬 Enrich German vocabulary in Google Sheets with OpenThesaurus and OpenAI

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow watches a Google Sheets vocabulary list for new German words, looks up synonyms via OpenThesaurus, and uses an OpenAI chat model to generate a JSON-formatted example sentence with metadata, then writes the results (or a “not found” note) back to the same sheet.

## How it works
1. Triggers every minute when a new row is added to the selected Google Sheets worksheet.
2. Sends the new row’s `vocabulary` value to OpenThesaurus to retrieve the headword and available synonyms.
3. Checks whether OpenThesaurus returned any terms and, if none are found, updates the row in Google Sheets with a “類義語が見つかりませんでした。” message.
4. If terms are found, prompts an OpenAI chat model (via an AI Agent) to output strict JSON containing a natural German example sentence using a synonym, the part of speech, a Japanese translation, and a CEFR level estimate.
5. Extracts the JSON fields and updates the matching Google Sheets row with the generated sentence, part of speech, translation, and level.

## Setup
1. Connect your Google Sheets OAuth credentials and select the target spreadsheet and worksheet for both the trigger and update steps.
2. Ensure your sheet has columns named `vocabulary`, `Similar Examples sentence`, `part_of_speech`, `translation_ja`, and `level`, and that `vocabulary` can be used to match/update rows.
3. Add OpenAI credentials (or an OpenAI-compatible connection) for the OpenAI Chat Model used by the AI Agent, and confirm the model name is available in your account.
4. Enter new German words in the `vocabulary` column to test, and verify the OpenThesaurus lookup returns terms for your input words.

## 🔗 Nodes Used

Google Sheets, OpenThesaurus, Google Sheets Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
