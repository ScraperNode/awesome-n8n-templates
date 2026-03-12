# 🔬 Deliver encrypted payroll PDFs via Google Drive, Sheets, Gmail and Slack

> ⚡ **10 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Enterprise secure payroll distribution with encryption and error handling

## 🎯 Description
Achieve a high-security, compliant payroll distribution system by using this automation to encrypt sensitive documents and manage delivery failures. This workflow provides an enterprise-grade solution by monitoring secure storage for payslips, fetching unique employee credentials from a database, and applying 128-bit AES password protection before dispatching via Gmail.

A technical highlight of this template is the **resilient fail-safe architecture**. By utilizing a **Switch node** and custom **Code node** logic, the workflow identifies missing employee metadata and prevents the delivery of unencrypted files. Furthermore, it uses **Luxon expressions** such as `{{ $now.minus({ months: 1 }).toFormat('MMMM_yyyy') }}` to dynamically tag files with the correct payroll period, ensuring that the audit trail remains perfectly synced with your fiscal calendar.

### ✨ How to achieve secure document delivery
You can achieve a GDPR-compliant document pipeline by using the available tools to:

1. **Trigger and pre-validate** — Monitor **Google Drive** for new files and perform an integrity check to ensure the binary data is valid before processing begins.
2. **Fetch security metadata** — Dynamically retrieve the unique user password (e.g., National ID) from **Google Sheets** based on the file's metadata or employee email.
3. **Apply 128-bit AES encryption** — Pass the binary through the **HTML to PDF** security engine to apply user-specific password protection and restrict permissions.
4. **Route with error logic** — Use an **IF node** to verify encryption success; if valid, deliver via **Gmail**. If metadata is missing, route to an **Error Handler** that alerts the team via **Slack**.

### 💡 Key features
* **Fail-closed security** — The workflow is designed so that no unencrypted document can ever accidentally be dispatched if the security step fails.
* **Intelligent period mapping** — Uses **Luxon** to automatically identify and label documents by the preceding month's payroll period.
* **Centralized incident logging** — Separates successful deliveries from system errors, providing a transparent audit trail for IT compliance.

### 📦 What you will need
1. **Google Drive** — To act as the landing zone for your unencrypted source payslips.
2. **HTML to PDF Node** — For the 128-bit AES encryption and password protection engine.
3. **Google Sheets** — To host your employee security database and audit logs.
4. **Gmail & Slack** — For secure document delivery and real-time administrative failure alerts.

---

**Ready to secure your payroll?** Import this template, connect your database, and ensure your sensitive financial documents are always encrypted and delivered safely.

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
