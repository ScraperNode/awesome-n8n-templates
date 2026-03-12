# 📖 Starred Slack messages to Notion database with AI auto-tagging

> ⚡ **293 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# Who is this for?
Teams that want to capture important Slack messages in Notion with smart categorization.
Perfect for knowledge workers, community managers, or any team that needs to preserve valuable conversations from Slack and organize them automatically in a Notion database.

# What problem does this solve?
Important Slack messages get buried in chat history and are hard to find later.
This workflow monitors your Slack channel and automatically saves starred messages to Notion with AI-generated titles and smart tags. No more manually copying messages or losing track of important discussions.

# How it works
**Trigger** - Schedule Trigger fires every 10 minutes to check for new messages.

**Get Slack Messages** - fetches recent messages from your specified Slack channel within the last 10 minutes.

**Star Filter** - only processes messages that have been reacted to with a ⭐ emoji (configurable to any emoji).

**Get Message Link** - retrieves the permanent link to the starred Slack message.

**Choose Notion DB** - connects to your target Notion database and loads available tag options.

**Set Tags** - prepares the available tags from your Notion database for AI processing.

**AI Processing** - uses OpenAI GPT-4o-mini to:
  - Generate a concise title (under 50 characters)
  - Automatically categorize the message with existing tags (90%+ confidence threshold)

**Create Notion Page** - saves the message to Notion with:
  - AI-generated title
  - Auto-selected tags
  - Original message content
  - Permanent link back to Slack

# Setup steps

### 1. Import and connect credentials
- Import this template into n8n
- Connect your **Slack API** credentials ([Slack Bot Setup Guide](https://api.slack.com/bot-users))
- Connect your **Notion API** token ([Notion Integration Guide](https://developers.notion.com/docs/create-a-notion-integration))
- Connect your **OpenAI API** credentials

### 2. Configure Slack integration
- Create a Slack bot and add it to your target channel
- Update the **channelId** in "Get Slack Messages" node with your channel ID
- Ensure your bot has these permissions:
  - `channels:history` - to read channel messages
  - `reactions:read` - to detect star reactions
  - `chat:write.public` - to get message permalinks

**Slack Bot Setup Resources:**
- [Creating a Slack App](https://api.slack.com/authentication/basics#creating)
- [Bot Token Scopes](https://api.slack.com/scopes)
- [Adding Apps to Channels](https://slack.com/help/articles/202035138-Add-apps-to-your-Slack-workspace)

### 3. Set up Notion database
- Create or use existing Notion database with required properties:
  - **Tags** (Multi-select) - add tag options with descriptions for better AI accuracy
  - **Link** (URL) - for storing Slack permalink
  - **Title** (Title) - will be auto-populated by AI
- Update the **databaseId** in "Choose Notion DB" and "Create Notion Page" nodes

### 4. Customize the workflow
- **Change trigger emoji**: Edit the IF condition to use a different emoji (e.g., `bookmark`, `pushpin`)
- **Adjust timing**: Modify the Schedule Trigger interval (remember to update the "oldest" filter in Get Slack Messages to match)
- **Improve AI prompts**: Edit the prompt in "Write Title & Tag" node for better categorization

### 5. Test the setup
- Star a message in your Slack channel
- Wait for the next 10-minute trigger or manually execute the workflow
- Check your Notion database for the new entry

# Example output

**Slack message:**
&gt; "Hey team, just found this amazing tool for automating our design workflow. We should definitely consider it for next sprint: https://example.com/design-tool"

**Generated Notion page:**
- **Title:** "Design Tool Recommendation for Next Sprint"
- **Tags:** "Tools", "Design", "Sprint Planning"
- **Content:** Full message text with Slack permalink
- **Link:** Direct link back to original Slack message

# Extending the flow

**Multi-channel support** - duplicate the "Get Slack Messages" node for different channels and merge the outputs.

**Enhanced AI processing** - modify the prompt to extract additional metadata like:
- Priority levels
- Action items
- Mentioned team members
- Due dates

**Rich content preservation** - add logic to handle Slack attachments, images, or threaded replies.

**Notification system** - add nodes to notify team members when important messages are archived.

**Sentiment analysis** - incorporate additional AI processing to categorize message sentiment or urgency.

This template provides a lean setup for intelligent Slack-to-Notion archiving. Star important messages, let AI handle the organization, and never lose track of valuable conversations again.

## 🔗 Nodes Used

Slack, Notion, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
