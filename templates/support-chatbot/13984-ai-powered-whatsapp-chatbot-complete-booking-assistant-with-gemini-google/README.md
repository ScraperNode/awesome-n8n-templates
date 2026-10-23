# 💬 AI-Powered WhatsApp Chatbot 🤖📅: Complete Booking Assistant with Gemini & Google

> ⚡ **3,230 views** · 💬 [Support Chatbots](../)

## Description

This workflow implements an **AI-powered WhatsApp booking assistant** for a hair salon. The system allows customers to **book, reschedule, or cancel appointments automatically via text or voice messages on WhatsApp**.

The workflow supports **both text and voice messages**. 

An AI agent manages the conversation logic, determines the user's intent, and calls the appropriate tools to perform actions such as checking availability, creating appointments, rescheduling bookings, or canceling events.

The system also includes guardrails to filter unsafe or irrelevant inputs and escalation mechanisms to notify the team when a request falls outside supported tasks.


---

### Key Advantages

#### 1. ✅ 24/7 Automated Appointment Booking

Customers can book, reschedule, or cancel appointments at any time through WhatsApp without requiring manual staff intervention.


#### 2. ✅ Multi-Modal Communication (Text + Voice)

The workflow supports both **text messages and voice messages**. Audio messages are automatically transcribed and processed by the AI assistant.

#### 3. ✅ Intelligent AI Assistant

An AI agent manages the conversation, understands user intent, and automatically performs actions such as checking calendar availability or creating appointments.


#### 4. ✅ Real-Time Calendar Integration

The assistant connects directly to **Google Calendar** to:

* check available time slots
* create new bookings
* update existing appointments
* cancel reservations

This ensures real-time accuracy.


#### 5. ✅ Automatic Client Management

Customer information such as **phone number, name, and service type** is stored and updated in **Google Sheets**, creating a lightweight CRM database.


#### 6. ✅ Conversation Memory

The system stores chat history in **PostgreSQL**, allowing the AI assistant to maintain context during conversations and deliver a more natural experience.


#### 7. ✅ Smart Error Handling and Escalation

If the AI cannot handle a request (for example, a question unrelated to appointments), the workflow automatically:

* notifies the team via email
* escalates the conversation for human assistance.

#### 8. ✅ Secure and Controlled AI Responses

Guardrails are implemented to prevent irrelevant or unsafe responses, ensuring that the assistant follows defined policies and tasks.


#### 9. ✅ Omnichannel Architecture

The workflow is designed to work with:

* WhatsApp messages
* chatbot interface (chat trigger)

This allows the same logic to power multiple communication channels.

#### 10. ✅ Scalable Automation

The system is fully automated and can handle **multiple simultaneous conversations**, reducing operational workload and improving customer service efficiency.

---


### **How it works**

1.  **Input Handling (WhatsApp & Chat):**
    *   It listens for incoming messages from either a **WhatsApp Trigger** or a **Chat Trigger**.
    *   **WhatsApp:** It processes both **text messages** and **voice notes**. If a voice note is received, it automatically downloads the audio, transcribes it using OpenAI (Whisper), and converts it into text for the AI to process.
    *   The user's phone number (for WhatsApp) or session ID (for Chat) is stored as a `sessionId` to maintain conversation context.

2.  **Guardrails (Security & Policy):**
    *   Before the message reaches the main AI agent, it passes through a **Guardrails** node (using Google Gemini). This acts as a safety filter to check for jailbreak attempts or inappropriate content, ensuring the conversation stays within company policies.

3.  **AI Agent (The Virtual Assistant):**
    *   The cleaned-up message is sent to the **AI Agent** ("Virtual Assistant").
    *   The agent is prompted to act as "Emma" and follows strict instructions:
        1.  **Identify User:** It first uses the `New client` tool to check a Google Sheet to see if the user is already registered.
        2.  **Manage Appointments:** Based on the user's request (book, reschedule, cancel), it intelligently calls specific tools in the correct order.
        3.  **Date Logic:** It is aware of the current date and time to calculate correct future dates (e.g., interpreting "this Thursday").

4.  **Tool Execution (Actions):**
    *   The agent has access to several tools to perform actions:
        *   **Google Sheets (`New client`, `Add client`):** To check if a client exists and add new clients to a spreadsheet.
        *   **Google Calendar (`Get events`, `Create event`, `Update event`, `Delete event`):** To check availability and manage appointments. The `Get events` tool is configured to look for slots in the next 30 days.
        *   **Gmail (`Send Email`):** To notify the team if a user asks for something outside the scope (e.g., pricing, product questions).
        *   **WhatsApp HITL / Chat HITL (`Escalation`):** To hand over the conversation to a human agent for complex requests.

5.  **Response Delivery:**
    *   The AI agent's text response is routed back to the user.
    *   **On WhatsApp:** It intelligently handles the response format. If the original message was text, it sends a text reply. If the original message was a voice note, it uses OpenAI's TTS to convert the text reply into an audio message and sends that back.

---

### **Setup steps**

To get this workflow running, you need to configure the following credentials and nodes:

1.  **Configure Credentials:**
    *   **Google Calendar OAuth2:** Connect your Google account  (used in Calendar nodes).
    *   **Google Sheets OAuth2:** Connect your Google account to access the spreadsheet.
    *   **Gmail OAuth2:** Connect your Google account to send notification emails from `xxx@xxx.com`.
    *   **WhatsApp API:** Connect your WhatsApp Business API credentials (Phone Number ID).
    *   **OpenAI API (OpenRouter):** Provide your API key for audio transcription and text-to-speech.
    *   **Google Gemini API:** Provide your API keys for the main AI model (`Google Gemini Chat Model`) and the Guardrails model (`Google Gemini Chat Model1`).
    *   **Postgres:** Configure the connection to your Postgres database for chat memory.

2.  **Configure Google Sheets:**
    *   Create a Google Sheet.
    *   Update the **Document ID** in the `New client` and `Add client` nodes with your sheet's ID.
    *   Ensure the sheet has columns for `Phone Number`, `Client`, and `Service`.

3.  **Configure Google Calendar:**
    *   Verify that the calendar ID  in the Calendar nodes is correct and accessible.

4.  **Configure WhatsApp Triggers & Actions:**
    *   The `WhatsApp Trigger` node needs to be connected to your WhatsApp Business App.
    *   The `Send message` and `Send audio` nodes must have the correct `Phone Number ID` for your WhatsApp Business number.

5.  **Update Email Recipient:**
    *   In the `Send Email` tool (for escalations), change the `sendTo` email address from `xxx@xxx.com` to the actual email of the team that should receive these notifications.

6.  **Review AI Prompts:**
    *   Open the **"Virtual Assistant"** (AI Agent) node and review the system message. Update the salon name ("Cuts & Styles"), stylist name ("Alex Carter"), and address to match your business.
    *   Check the **"Guardrails"** node to adjust the safety threshold if necessary.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Gmail, WhatsApp Business Cloud, AI Agent, Calculator, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
