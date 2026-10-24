# 🎫 Triage parent incident reports with Google Gemini, Sheets, Slack and WhatsApp

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/SOffe5x47dI

This workflow collects parent incident/complaint reports via an n8n Form, looks up student details in Sheets, classifies the complaint with Google Gemini (including an optional image attachment), logs the ticket to Sheets, and notifies a Slack channel, with a WhatsApp message sent when the ID lookup fails.

## How it works
1. Receives a parent submission from an n8n Form, including contact details, student ID, incident description, and an optional image attachment.
2. Generates a unique ticket ID and looks up the student record in a Google Sheets “student_info” spreadsheet using the submitted student ID.
3. If the student lookup fails, looks up by parent mobile in Google Sheets and sends a WhatsApp message asking the parent to recheck the student ID.
4. If the student lookup succeeds, validates the uploaded attachment as a JPG/PNG (or substitutes a blank image when missing/invalid) and prepares the data for AI analysis.
5. Sends the incident text and image (when available) to Google Gemini to classify category/subcategory, severity (P0–P3), regulatory risk, and produce a brief summary and attachment findings in a structured format.
6. Appends or updates the ticket record in a Google Sheets “tickets-issues” spreadsheet and then formats and posts a detailed alert message to a Slack channel.
7. Shows a confirmation page to the submitter with the generated ticket ID and the AI-assigned priority and subcategory.

## Setup
1. Configure Google service account credentials with access to both Google Sheets documents (the “student_info” lookup sheet and the “tickets-issues” logging sheet) and verify the document IDs, sheet tabs, and expected columns (e.g., studentid, student_name, parent_mobile).
2. Add a Google Gemini (PaLM) API credential and ensure the selected model (models/gemini-3.1-flash-lite) is available for your project.
3. Add Slack OAuth credentials and set the target channel for notifications.
4. Add WhatsApp Business Cloud credentials, then set the correct Phone Number ID and recipient number (or map it dynamically) for the invalid-student-ID message.
5. Publish the n8n Form and share the form URL with parents, and optionally adjust allowed attachment types and the confirmation text to match your school’s process.

## 🔗 Nodes Used

Google Sheets, Slack, WhatsApp Business Cloud, Basic LLM Chain, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
