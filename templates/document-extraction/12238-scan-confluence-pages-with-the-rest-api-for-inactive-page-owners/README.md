# 🔬 Scan Confluence pages with the REST API for inactive page owners

> ⚡ **67 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Scan Confluence pages for inactive page  owners

This workflow scans selected **Confluence spaces**, resolves page ownership and **filters pages with inactive owners**, helping teams maintain clear ownership and prevent orphaned documentation.

### What it does

-   Scans Confluence pages across selected spaces.
    
-   **Resolves page owners and checks their account status**.
    
-   **Filters pages where the owner is inactive** (`owner.accountStatus !== active`).
    
-   Uses **Confluence REST API v2** to fetch spaces, pages, and user data.
    
-   Resolves page owners efficiently via the **users-bulk API**.
    
-   Produces a consolidated report containing:
    
    -   Page title
        
    -   Owner email
        
    -   Owner account status
        
    -   Last updated date
        
    -   Direct page URL
        
-   Useful for **documentation governance**, ownership audits, and cleanup initiatives.
    

### How it works
    
-   A **Set Variables** node defines:
    
    -   Atlassian domain
        
    -   Space keys to scan
        
-   **Get Spaces (v2)** retrieves matching spaces and extracts their IDs.
    
-   **Get Pages (v2)** fetches all pages from the selected spaces.

-   Unique page `ownerId`s are collected and resolved using **Bulk User Lookup (v2)**.
        
-   Page metadata is **merged with user account data** (`ownerId` ↔ `accountId`).
    
-   Pages are **filtered to include only those with inactive owners**.
    

### Setup

-   Configure the **Set Variables** node:
    
    -   `atlassianDomain` → your Confluence base URL
        
    -   `spaceKeys` → comma-separated list of space keys (e.g. `ENG, HR`)
        
-   Create an **HTTP Basic Auth credential**:
    
    -   Atlassian email + API token
        
    -   Assign it to all HTTP Request nodes
        
-   Optional enhancements:
    
    -   Add pagination if spaces contain many pages.
        
    -   Extend the workflow with email notifications, Slack alerts, or CSV export.
        

### Notes

-   Requires permission to read Confluence spaces, pages, and users.
    
-   Pages are flagged when `owner.accountStatus !== active`.
    
-   Current page fetch limit is **50 items per request**.

## 🔗 Nodes Used

HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
