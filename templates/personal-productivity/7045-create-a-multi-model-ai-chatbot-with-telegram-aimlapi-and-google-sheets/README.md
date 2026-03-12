# ⚡ Create a multi-model AI chatbot with Telegram, AIMLAPI, and Google Sheets

> ⚡ **952 views** · ⚡ [Personal Productivity](../)

## Description

# 📲 **AI Multi-Model Telegram Chatbot (n8n + AIMLAPI)**

This n8n workflow enables Telegram users to interact with **multiple AI models dynamically** using **#model_id commands**. It also supports a **/models** command to list all available models. Each user has a **daily usage limit**, tracked via **Google Sheets**.

---

## 🚀 **Key Features**

* **Dynamic Model Selection:** Users choose models on-the-fly via `#model_id` (e.g., `#openai/gpt-4o`).
* **/models Command:** Lists all available models grouped by provider.
* **Daily Limit Per User:** Enforced using Google Sheets.
* **Prompt Parsing:** Extracts model and message from user input.
* **Logging:** Logs every request & result into Google Sheets for usage tracking.
* **Seamless Telegram Delivery:** Responses are sent directly back to the chat.

---

## 🛠 **Setup Guide**

### 1. 📲 **Create a Telegram Bot**

* Go to [@BotFather](https://t.me/BotFather)
* Use `/newbot` → Set name & username.
* Copy the generated **API token**.

### 2. 🔐 **Add Telegram Credentials to n8n**

* Go to **n8n &gt; Credentials &gt; Telegram API**.
* Create a new credential with the BotFather token.

### 3. 📗 **Google Sheets Setup**

* Create a Google Sheet named **Sheet1**.
* Add columns:
  ```
  user_id | date | query | result
  ```
* Share the sheet with your **Service Account** or **OAuth Email** (depending on auth method).

### 4. 🔌 **Connect AIMLAPI**

* Get your API key from *[AIMLAPI](https://aimlapi.com/app/?utm_source=n8n-workflow&utm_medium=github&utm_campaign=integration).*
* In n8n &gt; Credentials, add **AI/ML API**:
  * API Key: your_key_here.

### 5. ⚙️ **Customize Limits & Enhancements**

* Adjust daily limits in the `Set Daily Limit` node.
* Optional:
  * Add NSFW content filtering.
  * Implement alias commands.
  * Extend with /help, /usage, /history.
  * Add inline button UX (advanced).

---

## 💡 **How It Works**

### ➡️ **Command Examples:**

1. **Start a chat with a specific model:**
   ```
   #openai/gpt-4o Write a motivational quote.
   ```
2. **Request available models list:**
   ```
   /models
   ```

### ➡️ **Workflow Logic:**

1. **Receives a Telegram message.**

2. Switch node checks if the message is `/models` or a prompt.

3. For `/models`, it fetches and sends a grouped list of models.

4. For prompts:
   * Checks usage limits.
   * Parses `#model_id` and prompt text.
   * Dynamically routes the request to the chosen model.
   * Sends the AI's response back to the user.
   * Logs the query & result to Google Sheets.

5. If daily limit exceeded → sends a limit exceeded message.

---

## 🧪 **Testing & Debugging Tips**

* Test via a separate Telegram chat.
* Use Console/Set nodes to debug payloads.
* Always test commands by messaging the bot (not via "Execute Node").
* Validate cases:
  * Missing #model_id.
  * Invalid model_id.
  * Limit exceeded handling.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
