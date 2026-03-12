# ⚒️ XOR encryption and decryption with Base64 encoding for workflow data

> ⚡ **338 views** · ⚒️ [Engineering](../)

## Description

This workflow performs basic XOR-based encryption and decryption using a custom password. It is intended to be triggered by another workflow and processes structured input in JSON format.

### Input Structure

The workflow expects a single array of objects with the following fields:

- `action-type`: either `"encrypt"` or `"decrypt"`
- `key`: the password used for encryption and decryption
- `data`: the content to encrypt or decrypt

### Example: Encryption Input

```json
[
  {
    "action-type": "encrypt",
    "key": "Password",
    "data": "Hello, this is a secret message"
  }
]
```

### Example: Decryption Input

```json
[
  {
    "action-type": "decrypt",
    "key": "Password",
    "data": "ChwGAQceF15eE2QXFRcUagxGVgV8TBoNBA4VQVoQZkwVUhImU1FTEg=="
  }
]
```

### Output

The output returns an array of results, each containing either the encrypted string (base64 format) or the decrypted plain text.

### Use Case

This workflow is useful for simple internal message encoding, data obfuscation, or testing purposes. It is not recommended for securing sensitive or personal data, as XOR encryption is not cryptographically secure.

The workflow logic is written in JavaScript using n8n Function nodes, without any external dependencies.

## 🔗 Nodes Used

Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
