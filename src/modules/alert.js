module.exports = ({ bot, knex, config, commands }) => {
  commands.addInboxThreadCommand(
    "alert",
    "[opt:string]",
    async (msg, args, thread) => {
      if (args.opt && args.opt.startsWith("c")) {
        await thread.setAlert(null);
        await thread.postSystemMessage(`Alerte de nouveau message annulée.`);
      } else {
        await thread.setAlert(msg.author.id);
        await thread.postSystemMessage(
          `Ping ${msg.author.username}#${msg.author.discriminator} quand il y aura une nouvelle réponse.`
        );
      }
    }
  );
};
