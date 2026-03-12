# 🔒 Monitor remote server file integrity with SSH and Slack alerts

> ⚡ **334 views** · 🔒 [SecOps & Security Automation](../)

## Description

---

## How It Works: The 5-Node Security Flow

This workflow efficiently performs a scheduled file integrity audit.

### 1. Scheduled Check (Cron Node)
This is the workflow's trigger. It schedules the workflow to run at a specific, regular interval.
* **Function:** Continuously runs on a set schedule, for example, daily at 3:00 AM.
* **Process:** The `Cron` node automatically initiates the workflow on its schedule, ensuring consistent file integrity checks without manual intervention.

### 2. List Files & Checksums (Code Node)
This node acts as your static database, defining which files to monitor and their known-good checksums.
* **Function:** Stores the file paths and their verified checksums in a single, easy-to-update array.
* **Process:** It configures the file paths and their valid checksums, which are then passed on to subsequent nodes for processing.

### 3. Get Remote File Checksum (SSH Node)
This node connects to your remote server to get the current checksum of the file being monitored.
* **Function:** Executes a command on your server via SSH.
* **Process:** It runs a command like `sha256sum /path/to/file` on the server. The current checksum is then captured and passed to the next node for comparison.

### 4. Checksums Match? (If Node)
This is the core detection logic. It compares the newly retrieved checksum from the server with the known-good checksum you stored.
* **Function:** Compares the two checksum values.
* **Process:** If the checksums **do not match**, it indicates a change in the file, and the workflow is routed to the notification node. If they do match, the workflow ends safely.

### 5. Send Alert (Slack Node) / End Workflow (No-Op Node)
These nodes represent the final action of the workflow.
* **Function:** Responds to a detected file change.
* **Process:** If the checksums don't match, the **Slack** node sends a detailed alert with information about the modified file, the expected checksum, and the detected checksum. If the checksums match, the **No-Op** node ends the workflow without any notification.

---

## How to Set Up

Implementing this essential cybersecurity monitor in your n8n instance is quick and straightforward.

### 1. Prepare Your Credentials & Server
Before building the workflow, ensure all necessary accounts are set up and their credentials are ready.

* **SSH Credential:** Set up an **SSH credential** in n8n with your server's hostname, port, and authentication method (e.g., private key or password). The SSH user must have permission to run `sha256sum` on the files you want to monitor.
* **Slack Credential:** Set up a **Slack credential** in n8n and note the **Channel ID** of your security alert channel (e.g., `#security-alerts`).
* **Get Checksums:** **This is a critical step.** Manually run the `sha256sum [file_path]` command on your server for each file you want to monitor. Copy and save the generated checksum values—these are the "known-good" checksums you will use as your reference.

### 2. Import the Workflow JSON
Get the workflow structure into your n8n instance.

* **Import:** In your n8n instance, navigate to the "Workflows" section. Click the "New" or "+" icon, then select "Import from JSON." Paste the provided JSON code into the import dialog and import the workflow.

### 3. Configure the Nodes
Customize the imported workflow to fit your specific monitoring needs.

* **Scheduled Check (Cron):** Set the schedule according to your preference (e.g., daily at 3:00 AM).
* **List Files & Checksums (Code):** Open this node and **edit the `filesToCheck` array**. Enter your actual server file paths and paste the "known-good" checksums you manually obtained in step 1.
* **Get Remote File Checksum (SSH):** Select your **SSH credential**.
* **Send Alert (Slack):** Select your **Slack credential** and replace `YOUR_SECURITY_ALERT_CHANNEL_ID` with your actual **Channel ID**.

### 4. Test and Activate
Verify that your workflow is working correctly before setting it live.

* **Manual Test:** Run the workflow manually. Verify that it connects to the server and checks the files without sending an alert (assuming the files haven't changed).
* **Verify:** To test the alert, manually change one of the files on your server and run the workflow again. Check your Slack channel to ensure the alert is sent correctly.
* **Activate:** Once you're confident in its function, activate the workflow. n8n will now automatically audit the integrity of your critical files on the schedule you set.

## 🔗 Nodes Used

Cron, Slack, SSH

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
