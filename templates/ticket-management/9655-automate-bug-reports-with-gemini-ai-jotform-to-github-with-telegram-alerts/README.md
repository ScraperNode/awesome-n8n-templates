# 🎫 Automate bug reports with Gemini AI: Jotform to GitHub with Telegram alerts

> ⚡ **97 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Execution video: [https://youtu.be/Gj7uzz9cIfU?si=jTu8nktmxM-dfKoZ](https://youtu.be/Gj7uzz9cIfU?si=jTu8nktmxM-dfKoZ)


This workflow automates the process of handling bug reports submitted through a form, from checking for duplicates on GitHub to logging the report and sending a notification.



---

### 1. A Bug is Reported 🐛

* **Trigger:** The entire process kicks off when a user submits a bug report through a **JotForm**. This form collects the user's name, email, and a description of the bug.

---

### 2. The AI Agent Gets to Work 🤖

* **Action:** The submitted bug description is sent to an **AI Agent** powered by Google Gemini.
* **Intelligence:** The agent has a clear set of instructions:
    1.  **Check for Duplicates:** It first connects to a specific GitHub repository (`iamvaar-dev/pomodoro-timer`) and checks if an issue matching the bug description already exists.
    2.  **Create a New Issue:** If it's a new bug (not found on GitHub), the agent automatically creates a new issue in the repository.
    3.  **Report Back:** The agent then neatly packages its findings into a structured JSON format, noting the issue's details and whether it was already present on GitHub.

---

### 3. Log Everything in Google Sheets 📝

* **Action:** The information from the JotForm submission and the AI Agent's analysis is sent to a **Google Sheet**.
* **Purpose:** This step creates a clean log of all submitted bugs, including who submitted them and whether a new GitHub issue was created for them.

---

### 4. Prepare a Smart Notification 📣

* **Action:** A small piece of **JavaScript code** runs to create a custom notification message.
* **Logic:** The message is dynamic:
    * If the bug was **already on GitHub**, the message will say something like, "An issue was submitted, but it's already reported. No action is needed." ✅
    * If the bug was **new**, the message will be more urgent, like, "A new bug was reported and an issue has been created on GitHub. Please review it." ❗

---

### 5. Send the Alert via Telegram 📲

* **Final Step:** The custom message created in the previous step is sent to a specific **Telegram chat** using a bot. This instantly notifies the relevant people about the new bug report and what action (if any) is required.

## 🔗 Nodes Used

Google Sheets, Telegram, Jotform Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
