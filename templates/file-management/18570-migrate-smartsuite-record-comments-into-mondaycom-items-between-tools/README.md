# 📁 Migrate SmartSuite record comments into Monday.com items between tools

> ⚡ **4 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow manually migrates comment history from SmartSuite records into a Monday.com board by fetching each record’s comments, formatting them into a plain-text archive, finding the matching Monday item by SmartSuite record ID, and writing the archive into a long-text column.

## How it works
1. Starts when you manually run the workflow.
2. Fetches a paginated list of records from a SmartSuite table and processes them in small batches to control load.
3. For each SmartSuite record, requests up to 100 comments and skips records that have no comments.
4. Flattens the SmartSuite comments into a dated plain-text archive, preserving @mentions and enforcing per-comment and total length limits.
5. Queries Monday.com to find the board item whose text column contains the SmartSuite record ID.
6. Updates the target Monday.com long-text column with the formatted comment archive and waits briefly between items to respect rate limits.

## Setup
1. Add your SmartSuite API key, workspace (Account-Id), and table ID in the configuration step.
2. Add your Monday.com API key and set the target board ID.
3. Set the Monday.com column IDs for the text column that stores the SmartSuite record ID and the long-text column that should receive the migrated comments.
4. Adjust the SmartSuite paging values (batch limit and offset) and confirm the Monday item mapping on a small run before migrating the full dataset.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
