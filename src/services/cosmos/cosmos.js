function searcher() {
  const request = require('request');
  const cheerio = require('cheerio');

  const baseUrl = 'https://cosmos.bluesoft.com.br/';
  const ncmMatch = /[0-9]{4}\.[0-9]{2}\.[0-9]{2}/g;

  function optionToJson(barCode, name, url) {
    return {
      barCode: barCode,
      name: name,
      url: url
    };
  }

  function itemToJson(ncm, cest, description, img) {
    return {
      ncm: ncm,
      cest: cest,
      description: description,
      img: (img) ? img : ''
    };
  }

  async function getOptions(term) {
    term = term.replace(' ', '+');
    const url = baseUrl + 'pesquisar?utf8=%E2%9C%93&q=' + term;
    let list = [];
    return new Promise(function (resolve, reject) {
      request({ url: url }, function (error, response, body) {
        if (error) return reject(error);
        const $ = cheerio.load(body);
        $('#tbl-produtos .text-center a').each(getListOptions);
        resolve(list);
        function getListOptions(i, elm) {
          try {
            let title = $(this).children('img').attr('alt').trim().split(' - ');
            let barCode = title[0];
            let name = title[1];
            let href = $(this).attr('href');
            if (barCode)
              list.push(optionToJson(barCode, name, baseUrl + href));
          } catch (error) {
            reject(error);
          }
        }
      });
    });
  }

  async function getItem(term) {
    return new Promise(function (resolve, reject) {
      const url = baseUrl + 'pesquisar?utf8=%E2%9C%93&q=' + term;
      request({ url: url }, function (error, response, body) {
        if (error) return reject(error);
        try {
          const $ = cheerio.load(body);
          let title = $('.ncm-name').text();
          let itemNcm = title.match(ncmMatch);
          let ncm = (itemNcm) ? itemNcm[0] : '';
          let description = title.replace(ncmMatch, '').replace('-', '').trim();
          let cest = $('.cest-name').text().split('-')[0].trim();
          let img = ''; //$('.product-thumbnail').children()[0].attribs['src'];
          let item = itemToJson(ncm, cest, description, img);
          resolve(item);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  async function getItemUrl(url) {
    return new Promise(function (resolve, reject) {
      request({ url: url }, function (error, response, body) {
        if (error) return reject(error);
        try {
          const $ = cheerio.load(body);
          let title = $('.ncm-name').text();
          let itemNcm = title.match(ncmMatch);
          let ncm = (itemNcm) ? itemNcm[0] : '';
          let description = title.replace(ncmMatch, '').replace('-', '').trim();
          let cest = $('.cest-name').text().split('-')[0].trim();
          let img = ''; //$('.product-thumbnail').children()[0].attribs['src'];
          let item = itemToJson(ncm, cest, description, img);
          resolve(item);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  return {
    getOptions: getOptions,
    getItem: getItem,
    getItemUrl: getItemUrl
  };
}

module.exports = searcher;