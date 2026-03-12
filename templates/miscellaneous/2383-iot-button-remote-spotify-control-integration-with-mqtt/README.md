# 🔧 IOT button remote / Spotify control integration with MQTT

> ⚡ **4,073 views** · 🔧 [Miscellaneous](../)

## Description

## Overview
This template integrates an IOT multi-button switch (meant for controlling a dimmable light) with Spotify playback functions, via MQTT messages.  This isn't likely to work without some tinkering, but should be a good head start on receiving/routing IOT/MQTT messages and hooking up to a Spotify-like API.
## Requirements
* An IOT device capable of generating events that can be delivered as MQTT messages through an MQTT Broker
  * e.g. [Ikea Strybar remote](https://www.ikea.com/us/en/p/styrbar-remote-control-smart-white-80488370/)
* An MQTT Broker to which n8n can connect and consume messages
  * e.g. Zigbee2MQTT in HomeAssistant
* A Spotify **developer-account** (which provides access to API functions via OAuth2 authorization)
* A Spotify **user-account** (which provides access to Spotify streamed content, user settings, etc.)

## Setup
1. Create an MQTT Credential item in n8n and assign it to the MQTT Trigger node
1. Modify the MQTT trigger node to match the topic for your IOT device messages
1. Modify the switch/router nodes to map to the message text from your IOT button (e.g. arrow_left_click, brightness_up_click, etc.)
1. Create a Spotify **developer-account** (or use the login for a **user-account**)
1. Create an "App" in the **developer-account** to represent the n8n workflow
    * Chicken/Egg ALERT: The n8n Spotify Credentials dialog box will display the "OAuth Redirect URL" required to create the App in Spotify, but the n8n Credential item itself cannot be created until AFTER the App has been created.
1. Create a Spotify Credentials item in n8n
    * Open the Settings on the Spotify App to find the required Client ID and Client Secret information.
    * ALERT: Save this before proceeding to the Connect step.
1. Connect the n8n Spotify Credential item to the Spotify **user-account**
    * ALERT: Expect n8n to open a separate OAuth2 window on authorization.spotify.com here, which may require a login to the Spotify **user-account**
1. Open each of the HTTP and Spotify nodes, one by one, and re-assign to **your** Spotify Credential (try not to miss any).
    * (Then, probably, upvote this feature request: [https://community.n8n.io/t/select-credentials-via-expression/5150](https://community.n8n.io/t/select-credentials-via-expression/5150)
1. Modify the variable values in the Globals node to match your own environment.
    * target_spotify_playback_device_name - The name of a playback device available to the Spotify user-account
    * favorite_playlist_name - The name of a playlist to start when one of the button actions is indicated in the MQTT message.  Used in example "Custom Function 2" sequence.

## Notes
* You're on your own for getting the multi-button remote switch talking to MQTT, figuring out what the exact MQTT topic name is, and mapping the message parts to the workflow (actions, etc.).
* The next / previous actions are wired up to **not** transfer control to the target device. This alternative routing just illustrates a different behavior than the remaining actions/functions, which include activation of the target device when required.
* Some of the Spotify API interactions use the Spotify node in n8n, but many of the available Spotify API functions are limited or not implemented at all in the Spotify node.  So, in other cases, a regular HTTP node is used with the Spotify OAuth2 API credential instead.  By modifying one of the examples included in the template, it should be possible to call nearly anything the Spotify API has to offer.

## Spotify+n8n OAuth Mini-Tutorial
### Definitions
* The **developer-account** is the Spotify login for creating a **spotify-app** which will be associated with a **client id** and **client secret**.
* The **user-account** is the Spotify login that has permission to stream songs, set up playback devices, etc.
* ++A **spotify-login** allows access to a Spotify **user-account**, _or_ a Spotify **developer-account**, **_OR BOTH_**++
* The **spotify-app**, which has a **client id** and **client secret**, is an object created in the **developer-account**.
* The **app-implementation** (in this case, an ++n8n workflow++) uses the **spotify-app's** credentials (client id / client secret) to call Spotify API endpoints **on behalf of** a **user-account**.

### Using One Spotify Login as Both User and Developer
When an n8n _Spotify-node_ or _HTTP-node_ (i.e. an **app-implementation**) calls a Spotify API endpoint, the Credentials item **may** be using the **client id and client secret** from a **spotify-app**, which was created in a **developer-account** that is ++**one and the same _spotify-login_** as the **user-account**++.  However, it helps to remind yourself that from the Spotify API server's perspective, the **developer-account + spotify-app**, and the **user-account**, are ++**two independent entities**++.

### n8n Spotify-OAuth2-API Credential Authorization Process
The **2** layers/steps, in the process of authorizing an n8n Spotify-OAuth2-API credential to make API calls, are:
1. n8n must identify itself to Spotify as the **app-implementation** associated with the **developer-account/spotify-app** by sending the app's credentials (client id and client secret) to Spotify.
    * The Client ID and Client Secret are supplied in the n8n Spotify OAuth2 Credentials UI/dialog-box
2. Separately, n8n must obtain an authorization token from Spotify to represent the **permissions granted by the user** to execute actions (call API endpoints) **on behalf of** the user (i.e. access things that belong to the **user-account**).
    * This authorization for the **user-account** access is obtained when the "Connect" or "Reconnect" button is clicked in the n8n Spotify Credentials UI/dialog-box (which pops up a separate authorization UI/browser-window managed by Spotify).
    * The Authorization for a given **spotify-app** stays "registered" in the **user-account** until revoked.
      * See: https://support.spotify.com/us/article/spotify-on-other-apps/
      * Direct Link: https://www.spotify.com/account/apps/
    * More than one **user-account** _can_ be authorized for a given **spotify-app**. A particular n8n Spotify-OAuth2-API credential item appears to cache an authorization token for the **user-account** that was **_most recently_** authorized.
      * Up to 25 users can be allowed access to a **spotify-app** in Developer-Mode, but any **user-account** other than the one associated with the **developer-account** must be added by email address at **https://developer.spotify.com/dashboard/**_{{app-credential-id}}_**/users**
    * **ALERT:** IF the browser running the n8n UI is ALSO logged into a Spotify account, and the **spotify-app** is already authorized for that Spotify account, the "reconnect" button in the Spotify-OAuth2-API credential dialog may automatically grab a token for that logged in **user-account**, offering no opportunity to select a different **user-account**.
      * This can be managed somewhat by using "incognito" browser windows for n8n, Spotify, or both.

### References
* [n8n Spotify Credentials Docs](https://docs.n8n.io/integrations/builtin/credentials/spotify/)
* [Spotify Authorization Docs](https://developer.spotify.com/documentation/web-api/concepts/authorization)

## 🔗 Nodes Used

HTTP Request, Spotify, MQTT Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
