# 🔬 AI-powered body measurement & clothing size estimator from image with Fal.ai

> ⚡ **541 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow automates the process of estimating a person’s fashion size from an uploaded image using an AI model.

This workflow is an automated pipeline that uses an AI model to estimate a person's body measurements and clothing size from an image URL.

---

## Key Features

* **🔁 Full Automation** – From image submission to result display, the process requires no manual steps.
* **⚙️ Easy Integration** – Uses n8n’s native nodes and simple HTTP requests to connect with Fal.ai’s API.
* **🕒 Real-Time Processing** – Automatically waits and checks for the AI result, ensuring the user receives the output as soon as it’s ready.
* **🧩 Modular Design** – Each step (submit → process → check → result) is clearly separated, making it easy to modify or extend (e.g., adding notifications or storing results in a database).
* **💡 User-Friendly Interface** – The initial form and final result form make it accessible even for non-technical users.
* **🔐 Secure** – Authentication to the Fal.ai API is handled through HTTP header authorization, keeping API keys protected.

---


### How it works


1.  **Form Trigger:** The workflow starts with a public form where a user submits a URL of an image.
2.  **AI Processing Request:** The submitted image URL is sent to the `fal.run` AI service (specifically, the "fashion-size-estimator" model) via a POST request. This initial request places the job in a queue and returns a unique `request_id`.
3.  **Polling for Completion:** The AI processing is asynchronous and takes some time. The workflow enters a loop where it:
    *   **Waits:** Pauses for 10 seconds to give the AI model time to process the request.
    *   **Checks Status:** Uses the `request_id` to check the status of the job.
    *   **Conditional Check:** An IF node checks if the status is "COMPLETED".
        *   If `NO` (not completed), the loop repeats (wait, then check again).
        *   If `YES`, the workflow exits the loop.
4.  **Fetching and Displaying Results:** Once processing is complete, the workflow retrieves the final result (containing the size, height, bust, waist, and hip measurements) and automatically displays it to the user on a "thank you" page.
---


### Set up steps

To make this workflow operational, you need to configure the API authentication.

1.  **Obtain an API Key:**
    *   Create an account at fal.ai
    *   Navigate to your account settings to generate an API key.

2.  **Configure Credentials in n8n:**
    *   In your n8n instance, create a new HTTP Header Auth credential (you can name it "Fal.run API").
    *   Set the **Name** field to `Authorization`.
    *   Set the **Value** field to `Key YOURAPIKEY`, replacing "YOURAPIKEY" with the actual key you obtained from fal.ai.
    *   Ensure this credential is correctly selected in the three HTTP Request nodes: "Send image to estimator", "Get status", and "Get result".

---
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
