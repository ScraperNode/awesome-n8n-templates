# 🔬 Extract information from a logo sheet using forms, AI, Google Sheet and Airtable

> ⚡ **1,408 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Instructions

This automation enables you to just **upload any Image (via Form)** of a Logo Sheet, containing multiple Images of Product Logos (most likely) which brings them in some context to one another. 

After submitting an **AI-Agent** eats **that Logo Sheet**, turning it into an List of "Productname" and "Attributes", also checks if Tools are kind of similar to another, given the Context of the Image.

We utilize AI Vision capabilities for that. **NOTE:** It might not be able to extract all informations. For a "upload and forget it" Workflow it works for me. You can even run it multiple times, to be sure. 

But if you need to make sure it extracts **everything** you might need to think about an Multi-Agent Setup with Validation-Agent Steps.

Once the Agent finishes the extraction, it will traditionally and deterministicly add those Attributes to Airtable (**Creates** those, if not already existing.) and also **Upserts** the Tool Informations.

It uses MD5 **Hashes** for turning Product Names into.. something fancy really, you could also use it without that, but I wanted to have something that looks atleast like an ID.  

### Setup

1. Set Up the Airtable like shown below.
2. Update and set Credentials for all Airtable Nodes.
3. Check or Adjust the Prompt of the Agent matching your use-case.
4. Activate the Workflow. 
5. Open the Form (default: https://your-n8n.io/form/logo-sheet-feeder)
6. Enjoy growing your Airtable.

![Image](https://cloud.let-the-work-flow.com/logo-64.png)  
Enjoy the workflow! ❤️  
[let the work flow](https://let-the-work-flow.com) — Workflow Automation & Development

## 🔗 Nodes Used

Airtable, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
