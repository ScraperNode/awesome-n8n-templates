# 📁 Recursive Google Drive folder duplicator with permission preservation

> ⚡ **615 views** · 📁 [File Management](../)

## Description

# Google Drive Folder Duplicator

**This n8n workflow creates a complete recursive copy of any Google Drive folder, preserving the entire folder structure, all files, and sharing permissions.**

## What It Does

- Duplicates folders with unlimited nested subfolders
- Copies all files maintaining original names and metadata
- Preserves sharing permissions (users, groups, domains)
- Creates identical folder hierarchy in target location

## How It Works

1. Initialize: Sets source/target folders and creates main destination folder
2. Recursive Processing: Scans each folder level, splits files from subfolders
3. File Handling: Copies files and applies original permissions
4. Folder Handling: Creates subfolders and applies original permissions
5. Self-Recursion: Calls itself for each subfolder to process unlimited nested levels

## Key Features

- Unlimited Depth: Handles any number of nested folder levels
- Permission Preservation: Maintains exact sharing settings

## Requirements

Google Drive OAuth2 credentials with drive access

## 🔗 Nodes Used

Google Drive, Execute Sub-workflow, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
