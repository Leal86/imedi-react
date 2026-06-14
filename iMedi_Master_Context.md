# iMedi - Master Context

## Informações Gerais

Projeto desenvolvido para a Sprint 2 da Pós-Graduação Full Stack.

Nome do Projeto: iMedi

Objetivo:
Sistema de agendamento de consultas médicas.

Público-alvo MVP:
Recepcionistas e atendentes da clínica.

Observação:
O sistema não será inicialmente utilizado pelos pacientes. Funcionalidades voltadas ao paciente serão consideradas melhorias futuras.

---

# Tecnologias

* React
* Vite
* JavaScript
* CSS3
* React Icons
* React Router DOM

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

## Sidebar

Menu lateral principal.

Itens:

* Dashboard
* Especialidades
* Agendamentos

Recursos utilizados:

* React Icons
* NavLink do React Router DOM
* Destaque automático da rota ativa

## Topbar

Contém:

* Campo de pesquisa
* Notificações
* Usuário logado

## RightPanel

Painel lateral de apoio.

Exibe:

* Usuário
* Resumo
* Ações rápidas

## Card

Componente reutilizável.

Utiliza children.

Objetivo:

Padronizar cartões da aplicação.

## EspecialidadeCard

Componente reutilizável para exibir especialidades médicas.

Recebe via props:

* id
* nome
* descricao
* valor
* icone

Recursos utilizados:

* React Icons
* useNavigate
* Navegação para Agendamentos levando a especialidade selecionada

## Tooltip

Componente reutilizável para exibição de ajuda contextual.

Recebe via props:

* texto

Recursos utilizados:

* Exibição ao passar o mouse
* Reutilizável em qualquer formulário
* Ajuda contextual ao usuário

---

# Páginas Criadas

## Dashboard

Funcionalidades:

* Resumo de consultas
* Resumo de pendências
* Resumo de especialidades
* Tabela de próximos agendamentos
* Dados vindos de Mock Data

## Especialidades

Funcionalidades:

* Listagem dinâmica das especialidades
* Cards reutilizáveis
* Grid responsivo
* Ícones por especialidade
* Botão Selecionar
* Navegação para Agendamentos

## EspecialidadeDetalhes

Funcionalidades:

* Rota dinâmica com parâmetro de URL
* Uso de useParams
* Busca da especialidade pelo ID
* Exibição de detalhes da especialidade
* Botão Agendar Consulta
* Navegação para Agendamentos levando a especialidade selecionada

## Agendamentos

Funcionalidades:

* Recebe especialidade selecionada via useLocation
* Exibe nome e valor da especialidade
* Exibe mensagem condicional quando nenhuma especialidade foi selecionada
* Formulário funcional de agendamento
* Controle de formulário com useState
* Validação simples de telefone
* Limitação de 9 dígitos para telefone
* Feedback visual de sucesso
* Limpeza automática do formulário após confirmação
* Botão para novo agendamento
* Botão para retornar às especialidades

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

# Hooks Implementados

## useNavigate

Utilizado para redirecionar o usuário entre páginas.

Exemplos:

* EspecialidadeCard → Agendamentos
* EspecialidadeDetalhes → Agendamentos

## useLocation

Utilizado para receber dados enviados durante a navegação.

Exemplo:

* Agendamentos recebe a especialidade selecionada

## useParams

Utilizado para capturar parâmetros da URL.

Exemplo:

* /especialidades/:id

---

# Melhorias Futuras e Evoluções do Produto

## Dashboard

* Adicionar gráficos de consultas por período.
* Adicionar indicadores visuais de crescimento.
* Adicionar filtro por data.
* Criar área de relatórios administrativos.
* Adicionar métricas de faturamento.
* Adicionar exportação PDF e Excel.

---

## Especialidades

* Permitir clique em todo o card.
* Adicionar badge de duração da consulta.
* Adicionar badge de disponibilidade.
* Adicionar quantidade de médicos por especialidade.
* Adicionar imagem ou ilustração da especialidade.
* Implementar pesquisa funcional.
* Implementar filtros por categoria.
* Ordenação por valor.
* Ordenação por disponibilidade.

---

## Agendamentos

* Calendário visual.
* Seleção de horários em tempo real.
* Validação de conflitos de agenda.
* Reagendamento de consultas.
* Cancelamento de consultas.
* Histórico de consultas do paciente.
* Lista de espera.

---

## Pacientes

* Cadastro completo.
* Histórico médico.
* Informações de contato.
* Pesquisa avançada.
* Documentos anexados.

---

## Médicos

* Cadastro de médicos.
* Agenda individual.
* Especialidades vinculadas.
* Controle de disponibilidade.
* Perfil profissional.

---

## Sistema

* Dark Mode.
* Internacionalização PT/EN.
* Notificações reais.
* Controle de permissões.
* Login e autenticação.
* Recuperação de senha.
* Auditoria de ações.
* Logs do sistema.

---

## UX/UI

* Melhorar animações.
* Skeleton Loading.
* Feedback visual de carregamento.
* Modais padronizados.
* Sistema de Toasts.
* Responsividade para tablet.
* Responsividade para mobile.
* Acessibilidade WCAG.
* Sidebar recolhível (Collapsed Sidebar) para tablets.
* Exibição apenas de ícones na navegação lateral em telas médias.
* Menu hambúrguer para dispositivos móveis.
* Melhor aproveitamento da área útil de conteúdo em resoluções menores.

---

## Integrações Futuras

* Integração com backend Spring Boot.
* Integração com API REST.
* Banco PostgreSQL.
* Integração com pagamentos.
* Integração com WhatsApp.
* Integração com Email.
* Integração com Google Calendar.

---

## MVP Sprint 2 - Fora do Escopo Atual

* Telemedicina.
* Videochamada.
* Prontuário eletrônico.
* Assinatura digital.
* Receituário eletrônico.
* Área completa do paciente.
* Área completa de médicos.
* Mensagens.
* Prontuário eletrônico.
* Relatórios administrativos avançados.

---

# Padrão de Desenvolvimento

* Componentização obrigatória
* Explicação detalhada de cada etapa
* Um passo por vez
* Não avançar sem validação do usuário
* Commits obrigatórios
* Documentação contínua
* Sempre atualizar este arquivo após commits relevantes
* Sempre informar título correto do commit

---

# Status Atual

Concluído:

* Estrutura React + Vite
* Sidebar
* Topbar
* RightPanel
* Card reutilizável
* EspecialidadeCard reutilizável
* Dashboard
* Página Especialidades
* Página EspecialidadeDetalhes
* Página Agendamentos inicial
* React Icons
* React Router DOM
* Dados simulados
* Grid de especialidades com cards dinâmicos
* Navegação entre páginas
* Fluxo Especialidades → Agendamentos
* Fluxo Especialidades → Detalhes → Agendamentos
* Hook useNavigate implementado
* Hook useLocation implementado
* Hook useParams implementado
* Mensagens condicionais na página Agendamentos
* Formulário de agendamento funcional
* Hook useState implementado
* Validação de telefone (apenas números)
* Limite de 9 dígitos para telefone
* Feedback visual de sucesso
* Limpeza automática do formulário após envio
* Ações pós-confirmação do agendamento
* Página 404 para rotas inexistentes
* Hook useEffect implementado
* Feedback de sucesso removido automaticamente após 3 segundos
* Componente Tooltip reutilizável
* Tooltip de ajuda contextual implementado

Próxima etapa:

* Finalizar responsividade completa
* Preparar README final
* Preparar vídeo de apresentação
* Revisão final do MVP
---

# Histórico de Commits

1. Inicializa projeto React com Vite
2. Cria sidebar e variaveis globais de estilo
3. Adiciona biblioteca React Icons
4. Melhora identidade visual com React Icons
5. Ajusta layout e refinamento visual do dashboard
6. Documenta contexto atual do projeto iMedi
7. Cria pagina de especialidades com cards dinamicos
8. Conecta especialidades ao fluxo de agendamento
9. Atualiza documentacao do projeto iMedi
10. Atualiza documentação do contexto do projeto
11. Cria pagina 404 para rotas inexistentes
12. Adiciona useEffect ao feedback de agendamento
13. Atualiza documentacao do contexto do projeto
14. Adiciona tooltip de ajuda no formulario

Observação:
O commit 9 atualizou documentação, mas foi registrado com a mesma mensagem do commit 8 no Git. Nos próximos commits, commits funcionais e commits de documentação devem ter mensagens diferentes.

---

# Progresso do MVP

Percentual estimado de implementação:

90%

Requisitos já atendidos:

* Componentização
* Reutilização de mais de 4 componentes
* React Router
* Props
* useNavigate
* useLocation
* useParams
* Navegação entre páginas
* Estrutura organizada
* Dados simulados
* Componentes reutilizáveis
* Layout visual diferenciado
* Mensagens condicionais

Requisitos pendentes:

* README final
* Responsividade completa
* GitHub público
* Vídeo de apresentação
* Revisão final do MVP
