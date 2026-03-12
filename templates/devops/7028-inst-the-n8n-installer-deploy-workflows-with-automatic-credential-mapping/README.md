# ⚙️ INST - the n8n installer: deploy workflows with automatic credential mapping

> ⚡ **140 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## INST: The n8n Workflow Installer

This workflow provides everything you need to package and deploy multiple workflows from a **single workflow you distribute**.

That's right, now you can package up dozens of workflows and send your client(s) a single workflow to run, that will create them all and auto-assign all the credentials.

This workflow installs 3 files when you run it, demonstrating the functionality. Just make your own mods to the system, repackage it, and you are ready to go!

---

## Requirements

- An n8n instance with API access enabled and an access key
- Optional: GitHub and OpenAI access keys

---

## What This Workflow Does

- Installs 3 additional workflows, demonstrating the functionality
- One of the workflows is a packager, that you configure for your own needs
- Two example workflows demonstrate functionality, and can be deleted

---

## Step-by-Step Setup

1. **Run the Workflow**  
   This will get the example and tool workflows on your instance.

2. **Package Your Content**  
   Configure the packager, then run it to produce a base64-compressed version of your files.

3. **Customize the Installer**  
   Make your own copy of the installer, and set the base64 payload.

4. **Deploy the Installer**  
   Export your installer script. Now, anyone you send it to will get all your packaged workflows when they execute it.

---

## How to Use This Workflow

This workflow is meant to be reused and adapted. You can:

- Integrate it into a deployment pipeline  
- Turn it into a subworkflow for dynamic installs  
- Extend it to include triggers, permission settings, or test runs  

If you frequently deploy or share n8n assets, this installer gives you a repeatable way to do it with confidence.

## 🔗 Nodes Used

GitHub, HTTP Request, Stop and Error, n8n, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
