# 🧾 Extract invoice data from PDFs with AI - Google Sheets  Email alerts

> ⚡ **1,248 views** · 🧾 [Invoice Processing](../)

## Description

Built by Setidure Technologies
This smart n8n automation extracts invoice details from PDF files uploaded to Google Drive using AI, logs them to a Google Sheet, and notifies the billing team via email — all without manual intervention.

⚠️ Note: This workflow requires a self-hosted n8n instance with LangChain, LLM, and Google integrations configured.

📦 What This Workflow Does
Monitors a Google Drive folder for new invoice uploads

Extracts text and parses key invoice details using LLM via LangChain

Logs extracted data into a Google Sheet (Invoice Database)

Generates a summary email using GPT-4O-MINI (Greenie)

Sends the email to the billing team via Gmail

✅ Prerequisites
A Google Drive folder to monitor for PDF uploads

A Google Sheet named Invoice Database with the following columns:

Invoice Number, Client Name, Client Email, Client Address, Client Phone, Invoice Date, Due Date, Total Amount

Service account or OAuth credentials for:

Google Drive

Google Sheets

Gmail

LangChain + Ollama integration for LLM responses

🔧 Step-by-Step Setup Instructions
Clone this workflow into your self-hosted n8n instance

Set up credentials:

Google Drive (for folder trigger)

Google Sheets (for data logging)

Gmail (for sending email)

Ollama (local LLM) or any connected LangChain provider

Configure the trigger node to watch your specific Invoice Uploads folder

Update the Google Sheet node with your Invoice Database sheet URL and column mapping

Test with a sample invoice to validate the AI extraction and email generation

🔄 Workflow Steps
## Step 1: Trigger on New File in Google Drive
Node Name: Watch for New Invoices
Type: Google Drive Trigger

Event: fileCreated

Triggers when a new PDF file is uploaded to a designated folder

## Step 2: Download the Uploaded File
Node Name: Download Invoice PDF
Type: Download Binary

Downloads the invoice file from Google Drive

## Step 3: Extract Raw Text from PDF
Node Name: Extract PDF Text
Type: Extract from File

Extracts unstructured text content from the downloaded PDF

## Step 4: Parse Invoice Fields Using AI
Node Name: Parse Invoice Data with LLM
Type: LangChain Agent

LLM is prompted to extract:

Invoice Number

Client Name, Email, Address, Phone

Invoice Date, Due Date, Total Amount

Fields not found are skipped

## Step 5: Log Extracted Data to Google Sheet
Node Name: Log to Invoice Database
Type: Google Sheets

Appends a new row with the extracted fields to the Invoice Database spreadsheet

## Step 6: Create Email Notification via LLM
Node Name: Generate Billing Email Summary
Type: LangChain Agent (GPT-4O-MINI)

Prompt instructs AI to:

Act as “Greenie” from Green Grass Corp

Inform billing that a new invoice was processed

Confirm logging into the Invoice Database

## Step 7: Send the Email to Billing Team
Node Name: Email Billing Team
Type: Gmail Send

To: billing@example.com

Subject and body injected from LLM output

## Step 8: End Workflow Gracefully
Node Name: End
Type: No Operation

Used to cleanly terminate the flow

## 🧠 Example Output (Email)

Subject: New Invoice Logged – Client: ABC Corp

Hi Billing Team,

A new invoice has been received and processed automatically. The following details have been extracted and logged into the Invoice Database:

- Invoice Number: INV-1024  
- Client: ABC Corp  
- Amount: $1,450  
- Due Date: July 15, 2025  

Please review the [Invoice Database](https://docs.google.com/spreadsheets/d/14FtgVUjy0tw4EQOB2T8wuCYOe6CELtt3UTjn-GsuDWY/edit?gid=0#gid=0) for full details.

Regards,  
Greenie  
Green Grass Corp

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Drive Trigger, Ollama Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
