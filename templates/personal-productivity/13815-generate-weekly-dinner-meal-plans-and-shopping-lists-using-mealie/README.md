# ⚡ Generate weekly dinner meal plans and shopping lists using Mealie

> ⚡ **20 views** · ⚡ [Personal Productivity](../)

## Description

### This n8n template demonstrates how to automatically generate a full week of dinner meal plans in your self hosted Mealie instance and create a corresponding shopping list based on those planned meals.


Perfect for anyone who wants hands off weekly planning. Set it once and let it build your dinners and prep your ingredient data every week.

### How it works
* A Schedule Trigger runs once per week to kick things off.
* A Code node generates the next 7 calendar days starting from today.
* For each day, we call the Mealie API to generate a random dinner entry.
* Using the returned recipe slug, we fetch the full recipe details from Mealie.
* A new shopping list is created in Mealie for the week.
* The recipe data is normalized into a clean structure that includes servings and ingredient details, ready for shopping list aggregation or further processing.

### What this gives you
* Automatic weekly dinner planning
* Structured ingredient data for every recipe
* A named shopping list for the week
* Clean normalized JSON that can easily be extended to:
  * Aggregate ingredients across recipes
  * Remove duplicates
  * Scale quantities
  * Export to external services

### How to use
* By default, this runs weekly using the Schedule Trigger. You can change the interval or replace it with:
  * A Manual Trigger
  * A Webhook
  * A Form submission
* Make sure your Mealie API endpoint and Bearer credentials are configured correctly.
* Adjust the entryType field if you want breakfast or lunch instead of dinner.

### Requirements
* A running Mealie instance with API access enabled
* HTTP Bearer credentials configured in n8n
* Network access to your Mealie server

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
