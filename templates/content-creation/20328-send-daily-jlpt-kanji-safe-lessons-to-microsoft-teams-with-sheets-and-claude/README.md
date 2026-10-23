# 🎬 Send daily JLPT kanji-safe lessons to Microsoft Teams with Sheets and Claude

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs daily, reads your learned kanji and JLPT grammar lists from Google Sheets, uses an AWS Bedrock chat model to generate and proofread a lesson constrained to known kanji, then posts it as a Microsoft Teams Adaptive Card and logs the taught grammar.

## How it works
1. Runs every day at 8:00 using a schedule trigger.
2. Reads learned kanji plus previously taught and available grammar points from Google Sheets, then selects the next unused grammar point for the configured JLPT level and rotates to the day’s topic.
3. Uses an AWS Bedrock (Anthropic Claude) chat model to generate a structured JLPT lesson (examples, reading passage, questions, and vocabulary) with matching kana, romaji, and English fields.
4. Sends the draft through a second AWS Bedrock pass to proofread readings, romaji, naturalness, and consistency while keeping the lesson structure intact.
5. Validates the lesson by enforcing Grammar Bank facts (when available), converting any unlearned kanji to hiragana using the kana fields, and flagging any furigana lines that don’t align with their Japanese text.
6. Builds a Microsoft Teams Adaptive Card with tap-to-reveal furigana/romaji/English/answers and posts it to a Teams Workflows webhook.
7. Appends the taught grammar pattern and meaning to the Google Sheets “Grammar” tab so it isn’t repeated.

## Setup
1. Create a Google Sheet with tabs named “Kanji”, “Grammar Bank”, and “Grammar” and add the required headers (including a TRUE/FALSE “learned” column in the Kanji tab).
2. Add Google Sheets credentials in n8n and update the Sheet URL in the workflow configuration.
3. Create a Microsoft Teams Workflows incoming webhook for a chat (for example using “Send webhook alerts to a chat”), copy its webhook URL, and paste it into the workflow configuration.
4. Configure AWS Bedrock credentials and access to an Anthropic Claude chat model (or swap the model nodes for another supported provider).
5. Adjust the JLPT level, topic list, passage length, schedule time, and workflow timezone to match your study plan.

## Requirements
- A Google account with Google Sheets
- Microsoft Teams with permission to create Workflows
- AWS Bedrock access to Claude Haiku 4.5, or any other chat model that is strong in Japanese
- On AWS Bedrock, the IAM permissions aws-marketplace:ViewSubscriptions and aws-marketplace:Subscribe for first-time model access

## Customization
- Set jlpt_level (N5 to N1) in the Set Configuration Values node and fill the Grammar Bank with points for that level
- Tick "learned" for new kanji in the Kanji tab; the next lesson uses them automatically
- Edit the topics list and passage length in the Set Configuration Values node
- Change the trigger time and the workflow timezone to fit your study schedule
- Replace the two model nodes with any provider (OpenAI, Anthropic, Google Gemini), keeping a low temperature of about 0.2 for proofreading

## Additional info
If the Grammar Bank tab is empty, the AI chooses the grammar point itself. Words containing unlearned kanji are converted to hiragana by a Code node rather than by the AI, so the result is reliable. Any furigana line that doesn't match its Japanese text is flagged with a note on the card instead of failing silently. Grammar points are logged after each lesson and never repeated.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Basic LLM Chain, Structured Output Parser, AWS Bedrock Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
