# iMedi - Master Context

## Informações Gerais

Projeto desenvolvido para a Sprint 2 da Pós-Graduação Full Stack.

Nome do Projeto: iMedi

Objetivo:
Sistema de agendamento de consultas médicas.

Público-alvo MVP:
Recepcionistas e atendentes da clínica.

Observação:
O sistema não será inicialmente utilizado pelos pacientes.
Funcionalidades voltadas ao paciente serão consideradas melhorias futuras.

---

# Tecnologias

* React
* Vite
* JavaScript
* CSS3
* React Icons

---

# Identidade Visual

Fonte principal:

* Poppins

Paleta principal:

* Azul Primário: #3B82F6
* Azul Escuro: #1E40AF
* Branco: #FFFFFF
* Fundo: #F8FAFC
* Texto Principal: #0F172A
* Texto Secundário: #64748B

---

# Estrutura de Pastas

src

* assets
* components
* data
* pages
* routes
* styles

---

# Componentes Criados

## MainLayout

Responsável pela estrutura principal da aplicação.

Contém:

* Sidebar
* Topbar
* Área de Conteúdo
* RightPanel

---

## Sidebar

Menu lateral principal.

Itens:

* Dashboard
* Especialidades
* Agendamentos

Biblioteca de ícones:

* React Icons

---

## Topbar

Contém:

* Campo de pesquisa
* Notificações
* Usuário logado

---

## RightPanel

Painel lateral de apoio.

Exibe:

* Usuário
* Resumo
* Ações rápidas

---

## Card

Componente reutilizável.

Utiliza children.

Objetivo:

Padronizar cartões da aplicação.

---

# Páginas Criadas

## Dashboard

Funcionalidades:

* Resumo de consultas
* Resumo de pendências
* Resumo de especialidades
* Tabela de próximos agendamentos

---

# Camada de Dados

Pasta:

src/data

Arquivos:

* dashboardData.js
* agendamentosData.js
* especialidadesData.js

Objetivo:

Simular retorno de API utilizando Mock Data.

---

# Melhorias Futuras e Evoluções do Produto

## Dashboard

- Adicionar gráficos de consultas por período.
- Adicionar indicadores visuais de crescimento.
- Adicionar filtro por data.
- Criar área de relatórios administrativos.
- Adicionar métricas de faturamento.
- Adicionar exportação PDF e Excel.

---

## Especialidades

- Permitir clique em todo o card.
- Adicionar badge de duração da consulta.
- Adicionar badge de disponibilidade.
- Adicionar quantidade de médicos por especialidade.
- Adicionar imagem ou ilustração da especialidade.
- Implementar pesquisa funcional.
- Implementar filtros por categoria.
- Ordenação por valor.
- Ordenação por disponibilidade.

---

## Agendamentos

- Calendário visual.
- Seleção de horários em tempo real.
- Validação de conflitos de agenda.
- Reagendamento de consultas.
- Cancelamento de consultas.
- Histórico de consultas do paciente.
- Lista de espera.

---

## Pacientes

- Cadastro completo.
- Histórico médico.
- Informações de contato.
- Pesquisa avançada.
- Documentos anexados.

---

## Médicos

- Cadastro de médicos.
- Agenda individual.
- Especialidades vinculadas.
- Controle de disponibilidade.
- Perfil profissional.

---

## Sistema

- Dark Mode.
- Internacionalização (PT/EN).
- Notificações reais.
- Controle de permissões.
- Login e autenticação.
- Recuperação de senha.
- Auditoria de ações.
- Logs do sistema.

---

## UX/UI

- Melhorar animações.
- Skeleton Loading.
- Feedback visual de carregamento.
- Modais padronizados.
- Sistema de Toasts.
- Responsividade para tablet.
- Responsividade para mobile.
- Acessibilidade WCAG.

---

## Integrações Futuras

- Integração com backend Spring Boot.
- Integração com API REST.
- Banco PostgreSQL.
- Integração com pagamentos.
- Integração com WhatsApp.
- Integração com Email.
- Integração com Google Calendar.

---

## MVP Sprint 2 (Fora do Escopo Atual)

- Telemedicina.
- Videochamada.
- Prontuário eletrônico.
- Assinatura digital.
- Receituário eletrônico.

---

## Relatórios

Painel administrativo com métricas da clínica.

---

## Mensagens

Comunicação entre clínica e pacientes.

---

## Prontuário Eletrônico

Visualização de histórico clínico.

---

# Padrão de Desenvolvimento

* Componentização obrigatória
* Explicação detalhada de cada etapa
* Um passo por vez
* Não avançar sem validação do usuário
* Commits obrigatórios
* Documentação contínua

---

## Status Atual

Concluído:

- Estrutura React + Vite
- Sidebar
- Topbar
- RightPanel
- Card reutilizável
- Dashboard
- Página Especialidades
- Página Agendamentos inicial
- React Icons
- React Router
- Dados simulados
- Grid de especialidades com cards dinâmicos

Próxima etapa:

- Conectar o botão Selecionar da página Especialidades à página Agendamentos, levando a especialidade escolhida.

# Histórico de Commits

1. Inicializa projeto React com Vite
2. Cria sidebar e variaveis globais de estilo
3. Adiciona biblioteca React Icons
4. Melhora identidade visual com React Icons
5. Ajusta layout e refinamento visual do dashboard
6. Documenta contexto atual do projeto iMedi
7. Cria pagina de especialidades com cards dinamicos

Próxima etapa:

- Página Especialidades