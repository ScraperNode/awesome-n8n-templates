# ⚡ Weekly dinner meal plan using recipes from Mealie

> ⚡ **2,949 views** · ⚡ [Personal Productivity](../)

## Description

This workflow randomly select recipes from a Mealie instance (can use a specific category) and then creates a meal plan in Mealie with those recipes.

## How it works:
- Workflow has a scheduled trigger (set to run weekly on a Friday)
- `Config` node sets a few properties to configure the workflow
- A call to the Mealie API to get the list of recipes
- The code node holds most of the logic, this will loop through the number of recipes defined in the config node and randomly select a recipe from the list (making sure not to double up any recipes)
- Once all the recipes are selected it will call the Mealie API to set up the meal plan on the days


## Setup
- Add your Mealie API token as a credential and set it on the Http Request nodes
- Set the relevant schedule trigger to run when you like
- Update the `Config` node with the config you want
	- numberOfRecipes - Number of recipes to populate for the meal plan
	- offsetPlanDays - Number of days in the future to start the plan (0 will start it today, 1 tomorrow, etc.)
	- mealieCategoryId - A category id of the category you want to pull in recipes from (default to select from all recipes)
	- mealieBaseUrl - The base url of your Mealie instance

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
