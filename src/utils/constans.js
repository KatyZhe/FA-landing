const dataCeckbox = [
  { name: 'Educatio/College Funding', checked: false, id: 1 },
  { name: 'tate Planning', checked: false, id: 2 },
  { name: 'Retirement Planning', checked: false, id: 3 },
  { name: 'Portfolio/Asset Management', checked: false, id: 4 },
  { name: 'Tax Planning', checked: false, id: 5 },
  { name: 'Cash Flow Expense Planning', checked: false, id: 6 },
  { name: 'Insurance and Risk Management', checked: false, id: 7 },
  { name: 'Debt Reduction and Management', checked: false, id: 8 },
  { name: 'Charitable Giving', checked: false, id: 9 },
];

const handleMessage = (values, checkbox) => {
  return `<b>Заявка с сайта!</b>\n
  <b>Отправитель: </b>\n
  <b>Имя: ${values.name}</b>\n
  <b>Фамилия: ${values.last}</b>\n
  <b>Почта: ${values.email}</b>\n
  <b>Услуги: \n
  ${checkbox}
  </b>\n
  <b>Сообщение: ${values?.message || 'Пользователь ничего не отправил'}</b>\n`;
};

const TOKEN = '5991200871:AAE8CrBqlSmf6s508mIGOJc7_I_YsOPww_8';
const CHAT_ID = '-1001848895377';
const URI_BOT = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export { dataCeckbox, handleMessage, CHAT_ID, URI_BOT };
