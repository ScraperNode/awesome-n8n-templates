# 🔬 Grade PDF assignments with Google Gemini and upload reports to Google Drive

> ⚡ **29 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## AI Assignment Grader with Automated Reporting

### Who’s it for
This workflow is designed for educators, professors, academic institutions, coaching centers, and edtech platforms that want to automate the grading of written assignments or test papers. It’s ideal for scenarios where consistent evaluation, detailed feedback, and structured result storage are required without manual effort.

---

### What it does / How it works
This workflow automates the end-to-end grading process for student assignments submitted as PDFs.

1. A student’s test paper is uploaded via a webhook endpoint.
2. The workflow extracts text from the uploaded PDF file.
3. Student metadata (name, assignment title) is prepared and combined with the extracted answers.
4. A predefined answer script (model answers with marking scheme) is loaded into the workflow.
5. An AI grading agent powered by **Gemini** compares the student’s responses against the answer script.
6. The AI:
   - Evaluates each question
   - Assigns marks based on correctness and completeness
   - Generates per-question feedback
   - Calculates total marks, percentage, and grade
7. The structured grading output is converted into:
   - An HTML grading report
   - A CSV file for records
8. The final CSV grading report is automatically uploaded to **Google Drive** for storage and sharing.

All grading logic runs automatically once the test paper is submitted.

---

### Requirements
- Google Gemini (PaLM) API credentials
- Google Drive OAuth2 credentials
- A webhook endpoint configured in n8n
- PDF test papers submitted in a supported format
- A predefined answer script with marks per question

---

### How to set up
1. Connect your Google Gemini credentials in n8n.
2. Connect your Google Drive account and select the destination folder.
3. Enable and copy the webhook URL for test paper uploads.
4. Customize the **Load Answer Script** node with your assignment’s correct answers and marking scheme.
5. (Optional) Adjust grading instructions or output format in the AI Agent prompt.
6. Test the workflow by uploading a sample PDF assignment.

---

### How to customize the workflow
- Update the AI grading rubric to be stricter or more lenient.
- Modify feedback style (short comments vs detailed explanations).
- Change grading scales, total marks, or grade boundaries.
- Store results in additional systems (LMS, database, email notifications).
- Add plagiarism checks or similarity scoring before grading.
- Generate PDF reports instead of CSV/HTML if required.

---

This workflow enables fast, consistent, and scalable assignment grading while giving students clear, structured feedback and educators reliable records.

## 🔗 Nodes Used

Webhook, Google Drive, AI Agent, Structured Output Parser, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
