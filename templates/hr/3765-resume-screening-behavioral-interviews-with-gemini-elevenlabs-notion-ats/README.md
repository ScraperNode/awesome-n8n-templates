# 👥 Resume screening & behavioral interviews with Gemini, Elevenlabs, & Notion ATS

> ⚡ **7,183 views** · 👥 [HR & Recruitment](../)

## Description

### Description
Candidate Engagement | Resume Screening | AI Voice Interviews | Applicant Insights

This intelligent n8n workflow automates the process of extracting and scoring resumes received through a company career page, populating a Notion database with AI insights where the recruiter or hiring manager can automatically invite the applicant to an instant interview with an Elevenlabs AI voice agent.  After the agent conducts the behavior-based interview, the workflow scores the overall interview against customizable evaluation criteria and updates the Notion database with AI insights about the applicant.

[AI Powered Resume Screening & Voice AI that interviews like a Recruiter!](https://drive.google.com/uc?export=view&id=197WXAPUe0256SJniNEbBQ8A9QNByaLCM)

[AI Insights in Notion dashboard](https://drive.google.com/uc?export=view&id=19A7qjEjN0hCUNVwxxsUyh3TUUqYziPg1)

### Who is this for?

HR teams, recruiters, and talent acquisition professionals

This workflow is ideal for HR teams, recruiters, and talent acquisition professionals looking for a foundational, extensible framework to automate early stage recruiting. Whether you're exploring AI for the first time or scaling automation across your hiring process, this template provides a base for screening, interviewing, and tracking candidates—powered entirely by n8n, Elevenlabs, Notion, and LLM integrations.  Be sure to consult State and Country regulations with respect to AI Compliance, AI Bias Audits, AI Risk Assessment, and disclosure requirements.

### What problem is this workflow solving?

Manually screening resumes and conducting initial interviews slows down hiring. This template automates:

**Resume assessment against job description.**

**Scheduling first and second round interviews.**

**First-round AI-led behavioral interviews with AI scoring assessment.**

**Centralized tracking of AI assessments in Notion.**

### What this does

This customizable tool, configured to manage 3 requisitions in parallel, automates the application process, resume screen, and first round behavioral interviews. 

### Pre-screen Applicants with AI

Immediately screens and scores applicant’s resume  against the job description.  The AI Agent generates a score and an AI assessment, adding both to the applicant's profile in Notion.  Notion automatically notifies hiring manager when a resume receives a score of 8 or higher.

### Voice AI that Interviews like a Recruiter

AI Voice agent adapts probing questions based on applicant’s response and intelligently dives deeper into skill and experience to assess answers against a scoring rubric for each question.  

### AI Applicant Insights in Notion

Get detailed post-interview AI analysis, including interview recordings and question-by-question scoring breakdowns to help identify who you should advance to the next stage in the process.  

AI insight provided in Notion ATS dashboard with drag and drop to advance top candidates to the next interview stage.

### How it works
[Link to Notion Template](https://www.notion.so/marketplace/templates/ai-recruiter?cr=cre%3Aculturedatasolutions)
### Notion Career Page:

Notion Career Page published to web, can be integrated with your preferred job board posting system.

### Notion Job Posting:

Gateway for applicants to apply to active requisitions with ‘Click to Apply’ button.

### Application Form:

N8N webform embedded into Notion job posting captures applicant information and routes for AI processing.

### AI Agent evaluates resume against job description

AI Agent evaluates resume against the job description, stored in Notion, and scores the applicant on a scale of 1 to 10, providing rationale for score.

### Creates ATS record in Notion with assessment and score

Workflow creates the applicant record in the Notion ATS where Recruiters and Hiring Managers see applicants in a filtered view, sorted by AI generated resume score.  Users can automatically advance applicants to the next step in process (AI Conversation interview) with drag and drop functionality. 

### Invites applicant to an Instant AI Interview

Dragging the applicant to AI Interview step in the Notion ATS dashboard triggers Notion automation that sends the applicant an email with a link to the Elevenlabs Conversation AI Agent.  The AI Conversation Agent is provided with instructions on how to conduct the behavior-based interview, including probing questions, for the specific role.

### AI Conversation Agent Behavior Based Interview

The email link resolves to an [ElevenLabs](https://elevenlabs.io/) AI Conversation agent that has been instructed to interview applicants using pre-defined interview questions, scoring rubric, job description, and company profile.  The Elevenlabs agent assesses the applicant on a scale of 1 to 5 for each interview question and provides an overall assessment of the interview based on established evaluation criteria.


[Click to hear AI Voice Agent in action](https://drive.google.com/uc?export=download&id=16YgEnDt4RWU1U7i_la5b3jGNDUcMpvdx)


Example:
**Role:** IT Support Analyst
**Mark:**  Elevenlabs AI Agent instructed to interview applicants for specific role
**Gemini:** Google AI coached to answer questions as an IT Support Analyst being interviewed


### Updates Notion record with Interview Assessment and Score

All results—including the conversation transcript, interview scores, and rationale for assessment are automatically added back to the applicant’s profile in Notion where the Hiring Manager can validate the AI assessment by skimming through the embedded audio file.

AI Interview Overall Score: **1 to 5** based on response to all questions and probes.


AI Agent confirms that it was able to evaluate the interview using the assigned rubric.

AI Interview Criteria Score: **Success/Failure** based on response to individual interview questions.



### Invites applicant to second interview with Hiring Manager

Dragging the applicant to the **‘Hiring Manager Interview’** step in the Notion ATS dashboard triggers a Notion automation that sends an email with a link to the Hiring Manager’s calendar scheduling solution. 

### Configuration and Set Up
### Accounts & API Keys
You wil need accounts and credentials for:

n8n (hosted or self-hosted) 
Elevenlabs (for AI Conversation Agent) 
Gemini (for LLM model access)
Google Drive (to back up applicant data)
Calendly (to automate interview scheduling)
Gmail (to automate interview scheduling)

### Data / Documents to implement

Job Descriptions for each role
Interview questions for each role
Evaluation criteria for each interview question

### Notion Set Up


### Customize your Notion Career Page
[Link to Free Notion Template that enables workflow:](https://www.notion.so/marketplace/templates/ai-recruiter?cr=cre%3Aculturedatasolutions)

### Update Notion job description database
-update **job description(s)** for each role
-add **interview questions** to the job description database page in Notion
-add **evaluation criteria** to the job description database page in Notion
-edit each **‘Click to Apply’ button** in the job description template so it resolves to the corresponding N8N 'Application Form' webform production URL (detail provided below)

### Notion Applicant Tracker

In the Applicant Tracker database, update position titles, tab headings, in the custom database view (Notion) so it reflects the title of the position you are posting.  Edit the filter for each tab so it matches the position title.

### Notion Email Automation

Update Notion automation templates used to invite applicants to the AI Interview and Hiring Manager interview. Note: Trigger email automation by dragging applicant profile to the next Applicant Comm Status in the Applicant Tracker.

**AI Interview invite** template: revise position title to reflect the title of the role you are posting; include the link to your Conversation AI Agent for that role in the email body. Note: each unique role will use an Elevenlabs AI conversation agent designed for that role.

**Hiring Manager Interview invite** template: revise position title to reflect the title of the role you are posting; include the link to your Calendly page or similar solution provider to automate interview scheduling.

### N8N Configuration

### Workflow 1

**Application Forms (3 Nodes - one for each job)**

Update the N8N form title and description to match the job description you configured in Notion.  
Confirm Job Code in Applicant Form node matches Job Code in Notion for that position.
Edit the Form Response to customize the message you want displayed after applicant clicks submit. 

**Upload CV - Google Drive**

Authenticate your Google Drive account and select the folder that will be used to store resumes

**Get Job Description - Notion**

Authenticate your Notion account and select your Career Page from the list of databases that contain your job descriptions. 

**Applicant Data Backup - Google Sheet** 

Create a Google Sheet where you will track applicant data for AI Compliance reporting requirements.  Open the node in n8n and use the field names in the node as Google Sheet column headings.

### Workflow 2

**Elevenlabs Web Hook (Node 1)**

Edit the Web Hook POST node and copy your production URL that is displayed in the Node. This URL is entered into the Elevenlabs AI Conversation Agent post-call webhook described below.

**AI Agent**

Authenticate your LLM model (Gemini in this example) and add your Notion database as a tool to pull the evaluation_criteria hosted in Notion for the specific role.

**Extract Audio**

Create an Elevenlabs API key for your conversation agent and enter that key as a json header for the Extract Audio node

**Upload Audio to Drive - Google Drive**

Authenticate your Google Drive account and select the folder that will be used to store the audio file.

### Elevenlabs Configuration

Create an Elevenlabs account

### Create Conversation AI Agent

**Add First Message and Systems Prompt:**

Design your ‘First Message’ and ‘Systems Prompt’ that guides the AI agent conducting the interview.
*Tool Tip: provide instruction that limits the number of probes per interview question.*

**Knowledge Base:** 
Upload your role specific interview questions and job description, using the same text that is stored in your Notion Career page for the role.  You can also add a document about your company and instruct the Elevenlabs agent to answer questions about culture, strategy, and company growth. 

**Analysis: Evaluation Criteria:**
Add your evaluation criteria, less than 2000 characters, for each interview question / competency.

**Analysis: Data Collection:**
Add the following elements, using the exact character string represented below.

phone_number_AI_screen
"capture applicant's phone number provided at the start of the conversation and share this as a string, integers only."

full_name
"capture applicant's full name provided at the start of the conversation."

**Advanced: Max Duration**
Set the max duration for interview in seconds.  The AI Agent will timeout at the max duration.   

**Conversation AI Widget:**
Customize your AI Conversation Agent landing page, including the position tile and company name.

**AI Conversation Agent URL:**
Copy the AI Conversation Agent URL and add it to your Notion email template triggered by the AI Interview email automation. Use a custom AI Agent URL for each distinct job description.

**Enable your Elevenlabs Post-Call Webhook for your Conversation Agent:** 

Log into your Elevenlabs account and go to Conversational AI Settings and click on Post-Call Web Hook.  This is where you enter the production URL from the N8N Web Hook node (Workflow 2).  This sends the AI Voice Agent output to your n8n workflow which feeds back to your Notion dashboard.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Notion, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
