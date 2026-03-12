# 🔬 Summarize documents, images & spreadsheets with Gemma 3 on Ollama

> ⚡ **637 views** · 🔬 [Document Extraction & Analysis](../)

## Description

![Add a heading.png](fileId:1876)
[Tutorial Video](https://www.youtube.com/watch?v=6f7715tnqjs)

🚀 Overview
Transform your file management with this intelligent workflow that automatically processes and summarizes any file dropped into a monitored folder. Using local AI powered by Ollama, this workflow provides instant insights for images, documents, and data files.
✨ Key Features

🔄 Automatic Processing: Monitors a folder and processes files instantly upon detection
🎯 Multi-Format Support: Handles images (JPG, PNG), documents (PDF), and data files (CSV, XLS)
🤖 AI-Powered Analysis: Uses Ollama's Gemma 3 model for intelligent content understanding
📝 Smart Summaries: Generates concise, informative summaries tailored to each file type
💾 Organized Output: Saves all summaries as text files with descriptive naming

🛠️ What It Does

Image Analysis: Describes visual content and identifies key elements in photos and graphics
Document Summarization: Extracts and summarizes text from PDF documents
Data Insights: Analyzes spreadsheet data and provides structural insights

📋 Prerequisites

Ollama Installation: Download and install Ollama on your system
Model Setup: Pull the Gemma 3 model with ollama pull gemma3:4b
Service Running: Ensure Ollama is running with ollama serve
Credentials: Configure Ollama API credentials in n8n

🔧 Setup Instructions

Clone this workflow to your n8n instance
Update the folder path in the "Local File Trigger" node to your desired monitoring directory
Configure Ollama credentials for all three AI model nodes
Test the workflow by dropping a sample file into your monitored folder

📊 Supported File Types
TypeExtensionsProcessingImages.jpg, .pngAI vision analysis and descriptionDocuments.pdfText extraction and summarizationData Files.csv, .xlsData structure analysis and insights
🎯 Perfect For

Content Creators: Quickly understand and catalog image collections
Researchers: Summarize academic papers and research documents
Data Analysts: Get instant insights into dataset structures
Knowledge Workers: Organize and understand file collections efficiently

🔒 Privacy & Security

100% Local Processing: All AI processing happens on your machine
No Cloud Dependencies: Files never leave your system
Private & Secure: Complete control over your data and processing

🚦 Getting Started
Simply drop any supported file into your monitored folder and watch as the workflow automatically:

Detects the file type
Processes the content appropriately
Generates an intelligent summary
Saves the result as a text file

Your intelligent file assistant is ready to help you understand and organize your digital content!

## 🔗 Nodes Used

Local File Trigger, AI Agent, Ollama Chat Model, Read/Write Files from Disk, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
