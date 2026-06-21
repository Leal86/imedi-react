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
* JSON
* localStorage

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

public

* data

  * agendamentosData.json
  * dashboardData.json
  * especialidadesData.json

src

* assets
* components
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
* Responsividade com versão compacta em telas menores

## Topbar

Contém:

* Campo de pesquisa
* Notificações
* Usuário logado

Recursos utilizados:

* Busca de especialidades
* Consumo de JSON através de fetch
* Pesquisa ignorando acentos e letras maiúsculas/minúsculas
* Redirecionamento para detalhes da especialidade encontrada
* Mensagem temporária quando a especialidade não é encontrada
* Tratamento de erro no carregamento dos dados da busca
* Acessibilidade com aria-label e role="alert"

## RightPanel

Painel lateral de apoio.

Exibe:

* Usuário
* Resumo
* Ações rápidas

Recursos utilizados:

* useNavigate
* Navegação para Especialidades
* Navegação para Agendamentos
* Valores padrão para evitar quebra quando props não forem informadas
* Acessibilidade com aside e aria-label

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
* Navegação para Detalhes da Especialidade
* Navegação para Agendamentos levando a especialidade selecionada

## Tooltip

Componente reutilizável para exibição de ajuda contextual.

Recebe via props:

* texto

Recursos utilizados:

* Hover em desktop
* Clique em dispositivos touch
* Fechamento ao clicar fora
* useRef para controle do clique externo
* Acessibilidade com aria-expanded
* Acessibilidade com role="button" e tabIndex
* Posicionamento lateral em telas maiores que 425px
* Posicionamento centralizado acima do campo em telas de 425px ou menores
* Reutilizável em qualquer formulário

---

# Páginas Criadas

## Dashboard

Funcionalidades:

* Resumo de consultas
* Resumo de pendências
* Resumo de especialidades
* Tabela de próximos agendamentos
* Dados vindos de JSON real
* Consumo dos dados utilizando fetch
* Controle de carregamento com useState
* Simulação de carregamento com useEffect
* Feedback visual de carregamento
* Tratamento de erro ao carregar dados
* Acessibilidade com role="status" e role="alert"

## Especialidades

Funcionalidades:

* Listagem dinâmica das especialidades
* Cards reutilizáveis
* Grid responsivo
* Ícones por especialidade
* Botão Selecionar
* Navegação para detalhes da especialidade
* Dados vindos de JSON real
* Consumo dos dados utilizando fetch
* Feedback visual de carregamento
* Tratamento de erro ao carregar dados
* Acessibilidade com role="status" e role="alert"

## EspecialidadeDetalhes

Funcionalidades:

* Rota dinâmica com parâmetro de URL
* Uso de useParams
* Busca da especialidade pelo ID
* Exibição de detalhes da especialidade
* Botão Agendar Consulta
* Navegação para Agendamentos levando a especialidade selecionada
* Dados vindos de JSON real
* Consumo dos dados utilizando fetch
* Feedback visual de carregamento
* Tratamento de erro ao carregar dados
* Tratamento para especialidade não encontrada

## Agendamentos

Funcionalidades:

* Recebe especialidade selecionada via useLocation
* Exibe nome e valor da especialidade
* Exibe mensagem condicional quando nenhuma especialidade foi selecionada
* Bloqueia a criação de agendamento sem especialidade selecionada
* Exibe mensagem de erro quando o usuário tenta agendar sem especialidade
* Formulário funcional de agendamento
* Controle de formulário com useState
* Validação simples de telefone
* Limitação de 9 dígitos para telefone
* Feedback visual de sucesso
* Mensagem de sucesso temporária
* Mensagem de erro temporária
* Limpeza automática do formulário após confirmação
* Botão para novo agendamento
* Botão para retornar às especialidades
* Registro de consultas agendadas
* Lista de consultas agendadas
* Persistência local utilizando localStorage
* Recuperação automática dos agendamentos ao recarregar a página
* Acessibilidade com role="alert"

## NotFound

Funcionalidades:

* Página 404 personalizada
* Exibição de mensagem para rotas inexistentes
* Botão para retorno ao Dashboard
* Uso de useNavigate

---

# Camada de Dados

Pasta:

public/data

Arquivos:

* dashboardData.json
* agendamentosData.json
* especialidadesData.json

Objetivo:

Simular retorno de API utilizando arquivos JSON reais.

Motivo da estrutura:

* Arquivos em public/data podem ser consumidos corretamente por fetch no ambiente Vite.
* A estrutura atende ao requisito do MVP de simular requisições por leitura de JSON.
* Facilita futura substituição por uma API REST real.

---

# Hooks Implementados

## useState

Utilizado para:

* Controle de formulário
* Controle de dados carregados
* Controle de mensagens de sucesso
* Controle de mensagens de erro
* Controle de loading
* Controle de lista de agendamentos
* Controle do estado de abertura do Tooltip

## useEffect

Utilizado para:

* Carregamento de dados JSON
* Simulação de carregamento de dados
* Controle de mensagens temporárias
* Recuperação de agendamentos salvos no localStorage
* Persistência dos agendamentos no localStorage
* Fechamento do Tooltip ao clicar fora do componente

## useNavigate

Utilizado para redirecionar o usuário entre páginas.

Exemplos:

* EspecialidadeCard → EspecialidadeDetalhes
* EspecialidadeCard → Agendamentos
* EspecialidadeDetalhes → Agendamentos
* RightPanel → Especialidades
* RightPanel → Agendamentos
* NotFound → Dashboard

## useLocation

Utilizado para receber dados enviados durante a navegação.

Exemplo:

* Agendamentos recebe a especialidade selecionada

## useParams

Utilizado para capturar parâmetros da URL.

Exemplo:

* /especialidades/:id

## useRef

Utilizado para:

* Controle do Tooltip
* Detecção de clique fora do componente

---

# Melhorias Futuras e Evoluções do Produto

## Dashboard

* Adicionar gráficos de consultas por período.
* Adicionar indicadores visuais de crescimento.
* Adicionar filtro por data.
* Criar área de relatórios administrativos.
* Adicionar métricas de faturamento.
* Adicionar exportação PDF e Excel.
* Cards com atualização em tempo real.
* Integração com indicadores do backend.

---

## Especialidades

* Permitir clique em todo o card.
* Adicionar badge de duração da consulta.
* Adicionar badge de disponibilidade.
* Adicionar quantidade de médicos por especialidade.
* Adicionar imagem ou ilustração da especialidade.
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
* Máscara automática para telefone.
* Integração com agenda médica em tempo real.

---

## Pacientes

* Cadastro completo.
* Histórico médico.
* Informações de contato.
* Pesquisa avançada.
* Pesquisa de pacientes pela barra superior.
* Busca unificada de especialidades e pacientes.
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
* Modais padronizados.
* Sistema de Toasts.
* Responsividade para tablet.
* Responsividade para mobile.
* Acessibilidade WCAG.
* Sidebar recolhível para tablets.
* Exibição apenas de ícones na navegação lateral em telas médias.
* Menu hambúrguer para dispositivos móveis.
* Melhor aproveitamento da área útil de conteúdo em resoluções menores.
* Pesquisa responsiva com truncamento automático do placeholder.
* Ocultação inteligente de elementos secundários em telas pequenas.

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
* Relatórios administrativos avançados.
* Login e autenticação.
* Backend real.
* Banco de dados real.

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
* Sempre trabalhar com arquivos completos
* O usuário envia o arquivo completo atual
* A resposta deve devolver o arquivo completo atualizado

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
* Página Agendamentos
* Página 404 para rotas inexistentes
* React Icons
* React Router DOM
* Dados simulados
* Migração dos dados simulados para JSON real
* Dados movidos para public/data
* Consumo de dados utilizando fetch
* Tratamento de erro no carregamento dos dados
* Feedback visual de carregamento
* Grid de especialidades com cards dinâmicos
* Navegação entre páginas
* Fluxo Especialidades → Agendamentos
* Fluxo Especialidades → Detalhes → Agendamentos
* Hook useNavigate implementado
* Hook useLocation implementado
* Hook useParams implementado
* Hook useRef implementado
* Mensagens condicionais na página Agendamentos
* Formulário de agendamento funcional
* Hook useState implementado
* Hook useEffect implementado
* Validação de telefone apenas com números
* Limite de 9 dígitos para telefone
* Feedback visual de sucesso
* Feedback visual de erro
* Limpeza automática do formulário após envio
* Ações pós-confirmação do agendamento
* Bloqueio de agendamento sem especialidade selecionada
* Persistência local de agendamentos com localStorage
* Recuperação dos agendamentos após recarregar a página
* Lista de consultas agendadas
* Feedback de sucesso removido automaticamente após 3 segundos
* Feedback de erro removido automaticamente após 3 segundos
* Componente Tooltip reutilizável
* Tooltip de ajuda contextual implementado
* Tooltip com clique em dispositivos touch
* Tooltip com fechamento ao clicar fora
* Tooltip responsivo com comportamento diferente para desktop e mobile
* Tooltip lateral em telas maiores que 425px
* Tooltip centralizado acima do campo em telas de 425px ou menores
* Responsividade Desktop
* Responsividade Tablet
* Responsividade Mobile 425px
* Responsividade Mobile 375px
* Sidebar compacta para mobile
* Topbar responsiva
* Dashboard responsivo
* Especialidades responsiva
* Agendamentos responsiva
* Testes manuais de responsividade concluídos
* Navegação ativa com NavLink
* Dashboard refatorado para consumir dados com useState e useEffect
* Especialidades refatorada para consumir dados com useState e useEffect
* Simulação de carregamento de dados preparada para futura API
* Busca funcional de especialidades na Topbar
* Busca ignorando acentos e maiúsculas/minúsculas
* Mensagem temporária para especialidade não encontrada
* Ações rápidas funcionais no RightPanel
* Navegação para Nova Consulta a partir das ações rápidas
* Navegação para Agenda a partir das ações rápidas
* Melhorias de acessibilidade com aria-label
* Melhorias de acessibilidade com role="status"
* Melhorias de acessibilidade com role="alert"
* README final criado
* README atualizado após melhorias de dados, usabilidade e persistência
* Imagens do projeto adicionadas ao README
* Favicon personalizado do projeto
* Compilar o projeto com npm run build
* Publicação do projeto no GitHub
* Revisão final do MVP publicado
* Formulário de agendamento bloqueado até seleção de especialidade
* Campos desabilitados visualmente quando nenhuma especialidade está selecionada
* Persistência local de consultas validada com localStorage
* Correção de sincronização entre Dashboard e RightPanel

Próxima etapa:

* Executar npm run build após as últimas alterações
* Realizar commits finais
* Enviar alterações para o GitHub
* Preparar vídeo de apresentação

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
9. Conecta especialidades ao fluxo de agendamento
10. Atualiza documentacao do contexto do projeto
11. Melhora formulario de agendamento
12. Atualiza documentacao do contexto do projeto
13. Cria pagina 404 para rotas inexistentes
14. Atualiza documentacao do contexto do projeto
15. Adiciona useEffect ao feedback de agendamento
16. Atualiza documentacao do contexto do projeto
17. Adiciona tooltip de ajuda no formulario
18. Ajusta documentacao do contexto do projeto
19. Ajusta responsividade do dashboard em 425px
20. Finaliza responsividade mobile do MVP
21. Atualiza documentacao final da Sprint 2
22. Refina documentacao final da Sprint 2
23. Refatora consumo de dados com useState e useEffect
24. Atualiza documentacao do consumo de dados
25. Implementa busca de especialidades e ações rápidas
26. Atualiza documentacao da busca e acoes rapidas
27. Refina documentacao final do MVP
28. Adiciona README e imagens do projeto
29. Personaliza favicon do projeto
30. Atualiza documentacao final apos README e favicon
31. Refatora consumo de dados para JSON real
32. Melhora usabilidade acessibilidade e persistência

Observação:
Os commits 8 e 9 possuem a mesma mensagem no histórico Git. Ambos foram mantidos na documentação para preservar a sequência real do desenvolvimento.

Novos commits recomendados:



---

# Progresso do MVP

Implementação: 100%
Documentação: 100%
Build: pendente após últimas alterações
Pronto para publicação: pendente após build e push final

---

# Requisitos Atendidos

* Componentização
* Reutilização de mais de 4 componentes
* React Router
* Props
* useNavigate
* useLocation
* useParams
* useRef
* Navegação entre páginas
* Estrutura organizada
* Dados simulados
* Consumo de JSON real via fetch
* Simulação de API utilizando arquivos JSON
* Componentes reutilizáveis
* Layout visual diferenciado
* Mensagens condicionais
* Página 404
* Tooltip de ajuda contextual
* Tooltip responsivo
* Tooltip compatível com hover, clique e foco
* Feedback visual de sucesso
* Feedback visual de erro
* Feedback de carregamento
* Tratamento de erro
* Responsividade desktop, tablet e mobile
* useState para controle de dados e formulário
* useEffect para simulação de carregamento de dados
* Fluxo de dados simulados semelhante a uma futura API
* Busca funcional de especialidades
* Ações rápidas funcionais
* Persistência local de dados
* Lista de agendamentos criados
* Bloqueio de agendamento sem especialidade selecionada
* Acessibilidade básica

---

# Requisitos Pendentes

* Executar build final
* Fazer commits finais
* Enviar alterações para o GitHub público
* Preparar vídeo de apresentação
* Publicar ou disponibilizar o vídeo de apresentação
* Revisão final do MVP publicado

---

# Nota Estimada Atual

Estimativa atual após as melhorias:

* Componentização: 3,5 / 3,5
* React, hooks e rotas: 2,5 / 2,5
* Usabilidade: 1,9 / 2,0
* Organização e documentação: 1,9 / 2,0

Nota estimada: 9,8 / 10

Observação:
A nota final dependerá da execução correta do projeto, da publicação no GitHub, da entrega do vídeo de apresentação e da clareza da explicação durante a gravação.
