# Recuperação de senha
**RF**
- O usuário deve poder recuperar sua senha senha informando seu email
- O usuário deve receber um email com instruções de recuperação de senha
- O usuário deve poder resetar sua senha.

**RNF**
- Utilizar Mailtrap em ambiente de desenvolvimento
- Utilizar o Amazon SES para envios em produção
- O envio de emails deve acontecer em segundo plano

**RN**
- O link enviado por email deve expirar em 2 horas.
- O usuário precisa confirmar a nova senha as resetar.


# Atualização do perfil

**RF**
- O usuário deve poder atualizar seu perfil (nome, email e senha)

**RNF**
**RN**
- O usuário não pode alterar seu email para um email ja utilizado por outro usuário
- Para atualizar sua senha, o usuário deve informar a senha antiga
- Para atualizar sua senha, o usuário precisa confirmar a nova senha

# painel de prestadores
**RF**
- O usuário deve poder listar os seus agendamentos de um dia específico;
- O prestador deve receber notificações sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas.

**RNF**
- Os agendamentos devem ser armazenadas em cache;
- As notificações devem ser armazenadas no mongodb;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN**
- Cada agendamento deve durar 1h;
- Os agendamentos devem estar disponíveis das 8 as 18h;
- O usuário não pode agendar em um horário já ocupado;
- o usuário não pode agendar em um horário que já passou;
- O usuário não deve poder agendar serviços consigo mesmo;


# Agendamento de serviços

**RF**
- O usuário deve poder listar os prestadores de serviço cadastrados;
- O usuário deve poder, listar os dias de um mes com horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um agendamento com servidor;

**RNF**
-A listagem dos prestadores deve ser armazenadas em cache;

**RN**
- Cada agendamento deve durar 1h;
- Os agendamentos devem estar disponíveis das 8 as 18h;
- O usuário não pode agendar em um horário já ocupado;
- o usuário não pode agendar em um horário que já passou;
- O usuário não deve poder agendar serviços consigo mesmo;
