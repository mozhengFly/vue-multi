# vue-multi
> vue3 cli 多页面demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### nginx配置
```nginx
    server {
        listen       5678;
        server_name  0.0.0.0;
        location / {
			# 配置去掉HTML后缀访问
			if (!-e $request_filename){
                rewrite ^(.*)$ /$1.html last;
                break;
            }
            root   G:\\github\\vue-multi\\dist;
            index  index.html index.htm;
        }
    }
```
