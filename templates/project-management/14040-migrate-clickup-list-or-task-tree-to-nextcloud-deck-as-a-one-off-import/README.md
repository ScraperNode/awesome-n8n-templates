# 📋 Migrate ClickUp list or task tree to Nextcloud Deck as a one-off import

> ⚡ **36 views** · 📋 [Project Management](../)

## Description

**Move your ClickUp List or Task Tree to Nextcloud Deck**

Move a ClickUp list, view, or a single root task tree into Nextcloud Deck as a one-off board migration. This workflow is for people who want to preserve structure, status, comments, subtasks, labels, due dates, and completion state when moving work from ClickUp into Nextcloud Deck, without doing the world’s saddest copy-paste marathon.

## How it works

- Validates that the target Nextcloud Deck board is reachable before starting the import. You have to create the Deck Board first.
- Supports two source modes: a) import from a ClickUp view/list, and b) import from a single ClickUp root task tree into the same downstream Deck flow.
- Resolves the real ClickUp home list, fetches tasks page by page, and includes closed tasks and subtasks.
- Converts ClickUp statuses into Deck stacks using a configurable status-to-stack mapping.
- Imports parent tasks as Deck cards and appends subtasks into the card description instead of creating separate child cards.
- Pulls ClickUp task comments and appends them to each card description for better context in Deck.
- Creates Deck labels from ClickUp metadata such as OKR, Progress, and Priority, then assigns those labels to the created cards.
- Sends due dates to Deck in ISO format and marks imported cards as done when the ClickUp task is already complete.
- Produces a final summary showing attempted and successful card creation, done-state updates, and label assignments.

## Set up steps
1. Connect your Nextcloud account in n8n using HTTP Basic Auth and make sure Deck is enabled on the target instance. You’ll also need the Nextcloud base URL and the target Deck board ID. You can get these from the URL addresses in Nextcloud.
2. Add your ClickUp API token and choose your source:
	- a ClickUp view/list ID for list import
	- or a root task ID for task-tree import.
3. Review the configuration values for status mapping, max pages to fetch, and the subtask title prefix so the imported board matches your workflow style.
4. Run the workflow manually for a one-off migration into a clean or lightly used Deck board, then review the result summary and the created stacks, labels, and cards.

## Requirements
- ClickUp account and app API key
- Nextcloud account and Deck installed
- Target Deck Board created in Nextcloud

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
