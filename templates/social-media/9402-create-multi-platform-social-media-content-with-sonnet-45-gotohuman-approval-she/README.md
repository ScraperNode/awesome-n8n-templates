# 📱 Create multi-platform social media content with Sonnet 4.5, GoToHuman approval & Sheets

> ⚡ **469 views** · 📱 [Social Media & Email Marketing](../)

## Description

The **“Multiplatform Social Media Content Creator with GoToHuman Approval”** workflow automates the creation, review, and publishing preparation of social media content across multiple platforms.

It connects a **Google Sheets editorial plan** to **Claude Sonnet 4.5** and **GoToHuman**, allowing for seamless collaboration between AI-generated content and human approval.

This workflow automates the creation and human-approval of social media content. It pulls post ideas from a Google Sheet, uses an AI model to generate platform-specific content, sends it for human review, and then updates the sheet based on the approval or rejection.

---

### **Key Advantages**

* ✅ **AI-Assisted Content Creation:** Automatically transforms content ideas into ready-to-publish social media posts optimized for each platform.
* ✅ **Human-in-the-Loop Approval:** The GoToHuman integration ensures every AI-generated post is reviewed and validated by a person before going live.
* ✅ **Centralized Editorial Management:** All content ideas, drafts, and approvals are synchronized in Google Sheets, creating a transparent and organized workflow.
* ✅ **Platform-Optimized Output:** Adapts tone, format, hashtags, and structure depending on whether the post is for Instagram, Facebook, LinkedIn, or X.
* ✅ **Automated Revision Loop:** If rejected, the workflow automatically refines and regenerates improved content—saving manual rework time.
* ✅ **Scalable and Collaborative:** Ideal for marketing teams managing large volumes of social content that require quality control and brand consistency.
* ✅ **Time-Saving:** Reduces content creation cycles by combining AI writing speed with controlled human oversight.

---

### **How it Works**

1.  **Trigger & Data Fetch:** The process starts either manually or on a schedule. It first connects to a specified Google Sheet and retrieves all rows of data from the "Editorial Plan".
2.  **AI Content Generation:** The workflow loops over each row from the sheet. For each item, it takes the "IDEA" and "PLATFORM" fields and sends them to an Anthropic node ("Social Media Content Creator"). This node uses a detailed, pre-defined system prompt to transform the raw idea into a polished, platform-optimized social media post.
3.  **Human Approval Loop:** The generated post text is then sent to the **GoToHuman** node. This creates a task in the GoToHuman system, pausing the workflow and waiting for a human reviewer to make a decision. The platform information is also passed along as metadata for context.
4.  **Decision Point:** Once a human reviewer responds, the workflow resumes. A Switch node routes the execution based on the response:
    *   **If "approved":** The workflow proceeds to update the original Google Sheet row. It marks the "APPROVED" column with an "x" and writes the final, approved post content into the "POST" column.
    *   **If "rejected":** The workflow routes the rejected item back to the "Social Media Content Creator" AI node. Before doing so, a "Set" node prepares the data, effectively telling the AI to generate a new version of the post based on the same original idea and platform. This creates an iterative improvement loop until the content is approved.

---
### **Set up Steps**

1.  **Prepare the Google Sheet:**
    *   Create a Google Sheet with columns at least for: `DATE`, `IDEA`, `PLATFORM`, `POST`, and `APPROVED`.
    *   Share this sheet with the Google service account or user that your n8n Google Sheets credential is configured with.

2.  **Configure Credentials:**
    *   **Google Sheets:** Set up a OAuth2 credential in n8n for Google Sheets and authenticate it with an account that has access to your sheet.
    *   **Anthropic:** Create an API key credential in n8n and enter your valid Claude API key.
    *   **GoToHuman:** Configure the GoToHuman node with the necessary API credentials and specify the correct `reviewTemplateID` for your approval process.

3.  **Adjust Node Parameters:**
    *   In the "Get row(s) in sheet" and "Update row in sheet" nodes, ensure the `documentId` matches your Google Sheet's ID. The sheet name should also be correct (e.g., `gid=0` for the first sheet).
    *   Review the system prompt in the "Social Media Content Creator" node to ensure it matches your brand's tone, style, and specific platform requirements.
    *   In the GoToHuman node, verify that the `fields` mapping correctly passes the AI-generated text and that the `metaKeyValues` correctly passes the platform information.

4.  **Activate the Workflow:**
    *   Save the workflow and toggle the "Active" switch to ON. You can now trigger it manually using the "Execute workflow" button or let it run automatically based on the defined schedule.


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
