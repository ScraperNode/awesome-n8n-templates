# 🔬 Approve or reject Inistate entries via email using SMTP

> ⚡ **14 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow triggers when an Inistate entry changes into a chosen approval state, emails an approver with Approve/Reject buttons via SMTP, and then performs the corresponding Inistate activity if the entry is still actionable.

## How it works
1. Triggers when an Inistate entry changes into the selected state (for example, “Pending Approval”).
2. Fetches the full entry details from Inistate and checks whether the configured “Approve” activity is currently available.
3. Builds an approval email containing the entry metadata and field values, then sends it via SMTP with Approve/Reject buttons and waits up to the configured number of days for a response.
4. If no response arrives before the timeout, the workflow stops without updating Inistate.
5. After a response, re-reads the entry from Inistate and verifies that the selected approve/reject activity is still available (so it does not overwrite changes made while waiting).
6. Performs the matching Inistate activity to approve or reject the entry.

## Setup
1. Add an Inistate credential and select the same Inistate workspace and module in every Inistate node, then choose the trigger state to monitor.
2. Add an SMTP email credential for sending messages and set the approver email address and sender (“from”) address.
3. Set the approve and reject activity names to exactly match the activity names in Inistate and configure the wait timeout in days.
4. In the Inistate activity steps, select the correct approve/reject activities and fill any required activity fields for your module.

## 🔗 Nodes Used

Send Email

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
