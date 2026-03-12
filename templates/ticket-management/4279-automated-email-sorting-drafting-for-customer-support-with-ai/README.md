# 🎫 ✉️ Automated email sorting & drafting for customer support - with AI 🤖

> ⚡ **245 views** · 🎫 [Ticket Management & Triage](../)

## Description

# 🤖 Automated Email Sorting & FAQ Reply Assistant (n8n + Gemini AI)

## 🔍 Overview

This **n8n workflow** automates email triage and FAQ responses using **Google Sheets** and **Gemini AI**. It’s designed to:

- Automatically **sort incoming emails** into categories (e.g., FAQ, Billing, Tech Support).
- **Draft polite, relevant replies** for FAQ emails using **AI**, grounded in your pre-approved content.
- Maintain a **human-in-the-loop** process by saving responses as Gmail drafts for manual review.

Perfect for startups or teams seeking to reduce support workload while ensuring consistent, helpful responses.

---

## ⚙️ Pre-conditions / Requirements

Before using this workflow, make sure you have:

- ✅ A **Google account** with access to:
  - Gmail (with custom labels like `FAQ-Waiting`, `FAQ-Draft`)
  - Google Sheets (used as your FAQ source)
- ✅ A **Gemini API key** (to generate AI replies)
- ✅ A **dedicated Gmail label** to collect emails needing draft replies (e.g., `FAQ-Waiting`)
- ✅ A **dedicated Gmail label** to store drafted replies for manual sending (e.g., `FAQ-Draft`)
- ✅ A **Google Sheet with two columns**:
  - `Question` — common user inquiries
  - `Answer` — the matching, approved reply text

---

## 🧠 How It Works

1. **Trigger**  
   - Scheduled workflow run (e.g., every 15 minutes)

2. **Fetch Emails**  
   - Grabs Gmail messages under a specific label like `FAQ-Waiting`

3. **Process & Clean**  
   - Loops through each email  
   - Cleans content (removes signatures/HTML)  
   - Sends it to Gemini AI

4. **AI Reply Drafting**  
   - AI matches email intent against your FAQ from Google Sheets  
   - Generates a **friendly, accurate draft reply**, grounded **only** in your predefined Q&A

5. **Update Gmail**  
   - Removes `FAQ-Waiting` label  
   - Adds `FAQ-Draft` label  
   - Saves draft reply in Gmail for manual review and sending

6. **Fallback Routing**  
   - If email doesn’t match FAQ criteria, it follows a `FALSE` path  
   - You can implement further logic here (e.g., route to Billing, escalate to a human agent, log as feedback)

---

## 🛠️ Setup Instructions

1. **Connect Gmail + Google Sheets + Gemini AI**
   - Set up credentials in n8n for Gmail, Google Sheets, and Gemini AI

2. **Prepare Labels in Gmail**
   - Create: `FAQ-Waiting` (input folder), `FAQ-Draft` (drafts ready to send)  
   - Optionally, create other labels (e.g., `Billing`, `Tech Support`)

3. **Build your FAQ Sheet**
   - Create a new Google Sheet with:
     - Column A: `Question`
     - Column B: `Answer`
   - Add rows with typical user questions and the matching replies

4. **Configure AI Agent**
   - In the **AI agent node**, edit the prompt to fit your tone of voice (friendly, professional, concise, etc.)
   - Ensure the AI is instructed to only use answers from the sheet, and not hallucinate

5. **Adjust Schedule**
   - Modify the trigger interval to match your needs (e.g., every X minutes)

---

## 🧩 Customization Tips

- **Custom Prompts**: Tailor the Gemini AI prompt in the node to change tone, length, or structure of replies
- **Add New Categories**: Use the `FALSE` path in the `IF` node to handle non-FAQ emails (e.g., route to Billing, escalate to human agent, log feedback)
- **Multiple Sheets**: You can expand the system by using different sheets for different topics
- **Tone Matching**: Adjust AI output by providing sample reply templates or tone instructions directly in the AI node

---

## ✅ Use Cases

- SaaS startups triaging customer support  
- Solo founders who want consistent replies with minimal effort  
- Teams managing growing inbox volumes while maintaining quality support

---

## 🔗 Nodes Used

Gmail, Markdown, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
