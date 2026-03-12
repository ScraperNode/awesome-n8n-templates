# 🎣 Automate lead nurturing with ChatGPT-4o & Gemini for personalized email drafting

> ⚡ **352 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Overview
This n8n workflow automates the entire process of capturing leads, enriching their data with company information using an AI Agent, and then generating highly personalized introductory emails (using ChatGPT-4o) saved as drafts in your Gmail account. This prepares your sales team for a high-quality outreach with minimal manual effort.

## Requirements
To use this workflow, you need the following accounts and credentials:

#### Google Sheets Account: 
To store and track lead information (the workflow uses a sheet with ID).
Below are the columns of the sheet
First name
Last name
Email ID	
Company Name	
Company Information	
Designation	
Message	
Location	
Status	
Intro email Date	
Reminder 1 needed?	
Reminder 1 Email Date

#### OpenAI API Key (for ChatGPT-4o): 
For drafting the personalized introductory emails.

#### Google Gemini API Key: 
For the AI Agent to perform online company research.

#### Gmail Account: 
To save the final personalized emails as drafts.


## How It Works
The workflow is structured into two main phases: Lead Capture & Enrichment, and Personalized Email Drafting.

#### Phase 1: Lead Capture and Enrichment
This phase collects user inquiries and uses an AI Agent to search the web for additional company details to enrich the lead profile.

On form submission (Form Trigger): The workflow starts when a potential lead fills out the embedded lead capture form, which collects details like First Name, Last Name, Company Name, Email ID, Designation, and a Message/inquiry. This is optional as many company may have other ways to capture leads.

Append row in sheet (Google Sheets): The initial lead data collected from the form is added to your Google Sheet tracker, setting the Status to To Send.

AI Agent: The AI Agent is prompted to search online for the client's company name to gather two pieces of information:

A 1-2 sentence Company Description (what they do).

The Company Location, categorized as Delhi/NCR, Bangalore, Mumbai, or Other. This should be changed basis your need.

Code: This node processes the structured text output from the AI Agent and separates the Company Description and Company Location into distinct fields.

Update row in sheet (Google Sheets): The newly researched Company Information and Location are updated and added to the lead's row in the Google Sheet, matching on Email ID.

#### Phase 2: Personalized Email Drafting and Logging
This phase retrieves leads ready for outreach, drafts a personalized email using AI, and saves it for the sales team.

Get row(s) in sheet (Google Sheets): The workflow fetches all leads whose Status is either To send or To Send (using an OR filter).

Introductory email (OpenAI - ChatGPT-4o): For each lead, the OpenAI node is used as a B2B marketing assistant to write a personalized introductory email based on a predefined template.

The prompt uses the lead's data (First Name, Company Name, Message, etc.) and instructs the AI to:

Create a subject line: Following up on your interest in &lt;your company name&gt; for [shorter version of pain point].

Personalize the body by referencing their pain points and suggesting how &lt;your company&gt; has helped similar companies.

Include a call-to-action (CTA) for a quick 15-minute chat.

Provide a P.S. line about a relevant success story that your company has delivered.

The output is structured into EmailSubject, EmailContent, and Emailid variables.

Create a draft (Gmail): The personalized email is saved as a draft in the specified Gmail account, using the AI-generated Subject and Content.

Best Practice: It is recommended to add an auto-signature in the Gmail account used for the draft.

Append or update row in sheet (Google Sheets): The lead's row is updated to reflect the outreach effort. The Status is set to Drafted, and the current date is logged in the Intro email Date column.

#### Customization Notes
Initial Data: You can replace the On form submission trigger with a Google Sheets Trigger or a Webhook to capture leads from other sources (e.g., a CRM or LinkedIn).

AI Prompt: To ensure the best results, update the agent prompt in the Introductory email node to make it more relevant for your company.

Sender: Ensure the email ID used for drafting corresponds to the sales team's email.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, n8n Form Trigger, OpenAI, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
