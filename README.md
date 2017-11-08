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
- 必要欄位：`title`、`date`
- `content` 支援 Markdown，若有 `content`，請務必填寫 `permalink`

### Speakers -> `data/speakers.yml`
- 分為 Keynotes（`keynotes`） 與一般講者（`general`），前者會出現在首頁上的「KEYNOTE SPEAKERS」區塊
- `avatar` --> `images/speakers`
- `type` --> `ruby` or `elixir`，根據講題性質設定
- `bio`, `summary` 支援 Markdown
- `urlHome`, `urltwitter`, `urlGithub` 等社交網站連結為選填
- `slideUrl`, `videoUrl` 於會後補上