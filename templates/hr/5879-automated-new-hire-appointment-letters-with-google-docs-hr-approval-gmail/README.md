# 👥 Automated new hire appointment letters with Google Docs, HR approval & Gmail

> ⚡ **2,423 views** · 👥 [HR & Recruitment](../)

## Description

This n8n template demonstrates automating an appointment letter creation process using a template and then having the HR approve before emailing the appointment letter to the candidate.


**How it works**
1. Create an appointment letter template. e.g "Appointment Letter.doc" on Google Drive
2. Form Submission node - Create a form trigger with the required fields that need to be capture as part of the appointment letter. Eg. Candidate Name, Position offered, Salary, Date of Joining, Candidate email, etc.
3. Google Drive Copy node - Once the form is filled, it creates a candidate copy of the appointment letter by appending the candidate name to appointment letter. e.g. "Appointment Letter - &lt;candidate name&gt;.doc". This will be stored on the Google Drive
4. Google Doc Update node - Fill the placeholders in the appointment letter with the candidate specific details such as Candidate Name, Position offered, Salary, Date of Joining, etc.
5. Google Drive Download node - Create a PDF version of the candidate's appointment letter. e.g. "Appointment Letter - &lt;Candidate Name&gt;.pdf" and download it to Google Drive
6. Google Drive Upload node - Upload the PDF to Google Drive
7. Gmail Send Message node - Send an email to the HR requesting to review the candidate's appointment letter and 'Approve' or 'Reject' the appointment letter. This is the Human-In-The-Loop step
8. If Node (for routing) - will return "true" if HR approves and "false" if HR rejects
If HR approves, go to Step 9 and Step 10
9. Google Drive Download node - Get the PDF file
10. Gmail Send Message node - Send an email to the candidate with the appointment letter (PDF) as the attachment


**How to use**
1. The Form trigger node is used as an example but feel free to replace this with other triggers such as Google Sheet
2. Create an Appointment Letter Google document with the follwing fields - Date, Candidate Name, Position Name, Fixed CTC, Joining Date and To be signed by Date. See sample letter format below:

**&lt;Appointment Letter.doc&gt; (Google Document)**

Appointment Letter

[Date]

Dear [Candidate Name],

Congratulations! We are pleased to offer you the [Position Name] at ABC Company.

Fixed CTC - [Fixed CTC]
Joining Date - [Joining Date]

Requirements
Google drive for upload and downloading the file
Gmail for sending emails

Sign the letter by - [To be signed by Date]

Signature

## 🔗 Nodes Used

Google Drive, Gmail, Google Docs, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
