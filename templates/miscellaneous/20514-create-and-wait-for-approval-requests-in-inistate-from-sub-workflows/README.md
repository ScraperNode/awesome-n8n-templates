# 🔧 Create and wait for approval requests in Inistate from sub-workflows

> ⚡ **1 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This sub-workflow is triggered by another n8n workflow, creates an approval request in Inistate, then periodically polls Inistate until the request is approved or rejected and returns the decision (approved flag, state, and documentId) to the calling workflow.

## How it works
1. Triggers when another workflow calls it via Execute Workflow and passes input data through.
2. Defines the approved/rejected state names plus the polling interval and maximum number of checks.
3. Creates a new approval request entry in Inistate using the configured workspace and module.
4. Waits for the configured number of minutes, then retrieves the request from Inistate by document ID.
5. Checks whether the Inistate entry’s state matches the configured Approved or Rejected state.
6. If a decision exists, returns approved/state/documentId to the calling workflow; otherwise it keeps waiting and polling until maxChecks is reached, then errors.

## Setup
1. Add an Inistate credential and select the same Inistate workspace and module in both Inistate steps.
2. Configure the approval request fields mapped into the Inistate “Create” step to match your module schema.
3. Update the approvedState and rejectedState values to exactly match your Inistate state names, and adjust checkEveryMinutes and maxChecks to your desired timeout behavior.

## 🔗 Nodes Used

Stop and Error, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
