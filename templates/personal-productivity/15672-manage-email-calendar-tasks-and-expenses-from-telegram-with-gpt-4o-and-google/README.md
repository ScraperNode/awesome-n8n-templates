# ⚡ Manage email, calendar, tasks and expenses from Telegram with GPT-4o and Google

> ⚡ **220 views** · ⚡ [Personal Productivity](../)

## Description

Jarvis is a powerful multi-agent productivity assistant built in n8n. It works directly from Telegram and can understand both text messages and voice notes.

The workflow uses a main **Jarvis Manager Agent** to understand the user's request and route it to the correct specialist agent, such as Gmail, Calendar, Google Tasks, Finance, or Contacts. It can send and reply to emails, manage calendar events, create and complete tasks, track expenses in Google Sheets, search contacts, and respond back to the user in Telegram.

This template is useful for anyone who wants a personal AI assistant that can manage daily productivity tasks from one simple chat interface.

---

## What This Workflow Does

- Accepts Telegram text messages and voice notes
- Converts voice messages into text using OpenAI transcription
- Uses a main AI manager agent to understand the request
- Routes the request to the correct specialist agent
- Supports Gmail, Google Calendar, Google Tasks, Google Sheets, and Google Contacts
- Tracks expenses in a Google Sheet
- Sends the final response back to Telegram
- Replies with text if the user sends text
- Replies with audio if the user sends a voice message

---


# Node-by-Node Explanation

## 1. Telegram Trigger

### What this node does
This node starts the workflow whenever the Telegram bot receives a new message.

### How it works
It listens for incoming Telegram updates. When a user sends a message to the bot, this node captures message details such as chat ID, message text, voice file ID, and sender information.

---

## 2. Switch

### What this node does
This node checks whether the incoming Telegram message is text or audio.

### How it works
It checks if `message.text` exists.  
If text exists, the workflow continues through the text path.  
If text does not exist, it treats the message as an audio or voice message.

---

## 3. Get a file

### What this node does
This node downloads the voice message file from Telegram.

### How it works
When a user sends a voice note, Telegram provides a `file_id`. This node uses that file ID to fetch the actual audio file so it can be processed further.

---

## 4. Transcribe a recording

### What this node does
This node converts the Telegram voice message into text.

### How it works
It sends the downloaded audio file to OpenAI's audio transcription service. The output becomes normal text, which can then be understood by the AI agent.

---

## 5. Jarvis Manager Agent

### What this node does
This is the main brain of the workflow.

### How it works
The Manager Agent receives either direct Telegram text or transcribed voice text. It understands the user's intent and decides which specialist agent should handle the request.

### Specialist agents available
- Gmail Agent
- Calendar Agent
- Task Agent
- Finance Agent
- Contacts Agent

### Why it is important
Instead of one AI agent doing everything, this node acts like a smart router. It sends each request to the correct expert agent, making the workflow more organized and scalable.

---

## 6. OpenAI Chat Model

### What this node does
This node provides the language model for the Jarvis Manager Agent.

### How it works
The Jarvis Manager Agent uses this OpenAI chat model to understand the user's message, decide the correct tool or agent, and generate a short final response.

---

## 7. Simple Memory

### What this node does
This node gives Jarvis short-term memory.

### How it works
It stores conversation context using the Telegram chat ID as the session key. This helps Jarvis remember recent conversation history for the same user.

---

## 8. Think

### What this node does
This node allows the main agent to reason before choosing an action.

### How it works
The Manager Agent can use this tool to internally think through the user's request and decide which specialist agent should be called.

---

# Gmail Section

## 9. Gmail Agent

### What this node does
This is the specialist agent for Gmail-related tasks.

### How it works
The Manager Agent sends Gmail tasks to this agent, such as searching emails, sending emails, drafting emails, replying to emails, and managing labels. The Gmail Agent then chooses the correct Gmail tool.

---

## 10. OpenAI Chat Model1

### What this node does
This node powers the Gmail Agent.

### How it works
It helps the Gmail Agent understand Gmail-related instructions and decide which Gmail action should be performed.

---

## 11. Send Email

### What this node does
This node sends a new email through Gmail.

### How it works
The Gmail Agent provides the recipient email, subject, and message body. This node then sends the email from the connected Gmail account.

---

## 12. Reply to an Email

### What this node does
This node replies to an existing Gmail message.

### How it works
The Gmail Agent provides the message ID and reply content. This node sends the reply inside the correct email thread.

---

## 13. Add Label to Email

### What this node does
This node adds one or more Gmail labels to an email.

### How it works
The Gmail Agent provides the message ID and label name or label ID. This node applies the selected label to organize the email.

---

## 14. Get Labels

### What this node does
This node retrieves Gmail labels.

### How it works
It fetches the available Gmail labels so the Gmail Agent can use them for organizing or filtering emails.

---

## 15. Draft Email

### What this node does
This node creates a new email draft.

### How it works
Instead of sending the email immediately, the Gmail Agent provides the recipient, subject, and message body, and this node saves it as a Gmail draft.

---

## 16. Draft Email Reply

### What this node does
This node creates a draft reply inside an existing Gmail thread.

### How it works
The Gmail Agent provides the thread ID, subject, and reply message. This node saves the response as a draft reply.

---

## 17. Get Emails

### What this node does
This node searches and retrieves Gmail messages.

### How it works
The Gmail Agent can pass filters such as search query, sender, received after date, or received before date. This node returns matching emails.

---

# Calendar Section

## 18. Calendar Agent

### What this node does
This is the specialist agent for Google Calendar tasks.

### How it works
The Manager Agent sends calendar-related requests to this agent. The Calendar Agent can check availability, get events, create events, reschedule events, and delete events.

---

## 19. OpenAI Chat Model2

### What this node does
This node powers the Calendar Agent.

### How it works
It helps the Calendar Agent understand scheduling requests and choose the correct Google Calendar tool.

---

## 20. Check Availability

### What this node does
This node checks whether a time slot is available on Google Calendar.

### How it works
The Calendar Agent provides a start time and end time. This node checks the connected calendar for conflicts.

---

## 21. Get all Events

### What this node does
This node retrieves upcoming Google Calendar events.

### How it works
The Calendar Agent provides a date range, and this node returns matching calendar events ordered by start time.

---

## 22. Delete Calendar Event

### What this node does
This node deletes a Google Calendar event.

### How it works
The Calendar Agent provides the event ID. This node removes the selected event from Google Calendar.

---

## 23. Reschedule Event

### What this node does
This node updates or reschedules an existing calendar event.

### How it works
The Calendar Agent provides the event ID, new start time, new end time, and optional attendee details. This node updates the event in Google Calendar.

---

## 24. Get Event

### What this node does
This node retrieves one specific calendar event.

### How it works
The Calendar Agent provides the event ID, and this node fetches the full event details from Google Calendar.

---

## 25. Create an event

### What this node does
This node creates a new Google Calendar event.

### How it works
The Calendar Agent provides the event title, start time, end time, description, and reminder settings. This node creates the event in the connected calendar.

---

# Task Section

## 26. Task Agent

### What this node does
This is the specialist agent for Google Tasks.

### How it works
The Manager Agent sends task-related requests to this agent, such as creating a task, reading tasks, completing a task, or deleting a task.

---

## 27. OpenAI Chat Model3

### What this node does
This node powers the Task Agent.

### How it works
It helps the Task Agent understand task-related instructions and select the correct Google Tasks tool.

---

## 28. Create a Task

### What this node does
This node creates a new Google Task.

### How it works
The Task Agent provides the task title, due date, and optional notes. This node adds the task to Google Tasks.

---

## 29. Get a Task

### What this node does
This node retrieves one specific Google Task.

### How it works
The Task Agent provides the task ID, and this node fetches the matching task details.

---

## 30. Get many Tasks

### What this node does
This node retrieves multiple Google Tasks.

### How it works
The Task Agent can ask for all tasks or filter based on completed and incomplete tasks. This node returns the matching task list.

---

## 31. Complete a Task

### What this node does
This node marks a Google Task as completed.

### How it works
The Task Agent provides the task ID and completion date. This node updates the task status to completed.

---

## 32. Delete a Task

### What this node does
This node deletes a Google Task.

### How it works
The Task Agent provides the task ID. This node removes the selected task from Google Tasks.

---

# Finance Section

## 33. Finance Agent

### What this node does
This is the specialist agent for expense tracking.

### How it works
The Manager Agent sends finance-related requests to this agent, such as logging an expense, reading expense data, summarizing spending, or deleting expense rows.

---

## 34. OpenAI Chat Model4

### What this node does
This node powers the Finance Agent.

### How it works
It helps the Finance Agent understand expense-related instructions and decide whether to read, create, summarize, or delete expense records.

---

## 35. Get all Expenses

### What this node does
This node reads expense data from Google Sheets.

### How it works
It connects to the expense tracker spreadsheet and retrieves the existing expense records for analysis or summarization.

---

## 36. Create Expense

### What this node does
This node adds a new expense record to Google Sheets.

### How it works
The Finance Agent provides values such as date, description, category, and amount. This node appends the expense as a new row in the spreadsheet.

---

## 37. Delete Expense

### What this node does
This node deletes or clears expense rows from Google Sheets.

### How it works
The Finance Agent provides the row number and number of rows to delete. This node clears the selected expense entry from the sheet.

---

# Contacts Section

## 38. Contacts Agent

### What this node does
This is the specialist agent for Google Contacts lookup.

### How it works
The Manager Agent sends contact search requests to this agent. It can search for contact names, email addresses, and contact details.

---

## 39. OpenAI Chat Model5

### What this node does
This node powers the Contacts Agent.

### How it works
It helps the Contacts Agent understand contact lookup requests and prepare the right search query.

---

## 40. Get Contacts

### What this node does
This node searches Google Contacts.

### How it works
The Contacts Agent provides a name, email, or query. This node searches the connected Google Contacts account and returns matching names and email addresses.

---

# Response Section

## 41. Set Reply Message

### What this node does
This node prepares the final response message.

### How it works
It takes the output from the Jarvis Manager Agent and stores it in a clean field called `message`, so the Telegram reply nodes can use it easily.

---

## 42. Check Text or Audio

### What this node does
This node decides whether Jarvis should reply with text or audio.

### How it works
It checks the original Telegram input.  
If the user sent a text message, Jarvis sends a text reply.  
If the user sent a voice message, Jarvis generates and sends an audio reply.

---

## 43. Send a text message

### What this node does
This node sends Jarvis's final reply as a Telegram text message.

### How it works
It sends the prepared response back to the same Telegram chat ID. It also escapes Markdown characters so the message displays correctly in Telegram.

---

## 44. Generate audio

### What this node does
This node converts Jarvis's final text reply into audio.

### How it works
If the user originally sent a voice message, this node uses OpenAI audio generation to create an audio version of the response.

---

## 45. Send an audio file

### What this node does
This node sends Jarvis's final reply as a Telegram audio file.

### How it works
It sends the generated audio back to the same Telegram chat and adds the final message as a caption.

---

# Requirements

Before using this workflow, connect the following credentials:

- Telegram Bot API
- OpenAI API
- Gmail OAuth2
- Google Calendar OAuth2
- Google Tasks OAuth2
- Google Sheets OAuth2
- Google Contacts OAuth2

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
