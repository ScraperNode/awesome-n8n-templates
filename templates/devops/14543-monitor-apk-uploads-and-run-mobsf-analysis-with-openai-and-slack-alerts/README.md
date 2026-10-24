# ⚙️ Monitor APK uploads and run MobSF analysis with OpenAI and Slack alerts

> ⚡ **16 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# APK Upload Monitoring and Automated MobSF Analysis with Slack Reporting

This workflow monitors a Google Drive folder for newly uploaded APK files, automatically downloads them, triggers a MobSF static analysis scan, processes the output to detect unused or risky libraries and sends a developer-friendly summary directly to Slack. It is ideal for teams who want fast, automated insights into Android app dependencies.


### ⚡ Quick Start: Rapid Implementation Steps

1. Connect Google Drive and select the APK upload folder.
2. Add your MobSF server URL in both HTTP Request nodes.
3. Add your OpenAI API credentials.
4. Connect Slack and choose your preferred channel.
5. Activate the workflow — you're ready to automate APK analysis.


## What It Does

This workflow automates the complete static analysis process for Android APK files. When an APK is uploaded to a specific Google Drive folder, n8n immediately retrieves the file and sends it to MobSF for scanning. MobSF returns detailed JSON-based findings, including code, library usage and component insights.

The workflow then uses a series of JavaScript code nodes to extract relevant package information, compare used vs. detected packages, identify unused dependencies and classify them by risk. These results are transformed into a concise summary using an AI model. Finally, the summary is posted automatically to a Slack channel for fast team visibility.

This enables developers to take quick action on dependency cleanup, performance optimizations or security risks without manually reading the full MobSF report.


## Who’s It For

* Android developers wanting automated dependency insights
* QA/security teams needing MobSF scans on every APK upload
* DevOps engineers maintaining CI/CD pipelines
* Mobile teams who frequently share build artifacts
* Organizations wanting fast Slack-based reporting


## Requirements to Use This Workflow

* A Google Drive account with access to an APK upload folder
* A running MobSF instance (Docker supported)
* OpenAI API credentials
* Slack workspace with API access
* n8n installed (self-hosted or cloud)


## How It Works & How To Set Up

### 1. Google Drive Trigger Setup

* Connect your Google Drive credentials.
* Choose the folder dedicated to APK uploads.
* Event type: `fileCreated` (fires whenever a new APK is added).

### 2. Downloading the APK

* The workflow uses the Google Drive node to download the uploaded file.
* No manual configuration required beyond credential setup.

### 3. Configure MobSF Upload

* Replace the provided local URL with your MobSF instance URL.
* Ensure MobSF is reachable (via Docker or local network).
* Use `multipart/form-data` to upload the binary file.

### 4. Trigger MobSF Static Scan

* The next HTTP Request node triggers a static scan using the returned hash.
* No further configuration needed.

### 5. Code Nodes (Package Processing)

These three nodes:

* extract used/detected packages,
* identify unused libraries,
* classify them as safe, maybe-required or risky.
  You can customize logic if needed.

### 6. AI-Based Summary Generation

* Connect OpenAI credentials.
* The node generates a clean, non-markdown summary for Slack.

### 7. Slack Notification

* Connect your Slack account.
* Select any desired channel.
* Summary is pushed instantly on every APK upload.

### 8. Activate the Workflow

Once all credentials are added, enable the workflow and test by uploading an APK.


## How To Customize Nodes

### Google Drive Trigger

* Modify polling interval (e.g., every 5 minutes).
* Change folder for different build pipelines.

### MobSF Request Nodes

* Replace URL to support remote servers or Kubernetes deployments.
* Add additional headers if needed.

### Code Nodes

* Adjust package detection rules.
* Add tagging, filtering or extra metadata extraction.

### OpenAI Summary Node

* Customize the prompt for different reporting styles (e.g., shorter, more technical).

### Slack Node

* Add formatting, mentions or route to multiple channels.


## Add-Ons (Optional Extensions)

* **Email Notifications** – Send the same report to email via Gmail or SMTP.
* **Jira Ticket Auto-Creation** – Open issues when risky dependencies are detected.
* **Save Reports to Database** – Store unused package data for long-term trends.
* **CI/CD Integration** – Trigger analysis via GitHub Actions or Jenkins.
* **VirusTotal Scan** – Add an extra malware check layer.


## Use Case Examples

1. **Automated Dependency Cleanup**
Quickly identify unused libraries after each build upload.
2. **Security Monitoring for Android Releases**
Ensure risky system packages aren’t unintentionally included.
3. **Team Collaboration Enhancement**
Send automated insights to Slack for faster decision-making.
4. **QA Validation Before Deployment**
Confirm that declared dependencies match actual usage.
5. **Build Optimization**
Remove unnecessary packages to reduce APK size and performance overhead.

&gt; There are many more possible uses depending on team needs and environment.


## Troubleshooting Guide

| Issue                          | Possible Cause                          | Solution                                               |
| ------------------------------ | --------------------------------------- | ------------------------------------------------------ |
| Workflow not triggering        | Wrong Google Drive folder               | Re-select the correct APK folder in the trigger node   |
| MobSF upload failing           | Wrong URL or server not running         | Check MobSF Docker container and update the URL        |
| MobSF scan shows empty results | APK not parsed successfully             | Verify the APK is valid and not corrupted              |
| Slack message not delivered    | Channel permissions or wrong channel ID | Reconnect Slack credentials and select a valid channel |
| AI summary node fails          | Missing OpenAI credentials              | Add OpenAI API key in the credentials section          |


## Need Help?

If you need assistance setting up, extending or customizing this workflow, our [n8n automation experts](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** are available to help.

Whether you want to add new features, integrate more systems or build similar automation workflows, [feel free to reach out to us](https://www.weblineindia.com/contact-us.html) for professional support.

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, Google Drive Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
