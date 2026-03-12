# 📁 Simple file based key value store (WriteKey)

> ⚡ **1,686 views** · 📁 [File Management](../)

## Description

Store a key with a value in a local json file. Multiple keys could be saved in a single file.

Related workflow: [GetKey](https://n8n.io/workflows/1408)

Create a subfolder in your n8n homedir: `/home/node/.n8n/local-files`. In docker look at the data path and create a subfolder `local-files`.
Set the correct access rights `chmod 1000.1000 local-files`.

Put the workflow code in a new workflow named `WriteKey`.

Create another workflow with a `function item`:

```js
return  {
  file: '/4711.json', // 4711 should be your workflow id
  key: 'MyKey',
  value: 'MyValue'
}
```

Pipe the `function item` to an `Execution Workflow` that calls the `WriteKey` workflow.

It would be nice if we could get someday a shiny built-in n8n node that does the job. :)

## 🔗 Nodes Used

Function Item, Read Binary Files, Start, Write Binary File, Convert to/from binary data

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
