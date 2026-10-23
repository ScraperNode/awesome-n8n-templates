# 💬 Schedule appointments from AI voice calls with VAPI, OpenAI, and Google Calendar

> ⚡ **15 views** · 💬 [Support Chatbots](../)

## Description

## DESCRIPTION
Automate appointment booking through voice calls by integrating VAPI voice agent with AI-powered calendar management. This workflow receives scheduling requests via webhook, uses OpenAI to intelligently check availability, books appointments in Google Calendar, and responds in real-time during the phone call.

---

## KEY FEATURES

**Real-time voice scheduling:** Processes appointment requests during live phone calls with instant confirmation, eliminating callback delays and manual scheduling

**AI-powered decision making:** OpenAI GPT-4.1 Mini intelligently interprets caller requests, checks calendar availability, and determines optimal booking slots automatically

**Google Calendar integration:** Seamlessly connects to Google Calendar with two specialized tools - availability checker and appointment booking - for automated calendar management

**Webhook-based communication:** Receives structured data from VAPI voice agent including name, phone, service type, address, priority level, and scheduling status

**Eastern timezone support:** All appointments are automatically timestamped using America/New_York timezone for accurate scheduling across regions

**Tool-use AI architecture:** AI agent has direct access to calendar tools, allowing it to make intelligent decisions based on real availability data

---

## WHAT THIS WORKFLOW DOES

This workflow acts as an intelligent backend for voice-based appointment scheduling. When a customer calls your business and speaks to a VAPI voice agent about booking an appointment, the voice agent sends the scheduling details to this n8n workflow via webhook. The AI assistant powered by OpenAI GPT-4.1 Mini receives the request, checks your Google Calendar for availability during the requested time slot, and automatically books the appointment if available. The workflow then sends a confirmation response back to the voice agent, which can immediately confirm the booking to the caller while they're still on the phone.

Perfect for service businesses, medical offices, consultation services, and any organization using VAPI for phone automation who want to eliminate manual appointment scheduling and provide instant booking confirmations to customers.

---

## INPUT

- Webhook POST request from VAPI voice agent
- Scheduling details: name, phone, service type, address
- Priority level (P1, P2, etc.)
- Status flags (AfterHours, Regular, etc.)
- Requested appointment time and date

---

## PROCESSING

**Step 1: Receive scheduling request**
The workflow receives a webhook POST request from the VAPI voice agent containing structured JSON data with customer details, service type, requested time, address, and priority level.

**Step 2: AI processes the request**
OpenAI GPT-4.1 Mini AI agent analyzes the scheduling request and determines the appropriate action based on business rules, priority levels, and calendar availability.

**Step 3: Check calendar availability**
The AI uses the "Check Calendar Availability" tool to query Google Calendar and verify if the requested time slot is available for booking.

**Step 4: Book the appointment**
If the slot is available, the AI uses the "Book Appointment in Calendar" tool to create a new calendar entry with a 3-hour default duration and all customer details.

**Step 5: Send real-time response**
The workflow immediately responds to the VAPI voice agent with booking confirmation or alternative availability, allowing the agent to inform the caller during the same phone call.

---

## OUTPUT

- Webhook response with booking confirmation status
- New appointment created in Google Calendar
- Calendar entry with customer name, phone, service details
- Real-time availability status for the voice agent
- Immediate caller confirmation during the phone call

---

## SETUP INSTRUCTIONS

### Prerequisites

- n8n instance (cloud or self-hosted)
- VAPI voice agent account with webhook support
- Google Calendar with OAuth2 access
- OpenAI API key (GPT-4.1 Mini recommended)
- Active phone number connected to VAPI

---

### Step 1: Import the Workflow

1. Download or copy the workflow JSON
2. In n8n, go to **Workflows → Import from file / JSON**
3. Import the workflow
4. Review the imported nodes and connections

---

### Step 2: Configure Credentials

Set up the required credentials inside n8n's credential manager:

- **Google Calendar OAuth2:** For checking availability and booking appointments
- **OpenAI API:** For GPT-4.1 Mini AI agent processing

**Important:** No credentials are hardcoded. All must be connected via n8n's credential manager.

---

### Step 3: Configure Google Calendar

1. Open both calendar tool nodes:
   - "Check Calendar Availability"
   - "Book Appointment in Calendar"
2. Update the calendar email address to your target calendar
3. Verify OAuth2 connection is active
4. Test calendar access by running a manual test

---

### Step 4: Configure VAPI Webhook Integration

1. Copy the webhook URL from the "Receive Scheduling Request from VAPI" node
2. Log into your VAPI dashboard
3. Navigate to your voice agent's tool configuration
4. Add a new webhook tool called `scheduling_tool`
5. Paste the n8n webhook URL
6. Configure the webhook to send POST requests with JSON data
7. Map voice agent variables to webhook payload:
   - `name`: Customer name from call
   - `phone`: Customer phone number
   - `service`: Service type requested
   - `address`: Customer address
   - `priority`: Priority level (P1, P2, etc.)
   - `status`: Call status (Regular, AfterHours, etc.)

---

### Step 5: Customize AI System Prompt

1. Open "Process Scheduling with AI Assistant" node
2. Review the system message in options
3. Customize business rules:
   - Service types offered
   - Priority handling logic
   - After-hours scheduling rules
   - Default appointment duration
4. Adjust timezone if not using Eastern time
5. Add specific instructions for your business

---

### Step 6: Configure Appointment Duration

1. Open "Book Appointment in Calendar" tool node
2. Review the `timeMax` field (default: 3 hours after start time)
3. Adjust duration based on your service requirements
4. Use `$fromAI()` function to let AI determine duration dynamically
5. Test with different service types

---

### Step 7: Test the Workflow

**Test with webhook simulator:**
1. Use a tool like Postman or curl
2. Send a POST request to your webhook URL
3. Use this test payload:

```json
{
  "name": "Test Customer",
  "phone": "919-555-0123",
  "service": "Consultation",
  "address": "123 Main St, Raleigh, NC 27601",
  "priority": "P2",
  "status": "Regular",
  "source": "SchedulingAgent"
}
```

4. Verify the workflow executes successfully
5. Check Google Calendar for the new appointment
6. Review the webhook response

**Test with VAPI voice call:**
1. Call your VAPI-enabled phone number
2. Request an appointment naturally (e.g., "I need to book a repair service for tomorrow at 2 PM")
3. Verify the voice agent sends data to n8n
4. Confirm the appointment is created in Google Calendar
5. Ensure the voice agent confirms booking to you during the call

---

### Step 8: Activate & Monitor

1. Activate the workflow in n8n
2. Monitor execution logs for the first few real calls
3. Review calendar entries for accuracy
4. Adjust AI prompts based on actual performance
5. Set up error notifications if needed

---

## WORKFLOW NODE BREAKDOWN

### Receive Scheduling Request from VAPI

**Type:** Webhook Trigger

**Purpose:** Receives POST requests from VAPI voice agent containing customer scheduling details

**Configuration:**
- Webhook path: `12c231db-0a0e-466a-a447-d97a12ba9ed8`
- Method: POST
- Response: Wait for webhook response enabled

**Expected Input:**
```json
{
  "name": "string",
  "phone": "string",
  "service": "string",
  "address": "string",
  "priority": "string",
  "status": "string",
  "source": "SchedulingAgent"
}
```

---

### Process Scheduling with AI Assistant

**Type:** AI Agent (LangChain)

**Purpose:** Intelligent processing of scheduling requests with access to Google Calendar tools

**AI Model:** OpenAI GPT-4.1 Mini

**System Role:**
- Backend automation agent
- Processes VAPI scheduling data
- Has access to two calendar tools:
  - Check Calendar Availability
  - Book Appointment in Calendar

**Key Features:**
- Interprets natural scheduling requests
- Makes intelligent booking decisions
- Handles priority levels (P1, P2, etc.)
- Manages after-hours requests
- Formats Eastern timezone timestamps

**Tool Access:**
The AI can autonomously decide when to:
1. Check availability first
2. Book appointment if available
3. Return alternative suggestions if unavailable

---

### OpenAI GPT-4.1 Mini Model

**Type:** Language Model (Chat)

**Purpose:** Powers the AI agent with natural language understanding and decision-making

**Configuration:**
- Model: `gpt-4.1-mini`
- Connected to AI agent node
- Provides language model capabilities for tool use

**Why GPT-4.1 Mini:**
- Fast response times for real-time calls
- Cost-effective for high-volume scheduling
- Strong tool-use capabilities
- Reliable appointment logic

---

### Check Calendar Availability

**Type:** Google Calendar Tool (AI-accessible)

**Purpose:** AI tool for querying calendar availability

**Configuration:**
- Resource: Calendar
- Calendar: Target calendar email
- Operation: Check availability
- AI-callable: Yes

**How AI Uses It:**
The AI agent calls this tool first to verify if the requested time slot is free before attempting to book. It receives availability data and makes decisions based on the response.

---

### Book Appointment in Calendar

**Type:** Google Calendar Tool (AI-accessible)

**Purpose:** AI tool for creating calendar appointments

**Configuration:**
- Resource: Calendar
- Calendar: Target calendar email
- Operation: Create event
- Time Min: `$fromAI("StartTime", "The start time the user has requested for booking")`
- Time Max: `$fromAI("EndTime", "Assume the end time is 3 hrs after the start time")`

**Dynamic Fields:**
Uses `$fromAI()` function to extract:
- Start time from AI's interpretation of the request
- End time calculated as 3 hours after start (customizable)

**AI Logic:**
The AI determines when to call this tool based on availability check results and business rules defined in the system prompt.

---

### Send Response to Voice Agent

**Type:** Respond to Webhook

**Purpose:** Sends booking confirmation or status back to VAPI voice agent

**Response Format:**
Returns JSON with booking status, allowing the voice agent to:
- Confirm successful booking to caller
- Suggest alternative times if unavailable
- Provide appointment details

**Timing:**
Responds immediately after AI processing completes, ensuring the caller receives feedback during the same phone call.

---

## USE CASES

**HVAC & Plumbing Services:** Customers call to schedule repairs or maintenance. The voice agent books appointments instantly without putting callers on hold or requiring callbacks.

**Medical & Dental Offices:** Patients call to book appointments. The AI checks doctor availability and books the appointment while the patient is still on the line, reducing no-shows.

**Consulting & Coaching:** Professionals using VAPI can automate their booking process. Clients get instant confirmation for consultation slots without email back-and-forth.

**Home Services (Cleaning, Repairs, Installations):** Service businesses receive booking calls 24/7. The AI handles after-hours calls and books next-day appointments automatically.

**Beauty & Wellness (Salons, Spas, Fitness):** Customers book appointments via phone. The voice agent accesses real-time availability and confirms bookings immediately.

**Legal & Financial Services:** Law firms and financial advisors using VAPI can automate client meeting scheduling with priority handling for urgent matters.

**Real Estate Showings:** Agents using VAPI for property inquiries can automatically schedule showing appointments based on availability.

---

## CUSTOMIZATION OPTIONS

### Modify Appointment Duration

**Default:** 3 hours for all appointments

**Customization:**
1. Open "Book Appointment in Calendar" node
2. Edit the `timeMax` formula
3. Options:
   - Fixed duration: `{{ $now.plus(2, 'hours') }}`
   - Service-based: Add conditional logic based on service type
   - AI-determined: Use `$fromAI("Duration", "Appointment duration in hours")`

---

### Add Google Sheets Logging

**Current State:** Not implemented
**System Prompt Mentions:** Logging to `Peachtree_Scheduling_Log` sheet

**Implementation:**
1. Add Google Sheets node after AI agent
2. Connect to your logging sheet
3. Map fields:
   - Name, phone, service, address
   - Priority, status, timestamp
   - Booking confirmation status
   - Calendar event ID
4. Use `{{ $now.format('America/New_York') }}` for timestamp

---

### Add Slack/Email Notifications

**Current State:** Optional, mentioned in system prompt

**Implementation for Slack:**
1. Add Slack node after booking success
2. Send to scheduling team channel
3. Include: Customer name, service, time, priority

**Implementation for Email:**
1. Add Gmail/Email node after booking
2. Send to scheduling coordinator
3. Attach booking details and calendar link

---

### Handle Multiple Service Types

**Customize in AI system prompt:**

```
Service Types & Durations:
- Consultation: 1 hour
- Repair: 3 hours
- Installation: 4 hours
- Maintenance: 2 hours

Priority Levels:
- P1: Urgent, book within 24 hours
- P2: Standard, book within 3 days
- P3: Flexible, book within week
```

Update the AI agent's system message with your specific service catalog.

---

### Add Conditional Routing

**Example: Different calendars for different services**

1. Add Switch node before AI agent
2. Route based on service type
3. Use separate Google Calendar tools for each service category
4. Different technicians/departments get their own calendars

---

### Implement After-Hours Logic

**Customize AI prompt:**

```
After-Hours Rules:
- If status = "AfterHours" and time &lt; 8 AM:
  - Book for next available 8 AM slot
- If status = "AfterHours" and time &gt; 6 PM:
  - Book for next business day 9 AM
- If priority = "P1" and after hours:
  - Book emergency slot regardless of time
```

---

### Multi-Calendar Support

**For larger organizations:**

1. Clone calendar tool nodes
2. Create separate tools for each calendar:
   - Technician 1 calendar
   - Technician 2 calendar
   - Manager calendar
3. AI can choose appropriate calendar based on:
   - Service type
   - Availability
   - Priority level

---

## TROUBLESHOOTING

**Webhook not receiving data**
- Verify webhook URL is correctly configured in VAPI dashboard
- Check that VAPI voice agent is sending POST requests
- Test with Postman using sample JSON payload
- Review n8n execution logs for incoming requests

**Calendar availability check fails**
- Confirm Google Calendar OAuth2 credentials are connected
- Verify calendar email address is correct in tool node
- Check that the calendar has proper sharing permissions
- Test calendar access manually in Google Calendar settings

**Appointments not being created**
- Ensure "Book Appointment in Calendar" tool has write permissions
- Verify `$fromAI()` fields are extracting time data correctly
- Check if AI is receiving proper time format from VAPI
- Review AI agent execution logs for tool call attempts

**AI not using calendar tools**
- Verify both calendar tools are connected to AI agent node
- Check OpenAI API credentials are valid
- Ensure GPT-4.1 Mini model supports tool use (it does)
- Review AI system prompt for conflicting instructions

**Wrong timezone on appointments**
- The workflow uses America/New_York timezone
- Update timezone in system prompt if needed
- Verify Google Calendar timezone settings
- Check `$fromAI()` time extraction format

**VAPI not receiving response**
- Confirm "Respond to Webhook" node is configured correctly
- Check that "Wait for webhook response" is enabled
- Verify n8n is returning proper JSON response
- Test webhook response format in VAPI logs

**Duplicate bookings created**
- AI might be calling booking tool multiple times
- Add logic to prevent duplicate calendar entries
- Check VAPI for repeated webhook calls
- Review AI execution logs for tool call frequency

---

## IMPORTANT NOTES

**VAPI integration:** This workflow is specifically designed for VAPI voice agent platform. It expects structured JSON data from VAPI's webhook system. Other voice platforms may require webhook format adjustments.

**Real-time requirement:** The workflow must respond quickly (under 5 seconds) to maintain natural phone conversation flow. Avoid adding heavy processing nodes that could slow response time.

**Tool-use architecture:** This workflow uses n8n's AI agent with tool-use capabilities. The AI autonomously decides when to check availability and when to book appointments based on the conversation context.

**Cost considerations:** OpenAI GPT-4.1 Mini API calls cost approximately $0.001-0.003 per scheduling request. Google Calendar API is free for normal usage but has rate limits.

**Timezone handling:** All timestamps use America/New_York timezone by default. Adjust the timezone in the system prompt if your business operates in a different region.

**Default appointment duration:** Appointments are set to 3 hours by default. Customize this in the "Book Appointment in Calendar" node or let AI determine duration dynamically.

**Priority levels:** The system prompt mentions priority handling (P1, P2) but doesn't implement specific logic. Customize the AI prompt to add priority-based scheduling rules.

**After-hours scheduling:** The workflow receives "AfterHours" status but doesn't implement special handling. Add conditional logic or AI instructions for after-hours booking rules.

**Google Sheets logging:** The system prompt mentions logging to a Google Sheet named `Peachtree_Scheduling_Log`, but this functionality is not implemented. Add a Google Sheets node if you need appointment logging.

**Notification system:** Optional Slack/Email notifications are mentioned in the system prompt but not implemented. Add notification nodes for internal team alerts.

**No error handling:** The current workflow doesn't include explicit error nodes. Consider adding error handling for failed bookings or API timeouts.

**Single calendar only:** The workflow currently supports one Google Calendar. For multi-technician scheduling, clone the workflow or add calendar routing logic.

---

## RESOURCES

- [n8n AI Agent documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/)
- [Google Calendar API guide](https://developers.google.com/calendar/api/guides/overview)
- [OpenAI tool use documentation](https://platform.openai.com/docs/guides/function-calling)
- [VAPI webhook documentation](https://docs.vapi.ai/)
- [n8n webhook trigger guide](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)

---

## SUPPORT

Need help or custom development?

📧 **Email:** [info@incrementors.com](info@incrementors.com)  
🌐 **Contact Form:** [https://www.incrementors.com/contact-us/](https://www.incrementors.com/contact-us/)

---

## 🔗 Nodes Used

Google Sheets, Webhook, Google Calendar, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
