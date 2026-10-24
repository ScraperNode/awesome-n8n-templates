# ⚡ Plan study sessions from syllabus PDFs with Gemini, Google Calendar, and Sheets

> ⚡ **39 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow downloads a syllabus PDF from Google Drive, extracts and cleans the text, uses Google Gemini to identify assignments and due dates, then creates Google Calendar events for deadlines and study sessions and logs all created events to Google Sheets.

## How it works
1. Runs manually when you click Execute workflow in n8n.
2. Downloads the syllabus PDF from Google Drive and extracts its text content.
3. Cleans the extracted text to remove formatting noise and improve parsing accuracy.
4. Sends the cleaned syllabus text to Google Gemini to return a JSON list of assignments with due dates and effort estimates.
5. Normalizes the AI output by parsing the JSON, converting due dates to ISO format, applying default hours, and assigning a priority based on how soon each due date is.
6. Generates a study session schedule for each assignment and creates Google Calendar events for both assignment deadlines and study sessions.
7. Merges all created event data, appends a standardized row for each event into Google Sheets, and outputs a run summary with event counts.

## Setup
1. Connect credentials for Google Drive, Google Calendar, Google Sheets, and the Gemini (Google PaLM) API in n8n.
2. Update the Google Drive file ID to the correct syllabus PDF you want to process.
3. Select the target Google Calendar and ensure the workflow has permission to create events in it.
4. Set the Google Sheets document and sheet tab and make sure the sheet has columns matching: type, title, course_name, priority, start, end, due_date, description, and calendar_event_id.

## Additional info
## How To Customize Nodes

- Get Syllabus PDF
Change the fileId and cachedResultName to point to different syllabi each term. You can keep a fixed Drive folder and simply update the selected file in the node UI. Ensure the file remains a PDF with actual text content.

- Clean Syllabus Text
Extend the cleanText function to remove institution-specific headers or footer lines. For example, add more cleaned = cleaned.replace(...) rules for school logos, repeated disclaimers, or term banners.

- Parse Assignments And Deadlines
Modify the prompt to adapt to your institution or terminology, or to request additional fields, such as weightage or exam type. Keep the JSON structure strict to avoid parsing issues.

- Normalize Deadlines
Update the courseName logic to derive the course name from the syllabus text or another field, rather than using the existing default like “Class 10.” You can also change the priority thresholds or add more categories.

- Generate Weekly Study Tasks
Change the study session logic by editing the sessionLengthHours and the scheduling logic. For example, you can replace the single-session code with a loop that creates multiple sessions by splitting a.estimated_hours into several blocks before the due date. The current implementation uses const sessionLengthHours = Math.min(a.estimated_hours || 3, 2). 

- Create Assignment Events / Create Study Session Events
Choose separate calendars for deadlines and study sessions, change event start times, or enrich the description with more context such as estimated_hours or a direct link to course materials.

- Prepare Events For Sheet
Adjust the normalize function to parse additional metadata from event descriptions or to match different description formats if you change the calendar nodes.


## Add-ons

- Use additional Gemini prompts to summarize each assignment description into a one-line action item and append it to the sheet.
- Add a notification layer, such as email or chat, triggered whenever a new assignment_deadline event is created, to alert students or parents.
- Introduce a weekly digest workflow that queries the Student Planner Log sheet and sends a summary of upcoming assignments and study sessions.
- Integrate a secondary calendar system or task management tool, such as a task list or project board, to mirror the same events in different tools.


## Use Case Examples

- A high school student imports the official term syllabus PDF into Google Drive and uses this workflow to automatically populate a personal Google Calendar with all exams and a preparatory session for each exam.
- A parent managing multiple children’s schedules copies the workflow and adjusts it to run on different syllabi and calendars, creating separate logs and calendars per child.
- A teacher prepares a shared classroom calendar where assignment deadlines are created automatically for students, while personal study sessions are written into a private calendar.
- A tutor uses the workflow to transform syllabus PDFs from different institutions into a single Google Sheets log, then filters by course_name and priority to focus on imminent tasks.
- A school administrator clones this workflow for multiple grades, each with their own Drive folder and Sheet, creating a consistent planning standard across the institution.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :-- | :-- | :-- |
| Workflow runs but no assignments are created | Gemini response is not valid JSON or assignments array is empty | Check the Parse Assignments And Deadlines node output, adjust the prompt, and verify that the syllabus text includes clear assignment lines.  |
| Normalize Deadlines throws “Failed to parse Gemini JSON” | Model output contains extra text or code fences around JSON | Ensure the prompt enforces JSON-only output, and keep the markdown fence removal logic in Normalize Deadlines.  |
| Calendar events appear with wrong or missing dates | due_date is missing or not converted to ISO format | Verify due_date values in the Gemini output and the toISO function in Normalize Deadlines; adjust parsing rules if your dates use a different format.  |
| No rows are added to Google Sheets | Google Sheets credentials, documentId, or sheetName are incorrect | Reconnect Google Sheets credentials, confirm the spreadsheet and tab IDs, and test Append row in sheet with sample data.  |
| All events show up as unknown in Debug Summary | Prepare Events For Sheet cannot classify events as assignment_deadline or study_session | Inspect event descriptions and summaries to ensure they contain the keyword patterns used in normalize, or update the classification logic.  |
| Study sessions do not align with expected dates | Generate Weekly Study Tasks uses a fixed offset of two days before due_date | Modify the baseDate logic and sessionLengthHours to match your desired spacing or to generate multiple sessions.  |
| Image-only syllabus PDFs produce empty or poor text | Extract From File cannot read text from scanned or image-based PDFs | Use text-based PDFs only, or add an OCR step outside the current workflow design to convert images into text before processing.  |

## Need Help ?

If you need assistance setting up this workflow, adapting it to a different syllabus format or extending it with additional add-ons, you can reach out to WeblineIndia for implementation support, customization and [hiring n8n developers](https://www.weblineglobal.com/hire/n8n-developers/). Whether you want to add more study session logic, integrate other calendar systems or build related academic automation workflows, our expert help is always available to get this template fit your environment and scale with your needs.

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Calendar, Extract from File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
