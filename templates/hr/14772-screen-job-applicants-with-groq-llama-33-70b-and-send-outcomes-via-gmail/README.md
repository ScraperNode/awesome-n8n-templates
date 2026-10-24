# 👥 Screen job applicants with Groq llama-3.3-70b and send outcomes via Gmail

> ⚡ **11 views** · 👥 [HR & Recruitment](../)

## Description

## How it works  
This workflow automates candidate screening by receiving application data via a webhook and structuring it for AI evaluation. An AI agent analyzes the candidate profile and assigns a score with reasoning. The score is extracted and evaluated against a threshold to decide if the candidate is shortlisted or rejected. Based on the result, the workflow either stores the candidate in Google Sheets and sends a success email or sends a rejection email.

## Step-by-step  

- **Receive and structure application data**  
  - **Webhook1** – Receives job and candidate data from external sources.  
  - **Edit Fields1** – Formats and organizes job and candidate information into structured fields.  

- **Evaluate candidate with AI**  
  - **AI Agent** – Sends structured data to AI for scoring and evaluation.  
    - **Groq Chat Model1** – Provides the language model used for generating candidate score and reasoning.  
  - **Code in JavaScript** – Extracts score and reason from AI response for further processing.  

- **Filter, store and notify results**  
  - **If** – Checks if the candidate score meets the defined threshold.  
  - **Append row in sheet** – Stores shortlisted candidate details in Google Sheets.  
  - **Send a message3** – Sends a shortlisted confirmation email to the candidate.  
  - **Send a message1** – Sends a rejection email if the candidate does not qualify.  

## Why use this?  

- Automates candidate screening and eliminates manual evaluation  
- Ensures consistent and unbiased scoring using AI  
- Instantly notifies candidates about their application status  
- Maintains a structured shortlist database in Google Sheets  
- Saves time for HR teams and improves hiring efficiency

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
