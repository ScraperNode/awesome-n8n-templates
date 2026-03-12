# 🎬 Dynamically generate a webpage from user request using OpenAI structured output

> ⚡ **43,273 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow is a experiment to build HTML pages from a user input using the new Structured Output from OpenAI.

How it works:
- Users add what they want to build as a query parameter
- The OpenAI node generate an interface following a structured output defined in the body
- The JSON output is then converted to HTML along with a title
- The HTML is encapsulated in an HTML node (where the Tailwind css script is added)
- The HTML is rendered to the user via the Webhook response.

Set up steps
- Create an [OpenAI API Key](https://platform.openai.com/api-keys) 
- Create the OpenAI credentials
- Use the credentials for both nodes HTTP Request (as Predefined Credential type) and OpenAI
- Activate your workflow
- Once active, go to the production URL and add what you'd like to build as the parameter "query"
- Example: https://production_url.com?query=a%20signup%20form

Example of generated page![Screenshot 20240823 at 13.01.56.png](fileId:831)

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
