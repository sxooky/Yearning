由于inception支持mysqldb库但不支持pymysql库， 
直接使用pymysql 连接inception报错如下：

```
ValueError: invalid literal for int() with base 10: 'Inception2'
```
查找pymysql源码修改connections.py文件
```
找到783行

    def _request_authentication(self):
        # https://dev.mysql.com/doc/internals/en/connection-phase-packets.html#packet-Protocol::HandshakeResponse
        if int(self.server_version.split('.', 1)[0]) >= 5:
            self.client_flag |= CLIENT.MULTI_RESULTS
修改为

    def _request_authentication(self):
        # https://dev.mysql.com/doc/internals/en/connection-phase-packets.html#packet-Protocol::HandshakeResponse
        try:
            if int(self.server_version.split('.', 1)[0]) >= 5:
                self.client_flag |= CLIENT.MULTI_RESULTS
        except:
            if self.server_version.split('.', 1)[0] == 'Inception2':
                self.client_flag |= CLIENT.MULTI_RESULTS
```

查找 pymysql 源码修改 cursors.py文件
```
找到359行

  if self._result and (self._result.has_next or not self._result.warning_count):
        return
修改为

if self._result:
   return
```   
实测可以正常连接inception 并返回相关结果