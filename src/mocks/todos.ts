// export const dataTodos = [
//   {
//     id: 1,
//     title: 'list 1',
//     cards: [
//       {
//         id: 1,
//         title: 'card1'
//       },
//        {
//         id: 2,
//         title: 'card2'
//       }
//     ]
//   },
//   {
//     id: 2,
//     title: 'list 2',
//     cards: [
//       {
//         id: 3,
//         title: 'card3'
//       },
//        {
//         id: 4,
//         title: 'card4'
//       }
//     ]
//   }
// ]
// loop array find column
// loop array to find source. find index source
// remove index source, add index destination

// loop arry to find source column, destination column
// loop array to find source. find index source
// remove index source, add index destination

// hash map (hash object)
export const dataTodos: any = {
  columns: ['list1', 'list2'],
  list: {
    list1: {
      id: 'list1',
      title: 'list1',
      cards: ['card-1-1']
    },
    list2: {
      id: 'list2',
      title: 'list2',
      cards: ['card-2-1', 'card-2-2', 'card-2-3']
    }
  },
  card: {
    "card-1-1": {
      id: "card-1-1",
      title: 'card-1-1',
    },
    "card-2-1": {
      id: "card-2-1",
      title: 'card-2-1',
    },
    "card-2-2": {
      id: "card-2-2",
      title: 'card-2-2',
    },
    "card-2-3": {
      id: "card-2-3",
      title: 'card-2-3',
    },
  }
};

// dataTodos.lists['list1'].cards.map()
// dataTodos.lists['list1'].cards.findIndex