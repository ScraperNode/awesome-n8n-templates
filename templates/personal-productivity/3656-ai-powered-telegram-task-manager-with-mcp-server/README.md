# ⚡ Ai-powered Telegram task manager with MCP server

> ⚡ **20,265 views** · ⚡ [Personal Productivity](../)

## Description

## Detailed Description
The ToDo App workflow is designed to streamline task management through Telegram and Google Tasks integration. This workflow allows users to create, update, and manage tasks via Telegram messages, leveraging AI capabilities to enhance user interaction. The expected outcome is a seamless experience where users can manage their tasks efficiently without needing to switch between applications.

## Who is this for?
This workflow is intended for:
- **Individuals** looking for an efficient way to manage their tasks directly from Telegram.
- **Teams** that require a collaborative task management solution integrated with Google Tasks.
- **Developers** interested in automating task management processes using n8n and Telegram.

## What problem does this workflow solve?
Managing tasks can often be cumbersome, especially when switching between different applications. This workflow addresses the following problems:
- **Fragmented Task Management**: Users can manage tasks directly from Telegram, reducing the need to switch to Google Tasks.
- **Inefficient Communication**: By integrating AI, users can interact with the task management system in a conversational manner, making it more intuitive.
- **Task Updates**: Users can easily update task statuses and details through simple messages, enhancing productivity.

## What this workflow does
The ToDo App workflow performs the following functions:
1. **Incoming Message Handling**: Listens for messages sent to a Telegram bot.
2. **Task Creation**: Allows users to create new tasks based on their messages.
3. **Task Updates**: Users can update existing tasks by sending specific commands.
4. **Task Retrieval**: Retrieves today's and upcoming tasks from Google Tasks.
5. **Voice Note Transcription**: Supports voice messages, converting them into text for task management.
6. **AI Assistance**: Utilizes an AI agent to assist users in managing their tasks effectively.

## Setup
### Prerequisites
Before setting up the workflow, ensure you have the following:
- **n8n Account**: Sign up for an n8n account if you don't have one.
- **Telegram Bot**: Create a Telegram bot and obtain the API token.
- **Google Tasks API**: Set up Google Tasks API and obtain OAuth2 credentials.
- **OpenAI API Key**: Sign up for OpenAI and obtain an API key for AI functionalities.

### Setup Process
- Upload the JSON for this workflow and setup the authentication for the different tools.

## How to customize this workflow
To adapt the ToDo App workflow to different needs, consider the following customizations:
- **Change Task Management Platform**: If you prefer a different task management tool, replace the Google Tasks nodes with your preferred service's API.
- **Modify AI Responses**: Adjust the AI agent's system message to change how it interacts with users.
- **Add Additional Commands**: Expand the workflow by adding more commands for different task management functionalities (e.g., deleting tasks).
- **Integrate Other Messaging Platforms**: If you want to use a different messaging service, replace the Telegram nodes with the appropriate nodes for that service.

## Conclusion
The ToDo App workflow provides a powerful solution for managing tasks through Telegram, enhancing productivity and user experience. By following the setup instructions and customization options, users can tailor the workflow to meet their specific needs, making task management more efficient and accessible.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
