# 👥 AI Resume Job Title Extractor with Google Gemini

> ⚡ **39 views** · 👥 [HR & Recruitment](../)

## Description

**AI Resume Job Title Extractor with Google Gemini**

**Overview**

This n8n template demonstrates how to use Google Gemini AI to analyze a PDF resume and extract the candidate's current or most relevant job title as a clean search string. It’s a powerful utility for anyone building automated talent pipelines, lead enrichment tools, or profile categorization systems.

**🚀 How it works**

File Input: The workflow begins by reading a resume (PDF) from a local storage directory via the Read/Write Files from Disk node.

Parsing: The Extract from File node handles the heavy lifting of converting the PDF binary into indexed plain text.
AI Analysis: The extracted text is sent to Google Gemini. A specialized prompt instructs the model to identify the professional role and output only a single, clean search string (avoiding any conversational filler).

Data Structuring: The Set (Return) node captures the AI's output and raw text, making it ready for downstream use or for return to a parent "caller" workflow.

**🎮 How to use**

File Path: Update the File Selector in the "Read/Write Files from Disk" node to point to your resume (e.g., /home/node/.n8n-files/My-Resume.pdf).
API Credentials: Set up your Google Gemini (PaLM) API credentials in the Gemini node.

Modular Use: This workflow is configured with an Execute Workflow Trigger, meaning you can call it as a "sub-workflow" from larger automation stacks to instantly enrich data with professional titles.

**⚙️ Requirements**

Google Gemini API Key
n8n Environment: Designed for self-hosted instances with local file access (can be adapted for Google Drive or S3 by swapping the first node).

**🎯 Use Cases**

Job Matching: Automatically generate search queries for job boards based on a user's resume.

CRM Enrichment: Keep your candidate lists up-to-date with current professional titles.

Talent Discovery: Categorize thousands of profiles instantly without manual review.

## 🔗 Nodes Used

Execute Workflow Trigger, Read/Write Files from Disk, Extract from File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
