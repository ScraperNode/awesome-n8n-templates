# 📋 Automated task generation from blueprints with Baserow & weekend-aware scheduling

> ⚡ **256 views** · 📋 [Project Management](../)

## Description

This n8n template demonstrates how to automatically **create** **tasks** (or in general, records) in Baserow based on template or blueprint tables. The first blueprint table is the **master table** that holds the general information about the template. For example: a standard procedure to handle incidents. The second table is the **details table** that holds multiple records for the template. Each record in that table is a specific task that needs to be assigned to someone with a certain deadline. 

This makes it easy to streamline task creation for recurring processes. Use cases are many:
- Project management (generate tasks for employees based on a project template)
- HR & onboarding (generate tasks for employee onboarding based on a template)
- Operations (create checklists for maintenance, audits, or recurring procedures)

## Good to know
- The Baserow template for handling [Standard Operating Procedures](https://baserow.io/templates/standard-operating-procedures) works perfect as a base schema to try out this workflow.
- Authentication is done through a database token. Check the [documentation](https://baserow.io/user-docs/personal-api-tokens) on how to create such a token.
- Tasks are inserted using the HTTP request node instead of a dedicated Baserow node. This is to support batch import instead of importing records one by one.

## Requirements
- Baserow account (cloud or self-hosted)
- A Baserow database with at least the following tables:
    - `Assignee` / employee table. This is required to be able to assign someone to a task.
    - `Master` table with procedure or template information. This is required to be able to select a certain template
    - `Details` table with all the steps associated with a procedure or template. This is required to convert each step into a specific task.
        - A step must have a field `Days to complete` with the number of days to complete the step. This field will be used to calculate the deadline.
    - `Tasks` table that contains the actual tasks with an assignee and deadline.

## How it works
- **Trigger task creation (webhook)**
    - The automation starts when the webhook is triggered through a POST request.
    - It should contain an assignee, template, date and note in the body of the request.
    - It will send a succes or failure response once all steps are completed.
- **Configure settings and ids**
    - Stores the ids of the involved Baserow database and tables, together with the API credentials and the data from the webhook.
- **Get all template steps**
    - Gets all the steps from the template `Details` table that are associated with the id of the `Master` template table.
    - For example: the master template can have a record about handling customer complaints. The details table contains all the steps to handle this procedure.
- **Calculate deadlines for each step**
    - Prepares the input of the tasks by using the same property names as the field of the `Tasks` table. Adjust this names, add or remove fields if this is required for your database structure.
    - The deadline of each step is calculated by adding the number of days a step can take based on the deadline of the first step. This is done through a field `Days to complete` in the template `Details` table.
        - For example. If the `schedule_date` property in the webhook is set to 2025-10-01 and the `Days to complete` for the step is 3, then the deadline will be 2025-10-04
- **Avoid scheduling during the weekend**
    - It might happen that the calculated deadline is on a Saturday or Sunday. This Code node moves those dates to the first Monday to avoid scheduling during the weekend.
- **Aggregate tasks for insert**
    - Aggregates the data from the previous nodes as an array in a property named `items`. This matches perfect with the Baserow API to insert new records in batch.
- **Generate tasks in batch**
    - Calls the API endpoint `/api/database/rows/table/{table_id}/batch/` to insert multiple records at once in the tasks table. Check the [Baserow API documentation](https://api.baserow.io/api/redoc/#tag/Database-table-rows/operation/batch_create_database_table_rows) for further details.
- **Success / Error response**
    - Sends a simple text response to indicate the success or failure of the record creation. This is to offer feedback when triggering the automation from a Baserow application, but can be replaced with a JSON response.

## How to use
- Call the `Trigger task creation` node with the required parameters through a POST request. This can be done from any web application. For example: the application builder in Baserow supports an action to send an HTTP request. The Procedure details page in the [Standard Operating Procedures](https://baserow.io/templates/standard-operating-procedures) template demonstrates this action.
    - The following information is required in the body of the request. This information is required to create the actual tasks.
        
        ```json
        {
            "assignee_id": integer refering to the id of the assignee in the database,
            "template_id": integer refering to the id of the template or procedure in the master table,
            "schedule_date": the date the tasks need to start scheduling,
            "note": text with an optional note about the tasks
        }
        ```
        
- Set the corresponding ids in the `Configure settings and ids` node.
- Check the names of the properties in the `Calculate deadlines for each step` node. Make sure the names of those properties match the field names of your `Tasks` table.
- You can replace the text message in the `Success response` and `Failure response` with a more structured format if this is necessary in your application.

## Customising this workflow
- Add support for public holidays (e.g., using an external calendar API).
- Modify the task assignment logic (e.g., pre-assign tasks in the details table).
- Combine with notifications (email, Slack, etc.) to alert employees when new tasks are generated.

## 🔗 Nodes Used

HTTP Request, Webhook, Baserow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
