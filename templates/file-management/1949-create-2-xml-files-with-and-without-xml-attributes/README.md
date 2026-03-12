# 📁 Create 2 XML files: with and without XML attributes

> ⚡ **1,598 views** · 📁 [File Management](../)

## Description

This workflow demonstrates two ways of exporting data from SQL to XML.

First, several random records are received from the MySQL database.

Then, in the upper part of the workflow, the structure of an XML is defined in the Set node. After that, the ItemLists node combines all items into an array. This allows an XML node to create a simple XML file.

The lower part of the workflow shows how to create an XML with attributes. It is almost identical except that a $ (dollar sign) JSON key is used to define XML attributes.

Finally, both files are saved locally.

## 🔗 Nodes Used

Write Binary File, Convert to/from binary data, MySQL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
