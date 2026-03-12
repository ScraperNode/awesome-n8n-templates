# 📋 Generate filtered calendar views in Baserow with external calendar integration

> ⚡ **147 views** · 📋 [Project Management](../)

## Description

This n8n template demonstrates how to automatically generate **personalized calendar views** in Baserow, based on a chosen date field and a filter. Having a personalized view with only information that is relevant to you makes it easy to integrate with external calendar tools like Outlook or Google Calendar.

Use cases are many:
- Task management (deadlines per staff member)
- Customer management (appointments per customer)
- Inventory management (delivery dates per supplier)

## Good to know
- You only need **a Date field** (e.g., a task deadline, due date, appointment date) and **a Link to table field** (e.g., a customer, employee, product) to make this work.
- The generated calendar views can be shared as `.ics` files and imported into any external calendar application.
- Authentication is done through a JWT token constructed from your Baserow username and password.
- 
## How it works
- **Set Baserow credentials**:
    - Allows you to enter your Baserow credentials (username + password) and the API host path. The host is by default https://api.baserow.io, but you can change this in case you are self-hosting.
    - The information is required to generate a JWT token that authenticates all future HTTP request nodes to create and configure the view.
- **Create a token**:
    - Generates a JWT token based on the information provided in the previous node.
- **Set table and field ids**:
    - Stores the generated JWT token and allows you to enter the ids of the tables and fields required to run the automation.
- **Get all records from filter table**
    - Gets all the records from the table you want to filter on. This is the table that has a Link to table field referencing the table with the Date field. Each record from this table will get it’s own view.
    - Some examples: Customers, Employees and Products.
- **Create new calendar view**
    - Calls the API endpoint `/api/database/views/table/{table_id}` to create a new view. Check the [Baserow API documentation](https://api.baserow.io/api/redoc/#tag/Database-table-views/operation/create_database_table_view) for further details.
    - The body of this requests configures the new view by setting among other things a name and the date field
- **Create filter**
    - Calls the API endpoint `/api/database/views/{view_id}/filters/` to set a filter on the view so that it only shows the records that are relevant. This filter is based on the Link to table field that is set in earlier steps.  Check the [Baserow API documentation](https://api.baserow.io/api/redoc/#tag/Database-table-view-filters/operation/create_database_table_view_filter) for further details.
- **Set background color**
    - Calls the API endpoint `/api/database/views/{view_id}/decorations/` to set a a color on the background or left side of each item. By default, the color is based on a single select field, but it is also possible to use a condition.  Check the [Baserow API documentation](https://api.baserow.io/api/redoc/#tag/Database-table-view-decorations/operation/create_database_table_view_decoration) for further details.
- **Share the view**
    - Calls the API endpoint `/api/database/views/{view_id}` to update the current view. It updates the `ical_public` property to `true` so that an ics link is created. Check the [Baserow API documentation](https://api.baserow.io/api/redoc/#tag/Database-table-views/operation/update_database_table_view) for further details.
- **Update the url’s**
    - Updates all the records in the table you want to filter on to fill in the url to the new generated view and the url to the ics file. This can be useful if you want to build an application on top of your database.

## How to use
- The **Manual Trigger** node is provided as an example, but you can replace it with other triggers such as a webhook
- The included [Baserow SOP template](https://baserow.io/templates/standard-operating-procedures) works perfectly as a base schema to try out this workflow.

## Requirements
- Baserow account (cloud or self-hosted)
- A Baserow database with a table that has a Date field and a Link to Table field

## Customising this workflow
- Change the **date field** used to generate the calendars (e.g., deadline → appointment date).
- Adjust the **filters** to match your context (staff, customer, product, etc.).
- Configure which fields are shown using the `/api/database/view/{view_id}/field-options/` endpoint. Check the [Baserow API documentation](https://api.baserow.io/api/redoc/#tag/Database-table-views/operation/update_database_table_view_field_options) for further details.
- Add or remove optional steps such as coloring by status or sharing the ics feed.
- Extend the workflow to notify staff when a new view has been created for them.

## 🔗 Nodes Used

HTTP Request, Baserow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
