# dd_node_apm_bunyan
Example of Trace ID injection into logs with Winston and DD-Trace


## SETUP

Ensure the Agent is running on your host with APM enabled, listening for traces at localhost:8126 (setup instructions [here](https://docs.datadoghq.com/agent/basic_agent_usage/?tab=agentv6) )

- `cd dd_node_apm_bunyan`
- `git checkout winston_logging`
- `npm install`
- `node index.js`
- from a different terminal window `curl localhost:3000`
- check `logs.json` or, if configured to output terminal, check terminal output
- example output

```
{"message":"response status 0 OK","level":"info","service":"example-service","dd":{"trace_id":"6139751605442635578","span_id":"7028426032524358621"}}
{"message":"response status 1 OK","level":"info","service":"example-service","dd":{"trace_id":"6139751605442635578","span_id":"7028426032524358621"}}
{"message":"response status 2 OK","level":"info","service":"example-service","dd":{"trace_id":"6139751605442635578","span_id":"7028426032524358621"}}
```