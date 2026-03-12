# 🔧 Create notes and comments on any Odoo model record

> ⚡ **1,385 views** · 🔧 [Miscellaneous](../)

## Description

## Introduction
This workflow is designed to create and attach notes or comments to any record in your Odoo instance. It acts as a sub-workflow that can be triggered by a main workflow to log messages or comments in a centralized manner. By leveraging the powerful Odoo API, this template ensures that updates to records are handled efficiently, providing an organized way to document important information related to your business processes.

## Setup Instructions
Import the Workflow:

Import the provided JSON file into your n8n instance.

## Odoo Credentials:

Ensure you have valid Odoo API credentials (e.g., "Roodsys Odoo Automation Account") configured in n8n.

## Node Configuration:

Verify that the "Odoo" node (consider renaming it to "Odoo Record Manager" for clarity) is set up with your server details and authentication parameters.

Check that the workflow trigger ("When Executed by Another Workflow") is configured to receive input parameters from the parent workflow.

## Execution Trigger:

This workflow is designed to be initiated by another workflow. Make sure the main workflow supplies the required inputs.

### Workflow Details
Trigger Node:
The workflow begins with the "When Executed by Another Workflow" node, which accepts three inputs:

rec_id: A numeric identifier for the Odoo record.

message: The text of the comment or note.

model: The specific Odoo model (e.g., rs.deployment.action.log) where the note should be attached.

### Odoo Node:
The second node in the workflow calls the Odoo API to create a new log message. It maps the inputs as follows:

message_type is set to "comment".

model is assigned the provided model name.

res_id is assigned the record ID (rec_id).

body is assigned the message content.

# Additional Information:
A sticky note node is included to provide a brief overview of the workflow’s purpose directly within the interface.

### Input Parameters
Record ID (rec_id):
The unique identifier of the record in Odoo where the note will be added.

### Message (message):
The content of the comment or note that is to be logged.

### Model (model):
The Odoo model name indicating the context in which the note should be created (e.g., rs.deployment.action.log).

## Usage Examples
### Internal Logging:
Use the workflow to attach internal comments or logs to specific records, such as customer profiles, orders, or deployment logs.

### Audit Trails:
Create a comprehensive audit trail by documenting changes or important events in Odoo records.

### Integration with Other Workflows:
Link this workflow with other automation processes in n8n (like email notifications, data synchronization, or reporting) to create a seamless integration across your systems.

### Pre-conditions
The Odoo instance must be accessible and correctly configured.

API permissions and user roles should be validated to ensure that the workflow has the necessary access rights.

The workflow expects inputs from an external trigger or parent workflow.

Customization & Integration
This template offers several customization options to tailor it to your needs:

Field Customization: Modify or add new fields to match your logging or commenting requirements.

Node Renaming: Rename nodes for better clarity and consistency within your workflow ecosystem.

**Integration Possibilities**: Easily integrate this workflow with other processes in n8n, such as triggering notifications or synchronizing data across different systems.



This sub-workflow receives data from a main workflow (for example, a record ID, a message, and the Odoo model) and creates a new note (or comment) in the corresponding Odoo record. Essentially, it acts as a centralized point for logging comments or notes in a specific Odoo model, ensuring that the information remains organized and easy to track.

Your model must inherit from

 _inherit = ['portal.mixin', 'mail.thread.main.attachment']

## 🔗 Nodes Used

Odoo, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
