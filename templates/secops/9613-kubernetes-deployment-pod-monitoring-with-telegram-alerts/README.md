# 🔒 Kubernetes deployment & pod monitoring with Telegram alerts

> ⚡ **346 views** · 🔒 [SecOps & Security Automation](../)

## Description

## SETUP INSTRUCTIONS

### 1. Configure Kubeconfig
- Open the **"Kubeconfig Setup"** node
- Paste your entire kubeconfig file content into the `kubeconfigContent` variable
- Set your target namespace in the `namespace` variable (default: 'production')

**Example kubeconfig format:**
```yaml
apiVersion: v1
kind: Config
clusters:
- cluster:
    certificate-authority-data: LS0tLS1CRUd...
    server: https://your-cluster.example.com:6443
  name: your-cluster
contexts:
- context:
    cluster: your-cluster
    user: your-user
  name: your-context
current-context: your-context
users:
- name: your-user
  user:
    token: eyJhbGciOiJSUzI1...
```

### 2. Telegram Configuration
- Create a Telegram bot via [@BotFather](https://t.me/BotFather)
- Get your bot token and add it as a credential in n8n (Telegram API)
- Find your chat ID:
  - Message your bot
  - Visit: `https://api.telegram.org/bot&lt;YourBotToken&gt;/getUpdates`
  - Look for `"chat":{"id":...}`
- Open the **"Send Telegram Alert"** node
- Replace `YOUR_TELEGRAM_CHAT_ID` with your actual chat ID
- Select your Telegram API credential

### 3. Schedule Configuration
- Open the **"Schedule Trigger"** node
- Default: runs every 1 minute
- Adjust the interval based on your monitoring needs:
  - Every 5 minutes: Change `field` to `minutes` and set `minutesInterval` to `5`
  - Every hour: Change `field` to `hours` and set `hoursInterval` to `1`
  - Cron expression: Use custom cron schedule

### 4. kubectl Installation
- The workflow automatically downloads kubectl (v1.34.0) during execution
- No pre-installation required on the n8n host
- kubectl is downloaded and used temporarily for each execution

## HOW IT WORKS

### Workflow Steps

1. **Schedule Trigger**
   - Runs automatically based on configured interval
   - Initiates the monitoring cycle

2. **Kubeconfig Setup**
   - Loads the kubeconfig and namespace configuration
   - Passes credentials to kubectl commands

3. **Parallel Data Collection**
   - **Get Pods**: Fetches all pods from the specified namespace
   - **Get Deployments**: Fetches all deployments from the specified namespace
   - Both commands run in parallel for efficiency

4. **Process & Generate Report**
   - Parses pod and deployment data
   - Groups pods by their owner (Deployment, DaemonSet, StatefulSet, or Node)
   - Calculates readiness statistics for each workload
   - Detects alerts: workloads with 0 ready pods
   - Generates a comprehensive Markdown report including:
     - Deployments with replica counts and pod details
     - Other workloads (DaemonSets, StatefulSets, Static Pods)
     - Standalone pods (if any)
     - Pod-level details: status, node, restart count

5. **Has Alerts?**
   - Checks if any workloads have 0 ready pods
   - Routes to appropriate action

6. **Send Telegram Alert** (if alerts exist)
   - Sends formatted alert message to Telegram
   - Includes:
     - Namespace information
     - List of problematic workloads
     - Full status report

7. **Save Report**
   - Saves the Markdown report to a file
   - Filename format: `k8s-report-YYYY-MM-DD-HHmmss.md`
   - Always executes, regardless of alert status

### Security Features

- **Temporary kubectl**: Downloaded and used only during execution
- **Temporary kubeconfig**: Written to `/tmp/kubeconfig-&lt;random&gt;.yaml`
- **Automatic cleanup**: Kubeconfig file is deleted after each kubectl command
- **No persistent credentials**: Nothing stored on disk between executions

### Alert Logic

Alerts are triggered when any workload has **zero ready pods**:
- Deployments with `readyReplicas &lt; 1`
- DaemonSets with `numberReady &lt; 1`
- StatefulSets with `readyReplicas &lt; 1`
- Static Pods (Node-owned) with no ready instances

### Report Sections

1. **Deployments**: All Deployment-managed pods (via ReplicaSets)
2. **Other Workloads**: DaemonSets, StatefulSets, and Static Pods (kube-system components)
3. **Standalone Pods**: Pods without recognized owners (rare)
4. **Alerts**: Summary of workloads requiring attention

## KEY FEATURES

- **Automatic kubectl management** - No pre-installation needed
- **Multi-workload support** - Deployments, DaemonSets, StatefulSets, Static Pods
- **Smart pod grouping** - Uses Kubernetes ownerReferences
- **Conditional alerting** - Only notifies when issues detected
- **Detailed reporting** - Pod-level status, node placement, restart counts
- **Secure credential handling** - Temporary files, automatic cleanup
- **Markdown format** - Easy to read and store

## TROUBLESHOOTING

**Issue: "Cannot read properties of undefined"**
- Ensure both "Get Pods" and "Get Deployments" nodes execute successfully
- Check that kubectl can access your cluster with the provided kubeconfig

**Issue: No alerts when there should be**
- Verify the namespace contains deployments or workloads
- Check that pods are actually not ready (use `kubectl get pods -n &lt;namespace&gt;`)

**Issue: Telegram message not sent**
- Verify Telegram API credential is configured correctly
- Confirm chat ID is correct and the bot has permission to message you
- Check that the bot was started (send `/start` to the bot)

**Issue: kubectl download fails**
- Check internet connectivity from n8n host
- Verify access to dl.k8s.io domain
- Consider pre-installing kubectl on the host and removing the download commands

## CUSTOMIZATION

### Change Alert Threshold
Edit the `Process & Generate Report` node to change when alerts trigger:
```javascript
// Change from "&lt; 1" to your desired threshold
if (readyReplicas &lt; 2) {  // Alert if less than 2 ready pods
  alerts.push({...});
}
```

### Monitor Multiple Namespaces
- Duplicate the workflow for each namespace
- Or modify "Kubeconfig Setup" to loop through multiple namespaces

### Custom Report Format
Edit the markdown generation in `Process & Generate Report` node to customize:
- Section order
- Information displayed
- Formatting style

### Additional Notification Channels
Add nodes after "Has Alerts?" to send notifications via:
- Email (SMTP node)
- Slack (Slack node)
- Discord (Discord node)
- Webhook (HTTP Request node)

## 🔗 Nodes Used

Write Binary File, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
