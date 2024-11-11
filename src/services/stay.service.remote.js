import { httpService } from "./http.service";

export const stayService = {
  query,
  getById,
  // save,
  // remove,
  // getEmptyStay,
  // addStayMsg
}

function getById(stayId) {
  return httpService.get(`stay/${stayId}`)
}

async function query(filterBy = {}) {
  console.log('filterBy: ', filterBy)
  return httpService.get(`stay`, filterBy)
}


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
