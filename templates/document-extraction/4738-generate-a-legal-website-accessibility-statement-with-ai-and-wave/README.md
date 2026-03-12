# 🔬 Generate a legal website accessibility statement with AI and WAVE

> ⚡ **759 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who is this for?
This template is for any website owner, digital agency, or compliance officer operating within the **European Union**. It's designed for users who need to comply with the upcoming **European Accessibility Act (EAA)** but may not have deep technical or legal expertise.

## Disclaimer
This workflow uses an npm package called "cheerio" to work with the specified URLs HTML code. Installing packages is only possible in self hosting.

## What problem is this workflow solving? / Use Case
Starting **June 28, 2025**, the European Accessibility Act (EAA) mandates that most websites offering products or services in the EU must be accessible and publish a formal Accessibility Statement. Manually creating this legal document is complex, requiring both a technical site analysis and knowledge of specific legal requirements. This workflow automates the generation of a compliant first draft, saving significant time and effort.

## What this workflow does
After you input your details (like website URL and API key) in a central configuration node, this workflow automatically:
1.  Scans your live website for accessibility issues using the powerful **WAVE API**.
2.  Processes the scan results to identify the main problem areas.
3.  Instructs a **Google Gemini AI agent** with a specialized legal prompt based on the European Accessibility Act.
4.  Generates a formal Accessibility Statement in your desired language.
5.  Saves the statement as an `.html` file and **sends it to you as an email attachment**.

## Setup
This workflow is designed for a quick setup:
1.  **Configure All Variables:** Click the **'CHANGE THESE: dependencies'** node. This is your central control panel. Fill in all the values, including your WAVE API Key, the URL to analyze, company details, and desired output language.
2.  **Set Up Credentials:** You will need to connect your Google accounts for the workflow to run.
    * **Gemini:** Click the **'gemini 2.5 pro'** node, click the gear icon (⚙️) next to the "Credential" field, and connect your Google Gemini API credentials.
    * **Gmail:** Click the **'Send report by email'** node and connect your Gmail account to allow sending the final report.
3.  **Activate & Execute:** Make sure the workflow is **active** in the top-right corner, then click **'Execute Workflow'** to run your first analysis.

## How to customize this workflow to your needs
This template is a great starting point for any EU country. Here's how to adapt it:
* **Localize for Your Country (Important!):** The generated statement contains a placeholder for the "Enforcement Procedure". You **must** edit the prompt in the **'Accessibility Statement Generator'** node to replace this placeholder with the name and link to your specific country's official enforcement body.
* **Change the AI:** Swap the Google Gemini node for any other AI model, like OpenAI or Anthropic Claude, by replacing the node and connecting it to the agent.
* **Change the Trigger:** Replace the **'When clicking ‘Execute workflow’'** node with a Form Trigger or Webhook Trigger to run this workflow based on external inputs, for example, to offer this analysis as a service to your clients.

## 🔗 Nodes Used

HTTP Request, Convert to/from binary data, Gmail, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
