# 👥 Automate candidate analysis & ranking with Jotform and Gemini AI

> ⚡ **46 views** · 👥 [HR & Recruitment](../)

## Description

This workflow is designed to automate the initial screening process for your User-Generated Content (UGC) campaigns. It instantly calculates a performance score for every candidate using AI, filters out low-scoring applicants, and immediately initiates outreach to the qualified talent.
## 🧩 What Problem Does It Solve?
Hiring managers waste valuable time manually reviewing hundreds of applications against a complex, weighted rubric, which leads to delays in contacting the best candidates.

This workflow solves these by:
* **Instant, Unbiased Scoring:** It uses an AI Agent (Google Gemini) to instantly assign a score (0–10) based on specific criteria.

* **Automatic Qualification:** It filters out unqualified candidates and automatically processes those who meet your minimum score requirement.

* **Immediate Outreach:** It instantly sends acceptance emails to qualified candidates and notifies your internal HR team to follow up.

* **Centralized Tracking:** It logs the candidate's data and their final AI score into a central Google Sheet for easy long-term tracking.
## 🛠️ How to Configure It
**1.Jotform Setup:**

* Connect your Jotform API credentials in n8n.

* Specify the ID of your candidate application form in the Jotform Trigger node.

**2.AI Setup:**
* Connect your Google Gemini API key.

* Review the scoring prompt in the AI Agent node and confirm that the point system matches your current campaign requirements.

**3.Google Sheets Setup:**
* Connect your Google Sheets API credentials.

* Replace the placeholder TEMPLATE_GOOGLE_SHEETS_DOCUMENT_ID with the actual ID of your candidate tracking spreadsheet.

**4.Email Setup:**
* Connect your Gmail API credentials.

* Replace the placeholder TEMPLATE_HR_EMAIL@yourcompany.com in the "Send Internal Notification (HR)" node with your team's correct contact email.

## ⚙️ How It Works
**1.Application Received:** The Jotform Trigger instantly fires when a candidate submits their form.

**2.AI Scores Candidate:** The AI Agent uses the criteria prompt to calculate a definitive numerical score for the applicant.

**3.Qualification Check:** The If node checks if the score is 6 or higher.

**4.If True (qualified):** The candidate proceeds to the next steps.

**5.If False (unqualified):** The workflow stops for this candidate (or can be configured to send a rejection).

**6.Record & Notify:** The workflow saves the data to the Google Sheet and then simultaneously sends two emails: an acceptance email to the candidate and an internal notification to HR.

## 🎯 Perfect For
* **UGC Campaigns:** Instantly qualify content creators for product reviews, endorsements, and social media ads based on objective, pre-defined rules.

* **Influencer Marketing:** Automatically filter and prioritize micro- and nano-influencers who match all your specific demographic and product criteria.

* **Mass Screening:** Use the AI to quickly narrow down a large pool of applicants, saving your recruiting team hours of manual data review and scoring.

If you need any help [Get in Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 🔗 Nodes Used

Google Sheets, Jotform Trigger, Gmail, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
