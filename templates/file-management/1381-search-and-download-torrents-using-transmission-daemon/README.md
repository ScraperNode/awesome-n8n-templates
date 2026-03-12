# 📁 Search and download torrents using transmission-daemon

> ⚡ **3,157 views** · 📁 [File Management](../)

## Description

# Ok google download "movie name"

I develop this automation to improve my quality of life in handling torrents in my media-center.

## Goal

Automate the search operations of a movie based on its name and trigger a download using your transmission-daemon.

## Setup

### Prerequisite

- Transmission daemon up and running and its authentication method
- N8N configured self-hosted or with the possibility to add npm package better with docker-compose.yaml
- Telegram bot credential [optional]

### Configuration

Create a folder where your `docker-compose.yaml` belongs `n8n_dir` and proceed in installing the [node package](https://www.npmjs.com/package/torrent-search-api).

```bash
cd ~/n8n_dir
npm i torrent-search-api
```

Configuring your `docker-compose.yaml` file this way. You must include all the dependencies of `torrent-search-api`. This will let you run the new torrent search node presented in this workflow.

```
version: '3.3'
services:
    n8n:
        container_name: n8n
        ports:
            - '5678:5678'
        restart: always
        volumes:
            - '~/n8n_dir/.n8n:/home/node/.n8n'
            - '~/n8n_dir/node_modules/@tootallnate:/usr/local/lib/node_modules/@tootallnate'
            - '~/n8n_dir/node_modules/accepts:/usr/local/lib/node_modules/accepts'
            - '~/n8n_dir/node_modules/agent-base:/usr/local/lib/node_modules/agent-base'
            - '~/n8n_dir/node_modules/ajv:/usr/local/lib/node_modules/ajv'
            - '~/n8n_dir/node_modules/ansi-styles:/usr/local/lib/node_modules/ansi-styles'
            - '~/n8n_dir/node_modules/asn1:/usr/local/lib/node_modules/asn1'
            - '~/n8n_dir/node_modules/assert:/usr/local/lib/node_modules/assert'
            - '~/n8n_dir/node_modules/assert-plus:/usr/local/lib/node_modules/assert-plus'
            - '~/n8n_dir/node_modules/ast-types:/usr/local/lib/node_modules/ast-types'
            - '~/n8n_dir/node_modules/asynckit:/usr/local/lib/node_modules/asynckit'
            - '~/n8n_dir/node_modules/aws-sign2:/usr/local/lib/node_modules/aws-sign2'
            - '~/n8n_dir/node_modules/aws4:/usr/local/lib/node_modules/aws4'
            - '~/n8n_dir/node_modules/base64-js:/usr/local/lib/node_modules/base64-js'
            - '~/n8n_dir/node_modules/batch:/usr/local/lib/node_modules/batch'
            - '~/n8n_dir/node_modules/bcrypt-pbkdf:/usr/local/lib/node_modules/bcrypt-pbkdf'
            - '~/n8n_dir/node_modules/bluebird:/usr/local/lib/node_modules/bluebird'
            - '~/n8n_dir/node_modules/boolbase:/usr/local/lib/node_modules/boolbase'
            - '~/n8n_dir/node_modules/brotli:/usr/local/lib/node_modules/brotli'
            - '~/n8n_dir/node_modules/bytes:/usr/local/lib/node_modules/bytes'
            - '~/n8n_dir/node_modules/caseless:/usr/local/lib/node_modules/caseless'
            - '~/n8n_dir/node_modules/chalk:/usr/local/lib/node_modules/chalk'
            - '~/n8n_dir/node_modules/cheerio:/usr/local/lib/node_modules/cheerio'
            - '~/n8n_dir/node_modules/cloudscraper:/usr/local/lib/node_modules/cloudscraper'
            - '~/n8n_dir/node_modules/co:/usr/local/lib/node_modules/co'
            - '~/n8n_dir/node_modules/color-convert:/usr/local/lib/node_modules/color-convert'
            - '~/n8n_dir/node_modules/color-name:/usr/local/lib/node_modules/color-name'
            - '~/n8n_dir/node_modules/combined-stream:/usr/local/lib/node_modules/combined-stream'
            - '~/n8n_dir/node_modules/component-emitter:/usr/local/lib/node_modules/component-emitter'
            - '~/n8n_dir/node_modules/content-disposition:/usr/local/lib/node_modules/content-disposition'
            - '~/n8n_dir/node_modules/content-type:/usr/local/lib/node_modules/content-type'
            - '~/n8n_dir/node_modules/cookiejar:/usr/local/lib/node_modules/cookiejar'
            - '~/n8n_dir/node_modules/core-util-is:/usr/local/lib/node_modules/core-util-is'
            - '~/n8n_dir/node_modules/css-select:/usr/local/lib/node_modules/css-select'
            - '~/n8n_dir/node_modules/css-what:/usr/local/lib/node_modules/css-what'
            - '~/n8n_dir/node_modules/dashdash:/usr/local/lib/node_modules/dashdash'
            - '~/n8n_dir/node_modules/data-uri-to-buffer:/usr/local/lib/node_modules/data-uri-to-buffer'
            - '~/n8n_dir/node_modules/debug:/usr/local/lib/node_modules/debug'
            - '~/n8n_dir/node_modules/deep-is:/usr/local/lib/node_modules/deep-is'
            - '~/n8n_dir/node_modules/degenerator:/usr/local/lib/node_modules/degenerator'
            - '~/n8n_dir/node_modules/delayed-stream:/usr/local/lib/node_modules/delayed-stream'
            - '~/n8n_dir/node_modules/delegates:/usr/local/lib/node_modules/delegates'
            - '~/n8n_dir/node_modules/depd:/usr/local/lib/node_modules/depd'
            - '~/n8n_dir/node_modules/destroy:/usr/local/lib/node_modules/destroy'
            - '~/n8n_dir/node_modules/dom-serializer:/usr/local/lib/node_modules/dom-serializer'
            - '~/n8n_dir/node_modules/domelementtype:/usr/local/lib/node_modules/domelementtype'
            - '~/n8n_dir/node_modules/domhandler:/usr/local/lib/node_modules/domhandler'
            - '~/n8n_dir/node_modules/domutils:/usr/local/lib/node_modules/domutils'
            - '~/n8n_dir/node_modules/ecc-jsbn:/usr/local/lib/node_modules/ecc-jsbn'
            - '~/n8n_dir/node_modules/ee-first:/usr/local/lib/node_modules/ee-first'
            - '~/n8n_dir/node_modules/emitter-component:/usr/local/lib/node_modules/emitter-component'
            - '~/n8n_dir/node_modules/enqueue:/usr/local/lib/node_modules/enqueue'
            - '~/n8n_dir/node_modules/enstore:/usr/local/lib/node_modules/enstore'
            - '~/n8n_dir/node_modules/entities:/usr/local/lib/node_modules/entities'
            - '~/n8n_dir/node_modules/error-inject:/usr/local/lib/node_modules/error-inject'
            - '~/n8n_dir/node_modules/escape-html:/usr/local/lib/node_modules/escape-html'
            - '~/n8n_dir/node_modules/escape-string-regexp:/usr/local/lib/node_modules/escape-string-regexp'
            - '~/n8n_dir/node_modules/escodegen:/usr/local/lib/node_modules/escodegen'
            - '~/n8n_dir/node_modules/esprima:/usr/local/lib/node_modules/esprima'
            - '~/n8n_dir/node_modules/estraverse:/usr/local/lib/node_modules/estraverse'
            - '~/n8n_dir/node_modules/esutils:/usr/local/lib/node_modules/esutils'
            - '~/n8n_dir/node_modules/extend:/usr/local/lib/node_modules/extend'
            - '~/n8n_dir/node_modules/extsprintf:/usr/local/lib/node_modules/extsprintf'
            - '~/n8n_dir/node_modules/fast-deep-equal:/usr/local/lib/node_modules/fast-deep-equal'
            - '~/n8n_dir/node_modules/fast-json-stable-stringify:/usr/local/lib/node_modules/fast-json-stable-stringify'
            - '~/n8n_dir/node_modules/fast-levenshtein:/usr/local/lib/node_modules/fast-levenshtein'
            - '~/n8n_dir/node_modules/file-uri-to-path:/usr/local/lib/node_modules/file-uri-to-path'
            - '~/n8n_dir/node_modules/forever-agent:/usr/local/lib/node_modules/forever-agent'
            - '~/n8n_dir/node_modules/form-data:/usr/local/lib/node_modules/form-data'
            - '~/n8n_dir/node_modules/format-parser:/usr/local/lib/node_modules/format-parser'
            - '~/n8n_dir/node_modules/formidable:/usr/local/lib/node_modules/formidable'
            - '~/n8n_dir/node_modules/fs-extra:/usr/local/lib/node_modules/fs-extra'
            - '~/n8n_dir/node_modules/ftp:/usr/local/lib/node_modules/ftp'
            - '~/n8n_dir/node_modules/get-uri:/usr/local/lib/node_modules/get-uri'
            - '~/n8n_dir/node_modules/getpass:/usr/local/lib/node_modules/getpass'
            - '~/n8n_dir/node_modules/graceful-fs:/usr/local/lib/node_modules/graceful-fs'
            - '~/n8n_dir/node_modules/har-schema:/usr/local/lib/node_modules/har-schema'
            - '~/n8n_dir/node_modules/har-validator:/usr/local/lib/node_modules/har-validator'
            - '~/n8n_dir/node_modules/has-flag:/usr/local/lib/node_modules/has-flag'
            - '~/n8n_dir/node_modules/htmlparser2:/usr/local/lib/node_modules/htmlparser2'
            - '~/n8n_dir/node_modules/http-context:/usr/local/lib/node_modules/http-context'
            - '~/n8n_dir/node_modules/http-errors:/usr/local/lib/node_modules/http-errors'
            - '~/n8n_dir/node_modules/http-incoming:/usr/local/lib/node_modules/http-incoming'
            - '~/n8n_dir/node_modules/http-outgoing:/usr/local/lib/node_modules/http-outgoing'
            - '~/n8n_dir/node_modules/http-proxy-agent:/usr/local/lib/node_modules/http-proxy-agent'
            - '~/n8n_dir/node_modules/http-signature:/usr/local/lib/node_modules/http-signature'
            - '~/n8n_dir/node_modules/https-proxy-agent:/usr/local/lib/node_modules/https-proxy-agent'
            - '~/n8n_dir/node_modules/iconv-lite:/usr/local/lib/node_modules/iconv-lite'
            - '~/n8n_dir/node_modules/inherits:/usr/local/lib/node_modules/inherits'
            - '~/n8n_dir/node_modules/ip:/usr/local/lib/node_modules/ip'
            - '~/n8n_dir/node_modules/is-browser:/usr/local/lib/node_modules/is-browser'
            - '~/n8n_dir/node_modules/is-typedarray:/usr/local/lib/node_modules/is-typedarray'
            - '~/n8n_dir/node_modules/is-url:/usr/local/lib/node_modules/is-url'
            - '~/n8n_dir/node_modules/isarray:/usr/local/lib/node_modules/isarray'
            - '~/n8n_dir/node_modules/isobject:/usr/local/lib/node_modules/isobject'
            - '~/n8n_dir/node_modules/isstream:/usr/local/lib/node_modules/isstream'
            - '~/n8n_dir/node_modules/jsbn:/usr/local/lib/node_modules/jsbn'
            - '~/n8n_dir/node_modules/json-schema:/usr/local/lib/node_modules/json-schema'
            - '~/n8n_dir/node_modules/json-schema-traverse:/usr/local/lib/node_modules/json-schema-traverse'
            - '~/n8n_dir/node_modules/json-stringify-safe:/usr/local/lib/node_modules/json-stringify-safe'
            - '~/n8n_dir/node_modules/jsonfile:/usr/local/lib/node_modules/jsonfile'
            - '~/n8n_dir/node_modules/jsprim:/usr/local/lib/node_modules/jsprim'
            - '~/n8n_dir/node_modules/koa-is-json:/usr/local/lib/node_modules/koa-is-json'
            - '~/n8n_dir/node_modules/levn:/usr/local/lib/node_modules/levn'
            - '~/n8n_dir/node_modules/lodash:/usr/local/lib/node_modules/lodash'
            - '~/n8n_dir/node_modules/lodash.assignin:/usr/local/lib/node_modules/lodash.assignin'
            - '~/n8n_dir/node_modules/lodash.bind:/usr/local/lib/node_modules/lodash.bind'
            - '~/n8n_dir/node_modules/lodash.defaults:/usr/local/lib/node_modules/lodash.defaults'
            - '~/n8n_dir/node_modules/lodash.filter:/usr/local/lib/node_modules/lodash.filter'
            - '~/n8n_dir/node_modules/lodash.flatten:/usr/local/lib/node_modules/lodash.flatten'
            - '~/n8n_dir/node_modules/lodash.foreach:/usr/local/lib/node_modules/lodash.foreach'
            - '~/n8n_dir/node_modules/lodash.map:/usr/local/lib/node_modules/lodash.map'
            - '~/n8n_dir/node_modules/lodash.merge:/usr/local/lib/node_modules/lodash.merge'
            - '~/n8n_dir/node_modules/lodash.pick:/usr/local/lib/node_modules/lodash.pick'
            - '~/n8n_dir/node_modules/lodash.reduce:/usr/local/lib/node_modules/lodash.reduce'
            - '~/n8n_dir/node_modules/lodash.reject:/usr/local/lib/node_modules/lodash.reject'
            - '~/n8n_dir/node_modules/lodash.some:/usr/local/lib/node_modules/lodash.some'
            - '~/n8n_dir/node_modules/lru-cache:/usr/local/lib/node_modules/lru-cache'
            - '~/n8n_dir/node_modules/media-typer:/usr/local/lib/node_modules/media-typer'
            - '~/n8n_dir/node_modules/methods:/usr/local/lib/node_modules/methods'
            - '~/n8n_dir/node_modules/mime:/usr/local/lib/node_modules/mime'
            - '~/n8n_dir/node_modules/mime-db:/usr/local/lib/node_modules/mime-db'
            - '~/n8n_dir/node_modules/mime-types:/usr/local/lib/node_modules/mime-types'
            - '~/n8n_dir/node_modules/monotonic-timestamp:/usr/local/lib/node_modules/monotonic-timestamp'
            - '~/n8n_dir/node_modules/ms:/usr/local/lib/node_modules/ms'
            - '~/n8n_dir/node_modules/negotiator:/usr/local/lib/node_modules/negotiator'
            - '~/n8n_dir/node_modules/netmask:/usr/local/lib/node_modules/netmask'
            - '~/n8n_dir/node_modules/nth-check:/usr/local/lib/node_modules/nth-check'
            - '~/n8n_dir/node_modules/oauth-sign:/usr/local/lib/node_modules/oauth-sign'
            - '~/n8n_dir/node_modules/object-assign:/usr/local/lib/node_modules/object-assign'
            - '~/n8n_dir/node_modules/on-finished:/usr/local/lib/node_modules/on-finished'
            - '~/n8n_dir/node_modules/optionator:/usr/local/lib/node_modules/optionator'
            - '~/n8n_dir/node_modules/pac-proxy-agent:/usr/local/lib/node_modules/pac-proxy-agent'
            - '~/n8n_dir/node_modules/pac-resolver:/usr/local/lib/node_modules/pac-resolver'
            - '~/n8n_dir/node_modules/parseurl:/usr/local/lib/node_modules/parseurl'
            - '~/n8n_dir/node_modules/performance-now:/usr/local/lib/node_modules/performance-now'
            - '~/n8n_dir/node_modules/prelude-ls:/usr/local/lib/node_modules/prelude-ls'
            - '~/n8n_dir/node_modules/process-nextick-args:/usr/local/lib/node_modules/process-nextick-args'
            - '~/n8n_dir/node_modules/promise-polyfill:/usr/local/lib/node_modules/promise-polyfill'
            - '~/n8n_dir/node_modules/proxy-agent:/usr/local/lib/node_modules/proxy-agent'
            - '~/n8n_dir/node_modules/proxy-from-env:/usr/local/lib/node_modules/proxy-from-env'
            - '~/n8n_dir/node_modules/psl:/usr/local/lib/node_modules/psl'
            - '~/n8n_dir/node_modules/punycode:/usr/local/lib/node_modules/punycode'
            - '~/n8n_dir/node_modules/qs:/usr/local/lib/node_modules/qs'
            - '~/n8n_dir/node_modules/querystring:/usr/local/lib/node_modules/querystring'
            - '~/n8n_dir/node_modules/raw-body:/usr/local/lib/node_modules/raw-body'
            - '~/n8n_dir/node_modules/readable-stream:/usr/local/lib/node_modules/readable-stream'
            - '~/n8n_dir/node_modules/request:/usr/local/lib/node_modules/request'
            - '~/n8n_dir/node_modules/request-promise:/usr/local/lib/node_modules/request-promise'
            - '~/n8n_dir/node_modules/request-promise-core:/usr/local/lib/node_modules/request-promise-core'
            - '~/n8n_dir/node_modules/request-x-ray:/usr/local/lib/node_modules/request-x-ray'
            - '~/n8n_dir/node_modules/safe-buffer:/usr/local/lib/node_modules/safe-buffer'
            - '~/n8n_dir/node_modules/safer-buffer:/usr/local/lib/node_modules/safer-buffer'
            - '~/n8n_dir/node_modules/selectn:/usr/local/lib/node_modules/selectn'
            - '~/n8n_dir/node_modules/setprototypeof:/usr/local/lib/node_modules/setprototypeof'
            - '~/n8n_dir/node_modules/sliced:/usr/local/lib/node_modules/sliced'
            - '~/n8n_dir/node_modules/smart-buffer:/usr/local/lib/node_modules/smart-buffer'
            - '~/n8n_dir/node_modules/socks:/usr/local/lib/node_modules/socks'
            - '~/n8n_dir/node_modules/socks-proxy-agent:/usr/local/lib/node_modules/socks-proxy-agent'
            - '~/n8n_dir/node_modules/source-map:/usr/local/lib/node_modules/source-map'
            - '~/n8n_dir/node_modules/sshpk:/usr/local/lib/node_modules/sshpk'
            - '~/n8n_dir/node_modules/statuses:/usr/local/lib/node_modules/statuses'
            - '~/n8n_dir/node_modules/stealthy-require:/usr/local/lib/node_modules/stealthy-require'
            - '~/n8n_dir/node_modules/stream-to-string:/usr/local/lib/node_modules/stream-to-string'
            - '~/n8n_dir/node_modules/string-format:/usr/local/lib/node_modules/string-format'
            - '~/n8n_dir/node_modules/string_decoder:/usr/local/lib/node_modules/string_decoder'
            - '~/n8n_dir/node_modules/superagent:/usr/local/lib/node_modules/superagent'
            - '~/n8n_dir/node_modules/superagent-proxy:/usr/local/lib/node_modules/superagent-proxy'
            - '~/n8n_dir/node_modules/supports-color:/usr/local/lib/node_modules/supports-color'
            - '~/n8n_dir/node_modules/toidentifier:/usr/local/lib/node_modules/toidentifier'
            - '~/n8n_dir/node_modules/torrent-search-api:/usr/local/lib/node_modules/torrent-search-api'
            - '~/n8n_dir/node_modules/tough-cookie:/usr/local/lib/node_modules/tough-cookie'
            - '~/n8n_dir/node_modules/tslib:/usr/local/lib/node_modules/tslib'
            - '~/n8n_dir/node_modules/tunnel-agent:/usr/local/lib/node_modules/tunnel-agent'
            - '~/n8n_dir/node_modules/tweetnacl:/usr/local/lib/node_modules/tweetnacl'
            - '~/n8n_dir/node_modules/type-check:/usr/local/lib/node_modules/type-check'
            - '~/n8n_dir/node_modules/type-is:/usr/local/lib/node_modules/type-is'
            - '~/n8n_dir/node_modules/universalify:/usr/local/lib/node_modules/universalify'
            - '~/n8n_dir/node_modules/unpipe:/usr/local/lib/node_modules/unpipe'
            - '~/n8n_dir/node_modules/uri-js:/usr/local/lib/node_modules/uri-js'
            - '~/n8n_dir/node_modules/util:/usr/local/lib/node_modules/util'
            - '~/n8n_dir/node_modules/util-deprecate:/usr/local/lib/node_modules/util-deprecate'
            - '~/n8n_dir/node_modules/uuid:/usr/local/lib/node_modules/uuid'
            - '~/n8n_dir/node_modules/vary:/usr/local/lib/node_modules/vary'
            - '~/n8n_dir/node_modules/verror:/usr/local/lib/node_modules/verror'
            - '~/n8n_dir/node_modules/word-wrap:/usr/local/lib/node_modules/word-wrap'
            - '~/n8n_dir/node_modules/wrap-fn:/usr/local/lib/node_modules/wrap-fn'
            - '~/n8n_dir/node_modules/x-ray:/usr/local/lib/node_modules/x-ray'
            - '~/n8n_dir/node_modules/x-ray-crawler:/usr/local/lib/node_modules/x-ray-crawler'
            - '~/n8n_dir/node_modules/x-ray-parse:/usr/local/lib/node_modules/x-ray-parse'
            - '~/n8n_dir/node_modules/x-ray-scraper:/usr/local/lib/node_modules/x-ray-scraper'
            - '~/n8n_dir/node_modules/xregexp:/usr/local/lib/node_modules/xregexp'
            - '~/n8n_dir/node_modules/yallist:/usr/local/lib/node_modules/yallist'
            - '~/n8n_dir/node_modules/yieldly:/usr/local/lib/node_modules/yieldly'
        image: 'n8nio/n8n:latest-rpi'
        environment:
            - N8N_BASIC_AUTH_ACTIVE=true
            - N8N_BASIC_AUTH_USER=username
            - N8N_BASIC_AUTH_PASSWORD=your_secret_n8n_password
            - EXECUTIONS_DATA_PRUNE=true
            - EXECUTIONS_DATA_MAX_AGE=120
            - EXECUTIONS_TIMEOUT=300
            - EXECUTIONS_TIMEOUT_MAX=500
            - GENERIC_TIMEZONE=Europe/Berlin
            - NODE_FUNCTION_ALLOW_EXTERNAL=torrent-search-api
```

Once configured this way run n8n and create a new workflow coping the one proposed.

## Configure workflow

### Transmission

In order to send command to transmission you must validate the Basic Auth. To do so: open the `Start download` node and edit the Credentials. 

![image.png](fileId:581)

Perform the same operation choosing the new credentials also in node `Start download new token`.
In this automation we call transmission twice due to a security protocol in transmission system that prevents single click commands to be triggered, performing the request twice bypasses this security mechanism. [https://en.wikipedia.org/wiki/Cross-site_request_forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery)
We use the `X-Transmission-Session-Id` provided by the first request to authenticate the second request.

### Telegram
In order to make the workflow work as expected you must create a telegram bot and configure the nodes (`Torrent not found` and `Telegram1`) to send your message once the workflow is complete. 
Here's an easy guide to follow [https://docs.n8n.io/nodes/n8n-nodes-base.telegram/](https://docs.n8n.io/nodes/n8n-nodes-base.telegram/)
In those nodes you also should configure the Chat ID, you may use your telegram username or use a bot to retrieve your id.
You may chat with [useridinfobot](https://t.me/useridinfobot) that sends you your id.

## Ok google automation

Since right now we do not have a n8n client for mobile that can trigger automation using google assistant I decided to use an IFTTT automation to trigger the webhook.

I connect my IFTTT account with google assistant and pick the trigger.
`Say a phrase with a text ingredient` as in the picture below.

![image.png](fileId:582)

And configure the trigger this way.
`scarica $` -&gt; `download $`
or
`metti in download $` -&gt; `put in download $`

or some other trigger you may want.

![image.png](fileId:580)

Then configure your server to trigger the webhook of n8n.

![image.png](fileId:579)

## Conclusion

In conclusion we provide a fully working automation that integrates in n8n a node library and provides an easy trigger to perform a complex operation.

### Security concern
Giving the ability to trigger a download may be problematic for potential unwanted torrent malware download, so you may decide to authenticate the webhook request passing in the body another field with a shared token between the two endpoints.

Moreover the `torrent-search-api` library and its dependencies have some vulnerability that you may want to avoid on your own media-center, this will hopefully be patched soon in a further release of the library.

This is just an interesting proof of concept.

### Quality of the download

You may want to introduce another block between torrent search and webhook trigger to search for a movie based on the words detected by google assistant, sometimes it misinterprets something and you may end up downloading potential copyrighted material.
Please use this automation only for free and open source movies and music.

## 🔗 Nodes Used

Function Item, HTTP Request, Start, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
