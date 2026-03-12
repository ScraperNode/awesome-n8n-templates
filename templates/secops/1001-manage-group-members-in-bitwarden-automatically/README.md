# 🔒 Manage group members in Bitwarden automatically

> ⚡ **1,141 views** · 🔒 [SecOps & Security Automation](../)

## Description

This workflow allows you to create a group, add members to the group, and get the members of the group.

![workflow-screenshot](fileId:456)

**Bitwarden node:** This node will create a new group called `documentation` in Bitwarden.

**Bitwarden1 node:** This node will get all the members from Bitwarden.

**Bitwarden2 node:** This node will update all the members in the group that we created earlier.

**Bitwarden3 node:** This node will get all the members in the group that we created earlier.

## 🔗 Nodes Used

Bitwarden

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
