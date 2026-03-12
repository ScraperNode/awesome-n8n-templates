# 🔒 Detect and isolate ransomware with Claude (Anthropic), EDR, SIEM and Slack

> ⚡ **22 views** · 🔒 [SecOps & Security Automation](../)

## Description

This workflow provides real-time detection of ransomware encryption patterns using Claude AI, with automated system isolation and incident response.

### How it works

1. **File System Monitoring** - Continuously monitors file operations (create, modify, rename, delete) across critical directories
2. **Behavior Pattern Collection** - Aggregates file operation metrics in 30-second windows (entropy changes, extension changes, I/O velocity)
3. **AI Threat Analysis** - Claude AI analyzes patterns against known ransomware behaviors (mass encryption, shadow copy deletion, etc.)
4. **Threat Scoring & Classification** - Assigns threat scores (0-100) and classifies attack types (crypto-locker, wiper, etc.)
5. **Auto-Isolation Decision** - Determines if immediate network isolation is required based on confidence thresholds
6. **System Quarantine** - Executes automated isolation: disable network adapters, block shares, kill suspicious processes
7. **Forensic Snapshot** - Captures system state, process tree, network connections, and file operation logs
8. **Incident Response Alert** - Notifies SOC team with detailed threat intelligence and recommended actions
9. **Evidence Preservation** - Stores forensic data and AI analysis in SIEM for investigation

### Detection Capabilities

- **Entropy Analysis**: Detects high-entropy file creation (encrypted data signature)
- **Extension Scanning**: Identifies suspicious extension changes (.docx → .locked, .encrypted, .crypted)
- **I/O Velocity**: Flags abnormal file modification rates (&gt;100 files/min)
- **Shadow Copy Deletion**: Detects vssadmin.exe / wmic.exe shadow copy deletion attempts
- **Ransom Note Detection**: Identifies README.txt, HOW_TO_DECRYPT.html creation patterns
- **Lateral Movement**: Monitors SMB/RDP connection spikes from infected hosts
- **Process Behavior**: Analyzes suspicious parent-child process relationships

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Anthropic API** - Claude AI for threat analysis
   - **Windows Event Collector / Sysmon** - File system event source
   - **EDR API** (CrowdStrike/Defender/SentinelOne) - For isolation commands
   - **SIEM API** (Splunk/Elastic) - For log forwarding
   - **Slack/PagerDuty** - For SOC alerts
3. Install file system watcher on monitored endpoints (sysmon, osquery, or auditd)
4. Configure isolation thresholds (default: threat_score &gt;= 75)
5. Test isolation procedure in sandbox environment
6. Activate workflow

### Sample Detection Event
```json
{
  "hostname": "DESKTOP-WKS-042",
  "username": "jdoe",
  "timestamp": "2025-02-25T14:23:17Z",
  "detection_window_seconds": 30,
  "file_operations": {
    "files_modified": 247,
    "files_renamed": 189,
    "files_created": 58,
    "files_deleted": 31,
    "avg_entropy_increase": 7.89,
    "suspicious_extensions": [".locked", ".crypted", ".encrypted"],
    "ransom_notes_created": ["README_DECRYPT.txt", "HOW_TO_RECOVER.html"]
  },
  "process_activity": {
    "high_io_processes": [
      {"name": "explorer.exe", "pid": 4782, "io_rate": "523 ops/sec"},
      {"name": "svchost.exe", "pid": 2194, "io_rate": "412 ops/sec"}
    ],
    "suspicious_commands": [
      "vssadmin.exe delete shadows /all /quiet",
      "wmic shadowcopy delete",
      "bcdedit /set {default} recoveryenabled no"
    ]
  },
  "network_activity": {
    "c2_connections": [
      {"ip": "185.220.101.32", "port": 443, "country": "RU"},
      {"ip": "194.165.16.85", "port": 8443, "country": "NL"}
    ],
    "lateral_movement": [
      {"target": "FILE-SERVER-01", "protocol": "SMB", "status": "success"},
      {"target": "DB-SERVER-03", "protocol": "RDP", "status": "failed"}
    ]
  }
}
```

### Threat Intelligence Sources
- MITRE ATT&CK Framework (T1486 - Data Encrypted for Impact, T1490 - Inhibit System Recovery)
- Known ransomware families: LockBit, BlackCat/ALPHV, Royal, Play, Cl0p
- File extension IOCs from ransomware tracking feeds
- Behavioral signatures from recent campaigns

### Compliance & Forensics
- **Chain of Custody**: All isolation actions logged with timestamps and justifications
- **NIST CSF Alignment**: DE.CM-7 (Monitoring for unauthorized activity), RS.MI-3 (Incident containment)
- **Evidence Integrity**: Forensic snapshots include cryptographic hashes for court admissibility
- **Post-Incident Review**: AI analysis archived for threat hunting and pattern improvement

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Slack, Webhook, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
