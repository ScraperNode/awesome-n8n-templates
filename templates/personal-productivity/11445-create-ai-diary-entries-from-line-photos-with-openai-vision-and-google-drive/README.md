# ⚡ Create AI diary entries from LINE photos with OpenAI Vision and Google Drive

> ⚡ **63 views** · ⚡ [Personal Productivity](../)

## Description

**Overview**

This workflow turns photos sent to a LINE bot into tiny AI-generated diary entries and saves everything neatly in Google Drive. Each time a user sends an image, the workflow creates a timestamped photo file and a matching text file with a short diary sentence, stored inside a year/month folder structure (KidsDiary/YYYY/MM). It’s a simple way to keep a lightweight visual diary for kids or daily life without manual typing. 

LINE Photo to AI Diary with Goo…

**Who this is for**

Parents who want to archive kids’ photos with a short daily comment

People who often send photos to LINE and want them auto-organized in Drive

Anyone who prefers a low-friction, “take a photo and forget” style diary

**How it works**

Trigger: A LINE Webhook receives an image message from the user.

Extract metadata: The workflow extracts the messageId and replyToken.

Download image: It calls the LINE content API to fetch the image as binary.

AI diary text: OpenAI Vision generates a one-sentence, diary-style caption (about 50 Japanese characters).

Folder structure: A KidsDiary/YYYY/MM folder is created (or reused) in Google Drive.

Save files: The photo is saved as YYYY-MM-DD_HHmmss.jpg and the diary text as YYYY-MM-DD_HHmmss_diary.txt in the same folder.

Confirm on LINE: The bot replies to the user that the photo and diary have been saved.

**How to set up**

Connect your LINE Messaging API credentials in the HTTP Request nodes.

Connect your Google Drive credential in the Google Drive nodes and choose a root folder.

Make sure the webhook URL is correctly registered in the LINE Developers console.

**Customization ideas**

Change the AI prompt to adjust tone (e.g., more playful, more sentimental).

Localize the diary language or add an English translation.

Add a second branch to post the saved diary entry to Slack, Notion, or email.

Organize Google Drive folders by child’s name instead of only by date.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Convert to File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
