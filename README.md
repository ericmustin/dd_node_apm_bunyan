# dd_node_apm_bunyan
Example of Trace ID injection into logs with Bunyan and DD-Trace


## SETUP

Ensure the Agent is running on your host with APM enabled, listening for traces at localhost:8126 (setup instructions [here](https://docs.datadoghq.com/agent/basic_agent_usage/?tab=agentv6) )

- `cd dd_node_apm_bunyan`
- `npm install`
- `node index.js`
- from a different terminal window `curl localhost:3000`
- check `logs.json` or, if configured to output terminal, check terminal output
- example output

```
{"name":"general-display-web","hostname":"COMP10929.local","pid":79334,"level":30,"msg":"response status 0 OK","time":"2019-09-30T14:21:03.287Z","v":0,"dd":{"trace_id":"2941888918638909251","span_id":"6321939096051828600"}}
{"name":"general-display-web","hostname":"COMP10929.local","pid":79334,"level":30,"msg":"response status 1 OK","time":"2019-09-30T14:21:03.601Z","v":0,"dd":{"trace_id":"2941888918638909251","span_id":"6321939096051828600"}}
{"name":"general-display-web","hostname":"COMP10929.local","pid":79334,"level":30,"msg":"response status 2 OK","time":"2019-09-30T14:21:03.921Z","v":0,"dd":{"trace_id":"2941888918638909251","span_id":"6321939096051828600"}}
```