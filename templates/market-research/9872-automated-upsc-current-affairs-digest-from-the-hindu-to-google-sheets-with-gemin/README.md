# 📊 Automated UPSC current affairs digest from The Hindu to Google Sheets with Gemini AI

> ⚡ **142 views** · 📊 [Market Research & Insights](../)

## Description

This template sets up a scheduled automation that scrapes the latest news from The Hindu website, uses a Google Gemini AI Agent to filter and analyze the content for relevance to the **Competitive Exams like UPSC Civil Services Examination (CSE) syllabus**, and compiles a structured daily digest directly into a Google Sheet. It **saves hours of manual reading and note-taking** by providing concise summaries, subject categorization, and explicit UPSC importance notes.

## Who’s it for
This workflow is essential for:
1. **UPSC/CSE Aspirants** who require a curated, focused, and systematic daily current affairs digest.
2. **Coaching Institutes** aiming to instantly generate structured, high-quality study material for their students.
3. **Educators and Content Creators** focused on Governance, Economy, International Relations, and Science & Technology.

## How it works / What it does
This workflow runs automatically every morning (scheduled for 7 AM by default) to generate a ready-to-study current affairs document.
1. **Scraping**: The Schedule Trigger fires an HTTP Request to fetch the latest news links from The Hindu's front page.
2. **Data Curation:** The HTML and Code in JavaScript nodes work together to extract and pair every article URL with its title.
3. **Content Retrieval:** For each identified link, a second HTTP Request node fetches the entire article body.
4. **AI Analysis and Filtering:** The AI Agent uses a detailed prompt and the Google Gemini Chat Model to perform two critical tasks:
	1. **Filter:** It filters out all irrelevant articles (e.g., sports results, local crime) to keep only the 5-6 most important UPSC-relevant pieces (Polity, Economy, IR, etc.).
	6. **Analyze:** For the selected articles, it generates a **Brief Summary**, identifies the Main Subject, and clearly articulates Why it is Important for the UPSC Exam.
7. **Storage:** The AI Agent calls the integrated Google Sheets Tool to **automatically append** the structured, analyzed data into your designated Google Sheet, creating your daily ready-made notes.

## Requirements
To deploy this workflow, you need:

1. **n8n Account:** (Cloud or self-hosted).
2. **Google Gemini API Key:** For connecting the Google Gemini Chat Model and powering the AI Agent.
3. **Google Sheets Credentials:** For reading/writing the final compiled digest.
4. **Target Google Sheet:** A spreadsheet with the following columns: Date, URL, Subject, Brief Summary, and What is Important.

## How to set up
- **Credentials Setup:** Connect your Google Gemini and Google Sheets accounts via the n8n Credentials Manager.
- **Google Sheet Linking:** In the **Append row in sheet and Append row in sheet in Google Sheets1 nodes**, replace the **placeholder IDs and GIDs** with the actual ID and sheet name of your dedicated UPSC notes spreadsheet.
- **Scheduling:** Adjust the time in the **Schedule Trigger: Daily at 7 AM node** if you want the daily analysis to run at a different hour.
- **AI Customization (Optional):** You can refine the System Message in the **AI Agent: Filter & Analyze UPSC News node** to focus the analysis on specific exam phases (e.g., Prelims only) or adjust the priority of subjects.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
