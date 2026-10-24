# 📋 Gate human approvals with ClickUp tasks and ClickUp Chat

> ⚡ **5 views** · 📋 [Project Management](../)

## Description

## Quick overview
This sub-workflow creates a ClickUp approval task (optionally posts to ClickUp Chat), then waits and polls the task status until a reviewer approves, requests revisions with notes, rejects with a reason, or the request times out, returning the decision and metadata to the calling workflow.

## How it works
1. Receives an approval request from a parent workflow (or a manual demo run) containing a title, summary, reference ID, and requester name.
2. Builds a ClickUp task description with reviewer instructions, the allowed status names, and an optional link back to the n8n execution.
3. Creates the approval task in a specified ClickUp list and optionally posts a notification message to a ClickUp Chat channel.
4. Waits for a configured interval, then polls the ClickUp task to read its current status.
5. Classifies the status as approved, revision, rejected, pending, or timed out and posts a one-time reminder comment when the configured threshold is reached.
6. On revision or rejection, fetches the latest ClickUp comment to return the reviewer’s notes, and on timeout posts a timeout comment before returning the final outcome to the parent workflow.

## Setup
1. Create a ClickUp API token and add it as a ClickUp API credential in n8n.
2. Prepare a ClickUp list to store approval tasks and ensure it has three statuses that match your configured approved/revision/rejected names.
3. In the Approval Settings step, replace the placeholders for ClickUp list ID, workspace ID, optional chat channel ID, optional assignee user ID, and your n8n instance URL.
4. Adjust the polling and timeout settings (poll interval, max attempts, and reminder threshold) to match your desired approval SLA, and disable channel notifications if you don’t use ClickUp Chat.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
