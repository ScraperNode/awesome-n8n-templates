# ⚡ Create playlists and control your Spotify player with GPT-4

> ⚡ **4,038 views** · ⚡ [Personal Productivity](../)

## Description

This n8n template provides a powerful AI-powered chatbot that acts as your personal Spotify DJ. Simply tell the chatbot what kind of music you're in the mood for, and it will intelligently create a custom playlist, give it a fitting name, and populate it with relevant tracks directly in your Spotify account.

The workflow is built to be flexible, allowing you to easily change the underlying AI model to your preferred provider, making it a versatile starting point for any AI-driven project.

## Who is this for?

* **Music lovers:** Instantly create playlists for any activity, mood, or genre without interrupting your flow.
* **Developers & AI enthusiasts:** A perfect starting point to understand how to build a functional AI Agent that uses tools to interact with external services.
* **Automation experts:** See a practical example of how to chain AI actions and sub-workflows for more complex, stateful automations.

## What problem does this solve?

Manually creating a good playlist is time-consuming. You have to think of a name, search for individual songs, and add them one by one. This workflow solves that by:

* **Automating playlist creation:** Turns a simple natural language request (e.g., "I need a playlist for my morning run") into a fully-formed Spotify playlist.
* **Reducing manual effort:** Eliminates the tedious task of searching for and adding multiple tracks.
* **Providing player control:** Allows you to manage your Spotify player (play, pause, next) directly from the chat interface.
* **Centralizing music management:** Acts as a single point of control for both creating playlists and managing playback.

## How it works

1.  **Trigger & input:** The workflow starts when you send a message in the **Chat Trigger** interface.
2.  **AI agent & tool-use:** An **AI Agent**, powered by a Large Language Model (LLM), interprets your message. It has access to a set of "tools" that allow it to interact with Spotify.
3.  **Playlist creation sub-workflow:** If you ask for a new playlist, the Agent calls a sub-workflow using the **Create new playlist** tool. This sub-workflow uses another AI call to brainstorm a creative playlist name and a list of suitable songs based on your request.
4.  **Spotify actions:** The sub-workflow then connects to Spotify to:
    * Create a new, empty playlist with the generated name.
    * Search for each song from the AI's list to get its official Spotify Track ID.
    * Add each track to the new playlist.
5.  **Player control:** If your request is to control the music (e.g., "pause the music"), the Agent uses the appropriate tool (**Pause player**, **Resume player**, etc.) to directly control your active Spotify player.

## Setup

1.  **Accounts & API keys:** You will need active accounts and credentials for:
    * **Your AI provider (e.g., OpenAI, Groq, local LLMs via Ollama):** To power the AI Agent and the playlist generation.
    * **Spotify:** To create playlists and control the player. You'll need to register an application in the Spotify Developer Dashboard to get your credentials.
2.  **Configure credentials:**
    * Add your AI provider's API key to the `Chat Model` nodes. The template uses OpenAI by default, but you can easily swap this out for any compatible Langchain model node.
    * Add your Spotify OAuth2 credentials to all **Spotify** and **Spotify Tool** nodes.
3.  **Activate workflow:** Once all credentials are set and the workflow is saved, click the "Active" toggle. You can now start interacting with your Spotify AI Agent via the chat panel!

### **Taking it further**

This template is a great foundation. Here are a few ideas to expand its capabilities:

* **Become the party DJ:** Make the Chat Trigger's webhook public. You can then generate a QR code that links to the chat URL. Party guests can scan the code and request songs directly from their phones, which the agent can add to a collaborative playlist or the queue.
* **Expand the agent's skills:** The `Spotify Tool` node has more actions available. Add a new tool for `Add to Queue` so you can ask the agent to queue up a specific song without creating a whole new playlist.
* **Integrate with other platforms:** Swap the `Chat Trigger` for a `Telegram` or `Discord` trigger to build a Spotify bot for your community. You could also connect it to a `Webhook` to take requests from a custom web form.

## 🔗 Nodes Used

Spotify, Execute Workflow Trigger, AI Agent, Basic LLM Chain, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
