# ⚙️ Automate NPM package installation and updates for self-hosted environments

> ⚡ **6,356 views** · ⚙️ [DevOps & CI/CD](../)

## Description

*Are you looking to install external libraries for your self-hosted N8N instance? This automated workflow makes adding npm packages to your N8N environment quick and effortless.*

![image.png](fileId:1043)

**Beware, this workflow only works on self-hosted instances.**
## What This Workflow Does
This solution automatically installs npm packages like axios, cheerio, or node-fetch in your self-hosted N8N Docker container, making them immediately available in Code nodes.
### Key features

✅ **Automated Installation:** No manual npm commands needed
✅ **Daily Updates:** Scheduled trigger keeps packages current
✅ **Smart Installation:** Only installs missing packages
✅ **Multiple Triggers:** Manual, scheduled, and on startup of the N8N instance so you can upgrade your N8N version without worrying about external libraries.

## How to install and update external libraries automatically
### Step 1: Setting Up Your Environment Variables
Before using external libraries in N8N Code nodes, configure these environment variables in your Docker comppose file.
#### Option A to allow specific external npm packages in N8N Code nodes
```
NODE_FUNCTION_ALLOW_EXTERNAL=axios,cheerio,node-fetch
```
#### Option B to allow all external npm packages in Code nodes
```
NODE_FUNCTION_ALLOW_EXTERNAL=*
```


### Step 2: Import the external packages workflow

Import the workflow into your N8N instance by copy pasting all nodes.

### Step 3: Input the list of external libraries you need

Edit the libraries_set node
Change the comma-separated list (e.g., axios,cheerio,node-fetch).

**If you chose Option A above**, update your NODE_FUNCTION_ALLOW_EXTERNAL variable with the same packages

### Step 4: Start the workflow!
Run the workflow manually or let it trigger automatically

## Why use this to install NPM packages in N8N?
Managing external packages manually in N8N can be time-consuming. This workflow automates the entire process, making sure your libraries are always installed and up-to-date.

## 🔗 Nodes Used

n8n Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
