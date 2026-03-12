# 🎬 Transform press releases (PDF & Word) into polished articles with Gmail & OpenAI

> ⚡ **2,988 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n workflow automates the transformation of press releases into polished articles. It converts the content of an email and its attachments (PDF or Word documents) into an AI-written article/blog post. 

## What does it do?
This workflow assists editors and journalists in managing incoming press-releases from governments, companies, NGOs, or individuals. The result is a draft article that can easily be reviewed by the editor, who receives it in a reply email containing both the original input and the output, plus an AI-generated self-assessment. This self-assessment represents an additional feedback loop where the AI compares the input with the output to evaluate the quality and accuracy of its transformation.

## How does it work?
Triggered by incoming emails in Google, it first filters attachments, retaining only Word and PDF files while removing other formats like JPGs. The workflow then follows one of three paths:

    - If no attachments remain, it processes the inline email message directly.
    - For PDF attachments, it uses an extractor to obtain the document content.
    - For Word attachments, it extracts the text content by a http request.

In each case, the extracted content is then passed to an AI agent that converts the press release into a well-structured article according to predefined prompts. A separate AI evaluation step provides a self-assessment by comparing the output with the original input to ensure quality and accuracy. Finally, the workflow generates a reply email to the sender containing three components: the original input, the AI-generated article, and the self-assessment. This streamlined process helps editors and journalists efficiently manage incoming press releases, delivering draft articles that require minimal additional editing."  

## How to set it up
### 1. Configure Gmail Connection: 
- Create or use an existing Gmail address
- Connect it through the n8n credentials manager
- Configure polling frequency according to your needs
- Set the trigger event to "Message Received"
        Optional: Filter incoming emails by specifying authorized senders
- Enable the "Download Attachments" option

### 2. Set Up AI Integration:
- Create an OpenAI account if you don't have one
- Create a new AI assistant or use an existing one
- Customize the assistant with specific instructions, style guidelines, or response templates
- Configure your API credentials in n8n to enable the connection

### 3. Configure Google Drive Integration:
- Connect your Google Drive credentials in n8n
- Set the operation mode to "Upload"
- Configure the input data field name as "data"
-Set the file naming format to dynamic: {{ $json.fileName }}

### 4. Configure HTTP Request Node:
- Set request method to "POST"
- Enter the appropriate Google API endpoint URL
- Include all required authorization headers
- Structure the request body according to API specifications
- Ensure proper error handling for API responses

### 5. Configure HTTP Request Node 2:

- Set request method to "GET"
- Enter the appropriate Google API endpoint URL
- Include all required authorization headers
- Configure query parameters as needed
- Implement response validation and error handling



### 6.  Configure Self-Assessment Node:

- Set operation to "Message a Model"
- Select an appropriate AI model (e.g., GPT-4, Claude)
- Configure the following prompt in the Message field:



Please analyze and compare the following input and output content:

(for example)

Original Input:
{{ $('HTTP Request3').item.json.data }}
{{ $('Gmail Trigger').item.json.text }}

Generated Output:
{{ $json.output }}

Provide a detailed self-assessment that evaluates:
1. Content accuracy and completeness
2. Structure and readability improvements
3. Tone and style appropriateness
4. Any information that may have been omitted or misrepresented
5. Overall quality of the transformation

### 7. Configure Reply Email Node:

- Set operation to "Send" and select your Gmail account
- Configure the "To" field to respond to the original sender: {{ $('Gmail Trigger').item.json.from }}
- Set an appropriate subject line: RE: {{ $('Gmail Trigger').item.json.subject }}
- Structure the email body with clear sections using the following template:

handlebars

***EDITED ARTICLE***   

{{ $('AI Article Writer 2').item.json.output }}

***SELF-ASSESSMENT***
Rating: 1 (poor) to 5 (excellent)
{{ $json.message.content }}

***ORIGINAL MESSAGE***

{{ $('Gmail Trigger').item.json.text }}

***ATTACHMENT CONTENT***

{{ $('HTTP Request3').item.json.data }}

    Note: Adjust the template fields according to the input source (PDF, Word document, or inline message). For inline messages, you may not need the "ATTACHMENT CONTENT" section.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Gmail Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
