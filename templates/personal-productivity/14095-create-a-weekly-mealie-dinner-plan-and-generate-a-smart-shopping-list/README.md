# ⚡ Create a weekly Mealie dinner plan and generate a smart shopping list

> ⚡ **110 views** · ⚡ [Personal Productivity](../)

## Description

This n8n template automatically generates a full week of dinner meal plans in your self hosted **Mealie** instance, allows you to review and remove meals via email, replaces any removed meals with new random recipes, and finally creates a shopping list based on the finalized meal plan.

It is perfect for anyone who wants mostly hands off weekly planning while still keeping control over what meals end up on the schedule. Set it once and let it generate your dinners, review them quickly in your inbox, and automatically prepare your ingredient list for the week.

---

## How it works

* A **Schedule Trigger** runs once per week to start the workflow.
* A **Code node** generates the next 7 calendar days starting from today.
* For each day, the workflow calls the **Mealie API** to generate a random dinner entry.
* The weekly meal plan is retrieved and formatted into an email.
* A **Gmail Send & Wait node** sends the meal plan to you with a form that allows you to remove any meals you do not want.
* Any meals flagged for removal are deleted from the Mealie meal plan and replaced with new randomly generated meals.
* The workflow retrieves the full recipe details for each meal in the finalized plan.
* A new **shopping list** is created in Mealie for the week.
* Recipe ingredients are added to the shopping list based on the finalized set of meals.

---

## What this gives you

* Automatic weekly dinner planning
* A simple email based meal review step
* Automatic replacement of meals you do not want
* A finalized shopping list generated directly in Mealie
* Structured recipe and ingredient data that can be extended to:
  * Aggregate ingredients across recipes
  * Remove duplicate ingredients
  * Scale quantities
  * Export to external services

---

## How to use

* By default, this runs weekly using the **Schedule Trigger**. You can change the interval or replace it with:
  * A **Manual Trigger**
  * A **Webhook**
  * A **Form submission**
* Make sure your **Mealie API endpoint** and **Bearer credentials** are configured correctly in the HTTP Request nodes.
* Update the **Send Gmail & Wait** node to use your Gmail account and preferred recipient email.
* Adjust the `entryType` field if you want to generate **breakfast or lunch** instead of dinner.

---

## Requirements

* A running **Mealie** instance with API access enabled
* **HTTP Bearer credentials** configured in n8n for Mealie API access
* A connected **Gmail account** in n8n for sending the meal review email
* Network access from n8n to your Mealie server

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
