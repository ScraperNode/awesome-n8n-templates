# ⚙️ KV - Cloudflare key-value database full API integration workflow

> ⚡ **1,519 views** · ⚙️ [DevOps & CI/CD](../)

## Description

![Cloudflare KV](https://blog.cloudflare.com/content/images/2023/08/Fixing-Workers-KV-Reliability-1.png)

This n8n template provides a comprehensive solution for managing Key-Value (KV) pairs using Cloudflare's KV storage. It's designed to simplify the interaction with Cloudflare's KV storage APIs, enabling users to perform a range of actions like creating, reading, updating, and deleting namespaces and KV pairs.

### Features

* **Efficient Management**: Handle multiple KV operations seamlessly.
* **User-Friendly**: Easy to use with pre-configured Cloudflare API credentials within n8n.
* **Customizable**: Flexible for integration into larger workflows (Copy / paste your prefered part).

## Prerequisites

* n8n workflow automation tool (version 1.19.0 or later).
* A Cloudflare account with access to KV storage.
* Pre-configured Cloudflare API credentials in n8n.

## Workflow Overview

This workflow is divided into three main sections for ease of use:

1. **Single Actions**: Perform individual operations on KV pairs.
2. **Bulk Actions**: Handle multiple KV pairs simultaneously.
3. **Specific Actions**: Execute specific tasks like renaming namespaces.

### Key Components

* **Manual Trigger**: Initiates the workflow.
* **Account Path Node**: Sets the path for account details, a prerequisite for all actions.
* **HTTP Request Nodes**: Facilitate interaction with Cloudflare's API for various operations.
* **Sticky Notes**: Provide quick documentation links and brief descriptions of each node's function.

## Usage

1. **Setup Account Path**: Input your Cloudflare account details in the 'Account Path' node. you can get your account path by your cloudflare URL
![Cloudflare-Screen](https://cdn.statically.io/gh/ARHAEEM/blog/assets/1705073020000m9ecrr.png)
2. **Choose an Action**: Select the desired operation from the workflow.
3. **Configure Nodes**: Adjust parameters in the HTTP request nodes as needed. (_each node contain sticky note with direct link to it own document page_)
4. **Execute Workflow**: Trigger the workflow manually to perform the selected operations.
## Detailed Node Descriptions
I covered in this Workflow the full api calls of Cloudflare KV product. 

### API NODE: Delete KV

* **Type**: HTTP Request
* **Function**: Deletes a specified KV pair within a namespace.
* **Configuration**: This node requires the namespace ID and KV pair name. It automatically fetches these details from preceding nodes, specifically from the "List KV-NMs" and "Set KV-NM Name" nodes.
* **Documentation**: [Delete KV Pair API](https://developers.cloudflare.com/api/operations/workers-kv-namespace-remove-a-namespace)

### API NODE: Create KV-NM

* **Type**: HTTP Request
* **Function**: Creates a new Key-Value Namespace.
* **Configuration**: Users need to input the title for the new namespace. This node uses the account information provided by the "Account Path" node.
* **Documentation**: [Create Namespace API](https://developers.cloudflare.com/api/operations/workers-kv-namespace-create-a-namespace)

### API NODE: Delete KV1

* **Type**: HTTP Request
* **Function**: Renames an existing Key-Value Namespace.
* **Configuration**: Requires the old namespace name and the new desired name. It retrieves these details from the "KV to Rename" and "List KV-NMs" nodes.
* **Documentation**: [Rename Namespace API](https://developers.cloudflare.com/api/operations/workers-kv-namespace-rename-a-namespace)

### API NODE: Write KVs inside NM

* **Type**: HTTP Request
* **Function**: Writes multiple Key-Value pairs inside a specified namespace.
* **Configuration**: This node needs a JSON array of key-value pairs along with their namespace identifier. It fetches the namespace ID from the "List KV-NMs" node.
* **Documentation**: [Write Multiple KV Pairs API](https://developers.cloudflare.com/api/operations/workers-kv-namespace-write-multiple-key-value-pairs)

### API NODE: Read Value Of KV In NM

* **Type**: HTTP Request
* **Function**: Reads the value of a specific Key-Value pair in a namespace.
* **Configuration**: Requires the Key's name and Namespace ID, which are obtained from the "Set KV-NM Name" and "List KV-NMs" nodes.
* **Documentation**: [Read KV Pair API](https://developers.cloudflare.com/api/operations/workers-kv-namespace-read-key-value-pair)

### API NODE: Read MD from Key

* **Type**: HTTP Request
* **Function**: Reads the metadata of a specific Key in a namespace.
* **Configuration**: Similar to the "Read Value Of KV In NM" node, it needs the Key's name and Namespace ID, which are obtained from the "Set KV-NM Name" and "List KV-NMs" nodes.
* **Documentation**: [Read Metadata API](https://developers.cloudflare.com/api/operations/workers-kv-namespace-read-the-metadata-for-a-key)

&gt; The rest can be found inside the workflow with sticky/onflow note explain what to do.

## Best Practices

* **Modular Use**: Extract specific parts of the workflow for isolated tasks.
* **Validation**: Ensure correct namespace and KV pair names before execution.
* **Security**: Regularly update your Cloudflare API credentials for secure access, and make sure to give your API only access to the KV.

**Keywords**: Cloudflare KV, n8n workflow automation, API integration, key-value storage management.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
