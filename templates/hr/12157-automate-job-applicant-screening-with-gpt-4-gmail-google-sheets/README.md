# 👥 Automate job applicant screening with GPT-4, Gmail & Google Sheets

> ⚡ **78 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automates the initial screening process for new job applications, freeing up your recruitment team to focus on qualified candidates. It receives applications from a webhook, uses OpenAI (GPT-4) to analyze resumes for skill and culture fit, generates interview questions, logs the results to Google Sheets, sends interview invitations via Gmail, and notifies your team on Slack.


## 🚀 Who is this for?
- **HR and Recruitment Teams** looking to automate repetitive screening tasks.
- **Hiring Managers** who want a consistent, data-driven first pass on applicants.
- **Startups and SMBs** aiming to build an efficient, scalable hiring pipeline without a large HR team.


## 💡 How it works
1.  **Receive Application**: The workflow triggers when a new application is submitted via a webhook from your job board or application form.
2.  **Extract & Analyze**: It downloads the resume/CV, extracts the text, and sends it to **OpenAI (GPT-4)** with a custom prompt.
3.  **Score & Generate**: The AI scores the candidate on skill match and culture fit, provides a summary, and generates tailored interview questions based on their experience.
4.  **Log Data**: The evaluation scores, AI summary, and candidate information are appended to a new row in a **Google Sheet** for tracking.
5.  **Schedule Interview**: A personalized email is sent to the candidate via **Gmail** with a link to schedule their interview.
6.  **Notify Team**: A summary card with the AI evaluation and links to the full report is posted in a **Slack** channel to keep the hiring team informed.


## ⚙️ How to set up
1.  **Configure Credentials**: Set up your credentials for OpenAI, Google (for both Sheets and Gmail), and Slack in n8n.
2.  **Webhook URL**: Copy the "Production URL" from the "Webhook: New Application" node and set it as the destination in your job board's webhook settings (e.g., Greenhouse, Lever, Ashby, or a web form).
3.  **Google Sheet**: Create a Google Sheet to track applicants. Update the "G Sheets: Save Evaluation" node with your Spreadsheet ID and Sheet Name. Ensure the columns in your sheet match the data you want to save.
4.  **Customize Prompts & Email**:
    -   Modify the prompts in the two **OpenAI** nodes to match your company's values and the specific job requirements.
    -   Update the **Gmail** node with your email content and the logic for your scheduling link (e.g., Calendly, SavvyCal).


## 📋 Requirements
- An n8n instance (Cloud or self-hosted).
- An **OpenAI API** key.
- A **Google** account for Google Sheets and Gmail.
- A **Slack** workspace.
- A job application source capable of sending webhooks.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
