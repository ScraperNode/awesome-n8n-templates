# ⚡ Meal planner: cost tracking, leftover recipes & nutrition diary in Google Sheets

> ⚡ **399 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.

## Description

### Who's it for

This template is for home cooks, small restaurant owners, or anyone who wants to streamline their meal planning, ingredient cost tracking, leftover management, nutritional analysis, and social media promotion. It's ideal for those looking to optimize their kitchen operations, reduce food waste, maintain a healthy diet, and efficiently share their culinary creations.

### How it works / What it does

This advanced workflow acts as a comprehensive culinary assistant. Triggered by a new menu item, it performs several key functions:

*   **Cost and Ingredient Tracking:** A "Menu Agent" uses AI to analyze your input (e.g., a recipe or dish) and extract a detailed list of ingredients, their associated costs, unit prices, and total cost, then logs this into a Google Sheet as a "Recipe List."
*   **Leftover Management:** A "Leftovers Agent" identifies any unused ingredients from your planned dish and suggests three new recipes to utilize them, helping to minimize food waste. This information is also recorded in a Google Sheet.
*   **Nutritional Diary:** A "Nutritionist Agent" generates a diary-style entry with dietary advice based on the meal, highlighting key nutrients and offering personalized suggestions. This entry is appended to a "Diary" Google Sheet.
*   **Social Media Promotion:** A "Post Agent" takes the nutritional diary entry and transforms it into an engaging social media post (specifically for X/Twitter in this template), which is then sent as a direct message, ready for you to share with your followers.

### How to set up

1.  **Webhook Trigger:**
    *   The workflow starts with a Webhook. Copy the webhook URL from the "Webhook" node. You will send your menu item input to this URL.
2.  **Google Sheets Integration:**
    *   You need to set up a Google Sheets credential for your n8n instance.
    *   Create a Google Sheet document (e.g., "Recipe List"). Within this document, create three sheets:
        *   **"Recipe:** This sheet will store your menu items, ingredients, costs, etc. Ensure it has columns for `Date`, `Item`, `Ingredients`, `Ingredient Cost`, `Unit Price`, `Quantity`, `Total`, `Cost`, and `Leftover Ingredients`.
        *   **"leftovers" (Leftovers):** This sheet will store suggested recipes for leftover ingredients. Ensure it has columns for `Date` and `Ingredients`.
        *   **"diary" (Diary):** This sheet will store your nutritional diary entries. Ensure it has a column for `Diary`.
    *   In the "Append row in sheet", "Append row in sheet1", and "Append row in sheet2" nodes, replace the `Document ID` with the ID of your Google Sheet. For "Sheet Name," ensure you select the correct sheet (e.g., "レシピ", "diary", "leftovers") from the dropdown.
3.  **OpenRouter Chat Model:**
    *   Set up your OpenRouter credentials in the "OpenRouter Chat Model" nodes. You will need your OpenRouter API key.
4.  **Twitter Integration:**
    *   Set up your Twitter credentials for the "Create Direct Message" node.
    *   In the "Create Direct Message" node, specify the `User` (username) to whom the direct message should be sent. This is typically your own Twitter handle or a test account.

### Requirements

*   An n8n instance.
*   A Google account with Google Sheets enabled.
*   An OpenRouter API key.
*   A Twitter (X) account with developer access to send Direct Messages.

### How to customize the workflow

*   **Input Data:** The initial input to the "Webhook" node is expected to be the name of a dish or recipe. You can modify the "Menu Agent" to accept more detailed inputs if needed.
*   **Google Sheets Structure:** Adjust the column mappings in the Google Sheets nodes if your spreadsheet column headers differ.
*   **AI Agent Prompts:** Customize the `System Message` in each AI Agent node (Menu Agent, Leftovers Agent, Nutritionist Agent, Post Agent) to refine their behavior and the kind of output they generate. For example, you could ask the Nutritionist Agent to focus on specific dietary needs.
*   **Social Media Platform:** The "Create Direct Message" node is configured for Twitter. You can swap this with another social media node (e.g., Mastodon, Discord) if you prefer to post elsewhere, remembering to adjust the "Post Agent" system message accordingly.
*   **Output Parser:** The "Structured Output Parser" is configured for a specific JSON structure. If you change the "Menu Agent" to output a different structure, you'll need to update this parser.

## 🔗 Nodes Used

Google Sheets, Webhook, X (Formerly Twitter), AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
