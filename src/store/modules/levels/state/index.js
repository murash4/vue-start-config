export default {
  /*
  * Массив всех уровней
  * id - номер уровня
  * exchange - величина бонусных баллов при обмене
  * startPoints - количество поинтов в начале уровня
  * name - название уровня
  * bonus - размер бонуса при достижении уровня
  * cashback - величина кешбэка
  * */
  data: [
    {
      id: 1,
      exchange: 0,
      startPoints: 0,
      name: 'Level 1',
      bonus: 0,
      cashback: '5%'
    },
    {
      id: 2,
      exchange: 3,
      startPoints: 50,
      name: 'Level 2',
      bonus: 500,
      cashback: '5%'
    },
    {
      id: 3,
      exchange: 4,
      startPoints: 1000,
      name: 'Level 3',
      bonus: 1000,
      cashback: '6%'
    },
    {
      id: 4,
      exchange: 5,
      startPoints: 5000,
      name: 'Level 4',
      bonus: 2500,
      cashback: '7%'
    },
    {
      id: 5,
      exchange: 5,
      startPoints: 25000,
      name: 'Level 5',
      bonus: 5000,
      cashback: '10%'
    },
    {
      id: 6,
      exchange: 5,
      startPoints: 100000,
      name: 'Level 6',
      bonus: 10000,
      cashback: '15%'
    }
  ]
}
