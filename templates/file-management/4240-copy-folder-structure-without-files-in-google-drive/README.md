# 📁 Copy folder structure without files in Google Drive

> ⚡ **194 views** · 📁 [File Management](../)

## Description

# Why?

Google Drive desktop lets you copy full folders—contents and all. But what if you only want to copy the folder names (not the files) from one drive location to another? Maybe you're reusing a folder structure or duplicating a template structure, but without this workflow each copy will hold different content. This n8n workflow helps you clone just the structure—no clutter, no file duplicates.

# How it works

1. Load this workflow into your n8n instance
2. Setup GDRIVE credentials if you have not already (see video below)
3. Double-click "edit this node"
4. Enter the **SOURCE** folder ID (into "EDIT_THIS_NODE") - see image on where to get folder ID
5. Enter the **DESTINATION** folder ID
6. Run the workflow

# What it does

- Creates all new folders in destination that were in the source folder
- Skips folders in destination that already exist

# What it doesn't do (yet)

- Does not copy over any nested folders
- Does not copy over any files

# Requirements
- n8n
- Google drive API must be setup in your n8n ([https://www.youtube.com/watch?v=3Ai1EPznlAc](5min vid how to do that))
- 
# Future Updates

If I get requests for these features I would build them:

- Copy nested folder structure within the destination drive.
- Flag (on/off) - to copy nested folder structure
- Better error handling
- Some kind of feedback output log on what was created

## 🔗 Nodes Used

Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
