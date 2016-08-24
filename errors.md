
## HINTS

events.js:72
      listeners[i].call(self);
                  ^

TypeError: Cannot read property 'call' of undefined
    at emitNone (events.js:72:19)
    at Stream.emit (events.js:166:7)
    at Stream.Charm.end (/home/ubuntu/.nvm/versions/node/v4.1.2/lib/node_modules/expressworks/node_modules/workshopper/node_modules/terminal-menu/node_modules/charm/index.js:107:10)
    at Menu.close (/home/ubuntu/.nvm/versions/node/v4.1.2/lib/node_modules/expressworks/node_modules/workshopper/node_modules/terminal-menu/index.js:126:16)
    at Menu.<anonymous> (/home/ubuntu/.nvm/versions/node/v4.1.2/lib/node_modules/expressworks/node_modules/workshopper/menu.js:75:10)
    at emitTwo (events.js:92:20)
    at Menu.emit (events.js:172:7)
    at Menu.ondata [as _ondata] (/home/ubuntu/.nvm/versions/node/v4.1.2/lib/node_modules/expressworks/node_modules/workshopper/node_modules/terminal-menu/index.js:215:18)
    at DestroyableTransform._transform (/home/ubuntu/.nvm/versions/node/v4.1.2/lib/node_modules/expressworks/node_modules/workshopper/node_modules/terminal-menu/index.js:50:18)
    at DestroyableTransform.Transform._read (/home/ubuntu/.nvm/versions/node/v4.1.2/lib/node_modules/expressworks/node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js:184:10)
    at DestroyableTransform.Transform._write (/home/ubuntu/.nvm/versions/node/v4.1.2/lib/node_modules/expressworks/node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js:172:12)
    at doWrite (/home/ubuntu/.nvm/versions/node/v4.1.2/lib/node_modules/expressworks/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js:237:10)
    at writeOrBuffer (/home/ubuntu/.nvm/versions/node/v4.1.2/lib/node_modules/expressworks/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js:227:5)
    at DestroyableTransform.Writable.write (/home/ubuntu/.nvm/versions/node/v4.1.2/lib/node_modules/expressworks/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js:194:11)
