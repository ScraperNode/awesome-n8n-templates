# 🎬 Generate & post unique MCQ polls to Telegram with Gemini AI and Google Sheets

> ⚡ **252 views** · 🎬 [Content Creation & Video](../)

## Description

This template provides a complete, **two-part automation system** for exam preparation providers, educators, or content creators to automatically generate unique Multiple-Choice Questions (MCQs) on a specific syllabus, save them to Google Sheets, and publish them as Telegram polls—all on a schedule and driven by Google's Gemini Chat Model.

## How it Works / What it Does
This template consists of two interconnected workflows:

### **Workflow 1:** Quiz Generation & Storage

1. A Schedule Trigger starts the quiz generation process periodically.
2. The AI Agent (powered by the Gemini Chat Model) generates a new MCQ based on a specific syllabus or topic (configured in the agent's prompt).
3. The workflow reads all existing quiz data from a Google Sheet (your quiz database).
4. The AI Agent receives the existing quiz data as memory to intelligently check the newly generated question against the existing ones, ensuring the new MCQ is unique and avoids duplication.
5. The new, unique MCQ is added or updated as a new row in the Google Sheet.

### **Workflow 2:** Quiz Posting & Status Update

1. A Google Sheets Trigger listens for new rows (the new unique MCQ) being added or updated in the sheet.
2. It reads the newly added quiz data.
3. A Check New Quiz Added node verifies the data is ready to be posted.
4. The validated quiz is posted to your specified Telegram chat as an interactive poll.
5. The workflow immediately updates the corresponding row in the Google Sheet, marking the quiz as "Posted" to prevent accidental reposting.
6. Finally, it triggers the start of Workflow 1 again to generate the next unique quiz, creating a continuous loop of content creation and publishing.

## Requirements
- To set up this template, you will need:
- n8n Account: A running n8n instance (cloud or self-hosted).
- Google Account: For the Google Sheets Trigger/Nodes and the Google Gemini Chat Model (via the Google services/credentials).
- Telegram Account: A Telegram Bot Token and the Chat ID where the polls will be posted.

## How to Set Up
1. This template is designed to be plug-and-play after connecting your credentials.
2. Connect Google Gemini Chat Model: Authenticate the Google Gemini Chat Model node using your Google account and ensure you have access to the Gemini model API.
3. Configure Google Sheets Nodes: Connect to your Google Sheet where the quizzes are stored. Make sure the sheet has columns for the quiz question, options, answer, and a "Status" column (e.g., Posted or New).
4. Configure Telegram Node: Set up the Send Telegram Poll node with your Bot Token and the target Chat ID.
5. Customize AI Agent: Update the AI Agent's prompt with the specific syllabus, topic, and format instructions for your desired MCQs.

## How to Customize the Workflow
- Posting Schedule: Adjust the Schedule Trigger in Workflow 1 to control how often new quizzes are generated (e.g., daily, every hour).
- Difficulty/Format: Modify the AI Agent's prompt to control the difficulty level, number of options, or required answer explanation for the MCQs.
- Destination: Easily replace the Send Telegram Poll node with other social media nodes (like X/Twitter, Slack, or Discord) to post your MCQs on different platforms.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Google Sheets Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
