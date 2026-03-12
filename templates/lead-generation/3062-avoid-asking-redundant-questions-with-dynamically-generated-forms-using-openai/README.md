# 🎣 Avoid Asking Redundant Questions with Dynamically Generated Forms using OpenAI 

> ⚡ **3,056 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Avoid Asking Redundant Questions with Dynamically Generated Forms using OpenAI 
## Target Audience
This workflow has been built for those who require a form to capture as much data as possible as well as the answers to predefined questions, whilst optimising the user experience by avoiding asking redundant questions.
## Use Case
When creating a form to capture information, it can be useful to give the user an opportunity to input a long answer to a large, open-ended question. We then want to drill down to answer specific questions that we require the answer to. When doing this, we don't want to ask duplicate questions. This particular scenario imagines an AI consultancy capturing leads.
## What it Does
This workflow requires users to input basic information and then answer an open ended question. The specific questions on the next page will only be those that weren't answered in the open-ended question.
## How it Works
1. The open-ended question (and relevant basic information) is analysed by an LLM to determine which specific questions have not been answered. Chain-of-thought reasoning is utilised and the output structure is specified with the **Structured Output Parser**.
2. Those questions that have already been answered are filtered out nodes. The remaining items are then used to generate the last page of the form.
3. Once the user has filled in the final page of the form, they are shown a form completion page.
## Setup
1. Add your **OpenAI** credentials
2. Go to the **Get Basic Information** node and click **Test Step**
3. Complete the form to test the generic use case
4. Modify the prompt in **Analyse Response** to fit your use case
## Next Steps
- Add additional nodes to send an email to the form owner
- Add a subsequent LLM call to analyse the form response - those that are qualified should be given the opportunity to book an appointment

## 🔗 Nodes Used

Filter, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
