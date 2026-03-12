# ⚡ Send a voice note on Telegram to generate a professional email with ChatGPT

> ⚡ **1,591 views** · ⚡ [Personal Productivity](../)

## Description

## Telegram Voice Message → Automatic Email

![baptistefortn8nautomationtelegramaudio.png](fileId:1951)

**Imagine:** What if you could turn a simple Telegram voice message into a professional email—without typing, copying, pasting, or even opening Gmail?

This workflow does it all for you: just record a voice note, and it will transcribe, format, and write a clean HTML email, **then send it to the right person—all by itself.**

## Prerequisites

- **Create a Telegram bot** (via [BotFather](https://t.me/botfather)) and get the token.
- **Have an OpenAI account** (API key for Whisper and GPT-4).
- **Set up a Gmail account with OAuth2.**
- **Import the JSON template** into your automation platform.

## 🧩 Detailed Flow Architecture

### 1. Telegram Trigger

![workflown8ntelegramvoicebaptistefort.png](fileId:1953)

**Node:** Telegram Trigger  
This node listens to all **Message** events received by the specified bot (e.g., “BOT OFFICIEL BAPTISTE”).  
Whenever a user sends a voice message, the trigger fires automatically.

&gt; ⚠️ Only one Telegram trigger per bot is possible (API limitation).

**Key parameter:**  
- `Trigger On`: Message

### 2. Wait

**Node:** Wait  
Used to buffer or smooth out calls to avoid collisions if you receive several voice messages in a row.

### 3. Retrieve the Audio File

![workflowbaptistefortemailtelegramaudio.png](fileId:1952)

**Node:** Get a file  
- **Type:** Telegram (resource: `file`)
- **Parameter:**  
  - `fileId = {{$json["message"]["voice"]["file_id"]}}`  
This node fetches the voice file from Telegram received in step 1

### 4. Automatic Transcription (Whisper)

![baptistefortn8ntranscriptiontelegramvoice.png](fileId:1950)

**Node:** Transcribe a recording  
- **Resource:** audio  
- **Operation:** transcribe  
- **API Key:** Your OpenAI account  
The audio file is sent to OpenAI Whisper: the output is clean, accurate text ready to be processed.

### 5. Optional Wait (Wait1)

**Node:** Wait1  
Same purpose as step 2: useful if you want to buffer or add a delay to absorb processing time.

### 6. Structured Email Generation (GPT-4 + Output Parser)

**Node:** AI Agent  
This is the core of the flow:

- The transcribed text is sent to GPT-4 (or GPT-4.1-mini here, via OpenAI Chat Model)
- **Prompt used:**

    ```markdown
    You are an assistant specialized in writing professional emails.

    Based on the text below, you must: {{ $json.text }}

    1. Detect if there is a recipient's email address in the text (or something similar like "send to fort.baptiste.pro")
       - If it’s not a complete address, complete it by assuming it ends with `@gmail.com`.
    2. Understand the user's intent (resignation, refusal, application, excuse, request, etc.)
    3. Generate a relevant and concise email subject, faithful to the content
    4. Write a professional message, structured in HTML:
       - With a polite tone, adapted to the situation
       - Formatted with HTML tags (`<p>`, `<br>`, etc.)
       - No spelling mistakes in French
       - My first name is jeremy and if the text says he is not happy, specify the wish to resign

⚠️ You must always return your answer in the following strict JSON format, with no extra text:
    ```

    ```json
    {
      "email": "adresse@gmail.com",
      "subject": "Objet de l’email",
      "body": "<p>Contenu HTML de l’email</p>"
    }
    ```

Everything is strictly validated and formatted with the **Structured Output Parser** node.

### 7. Automatic Email Sending (Gmail)

**Node:** Send a message  
- **To:** `{{$json.output.email}}`
- **Subject:** `{{$json.output.subject}}`
- **HTML Body:** `{{$json.output.body}}`  
This node takes the JSON structure returned by the AI and sends the email via Gmail, to the right recipient, with the correct subject and full HTML formatting.

If you want to automate manual tasks, visit our French [Agence automatisation 0vni](https://www.0vni.fr/).

## 🔗 Nodes Used

Telegram, Telegram Trigger, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
