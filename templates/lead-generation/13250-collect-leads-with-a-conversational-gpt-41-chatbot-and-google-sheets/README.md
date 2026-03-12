# 🎣 Collect leads with a conversational GPT-4.1 chatbot and Google Sheets

> ⚡ **212 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Description

A natural conversational AI chatbot that collects lead information (Name, Phone, Email, Message) one question at a time without feeling like a form. Uses session-based memory to track conversations, intelligently asks only for missing details, and saves complete leads to Google Sheets automatically.

---

## What this workflow does

This workflow creates a human-like booking assistant that gathers lead information through natural conversation instead of traditional forms. The AI chatbot asks ONE question at a time, remembers previous answers using session memory, never repeats questions, and only saves data to Google Sheets when all four required fields (Name, Phone Number, Email Address, User Message) are confidently collected. The conversation feels natural and friendly—users engage with the bot as if chatting with a real person, dramatically improving completion rates compared to static forms.

Perfect for booking systems, consultation requests, event registrations, customer support intake, or any scenario where you need to collect contact information without friction.

---

## Key features

**One question at a time:** The AI never overwhelms users with multiple questions. It asks for Name, then Phone, then Email, then Message—sequentially and naturally, based on what's still missing from the conversation.

**Session-based memory:** Uses timestamp-based session tracking so the AI remembers the entire conversation context. If a user says "My name is John" in message 1, the AI won't ask for the name again in message 5.

**Smart field detection:** The AI automatically detects which details have been collected and which are still missing. It adapts the conversation flow dynamically instead of following a rigid script.

**Natural language processing:** Handles variations in user input ("John Doe", "I'm John", "Call me John") and validates data intelligently before saving.

**Complete data guarantee:** Only writes to Google Sheets when all 4 required fields are present. No partial or incomplete leads clutter your tracking sheet.

**Webhook-based integration:** Works with any website, app, or platform that can send HTTP requests. Integrate with chatbots, contact forms, booking widgets, or custom applications.

**Instant responses:** Real-time conversation with sub-second response times. Users get immediate replies, maintaining engagement throughout the lead collection process.

---

## How it works

### 1. User initiates conversation via webhook
A user sends a message through your website chat widget, contact form, or booking interface. This triggers a webhook that passes the message along with query parameters (name, email, phone, message, timestamp, source) to n8n.

### 2. AI Agent analyzes conversation state
The Conversational Lead Collection Agent receives the user's message and checks the current state:
- Which fields are already collected (from previous messages in this session)?
- Which fields are still missing?
- What should be asked next?

The AI uses the system prompt to understand its role as a booking assistant for "Spark Writers' Retreat" and follows strict conversation rules.

### 3. Session memory tracks context
The Buffer Window Memory node uses the timestamp from the webhook as a unique session ID. This allows the AI to:
- Remember all previous messages in this conversation
- Access previously collected information (name, phone, email)
- Never ask the same question twice
- Maintain conversation continuity even if the user takes breaks

### 4. One question at a time
Based on what's missing, the AI asks exactly ONE question in natural, friendly language:
- If Name is missing → "Hi! What's your name?"
- If Phone is missing → "Great! And what's your phone number?"
- If Email is missing → "Perfect! Could you share your email address?"
- If Message is missing → "Thanks! How can I help you today?"

The AI adapts its language based on previous conversation flow—it doesn't sound robotic or repetitive.

### 5. Data validation and collection
As the user responds, the AI:
- Validates input (checks if phone number looks valid, email has @ symbol, etc.)
- Extracts the information from natural language responses
- Stores it temporarily in session memory
- Continues asking until all 4 fields are complete

If the user provides unclear input, the AI politely asks again: "I didn't quite catch that. Could you share your phone number?"

### 6. Save to Google Sheets (when complete)
**Critical rule:** The AI only uses the Google Sheets tool AFTER all four details are confidently collected. This prevents partial or incomplete leads from cluttering your database.

When all fields are present, the AI:
- Writes exactly ONE row to Google Sheets
- Maps data: Name → Name, Phone → Phone No., Email → Email, Message → Message
- Uses Timestamp as the unique identifier (matching column)
- Updates existing rows if the same timestamp appears again (prevents duplicates)

### 7. Confirmation message
After successfully saving, the AI sends a polite thank you:

*"Thank you! 🙏 We've received your details and our team will get back to you shortly."*

The AI never mentions Google Sheets, tools, backend systems, or automation—it maintains the illusion of human conversation.

### 8. Response delivery
The final AI response is sent back to the user via the webhook response. Your website or app displays this message in the chat interface, completing the conversation loop.

---

## Setup requirements

**Tools you'll need:**

- Active n8n instance (self-hosted or n8n Cloud)
- Google Sheets with OAuth access for lead storage
- OpenAI API key (GPT-4.1-mini access)
- Website or app with chat interface (or any platform that can send webhooks)

**Estimated setup time:** 15–20 minutes

---

## Configuration steps

### 1. Connect Google Sheets
- In n8n: **Credentials → Add credential → Google Sheets OAuth2 API**
- Complete OAuth authentication
- Create a Google Sheet for lead tracking with these columns:
  - **Timestamp** (unique session identifier)
  - **Name**
  - **Phone No.**
  - **Email**
  - **Message**
- Open **"Save Lead to Google Sheets"** node
- Select your Google Sheet and the correct sheet tab
- Verify column mapping matches your sheet structure

### 2. Add OpenAI API credentials
- Get API key: https://platform.openai.com/api-keys
- In n8n: **Credentials → Add credential → OpenAI API**
- Paste your API key
- Open **"OpenAI GPT-4.1 Mini Language Model"** node
- Select your OpenAI credential
- Ensure model is set to **gpt-4.1-mini**

### 3. Copy webhook URL
- Open **"Receive User Message via Webhook"** node
- Copy the **Webhook URL** (format: `https://your-n8n.cloud/webhook/[webhook-id]`)
- This is the endpoint your website or app will send messages to

### 4. Integrate with your chat interface
You need to send HTTP POST/GET requests to the webhook URL with these query parameters:

```
GET https://your-n8n.cloud/webhook/[id]?name=[name]&email=[email]&phone=[phone]&message=[user_message]&timestamp=[unique_timestamp]&source=[source]
```

**Query parameter details:**
- `name`: User's name (empty string if not yet collected)
- `email`: User's email (empty string if not yet collected)
- `phone`: User's phone number (empty string if not yet collected)
- `message`: Current user message (required)
- `timestamp`: Unique session ID (use ISO timestamp or UUID)
- `source`: Source identifier (e.g., "website_chat", "booking_form")

**Example integration (JavaScript):**
```javascript
const sessionId = new Date().toISOString();
const userMessage = "Hi, I want to book a retreat";

fetch(`https://your-n8n.cloud/webhook/[id]?message=${encodeURIComponent(userMessage)}&timestamp=${sessionId}&name=&email=&phone=&source=website_chat`)
  .then(res =&gt; res.json())
  .then(data =&gt; {
    // Display AI response in your chat UI
    console.log(data.output);
  });
```

### 5. Customize the AI assistant
Open **"Conversational Lead Collection Agent"** node and edit the system message to:
- Change the business name (currently "Spark Writers' Retreat")
- Modify conversation tone (formal vs. casual)
- Adjust the fields being collected
- Change the final thank you message

### 6. Test the workflow
- Activate the workflow (toggle to **Active** at the top)
- Send a test message to the webhook URL
- Verify the AI responds appropriately
- Continue the conversation by sending follow-up messages with the same timestamp
- Check that:
  - AI asks for missing fields only
  - Session memory persists across messages
  - Lead saves to Google Sheets when all 4 fields are collected
  - Thank you message appears after saving

---

## Use cases

**Booking and reservations:** Hotels, retreat centers, event venues, or appointment-based businesses collect guest details conversationally instead of long booking forms. Higher completion rates mean more confirmed bookings.

**Lead generation for services:** Agencies, consultants, coaches, or freelancers capture qualified leads through natural conversation. Users are more likely to complete the process when it feels like chatting instead of form-filling.

**Customer support intake:** Support teams collect issue details, contact information, and problem descriptions through chat before routing to the right agent. All data automatically logged in Google Sheets for ticketing.

**Event registration:** Conference organizers, workshop hosts, or webinar providers gather attendee information without friction. The conversational approach encourages sign-ups even from mobile users who hate forms.

**Sales qualification:** Sales teams use the chatbot to qualify leads by collecting basic information and understanding requirements before human handoff. Complete context stored in Google Sheets for CRM integration.

**Consultation requests:** Professional services (legal, medical, financial) collect client details and initial consultation requests through friendly conversation, reducing no-show rates by building rapport early.

---

## Customization options

### Change collected fields
Open **"Conversational Lead Collection Agent"** node and modify the system message:
- Add new fields (e.g., Company Name, Budget, Preferred Date)
- Remove optional fields (e.g., make Message optional)
- Update the field names and data mapping

Then update the Google Sheets node to include the new columns.

### Adjust conversation tone
In the system message, change conversation style:
- **Formal:** "May I please have your full name?"
- **Casual:** "What's your name?"
- **Friendly:** "Hey! What should I call you?"

### Add validation rules
Enhance the system prompt with specific validation:
- Phone format (e.g., 10 digits, US format)
- Email domain restrictions (e.g., only business emails)
- Name length requirements
- Message minimum word count

### Connect to CRM or email
After **"Save Lead to Google Sheets"** node, add:
- **HTTP Request node** to send data to your CRM API
- **Email node** to notify sales team of new leads
- **Slack/Discord node** for real-time team alerts
- **Webhook node** to trigger other workflows

### Multi-language support
Modify the system prompt to respond in the user's language:
- Add language detection logic
- Translate questions and responses
- Update thank you message for each language

### Add conversation analytics
Insert a **Set node** before saving to track:
- Number of messages per lead
- Time to completion
- Drop-off points
- Source performance

---

## Troubleshooting

### AI repeats questions already answered
- **Memory not persisting:** Verify the **"Session Memory with Timestamp"** node is using the correct timestamp from the webhook query params.
- **Timestamp changing:** Ensure your chat interface sends the SAME timestamp for all messages in one conversation. Generate it once and reuse it.
- **Memory window size:** Increase the buffer window size in the memory node if conversations are very long.

### Leads not saving to Google Sheets
- **Partial data:** The AI only saves when all 4 fields are collected. Check your test conversation actually provided all required information.
- **OAuth expired:** Re-authenticate Google Sheets credentials.
- **Sheet permissions:** Verify the connected Google account has edit access to the sheet.
- **Column names mismatch:** Ensure sheet column names exactly match the mapping in the Google Sheets node (case-sensitive).

### AI saves incomplete data
- **System prompt not followed:** Review the "Tool usage (VERY IMPORTANT)" section in the system message. Ensure it clearly states to only use Google Sheets after all fields are collected.
- **Validation too lenient:** The AI might be guessing missing fields. Strengthen validation rules in the system prompt.

### Webhook not receiving messages
- **URL incorrect:** Double-check the webhook URL in your integration code matches the n8n webhook URL exactly.
- **CORS issues:** If calling from a browser, ensure n8n allows cross-origin requests or use server-side integration.
- **Query params missing:** Verify all required parameters (message, timestamp) are included in the request.

### AI responses too slow
- **OpenAI API latency:** GPT-4.1-mini typically responds in 1-3 seconds. If slower, check OpenAI API status.
- **Network delays:** Verify n8n instance has good connectivity.
- **Memory lookup slow:** Reduce buffer window size if storing hundreds of messages.

### Session memory not working
- **Timestamp format inconsistent:** Use ISO format (e.g., 2026-01-28T14:38:23.720Z) and ensure it's identical across messages.
- **Memory node misconfigured:** Check the session key expression in **"Session Memory with Timestamp"** node references the correct webhook query param.

---

## Resources

- [n8n documentation](https://docs.n8n.io/)
- [OpenAI GPT-4 API](https://platform.openai.com/docs/models/gpt-4)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [n8n Webhook node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)
- [n8n AI Agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/)
- [Buffer Window Memory](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorybufferwindow/)

---

## Support

Need help or custom development?

📧 Email: [info@incrementors.com](info@incrementors.com) 
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, Webhook, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
