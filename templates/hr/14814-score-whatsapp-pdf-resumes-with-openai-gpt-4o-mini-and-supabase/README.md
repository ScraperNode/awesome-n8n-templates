# 👥 Score WhatsApp PDF resumes with OpenAI GPT-4o-mini and Supabase

> ⚡ **85 views** · 👥 [HR & Recruitment](../)

## Description

## WhatsApp Resume Ranking Bot — AI-Powered Career Score via PDF Upload

Let job seekers check their resume strength directly on WhatsApp — no app, no sign-up, no friction. Users send a keyword, answer 2 quick questions, upload their PDF resume, and receive a personalized career score, ATS feedback, and rejection analysis in under 60 seconds.

### Who is this for?

Career coaches, job portals, HR-tech startups, or recruitment agencies who want to offer a self-serve resume evaluation tool directly inside WhatsApp — where their audience already is.

---

### What this workflow does

1. **Listens for incoming WhatsApp messages** via the WhatsApp Business Cloud API
2. **Manages multi-turn conversation state** in Supabase — tracks each user's progress through the flow (idle → name → role → resume → processing)
3. **Guides the user step-by-step** to provide their name, target job role, and PDF resume
4. **Downloads the resume PDF** from WhatsApp's media server using the Business API
5. **Extracts resume text** for analysis
6. **Runs a Scoring Engine** that calculates a career score (0–100) based on resume content and target role
7. **Calls OpenAI** (GPT-4o-mini) in parallel to generate rejection reasons and actionable improvement tips
8. **Merges both results** and formats a final WhatsApp message
9. **Sends the personalized report** back to the user — score, weaknesses, and what to fix

---

### Prerequisites

- A **WhatsApp Business Cloud API** account (Meta Developer App in Live mode)
- A **Supabase** project with a `whatsapp_sessions` table
- An **OpenAI** API key (GPT-4o-mini recommended)
- A **self-hosted n8n instance** or n8n Cloud

---

### Supabase table setup

Create a table called `whatsapp_sessions` with these columns:

| Column | Type | Notes |
|---|---|---|
| `phone` | text | Primary key / unique |
| `state` | text | Conversation state (IDLE, WAITING_NAME, etc.) |
| `name` | text | User's name |
| `target_role` | text | Job role they're targeting |
| `started_at` | timestamptz | Session start time |
| `updated_at` | timestamptz | Last activity timestamp |

---

### Setup steps

1. **Connect WhatsApp Business API** credentials in n8n (Meta App token + Phone Number ID)
2. **Connect OpenAI** credentials in n8n
3. **Update the Supabase URL and API key** inside the `Conversation State Manager` Code node
4. **Replace `YOUR_PHONE_NUMBER_HERE`** in the Send nodes with your WhatsApp Phone Number ID
5. **Set up Meta webhook** pointing to your n8n WhatsApp Trigger URL, subscribed to `messages`
6. **Activate the workflow** — users can now send `CHECK MY RANK` to trigger the bot

---

### Conversation flow
```
User: CHECK MY RANK
Bot:  Intro + "Type YES to start"
User: YES
Bot:  "What's your full name?"
User: Rahul Sharma
Bot:  "Which job role are you targeting?"
User: Data Analyst
Bot:  "Upload your resume as a PDF"
User: [uploads PDF]
Bot:  "Analyzing... hang tight 🔍"
Bot:  [sends career score + rejection reasons + tips]
```

---

### Customization

- Modify the **Scoring Engine** Code node to adjust how the score is calculated (weights for skills, experience, formatting, etc.)
- Edit the **OpenAI prompt** to change the tone or depth of feedback
- Add a **Supabase insert** after analysis to log all submissions for your own analytics
- Extend the flow to offer a **paid detailed report** or **booking link** after the free score

---

### ⚠️ Important notes

- The WhatsApp App must be in **Live mode** (not sandbox) to receive messages from non-whitelisted numbers — requires completing Meta Business Verification
- Only **PDF resumes** are supported; DOCX files are rejected with a helpful prompt
- Session state persists in Supabase, so users can resume mid-flow if they get disconnected
- The bot handles concurrent users independently via phone number as the session key

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, Extract from File, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
