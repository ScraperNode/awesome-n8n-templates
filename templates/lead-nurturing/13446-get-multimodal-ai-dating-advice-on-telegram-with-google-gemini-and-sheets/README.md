# 💬 Get multimodal AI dating advice on Telegram with Google Gemini and Sheets

> ⚡ **61 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## **Rizz AI: The Multimodal Dating Assistant 💘**

**Rizz AI** is not just a chatbot; it's a full-featured, AI-powered **CRM for your dating life**. 

Built entirely in n8n, this workflow turns Telegram into a powerful "Wingman" that helps you craft the perfect reply, remember details about your matches, and optimize your dating strategy using **Google Gemini 1.5 Pro**.

![Chat Response Example](https://raw.githubusercontent.com/AlejandroSIlvaRodriguez/Assets/main/Assets/ChatResponse.png)

### **🔥 Key Features**
*   **👁️ Multimodal Vision:** Send a screenshot of a Tinder/Hinge profile or a WhatsApp chat, and the AI will analyze the text, subtext, and vibe to give you tactical advice.
*   **🗣️ Audio Analysis:** Forward voice notes, and the AI will transcribe and analyze the tone to tell you if they are interested.
*   **🧠 Long-Term Memory:** Remembers details about specific matches (e.g., "Sofia likes sushi") so you don't ask the same thing twice.
*   **📊 Lead Management (CRM):** Automatically tracks matching stage, interest level, and next steps in Google Sheets.
*   **🎨 Personalized Style:** Adapts advice to your specific "Rizz Style" (e.g., Mystery, Direct, Funny) defined in your profile.

![Menu Response Example](https://raw.githubusercontent.com/AlejandroSIlvaRodriguez/Assets/main/Assets/MenuResponse.png)

### **🛠️ How It Works**
1.  **Ingest:** You send text, audio, or images to your private Telegram Bot.
2.  **Process:** The workflow routes the input through **Gemini Vision** (for images) or **Whisper/Gemini** (for audio).
3.  **Retrieve:** It queries your **Google Sheet** to see if this person is a new lead or an existing match.
4.  **Reason:** The **AI Agent** (with tools) decides the best move: suggesting a reply, logging a red flag, or scheduling a date.
5.  **Respond:** You receive 3 draft options to copy-paste directly into your dating app.

### **📋 Setup Instructions**

#### **1. Google Sheets (Database)**
*   Make a copy of the **[Rizz AI Database Template](https://docs.google.com/spreadsheets/d/1JxoahgYNHc6nuWJ-VOsHlEzaKYxnksGFeYA0TKE4lWo/edit?usp=sharing)**.
*   Share/Connect your Google Drive credential in n8n.
*   Update the **Sheet ID** in the `Get Rizzler Profile` and other Sheet nodes.

#### **2. Telegram Bot**
*   Talk to @BotFather on Telegram to create a new bot.
*   Copy the **API Token** into the Telegram Trigger and Send Message nodes.

#### **3. Google Gemini**
*   Get a free API Key from [Google AI Studio](https://aistudio.google.com/).
*   Connect it to the **Google Gemini Chat Model** node.

![Profile Response Example](https://raw.githubusercontent.com/AlejandroSIlvaRodriguez/Assets/main/Assets/ProfileResoponce.png)

### **💡 Need Assistance?**
If you’d like help customizing or extending this workflow, feel free to reach out:

*   📧 **Email:** [johnsilva11031@gmail.com](mailto:johnsilva11031@gmail.com)
*   🔗 **LinkedIn:** [John Alejandro Silva Rodríguez](https://www.linkedin.com/in/john-alejandro-silva-rodriguez-48093526b/)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
