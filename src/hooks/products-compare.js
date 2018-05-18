/* eslint-disable no-console */

function compare(oldObj, newObj) {
  const attribs = ['name', 'code', 'barCode', 'groupCd', 'ncm', 'pis', 'cofins', 'cst', 'cest', 'isEnabled'];
  let changes = [];
  attribs.forEach(attrib => {
    if (oldObj[attrib] != newObj[attrib]) {
      const descr = `${attrib.toUpperCase()}: '${oldObj[attrib]}' > '${newObj[attrib]}'`;
      changes.push(descr);
    }
  });
  return changes.join('\n') || undefined;
}

async function addEvent(context) {
  const appItem = context.data;
  const dbItem = await context.service.get(appItem.id);
  const changes = compare(dbItem, appItem);
  if (changes) {
    const event = { productId: dbItem.id, importationId: appItem.importationId, description: changes };
    context.app.services.events.create(event);
  }
}

module.exports = function (options = {}) {
  return async context => {
    addEvent(context);
    return context;
  };
};



