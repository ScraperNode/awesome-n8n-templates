# ⚙️ Prevent simultaneous workflow executions with Redis

> ⚡ **1,492 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Purpose
This ensures that executions of scheduled workflows do not overlap when they take longer than expected.

## How it works
- This is a separate workflow which monitors the execution of the main workflow
- Stores a flag in Redis (key dynamically named after workflow ID) which indicates if the main workflow is running or idle
- The TTL setting ensures that the flag will also be removed automatically when the workflow hits the defined timeout
- Only calls the main workflow if the last execution has finished

## Setup
- Update the interval in the Schedule Trigger
- Turn your main workflow into a sub-workflow by adding an **Execute Workflow Trigger**
- Set a reasonable timeout for that sub-workflow
- Set the same timeout (seconds) in the TTL option of the **Set Flag** node
- Select the right sub-workflow in the **Execute Workflow** node
- Publish the workflow

## Customization
- Duplicate the **Execute Workflow** node and select another workflow you would like to run sequentially, then replace the placeholder node underneath with it
- Make sure to set a timeout for that other workflow as well and then update the TTL value in the Redis node to the sum of all workflow timeouts
- You can add as many workflow calls as you want, just make sure they are neatly organized below each other in one line to guarantee the right execution order

## 🔗 Nodes Used

Redis, Execute Sub-workflow, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
