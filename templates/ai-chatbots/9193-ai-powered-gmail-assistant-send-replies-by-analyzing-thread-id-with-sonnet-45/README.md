# 🤖 AI-powered Gmail assistant: send replies by analyzing thread ID with Sonnet 4.5

> ⚡ **433 views** · 🤖 [AI Chatbots & Agents](../)

## Description

This workflow automates **analyzing Gmail threads and drafting AI-powered replies** with the new model Anthropic **Sonnet 4.5**.

This workflow automates the process of analyzing incoming emails and generating context-aware draft replies by examining the entire email thread.

---

### **Key Advantages**

* ✅ **Time-Saving** – Automates repetitive email replies, reducing manual workload.
* ✅ **Context-Aware Responses** – Replies are generated using the entire email thread, not just the latest message.
* ✅ **Smart Filtering** – The classifier prevents unnecessary drafts for spam or promotional emails.
* ✅ **Human-in-the-Loop** – Drafts are created instead of being sent immediately, allowing manual review and corrections.
* ✅ **Scalable & Flexible** – Can be adapted to different accounts, reply styles, or workflows.
* ✅ **Seamless Gmail Integration** – Directly interacts with Gmail threads and drafts via OAuth.

---

### **How it Works**

This workflow automates the process of analyzing incoming emails and generating context-aware draft replies by examining the entire email thread.

1.  **Trigger & Initial Filtering:** The workflow is automatically triggered every minute by the **Gmail Trigger** node, which detects new emails. For each new email, it immediately performs a crucial first step: it uses an AI **Email Classifier** to analyze the email snippet. The AI determines if the email is a legitimate message that warrants a reply (categorized as "ok") or if it's spam, a newsletter, or an advertisement. This prevents the system from generating replies for unwanted emails.

2.  **Context Aggregation:** If an email is classified as "ok," the workflow fetches the **entire conversation thread** from Gmail using the `threadId`. A **Code Node** then processes all the messages in the thread, structuring them into a consistent format that the AI can easily understand.

3.  **AI-Powered Draft Generation:** The structured conversation history is passed to the **Replying email Agent** with **Sonnet 4.5**. This agent, powered by a language model, analyzes the entire thread to understand the context and the latest inquiry. It then drafts a relevant and coherent HTML email reply. The system prompt instructs the AI not to invent information and to use placeholders for any missing details.

4.  **Draft Creation:** The final step takes the AI-generated reply and the original email's metadata (subject, recipient, threadId) and uses them to **create a new draft email** in Gmail. This draft is automatically placed in the correct email thread, ready for the user to review and send.
---


### **Set up Steps**

To implement this automated email reply system, you need to configure the following:

1.  **Configure Gmail & OpenAI Credentials:** Ensure the following credentials are set up in your n8n instance:
    *   **Gmail OAuth2 Credentials:** The workflow uses the same Gmail account for the trigger, fetching threads, and creating drafts. Configure this in the "Gmail Trigger," "Get a thread," and "Create a draft" nodes.
    *   **OpenAI API Credentials:** Required for both the "Email Classifier". Provide your API key in the respective OpenAI Chat Model nodes.
  
	 *   **Anthropic API Credentials:** Required for the main "Replying email Agent." Provide your API key in the respective Antrhopic Chat Model nodes.

2.  **Review AI Classification & Prompting:**
    *   **Email Filtering:** Check the categories in the **Email Classifier** node. The current setup marks only non-advertising, non-newsletter emails as "ok." You can modify these categories to fit your specific needs and reduce false positives.
    *   **Reply Agent Instructions:** Review the system message in the **Replying email Agent**. You can customize the AI's persona, tone, and instructions (e.g., making it more formal, or instructing it to sign with a specific name) to better align with your communication style.

---
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, Anthropic Chat Model, OpenAI Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
