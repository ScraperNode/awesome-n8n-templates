# ⚡ Generate food recipes from Gmail & form requests with Ollama & Llama 3.2

> ⚡ **1,877 views** · ⚡ [Personal Productivity](../)

## Description

This n8n template demonstrates how to create an intelligent food recipe assistant that accepts requests via Gmail and web forms, processes them using AI chat models (Ollama and Llama 3.2), and delivers personalized recipes back to users. The system combines multiple input methods with advanced AI processing to provide customized cooking instructions and ingredient lists.

**Good to know**
* The system accepts recipe requests through both Gmail and web form submissions
* AI models understand dietary restrictions, cuisine preferences, and cooking skill levels
* Recipe responses include formatted ingredients, step-by-step instructions, and cooking tips
* All requests are processed automatically without manual intervention

## How it works

### Gmail Recipe Request Workflow
* Gmail triggers activate when users send emails with recipe requests to the designated email address
* The system extracts recipe requirements, dietary preferences, and cooking constraints from email content
* User queries are processed through the Ollama Recipe Generator for intelligent recipe creation
* AI-generated recipes are formatted with proper ingredients, instructions, and cooking times
* Formatted recipes are sent back to users via Gmail with a professional presentation

### Web Form Recipe Request Workflow
* Web form submissions trigger when users fill out structured recipe request forms
* Form data includes cuisine type, dietary restrictions, available ingredients, and cooking time preferences
* The Llama 3.2 Chef Model processes structured requests for optimized recipe generation
* Recipes are formatted with clear instructions, ingredient measurements, and cooking techniques
* Users receive formatted recipes via email with additional cooking tips and variations

## How to use

* Import the workflow into your n8n instance and configure Gmail integration for recipe requests
* Set up the web form with fields for cuisine preferences, dietary restrictions, and cooking skill level
* Configure Ollama and Llama 3.2 AI models with appropriate recipe generation prompts
* Test both Gmail and web form inputs with sample recipe requests
* Customize email templates to match your brand and include additional cooking resources
* The system scales automatically to handle multiple simultaneous recipe requests

## Requirements

* Gmail account for email-based recipe requests and responses
* Ollama installation with Recipe Generator model
* Llama 3.2 Chef Model access for advanced recipe processing
* n8n instance with Gmail and AI model integrations

## Customising this workflow

* Recipe automation can be adapted for different cuisines, dietary needs, and cooking skill levels
* Try popular use-cases such as meal planning assistance, ingredient substitution suggestions, or nutritional information inclusion
* The workflow can be extended to include recipe image generation, shopping list creation, and cooking video recommendations

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, Ollama Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
