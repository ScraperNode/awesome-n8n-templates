# 🔬 Audit SharePoint Online external sharing and anonymous links with Microsoft Graph

> ⚡ **50 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Audit external sharing in SharePoint to ensure compliance

This workflow audits your **SharePoint Online** environment for **external sharing risks** by identifying files and folders that are shared with **anonymous links** or **external/guest users**. It is designed to **traverse SharePoint recursively**, giving you full visibility into sharing across all sites, document libraries, folders and files.

### What it does

* Scans **all SharePoint sites** in the tenant.
* **Traverses SharePoint recursively** through every folder and file, starting at the root of each drive.
* Fetches **permissions for every item** (files and folders).
* Detects and flags:

  * **Anonymous sharing links** (anyone links)
  * **External or guest users**, identified by:

    * SharePoint guest login markers (`#ext#`, `urn:spo:guest`)
    * Email domains not matching your internal tenant domains
* Outputs **only items that are externally shared**, including detailed metadata and permission evidence.

### How it works

* In the **Set Variables** node you define your internal `tenantDomains`, used to distinguish internal users from external ones.

* **Microsoft Graph** is used to:
  * Fetch all SharePoint sites
  * Retrieve drives (document libraries) per site
* Each drive triggers a **recursive subworkflow** that:
  * Starts at the root level
  * Determines whether an item is a folder or a file
  * If a folder, drills down into its children
  * Keeps both folders and files, since both can have unique permissions

* For every discovered item:
  * Permissions are retrieved via Microsoft Graph
  * Item metadata and permissions are merged
* A custom **filtering step** analyzes permissions and:

  * Flags anonymous links and external principals
  * Drops items with no external exposure
* The final output is a clean, normalized list of **externally shared SharePoint items**, enriched with:

  * Item name, type, URL and last modified date
  * Site, drive, and parent identifiers
  * Detailed lists of anonymous links and external users found

### Setup

* Create a **Microsoft Entra ID (Azure AD) App Registration**.
* Grant **Microsoft Graph – Application permissions**:
  * `Sites.Read.All`

* Configure an **OAuth2 Client Credentials** credential in n8n and assign it to all HTTP Request nodes.

* Update the **Set Variables** node:

  * Add all internal tenant domains (e.g. `yourDomain.onmicrosoft.com`, `yourDomain.com`)
* Run the workflow manually or attach a **Schedule Trigger** for recurring audits.

### Notes

* The workflow **traverses SharePoint recursively**, ensuring no nested folder or file is missed.
* Both folders and files are included because **permissions can be broken at any level**.
* External users are detected defensively using **both login-name patterns and email domain checks**.

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
