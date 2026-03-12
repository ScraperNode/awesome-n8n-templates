# 📋 Sync Fizzy cards with Basecamp todos in real time

> ⚡ **28 views** · 📋 [Project Management](../)

## Description

## Description

Automatically sync Fizzy cards to Basecamp todos in real-time. When cards are created, assigned, completed, or reopened in Fizzy, the changes sync instantly to your Basecamp project. Card tags determine which todolist items go to, and team members are matched by email.

### What you'll need

- n8n instance (self-hosted or cloud)
- Basecamp account with project access
- Fizzy account with board management permissions
- Matching project/board names in both platforms

### How it works

1. **Receive webhook** - Fizzy sends card events to n8n
2. **Match projects** - Finds corresponding Basecamp project by name
3. **Sync todolists** - Maps Fizzy tags to Basecamp todolists (auto-creates if needed)
4. **Update todos** - Creates, updates, or completes todos based on card actions
5. **Sync assignees** - Matches team members by email address

### Setup steps

**1. Install Basecamp community node**
```
npm install n8n-nodes-basecamp
```
Or install via n8n Community Nodes: https://www.npmjs.com/package/n8n-nodes-basecamp

**2. Configure Basecamp credentials**
- Create integration at: https://launchpad.37signals.com/integrations
- Copy Client ID and Client Secret
- Add credentials in n8n (Settings &gt; Credentials &gt; Basecamp OAuth2)

**3. Set your account ID**
- Find your Basecamp Account ID in your Basecamp URL
- Update the "Set Basecamp account ID" node in the workflow

**4. Prepare your Basecamp project**
- Create a project (name must match your Fizzy board name exactly)
- Enable the Todos tool in project settings
- Optionally create todolists matching your Fizzy tag names

**5. Configure Fizzy webhook**
- Open your Fizzy board
- Click the globe icon for webhook settings
- Paste the webhook URL from the "Receive Fizzy webhook" node
- Enable all event types
- Note: Each board requires its own webhook

### Supported Fizzy events

- `card_published` → Creates new todo
- `card_assigned` / `card_unassigned` → Updates todo assignees
- `card_closed` → Marks todo complete
- `card_reopened` / `card_postponed` → Marks todo incomplete

### Features

✅ Real-time bidirectional sync
✅ Automatic todolist creation from tags
✅ Assignee matching by email
✅ Maintains Fizzy card ID for tracking
✅ Handles both active and completed todos
✅ Pagination support for large todolists

### Tips

- Use consistent naming between Fizzy boards and Basecamp projects
- Ensure team members use the same email in both platforms
- The first Fizzy tag determines the Basecamp todolist
- The workflow preserves a Fizzy ID in todo descriptions for tracking

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
