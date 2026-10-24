# 📋 Assign unassigned Jira issues with Airtable and OpenRouter Grok

> ⚡ **75 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow listens for Jira issue create/update events, finds unassigned issues in a target project, pulls team member data from Airtable plus each member’s open Jira workload, and uses an OpenRouter-powered AI agent to choose an assignee and update the Jira issue.

## How it works
1. Triggers from Jira on issue creation or issue update.
2. Sets the target Jira project key, then fetches all issues for that project from Jira and the matching team roster from Airtable.
3. Filters the Jira results to keep only issues with no assignee and stops if there are no issues to process.
4. Iterates through each unassigned issue and, for each team member from Airtable, queries Jira for their non-DONE issues to capture current workload.
5. Consolidates the team roster and workload details into a single payload tied to the current issue key.
6. Uses an OpenRouter chat model–backed AI agent (with Jira Issue lookups) to select the best Jira accountId and return a structured JSON decision with a reason.
7. Updates the Jira issue by setting its assignee to the chosen accountId, then continues to the next unassigned issue.

## Setup
1. Add credentials for Jira Software Cloud, Airtable Personal Access Token, and OpenRouter.
2. In Airtable, create or map a team members table that includes the fields used by the workflow (including Jira_Project_Key and Jira_Account_Id) and set the correct base/table in the Airtable search step.
3. Update the JIRA_PROJECT_KEY value to the Jira project you want to manage and ensure the Airtable filter matches that key.
4. Enable a Jira webhook/trigger connection for issue_created and issue_updated events and activate the workflow.

## 🔗 Nodes Used

Airtable, Jira Software, Jira Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
