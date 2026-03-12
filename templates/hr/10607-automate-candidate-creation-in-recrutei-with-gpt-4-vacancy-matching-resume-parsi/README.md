# 👥 Automate candidate creation in Recrutei with GPT-4 vacancy matching & resume parsing

> ⚡ **172 views** · 👥 [HR & Recruitment](../)

## Description

## Overview: Automated Candidate Creation with AI Vacancy Matching

This workflow automates the creation of new candidates in the Recrutei ATS directly from an n8n Form submission, ensuring a seamless "Apply Now" funnel.

Its core feature is an **AI Agent (OpenAI + Tool)** that dynamically identifies the correct Recrutei `vacancy_id` based on the applicant's selection in the form. The workflow also automatically extracts the text content from the candidate's PDF curriculum and uploads it as an internal observation (note) to the profile.

This template eliminates manual data entry, guarantees that candidates are associated with the correct vacancy, and makes the resume content easily searchable within your Recrutei ATS.

## Workflow Logic & Steps

1. **On Form Submission (Form Trigger):** The workflow starts when a candidate submits the n8n Form, capturing Name, Email, Phone, the selected **Vacancy Name** (e.g., "Javascript Developer"), and the **Resume (PDF file)**.
2. **Get Vacancy ID from AI (OpenAI):** The text name of the vacancy is sent to an **AI Agent**.
    * The AI, guided by a specific **System Prompt**, uses the **Recrutei's MCP Tool** to accurately find the official `vacancy_id` corresponding to that job title in your ATS.
3. **Set Vacancy ID (Set):** Extracts the clean `vacancy_id` (a number) returned by the AI.
4. **Get Pipe Stages (HTTP Request):** Fetches the pipeline stages associated with the identified vacancy ID.
5. **Create Prospect in Recrutei (HTTP Request):** Creates the new candidate (Prospect) in the Recrutei ATS, associating them with the correct `vacancy_id` and the *first available pipe stage*.
6. **Merge Candidate Data (Merge):** Merges the prospect creation output with the original form data to ensure all necessary details (like the resume file) are available for the next steps.
7. **Extract Text from PDF Resume (Extract from File):** Reads and extracts all text content from the uploaded PDF resume file.
8. **Add Curriculum as Observation (HTTP Request):** Adds the extracted CV text as an internal observation/note (`talent_observation_type_id: 11`) to the newly created candidate's profile in Recrutei.

## Setup Instructions

To implement this workflow, you must configure the following:

1. **Recrutei API Credential:**
    * Create a **Header Auth** credential named `Recrutei API` (or similar) with:
        * Header Name: `Authorization`
        * Header Value: `Bearer YOUR_API_KEY_HERE`
    * This credential must be selected in the nodes: **Get Pipe Stages**, **Create Prospect in Recrutei**, and **Add Curriculum as Observation**.
2. **AI Configuration:**
    * **OpenAI:** Configure your API Key in the `Get Vacancy ID from AI` node.
    * **Recrutei's MCP:** Replace `YOUR_MCP_ENDPOINT_URL_HERE` in the **Endpoint URL** field of the `Recrutei's MCP` node with your actual Recrutei's MCP Server Endpoint URL.

For more information about Recrutei API please refer to: https://developers.recrutei.com.br/docs/obtendo-token#

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Extract from File, OpenAI, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
