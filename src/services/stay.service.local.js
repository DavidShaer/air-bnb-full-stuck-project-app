import { storageService } from "./async-storage.service";
import { utilService } from "./util.service";
import { dummyData } from "../../information_and_starters/stay";
// export function stayService(){


// }

export const stayService = {
  query,
  getById,
  // save,
  // remove,
  // getEmptyStay,
  // addStayMsg
}

function getById(stayId) {
  return storageService.get('stay', stayId)
}

async function query(filterBy = {}) {
  let stays = await storageService.query(STORAGE_KEY)
  if (filterBy.icons) {
    stays = stays.filter(stay => {
      return stay.labels.includes(filterBy.icons);
    });
  }
  return stays
}

const STORAGE_KEY = 'stay'
_createStays()
function _createStays(){
  let stays = utilService.loadFromStorage(STORAGE_KEY)
    if (!stays || !stays.length) {
        stays = dummyData
        utilService.saveToStorage(STORAGE_KEY, stays)
    }
}

const orders = [
  {
    _id: "o1225",
    hostId: "u102",
    buyer: {
      _id: "u101", // the user id
      fullname: "User 1"
      // why we need fullname here?
    },
    totalPrice: 160,
    startDate: "2025/10/15",
    endDate: "2025/10/17",
    guests: {
      adults: 1,
      kids: 2
    },
    stay: {
      _id: "h102",
      name: "House Of Uncle My",
      // why we need name here?
      price: 80.00
    },
    msgs: [],
    status: "pending" // approved, rejected
  }
]

const users = [
  {
    _id: "u101",
    fullname: "User 1",
    imgUrl: "/img/img1.jpg",
    username: "user1",
    password: "secret"
    // what about my Liked stays?
  },
  {
    _id: "u102",
    fullname: "User 2",
    imgUrl: "/img/img2.jpg",
    username: "user2",
    password: "secret",
  }
]



// Homepage: TOP categories: Best Rate / Houses / Kitchen  - show all - link to Explore // how to sort ?? we didn't saw any sorting options
// Renders a <StayList> with <StayPreview> with Link to <StayDetails>   url: /stay/123
// See More => /explore?topRate=true
// See More => /explore?type=House
// See More => /explore?amenities=Kitchen
// Explore page:
// stayService.query({type: 'House'})

// UserDetails
//  basic info
//  visitedStays => orderService.query({userId: 'u101'})
//  myStayOrders => orderService.query({hostId: 'u101'})
//  ownedStays => stayService.query({hostId: 'u103'})

// StayEdit - make it super easy to add Stay for development
// StayList, StayPreview
// Order, confirm Order
// Lastly: StayExplore, Filtering



// Example - figuring up if the user is an owner:
// userService.login()
  //  const userStays = stayService.query({ownerId: loggeinUser._id})
  //  loggeinUser.isOwner = userStays.length > 0
