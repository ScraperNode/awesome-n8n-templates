# 🔬 Export AI agent conversation logs from Postgres to Google Sheets

> ⚡ **1,071 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview
This n8n workflow retrieves AI agent chat memory logs stored in Postgres and pushes them to Google Sheets, creating one sheet per session. It’s useful for teams building chat-based products or agents and needing to review or analyze session logs in a collaborative format.

## Who is it for
* Anyone with an AI Agent in Production storing the conversation logs in Postgres (or Supabase) who wants to see transcript and have control
* Product teams building AI agents or assistants.
* Teams that want to centralize conversation history for analysis or support.
* Anyone managing AI chat memory and needing to explore it in a spreadsheet.

## Prerequisites
* A Postgres database with a `n8n_chat_histories` table with an AI Agent connected to it. If you need an example, you can follow [this tutorial](https://www.youtube.com/watch?v=JjBofKJnYIU)
* Once done, you need to run the Postgresql query to add the `created_at` column (see Setup &gt; Add a datetime column)
* Google Sheets access and OAuth credentials connected to n8n.
* A Google Sheets document set up as a template (see below).

## Google Sheets Template
This workflow expects a Google Sheets file where each session will be stored in its own tab. 
A basic tab layout is duplicated and renamed with the session ID.
👉 [Use this template as a starting point](https://docs.google.com/spreadsheets/d/14bKI5J0h18Nv48jbe1IXpZWma6EtqYLFWnpKoCB5Bgc/edit?usp=sharing)
Note: You can hide the template after the first tabs have been created

## How it works
1. **Trigger**
   The workflow can be launched manually or on a schedule (e.g. daily at noon).

2. **Retrieve sessions**
   Runs a SQL query to get distinct `session_id` values from the `n8n_chat_histories` table.

3. **Loop over sessions**
For each session:
   * Clears the corresponding sheet (if it exists).
   * Duplicates the template tab.
   * Renames it with the current `session_id`.

4. **Fetch messages**
   Selects all messages linked to the session from Postgres.

5. **Append to sheet**
   Adds each message to the Google Sheet with columns:

   * **Who**: speaker role (`user`, `assistant`, etc.)
   * **Message**: text content
   * **Date**: timestamp from `created_at`, formatted `yyyy-MM-dd hh:mm:ss`

## Notes
* The sheet is **cleared and rebuilt** each run to ensure logs are up-to-date.
* If a sheet for a session doesn’t exist, it will be created by duplicating the first tab (template)
* You can group sessions under a persistent ID (like `user_id`) by overriding `session_id` in your memory config.
* Works perfectly with Supabase by using PG credentials from the connection pooler.

#### 👉 If you're looking for a solution to better visualize and analyse conversations, [reach out to us!](mailto:hello@agentstudio.io)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Postgres, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
