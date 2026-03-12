# 🤖 AI resume analysis & candidate evaluation with Slack and Google Sheets

> ⚡ **522 views** · 🤖 [AI Chatbots & Agents](../)

## Description

# Create AI-Powered Chatbot for Candidate Evaluation on Slack
[![Watch the video](https://wisestackai.s3.ap-southeast-1.amazonaws.com/building-an-ai-powered-chatbot-for-candidate-evaluation-on-slack.jpg)](https://www.youtube.com/watch?v=NAn5BSr15Ks)
&gt; This workflow connects a Slack chatbot with AI agents and Google Sheets to automate candidate resume evaluation. It extracts resume details, identifies the applied job from the message, fetches the correct job description, and provides a summarized evaluation via Slack and tracking sheet. Perfect for HR teams using Slack.

## **Who’s it for**
This workflow is designed for:
- **HR Teams**, **Recruiters**, and **Hiring Managers**  
- Working in software or tech companies using **Slack**, **Google Sheets**, and **n8n**
- Who want to **automate candidate evaluation** based on uploaded profiles and applied job positions

## **How it works / What it does**
This workflow is triggered when a **Slack user mentions the HR bot** and attaches a **candidate profile PDF**.
The workflow performs the following steps:
1. **Trigger from Slack Mention**  
   - A user mentions the bot in Slack with a message like:  
     `@HRBot Please evaluate this candidate for the AI Engineer role.`  
     (with PDF attached)
2. **Input Validation**  
   - If no file is attached, the bot replies:  
     _"Please upload the candidate profile file before sending the message."_
3. **Extract Candidate Profile**  
   - Downloads the attached PDF from Slack  
   - Uses `Extract from File` to parse the resume into text
4. **Profile Analysis (AI Agent)**  
   - Sends the resume text and message to the `Profile Analyzer Agent`
   - Identifies:
     - Candidate name, email, and summary
     - Applied position (from message)
   - Looks up the **Job Description PDF URL** using Google Sheets
5. **Job Description Retrieval**  
   - Downloads and parses the matching JD PDF
6. **HR Evaluation (AI Agent)**  
   - Sends both the **candidate profile** and **job description** to `HR Expert Agent`
   - Receives a summarized **fit evaluation** and insights
7. **Output and Logging**  
   - Sends evaluation result back to Slack in the original thread  
   - Updates a **Google Sheet** with evaluation data for tracking

## **How to set up**
1. **Slack Setup**
   - Create a Slack bot and install it into your workspace
   - Enable the `app_mention` event and generate a **bot token**
   - Connect Slack to n8n using **Slack Bot credentials**
2. **Google Sheets Setup**
   - Create a sheet mapping `Position Title → Job Description URL`
   - Create another sheet for logging evaluation results
3. **n8n Setup**
   - Add a **Webhook Trigger** for Slack mentions
   - Connect Slack, Google Sheets, and GPT-4 credentials
   - Set up agents (`Profile Analyzer Agent`, `HR Expert Agent`) with appropriate prompts
4. **Deploy & Test**
   - Mention your bot in Slack with a message and file
   - Confirm the reply and entry in the evaluation tracking sheet

## **Requirements**

- n8n (self-hosted or cloud)
- Slack App with Bot Token
- OpenAI or Azure OpenAI account (for GPT-4)
- Google Sheets (2 sheets: job mapping + evaluation log)
- Candidate profiles in PDF format
- Defined job titles and descriptions

## **How to customize the workflow**

You can easily adapt this workflow to your team’s needs:
| Customization Area       | How to Customize                                                                 |
|--------------------------|----------------------------------------------------------------------------------|
| Job Mapping Source       | Replace Google Sheet with Airtable or Notion DB                                 |
| JD Format                | Use Markdown or inline descriptions instead of PDF                              |
| Evaluation Output Format | Change from Slack message to Email or Notion update                             |
| HR Agent Prompt          | Customize to match your company tone or include scoring rubrics                 |
| Language Support         | Add support for bilingual input/output (e.g., Vietnamese & English)             |
| Workflow Trigger         | Trigger from slash command or form instead of `@mention`                        |

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Google Drive, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
