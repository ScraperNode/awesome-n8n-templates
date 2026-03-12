# 📁 Upload multiple attachments from Gmail to Google Drive - without a code node

> ⚡ **3,285 views** · 📁 [File Management](../)

## Description

## Summary
This template uses the item handling nodes, and expression-support in n8n, **without using a `Code` node**, to extract **multiple** attachments from a GMail (trigger input) message/event, and (conditionally) upload each of them to Google Drive.

Note: There is another template titled [Get Multiple Attachments from Gmail and upload them to GDrive](&lt;https://n8n.io/workflows/2348-get-multiple-attachments-from-gmail-and-upload-them-to-gdrive/&gt;) that does basically the same thing, but it uses a `Code` node.

## Details
### Using `Split Out` instead of `Code`
The “secret” to how this works is that n8n supports a special input field name `$binary` that references the entire set of (multiple) binary data sub-elements in a single input item.  It may look like an expression, but in this case it is a “fixed” (literal) value used as the `Fields to Split Out` parameter value.

### Dealing with names that are prefixed/suffixed with an Index
The next challenge with multiple attachments from a GMail message is that **each one is still assigned different name** like "attachment_0", "attachment_1", etc.  This makes it tricky to reference them in a generic way.  However, **once n8n splits the items out**, the binary in **each item is always the first (i.e. index-zero / `[0]`) and ONLY key/value**.  So, that makes it possible get the key-name and attributes of the corresponding value indirectly with some clever expression syntax.
* `Input Data Field Name` -&gt; Expression: `{{ $binary.keys()[0] }}` - **This returns the name, regardless of whether it is "attachment_0", "attachment_1", or whatever else.**
* Attachment file name: -&gt; Expression: `{{ $binary.values()[0].fileName }}`
* Attachment file name extension: -&gt; Expression: `{{ $binary.values()[0].fileExtension }}`
* Attachment file type: -&gt; Expression: `{{ $binary.values()[0].fileType }}`
* Attachment file size (e.g. string "100 kB"): -&gt; Expression: `{{ $binary.values()[0].fileSize }}`
* Attachment file size (numeric): -&gt; Expression: `{{ $binary.values()[0].fileSize.split(' ')[0].toNumber() }}`
* Attachment mime type: -&gt; Expression: `{{ $binary.values()[0].mimeType }}`
* Attachment id (storage GUID): -&gt; Expression: `{{ $binary.values()[0].id }}`

## Flow Control
Since each of the attachments becomes a single item, it is relatively straightforward to introduce other n8n nodes like `If`, `Switch`, or `Filter` and route each single attachment item into different workflow paths.  The template demonstrates how each attachment binary could be routed based on its file size, as an example.

## 🔗 Nodes Used

Google Drive, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
