# ⚒️ Automated MySQL to Google Sheets sync with duplicate prevention

> ⚡ **760 views** · ⚒️ [Engineering](../)

## Description

## 📝 **Sync MySQL Rows to Google Sheet**

**Description:**

This n8n template automates the process of syncing new records from a MySQL database table into a Google Sheet, ideal for reporting, backup, or lightweight dashboards.

It is designed for teams or individuals who need to periodically export new data rows from a custom database (e.g., CRM, registrations, surveys) into a structured Google Sheet for further analysis, sharing, or archiving—without duplicates.

---

## 🛠️ **What This Workflow Does:**

* **Runs every 15 minutes** via a schedule trigger.
* **Selects unsynced rows** (`sync = 0`) from a MySQL table (`fifa25_customers`).
* **Checks if records exist** to prevent unnecessary writes.
* **Appends records to a Google Sheet**, mapping fields like name, email, phone, gender, and more.
* **Updates the MySQL table** to mark those rows as synced (`sync = 1`) to avoid reprocessing.
* Fully annotated using sticky notes for easier understanding and onboarding.

---

## 📋 **Setup Instructions:**

1. **Create or select a Google Sheet** and make sure the columns match the following:

   * `id`, `name`, `phone`, `birthdate`, `email`, `region`, `gender`, `datatime`
2. **Ensure your MySQL table** (`fifa25_customers`) has a `sync` column (default = 0 for new rows).
3. **Connect your MySQL and Google Sheets credentials** inside n8n.
4. **(Optional)**: Add custom filtering or column transformations as needed.

---

## 👤 **Who Is It For?**

* Marketers syncing leads to a spreadsheet
* Ops teams pulling user data from internal tools
* Analysts logging form submissions or customer data
* Anyone needing lightweight scheduled ETL from MySQL to Sheets

---

## 🔐 **Credentials Required:**

* **MySQL**
* **Google Sheets OAuth2**

---

## ✅ **Best Practices Followed:**

* Uses `IF` node to prevent unnecessary processing
* Updates source database to avoid duplicates
* Includes sticky notes for clarity
* All columns are explicitly mapped
* Works out-of-the-box on any n8n instance with proper creds

## 🔗 Nodes Used

Google Sheets, MySQL, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
