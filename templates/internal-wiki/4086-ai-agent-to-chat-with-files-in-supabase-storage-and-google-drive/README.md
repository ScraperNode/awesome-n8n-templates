# 📖 Ai agent to chat with files in Supabase Storage and Google Drive

> ⚡ **9,074 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

### Video Guide

I prepared a detailed guide that illustrates the entire process of building an AI agent using Supabase and Google Drive within N8N workflows.

[![Youtube Thumbnail](https://res.cloudinary.com/de9jgixzm/image/upload/rv0bmq7vr691gfmqn3yw)](https://youtu.be/NB6LhvObiL4)

[Youtube Link](https://youtu.be/NB6LhvObiL4)

### Who is this for?
This workflow is designed for developers, data scientists, and business users who wish to automate document management and enable AI-powered interactions over their stored files. It's especially beneficial for scenarios where users need to process, analyze, and retrieve information from uploaded documents rapidly.

### What problem does this workflow solve?
Managing files across multiple platforms often involves tedious manual processes. This workflow facilitates automated file handling, making it easier for users to upload, parse, and interact with documents through an AI agent. It reduces redundancy and enhances the efficiency of data retrieval and management tasks.

### What this workflow does
This workflow integrates Supabase storage with Google Drive and employs an AI agent to manage files effectively. The agent can:
- Upload files to Supabase storage and activate processes based on file changes in Google Drive.
- Retrieve and parse documents, converting them into a structured format for easy querying.
- Utilize an AI agent to answer user queries based on saved document data.

1. **Data Collection**: The workflow initially gathers files from Supabase storage, ensuring no duplicates are processed in the 'files' table.
2. **File Handling**: It processes files to be parsed based on their type, leveraging LlamaParse for effective data transformation.
3. **Google Drive Integration**: The workflow monitors a designated Google Drive folder to upload files automatically and refresh document records in the database with new data.
4. **AI Interaction**: A webhook is established to enable the AI agent to converse with users, facilitating queries and leveraging stored document knowledge.

### Setup

1. **Supabase Storage Setup**:
   - Create a private bucket in Supabase storage, modifying the default name in the URL.
   - Upload your files using the provided upload options.

2. **Database Configuration**:
   - Establish the 'file' and 'document' tables in Supabase with the necessary fields.
   - Execute any required SQL queries for enabling vector matching features.

3. **N8N Workflow Logic**:
   - Start with a manual trigger for the initial workflow segment or consider alternative triggers like webhooks.
   - Replace all relevant credentials across nodes with your own to ensure seamless operation.

4. **File Processing and Google Drive Monitoring**:
   - Set up file processing to take care of downloading and parsing files based on their types.
   - Create triggers to monitor the designated Google Drive folder for file uploads and updates.

5. **Integrate AI Agent**:
   - Configure the webhook for the AI agent to accept chat inputs while maintaining session context for enhanced user interactions.
   - Utilize PostgreSQL to store user interactions and manage conversation states effectively.  

6. **Testing and Adjustments**:
   - Once everything is set up, run tests with the AI agent to validate its responses based on the documents in your database.
   - Fine-tune the workflow and AI model as needed to achieve desired performance.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Stop and Error, Google Drive Trigger, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
