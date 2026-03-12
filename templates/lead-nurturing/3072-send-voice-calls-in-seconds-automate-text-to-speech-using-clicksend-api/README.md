# 💬 Send voice calls in seconds: Automate Text-To-Speech using ClickSend API

> ⚡ **2,828 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This workflow automates the process of sending **text-to-speech (TTS) voice calls** using API. It allows users to submit a form with the message content, recipient's phone number, voice type, and language, and then sends a voice call with the provided text. 

This workflow is a simple yet powerful way to automate text-to-speech voice calls using API. It’s ideal for notifications, reminders, or any scenario where voice communication is needed.

Below is a breakdown of the workflow:

---

#### **1. How It Works**
The workflow is designed to send voice calls with text-to-speech functionality. Here's how it works:

1. **Form Submission**:
   - The workflow starts with a **Form Trigger** node, where users submit a form with the following fields:
     - **Body**: The text message to be converted to speech (max 600 characters).
     - **To**: The recipient's phone number (including the international prefix, e.g., +39xxxxxxxxxx).
     - **Voice**: The voice type (male or female).
     - **Lang**: The language for the voice call (e.g., en-us, it-it, fr-fr, etc.).
   - Once the form is submitted, the workflow is triggered.

2. **Send Voice Call**:
   - The **Send Voice** node sends a POST request to the **ClickSend API** (`https://rest.clicksend.com/v3/voice/send`).
   - The request includes:
     - The **text message** (Body) to be converted to speech.
     - The **recipient's phone number** (To).
     - The **voice type** (Voice).
     - The **language** (Lang).
     - **Machine detection** is enabled to detect if the call is answered by a machine.
   - The API processes the request and initiates a voice call to the specified number, where the text is read aloud by the selected voice.

3. **Outcome**:
   - The recipient receives a voice call, and the submitted text is read aloud in the chosen voice and language.

---

#### **2. Set Up Steps**
To set up and use this workflow in n8n, follow these steps:

1. **Register on ClickSend**:
   - Go to [ClickSend](https://clicksend.com/?u=586989) and create an account.
   - Obtain your **API Key** and take advantage of the **2 € free credits** provided.

2. **Configure ClickSend API in n8n**:
   - In the **Send Voice** node, set up **HTTP Basic Authentication**:
     - **Username**: Use the username you registered with on ClickSend.
     - **Password**: Use the **API Key** provided by ClickSend.

3. **Set Up the Form Trigger**:
   - The **Form Trigger** node is pre-configured with fields for:
     - **Body**: The text message to be converted to speech.
     - **To**: The recipient's phone number.
     - **Voice**: Choose between male or female voice.
     - **Lang**: Select the language for the voice call.
   - Customize the form fields if needed (e.g., add more languages or voice options).

4. **Test the Workflow**:
   - Submit the form with the required details (text, phone number, voice, and language).
   - The workflow will send a voice call to the specified number, and the recipient will hear the text read aloud.

5. **Optional Customization**:
   - Modify the workflow to include additional features, such as:
     - Adding more languages or voice options.
     - Sending multiple voice calls in bulk.
     - Integrating with other APIs or services for advanced use cases.
---



### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
