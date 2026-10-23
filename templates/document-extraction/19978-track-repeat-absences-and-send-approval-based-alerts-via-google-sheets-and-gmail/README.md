# 🔬 Track repeat absences and send approval-based alerts via Google Sheets and Gmail

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every morning at 8:00 (Mon–Sat, Asia/Karachi), reads attendance records from Google Sheets, detects repeat absences based on consecutive days and monthly totals, and sends a Gmail approval request to an administrator before emailing the approved notification batch to parents and teachers.

## How it works
1. Runs on a scheduled trigger at 08:00 Monday–Saturday.
2. Reads the latest attendance rows from a Google Sheets spreadsheet (Sheet1) using formatted values.
3. Calculates, for each student marked absent today, their consecutive school-day absence streak (skipping Sundays and configured holidays) and their total absences in the current month.
4. Creates alert items when a student reaches 3 consecutive absences (reminder) and/or 5 absences in the month (warning), suppressing repeats if the sheet’s notification field already includes the threshold marker.
5. Builds a single batch message with all alerts and sends a Gmail “send and wait” approval request to the administrator.
6. If approved, sends the batch notification email via Gmail to all parent and teacher recipients (and the administrator); if not approved, sends one Gmail retry approval request and escalates to the administrator if the retry is also not approved.

## Setup
1. Add Google Sheets OAuth2 credentials and replace the placeholder spreadsheet ID with your Attendance Google Sheet ID (and ensure the data is on Sheet1).
2. Ensure your sheet includes the required headers (StudentID, Student, Class, Date, Status, Parent Email, teacher email, and a Notification/Ntoification field) and uses “Absent” in the Status column for absences.
3. Add Gmail OAuth2 credentials and replace admin@school.example with your real approver/administrator email address wherever it appears.
4. Update the holiday/closure dates in the workflow’s policy code (HOLIDAYS set) to match your school calendar and confirm the timezone policy (Asia/Karachi) matches your needs.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
