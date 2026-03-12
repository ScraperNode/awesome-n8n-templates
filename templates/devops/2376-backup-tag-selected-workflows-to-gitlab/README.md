# ⚙️ Backup tag-selected workflows to Gitlab

> ⚡ **1,998 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Fetches workflow definitions from within n8n, selecting only the ones that have one or more (configurable) assigned tags and then:
1. Derives a suitable backup filename by reducing the workflow name to a string with alphanumeric characters and no-spaces
    * *Note: This isn't bulletproof, but works as long as workflow names aren't too crazy.*
2. Determines which workflows need to be backed up based on whether each one:
    * has been modified. (*Note: Even repositioning a node counts.*)
   ...or...
    * is new. (*Note: Renaming counts as this.*)
3. Commits JSON copies of each workflow, as necessary, to a Gitlab repository with a generated, date-stamped commit message.

## Setup
### Credentials
  * Create a Gitlab Credentials item and assign it to all Gitlab nodes.
  * Create an n8n Credentials item and assign it to the n8n node
    * Note: This was tested with **http://localhost:5678/api/v1** but should work with any reachable n8n instance and API key.

### Modify these values in the "Globals" Node
  * **gitlab_owner** - {{your gitlab account}}
  * **gitlab_project** - {{ your gitlab project name }}
  * **gitlab_workflow_path** - {{ subdirectory in the project where backup files should be saved/committed }}
  * **tags_to_match_for_backup** - {{tag(s) to match for backup selection}}
    * ***ALERT:** According to the **n8n** node's **Filters -&gt; tags** field annotations, and API documentation, this supports a CSV list of multiple tags (e.g. tag1,tag2), **but** the API behavior requires workflows to have **all-of** the listed tags, not **any-of** them.*
      * **See:** https://github.com/n8n-io/n8n/issues/10348
      * **TL/DR** - Don't expect a multiple tag list to be **more** inclusive.
      * **Possible workaround:** To match more than one tag value, duplicate the n8n node into multiple single-tag matches, or split and iterate multiple values, and merge the results.

## Possible Enhancements
* Make the branch ("Reference") for all the gitlab nodes configurable.  Fixed on all as "main" in the template.
* Add an n8n node to generate an audit and store the output in gitlab along with the backups.
* Extend the workflow at the end to create a Gitlab release/tag whenever any backup files are actually updated or created.

## 🔗 Nodes Used

GitLab, n8n, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
