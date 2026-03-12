# 🔬 Complete lesson automation for modern UK teachers

> ⚡ **3,641 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Why
Teachers now spend 3-4 hours per lesson creating materials and resources from scratch. With additional/special needs, this makes it difficult to create additional materials. This is unsustainable and takes their time away from teaching. Tailored for UK teachers but can be expanded globally with prompt and form enhancements.


## How it works
I built a system with three specialized AI agents that create complete lesson packages and automatically uploads a document in Google drive and puts an appointment in calendar to review the document.
### Features
1. Research agent to pull specific information including special education needs and curriculums.
2. The scoring and assessment agent to generate tailored assessment plans, assignments, grading mechanism based on chosen requirements.
3. The integration agent just provides ideas to expand to other tools. In nfuture there is opportunity to add on Kahoot or other tools to create quizzes.
4. Finally the enriched document is emailed and a calendar invite is sent for review. 

## What you need
N8N
Any LLM API Key (I used OpenAI)
Google drive integration
Google calendar integration
Modify the email id from XXX@gmail.com to your Email id in email component.

## Support

Watch this video for intro on how it works. 

Contact me on info@pankstr.com for any queries.

## 🔗 Nodes Used

Google Drive, Google Calendar, Gmail, Google Docs, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
