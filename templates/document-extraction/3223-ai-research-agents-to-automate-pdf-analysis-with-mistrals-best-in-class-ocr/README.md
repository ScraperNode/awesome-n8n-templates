# 🔬 AI research agents to automate PDF analysis with Mistral’s best-in-class OCR

> ⚡ **4,630 views** · 🔬 [Document Extraction & Analysis](../)

## Description

##  Overview

Mistral OCR is a cutting-edge document understanding API that improves how businesses extract and process information from complex documents. With top scores in benchmarks for accuracy and comprehension capabilities, Mistral OCR handles multi-column text, charts, diagrams, and multiple languages.

This workflow uses Mistral's Document understanding OCR API to automatically turns dense PDFs (such as financial reports) into either deep research reports or concise newsletters 

[![Multi-Agent Research team ](https://img.youtube.com/vi/Z9Lym6AZdVM/sddefault.jpg)](https://youtu.be/Z9Lym6AZdVM)



## Key Features

* **Superior Document Understanding**: Processes complex documents with high-fidelity rendering
* **Multi-Format Support**: Handles PDFs containing text, images, charts, and diagrams
* **Multilingual Capabilities**: Accurately processes documents in various languages
* **Seamless API Integration**: Easy implementation through cloud-based API
* **Customizable Research Depth**: Generate comprehensive 8-page reports or concise 1,750-word newsletters

## How It Works

1. Document Upload: Submit your PDF through an n8n form interface.

2. Output Format Selection: Choose between comprehensive deep research (3,500 words) or Concise newsletter (1,750 words)

3. Custom Instructions: Tailor the analysis by adding specific focus areas (e.g., quantitative data, growth catalysts).

4. AI Processing: The document undergoes multi-stage AI analysis: OCR and text extraction using Mistral AI and Content structuring and summarization using GPT models

Agents:
- Research Leader: Plans and conducts initial research, creating a table of contents.
- Project Planner: Breaks down the table of contents into manageable sections.
- Research Assistants: Multiple agents that conduct in-depth research on assigned sections.
- Editor: Compiles and refines the final article, ensuring coherence and proper citations.


## Setup
1. API Key Acquisition:
- Obtain an API key from OpenRouter.ai
- Get an API key from Mistral.ai

2. n8n Configuration:
- In your n8n instance, navigate to the credentials section.
- Create new credentials for OpenRouter and Mistral, inputting the respective API keys.

3. Form Configuration:
- Customize the input form fields if needed (e.g., adding company-specific options).

- Output Customization: Adjust the word count parameters in the Project Planner node to change output length.

## 🔗 Nodes Used

HTTP Request, Gmail, Execute Workflow Trigger, AI Agent, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
