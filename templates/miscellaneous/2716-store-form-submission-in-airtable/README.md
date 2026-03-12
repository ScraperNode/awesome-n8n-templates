# 🔧 Store form submission in Airtable

> ⚡ **2,022 views** · 🔧 [Miscellaneous](../)

## Description

This workflow, developed by our AI developers at [WeblineIndia](https://www.weblineindia.com/), is designed to automate the process of capturing form submissions and storing them in Airtable. By leveraging automation, it eliminates manual data entry, ensuring a smooth and efficient way to handle form data. The purpose of creating this workflow is to streamline data management, helping businesses save time, reduce errors, and maintain an organized, structured database for easy access and future use.

**Steps:**

- **Trigger on Form Submission (Form Node)**
	- **What It Does:** Activates the workflow whenever a form is submitted.
	- **How to Set It Up:** Use the Form Submission Trigger node to detect new form submissions. This ensures the workflow starts automatically when a user fills out the form.

- **Store Data in Airtable (Airtable Node)**
	- **What It Does:** Transfers the form data into an Airtable base.
	- **How to Set It Up:** Use the Airtable Node to map form fields to corresponding columns in your Airtable table, storing the data accurately.

- **Finalize and Activate**
	- **What It Does:** Completes the setup to automate data storage upon form submission.
	- **How to Set It Up:** Save and activate the workflow. Once active, it will automatically record all new form submissions in Airtable.

## 🔗 Nodes Used

Airtable, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
