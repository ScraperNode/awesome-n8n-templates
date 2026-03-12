# 👥 Hr job posting and evaluation with AI

> ⚡ **9,314 views** · 👥 [HR & Recruitment](../)

## Description

# Workflow Documentation: HR Job Posting and Evaluation with AI

## **Detailed Description**
The HR Job Posting and Evaluation with AI workflow is designed to streamline and enhance recruitment for technical roles, such as Automation Specialists. By automating key stages in the hiring process, this workflow ensures a seamless experience for both candidates and HR teams. From collecting applications to evaluating candidates using AI and scheduling interviews, this workflow provides an end-to-end solution for recruitment challenges.

---

## **Who is this for?**
This workflow is ideal for:
- **HR Professionals**: Managing multiple job postings and candidates efficiently.
- **Recruitment Teams**: Handling large volumes of applications for technical positions.
- **Hiring Managers**: Ensuring structured and objective candidate evaluations.

---

## **What problem does this workflow solve?**
- **Time-Consuming Processes**: Automates repetitive tasks like data entry, CV management, and scheduling.
- **Fair Candidate Evaluation**: Leverages AI to provide objective insights based on resumes and job descriptions.
- **Streamlined Communication**: Ensures timely and personalized candidate interactions, improving their experience.

---

## **What this workflow does**
This workflow automates the following steps:
1. **Form Submission**: Collects candidate information via a structured application form.
2. **Data Storage**: Stores applicant details in Airtable for centralized tracking.
3. **CV Management**: Automatically uploads resumes to Google Drive for easy access and organization.
4. **AI-Powered Candidate Evaluation**: Scores candidates based on their resumes and job descriptions using OpenAI, providing actionable insights.
5. **Interview Scheduling**: Automates scheduling based on candidate and interviewer availability.
6. **Communication**: Sends customized emails to candidates for interview invitations and feedback.

---

## **Setup**
### **Prerequisites**
To use this workflow, you’ll need:
- **n8n Account**: To create and run the workflow.
- **Airtable Account**: For managing applicant data.
- **Google Drive Account**: For storing candidate CVs.
- **OpenAI API Key**: For AI-powered candidate scoring.
- **SMTP Email Account**: For sending candidate communications.

### **Setup Process**
1. **Airtable Configuration**:
   - Create a base in Airtable with tables for Applicants and Job Positions.
2. **Google Drive Setup**:
   - Create a folder for CV storage and ensure you have write permissions.
3. **Integrate Airtable in n8n**:
   - Use the Airtable API key to connect Airtable to n8n.
4. **Integrate Google Drive in n8n**:
   - Authorize Google Drive to enable CV storage automation.
5. **OpenAI Integration**:
   - Add your OpenAI API key to n8n for candidate scoring.
6. **Email Configuration**:
   - Set up your SMTP email account in n8n for sending notifications and invitations.

---

## **How to customize this workflow**
Tailor the workflow to fit your unique recruitment needs:

1. **Edit Job Descriptions**:
   - Adjust the form parameters to match the specific role and qualifications.
2. **Refine AI Evaluation Criteria**:
   - Modify OpenAI prompts to reflect the skills and competencies for the desired position.
3. **Personalize Email Templates**:
   - Update email content to match your organization’s tone and branding.
4. **Add New Features**:
   - Incorporate additional steps like feedback collection or integration with other HR tools.

---
## **Conclusion**
The HR Job Posting and Evaluation with AI workflow simplifies and automates the recruitment process, enabling HR teams to focus on engaging with candidates rather than handling administrative tasks. With its powerful integrations and customization options, this workflow helps organizations hire efficiently while improving the candidate experience.

## 🔗 Nodes Used

Airtable, Send Email, Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
