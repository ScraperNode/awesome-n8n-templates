# 🎯 Automated email classification & response system with Gmail, GPT, and Sheets

> ⚡ **1,407 views** · 🎯 [AI Summarization & Classification](../)

## Description

## Email Automation Workflow Template

This n8n template demonstrates how to automate email classification, labeling, draft generation, and logging using Gmail, OpenAI, and Google Sheets.  
Use cases include customer support management, sales inquiry handling, and keeping track of incoming emails efficiently in a structured way.

---

## Good to know

- Gmail OAuth2 credentials are required for sending, labeling, and drafting emails.  
- OpenAI credentials are needed for generating draft responses.  
- Google Sheets must have `Logs` and `Errors` sheets with the correct columns (`Original Email`, `Decision`, `Output Email` for Logs; `Node with Error`, `Error Message`, `Time`, `Execution ID`, `Workflow ID` for Errors).  
- The workflow is designed to handle multiple emails simultaneously and continues even if a node fails.

---

## How it works

1. The workflow is triggered by new emails in Gmail.  
2. Emails are classified into categories: Support, Sales, Complaints, Information, or Other.  
3. Based on the classification:
   - Support and Sales emails → Draft response generated with OpenAI and labeled in Gmail.  
   - Complaints, Information, and Other → Emails labeled accordingly.  
4. All processed emails and generated outputs are logged in Google Sheets (`Logs`).  
5. Any workflow errors are captured in the `Errors` sheet for debugging.

---

## How to use

- Test with a sample email to confirm classification, draft generation, labeling, and logging work correctly.  
- Update Google Sheets nodes with your document ID and sheet names.  

---

## Requirements

- Gmail account with OAuth2 credentials  
- OpenAI account for draft generation  
- Google Sheets account for logging  

---

## Customizing this workflow

- Add new email categories or refine existing ones.  
- Adjust draft responses or templates for Support/Sales.  
- Integrate with other apps or systems for more advanced automation (e.g., CRM updates, notifications).

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, OpenAI Chat Model, OpenAI, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
