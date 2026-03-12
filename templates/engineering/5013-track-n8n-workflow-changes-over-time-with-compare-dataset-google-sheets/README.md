# ⚒️ Track n8n workflow changes over time with compare dataset & Google Sheets

> ⚡ **1,366 views** · ⚒️ [Engineering](../)

## Description

### This n8n template runs daily to track and report on any changes made to workflows  on any n8n instance.

Useful if a team is working within a single instance and you want to be notified of what workflows have changed since you last visited them. Another use-case might be monitoring your managed instances for clients and being alerted when changes are made without your knowledge.

See a sample Gsheet here: [https://docs.google.com/spreadsheets/d/1dOHSfeE0W_qPyEWj5Zz0JBJm8Vrf_cWp-02OBrA_ZYc/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1dOHSfeE0W_qPyEWj5Zz0JBJm8Vrf_cWp-02OBrA_ZYc/edit?usp=sharing)

### How it works
* A scheduled trigger is set to run once a day to review all available workflows.
* An n8n node imports the workflows as json.
* The workflows are brought into a loop where each is first checked to see if it exists in the designated google sheet.
* If not, a new entry is created and skipped.
* If the workflow has been captured before, then the comparison subworkflow can be executed using the previous and current versions of the workflow json data.
* The subworkflow uses the compare dataset tool to calculate the changes to nodes and connections for the given workflow.
* The results are then recorded back to the google sheet for review.

### How to use
* Start with the n8n node and try to filter by the workflows you're interested in tracking.
* Set the scheduled trigger interval to match the frequency to suit how often your workflows are being edited.

### Customising the workflow
* Want to get fancy? Add in an AI agent to help determine changes between the previous and current versions of the workflow. Add contextual explanations to reveal the impact of the changes.

## 🔗 Nodes Used

Google Sheets, Execute Sub-workflow, n8n, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
