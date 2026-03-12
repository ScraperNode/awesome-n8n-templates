# ⚡ Track meal nutrition from meal photos with LINE, Google Gemini and Google Sheets

> ⚡ **190 views** · ⚡ [Personal Productivity](../)

## Description

# AI Meal Nutrition Tracker with LINE and Google Sheets

## Who's it for

This workflow is designed for health-conscious individuals, fitness enthusiasts, and anyone who wants to track their daily food intake without manual calorie counting.

It is best suited for users who want a simple, AI-powered meal logging system that analyzes food photos one at a time and provides instant nutritional feedback via LINE.

## What it does

This workflow processes a single meal photo sent via LINE, analyzes it using Google Gemini AI to identify foods and estimate nutritional content, and stores the data in Google Sheets for tracking.

The workflow focuses on simplicity and encouragement: it receives a meal image, performs AI-based food recognition, estimates calories and macronutrients, calculates a health score, provides personalized advice, and replies with a detailed nutritional breakdown on LINE.

## How it works

1. A single meal photo is sent to the LINE bot.
2. The workflow is triggered via a LINE webhook.
3. The image file is downloaded and sent to Google Gemini AI for food analysis.
4. The AI identifies foods and estimates nutritional values (calories, protein, carbs, fat, fiber).
5. A health score (1-10) is calculated with personalized improvement tips.
6. The data is appended to Google Sheets for meal history tracking.
7. The image is uploaded to Google Drive for reference.
8. A formatted nutritional report with advice is sent back as a LINE reply.

This workflow is intentionally designed to handle **one image per execution**.

## Requirements

To use this workflow, you will need:

- A LINE Messaging API account
- A Google Gemini API key
- A Google account with access to Google Sheets and Google Drive
- A Google Sheets document with the following column names:
  - Date
  - Time
  - Meal Type
  - Food Items
  - Calories
  - Protein (g)
  - Carbs (g)
  - Fat (g)
  - Fiber (g)
  - Health Score
  - Advice
  - Image URL

## Important limitations

- This workflow **does not support multiple images sent in a single message**.
- Sending images in quick succession may trigger multiple executions and lead to unexpected results.
- Only the first image in an event payload is processed.
- Nutritional values are **AI estimates** based on visual analysis and typical serving sizes.
- Accuracy depends on image quality, lighting, and food visibility.
- This tool should **not replace professional dietary advice**.

These limitations are intentional to keep the workflow simple and easy to understand.

## How to set up

1. Create a LINE Messaging API channel and obtain a Channel Access Token.
2. Generate a Google Gemini API key.
3. Update the Config node with your LINE token, Google Sheets ID, Google Drive folder ID, and daily calorie goal.
4. Configure credentials for LINE, Google Gemini, Google Sheets, and Google Drive.
5. Register the n8n webhook URL in your LINE channel settings.
6. Activate the workflow in n8n and test it with a single meal photo.

## How to customize

- Modify the AI prompt in the "Analyze Meal with AI" node to support different languages or dietary frameworks (keto, vegan, etc.).
- Adjust the daily calorie goal in the Config node to match individual needs.
- Add additional nutritional fields such as sodium, sugar, or vitamins.
- Replace Google Sheets with a fitness app API or database.
- Integrate with other services to send daily/weekly nutrition summaries.

---

**Note:**  
This workflow was tested using real meal photos sent individually via the LINE Messaging API.  
Nutritional estimates are approximations and may vary from actual values. For accurate dietary tracking, consult a registered dietitian.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
