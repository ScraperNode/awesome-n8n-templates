# 💬 Hotel receptionist with WhatsApp, Gemini model-switching, Redis & Google Sheets

> ⚡ **3,155 views** · 💬 [Support Chatbots](../)

## Description

### Overview  
This project is an **AI-powered hotel receptionist** built using **n8n**, designed to handle guest queries automatically through **WhatsApp**.  
It integrates **Google Gemini**, **Redis**, **MySQL**, and **Google Sheets** via **LangChain** to create an intelligent conversational system that understands and answers booking-related questions in real time.  

A standout feature of this workflow is its **AI model-switching system** — it dynamically assigns users to different Gemini models, balancing traffic, improving performance, and reducing API costs.  

---

## How It Works  

### WhatsApp Trigger  
The workflow starts when a hotel guest sends a message through WhatsApp.  
The system captures the **message text**, **contact details**, and **session information** for further processing.  

### Redis-Based Model Management  
- The workflow checks **Redis** for a saved record of the user’s previously assigned AI model.  
- If no record exists, a **Model Decider** node assigns a new model (e.g., Gemini 1 or Gemini 2).  
- Redis then stores this model assignment for an hour, ensuring consistent routing and controlled traffic distribution.  

### Model Selector  
The **Model Selector** routes each user’s request to the correct Gemini instance, enabling parallel execution across multiple AI models for **faster response times** and **cost optimization**.  

### AI Agent Logic  
The **LangChain AI Agent** serves as the system’s reasoning core. It:  
- Interprets guest questions such as:  
  - “Who checked in today?”  
  - “Show me tomorrow’s bookings.”  
  - “What’s the price for a deluxe suite for two nights?”  
- Generates safe, **read-only SQL SELECT queries**.  
- Fetches the requested data from the **MySQL database**.  
- Combines this with dynamic pricing or promotions from **Google Sheets**, if available.  

### Response Delivery  
Once the AI Agent formulates an answer, it sends a natural-sounding message back to the guest via WhatsApp, completing the interaction loop.  

---

## Setup & Requirements  

### Prerequisites  
Before deploying this workflow, ensure the following:  
- **n8n Instance** (local or hosted)  
- **WhatsApp Cloud API** with messaging permissions  
- **Google Gemini API Key** (for both models)  
- **Redis Database** for user session and model routing  
- **MySQL Database** for hotel booking and guest data  
- **Google Sheets Account** (optional, for pricing or offer data)  

### Step-by-Step Setup  

1. **Configure Credentials**  
   - Add all API credentials in **n8n → Settings → Credentials** (WhatsApp, Redis, MySQL, Google).  

2. **Prepare Databases**  
   - **MySQL Tables Example:**  
     - `bookings(id, guest_name, room_type, check_in, check_out)`  
     - `rooms(id, type, rate, status)`  
   - Ensure the MySQL user has **read-only** permissions.  

3. **Set Up Redis**  
   - Create Redis keys for each user:  
     ```
     llm-user:&lt;whatsapp_id&gt; = { "modelIndex": 0 }
     ```  
   - TTL: 3600 seconds (1 hour).  

4. **Connect Google Sheets (Optional)**  
   - Add your sheet under **Google Sheets OAuth2**.  
   - Use it to manage room rates, discounts, or seasonal offers dynamically.  

5. **WhatsApp Webhook Configuration**  
   - In Meta’s Developer Console, set the webhook URL to your n8n instance.  
   - Select message updates to trigger the workflow.  

6. **Testing the Workflow**  
   - Send messages like “Who booked today?” or a voice message.  
   - Confirm responses include real data from MySQL and contextual replies.  

---

## Key Features  

- **Text & voice support** for guest interactions  
- **Automatic AI model-switching** using Redis  
- **Session memory** for context-aware conversations  
- **Read-only SQL query generation** for database safety  
- **Google Sheets integration** for live pricing and availability  
- **Scalable design** supporting multiple LLM instances  

---

## Example Guest Queries  

| Guest Query | AI Response Example |
|--------------|--------------------|
| “Who checked in today?” | “Two guests have checked in today: Mr. Ahmed (Room 203) and Ms. Priya (Room 410).” |
| “How much is a deluxe room for two nights?” | “A deluxe room costs $120 per night. The total for two nights is $240.” |
| “Do you have any discounts this week?” | “Yes! We’re offering a 10% weekend discount on all deluxe and suite rooms.” |
| “Show me tomorrow’s check-outs.” | “Three check-outs are scheduled tomorrow: Mr. Khan (101), Ms. Lee (207), and Mr. Singh (309).” |

---

## Customization Options  

### 🧩 Model Assignment Logic  
You can modify the **Model Decider node** to:  
- Assign models based on user load, region, or priority level.  
- Increase or decrease TTL in Redis for longer model persistence.  

### 🧠 AI Agent Prompt  
Adjust the **system prompt** to control tone and response behavior — for example:  
- Add multilingual support.  
- Include upselling or booking confirmation messages.  

### 🗂️ Database Expansion  
Extend MySQL to include:  
- Staff schedules  
- Maintenance records  
- Restaurant reservations  
Then link new queries in the AI Agent node for richer responses.  

---

## Tech Stack  

- **n8n** – Workflow automation & orchestration  
- **Google Gemini (PaLM)** – LLM for reasoning & generation  
- **Redis** – Model assignment & session management  
- **MySQL** – Booking & guest data storage  
- **Google Sheets** – Dynamic pricing reference  
- **WhatsApp Cloud API** – Messaging interface  

---

## Outcome  
This workflow demonstrates how **AI automation** can transform hotel operations by combining **WhatsApp communication**, **database intelligence**, and **multi-model AI reasoning**.  
It’s a production-ready foundation for **scalable, cost-optimized, AI-driven hospitality solutions** that deliver fast, accurate, and personalized guest interactions.  
````

## 🔗 Nodes Used

Redis, WhatsApp Business Cloud, AI Agent, Simple Memory, WhatsApp Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
