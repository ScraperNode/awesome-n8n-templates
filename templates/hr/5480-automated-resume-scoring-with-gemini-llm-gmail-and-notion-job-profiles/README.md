# 👥 Automated resume scoring with Gemini LLM, Gmail and Notion job profiles

> ⚡ **4,199 views** · 👥 [HR & Recruitment](../)

## Description

**This n8n template demonstrates how to use AI to score the all Resumes by matching it with Job profile**

Problem Statement: A Hr person is flooded with resume and spends hours manually checking each to find most suitable ones.

**How it works**
1. It is linked to Gmail Trigger which upon receving any mail with specific subject will check for the attachment.
2. Attachment will be parsed to understand the resume
3. Candidate informtion will be broken into Personal, Eductional and Professional type
4. Job profile will be pulled from Notion Board
5. A HR expert powered by Gemini LLM will score each profile on basis on its relevancy 
6. Information will be updated back to Gsheet 
7. Message lable will be updated back for clarity

**How to use**
1. The gmail trigger node is used as an example but feel free to replace this with other triggers such as webhook or even a form.


**Requirements**
Gemini account for LLM
Google sheet for upload
Gmail as trigger
Llama parse credentials

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Notion, Gmail Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
