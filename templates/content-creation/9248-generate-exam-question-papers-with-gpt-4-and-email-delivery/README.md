# 🎬 Generate exam question papers with GPT-4 and email delivery

> ⚡ **512 views** · 🎬 [Content Creation & Video](../)

## Description

## Who Is This For?

This workflow is designed for educators, universities, examination departments, and EdTech institutions that need a faster, smarter, and standardized way to prepare exam question papers.

## What Problem Does This Solve?

Creating balanced, outcome-based question papers can take hours or even days of manual effort. Faculty often struggle to:

- Ensure syllabus coverage across units
- Maintain Bloom’s Taxonomy alignment
- Keep a consistent difficulty balance
- Format papers in institution-specific templates

# **How it works**

This workflow automatically generates an exam question paper based on syllabus topics submitted via a form and sends it to the entered email address.

Here’s the flow in simple steps:

**Form Submission** – A student or faculty fills out a form with subject code, syllabus topics, and their email.

**AI Question Generation** – The workflow passes the syllabus to AI agents (Part A with 2 Marks, Part B with 13 Marks, and Part C with 14 Marks) to create question sets. The marks and the no. of question generated can be customized according to the convenience. 

**Merging Questions** – All AI-generated questions are combined into a single structured document.

**Format into HTML** – The questions are formatted into a clean HTML exam paper (can also be extended to PDF).

**Send by Email**– The formatted exam paper is sent to the user’s email (with option to CC/BCC).

# Set up steps

**Connect Accounts** 

- Connect your OpenAI (or LLM) credentials for AI-powered question generation.
- Connect your Gmail (or preferred email service) to send emails.

**Prepare Form**

- Create an n8n form trigger with required fields:
   - Subject with Code
   - Syllabus for Unit 1, 2, 3…
   - Email to receive the paper

**Customize Question Generation**

- Modify the AI prompts for Parts A, B, and C to fit your syllabus style (e.g., 2-mark, 13-mark, 14-mark).

**Format the Exam Paper**

- Adjust the HTML template to match your institution’s exam paper layout.

**Test & Deploy**

- Submit a test form entry.
- Check the received email to ensure formatting looks good.
- Deploy the workflow to production for real usage.


## Need help customizing?


<p>
  <a href="mailto:jgracewell02@gmail.com">Contact Me</a> |
  <a href="https://www.linkedin.com/in/jeffin-gracewell-0634007b/" target="_blank">
    LinkedIn
  </a>
</p>

## 🔗 Nodes Used

Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
