Ruby X Elixir Conf Taiwan 2018
===

## Framework

- middleman 4.2.1
```
$ gem install middleman

```

## Development

### Install dependencies
```
$ bundle install
$ bower install
```

### Starting Server
```
$ middleman
```

### Deploy
```
$ middleman deploy
```

## Update

### News -> `data/news.yml`
- 欄位：*`title`*, *`date`*, `link`, `permalink`, `content`
- 最新消息請加在第一筆
- 必要欄位：`title`、`date`
- `content` 支援 Markdown，若有 `content`，請務必填寫 `permalink`

### Speakers -> `data/speaker.yml`
- 欄位：*`name`*, *`avatar`*, *`type`*, *`title`*, `subject`, `summary`, `urlHome`, `urltwitter`, `urlGithub`, `slideUrl`, `videoUrl`
- 分為 Keynotes（`keynotes`） 與一般講者（`general`），前者會出現在首頁上的「KEYNOTE SPEAKERS」區塊
- `avatar` --> `images/speakers`
- `type` --> `ruby` or `elixir`，根據講題性質設定
- `summary` 支援 Markdown
- `urlHome`, `urltwitter`, `urlGithub` 等社交網站連結為選填
- `slideUrl`, `videoUrl` 於會後補上

### Sponsors -> `data/sponsor.yml`
- 欄位：*`name`*, *`logo`*, *`link`*, `desc`
- `logo` --> `images/sponsors`