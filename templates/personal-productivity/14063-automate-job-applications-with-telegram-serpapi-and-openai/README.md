# ⚡ Automate job applications with Telegram, SerpAPI, and OpenAI

> ⚡ **403 views** · ⚡ [Personal Productivity](../)

## Description

## Who is this for?

This workflow is for job seekers who want to automate their entire application pipeline — from discovering job postings to generating personalized cover letters, CVs, and organizing everything in Google Drive and Google Sheets. It is especially useful for professionals applying to many roles in parallel and who want a Telegram-based mobile-first experience.

## What this workflow does

This n8n workflow turns your Telegram bot into a fully automated job application machine. It supports two input modes:

- **URL mode**: Send a job posting URL via Telegram. An AI Agent (OpenAI with web search) visits the page, extracts structured job data (title, company, location, salary, description, language), and kicks off the document generation pipeline.
- **Keyword mode**: Send a search keyword (e.g. "Data Analyst") via Telegram. The workflow queries Google Jobs via SerpAPI, parses the results, filters out irrelevant roles (internships, part-time, student jobs, etc.), and lets you approve or reject each match directly in Telegram.

For every approved job, the workflow:

1. **Logs all job details** (title, company, links, salary, description) in a Google Sheets tracker
2. **Generates a localized cover letter** as a styled PDF using an HTML-to-PDF API
3. **Generates a personalized CV** as a styled PDF, dynamically tagged with the target position and company
4. **Uploads both documents** to Google Drive into a dedicated folder per application
5. **Updates the Google Sheets row** with the Drive folder link
6. **Sends a confirmation** back to Telegram when done

## How to set up

1. **Import the workflow** into your n8n instance
2. **Configure credentials** for:
   - Telegram Bot API (create a bot via BotFather)
   - OpenAI API (GPT model with web search capability)
   - SerpAPI (for Google Jobs search)
   - Google Sheets OAuth2
   - Google Drive OAuth2
   - HTML CSS to PDF API ([htmlcsstopdf.com](https://htmlcsstopdf.com))
3. **Create a Google Sheet** with the following columns: `via`, `title`, `job_id`, `location`, `posted_at`, `salary`, `type`, `share_link`, `description`, `company`, `link1`–`link10`, `application_platform_1`–`application_platform_10`, `link_drive_ornder`, `status`, `Status-tracking`
4. **Create a root folder** in Google Drive for all your job application subfolders
5. **Update the Google Sheets document ID** and **Google Drive folder ID** in the relevant nodes (search for `YOUR_GOOGLE_SHEETS_ID` and `YOUR_GOOGLE_DRIVE_FOLDER_ID`)
6. **Update the Telegram user ID** in the Telegram Trigger node to restrict access to your account
7. **Customize the HTML templates** in the cover letter and CV nodes with your own personal information, experience, and styling

## Requirements

- n8n instance (self-hosted or cloud)
- Telegram Bot (via BotFather)
- OpenAI API key
- SerpAPI key
- Google Sheets & Google Drive OAuth2 credentials
- HTML CSS to PDF API account (community node: `n8n-nodes-htmlcsstopdf`)

**Note:** This workflow uses the community node `n8n-nodes-htmlcsstopdf`. It works on self-hosted n8n instances only. Install it via: Settings &gt; Community Nodes &gt; `n8n-nodes-htmlcsstopdf`.

## How to customize

- **Cover letter text**: Edit the HTML content in the cover letter nodes to match your writing style and experience
- **CV content**: Edit the HTML in the CV nodes with your own work history, skills, certifications, and education
- **Filter criteria**: Adjust the filter node to change which job types are filtered out (currently filters internships, part-time, student jobs, freelance, etc.)
- **Language detection**: Copy the paths of steps 4 & 5 in different language
- **Styling**: Modify the CSS in the HTML-to-PDF nodes to change the visual design of your cover letter and CV

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Drive, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
