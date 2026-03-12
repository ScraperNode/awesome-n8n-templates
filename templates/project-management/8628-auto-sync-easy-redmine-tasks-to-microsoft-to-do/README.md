# 📋 Auto-sync Easy Redmine tasks to Microsoft To-Do

> ⚡ **328 views** · 📋 [Project Management](../)

## Description

# Auto-Sync Easy Redmine Tasks to Microsoft To Do

This workflow automatically synchronizes tasks from Easy Redmine into a Microsoft To Do list using a predefined filter. Before syncing, it clears the target list in Microsoft To Do to avoid duplicates. It’s ideal for teams or individuals who plan work in Redmine but prefer Microsoft To Do for daily task tracking.

By connecting Redmine’s task filtering with Microsoft To Do’s simple interface, this setup ensures your task list is always focused and up to date—without manual copying or switching tools.

## How it works
**Scheduled Trigger** – Run Daily Sync
Triggers the workflow automatically at a set time (e.g., every morning at 9:00 AM).
Supports different time zones and execution intervals.

**Get All To Do Tasks** – Clean Target List
Fetches all existing tasks in a specific Microsoft To Do list.
Prepares the list to be cleared before syncing new tasks.

**Delete All Tasks** – Reset To Do List
Deletes previously existing tasks to prevent duplication.
A code node ensures that the workflow only proceeds after all deletions are complete.

**Get Redmine Tasks by Filter** – Pull Fresh Data
Retrieves tasks from Easy Redmine using saved filters (e.g., assigned to the user, due this week).
Only pulls the relevant tasks defined by your Redmine criteria.

**Split and Format Tasks** – One at a Time
Processes each Redmine task individually.
A code node enriches each task with a direct link back to the Easy Redmine issue.

**Create To Do Task** – Sync to Microsoft To Do
Creates a new Microsoft To Do task with name, due date, and optionally a formatted description.
The result is a clean, updated task list reflecting current Redmine assignments.

## How to Use
1. Connect credentials:
Easy Redmine API token (with permission to access issues).
Microsoft credentials (to manage Microsoft To Do lists).
2. In the Redmine filter node, configure the filter to fetch relevant issues.
3. In the Microsoft To Do nodes, select the correct list for both retrieval and creation.
4. Open the Schedule Trigger node and adjust to your desired sync time and timezone.
5. Run a test to confirm that the Redmine tasks appear correctly in your Microsoft To Do list.

## Example Use Cases
- Daily Planning: Automatically refill your Microsoft To Do list with current Redmine tasks every morning.
- Team Sync: Push sprint items or task board assignments into a shared team to-do list.
- Priority Focus: Only pull in tasks due today or marked as high priority in Redmine.

## Requirements
- Easy Redmine account
	- API access enabled
	- Saved filters for task selection
- Microsoft 365 account
	- Microsoft To Do access

## Customization
- Adjust the Redmine filters to target different users, statuses, or projects.
- Modify the function node to format the task title or description with more detail.
- Add conditionals to only sync urgent or near-due tasks.
- Route different project tasks to different To Do lists.
- Optionally send a confirmation message (email, Slack) when the sync completes.

## Workflow Improvement Suggestions
- Rename nodes for clarity (e.g., “Delete Old Tasks”, “Fetch Redmine Tasks”).
- Add error handling if API requests fail.
- Use environment variables for list IDs and API URLs to improve reusability.
- Add logging or tracking (e.g., number of tasks synced per execution).

## 🔗 Nodes Used

Microsoft To Do, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
