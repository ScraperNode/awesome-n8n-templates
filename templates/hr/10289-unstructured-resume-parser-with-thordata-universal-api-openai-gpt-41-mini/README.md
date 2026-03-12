# 👥 Unstructured resume parser with Thordata Universal API + OpenAI GPT-4.1-mini

> ⚡ **123 views** · 👥 [HR & Recruitment](../)

## Description

## Who this is for

This workflow is designed for:

* Recruiters, Talent Intelligence Teams, and HR tech builders automating resume ingestion.
* Developers and data engineers building ATS (Applicant Tracking Systems) or CRM data pipelines.
* AI and automation enthusiasts looking to extract structured JSON data from unstructured resume sources (PDFs, DOCs, HTML, or LinkedIn-like URLs).

## What problem this workflow solves

Resumes often arrive in different formats (PDF, DOCX, web profile, etc.) that are difficult to process automatically.
Manually extracting fields like candidate name, contact info, skills, and experience wastes time and is prone to human error.

This workflow:

* Converts any unstructured resume into a **structured JSON Resume** format.
* Ensures the output aligns with the [JSON Resume Schema](https://jsonresume.org/schema/).
* Saves the structured result to **Google Sheets** and local disk for easy tracking and integration with other tools.

## What this workflow does

The workflow automates the entire resume parsing pipeline:

### Step 1: Trigger

* Starts manually with an **Execute Workflow** button.

### Step 2: Input Setup

* A **Set Node** defines the `resume_url` (e.g., a hosted resume link).

### Step 3: Resume Content Extraction

* Sends the URL to **Thordata Universal API**, which retrieves the web content, cleans HTML/CSS, and extracts structured text and metadata.

### Step 4: Convert HTML → Markdown

* Converts the HTML content into Markdown to prepare for AI model parsing.

### Step 5: JSON Resume Builder (AI Extraction)

* Sends the Markdown to **OpenAI GPT-4.1-mini**, which extracts:

  * `basics`: name, email, phone, location
  * `work`: companies, roles, achievements
  * `education`: institutions, degrees, dates
  * `skills`, `projects`, `certifications`, `languages`, and more
* The output adheres to the **JSON Resume Schema**.

### Step 6: Output Handling

* Saves the final structured resume:

  * Locally to disk
  * Appends to a **Google Sheet** for analytics or visualization.

## Setup

### Prerequisites

* n8n instance (self-hosted or cloud)
* Credentials for:

  * **Thordata Universal API** (HTTP Bearer Token). First time users [Signup](https://dashboard.thordata.com/register?invitation_code=RJXW9YF7)
  * **OpenAI API Key**
  * **Google Sheets OAuth2** integration

### Steps

1. Import the provided workflow JSON into n8n.
2. Configure your **Thordata Universal API Token** under *Credentials → HTTP Bearer Auth*.
3. Connect your **OpenAI** account under *Credentials → OpenAI API*.
4. Link your **Google Sheets** account (used in the `Append or update row in sheet` node).
5. Replace the `resume_url` in the **Set Node** with your own resume file or hosted link.
6. Execute the workflow.

## How to customize this workflow

### Input Sources

* Replace the **Manual Trigger** with:

  * A **Webhook Trigger** to accept resumes uploaded from your website.
  * A **Google Drive / Dropbox Trigger** to process uploaded files automatically.

### Output Destinations

* Send results to:

  * **Notion**, **Airtable**, or **Supabase** via API nodes.
  * **Slack / Email** for recruiter notifications.

### Language Model Options

* You can upgrade from `gpt-4.1-mini` → `gpt-4.1` or a **custom fine-tuned model** for improved accuracy.

## Summary

Unstructured Resume Parser with Thordata Universal API + OpenAI GPT-4.1-mini — automates the process of converting messy, unstructured resumes into clean, structured JSON data. It leverages Thordata’s Universal API for document ingestion and preprocessing, then uses OpenAI GPT-4.1-mini to extract key fields such as name, contact details, skills, experience, education, and achievements with high accuracy.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Markdown, OpenAI Chat Model, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
