# 💬 Automate HVAC service scheduling with AI agent, Google Calendar and Gmail

> ⚡ **976 views** · 💬 [Support Chatbots](../)

## Description

**Instant, automated scheduling.** This AI Scheduling Agent manages real-time appointments, availability checks, and rescheduling across Google Calendar and Sheets, eliminating human hold times.

---

### 🎯 Problem Statement

Traditional call center or online booking systems often lack the flexibility to handle complex, multi-step customer requests like rescheduling, checking dynamic availability across multiple time slots, or handling context-aware conversational booking. This leads to friction, missed bookings, and high administrative overhead for service companies like HVAC providers.

---

### ✨ Solution

This workflow deploys a sophisticated **AI Scheduling Agent** that acts as a virtual receptionist. It uses the Language Model's (LLM) "tool-use" capability to intelligently execute complex, sequential business logic (e.g., check availability _before_ booking, find existing events _before_ rescheduling) and manages the entire lifecycle of a service appointment, from initial inquiry to final confirmation.

---

### ⚙️ How It Works (Multi-Step Execution)

1.  **Trigger:** A customer request (e.g., from an external voice or text platform) hits the **Webhook Trigger** with intent details (e.g., tool\_request: 'reschedule\_appointment').
    
2.  **Agent Logic:** The **Receptionist Agent** uses a strict system prompt and its internal tools to formulate an execution plan. It maintains conversational state via the **simple-memory** node.
    
3.  **Tool Execution (Example: Reschedule):** The Agent executes a predefined sequence of private tools:
    
    *   **find\_old\_event**: Locates the existing booking ID using the customer's email.
        
    *   **check\_calendar**: Verifies the proposed new time is available (2-hour window).
        
    *   **reschedule\_appointment**: Updates the calendar event.
        
    *   **log\_lead**: Updates the central Google Sheet.
        
4.  **Synchronous Response:** The Agent sends a confirmation or follow-up question via the **respond\_to\_webhook** node.
    
5.  **Asynchronous Confirmation:** The **log\_lead** action triggers a secondary workflow that composes a professional email via a second LLM (**Anthropic**) and sends it to the customer via **Gmail**, followed by an internal alert via **Google Chat**.
    
---

### 🛠️ Setup Steps

1.  **Credentials:**
    
    *   **AI/LLM:** Configure credentials for the Language Model used (**OpenAI** or **Gemini**) for the core Agent.
        
    *   **Google Services:** Set up OAuth2 credentials for **Google Calendar** (for booking/checking), **Google Sheets** (for logging), and **Gmail** (for customer confirmation).
        
2.  **Google Calendar:** Specify the technician's calendar ID (bhuvaneshx13@gmail.com in the template) in all Calendar nodes.
    
3.  **Google Sheets:** Create a new Google Sheet to serve as the **Lead Log** and update the Document ID and Sheet Name in the **log\_lead** and **log\_lead\_trigger** nodes.
    
4.  **Tool Configuration:** Review and customize the Agent's system prompt in the **Receptionist** node to align time zone rules (currently **Asia/Kolkata - IST**) and business hours (9:00 AM to 6:00 PM) with your operations.
 
---

### ✅ Benefits

1.  **Increased Efficiency:** Fully automates complex scheduling and rescheduling, freeing up human staff.
    
2.  **Contextual Service:** AI handles multi-turn conversations and adheres to strict business rules (e.g., 2-hour slots, maximum tool usage).
    
3.  **Data Integrity:** Ensures all bookings are immediately logged to Google Sheets, maintaining a centralized record (CRM).
    
4.  **Professional Flow:** Provides immediate confirmation to the customer via email and instant notification to the internal team via chat.
    
---

### 🚀 Other Use Cases

The underlying multi-step, tool-execution pattern is highly versatile and can be adapted for any service industry requiring complex, rules-based scheduling:

*   **Real Estate:** Scheduling property viewings (Check agent availability → Book viewing → Send directions).

*   **HVAC Services:** Managing maintenance and repair visits (Diagnose issue type → Match with qualified technician → Check part availability → Schedule visit → Send service confirmation).
    
*   **Medical/Dental:** Booking patient appointments (Check insurance eligibility → Check doctor availability → Book → Send pre-visit forms).
    
*   **Legal Services:** Intake for consultations (Collect client issue → Check specialist availability → Book → Send retainer agreement).
    
*   **Automotive Repair:** Scheduling service bays (Check bay and mechanic availability → Book → Update internal service board).

## 🔗 Nodes Used

Webhook, Gmail, Google Chat, Google Sheets Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
