# 🏥 iMedi

Sistema de agendamento de consultas médicas desenvolvido como MVP da disciplina **Desenvolvimento Front-End Avançado** da Pós-Graduação Full Stack.

O projeto foi construído utilizando React e tem como objetivo oferecer uma interface moderna, intuitiva e responsiva para recepcionistas e atendentes realizarem o gerenciamento inicial de consultas médicas.

## 📸 Capturas de Tela

### Dashboard

![Dashboard](docs/images/dashboard.png)

### Especialidades

![Especialidades](docs/images/especialidades.png)

### Agendamentos

![Agendamentos](docs/images/agendamentos.png)

---

## 📌 Objetivo

O iMedi foi desenvolvido para simplificar o processo de agendamento de consultas em clínicas médicas, permitindo a navegação entre especialidades, consulta de informações detalhadas e registro de novos agendamentos.

---

## 🚀 Funcionalidades

### Dashboard

* Resumo de consultas do dia
* Quantidade de pendências
* Quantidade de especialidades disponíveis
* Tabela de próximos agendamentos
* Carregamento dos dados a partir de arquivos JSON
* Tratamento de erro no carregamento das informações

### Especialidades

* Listagem dinâmica de especialidades médicas
* Cards reutilizáveis
* Navegação para página de detalhes
* Carregamento das especialidades a partir de JSON
* Feedback de carregamento e erro

### Detalhes da Especialidade

* Exibição de informações detalhadas
* Navegação para agendamento
* Utilização de parâmetros dinâmicos na URL
* Tratamento para especialidade não encontrada

### Agendamentos

* Formulário funcional de agendamento
* Validação de telefone
* Feedback visual de sucesso
* Limpeza automática do formulário
* Ações rápidas após confirmação
* Registro de consultas agendadas
* Persistência dos agendamentos no localStorage

### Busca

* Busca por especialidades médicas
* Pesquisa sem diferenciação de acentos
* Mensagem de especialidade não encontrada
* Carregamento dos dados de busca a partir de JSON

### Usabilidade

* Tooltip de ajuda contextual
* Tooltip compatível com clique, foco e hover
* Feedback visual para ações do usuário
* Mensagens de carregamento
* Mensagens de erro
* Página 404 personalizada
* Interface responsiva
* Melhorias básicas de acessibilidade com `aria-label`, `role="status"` e `role="alert"`

---

## 🛠 Tecnologias Utilizadas

* React
* Vite
* JavaScript
* CSS3
* React Router DOM
* React Icons
* JSON
* localStorage

---

## 🧩 Componentes Reutilizáveis

O projeto utiliza componentização para facilitar manutenção e reutilização de código.

Principais componentes:

* MainLayout
* Sidebar
* Topbar
* RightPanel
* Card
* EspecialidadeCard
* Tooltip

---

## ⚙️ Hooks Utilizados

### useState

Utilizado para:

* Controle de formulários
* Controle de dados carregados
* Controle de mensagens e feedbacks
* Controle dos agendamentos salvos
* Controle de abertura do Tooltip

### useEffect

Utilizado para:

* Carregamento de dados JSON
* Controle de mensagens temporárias
* Persistência e recuperação de dados no localStorage
* Fechamento do Tooltip ao clicar fora do componente

### useNavigate

Utilizado para navegação programática entre páginas.

### useLocation

Utilizado para envio e recebimento de dados durante a navegação.

### useParams

Utilizado para captura de parâmetros da URL.

### useRef

Utilizado no componente Tooltip para detectar cliques fora do elemento.

---

## 🗂 Estrutura do Projeto

```text
public
│
└── data
    ├── agendamentosData.json
    ├── dashboardData.json
    └── especialidadesData.json

src
│
├── assets
├── components
│   ├── Card
│   ├── EspecialidadeCard
│   ├── MainLayout
│   ├── RightPanel
│   ├── Sidebar
│   ├── Tooltip
│   └── Topbar
│
├── pages
│   ├── Dashboard
│   ├── Especialidades
│   ├── EspecialidadeDetalhes
│   ├── Agendamentos
│   └── NotFound
│
├── routes
└── styles
```

---

## 🌐 Rotas Disponíveis

| Rota                | Descrição                 |
| ------------------- | ------------------------- |
| /                   | Dashboard                 |
| /especialidades     | Lista de especialidades   |
| /especialidades/:id | Detalhes da especialidade |
| /agendamentos       | Formulário de agendamento |
| *                   | Página 404                |

---

## 📱 Responsividade

A aplicação foi testada e ajustada para:

* Desktop (1920px)
* Tablet (768px)
* Mobile (425px)
* Mobile (375px)

Foram realizados ajustes específicos para:

* Sidebar
* Topbar
* Dashboard
* Especialidades
* Agendamentos
* Tooltip

---

## 🔄 Simulação de API

Os dados utilizados no MVP são simulados através de arquivos JSON reais localizados na pasta:

```text
public/data
```

O consumo dos dados é realizado utilizando:

* fetch
* useState
* useEffect

Essa abordagem atende ao requisito de simulação de requisições através da leitura de JSON e facilita futuras integrações com APIs REST e backend em Spring Boot.

---

## 💾 Persistência Local

A página de agendamentos utiliza `localStorage` para armazenar temporariamente as consultas criadas pelo usuário.

Essa implementação permite:

* Registrar novos agendamentos
* Listar consultas agendadas
* Manter os dados mesmo após recarregar a página

---

## 🔮 Melhorias Futuras

### Sistema

* Login e autenticação
* Controle de permissões
* Dark Mode
* Internacionalização

### Pacientes

* Cadastro completo
* Histórico médico
* Pesquisa de pacientes

### Médicos

* Cadastro de médicos
* Controle de disponibilidade
* Agenda individual

### Integrações

* Spring Boot
* API REST
* PostgreSQL
* WhatsApp
* Google Calendar

---

## ▶️ Como Executar o Projeto

Clone o repositório:

```bash
git clone https://github.com/Leal86/imedi-react.git
```

Acesse a pasta do projeto:

```bash
cd imedi-react
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

---

## 👨‍💻 Autor

Alexsander Leal

GitHub:
https://github.com/Leal86

LinkedIn:
https://www.linkedin.com/in/alexsanderleal86/

Projeto desenvolvido como MVP da disciplina Desenvolvimento Front-End Avançado da Pós-Graduação Full Stack.
