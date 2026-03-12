# 🔬 Automate X-ray analysis with VLM Orion and distribute to Gmail, Telegram & Drive

> ⚡ **72 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## 📌 Overview

This workflow provides an **automated pipeline for processing medical X-ray images** using **VLM Run (model: `vlmrun-orion-1:auto`)**, and distributing the AI-generated analysis to multiple channels—**email, Telegram, and Google Drive**.



---

## ⚙️ How It Works

### **1. Upload X-Ray Image**

A **Form Trigger** allows the user to upload an X-ray file.
Once the image is submitted, the workflow immediately starts processing.

---

### **2. Automated X-Ray Analysis**

The uploaded X-ray image is sent to **VLM Run (`vlmrun-orion-1:auto`)** via an OpenAI-compatible endpoint.

The model returns:

* A text-based interpretation or description
* A disease-highlighted output image (if detected)
* A URL reference pointing to the annotated result image stored in Google Cloud

---

### **3. Extract Artifact**

From artifact reference, download file using artifact node.


---

### **4. Generate Report File**

The **Convert to File** node transforms the analysis text into a shareable `.txt` report.
This file is used both for email and Drive storage.

---

### **5. Send Notifications to Gmail & Telegram**

The workflow automatically:

📧 **Emails the doctor** (or configured staff email):

* The diagnostic description
* The generated report file
* The annotated X-ray image

📨 **Sends a Telegram message** containing:

* The same report
* The disease-highlighted X-ray image

This ensures instant notification and cross-platform availability.

---

### **6. Upload to Google Drive**

The final step uses **Google Drive OAuth2** to store:

* The report file
* The annotated medical image

These files are uploaded to a designated Drive folder for archiving and future reference.

---

## 🧩 Key Features

* ✔️ Automated X-ray processing using VLM Run
* ✔️ Structured extraction of annotated medical images
* ✔️ Multi-channel notification (Email + Telegram)
* ✔️ Centralized archive via Google Drive
* ✔️ Zero manual intervention after upload
* ✔️ Works with OpenAI-compatible VLM endpoints

---

## 🔧 Requirements

* **VLM Run API Credentials**
  Required to call `vlm-agent-1` for image analysis.

* **Gmail OAuth2 Credentials**
  Needed to automatically email the diagnostic report.

* **Telegram Bot Token**
  Sends analysis results to a Telegram chat or group.

* **Google Drive OAuth2**
  Stores reports and annotated images in Google Drive.


---

## 📎 Notes

This workflow automates image handling and communication.
All AI-generated content must be reviewed by a qualified medical professional before any clinical use.

## 🔗 Nodes Used

Telegram, Google Drive, Gmail, n8n Form Trigger, Convert to File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
