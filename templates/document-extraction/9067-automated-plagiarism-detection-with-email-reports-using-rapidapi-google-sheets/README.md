# 🔬 Automated plagiarism detection with email reports using RapidAPI & Google Sheets

> ⚡ **150 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## 🚀 **Automated Plagiarism Checker Using Rapid  API & Google Sheet logging**

## 📄 **Description**

This powerful no-code workflow automates plagiarism detection using [Plagiarism Checker AI Powered](https://rapidapi.com/skdeveloper/api/plagiarism-checker-ai-powered). Users submit text through Google Sheets. The system checks for duplication using the API, sends a detailed HTML report via email, and logs the results — all without human intervention.

---

## 🔧 **How the Workflow Works**

| **Node Name**                          | **Purpose**                                                                                                                                               |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Trigger - New Row in Google Sheet`    | Watches for new rows added to a connected Google Sheet.                                                                                                   |
| `Send Content to Plagiarism API`       | Sends the user-submitted content to the [Plagiarism Checker AI Powered API](https://rapidapi.com/skdeveloper/api/plagiarism-checker-ai-powered) via POST. |
| `Check API Response Success`           | Verifies if the API responded successfully and returned results.                                                                                          |
| `Extract Plagiarism Results`           | Extracts matched results (if any) from the API response.                                                                                                  |
| `Generate HTML Plagiarism Report`      | Creates a styled HTML report with similarity scores, links, and matched content.                                                                          |
| `Send Report to User via Email`        | Sends the plagiarism report to the user using SMTP.                                                                                                       |
| `Mark Status: Success in Google Sheet` | Updates the Google Sheet with a "Success" status once the email is sent.                                                                                  |
| `Send Failure Alert to IT`             | If the API check fails, sends an alert email to IT for investigation.                                                                                     |
| `Mark Status: Failed in Google Sheet`  | Updates the Google Sheet with a "Failed" status if the process doesn’t complete successfully.                                                             |

---

## 🧾 **Google Sheet Configuration**

### ✅ Required Columns:

| Column Name | Description                            |
| ----------- | -------------------------------------- |
| `Content`   | The text to be checked for plagiarism  |
| `Status`    | Workflow result (`Success` / `Failed`) |

 Make sure these column headers exist in **Row 1** of your Google Sheet.

---

## 📊 **How to Connect Google Sheets to n8n**

1. Create a new Google Sheet.
2. In n8n, use the **Google Sheets Trigger** node:

   * Set your document ID (from the sheet’s URL).
   * Specify the sheet name (e.g., `Sheet1` or use `gid=0`).
3. Use **Google Sheets (service account)** credential type for writing updates.

---

## 🔑 **How to Get a RapidAPI Key for [Plagiarism Checker AI Powered](https://rapidapi.com/skdeveloper/api/plagiarism-checker-ai-powered)**

1. Go to [Plagiarism Checker AI Powered API](https://rapidapi.com/skdeveloper/api/plagiarism-checker-ai-powered).
2. Sign up or log in to RapidAPI.
3. Subscribe to the free or paid plan.
4. Copy your `x-rapidapi-key` and paste it into the `Send Content to Plagiarism API` node's header.

---

## 🧠 **Use Cases**

* Educators verifying student submissions
* Content marketers validating blog originality
* Academic institutions enforcing anti-plagiarism policies
* Editors reviewing freelance work

---

## ✅ **Benefits**

* ⚙️ **100% Automated**: Set once, run forever
* 📨 **Instant Reports**: Plagiarism reports delivered via email
* 📋 **Easy Tracking**: Status updates in Google Sheet
* 🛡️ **Alerts Built-in**: Automatic error notification to IT
* 🔗 Uses [Plagiarism Checker AI Powered API](https://rapidapi.com/skdeveloper/api/plagiarism-checker-ai-powered) to ensure accuracy and scalability

---

## 📘 **Bonus Tips**

* Ensure you handle Google API scopes properly (Editor or Owner access).
* Always test with small content first before scaling up.
* [Plagiarism Checker AI Powered API](https://rapidapi.com/skdeveloper/api/plagiarism-checker-ai-powered) supports **sentence-level matching** and **source URLs**.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
