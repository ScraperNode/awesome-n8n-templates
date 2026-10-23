# 🔧 Track student attendance from CSV, email parents, and build an HTML dashboard

> ⚡ **501 views** · 🔧 [Miscellaneous](../)

## Description

## 🚀 Overview

Automatically monitors daily student attendance from CSV files, identifies absent students, sends parent email alerts via SMTP, calculates risk scores, and generates an interactive HTML dashboard — all on a weekday schedule with no manual work needed.

---

## ⚙️ How it works

1. **Schedule trigger** — runs Monday–Friday at 17:30
2. **Data ingestion** — reads `student_attendance.csv` and filters to today's records only
3. **Absence check** — splits students into Absent / Present branches
4. **Contact merge** — matches absent students with parent data from `student_contacts.csv`
5. **Alert logic** — calculates risk level, attendance %, consecutive streak, and trend (Improving / Stable / Worsening)
6. **Parent email** — sends a colour-coded HTML alert via SMTP for each absent student
7. **Dashboard builder** — generates `dashboard.html` with 5 tabs: Today, Weekly, Monthly, Full History, and At-Risk
8. **Report update** — appends records to `attendance_report.csv` for historical tracking

---

## 🛠 Setup steps

1. Upload `student_attendance.csv` to the n8n files folder
2. Upload `student_contacts.csv` to the n8n files folder
3. Create an empty `attendance_report.csv` in the n8n files folder
4. Add `smtp_user` in **Settings → Variables**
5. Configure SMTP credentials in the **Send Email** node
6. Adjust the cron schedule if needed (default: 17:30 Mon–Fri)

---

## 🔧 Required CSV formats

**student_attendance.csv**

| StudentID | Date | Status | Class | Subject | Teacher |
|-----------|------|--------|-------|---------|---------|
| S101 | 12-01-2026 | Absent | Grade 6 | Math | Mr Singh |

**student_contacts.csv**

| StudentID | ParentName | Email | Phone |
|-----------|------------|-------|-------|
| S101 | Anita Kumar | parent@email.com | +919999999999 |

# 📊 Dashboard Preview
![Dashboard Preview 1](https://raw.githubusercontent.com/tejasv694/n8n-template-images/refs/heads/main/Screenshot%202026-03-22%20105318.png)

![ Dashboard Preview 2](https://raw.githubusercontent.com/tejasv694/n8n-template-images/refs/heads/main/Screenshot%202026-03-22%20105333.png)

## 🔗 Nodes Used

Send Email, Spreadsheet File, Schedule Trigger, Filter, Read/Write Files from Disk, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
