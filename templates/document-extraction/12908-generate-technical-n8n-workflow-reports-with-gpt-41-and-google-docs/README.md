# 🔬 Generate technical n8n workflow reports with GPT-4.1 and Google Docs

> ⚡ **14 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who is this workflow for?

This workflow is designed for technical teams, automation owners, process auditors, and anyone who needs to document n8n workflows in a consistent, fast, and professional way—without manual work.

## What problem does it solve? / Use case

Documenting n8n workflows is often slow and error-prone: you need to review nodes, configurations, connections, internal logic, and embedded code.

This workflow automates that process by generating a complete technical report, structured and ready to share, ensuring documentation is:

- consistent  
- easy to update  
- easy to review  
- accessible in Google Drive  

## What this workflow does

- Lets you select an n8n workflow to document  
- Extracts its structure, nodes, connections, and settings  
- Normalizes the JSON to remove noise and keep what matters  
- Generates a HTML technical report using an LLM (OpenAI GPT-4.1)  
- Detects whether Code nodes exist  
- If Code nodes exist, analyzes their logic and adds an extra technical section  
- Creates a final Google Docs document inside a Google Drive folder  

## High-level flow

1. Manual workflow start  
2. Target workflow selection  
3. Workflow normalization (cleanup + structure)  
4. Main report generation with OpenAI  
5. Code node extraction  
6. Condition: Code nodes exist or not  
7. (Optional) technical analysis of Code nodes with OpenAI  
8. Merge main report + code analysis  
9. Create the final document in Google Docs  

## Setup

### OpenAI

Configure OpenAI credentials (API Key).

The workflow uses OpenAI nodes to:

- generate the main report  
- analyze Code nodes (if any)  

### Google Drive

- Configure Google Drive OAuth2 credentials with write permissions  
- Define a destination folder using a folder ID (e.g., `YOUR_FOLDER_ID`)  
- The workflow uploads the final HTML as a Google Docs document  

### n8n (access to the target workflow)

If your instance requires it, configure access to read internal workflows.

The workflow fetches the selected workflow using an n8n Get Workflow node.

## How to customize this workflow

- **Report format:** adjust the prompt in the Generate Report node to change sections, style, or level of detail  
- **Output folder:** replace `YOUR_FOLDER_ID` with the real Drive folder ID  
- **Documentation strategy:**
  - generate shorter reports for small workflows  
  - split large reports if the workflow is very big  
- **Automated triggering:** replace the manual start with a webhook trigger if you want to use an external application  

## Final outcome

A system that automatically generates a professional technical Google Docs document containing:

- workflow description  
- global configuration  
- node-by-node breakdown  
- routing logic (conditions and branches)  
- required credentials  
- operational requirements  
- risks and observations  
- additional Code node analysis (if applicable)  

## Do you want this workflow in Spanish?

📧 jrvillaverde@virodria.es  
🔗  https://www.linkedin.com/in/ramonvillaverde

## 🔗 Nodes Used

HTTP Request, n8n, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
