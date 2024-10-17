### HUs

<<<<<<< HEAD
- [ ] [HU001] - REALIZAR CADASTRO DE SOLICITANTE (USUÁRIO EXTERNO)
- [ ] [HU002] - REALIZAR CADASTRO DE SOLICITANTE (SECRETARIA)
- [ ] [HU006] - REALIZAR LOGIN
- [ ] [HU007] - RECUPERAR ACESSO
- [ ] [HU009] - VISUALIZAR MENSAGENS
- [ ] [HU010] - VISUALIZAR INFORMAÇÕES DE TRIAGEM
- [ ] [HU011] - VISUALIZAR TRIAGENS PENDENTES
- [ ] [HU012] - REALIZAR TRIAGEM
- [ ] [HU013] - MANTER CLÍNICAS
- [ ] [HU014] - MANTER MÓDULOS
- [ ] [HU015] - MANTER EQUIPOS
- [ ] [HU016] - VISUALIZAR DISCIPLINAS
- [ ] [HU017] - MANTER DOCENTES
- [ ] [HU018] - MANTER DISCENTES
- [ ] [HU019] - MANTER PROCEDIMENTOS
- [ ] [HU020] - INFORMAR DISPONIBILIDADE PARA ATENDIMENTO
- [ ] [HU021] - AGENDAR CONSULTA
- [ ] [HU022] - VISUALIZAR AGENDAMENTOS
- [ ] [HU023] - VISUALIZAR AGENDAMENTOS FUTUROS DE EQUIPO
- [ ] [HU024] - MANTER AGENDAMENTOS
- [ ] [HU025] - MANTER AGENDAMENTOS
- [ ] [HU027] - REALIZAR ATENDIMENTO
- [ ] [HU028] - VISUALIZAR PRONTUÁRIOS
- [ ] [HU029] - VISUALIZAR INFORMAÇÕES PRÉ-ATENDIMENTO
- [ ] [HU030] - VISUALIZAR AGENDAMENTOS
- [ ] [HU031] - VISUALIZAR ATENDIMENTOS
- [ ] [HU032] - VISUALIZAR ATENDIMENTOS
- [ ] [HU033] - VISUALIZAR INFORMAÇÕES DO TRATAMENTO


HU001 - REALIZAR CADASTRO DE SOLICITANTE (USUÁRIO EXTERNO) - 8 pontos
	SENDO Usuário externo (pré-solicitante) (qualquer pessoa)
	QUERO Realizar cadastro no sistema
	PARA Pleitear uma vaga de atendimento odontológico
		
	CRITÉRIOS DE ACEITE
		1. Deve ser possível realizar o cadastro através do preenchimento de um formulário.
		2. Os campos do formulário devem possuir máscara e validação, informando quando algum campo estiver preenchido incorretamente.
		3. O sistema não deve permitir que o usuário envie as informações caso algum campo esteja preenchido incorretamente.
		4. O sistema deve verificar se o usuário já possui um cadastro ou uma solicitação de cadastro pendente. Caso positivo deve mostrar uma mensagem informando o usuário e abortando o processo.
		5. O sistema deve verificar as informações fornecidas pelo usuário e caso exista alguma inconsistência, o processo deve ser abortado, e o usuário deve ser informado.
		6. Caso as informações fornecidas passem pelas validações, o sistema deve registrar a solicitação e marcá-la como pendente de aprovação para a secretaria.
		Também deve mostrar uma mensagem informando ao usuário que a solicitação foi registrada e está pendente de aprovação.
	
	REGRAS DE NEGÓCIO
		1. Não devem ser aceitas solicitações de cadastro, nem cadastros duplicados.
		2. Todas as informações fornecidas devem ser validadas para garantir a integridade dos dados.
		3. A solicitação de cadastro deve ser marcada como pendente de aprovação por parte da secretaria.
	
	(WEB + MOBILE)

HU006 - REALIZAR LOGIN - 6 pontos
	SENDO Qualquer usuário
	QUERO Realizar login no sistema
	PARA Acessar as funcionalidades do sistema
	
	CRITÉRIOS DE ACEITE
		1. Deve ser possível realizar o login no sistema através do preenchimento de um formulário.
		2. Deve ser solicitado o e-mail e código de acesso do usuário.
		3. O campo de e-mail deve possuir validação, informando o usuário quando um e-mail inválido for fornecido. O campo de código de acesso deve possuir validação para não permitir valores vazios, o usuário também deve ser informado.
		4. O sistema não deve permitir que o usuário envie as informações caso o e-mail esteja incorreto, ou a senha não esteja preenchida.
		5. Caso o e-mail ou código de acesso fornecidos sejam inválidos, o sistema deverá informar o usuário.
		6. Caso as informações fornecidas coincidam com um cadastro existente, porém o usuário seja do grupo de permissões da secretaria, 
		e esteja acessando pelo aplicativo para dispositivos móveis, o acesso deve ser barrado, e o usuário deve ser informado que só pode acessar pela interface WEB. 
		7. Caso as informações fornecidas coincidam com um cadastro existente e o usuário passe pela validação de grupo de permissão e meio de acesso, 
		o sistema deve autenticar o usuário, permitindo a ele o acesso as funcionalidades de seu escopo (de acordo com seu grupo de permissões).
		
	REGRAS DE NEGÓCIO
		1. Os campos devem possuir validação e devem informar o usuário caso estejam preenchidos incorretamente.
		2. Caso quem esteja logando seja do grupo de permissões da secretaria, e o acesso esteja sendo realizado pelo aplicativo para dispositivos móveis, 
		o acesso deve ser barrado, e o usuário deve ser informado que só pode acessar pela interface WEB. 
		3. Caso as informações fornecidas estejam incorretas, o acesso deve ser barrado, e o usuário deve ser informado.
		4. Caso as informações fornecidas coincidam com um cadastro existente e o usuário passe pela validação de grupo de permissão e meio de acesso, 
		o usuário deverá ser logado, permitindo a ele o acesso as funcionalidades de seu escopo (de acordo com seu grupo de permissões). 
		
	(WEB + MOBILE (dependendo do usuário -> mas tudo mesma interface))


HU007 - RECUPERAR ACESSO - 3 pontos
	SENDO Qualquer usuário
	QUERO Recuperar meu código de acesso ao sistema
	PARA Realizar login no sistema
	
	CRITÉRIOS DE ACEITE
		1. Deve ser possível solicitar o reenvio do código de acesso ao sistema do usuário.
		2. O usuário deverá fornecer o e-mail referente ao cadastro que deseja recuperar acesso.
		3. O sistema deve validar o e-mail fornecido, informando o usuário e impedindo que a solicitação seja concretizada quando estiver incorreto.
		4. O sistema deve checar se o e-mail informado coincide com algum e-mail cadastrado no sistema. Caso não coincida, o usuário deve ser informado. 
		5. Caso o e-mail fornecido coincida com um cadastro existente, o sistema deve enviar via e-mail ao usuário seu código de acesso.
		
	REGRAS DE NEGÓCIO
		1. O campo de e-mail deve possuir validação e deve informar o usuário caso esteja preenchido incorretamente.
		2. O sistema deve previnir que o usuário possa enviar a solicitação caso o e-mail fornecido esteja incorreto.
		3. O sistema deve checar se o e-mail informado coincide com algum e-mail cadastrado no sistema. Caso não coincida o usuário deve ser informado.
		4. Caso o e-mail fornecido coincida com algum e-mail cadastrado no sistema, o código de acesso deste usuário deve ser reenviado ao mesmo via e-mail.
	
	(WEB + MOBILE (dependendo do usuário -> mas tudo mesma interface))


HU009 - VISUALIZAR MENSAGENS - 4 pontos
	SENDO Solicitante/paciente
	QUERO Visualizar mensagens enviadas para mim
	PARA Me informar sobre o estado de minhas solicitações e agendamentos
	
	CRITÉRIOS DE ACEITE
		1. Deve ser possível receber e visualizar mensagens automáticas do sistema e mensagens enviadas pela secretaria.
		2. A caixa de mensagens deve ser exibida com um ícone de e-mail/mensagem e caso existam mensagens não lidas, o número de mensagens não lidas deve ser exibido abaixo da caixa de mensagens.
		3. Caso a caixa de mensagens esteja vazia, ao clicar nela, deve ser exibido um texto informando que não existem mensagens.
		4. Deve ser possível abrir a caixa de mensagens para exibir todas as mensagens enviadas ao usuário, deve ser exibido o remetente, a data de envio da mensagem e uma prévia da mensagem, 
		ao clicar no item, o sistema deve exibir uma interface com mais detalhes da mensagem, bem como a mensagem completa. 
		5. Deve ser possível marcar mensagens como lidas ou não lidas.
		
	REGRAS DE NEGÓCIO
		1. Caso a caixa de mensagens esteja vazia, ao clicar nela, deve ser exibido um texto informando que não existem mensagens.
		2. Deve ser possível marcar mensagens como lidas ou não lidas.
		3. Deve se aplicar a solicitantes e pacientes.
	
	(WEB + MOBILE)


HU010 - VISUALIZAR INFORMAÇÕES DE TRIAGEM - 4 pontos
	SENDO Solicitante
	QUERO Visualizar informações sobre minha triagem pendente
	PARA Me informar sobre o funcionamento da triagem, bem como os passos necessário para realizá-la
	
	CRITÉRIOS DE ACEITE
		1. Deve ser possível visualizar informações sobre a triagem que está pendente.
		2. Devem ser exibidas informações sobre a solicitação, como data da solicitação e status.
		3. Deve ser exibido um tutorial de como realizar a triagem, informando o usuário a se direcionar presencialmente à clínica, informando o endereço e os procedimentos necessários para realização da triagem.
		
	REGRAS DE NEGÓCIO
		1. O usuário deve ser informado sobre os procedimentos necessários para realizar a triagem.
	
	(WEB + MOBILE)


HU011 - VISUALIZAR TRIAGENS PENDENTES - 4 pontos
	SENDO Técnico dentista
	QUERO Visualizar as triagens pendentes de serem realizadas
	PARA Manter controle das triagens pendentes, possibilitando a realização de triagens
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibida uma lista com uma relação de todas as triagens pendentes de realização.
		2. Cada item da lista deverá ser composto pela data da solicitação de triagem, o nome do solicitante, o status da triagem e um botão de ação para realizar a triagem.
		3. Deve ser possível ordenar por cada coluna da lista, de forma crescente ou decrescente.
		4. Deve ser possível realizar filtros parciais de texto para cada coluna.
	
	REGRAS DE NEGÓCIO
		1. Caso não exista nenhum item na lista, deverá ser exibida uma mensagem informando que não existem triagens pendentes de realização.
	
	(WEB + MOBILE)


HU012 - REALIZAR TRIAGEM - 10 pontos 
	SENDO Técnico dentista
	QUERO Realizar a triagem de um solicitante
	PARA Que as necessidades de tratamento do solicitante sejam definidas, possibilitando o encaminhamento para atendimento odontológico
	
	CRITÉRIOS DE ACEITE
		1. Deve ser possível realizar a triagem de um solicitante, através do preenchimento de formulários.
		2. O usuário deve conseguir retornar e cancelar a realização da triagem a qualquer momento do fluxo. Caso isso aconteça, o status da triagem deverá ser alterado novamente para "Pendente".
		3. O usuário deve conseguir clicar em um botão de ação da listagem de triagens pendentes, com o intuito de realizar a triagem.
		4. O sistema deve garantir que o solicitante é quem diz ser, e que está presente pessoalmente na clínica odontológica juntamente com o técnico dentista, 
		portanto deve ser exibida uma interface solicitando ao usuário o CPF do solicitante, que deve ser solicitado ao mesmo pelo técnico dentista.
		5. Após esta confirmação, o sistema deve atualizar o status da triagem para "Em andamento" e levar o usuário a uma página contendo um formulário a ser preenchido. 
		Este formulário deverá conter informações relevantes para o descobrimento de possíveis tratamentos necessários para o solicitante.
		6. O usuário deverá solicitar as informações necessárias ao solicitante, realizando o preenchimento de um formulário. 
		7. Os campos do formulário devem possuir máscara e validação, informando quando algum campo estiver preenchido incorretamente.
		8. O sistema não deve permitir que o usuário envie as informações caso algum campo esteja preenchido incorretamente.
		9. O sistema deve verificar as informações fornecidas pelo usuário e caso exista alguma inconsistência, a solicitação não deve ser concretizada, e o usuário deve ser informado. 
		10. Com o preenchimento adequado do formulário de perguntas ao solicitante, o sistema deve redirecionar o usuário para uma interface contendo um segundo formulário, 
		este formulário deve solicitar ao usuário informações referentes ao procedimento da triagem, por exemplo informações obtidas através de análise odontológica física no solicitante, e demais observações e detalhes da consulta.
		11. Este formulário também deve conter máscaras, validações e feedback ao usuário. Também deve-se ter garantia da integridade dos dados.
		12. Com o preenchimento adequado deste formulário, o usuário pode pressionar um botão de finalizar triagem, 
		neste momento o sistema deve exibir uma interface solicitando que o usuário indique os procedimentos necessários para o tratamento do solicitante, se for aplicável.  
		Esta lista de procedimentos deriva da lista de procedimentos cadastrados nas disciplinas. 
		Também deve ser solicitado o preenchimento de um campo de observações, onde o usuário deve registrar observações relevantes sobre a triagem.
		Ao finalizar o preenchimento deste formulário, o usuário poderá finalizar a triagem de fato, pressionando um botão de finalizar triagem. O sistema deverá exibir uma interface de confirmação, 
		e somente se o usuário realizar a confirmação a ação será concretizada, e a triagem será finalizada.
		13. Caso sejam identificados procedimentos necessários para o solicitante, ao finalizar a triagem com sucesso 
		o sistema deve realizar a transformação do solicitante em paciente, além de realizar o encaminhamento do paciente para tratamento, indicando o status do tratamento como "Não iniciado".
		14. Caso não sejam identificados procedimentos necessários para o solicitante, a triagem é dada como realizada, e o solicitante não é encaminhado para tratamento, não passando a ser paciente.
		
	REGRAS DE NEGÓCIO
		1. Deve ser solicitado o número do CPF do solicitante para garantir que ele é quem diz ser, e que está presente pessoalmente em consulta com o técnico dentista.
		2. Todas as informações fornecidas em todos os formulários devem ser validadas para garantir a integridade dos dados, sempre que possível informando o usuário.
		3. O usuário deve conseguir retornar e cancelar a realização da triagem a qualquer momento do fluxo.
		4. Deve-se solicitar confirmação para todas as ações.
		5. Ao finalizar o fluxo com sucesso, caso sejam identificados procedimentos necessários para o solicitante, o usuário deve ser transformado em paciente e encaminhado para tratamento.

	(WEB + MOBILE)


HU013 - MANTER CLÍNICAS - 4 pontos
	SENDO Docente
	QUERO Manter as informações de clínicas
	PARA Ter controle das clínicas cadastradas
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibida uma relação de todas as clínicas cadastradas.
		2. Caso não existam clínicas cadastradas, o sistema deve exibir uma mensagem informando que não existem clínicas cadastradas.
		3. Deve ser possível selecionar uma clínica específica, exibindo seus módulos e equipos.
		4. Se houver alguma clínica cadastrada, o sistema deve automaticamente selecionar a primeira clínica, exibindo seus módulos e equipos.
		5. Deve ser possível pressionar um botão para editar as clínicas. Ao pressionar este botão o sistema deverá exibir uma interface contendo as clínicas em formato de lista, 
		cada item da lista deverá conter o nome da clínica e dois botões de ação, um para renomear a clínica e outro para remover a clínica. 
		Esta interface também deve conter um botão para adicionar uma clínica.
		6. O sistema deve garantir que nenhuma ação seja realizada sem confirmação através de pop-up do usuário.
		7. Ao adicionar uma clínica deve ser solicitado o nome da clínica, e o sistema deve garantir que o nome não pode ser igual a outra clínica já existente.
		8. Ao renomear uma clínica deve ser solicitado o nome da clínica, e o sistema deve garantir que o nome não pode ser igual a outra clínica já existente.
		9. Ao remover uma clínica, após a confirmação efetiva do usuário, o sistema deve checar se a clínica possui algum módulo, caso positivo, 
		o sistema deve abortar a ação e informar o usuário que a clínica deve estar sem módulos para que possa ser removida.
		
	REGRAS DE NEGÓCIO
		1. Caso não exista nenhuma clínica cadastrada, deverá ser exibida uma mensagem informando que não existem clínicas cadastradas.
		2. Uma clínica só pode ser removida caso não contenha nenhum módulo.
		3. O sistema deve garantir que nenhuma ação seja realizada sem confirmação do usuário.
		4. O sistema deve garantir que nenhuma clínica compartilhe do mesmo nome.
		5. Caso qualquer ação falhe, o usuário deve ser informado sobre o motivo.
	
	(WEB + MOBILE)


HU014 - MANTER MÓDULOS - 3 pontos
	SENDO Docente
	QUERO Manter as informações de módulos
	PARA Ter controle dos módulos cadastrados em cada clínica
	
	CRITÉRIOS DE ACEITE
		1. Ao selecionar uma clínica deve ser exibida uma relação de todos os módulos cadastrados nela.
		2. Caso não existam módulos cadastradas, o sistema deve exibir uma mensagem informando que não existem módulos cadastrados para esta clínica.
		3. Deve ser possível selecionar um módulo específico, exibindo seus equipos.
		4. Se houver algum módulo cadastrado, o sistema deve automaticamente selecionar o primeiro módulo, exibindo seus equipos.
		5. Deve ser possível pressionar um botão para editar os módulos. Ao pressionar este botão o sistema deverá exibir uma interface contendo os módulos em formato de lista, 
		cada item da lista deverá conter o número do módulo e um botão de ação para remover o módulo. 
		Esta interface também deve conter um botão para adicionar um módulo.
		6. O sistema deve garantir que nenhuma ação seja realizada sem confirmação através de pop-up do usuário.
		9. Ao remover um módulo, após a confirmação efetiva do usuário, o sistema deve checar se o módulo possui algum equipo, caso positivo, 
		o sistema deve abortar a ação e informar o usuário que o módulo deve estar sem equipos para que possa ser removido.
		
	REGRAS DE NEGÓCIO
		1. Caso não exista nenhum módulo cadastrado, deverá ser exibida uma mensagem informando que não existem módulos cadastrados.
		2. Um módulo só pode ser removido caso não contenha nenhum equipo.
		3. O sistema deve garantir que nenhuma ação seja realizada sem confirmação do usuário.
		4. Caso qualquer ação falhe, o usuário deve ser informado sobre o motivo.
	
	(WEB + MOBILE)


HU015 - MANTER EQUIPOS - 6 pontos
	SENDO Docente
	QUERO Manter as informações de equipos
	PARA Ter controle dos equipos cadastrados em cada módulo de cada clínica
	
	CRITÉRIOS DE ACEITE
		1. Ao selecionar um módulo de uma clínica deve ser exibida uma relação de todos os equipos cadastrados nele.
		2. Caso não existam equipos cadastradas, o sistema deve exibir uma mensagem informando que não existem equipos cadastrados para este módulo.
		3. Caso algum equipo esteja em manutenção (inativo), ele deverá ser exibido em cinza. 
		4. Caso algum equipo esteja ocupado no momento em que o usuário acessou a relação de equipos, ele deverá ser exibido em vermelho.
		5. Caso contrário o equipo deverá ser exibido em verde, indicando que está disponível.
		6. Deve ser possível selecionar um equipo específico, exibindo uma lista contendo seus agendamentos e um formulário para realizar o agendamento do equipo, 
		bem como um botão para marcar o equipo como inativo, para manutenção.
		7. Caso algum equipo esteja selecionado, ele deverá ser exibido com uma coloração levemente diferente da original para indicar que está selecionado.
		8. Deve ser possível pressionar um botão para editar os equipos. Ao pressionar este botão o sistema deverá exibir uma interface contendo os equipos em formato de lista, 
		cada item da lista deverá conter o número do equipo e um botão de ação para remover o equipo. 
		Esta interface também deve conter um botão para adicionar um equipo.
		9. O sistema deve garantir que nenhuma ação seja realizada sem confirmação através de pop-up do usuário.
		10. Ao marcar um equipo para manutenção, caso o equipo contenha algum agendamento pendente futuramente, 
		o sistema deverá exibir uma mensagem de confirmação informando o usuário que a ação não pode ser desfeita e que os agendamentos futuros pendentes serão cancelados e enviados para a fila novamente.
		11. Ao remover um equipo, após a confirmação efetiva do usuário, o sistema deve checar se o equipo possui algum agendamento marcado para o futuro, caso positivo, 
		o sistema deve abortar a ação e informar o usuário que o equipo deve estar sem agendamentos pendentes para que possa ser removido.
		
	REGRAS DE NEGÓCIO
		1. Caso não exista nenhum módulo cadastrado, deverá ser exibida uma mensagem informando que não existem módulos cadastrados.
		2. Um módulo só pode ser removido caso não contenha nenhum equipo.
		3. O sistema deve garantir que nenhuma ação seja realizada sem confirmação do usuário.
		4. Caso qualquer ação falhe, o usuário deve ser informado sobre o motivo.
		5. Caso o usuário efetivamente inative (marque para manutenção) algum equipo que contém agendamentos pendentes futuramente, o sistema deve cancelar estes agendamentos, enviando-os novamente para a fila.
	
	(WEB + MOBILE)


HU016 - VISUALIZAR DISCIPLINAS - 4 pontos
	SENDO Docente 
	QUERO Visualizar informações sobre as disciplinas em que faço parte
	PARA Analisar as informações das disciplinas em que faço parte
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibida uma relação de todas as disciplinas que o usuário faz parte.
		2. Caso não existam disciplinas atreladas ao usuário, o sistema deve exibir uma mensagem informando que não existem disciplinas atreladas ao usuário.
		3. Cada item da lista deverá ser composto pelo código e nome da disciplina, bem com o nome dos responsáveis pela disciplina, 
		além de um botão de ação para ver mais informações sobre a disciplina. Ao pressionar este botão o sistema deve exibir uma interface contendo uma relação dos procedimentos, 
		docentes e discentes da disciplina, segregados por abas. A aba de procedimentos deve ser aberta por padrão ao pressionar o botão.
		4. Se o docente for responsável pela disciplina em questão, estarão disponíveis ações para atualização de informações da disciplina, vide HU017, HU018, HU019.
		
	REGRAS DE NEGÓCIO
		1. Caso não exista nenhuma disciplina atrelada ao usuário, deverá ser exibida uma mensagem informando que não existem disciplinas atreladas ao usuário.
	
	(WEB + MOBILE)


HU017 - MANTER DOCENTES - 5 pontos
	SENDO Responsável pela disciplina
	QUERO Manter as informações de docentes em uma disciplina
	PARA Ter controle dos docentes cadastrados nas disciplinas em que sou responsável
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibida uma relação de todos os docentes cadastrados em uma disciplina.
		2. Caso não existam docentes cadastrados na disciplina, o sistema deve exibir uma mensagem informando que não existem docentes cadastrados para esta disciplina.
		3. Cada item da lista deverá ser composto pelo nome, e-mail, telefone, tipo do docente na disciplina (se é responsável pela disciplina ou docente), além de status (ativo ou inativo), 
		além de dois botões de ação, um para definir o docente como responsável pela disciplina e outro para inativar/ativar o docente da disciplina.
		4. Também deve ser exibido um botão para adicionar um docente à disciplina, ao pressionar este botão 
		é solicitada a seleção de um dos docentes cadastrados no sistema, e que não estejam cadastrados na disciplina.
		5. O sistema deve garantir que nenhuma ação seja realizada sem confirmação através de pop-up do usuário.
		
	REGRAS DE NEGÓCIO
		1. Caso não exista nenhum docente cadastrado, deverá ser exibida uma mensagem informando que não existem docentes cadastrados para esta disciplina.
		2. O sistema deve garantir que nenhuma ação seja realizada sem confirmação do usuário.
		3. Caso qualquer ação falhe, o usuário deve ser informado sobre o motivo.
	
	(WEB + MOBILE)


HU018 - MANTER DISCENTES - 3 pontos
	SENDO Responsável pela disciplina
	QUERO Manter as informações de discentes em uma disciplina
	PARA Ter controle dos discentes cadastrados nas disciplinas em que sou responsável
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibida uma relação de todos os discentes cadastrados em uma disciplina.
		2. Caso não existam discentes cadastrados na disciplina, o sistema deve exibir uma mensagem informando que não existem discentes cadastrados para esta disciplina.
		3. Cada item da lista deverá ser composto pelo GRR, nome, e-mail e telefone do discente, bem como o status (ativo ou inativo), além de um botão de ação para inativar/ativar o discente da disciplina.
		4. Também deve ser exibido um botão para adicionar um discente à disciplina, ao pressionar este botão 
		é solicitada a seleção de um dos discentes cadastrados no sistema, e que não estejam cadastrados na disciplina.
		5. O sistema deve garantir que nenhuma ação seja realizada sem confirmação através de pop-up do usuário.
		
	REGRAS DE NEGÓCIO
		1. Caso não exista nenhum discente cadastrado, deverá ser exibida uma mensagem informando que não existem discentes cadastrados para esta disciplina.
		2. O sistema deve garantir que nenhuma ação seja realizada sem confirmação do usuário.
		3. Caso qualquer ação falhe, o usuário deve ser informado sobre o motivo.
	
	(WEB + MOBILE)
	
	
HU019 - MANTER PROCEDIMENTOS - 4 pontos
	SENDO Responsável pela disciplina
	QUERO Manter os procedimentos atrelados a uma disciplina
	PARA Ter controle dos procedimentos cadastrados nas disciplinas em que sou responsável
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibida uma relação de todos os procedimentos cadastrados em uma disciplina.
		2. Caso não existam procedimentos cadastrados na disciplina, o sistema deve exibir uma mensagem informando que não existem procedimentos cadastrados para esta disciplina.
		3. Cada item da lista deverá ser composto pelo código e pelo nome do procedimento, bem como o status (ativo ou inativo), além de um botão de ação para inativar/ativar o procedimento na disciplina.
		4. Também deve ser exibido um botão para adicionar um procedimento à disciplina, ao pressionar este botão 
		é solicitada a inserção de um procedimento, o componente responsável por essa inserção deverá auto-complementar o texto do usuário com procedimentos já existentes,
		caso o procedimento indicado pelo usuário já exista (em outra disciplina), o procedimento em questão deve ser atrelado à disciplina em questão, 
		caso o usuário insira um procedimento já presente na disciplina, se ele estiver inativo, o sistema deverá ativá-lo novamente, 
		e o usuário deverá ser informado, caso esteja ativo, nada deverá ser feito pelo sistema, a não ser informar o erro ao usuário.
		5. O sistema deve garantir que nenhuma ação seja realizada sem confirmação através de pop-up do usuário.
		
	REGRAS DE NEGÓCIO
		1. Caso não exista nenhum procedimento cadastrado, deverá ser exibida uma mensagem informando que não existem procedimentos cadastrados para esta disciplina.
		2. O sistema deve garantir que nenhuma ação seja realizada sem confirmação do usuário.
		3. Caso qualquer ação falhe, o usuário deve ser informado sobre o motivo.
	
	(WEB + MOBILE)


HU020 - INFORMAR DISPONIBILIDADE PARA ATENDIMENTO - 6 pontos
	SENDO Paciente
	QUERO Informar minha disponibilidade para atendimento 
	PARA Ser considerado para agendamentos
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibido um calendário semanal, com os horários de cada dia, de segunda à sexta, das 8h às 18h.
		2. Deve ser possível ao usuário selecionar os dias e horários que tem disponibilidade para ser atendido.
		3. Após o preenchimento dos horários, deve-se permitir que o usuário confirme ou cancele a ação.
		4. Caso o usuário confirme a ação, a informação dos horários disponíveis para este paciente deverá ser salva pelo sistema.
		5. Caso o usuário já tenha preenchido o calendário, deverá haver uma indicação visual de quais horários e dias estão sendo considerados.
		6. O sistema deve garantir que nenhuma ação seja realizada sem confirmação através de pop-up do usuário.
		
	REGRAS DE NEGÓCIO
		1. O sistema deve garantir que nenhuma ação seja realizada sem confirmação do usuário.
		2. Caso qualquer ação falhe, o usuário deve ser informado sobre o motivo.
	
	(WEB + MOBILE)


HU021 - AGENDAR CONSULTA - 8 pontos
	SENDO Docente
	QUERO Agendar uma consulta
	PARA Realizar um atendimento odontológico
	
	CRITÉRIOS DE ACEITE
		1. Deve ser possível agendar uma consulta, selecionando um equipo e preenchendo um formulário.
		2. Ao selecionar um equipo, o formulário deverá estar presente na aba "Agendar Equipo".
		3. O formulário deverá solicitar a data e hora do agendamento, bem como a duração estimada. 
		4. O formulário deverá solicitar a seleção de uma disciplina dentre as disciplinas cadastradas, 
		a seleção da disciplina possibilita a seleção de um procedimento, um discente e um docente, de acordo com as informações cadastradas para a disciplina. 
		5. Por último, com o procedimento, a data, hora e duração definidos, deve ser possível selecionar um paciente, 
		de acordo com a disponibilidade de horário informada pelo mesmo e pelos procedimentos necessários para seu tratamento, definidos na triagem. 
		6. Após preencher todas as informações adequadamente, deve ser possível confirmar o agendamento, através do clique de um botão, nesse momento o sistema deve exibir uma tela de confirmação da ação, 
		caso o usuário confirme a ação, o agendamento deverá ser registrado, e o paciente deve ser convocado pelo sistema.
	
	REGRAS DE NEGÓCIO
		1. O sistema deve garantir que nenhuma ação seja realizada sem confirmação do usuário.
		2. Caso qualquer ação falhe, o usuário deve ser informado sobre o motivo.
		3. Não deve ser permitido marcar uma mesma consulta para um equipo no mesmo espaço de tempo de outro agendamento.
	
	(WEB + MOBILE)


HU022 - VISUALIZAR AGENDAMENTOS - 5 pontos
	SENDO Docente
	QUERO Visualizar todos os agendamentos do sistema 
	PARA Analisar o fluxo de agendamentos do sistema
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibida uma relação de todos os agendamentos do sistema.
		2. Caso não existam agendamentos, o sistema deve exibir uma mensagem informando que não existem agendamentos registrados.
		3. Cada item da lista deverá ser composto pelo ID, data, espaço de tempo estimado, código e nome da disciplina, nome do procedimento, nome do discente, nome do docente, nome do paciente, 
		descrição do equipo (contendo coordenadas Clínica-Módulo-Equipo) e status do agendamento.
		4. Deve ser possível ordenar por cada coluna da lista, de forma crescente ou decrescente.
		5. Deve ser possível realizar filtros parciais de texto para cada coluna.
		6. Deve ser possível filtrar por status.
		
	REGRAS DE NEGÓCIO
		1. Caso não exista nenhum agendamento registrado, deverá ser exibida uma mensagem informando que não existem agendamentos registrados.
	
	(WEB + MOBILE)
	

HU023 - VISUALIZAR AGENDAMENTOS FUTUROS DE EQUIPO - 3 pontos
	SENDO Docente
	QUERO Visualizar os agendamentos futuros de determinado equipo
	PARA Verificar a disponibilidade de um equipo
	
	CRITÉRIOS DE ACEITE
		1. Ao selecionar um equipo, deve ser exibida uma relação de todos os agendamentos futuros do mesmo, na aba "Listar Agendamentos".
		2. Caso não existam agendamentos, o sistema deve exibir uma mensagem informando que não existem agendamentos registrados para o equipo.
		3. Cada item da lista deverá ser composto pelo ID, data, espaço de tempo estimado, código e nome da disciplina, nome do procedimento, nome do discente, nome do docente e nome do paciente.
		
	REGRAS DE NEGÓCIO
		1. Caso não exista nenhum agendamento futuro registrado, deverá ser exibida uma mensagem informando que não existem agendamentos futuros registrados para o equipo.
	
	(WEB + MOBILE)


HU024 - MANTER AGENDAMENTOS - 5 pontos
	SENDO Paciente
	QUERO Manter meus agendamentos
	PARA Ter controle dos agendamentos realizados e futuros
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibida uma relação de todos os agendamentos registrados para o usuário.
		2. Caso não existam agendamentos registrados para o usuário, o sistema deve exibir uma mensagem informando que não existem agendamentos registrados para o usuário.
		3. Cada item da lista deverá ser composto pela data, espaço de tempo estimado, nome do procedimento, nome do discente, nome do docente, 
		descrição do equipo (contendo coordenadas Clínica-Módulo-Equipo) e status do agendamento, além de um botão de ação para cancelar o agendamento, caso esteja pendente.
		4. Ao cancelar o agendamento, o sistema deve solicitar uma confirmação através de pop-up.
		5. O sistema deverá liberar os recursos caso haja cancelamento de um agendamento por parte do paciente.
		
	REGRAS DE NEGÓCIO
		1. Caso não exista nenhum agendamento registrado para o usuário, deverá ser exibida uma mensagem informando que não existem agendamentos registrados para o usuário.
		2. Caso qualquer ação falhe, o usuário deve ser informado sobre o motivo.
		3. O usuário só pode cancelar um agendamento que está pendente.
		4. O sistema deve garantir que nenhuma ação seja realizada sem confirmação do usuário.
		
	(WEB + MOBILE)


HU025 - MANTER AGENDAMENTOS - 3 pontos
	SENDO Funcionário da secretaria
	QUERO Manter os agendamentos do sistema
	PARA Ter controle dos agendamentos realizados e futuros
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibida uma relação de todos os agendamentos registrados no sistema.
		2. Caso não existam agendamentos registrados no sistema, o sistema deve exibir uma mensagem informando que não existem agendamentos registrados no sistema.
		3. Cada item da lista deverá ser composto pelo ID, data, espaço de tempo estimado, código e nome da disciplina, nome do procedimento, nome do discente, nome do docente, nome do paciente, 
		descrição do equipo (contendo coordenadas Clínica-Módulo-Equipo) e status do agendamento, além de um botão de ação para convocar o paciente para atendimento, caso esteja pendente.
		4. A convocação deve ser feita através do clique do botão, nesse momento o sistema deve exibir uma interface solicitando uma mensagem à ser enviada ao paciente no momento da convocação, a mensagem deve ser opcional.
		
	REGRAS DE NEGÓCIO
		1. Caso não exista nenhum agendamento registrado no sistema, deverá ser exibida uma mensagem informando que não existem agendamentos registrados no sistema.
		2. O usuário só pode convocar um agendamento que está pendente.
		
	(WEB + MOBILE)


HU027 - REALIZAR ATENDIMENTO - 15 pontos
	SENDO Discente
	QUERO Realizar um atendimento 
	PARA Trabalhar no tratamento do paciente
	
	CRITÉRIOS DE ACEITE
		1. Deve ser possível realizar o atendimento de um paciente, mediante agendamento prévio, através do preenchimento de formulários.
		2. O usuário deve conseguir retornar e cancelar a realização do atendimento a qualquer momento do fluxo. Caso isso aconteça, o status do atendimento deverá ser alterado novamente para "Pendente".
		3. O sistema deve garantir que o paciente é quem diz ser, e que está presente pessoalmente na clínica odontológica juntamente com o discente, 
		portanto deve ser exibida uma interface solicitando ao usuário o CPF do paciente, que deve ser solicitado ao mesmo pelo discente.
		4. Após esta confirmação, o sistema deve atualizar o status do atendimento para "Em andamento" e levar o usuário a uma página contendo um formulário a ser preenchido. 
		Este formulário deverá conter informações relevantes para o procedimento sendo realizado no momento.
		5. O usuário deverá solicitar as informações necessárias ao paciente, realizando o preenchimento de um formulário. 
		6. Os campos do formulário devem possuir máscara e validação, informando quando algum campo estiver preenchido incorretamente.
		7. O sistema não deve permitir que o usuário envie as informações caso algum campo esteja preenchido incorretamente.
		8. O sistema deve verificar as informações fornecidas pelo usuário e caso exista alguma inconsistência, a solicitação não deve ser concretizada, e o usuário deve ser informado. 
		10. Com o preenchimento adequado do formulário de perguntas ao paciente, o sistema deve redirecionar o usuário para uma interface contendo um segundo formulário, 
		este formulário deve solicitar ao usuário informações referentes aos procedimentos realizados no atendimento, 
		por exemplo informações obtidas através de análise odontológica física no paciente, e demais observações e detalhes da consulta.
		11. Este formulário também deve conter máscaras, validações e feedback ao usuário. Também deve-se ter garantia da integridade dos dados.
		12. Deve ser possível para o usuário inserir anexos referentes à imagens, exames, entre outros itens.
		13. Deve ser possível para o usuário inserir informe de pagamento para procedimentos específicos, anexando comprovantes quando aplicável.
		14. Com o preenchimento adequado deste formulário, o usuário pode pressionar um botão de finalizar atendimento, nesse momento
		deve ser solicitado o preenchimento de um campo de observações, onde o usuário deve registrar observações relevantes sobre o atendimento.
		Ao finalizar o preenchimento deste formulário, o usuário poderá finalizar o atendimento de fato, pressionando um botão de finalizar atendimento. O sistema deverá exibir uma interface de confirmação, 
		e somente se o usuário realizar a confirmação a ação será concretizada, e o atendimento será finalizado.
		15. Como último passo, o usuário deve dar continuidade ao tratamento, informando se será realizado um reagendamento para dar continuidade ao tratamento, 
		ou se é necessária uma retriagem para revisar as necessidades do paciente, ou se o tratamento já foi concluído e pode ser finalizado.
		
	REGRAS DE NEGÓCIO
		1. Deve ser solicitado o número do CPF do paciente para garantir que ele é quem diz ser, e que está presente pessoalmente em consulta com o discente.
		2. O usuário só pode realizar um atendimento que está pendente.
		3. Todas as informações fornecidas em todos os formulários devem ser validadas para garantir a integridade dos dados, sempre que possível informando o usuário.
		4. O usuário deve conseguir retornar e cancelar a realização do atendimento a qualquer momento do fluxo.
		5. Deve-se solicitar confirmação para todas as ações.
		6. Deve-se dar continuidade ao tratamento do paciente de alguma forma.

	(WEB + MOBILE)


HU028 - VISUALIZAR PRONTUÁRIOS - 8 pontos
	SENDO Docente
	QUERO Visualizar o prontuário dos pacientes 
	PARA Analisar o progresso dos tratamentos
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibida uma relação de todo o prontuário do paciente, incluindo suas informações pessoais, médicas e odontológicas genéricas, 
		bem como todos os formulários referentes aos atendimentos realizados.
		2. Como ponto de entrada o sistema deve exibir uma interface com as informações pessoais, médicas e odontológicas do paciente.
		3. Deverão ser exibidas abas para cada um dos formulários preenchidos pelo paciente durante seus atendimentos.
		4. Ao selecionar uma aba, deverão ser mostradas as informações referentes ao preenchimento dos formulários realizado em cada atendimento. 
		Deve ser possível efetuar o download de anexos presentes nesses formulários.
	
	(WEB + MOBILE)


HU029 - VISUALIZAR INFORMAÇÕES PRÉ-ATENDIMENTO - 5 pontos
	SENDO Discente
	QUERO Visualizar informações referentes ao atendimento a ser realizado  
	PARA Me preparar para o atendimento
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibida uma relação de informações do paciente, incluindo o número do prontuário, nome do paciente, e-mail, além de informações referentes a triagem, 
		e informações de atendimentos prévios do mesmo tratamento, caso aplicável.
		2. O sistema deve assegurar que essas informações só estejam disponíveis para este discente durante o período de 45 minutos antes do atendimento em questão.
		3. Caso seja o primeiro atendimento de um tratamento, deve ser disponibilizado para o usuário acesso ao formulário preenchido da triagem do paciente, bem como demais informações pessoais, médicas e odontológicas.
		4. Caso não seja o primeiro atendimento de um tratamento, além do mencionado acima, deve ser disponibilizado acesso aos formulários preenchidos em atendimentos prévios do 
		
	REGRAS DE NEGÓCIO
		1. O acesso a essas informações deverá ser restrito exclusivamente ao discente em questão e somente para um atendimento que será realizado em um momento próximo.
		2. O sistema deve assegurar que essas informações só estejam disponíveis para este discente durante o período de 45 minutos antes do atendimento.
	
	(WEB + MOBILE)


HU030 - VISUALIZAR AGENDAMENTOS - 4 pontos
	SENDO Discente
	QUERO Visualizar informações referentes aos agendamentos que participo
	PARA Analisar meus agendamentos passados e futuros
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibida uma relação de todos os agendamentos em que o usuário faz parte.
		2. Caso não existam agendamentos, o sistema deve exibir uma mensagem informando que não existem agendamentos.
		3. Cada item da lista deverá ser composto pelo ID, data, espaço de tempo estimado, código e nome da disciplina, nome do procedimento, nome do discente, nome do docente, nome do paciente, 
		descrição do equipo (contendo coordenadas Clínica-Módulo-Equipo) e status do agendamento.
		4. Deve ser possível ordenar por cada coluna da lista, de forma crescente ou decrescente.
		5. Deve ser possível realizar filtros parciais de texto para cada coluna. 
		6. Deve ser possível filtrar a lista pelo status do agendamento.
		
	REGRAS DE NEGÓCIO
		1. Caso não exista nenhum agendamento, deverá ser exibida uma mensagem informando que não existem agendamentos.
	
	(WEB + MOBILE)
	
	
HU031 - VISUALIZAR ATENDIMENTOS - 4 pontos
	SENDO Discente
	QUERO Visualizar informações referentes aos atendimentos que já realizei  
	PARA Analisar meu progresso
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibida uma relação de todos os atendimentos que o usuário realizou.
		2. Caso não existam atendimentos, o sistema deve exibir uma mensagem informando que não existem atendimentos.
		3. Cada item da lista deverá ser composto pela data, espaço de tempo utilizado, código e nome da disciplina, nome do procedimento, nome do discente, nome do docente, nome do paciente, 
		descrição do equipo (contendo coordenadas Clínica-Módulo-Equipo) e status do atendimento, além de um botão de ação para realizar atendimento, caso esteja com status pendente.
		4. Deve ser possível ordenar por cada coluna da lista, de forma crescente ou decrescente.
		5. Deve ser possível realizar filtros parciais de texto para cada coluna. 
		6. Deve ser possível filtrar a lista pelo status do atendimento.
		7. Deve ser possível filtrar a lista por pacientes com atendimento pendente.
		
	REGRAS DE NEGÓCIO
		1. Caso não exista nenhum atendimento, deverá ser exibida uma mensagem informando que não existem atendimentos.
		2. O usuário só pode realizar um atendimento que está pendente.
	
	(WEB + MOBILE)


HU032 - VISUALIZAR ATENDIMENTOS - 3 pontos
	(todos + possibilitar filtros por status, ordenação, busca parcial, etc.)
	SENDO Docente
	QUERO Visualizar informações referentes aos atendimentos já realizados
	PARA Avaliar o progresso acadêmico dos discentes e andamento do tratamento dos pacientes
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibida uma relação de todos os atendimentos registrados no sistema.
		2. Caso não existam atendimentos, o sistema deve exibir uma mensagem informando que não existem atendimentos.
		3. Cada item da lista deverá ser composto pela data, espaço de tempo utilizado, código e nome da disciplina, nome do procedimento, nome do discente, nome do docente, nome do paciente, 
		descrição do equipo (contendo coordenadas Clínica-Módulo-Equipo) e status do atendimento.
		4. Deve ser possível ordenar por cada coluna da lista, de forma crescente ou decrescente.
		5. Deve ser possível realizar filtros parciais de texto para cada coluna. 
		6. Deve ser possível filtrar a lista pelo status do atendimento.
		7. Deve ser possível filtrar a lista por pacientes com atendimento pendente.
		
	REGRAS DE NEGÓCIO
		1. Caso não exista nenhum atendimento, deverá ser exibida uma mensagem informando que não existem atendimentos.
	
	(WEB + MOBILE)


HU033 - VISUALIZAR INFORMAÇÕES DO TRATAMENTO - 4 pontos
	SENDO Paciente
	QUERO Visualizar informações referentes aos meus tratamentos
	PARA Acompanhar o andamento dos meus tratamentos
	
	CRITÉRIOS DE ACEITE
		1. Deve ser exibida uma relação de todos os atendimentos e agendamentos relacionados ao tratamento do paciente.
		3. Cada item da lista deverá ser composto pelo tipo (triagem, agendamento, atendimento), data, espaço de tempo utilizado, nome do procedimento, nome do discente, nome do docente, nome do paciente, 
		descrição do equipo (contendo coordenadas Clínica-Módulo-Equipo) e status.
		4. Deve ser possível ordenar por cada coluna da lista, de forma crescente ou decrescente.
		5. Deve ser possível realizar filtros parciais de texto para cada coluna. 
		6. Deve ser possível filtrar a lista pelo status do atendimento.
		7. Deve ser possível filtrar a lista pelo tipo do item.
	
	(WEB + MOBILE)