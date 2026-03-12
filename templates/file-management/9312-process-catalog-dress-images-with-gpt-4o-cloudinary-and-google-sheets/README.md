# 📁 Process & catalog dress images with GPT-4o, Cloudinary, and Google Sheets

> ⚡ **52 views** · 📁 [File Management](../)

## Description

## Description 
Automate dress image handling end-to-end: search files, download them, upload to Cloudinary, invoke Azure OpenAI (GPT-4o), parse structured output, and append rows to a sheet. Gain a repeatable, low-touch process for product media and metadata logging. ✨

## What This Template Does 
- Searches files and folders from your connected storage. 🔎
- Loops over each item to process them individually. 🔁
- Downloads each file for processing. ⬇
- Uploads image frames to Cloudinary via REST POST. ☁️
- Sends content to Azure OpenAI Chat Model and parses structured output. 🤖
- Appends rows to a sheet (two destinations supported) for logging. 📄
- Merges inputs where needed to streamline final outputs. 🔗

## Key Benefits 
- Saves time by automating multi-step media handling. ⏱
- Ensures consistent uploads and logs for every file. ✅
- Adds AI-powered processing via Azure OpenAI when needed. 🧠
- Keeps records up to date with automatic sheet appends. 📈
- Modular flow that’s easy to adapt to your source/destination. 🧩

## Features 
- File and folder search node for flexible intake. 📂
- Item-by-item loop for reliable, scalable processing. 🔁
- Cloudinary image upload via HTTP POST endpoint. ☁
- Azure OpenAI Chat Model invocation. 🤖
- Structured Output Parser for clean, machine-readable results. 🧾
- Dual sheet append capability for separate logs. ➕

## Requirements 
- An n8n instance (cloud or self-hosted). 🧭
- Cloudinary account with an accessible upload endpoint. ☁️
- Azure OpenAI access with a deployed Chat Model (GPT-4o). 🔐
- A connected spreadsheet integration in n8n for appending rows. 📄
- Access to your file storage where the search and download occur. 📂

## Target Audience 
- E-commerce and catalog teams managing product media. 🛍️
- Ops teams standardizing uploads and record-keeping. 🧰
- No-code/low-code builders organizing image pipelines. 🧱
- Agencies maintaining client product image workflows. 🏷️

## Step-by-Step Setup Instructions
- Connect your file storage credential for Search/Download nodes. 🔌
- Configure Cloudinary upload endpoint and credentials in n8n. ☁️
- Add Azure OpenAI credentials and set your GPT-4o deployment details. 🤖
- Connect your sheet credential(s) and select target sheet(s). 📄
- Import the workflow, assign credentials to each node, and replace placeholders. ✅
- Run once to test; then enable scheduling or triggers as needed. 🚀

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, AI Agent, Structured Output Parser, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
