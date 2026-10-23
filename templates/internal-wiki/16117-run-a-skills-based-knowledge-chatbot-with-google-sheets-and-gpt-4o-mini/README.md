# 📖 Run a skills-based knowledge chatbot with Google Sheets and GPT-4o-mini

> ⚡ **53 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow creates a session-based chatbot in n8n Chat that loads “skills” from Google Sheets and uses OpenAI GPT-4o-mini to respond strictly according to the matched skill’s trigger phrases and instructions.

## How it works
1. Receives each message from the built-in n8n Chat trigger.
2. Retrieves all rows from a Google Sheets document that contains a Skills tab.
3. Filters the rows to skills marked Active = Yes and formats them into a structured skills context for the agent.
4. Uses an OpenAI GPT-4o-mini powered agent with session memory to match the user message to the best skill via trigger phrases and generate a response that follows the skill instructions exactly.
5. Sends the agent’s output back to the n8n chat interface.

## Setup
1. Create a Google Sheet with a Skills tab and columns for Skill Name, Trigger Phrases, Instructions, Example Output, and Active (set to Yes for enabled skills).
2. Add a Google Sheets OAuth credential and replace YOUR_SKILLS_SHEET_ID with your spreadsheet ID.
3. Add an OpenAI credential and ensure the model is set to gpt-4o-mini.
4. Activate the workflow and use the Chat Trigger URL to start a conversation.

## Requirements
- Active n8n instance (self-hosted or cloud)
- OpenAI account with GPT-4o-mini API access
- Google Sheets with a tab named Skills — column headers must be added before the first run
- At least one skill row with Active set to Yes before testing

## Customization
- Add more skills at any time — open your Google Sheet, add a new row with a skill name, trigger phrases, instructions, and set Active to Yes — the change takes effect on the next chat message with no workflow changes needed
- Swap GPT-4o-mini for a different model — open the OpenAI — GPT-4o-mini step and change the model selection to gpt-4o or gpt-4.1-mini depending on the response quality and cost balance you need
- Add a fallback email alert for unmatched messages — after node 5. Respond to Chat, add a Gmail step with an IF check that fires when the response contains the fallback message text, sending you an email with the unmatched question so you can add a new skill to cover it
- Change the session memory window — open the Session Memory step and adjust the window size to store more or fewer previous messages in the conversation context — a larger window improves multi-turn follow-ups but uses more tokens
- Add a Slack interface instead of the built-in chat — replace node 1. Chat Trigger with a Slack trigger that listens for messages in a specific channel, so your team can use the skills chatbot directly from Slack without opening n8n

## Additional info
Trigger phrases drive skill matching — the more specific and varied your trigger phrases are, the more accurately the agent picks the right skill. For example, instead of just "email" use "cold email, outreach email, sales email, prospecting email" to cover different ways users might phrase the same request.

If a user message could match multiple skills, the agent picks the most relevant one based on the full message context. If you notice the wrong skill being selected, make the trigger phrases of each skill more distinct from each other.

The Active column controls which skills are loaded on each run. Setting a row to anything other than Yes — including No, Inactive, or leaving it blank — silently excludes it. You can use this to turn skills on and off without deleting them.

The workflow reads the full Skills tab on every single chat message. For large skill sheets with many rows this adds a small delay. If you have more than 50 skills and notice slow responses, consider archiving inactive skills to a separate tab to keep the active tab lean.

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
