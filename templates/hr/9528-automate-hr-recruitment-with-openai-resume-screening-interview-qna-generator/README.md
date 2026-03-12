# 👥 Automate HR recruitment with OpenAI resume screening & interview QnA generator

> ⚡ **802 views** · 👥 [HR & Recruitment](../)

## Description

***

<br>

<div>

# **Build an AI HR Assistant to Screen Resumes and Send Telegram Alerts**
*A step-by-step guide to creating a fully automated recruitment pipeline that screens candidates, generates interview questions, and notifies your team.*

This template provides a complete, step-by-step guide to building an AI-powered HR assistant from scratch in n8n. You will learn how to connect a web form to an intelligent screening agent that reads resumes, evaluates candidates against your job criteria, and prepares unique interview questions for the most promising applicants.

<br>

| **Services Used**                               | **Features**                                                                   |
| :---------------------------------------------- | :----------------------------------------------------------------------------- |
| 🤖 **OpenAI / LangChain**                         | Uses AI Agents to screen, score, and analyze candidates.                       |
| 📄 **Google Drive & Google Sheets**               | Stores resumes and manages a database of open positions and applicants.        |
| 📥 **n8n Form Trigger**                           | Provides a public-facing web form to capture applications.                     |
| 💬 **Telegram**                                   | Sends real-time alerts to the hiring team for qualified candidates.            |

---

## How It Works ⚙️

1.  **📥 Application Submitted**: The workflow starts when a candidate fills out the **n8n Form Trigger** with their details and uploads their CV.
2.  **📂 File Processing**: The CV is automatically uploaded to a specific **Google Drive** folder for record-keeping, and the **Extract from File** node reads its text content.
3.  **🧠 AI Screening Agent**: A **LangChain Agent** analyzes the resume text. It uses the **Google Sheets Tool** to look up the requirements for the applied role, then scores the candidate and decides if they should be shortlisted.
4.  **📊 Log Results**: The agent's decision (name, score, shortlisted status) is logged in your master "Applications" **Google Sheet**.
5.  **✅ Qualification Check**: An **IF** node checks if the candidate was shortlisted.
6.  **❓ AI Question Generator**: If shortlisted, a second **LangChain Agent** generates three unique, relevant interview questions based on the candidate's resume and the job description.
7.  **✍️ Update Sheet**: The generated questions are added to the candidate's row in the **Google Sheet**.
8.  **🔔 Notify Team**: A final alert is sent via **Telegram** to notify the HR team that a new candidate has been qualified and is ready for review.

---

## 🛠️ How to Build This Workflow

Follow these steps to build the recruitment assistant from a blank canvas.

#### **Step 1: Set Up the Application Intake**
1.  Add a **Form Trigger** node. Configure it with fields for `Name`, `Email`, `Phone Number`, a `File Upload` for the CV, and a `Dropdown` for the "Job Role".
2.  Connect a **Google Drive** node. Set the Operation to `Upload` and connect your credentials. Set it to upload the CV file from the Form Trigger into a specific folder.
3.  Add an **Extract from File** node. Set it to extract text from the PDF CV file provided by the trigger.

#### **Step 2: Build the AI Screening Agent**
1.  Add a **Langchain Agent** node. This will be your main screening agent.
2.  In its prompt, instruct the AI to act as a resume screener. Tell it to use the input text from the **Extract from File** node and the tools you will provide to score and shortlist candidates.
3.  Add an **OpenAI Chat Model** node and connect it to the Agent's `Language Model` input.
4.  Add a **Google Sheets Tool** node. Point it to a sheet with your open positions and their requirements. Connect this to the Agent's `Tool` input.
5.  Add a **Structured Output Parser** node and define the JSON structure you want the agent to return (e.g., `candidate_name`, `score`, `shortlisted`). Connect this to the Agent's `Output Parser` input.

#### **Step 3: Log Results & Check for a Match**
1.  Connect a **Google Sheets** node after the Agent. Set its operation to `Append or Update`. Use it to add the structured output from the agent into your main "Applications" sheet.
2.  Add an **IF** node. Set the condition to continue only if the `shortlisted` field equals "yes".

#### **Step 4: Generate Interview Questions**
1.  On the 'true' path of the **IF** node, add a second **Langchain Agent** node.
2.  Write a prompt telling this agent to generate 3 interview questions based on the candidate's resume and the job requirements.
3.  Connect the same **OpenAI Model** and **Google Sheets Tool** to this agent.
4.  Add another **Google Sheets** node. Set it to `Update` the existing row for the candidate, adding the newly generated questions.


## 💬 Need Help or Want to Learn More?

Join my **Skool community** for n8n + AI automation tutorials, live Q&A sessions, and exclusive workflows:  
👉 https://www.skool.com/n8n-ai-automation-champions

---

**Template Author:** Sandeep Patharkar  
**Category:** Website Chatbots / AI Automation  
**Difficulty:** Beginner  
**Estimated Setup Time:** ⏱️ 15 minutes

## 🔗 Nodes Used

Google Sheets, Telegram, Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
