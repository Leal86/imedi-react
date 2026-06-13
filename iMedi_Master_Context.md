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

# Melhorias Futuras

## Área do Paciente

Permitir que pacientes:

* Consultem especialidades
* Agendem consultas
* Acompanhem agendamentos

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

# Histórico de Commits

1. Inicializa projeto React com Vite
2. Cria sidebar e variaveis globais de estilo
3. Adiciona biblioteca React Icons
4. Melhora identidade visual com React Icons
5. Ajusta layout e refinamento visual do dashboard


## Status Atual

Concluído:

- Estrutura React + Vite
- Sidebar
- Topbar
- RightPanel
- Card reutilizável
- Dashboard
- React Icons
- Dados simulados

Próxima etapa:

- Página Especialidades