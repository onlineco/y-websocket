module.exports = {
  apps : [{
    name   : "deliveryshift-websocket-server",
    script : "HOST=localhost PORT=5050 npx y-websocket",
    ignore_watch: ["logs", "node_modules"],
    watch: true
  }]
}
