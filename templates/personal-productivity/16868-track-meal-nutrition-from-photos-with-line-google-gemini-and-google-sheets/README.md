# ⚡ Track meal nutrition from photos with LINE, Google Gemini and Google Sheets

> ⚡ **68 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow receives meal photos via LINE, uses Google Gemini to estimate nutrition facts and generate advice, stores the photo in Google Drive, logs the results to Google Sheets, and replies to the user in LINE with a formatted analysis.

## How it works
1. Receives a POST webhook event from LINE when a user sends a message.
2. Checks whether the incoming LINE message contains an image and stops processing if it does not.
3. Downloads the image content from the LINE Messaging API and sends it to Google Gemini to identify foods, estimate nutrition values, and generate health guidance.
4. If the AI response indicates the image is not food, sends a LINE push message asking the user to submit a clearer meal photo.
5. If the AI response is valid, parses the returned text into structured fields (food items, macros, calories, score, and advice) and calculates remaining calories based on a daily goal.
6. Uploads the meal photo to Google Drive, appends the nutrition log (including the Drive image URL) to Google Sheets, and sends the formatted nutrition summary back to the user via LINE.

## Setup
1. Create a LINE Messaging API channel, enable the webhook, and add the workflow’s webhook URL (the /MealTracker path) in the LINE Developer Console.
2. Add your LINE Channel Access Token in the workflow configuration value used for LINE API calls.
3. Connect Google Sheets OAuth2 credentials, create a spreadsheet with matching columns (Date, Time, Meal Type, Food Items, Calories, Protein, Carbs, Fat, Fiber, Health Score, Advice, Image URL), and set the Google Sheets document ID and sheet/tab.
4. Connect Google Drive credentials, create a target folder for uploads, and set the Google Drive folder ID used by the upload step.
5. Configure Google Gemini credentials/connection for the Google Gemini chat model node.
6. Optionally adjust the daily calorie goal value in the configuration used to calculate remaining calories.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
