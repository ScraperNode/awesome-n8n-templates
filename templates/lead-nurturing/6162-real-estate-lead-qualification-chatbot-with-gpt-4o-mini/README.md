# 💬 Real estate lead qualification chatbot with GPT-4o-mini

> ⚡ **1,925 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## **Guidebook: How the Website ChatBot Template Works**

---

##  Chapter 1: Introduction & Objectives

This guidebook provides a comprehensive walkthrough of the Website ChatBot developed using n8n and OpenAI. The chatbot is designed to qualify real estate leads and encourage site visits for the Alcove New Kolkata Sangam project through personalized, intelligent conversations.

---

##  Chapter 2: Tools Required

### 1. **n8n Workflow Automation Tool**

An open-source workflow builder to automate data flows between services.

### 2. **OpenAI Account with GPT-4o-mini Access**

For generating AI-based chatbot responses.

### 3. **Web Chat Widget**

Frontend integration that sends messages via webhook to the chatbot.

---

## Chapter 3: Workflow Breakdown

### Step 1: Webhook

* Receives POST requests from the chat widget.
* Endpoint: `/webhook/chatbot-webhook`

### Step 2: Set User Message

* Extracts `message` from the JSON body.
* Stores it as `user_message`.

### Step 3: Memory Setup

* Uses session ID to track conversation across messages.

### Step 4: OpenAI Chat Model

* GPT-4o-mini processes queries using the defined agent prompt.

### Step 5: AI Agent (Khusboo)

* Persona of a pre-sales agent.
* Uses AIDA + BANT + SPIN + PAS frameworks.
* Shares videos, responds in Hinglish, schedules site visits.

### Step 6: Respond to Webhook

* Formats the chatbot's reply into a JSON response.

---

## Chapter 4: Strategy & Psychology Behind Responses

| Framework | Purpose                                              |
| --------- | ---------------------------------------------------- |
| AIDA      | Capture attention, interest, desire, action          |
| BANT      | Qualify Budget, Authority, Need, Timing              |
| SPIN      | Understand user's Situation, Problems, Implications  |
| PAS       | Tackle objections using Problem, Agitation, Solution |

The chatbot aims to qualify leads and gently move them toward booking a site visit without pushing or over-informing.

---

## Chapter 5: Setup Instructions

### A. n8n Workflow Setup

1. Import the JSON workflow.
2. Ensure OpenAI credentials are set up.
3. Enable webhook at `/webhook/chatbot-webhook`.

### B. Frontend Widget Integration

* Send message as POST to the webhook with structure:

```json
{
  "message": "Looking for 2 BHK",
  "session_id": "user123"
}
```

---

## Chapter 6: Testing & Troubleshooting

### Test via Postman

* Send sample request to verify AI response.

## Common Issues

| Issue            | Fix                                 |
| ---------------- | ----------------------------------- |
| No response      | Check webhook URL or credentials    |
| Repeated replies | Ensure memory node is active        |
| Wrong language   | Check system message language rules |

---

## Chapter 7: Sample Conversations

**User:** Hi, I’m looking for a home near the Ganga.

**Bot:** **Namaste!** Main Khusboo hoon, Alcove New Kolkata Sangam se. Aapka naam kya hai?

**User:** Rajat.

**Bot:** **Great Rajat!** Kya aap apne family ke saath shift hone ka plan kar rahe ho?

... *(continues using frameworks)*

---

## Chapter 8: FAQs & Maintenance Tips

**Q: Can I update the AI agent persona?**
A: Yes, by modifying the system message inside the AI Agent node.

**Q: How do I share new videos or links?**
A: Add them in the `sharingVideos` or `UserRequests` section in the system message.

**Q: How to scale this for multiple projects?**
A: Duplicate the workflow and update the `aboutProject` and links accordingly.

---

End of Guidebook.

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
