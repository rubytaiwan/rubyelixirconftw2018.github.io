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

⚠️ Note: **粗體字**為必要欄位

### News -> `data/news.yml`
- 欄位：**`title`**, **`date`**, `link`, `permalink`, `content`
- 資料顯示由上而下，最新消息請加在第一筆
- `content` 支援 Markdown，若有 `content`，請務必填寫 `permalink`

### Program -> `data/program.yml`
- 欄位：**`period`**, `duration`, **`agenda`**, **`speakerOne`**, `speakerTwo`, `type`
- `period`：議程時間，採 12 小時制，例：`9:00 am`
- `duration`：講題長度，非講題時段可不填
- `agenda`：Registration, Opening, Closing 等時段
- `speakerOne`, `speakerTwo`：講者議程（講者名稱需與 `speaker.yml` 相同），單軌時段填寫 `speakerOne` 即可
- `type`：若為 Lunch, After Party 等時段需填寫 `event`

### Speakers -> `data/speaker.yml`
- 欄位：**`name`**, **`avatar`**, **`type`**, **`lang`**, **`title`**, `bio`, **`subject`**, **`summary`**, `urlHome`, `urltwitter`, `urlGithub`, `slideUrl`, `videoUrl`
- 所有講者統一填寫在 `general` 底下
- `avatar`：目錄 ->`images/speakers`，至少 300 * 300px
- `type`：`ruby` or `elixir`，講題性質設定
- `lang`：`EN` or `CHT`，講題語言設定
- `bio`, `summary` 支援 Markdown
- `urlHome`, `urltwitter`, `urlGithub`：社交網站連結
- `slideUrl`, `videoUrl` 於會後補上錄影

### Sponsors -> `data/sponsor.yml`
- 欄位：**`name`**, **`logo`**, **`link`**, **`desc`**
- `logo`： 目錄 -> `images/sponsors`
- `desc`：贊助商簡介