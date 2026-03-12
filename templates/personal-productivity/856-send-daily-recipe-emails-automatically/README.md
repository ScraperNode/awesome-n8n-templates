# ⚡ Send daily recipe emails automatically

> ⚡ **2,173 views** · ⚡ [Personal Productivity](../)

## Description

Not sure what to eat tonight? Have recipes emailed to you daily based on your criterial.

To run this workflow, you will need to have:
1. A Recipe Search API key from [Edamam](https://developer.edamam.com/edamam-recipe-api)
2. An active email account with configured credentials

To set up your credentials:
1. Set your Edamam *AppID* and *AppKey* in the *Search Criteria* node
2. Select (or create) your email credentials in the *Send Recipes* node (and set up the *to:* and *from:* email addresses while you are at it)

To customize the recipes that you receive, open up the *Search Criteria* node and modify one or more of the following:
- **RecipeCount** - the numner of recipes you would like to receive
- **IngredientCount** - the maximum number of ingredients you would like each recipe to have
- **CaloriesMin** - the minimum number of calories the recipe will have
- **CaloriesMax** - the maximum number of calories the recipe will have
- **TimeMin** - the minimum amount of time (in minutes) the recipe will take to prepare
- **TimeMax** - the maximum amount of time (in minutes) the recipe will take to prepare
- **Diet** - Select one of the following options:
	- *balanced* - Protein/Fat/Carb values in 15/35/50 ratio
	- *high-fiber* - More than 5g fiber per serving
	- *high-protein* - More than 50% of total calories from proteins
	- *low-carb* - Less than 20% of total calories from carbs
	- *low-fat* - Less than 15% of total calories from fat
	- *low-sodium* - Less than 140mg Na per serving
	- *random* - selects a different random diet each day
- **Health** - Select one of the following options:
	- *alcohol-free* - No alcohol used or contained
	- *immuno-supportive* - Recipes which fit a science-based approach to eating to strengthen the immune system
	- *celery-free* - does not contain celery or derivatives
	- *crustacean-free* - does not contain crustaceans (shrimp, lobster etc.) or derivatives
	- *dairy-free* - No dairy; no lactose
	- *egg-free* - No eggs or products containing eggs
	- *fish-free* - No fish or fish derivatives
	- *fodmap-free* - Does not contain FODMAP foods
	- *gluten-free* - No ingredients containing gluten
	- *keto-friendly* - Maximum 7 grams of net carbs per serving
	- *kidney-friendly* - per serving – phosphorus less than 250 mg AND potassium less than 500 mg AND sodium: less than 500 mg
	- *kosher* - contains only ingredients allowed by the kosher diet. However it does not guarantee kosher preparation of the ingredients themselves
	- *low-potassium* - Less than 150mg per serving
	- *lupine-free* - does not contain lupine or derivatives
	- *mustard-free* - does not contain mustard or derivatives
	- *low-fat-abs* - Less than 3g of fat per serving
	- *no-oil-added* - No oil added except to what is contained in the basic ingredients
	- *low-sugar* - No simple sugars – glucose, dextrose, galactose, fructose, sucrose, lactose, maltose
	- *paleo* - Excludes what are perceived to be agricultural products; grains, legumes, dairy products, potatoes, refined salt, refined sugar, and processed oils
	- *peanut-free* - No peanuts or products containing peanuts
	- *pecatarian* - Does not contain meat or meat based products, can contain dairy and fish
	- *pork-free* - does not contain pork or derivatives
	- *red-meat-free* - does not contain beef, lamb, pork, duck, goose, game, horse, and other types of red meat or products containing red meat.
	- *sesame-free* - does not contain sesame seed or derivatives
	- *shellfish-free* - No shellfish or shellfish derivatives
	- *soy-free* - No soy or products containing soy
	- *sugar-conscious* - Less than 4g of sugar per serving
	- *tree-nut-free* - No tree nuts or products containing tree nuts
	- *vegan* - No meat, poultry, fish, dairy, eggs or honey
	- *vegetarian* - No meat, poultry, or fish
	- *wheat-free* - No wheat, can have gluten though
	- *random* - selects a different random health option each day
- **SearchItem** - the general term that you are looking for e.g. *chicken*

## 🔗 Nodes Used

Cron, Send Email, Function, HTTP Request, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
