# 💬 Automatic AI reply when mentioned in a Liveblocks comment

> ⚡ **18 views** · 💬 [Support Chatbots](../)

## Description

## Automatic AI reply when mentioned in a Liveblocks comment
 
This example uses [Liveblocks Comments](https://liveblocks.io/comments), collaborative commenting components for React. When an AI assistant is mentioned in a thread  (e.g. "@AI Assistant"), it will automatically leave a response.

Using [webhooks](https://liveblocks.io/docs/platform/webhooks), this workflow is triggered when a comment is created in a thread. If the agent's ID (`"__AI_AGENT"`) was mentioned, an AI agent is given the entire thread context, and asked to create a response. This response is then added, and users will see it appear in their apps in real time.

### Set up
This workflow requires a Comments app installed and webhooks set up in the Liveblocks dashboard. You can try it with a demo application:

1. Download the [Next.js comments example](https://liveblocks.io/examples/comments/nextjs-comments), and run it with a secret key.
2. Find `database.ts` inside the example and uncomment the AI assistant user.
3. Insert the secret key from the project into n8n nodes: "Get a comment", "Get a thread", "Create a comment".
4. Go to the [Liveblocks dashboard](https://liveblocks.io/dashboard), open your project and go to "Webhooks". Create a new webhook in your project using a placeholder URL, and selecting "commentCreated" events.
5. Copy your webhook secret from this page and paste it into the "Liveblocks Trigger" node.
6. Expose the webhook URL from the trigger, for example with `localtunnel` or `ngrok`. Copy the production URL from the "Liveblocks Trigger" and replace `localhost:5678` with the new URL.
6. Your workflow is now set up! Tag @AI Assistant in the application to trigger it.


#### Localtunnel
The easiest way to expose your webhook URL:
```
npx localtunnel --port 5678 --subdomain your-name-here
```
This creates a URL like:
```
https://honest-months-fix.loca.lt
```
The URL you need for the dashboard looks like this:
```
https://honest-months-fix.loca.lt/webhook/9cc66974-aaaf-4720-b557-1267105ca78b/webhook
```

## 🔗 Nodes Used

AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
