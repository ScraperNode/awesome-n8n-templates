# ⚡ Run WhatsApp quizzes and track student progress with Wati, GPT-4.1 and Sheets

> ⚡ **78 views** · ⚡ [Personal Productivity](../)

## Description

Turn WhatsApp into an interactive personal classroom. This workflow automates the entire learning cycle—from generating AI-powered quizzes to tracking student progress in real-time—by combining WATI, OpenAI AI Agents, and Google Sheets.

---

## 🎯 What This Workflow Does

Provides a complete end-to-end educational experience through simple WhatsApp commands:

- 📝 **Interactive Quiz Trigger**  
  Student sends a topic (e.g., `quiz photosynthesis`) via WATI Trigger to start a session.

- 🚦 **Intelligent Command Routing**  
  A Route Message switch node detects specific student intents:
  - **quiz:** Triggers the AI generation of new questions.
  - **answer:** Routes to the evaluation engine to grade student replies.
  - **progress:** Triggers the historical performance report branch.

- 👁️ **AI-Powered Content Creation**  
  An AI Agent using GPT-4o generates 3 tailored MCQ questions based on the requested topic, formatted as structured JSON.

- 📊 **Automated Grading & Logging**
  - **Evaluation:** Compares student replies (e.g., `answer 1a 2b 3c`) against stored correct answers fetched from Google Sheets.
  - **Logging:** Saves the final score, topic, and date to the master database.

- 📈 **Progress Visualization**  
  Fetches all historical scores to calculate average performance, identifies the "Best Topic," and generates a visual progress bar.

---

## ✨ Key Features

- **Dynamic AI Tutoring:** Quizzes are never repetitive; the AI generates fresh questions every time a topic is requested.
- **Session Management:** Uses a "Session Key" (Phone + Date) to ensure students can only take one specific quiz per day per topic.
- **Visual Performance Feedback:** Students receive formatted reports with emojis and visual bars (`███░░`) to track their improvement.
- **Easy Answer Format:** Simple shorthand for students (e.g., `1a 2b`) makes it accessible for mobile-first learning.
- **Centralized Database:** All academic data is logged in Google Sheets, making it easy for teachers or parents to monitor results.

---

## 💼 Perfect For

- **Students:** Quick self-testing on subjects before exams or competitive tests.
- **Teachers:** Providing an automated "homework bot" for students to practice curriculum topics.
- **Corporate Trainers:** Deploying bite-sized knowledge checks to employees via mobile.
- **Language Learners:** Testing vocabulary or grammar rules on the go.

---

## 🔧 What You'll Need

### Required Integrations

- **[WATI](https://www.wati.io/)** – To handle WhatsApp message triggers and automated feedback delivery.
- **OpenAI API** – For the AI Agent and Chat Model (GPT-4o) to generate quizzes.
- **Google Sheets** – To act as the database for active quiz sessions and permanent score history.

### Optional Customizations

- **Difficulty Levels:** Adjust the AI Agent's system message to generate "Beginner," "Intermediate," or "Advanced" quizzes.
- **Timed Challenges:** Use n8n Wait nodes to send "Time's Up" reminders if a student hasn't answered within an hour.

---

## 🚀 Quick Start

1. **Import Template** – Copy the JSON and import it into your n8n instance.
2. **Set Credentials** – Connect your WATI, OpenAI, and Google Sheets accounts.
3. **Setup Spreadsheet** – Create two sheets:
   - **Active Quizzes:** Headers for `sessionKey`, `phone`, `topic`, `correctAnswers`, `questionCount`, `today`.
   - **Scores:** Headers for `date`, `phone`, `senderName`, `topic`, `score`, `total`, `percentage`.
4. **Start Learning** – Send `quiz solar system` to your WhatsApp bot to begin!

---

## 🎨 Customization Options

- **Question Count:** Modify the AI prompt and code nodes to generate 5 or 10 questions instead of 3.
- **Persona Tweak:** Change the System Message in the AI Agent to make the tutor sound like a "Fun Scientist" or a "Strict Professor".
- **Filtered Progress:** Edit the Build Progress Report code to show reports for only the last 30 days.

---

## 📈 Expected Results

- 100% automated quiz generation and grading—no manual teacher intervention required.
- Immediate student feedback providing correct answers for missed questions.
- Increased engagement through a familiar, low-friction WhatsApp interface.
- Actionable insights into which topics students struggle with most.

---

## 🏆 Use Cases

### Exam Preparation
A high school student uses the bot to drill on "Biology" and "History" topics daily, tracking their score increase over time via the `progress` command.

### Employee Onboarding
A new hire receives a "Company Policy" quiz via WhatsApp; their score is automatically logged for HR compliance.

### Community Education
An NGO uses the bot to teach health and safety protocols in rural areas where WhatsApp is the primary digital tool.

---

## 💡 Pro Tips

- **Strict JSON:** The AI Agent is prompted to return only JSON to ensure the workflow doesn't crash on conversational filler.
- **Flexible Matching:** The Build Progress Report node uses `String()` casting to ensure phone numbers match correctly even if formatted differently in Sheets.
- **Topic Extraction:** Use specific topics for best results; "Photosynthesis" works better than just "Biology".

---

Ready to launch your AI classroom? Import this template and connect your OpenAI key to start generating quizzes today!

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
