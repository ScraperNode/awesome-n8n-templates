# 📁 Simple file based key value store (GetKey)

> ⚡ **1,142 views** · 📁 [File Management](../)

## Description

Read a value by key from a local json file.

Related workflow: [WriteKey](https://n8n.io/workflows/1407)

Create a subfolder in your n8n homedir: `/home/node/.n8n/local-files`. In docker look at the data path and create a subfolder `local-files`.
Set the correct access rights `chmod 1000.1000 local-files`.

Put the workflow code in a new workflow named `GetKey`.

Create another workflow with a `function item`:

```js
return  {
  file: '/4711.json', // 4711 should be your workflow id
  key: 'MyKey',
  default: 'Optional returned value if key is empty / not exists'
}
```

Pipe the `function item` to an `Execution Workflow` that calls the `GetKey` workflow.

It would be nice if we could get someday a shiny built-in n8n node that does the job. :)

## 🔗 Nodes Used

Function Item, Read Binary File, Start, Convert to/from binary data

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
