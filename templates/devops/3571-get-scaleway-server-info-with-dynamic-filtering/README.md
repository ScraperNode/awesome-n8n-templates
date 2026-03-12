# ⚙️ Get Scaleway server info with dynamic filtering

> ⚡ **313 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Get Scaleway Server Info with Dynamic Filtering

## Description

This workflow is designed for developers, system administrators, and DevOps engineers who need to retrieve and filter Scaleway server information quickly and efficiently. It gathers data from Scaleway instances and baremetal servers across multiple zones and is ideal for:
- Quickly identifying servers by tags, names, public IPs, or zones.
- Automating server status checks in production, staging, or test environments.
- Integrating Scaleway data into broader monitoring or inventory systems.

## High-Level Steps

- **Webhook Trigger:**
  Receives an HTTP POST request (with basic authentication) containing the search criteria (`search_by` and `search`).

- **Server Data Collection:**
  Fetches server data from Scaleway’s API endpoints for both instances and baremetal servers across defined zones.

- **Data Processing:**
  Aggregates and normalizes the fetched data using a Code node with helper functions.

- **Dynamic Filtering:**
  Routes data to dedicated filtering routines (by tags, name, public_ip, or zone) based on the input criteria.

- **Response:**
  Returns the filtered data (or an error message) via a webhook response.

## Set Up Steps

1. **Insert Your Scaleway Token:**
   In the “Edit Fields” node, replace the placeholder `Your personal Scaleway X Auth Token` with your Scaleway API token.

2. **Configure Zones:**
   Review or update the zone lists (`ZONE_INSTANCE` and `ZONE_BAREMETAL`) to suit your environment.

3. **Send a Request:**
   Make a POST request to the workflow’s webhook endpoint with a JSON payload, for example:
   ```json
   {
     "search_by": "tags",
     "search": "Apiv1"
   }
   ```

4. **View the Results:**
   The workflow returns a JSON array of servers matching your criteria, including details like name, tags, public IP, type, state, zone, and user.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
