# ⚙️ Automated Kubernetes testing with Robot Framework, ArgoCD & with KinD lifecycle

> ⚡ **298 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Overview

This n8n workflow provides **automated CI/CD testing** for Kubernetes applications using **KinD (Kubernetes in Docker)**. It creates temporary infrastructure, runs tests, and cleans up everything automatically.

---

## Three-Phase Lifecycle

### INIT Phase - Infrastructure Setup
- Installs dependencies (sshpass, Docker, KinD)
- Creates KinD cluster
- Installs Helm and Nginx Ingress
- Installs HAProxy for port forwarding
- Deploys ArgoCD
- Applies ApplicationSet

### TEST Phase - Automated Testing
- Downloads Robot Framework test script from GitLab
- Installs Robot Framework and Browser library
- Executes automated browser tests
- Packages test results
- Sends results via Telegram

### DESTROY Phase - Complete Cleanup
- Removes HAProxy
- Deletes KinD cluster
- Uninstalls KinD
- Uninstalls Docker
- Sends completion notification

---

## Execution Modes

**Full Pipeline Mode** (`progress_only = false`)
&gt; Automatically progresses through all phases: INIT → TEST → DESTROY

**Single Phase Mode** (`progress_only = true`)
&gt; Executes only the specified phase and stops

---

## Prerequisites

### Local Environment (n8n Host)
- n8n instance **version 1.0 or higher**
- Community node `n8n-nodes-robotframework` installed
- Network access to target host and GitLab
- Minimum **4 GB RAM**, **20 GB disk space**

### Remote Target Host
- Linux server (Ubuntu, Debian, CentOS, Fedora, or Alpine)
- SSH access with **sudo privileges**
- Minimum **8 GB RAM** (16 GB recommended)
- **20 GB** free disk space
- Open ports: `22`, `80`, `60080`, `60443`, `56443`

### External Services
- **GitLab** account with OAuth2 application
- Repository with test files (`test.robot`, `config.yaml`, `demo-applicationSet.yaml`)
- **Telegram Bot** for notifications
- Telegram **Chat ID**

---

## Setup Instructions

### Step 1: Install Community Node

1. In n8n web interface, navigate to **Settings** → **Community Nodes**
2. Install `n8n-nodes-robotframework`
3. Restart n8n if prompted

### Step 2: Configure GitLab OAuth2

#### Create GitLab OAuth2 Application
1. Log in to GitLab
2. Navigate to **User Settings** → **Applications**
3. Create new application with redirect URI: `https://your-n8n-instance.com/rest/oauth2-credential/callback`
4. Grant scopes: `read_api`, `read_repository`, `read_user`
5. Copy **Application ID** and **Secret**

#### Configure in n8n
1. Create new **GitLab OAuth2 API** credential
2. Enter GitLab server URL, Client ID, and Secret
3. Connect and authorize

### Step 3: Prepare GitLab Repository

Create repository structure:

```
your-repo/
├── test.robot
├── config.yaml
├── demo-applicationSet.yaml
└── .gitlab-ci.yml
```

Upload your:
- Robot Framework test script
- KinD cluster configuration
- ArgoCD ApplicationSet manifest

### Step 4: Configure Telegram Bot

#### Create Bot
1. Open Telegram, search for **@BotFather**
2. Send `/newbot` command
3. Save the **API token**

#### Get Chat ID
**For personal chat:**
- Send message to your bot
- Visit: `https://api.telegram.org/bot&lt;YOUR_TOKEN&gt;/getUpdates`
- Copy the chat ID (positive number)

**For group chat:**
- Add bot to group
- Send message mentioning the bot
- Visit getUpdates endpoint
- Copy group chat ID (negative number)

#### Configure in n8n
1. Create **Telegram API** credential
2. Enter bot token
3. Save credential

### Step 5: Prepare Target Host

Verify SSH access:
- Test connection: `ssh -p &lt;port&gt; &lt;username&gt;@&lt;host_ip&gt;`
- Verify sudo: `sudo -v`

The workflow will automatically install dependencies.

### Step 6: Import and Configure Workflow

#### Import Workflow
1. Copy workflow JSON
2. In n8n, click **Workflows** → **Import from File/URL**
3. Import the JSON

#### Configure Parameters

Open **Set Parameters** node and update:

| Parameter | Description | Example |
|-----------|-------------|---------|
| `target_host` | IP address of remote host | `192.168.1.100` |
| `target_port` | SSH port | `22` |
| `target_user` | SSH username | `ubuntu` |
| `target_password` | SSH password | `your_password` |
| `progress` | Starting phase | `INIT`, `TEST`, or `DESTROY` |
| `progress_only` | Execution mode | `true` or `false` |
| `KIND_CONFIG` | Path to config.yaml | `config.yaml` |
| `ROBOT_SCRIPT` | Path to test.robot | `test.robot` |
| `ARGOCD_APPSET` | Path to ApplicationSet | `demo-applicationSet.yaml` |

&gt; **Security:** Use n8n credentials or environment variables instead of storing passwords in the workflow.

#### Configure GitLab Nodes

For each of the three GitLab nodes:
- Set **Owner** (username or organization)
- Set **Repository** name
- Set **File Path** (uses parameter from Set Parameters)
- Set **Reference** (branch: `main` or `master`)
- Select **Credentials** (GitLab OAuth2)

#### Configure Telegram Nodes

1. **Send ROBOT Script Export Pack** node:
   - Set **Chat ID**
   - Select **Credentials**

2. **Process Finish Report** node:
   - Update chat ID in command

### Step 7: Test and Execute

1. Test individual components first
2. Run full workflow
3. Monitor execution (30-60 minutes total)

---

## How to Use

### Execution Examples

#### Complete Testing Pipeline
- `progress = "INIT"`
- `progress_only = "false"`
- Flow: INIT → TEST → DESTROY

#### Setup Infrastructure Only
- `progress = "INIT"`
- `progress_only = "true"`
- Flow: INIT → Stop

#### Test Existing Infrastructure
- `progress = "TEST"`
- `progress_only = "false"`
- Flow: TEST → DESTROY

#### Cleanup Only
- `progress = "DESTROY"`
- Flow: DESTROY → Complete

### Trigger Methods

#### 1. Manual Execution
- Open workflow in n8n
- Set parameters
- Click **Execute Workflow**

#### 2. Scheduled Execution
- Open **Schedule Trigger** node
- Configure time (default: 1 AM daily)
- Ensure workflow is **Active**

#### 3. Webhook Trigger
- Configure webhook in GitLab repository
- Add webhook URL to GitLab CI

### Monitoring Execution

**In n8n Interface:**
- View progress in **Executions** tab
- Watch node-by-node execution
- Check output details

**Via Telegram:**
- Receive test results after TEST phase
- Receive completion notification after DESTROY phase

**Execution Timeline:**
| Phase | Duration |
|-------|----------|
| INIT | 15-25 minutes |
| TEST | 5-10 minutes |
| DESTROY | 5-10 minutes |

### Understanding Test Results

After TEST phase, receive `testing-export-pack.tar.gz` via Telegram containing:

- `log.html` - Detailed test execution log
- `report.html` - Test summary report
- `output.xml` - Machine-readable results
- `screenshots/` - Browser screenshots

**To view:**
1. Download `.tar.gz` from Telegram
2. Extract: `tar -xzf testing-export-pack.tar.gz`
3. Open `report.html` for summary
4. Open `log.html` for detailed steps

**Success indicators:**
- All tests marked **PASS**
- Screenshots show expected UI states
- No error messages in logs

**Failure indicators:**
- Tests marked **FAIL**
- Error messages in logs
- Unexpected UI states in screenshots

---

## Configuration Files

### test.robot

Robot Framework test script structure:
- Uses **Browser** library
- Connects to `http://autotest.innersite`
- Logs in with `autotest/autotest`
- Takes screenshots
- Runs in **headless Chromium**

### config.yaml

KinD cluster configuration:
- **1 control-plane node**
- **1 worker node**
- Port mappings: `60080` (HTTP), `60443` (HTTPS), `56443` (API)
- Kubernetes version: `v1.30.2`

### demo-applicationSet.yaml

ArgoCD Application manifest:
- Points to Git repository
- Automatic sync enabled
- Deploys to default namespace

### gitlab-ci.yml

Triggers n8n workflow on commits:
- Installs curl
- Sends POST request to webhook

---

## Troubleshooting

### SSH Permission Denied

**Symptoms:**
```
Error: Permission denied (publickey,password)
```

**Solutions:**
- Verify password is correct
- Check SSH authentication method
- Ensure user has sudo privileges
- Use SSH keys instead of passwords

### Docker Installation Fails

**Symptoms:**
```
Error: Package docker-ce is not available
```

**Solutions:**
- Check OS version compatibility
- Verify network connectivity
- Manually add Docker repository

### KinD Cluster Creation Timeout

**Symptoms:**
```
Error: Failed to create cluster: timed out
```

**Solutions:**
- Check available resources (RAM/CPU/disk)
- Verify Docker daemon status
- Pre-pull images
- Increase timeout

### ArgoCD Not Accessible

**Symptoms:**
```
Error: Failed to connect to autotest.innersite
```

**Solutions:**
- Check HAProxy status: `systemctl status haproxy`
- Verify `/etc/hosts` entry
- Check Ingress: `kubectl get ingress -n argocd`
- Test port forwarding: `curl http://127.0.0.1:60080`

### Robot Framework Tests Fail

**Symptoms:**
```
Error: Chrome failed to start
```

**Solutions:**
- Verify Chromium installation
- Check Browser library: `rfbrowser show-trace`
- Ensure correct `executablePath` in test.robot
- Install missing dependencies

### Telegram Notification Not Received

**Symptoms:**
- Workflow completes but no message

**Solutions:**
- Verify Chat ID
- Test Telegram API manually
- Check bot status
- Re-add bot to group

### Workflow Hangs

**Symptoms:**
- Node shows "Executing..." indefinitely

**Solutions:**
- Check n8n logs
- Test SSH connection manually
- Verify target host status
- Add timeouts to commands

---

## Best Practices

### Development Workflow

1. **Test locally first**
   - Run Robot Framework tests on local machine
   - Verify test script syntax

2. **Version control**
   - Keep all files in Git
   - Use branches for experiments
   - Tag stable versions

3. **Incremental changes**
   - Make small testable changes
   - Test each change separately

4. **Backup data**
   - Export workflow regularly
   - Save test results
   - Store credentials securely

### Production Deployment

1. **Separate environments**
   - Dev: Frequent testing
   - Staging: Pre-production validation
   - Production: Stable scheduled runs

2. **Monitoring**
   - Set up execution alerts
   - Monitor host resources
   - Track success/failure rates

3. **Disaster recovery**
   - Document cleanup procedures
   - Keep backup host ready
   - Test restoration process

4. **Security**
   - Use SSH keys
   - Rotate credentials quarterly
   - Implement network segmentation

### Maintenance Schedule

| Frequency | Tasks |
|-----------|-------|
| **Daily** | Review logs, check notifications |
| **Weekly** | Review failures, check disk space |
| **Monthly** | Update dependencies, test recovery |
| **Quarterly** | Rotate credentials, security audit |

---

## Advanced Topics

### Custom Configurations

**Multi-node clusters:**
- Add more worker nodes for production-like environments
- Configure resource limits
- Add custom port mappings

**Advanced testing:**
- Load testing with multiple iterations
- Integration testing for full deployment pipeline
- Chaos engineering with failure injection

### Integration with Other Tools

**Monitoring:**
- Prometheus for metrics collection
- Grafana for visualization

**Logging:**
- ELK stack for log aggregation
- Custom dashboards

**CI/CD Integration:**
- Jenkins pipelines
- GitHub Actions
- Custom webhooks

---

## Resource Requirements

### Minimum
| Component | CPU | RAM | Disk |
|-----------|-----|-----|------|
| n8n Host | 2 | 4 GB | 20 GB |
| Target Host | 4 | 8 GB | 20 GB |

### Recommended
| Component | CPU | RAM | Disk |
|-----------|-----|-----|------|
| n8n Host | 4 | 8 GB | 50 GB |
| Target Host | 8 | 16 GB | 50 GB |

---

## Useful Commands

### KinD
- List clusters: `kind get clusters`
- Get kubeconfig: `kind get kubeconfig --name automate-tst`
- Export logs: `kind export logs --name automate-tst`

### Docker
- List containers: `docker ps -a --filter "name=automate-tst"`
- Enter control plane: `docker exec -it automate-tst-control-plane bash`
- View logs: `docker logs automate-tst-control-plane`

### Kubernetes
- Get all resources: `kubectl get all -A`
- Describe pod: `kubectl describe pod -n argocd &lt;pod-name&gt;`
- View logs: `kubectl logs -n argocd &lt;pod-name&gt; --follow`
- Port forward: `kubectl port-forward -n argocd svc/argocd-server 8080:80`

### Robot Framework
- Run tests: `robot test.robot`
- Run specific test: `robot -t "Test Name" test.robot`
- Generate report: `robot --outputdir results test.robot`

---

## Additional Resources

### Official Documentation
- **n8n**: https://docs.n8n.io
- **KinD**: https://kind.sigs.k8s.io
- **ArgoCD**: https://argo-cd.readthedocs.io
- **Robot Framework**: https://robotframework.org
- **Browser Library**: https://marketsquare.github.io/robotframework-browser

### Community
- **n8n Community**: https://community.n8n.io
- **Kubernetes Slack**: https://kubernetes.slack.com
- **ArgoCD Slack**: https://argoproj.github.io/community/join-slack
- **Robot Framework Forum**: https://forum.robotframework.org

### Related Projects
- **k3s**: Lightweight Kubernetes distribution
- **minikube**: Local Kubernetes alternative
- **Flux CD**: Alternative GitOps tool
- **Playwright**: Alternative browser automation

## 🔗 Nodes Used

Webhook, Telegram, GitLab, Schedule Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
