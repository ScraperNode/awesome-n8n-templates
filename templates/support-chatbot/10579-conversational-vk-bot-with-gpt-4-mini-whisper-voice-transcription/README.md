# 💬 Conversational VK bot with GPT-4 mini & Whisper voice transcription

> ⚡ **516 views** · 💬 [Support Chatbots](../)

## Description

### How it works

This workflow powers an intelligent, conversational AI bot for VK that can understand and respond to both **text and voice messages**. The bot uses an AI agent with built-in memory, allowing it to remember the conversation history for each unique user (or in each chat) and answer follow-up questions. It's a complete solution for creating an engaging, automated assistant within your VK group.

### Step-by-step

  * **VK Webhook (Trigger):** The workflow starts when the **Webhook** node receives a new message from your VK group.
  * **Duplicate Filtering:** The data immediately passes through the **Filter Dubles** node, which checks for the `x-retry-counter` header. This is a crucial step to prevent processing duplicate retry requests sent by the VK API.
  * **Voice or Text Routing:** A **Voice/Text** (Switch) node checks if the message contains text (`message.text`) or a voice attachment (`audio_message.link_mp3`).
  * **Voice Transcription:** If it's a voice note, the **Get URL** (HTTP Request) node downloads the audio file. The file is then passed to the **Transcribe** (OpenAI) node, which uses the Whisper model to convert the audio to text.
  * **Input Unification:** Both the original text (from the 'Text' path) and the newly transcribed text (from the 'Voice' path) are routed to the **Set Prompt** node. This node standardizes the input into a single `prompt` variable.
  * **AI Agent Processing:** The `prompt` variable is passed to the **AI Agent**. This agent is powered by an **OpenAI Chat Model** and uses **Simple Memory** to retain conversation history, using the VK **`peer_id`** as the `sessionKey`. This allows it to maintain a separate history for both private messages and group chats.
  * **Response Generation:** The successful AI response is passed to the **Send to VK** (HTTP Request) node, which sends the message back to the user.
  * **Error Handling:** The **AI Agent** node has error handling enabled (`onError`). If it fails, the flow is redirected to the **Error** (HTTP Request) node, which sends a fallback message to the user.

### Set up steps

Estimated set up time: 10 minutes

1.  Add your OpenAI credentials to the **OpenAI Chat Model** and **Transcribe** nodes.
2.  Add your VK group's API Bearer Token credentials to the two **HTTP Request** nodes named **Send to VK** and **Error**.
3.  **Webhook Setup (Important\!):** This is a two-stage process: confirmation and operation.
      * Copy the **Production Webhook URL** from the **Webhook** node.
      * **Stage A: Confirm Address (One-time)**
          * In the **Webhook** node settings, set `Response Mode` to `On Received`.
          * In `Options` -\&gt; `Response Data`, temporarily paste the confirmation string that VK provides.
          * Activate the workflow (toggle "Active" in the top-right).
          * Paste the URL into your VK group's Callback API settings (Management -\&gt; API -\&gt; Callback API) and click "Confirm".
      * **Stage B: Operational Mode (Permanent)**
          * Return to the **Webhook** node.
          * Set `Response Mode` to **`Immediate`**.
          * In `Options` -\&gt; `Response Data`, type the word **`ok`** (lowercase).
          * Save and reactivate the workflow. The bot is now live.
4.  (Optional) Customize the system prompt in the **AI Agent** node to define your bot's name and personality.

## 🔗 Nodes Used

HTTP Request, Webhook, Filter, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
