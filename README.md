# Como executar

## Pré-requisitos
- Node v12+
- Credenciais do Google Cloud Vision

## Instalar as dependências
```
npm install
```

## Configurar credenciais
Copie o arquivo ```.env.dist``` para ```.env``` e configure o caminho para o arquivo com as credenciais do Google Cloud Vision.

## Executar os exemplos

### Reconhecimento de texto em imagens
```
node src/text.js
```

### Classificação de imagens:
```
node src/labels.js
```

## Observações
Testado com Node 12.x.x e 14.x.x.
