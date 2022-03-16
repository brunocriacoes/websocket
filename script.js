const ws = new WebSocket('ws://localhost:1337')
ws.onopen = this.onopen
ws.onclose = this.onclose
ws.onmessage = this.onmessage
ws.onerror = this.onerror