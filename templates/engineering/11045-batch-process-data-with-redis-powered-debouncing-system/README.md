# ⚒️ Batch process data with Redis-powered debouncing system

> ⚡ **92 views** · ⚒️ [Engineering](../)

## Description

## How it works
This implementation aggregates incoming data into a Redis list from potentially concurrent workflow executions. It buffers the data for a set period before a single execution retrieves and processes the entire batch.

## Step-by-step Flow:
1. Trigger: Data is received from a trigger (e.g., an external workflow execution).

2. Lock Check: The system verifies that the queue is not currently locked; if it is, the process waits.

3. Append: The received data is appended to a Redis list.

4. Tagging: A unique execution identifier is generated and written to a specific Redis key (acting as a "last writer" marker).

5. Wait: The execution pauses for a configured duration.

6. Verification: After the wait, the execution checks if the Redis key still contains its specific identifier.

7. Exit Condition: If the identifier has changed, it indicates a newer execution has arrived. The current execution terminates.

8. Processing: If the identifier matches, this execution assumes responsibility for the batch. It locks the queue, retrieves all data, clears the Redis list, releases the lock, and forwards the aggregated data further.

## Setup
1. Add your Redis instance credentials
2. Configure the debounce period (2 seconds by default)
3. Adjust this workflow's trigger and what it calls in the end

## 🔗 Nodes Used

Redis, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
