# 👥 Automated resume screening & ranking with Llama 4 AI and Google Workspace

> ⚡ **3,444 views** · 👥 [HR & Recruitment](../)

## Description

# Target Audience
You will find this workflow or template perfect if you are in the internal talent acquisition teams, recruitment agencies, HR professionals, and hiring managers seeking to bulk automate the initial screening of CVs and resumes.
```
 Eg. Automatically get result of candidate who has been  shortlisted/rejected with its rationale and score automatically.
```

By eliminating manual evaluation and screening,  you get smart AI-Agent helping you to have standardized efficient, and scalable solution for handling large volumes of applications. 

With bulk automation, you can focus strategic decision-making rather than tedious screening tasks, ensuring a faster, more accurate, and fair hiring process.  
 
### Key focus 
This workflow focusses on having a more organized file-folder management, trackable candidate cv, maintainable job description, autonomous ai-agent.
- Organized Folder-File Structure – CVs are automatically categorized based on their status, ensuring a structured workflow and easy retrieval

- Candidate Tracker – A real-time tracking system records the state of each CV, allowing recruiters to monitor the shortlisted, rejected, or KIV (Keep in View) candidates.

- AI Agent for Decision Automation – The AI autonomously orchestrates screening decisions, replacing manual LLM configurations with dynamic AI-driven evaluations for scalability and accuracy.

- Maintainable Job Description Management – A structured job description file ensures continuous updates, keeping hiring criteria flexible and aligned with recruitment needs.

- Email Notifications – The system automatically sends receipt confirmations upon processing completion, providing timely updates to recruiters.

# Features - Workflow 
### **Automated Resume Screening Workflow**  

This workflow leverages **Groq Llama4 for intelligent resume analysis**, speeding the screening process by generating a **matching score, result (shortlisted/rejected/kiv), and key insights/rationale** into their suitability for provided **job description**.  
 
 

#### **Step-by-Step Process:**  

- **Monitors Google Drive:** Listens and checks for new resume cv in google drive   .  
- **Retrieve Resume:** Downloads the CV resumes from google drive .  
- **Extract Resume Data:** Extract **text content** from CV resume PDF files  
- **Extract Job Description Data:** Extract **text content** from job description

- **Analyze with Groq:**  
  - Generate a **matching score** based on job requirements.  [SCORE: 1-10]
  - Provide **decision** into their job suitability.  [SHORTLISTED/REJECTED/KIV]
  - Provide **actionable insights** into their job suitability.  [REASON]

This ensures a **fast, efficient, and accurate screening process**, eliminating manual evaluation. 

  

# Setup Guide
### **Step-by-Step Instructions**   
Ensure all credentials are ready and setup (groq, gdrive ,gmail, gsheet, gdoc)
View official n8n documentation on node setup accordingly.
See also the notes of setup .
 
### **Folder & File Setup**    
### 1. Create a google-drive folder like this
 
[View directory example](https://drive.google.com/drive/folders/1Uh7VdJORE03YBJkCmvr1TXg_esbiNnTV?dmr=1&ec=wgc-drive-hero-goto)

![Directory EXAMPLE](https://github.com/dragonjump/n8n-ai-agent-screening/blob/main/screenshot1.png?raw=true)

### 2. Create a job description like this
 
[View file example](https://docs.google.com/document/d/12dv1AXaotpJ3ST1nUI-QgCoi5SJjM52zeHmjhwZUtvs/edit?usp=drive_link)

![Directory EXAMPLE](https://github.com/dragonjump/n8n-ai-agent-screening/blob/main/screenshot2.png?raw=true)


### 3. Configure a tracker like this ( Candidate Name, AI Score,AI Verdict, AI Reason)
 
[View file example](https://docs.google.com/spreadsheets/d/1SwnbH_dnqPMho7SqX1LKAjFMc0YvLBGok4I1AdgrJjE/edit?gid=843593464#gid=843593464)
  email conversations report as you like.

You are ready to go!

## 🔗 Nodes Used

Google Drive, Google Docs, Google Drive Trigger, AI Agent, Extract from File, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
