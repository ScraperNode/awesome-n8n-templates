# ⚒️ Coordinate autonomous UAV missions with multi-agent AI and Microsoft Dynamics

> ⚡ **76 views** · ⚒️ [Engineering](../)

## Description

## Quick Overview
This workflow simulates an autonomous ROV mission using multi-agent control logic, runs a closed-loop 6-DOF dynamics integration, and posts mission telemetry and performance results to an external HTTP endpoint.

## How it works
1. Starts when you manually trigger the workflow to begin the mission simulation.
2. Initializes mission timing, hydrodynamic parameters, waypoints, vehicle state, and agent configurations for sonar, navigation, fault monitoring, and communications.
3. Repeats a control-loop cycle where a simulated multibeam sonar generates obstacle detections, the mission planner advances waypoints with dwell timing, and the navigation logic computes thrust commands with PD control and artificial potential field avoidance.
4. Detects faults such as thruster degradation, overspeed, and actuator saturation, and switches to a safe mode that scales thrust commands down when needed.
5. Packages and logs telemetry with simulated packet loss and latency, then integrates the vehicle state forward using a 6-DOF Euler dynamics model with drag and thruster-efficiency effects.
6. Stops when the mission time reaches the configured end time or all waypoints are completed, then computes performance metrics such as distance traveled, average speed, completion rate, packet loss, and fault summary.
7. Sends the performance report, trajectory log, telemetry log, and fault details to a configurable HTTP endpoint and returns a final message indicating the trajectory visualization step.

## Setup
1. Set the target URL in the HTTP Request node to your mission log/telemetry ingestion endpoint.
2. If your endpoint requires authentication, add the appropriate HTTP credentials/headers in the HTTP Request node.
3. Adjust mission parameters in the initialization code (waypoints, T_END, hydrodynamic coefficients, fault thresholds, and communication loss/latency settings) to match your scenario.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
