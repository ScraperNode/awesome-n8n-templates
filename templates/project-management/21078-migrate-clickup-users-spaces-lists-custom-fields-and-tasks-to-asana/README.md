# 📋 Migrate ClickUp users, spaces, lists, custom fields, and tasks to Asana

> ⚡ **1 views** · 📋 [Project Management](../)

## Description

## Quick overview
Migrate a ClickUp workspace to Asana with n8n: users, spaces, folders, lists, custom fields, tasks, subtasks, comments, checklists and attachments. Five staged workflows, re-run safe, with Gmail progress reports and mapping CSVs.

## How it works
1. An orchestrator checks your ClickUp and Asana tokens and workspace IDs. If a value is wrong, it emails the fix and stops.
2. It then runs five stages in order: 
     * Stage 1 invites ClickUp users who are missing from Asana. 
     * Stage 2 turns each space into an Asana team. 
     * Stage 3 turns folders into portfolios (on plans that support them), lists into projects and statuses into sections. 
     * Stage 4 creates custom fields and attaches them to projects. 
     * Stage 5 copies tasks and subtasks, field values, priority, comments, checklists (as subtasks) and attachments.
3. Each stage saves its results in an n8n data table. A repeated run skips what is already migrated, so it adds no duplicates.
4. Rate limits are set from your plans. The workflow waits where needed to stay inside the ClickUp and Asana limits.
5. Gmail sends a start message, progress and error messages, and a final summary. Each stage’s mapping table (ClickUp ID to Asana ID) is emailed as a CSV. The four temporary tables are then deleted.

## Setup
1. Copy each stage’s nodes (the colored groups on the canvas) into its own workflow and save it.
2. Give every stage these inputs: FeedbackEmail, ClickUpWorkspaceID, ClickUpPAK, ClickUpRateLimit (number), AsanaWorkspaceID, AsanaPAK, AsanaRateLimit (number). Stage 3 also needs AsanaPlan.
3. Choose how to run: 
     * With the orchestrator: add an Execute Workflow Trigger with those inputs to stages 1–4 (stage 5 already has one). In the orchestrator, fill in Set Initial Workflow Environment. In each of the five Call nodes, select that stage’s workflow and map each input to the field of the same name in Set Workflow Environment (orchestrator). Then run it.
     * Manually: add a Manual Trigger and an Edit Fields node with the inputs to each stage. Connect it to the stage’s first Set Workflow Environment node (in stage 5, replace its trigger). Run stages 1 to 5 in order.
4. Connect your Gmail account in the Gmail nodes. The email credential is the only one the template asks for.
5. Start with a small test workspace. Rate limits per minute are ClickUp 100 (Business Plus 1000, Enterprise 10000) and Asana 150 on Personal, otherwise 1500. The orchestrator works these out, but in manual mode you enter them.

## Requirements
- A ClickUp personal API token and workspace ID
- An Asana personal access token, workspace ID and plan name (Personal, Starter, Advanced or Enterprise)
- A Gmail account for status emails
- An instance that allows long executions. Large workspaces can take hours, so check your execution timeout, especially on Cloud.

## Customization
- Run one stage alone, or skip stages you don’t need (for example, users only).
- Change how field values or statuses are mapped in the Stage 4 and Stage 3 branches.

## Additional info
* Run the stages in order: stage 3 reads the spaces table, stage 4 the lists table, and stage 5 the lists and fields tables.
* Task dependencies and links between tasks are not migrated in this version. 
* Portfolios are created only on Asana plans that support them. Otherwise, project names are not prefixed with the folder.
* The template is free and maintained as is. Test on a copy of your data before a production run.

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Gmail, Stop and Error, Execute Workflow Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
