# ⚡ Spotify: discover weekly archive

> ⚡ **2,019 views** · ⚡ [Personal Productivity](../)

## Description

This updated workflow will automatically archive your Spotify `Discover Weekly` tracks to another **manually created** playlist, without the nuisance of duplicate tracks. It utilizes the latest verisons of n8n's [`Schedule trigger`](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/), [`Spotify`](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.spotify/), [`Switch`](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch/), [`Merge`](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.merge/), and [`IF`](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if/) nodes.

Special thanks to [trey](https://community.n8n.io/u/trey) for their original version of the workflow, as well as [ihortom](https://community.n8n.io/u/ihortom) for their [help with navigating the `Switch` node's outputs](https://community.n8n.io/t/targeting-previous-switch-node-outputs/34919).

#### To use this workflow, you'll need to:
- Create a playlist for use as the archive playlist within your Spotify account
- Create and select your Spotify credentials within each Spotify node within the workflow

See workflow `README` for additional information and optional setup steps.

## 🔗 Nodes Used

Spotify, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
