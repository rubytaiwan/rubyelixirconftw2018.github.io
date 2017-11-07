Ruby X Elixir Conf Taiwan 2018
===

## Framework

- middleman 4.2.1
`gem install middleman`

## Development

Install dependencies
```
$ bundle install
$ bower install
```

Starting Server
```
$ middleman
```

Deploy

## Update

### News -> `data/news.yml`
- 最新消息請加在第一筆
- `title` 和 `date` 為必要欄位
- `content` 支援 Markdown，若有 `content`，請務必填寫 `permalink`