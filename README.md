# Url-Shortening
Repositório responsável pela API do projeto url-shortening

### Stack
<div align="center"> 
  <img alt="NestJS" src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" />
  <img alt="MySql" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />
  <img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
  <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red" />
</div>
<br />

1. Preencha o arquivo .env.dev localizado na raiz do projeto. As seguintes variáveis são necessárias
 ```
  DB_HOST
  DB_USER
  DB_PASS
  DB_NAME
  BASE
  PORT
 ```

2. Na raiz do projeto, instale as dependências:

```sh
npm install
```

3. Para o armazenamento das Urls e funcionamento correto da API é necessário criar a seguinte tabela.

* Banco Mysql
```sh
CREATE TABLE `url` (
  `urlCode` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `longUrl` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `shortUrl` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
```

4. A API possui 3 rotas:
```sh
  4.1 Rota - @Post("encode") - Responsável por armazenar e devolver o JSON com as informações referentes a rota passada
  @Body() - Json:
  {
    "longUrl": string;
  }
```
```sh
  4.2 Rota - @Get("decode/:code") - Responsável por devolver o JSON com as informações referentes a rota passada
```
```sh
  4.3 Rota - @Get("redirect/:code") - Responsável por redirecionar para a URL correta baseado no código.
```

## Author

👤 **Emanuel Bessa**
<div align="center">
  <a href="https://github.com/Emanuelbessa" target="_blank" title="Github">
    <img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <a href="https://www.linkedin.com/in/emanuel-estrela-bessa/" target="_blank" title="Linkedin">
    <img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
</div>

## License

Licensed under the [MIT license](LICENSE)
