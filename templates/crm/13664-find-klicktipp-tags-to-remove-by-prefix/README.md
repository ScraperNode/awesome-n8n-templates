# 🤝 Find KlickTipp tags to remove by prefix

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

![image.png](fileId:4551)

## **Community Node Disclaimer**
This workflow uses **KlickTipp community nodes**, available for **self-hosted n8n instances only**.

---

## Overview

This sub-workflow determines **which KlickTipp tags should be removed** from a contact by comparing:

- a **tag prefix scope** (for example `Zoho |`)
- a list of **tags that should be kept** (coming from a 3rd-party system and treated as the source of truth)
- the **existing KlickTipp tags** that fall under the same prefix scope


The workflow calculates the difference between the currently assigned prefixed tags and the desired prefixed tags, and returns a single array `tagNamesToRemove[]`.
This result can be passed to a follow-up workflow that performs the actual tag unassignment in KlickTipp.


---

## Inputs

- **prefix** *(string)*  
  The tag prefix that defines the managed scope.  
  Example values: `Zoho |`

- **setTags[]** *(array of strings)*  
  Base tag names that should remain assigned, coming from a 3rd-party tool.  
  Example values: `Webinar`, `Newsletter`

---

## Logic

1. Fetch all available tags from KlickTipp.
2. Keep only tags whose `value` starts with the provided `prefix` (managed scope).
3. Split the incoming `setTags[]` into individual items (the keep list).
4. Compare the scoped KlickTipp tags against the keep list by tag name (`value`).
5. Keep only those scoped KlickTipp tags that **do not have a match** in `setTags[]`.
6. Aggregate the remaining tag names into a single output array `tagNamesToRemove[]`.
---

## Example

Input parameters:
- prefix: `Zoho |`
- setTags: `Webinar`, `Newsletter`


Assuming the contact currently has the following prefixed tags:
- `Zoho | Webinar`
- `Zoho | Newsletter`
- `Zoho | Lead`
- `Zoho | Form`


The workflow will return:
- `Zoho | Lead`
- `Zoho | Form`

---

## Output

The workflow returns a single item containing the array `tagNamesToRemove[]`, which can be passed directly into a downstream workflow responsible for tag unassignment.


---


## Notes
- This sub-workflow calculates the removal list by comparing tag names only.
- It returns a decision array and does not perform the unassignment itself.
- Tag unassignment must be handled by a separate workflow that consumes `tagNamesToRemove[]`.

## 🔗 Nodes Used

Execute Workflow Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
