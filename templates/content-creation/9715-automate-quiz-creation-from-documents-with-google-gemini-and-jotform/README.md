# 🎬 Automate quiz creation from documents with Google Gemini and Jotform

> ⚡ **343 views** · 🎬 [Content Creation & Video](../)

## Description

## AI-Powered Quiz Generator for Instructors 📝🤖

Instantly turn any document into a shareable online quiz! This **n8n workflow** automates the entire quiz creation process: a new Jotform submission triggers the flow, the **Google Gemini AI** extracts key concepts and generates **multiple-choice questions** with correct answers, saves the questions to a **Google Sheet** for record-keeping, and finally creates a **fully built, ready-to-share Jotform quiz** using an HTTP request.

***

## How it Works

This powerful workflow acts as a complete "document-to-quiz" automation tool, simplifying the process of creating educational or testing materials:

1.  **Trigger & Input:** The process starts when a user fills out the main **Jotform** submission form, providing a **document (PDF/file upload)**, the desired **Quiz Title**, and the **Number of Questions** to generate. **Create a jotform like this:** [https://form.jotform.com/252856893250062](https://form.jotform.com/252856893250062) having fields for Quiz Name, File Upload and Number of questions.
2.  **Document Processing:** The workflow retrieves the uploaded document via an HTTP request and uses the **Extract from File** node to parse and extract the raw text content from the file.
3.  **AI Question Generation:** The extracted text, quiz title, and desired question count are passed to the **Google Gemini AI Agent**. Following strict instructions, the AI analyzes the content and generates the specified number of **multiple-choice questions** (with four options and the correct answer indicated) in a precise JSON format.
4.  **Data Structuring:** The generated JSON is validated and formatted using a **Structured Output Parser** and split into individual items for each question.
5.  **Record Keeping (Google Sheets):** Each generated question, along with all its options and the confirmed correct answer, is appended as a new row in a designated **Google Sheet** for centralized record-keeping and review.
6.  **Jotform Quiz Creation (HTTP Request):** The workflow dynamically constructs the required API body, converting the AI-generated questions and options into the necessary fields for a new Jotform. It then uses an **HTTP Request** node to call the Jotform API, **creating a brand-new, ready-to-use quiz form**.
7.  **Final Output:** The final output provides the link to the newly created quiz, which can be shared immediately for submissions.

***

## Requirements

To deploy this automated quiz generator, ensure you have the following accounts and credentials configured in your n8n instance:

* **Jotform Credentials:** An **API Key** is required for both the **Jotform Trigger** (to start the workflow) and for the final **HTTP Request** (to create the new quiz form via the API). **Sign up for Jotform here:** [https://www.jotform.com/?partner=zainurrehman](https://www.jotform.com/?partner=zainurrehman)
* **Google Gemini API Key:** An API key for the **Google Gemini Chat Model** to power the **AI Agent** for question generation.
* **Google Sheets Credentials:** An **OAuth2** or **API Key** credential for the **Google Sheets** node to save the generated questions.
* **Initial Jotform:** A source Jotform that accepts the user input: a **File Upload** field, a **Text** field for the Quiz Title, and a **Number** field for the Number of Questions.

***

**Pro Tip:** After the final **HTTP Request**, add an additional step (like an **Email** or **Slack** node) to automatically send the generated quiz link back to the user who submitted the initial request!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Jotform Trigger, AI Agent, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
