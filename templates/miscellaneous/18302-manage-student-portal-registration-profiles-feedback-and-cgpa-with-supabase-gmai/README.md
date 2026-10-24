# 🔧 Manage student portal registration, profiles, feedback and CGPA with Supabase, Gmail, Groq and Mistral

> ⚡ **18 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow exposes a single webhook for a student portal and routes requests to Supabase-backed registration, login, feedback tracking with AI-generated reply emails via Groq and Gmail, CGPA calculation via Mistral, and student profile updates.

## How it works
1. Receives a POST request on a webhook and reads an `action` value to route the request to registration, login, feedback submission, CGPA calculation, or profile update.
2. For registration, it extracts and validates the student’s name, email, register number, and password, inserts the record into a Supabase table, sends a Gmail confirmation email, and returns a JSON success or failure response.
3. For login, it looks up the student in Supabase using the submitted email and password, checks the credentials, and returns a JSON success or invalid-credentials response.
4. For feedback submission, it normalizes the submitted student and feedback fields, stores the feedback in a Supabase table, uses Groq (Llama) to generate a personalized thank-you email, sends the reply via Gmail, and returns a JSON response including a preview.
5. For CGPA calculation, it sends the submitted semester GPA/credit data to a Mistral AI agent, parses and validates the returned JSON, and responds with the computed CGPA, total credits, and semesters used.
6. For profile updates, it validates required profile fields, verifies the student exists in Supabase by register number, updates a Supabase “Student Details” table, and returns the updated data or an error message.

## Setup
1. Create a Supabase project with the tables and columns referenced in the workflow (Student Registration, Student Feedback, and Student Details) and add a Supabase API credential in n8n.
2. Add a Gmail OAuth2 credential in n8n and set up the sender account that should send registration and feedback reply emails.
3. Add Groq and Mistral Cloud API credentials in n8n to power the feedback-reply agent and CGPA calculator agent.
4. Copy the production webhook URL for the `student-dashboard` endpoint and configure your frontend to send POST requests with the expected `action` and `data` fields for each operation.

## Additional info
Need Help or Customization?

Digital Biz Tech can help tailor this workflow to your business.

We offer free setup support, including credential configuration and deployment.

Contact: [rajeet.nair@digitalbiz.tech](mailto:rajeet.nair@digitalbiz.tech)
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)

Developer: EBENEZER JENOVA M
Email: [ebenezerjenova9791@gmail.com](mailto:ebenezerjenova9791@gmail.com)

You can also DM us on LinkedIn for any help or customization.

## 🔗 Nodes Used

Webhook, Gmail, Supabase, AI Agent, Mistral Cloud Chat Model, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
