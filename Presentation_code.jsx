//  front side:
function SearchClickeHandle(searchInfoArr) {
  const where = searchInfoArr[0];
  const checkIn = searchInfoArr[1];
  const checkOut = searchInfoArr[2];
  const who = searchInfoArr[3];
  const { adults, childrens, infants, pets } = who;
  dispatch(
    setFilterBy({
      ...filterBy,
      where,
      checkIn,
      checkOut,
      who,
      adults,
      childrens,
      infants,
      pets,
    })
  );
}

//  מ׳בך את המערך אינפורמציה ממי שמפעיל את ה searcClickHandel ברגע שהמשתמש לוחץ על ה search
//
//
//
//

//  api side:
async function query(filterBy) {
  try {
    const criteria = _buildCriteria(filterBy);
    const sort = _buildSort(filterBy);

    const collection = await dbService.getCollection("stay");

    console.log("criteria: ", criteria);
    var stayCursor = await collection.find(criteria, { sort });

    if (filterBy.pageIdx !== undefined) {
      stayCursor.skip(filterBy.pageIdx * PAGE_SIZE).limit(PAGE_SIZE);
    }

    const stays = stayCursor.toArray();
    return stays;
  } catch (err) {
    logger.error("cannot find stays", err);
    throw err;
  }
}

function _buildCriteria(filterBy = {}) {
  const icon = filterBy.icon || ""; // Default to empty string if undefined
  const where = filterBy.where || "";
  const checkIn = filterBy.checkIn || "";
  const checkOut = filterBy.checkOut || "";
  const adults = filterBy.adults || "";
  const childrens = filterBy.childrens || "";
  const infants = filterBy.infants || "";
  const pets = filterBy.pets || "";

  let criteria = {}; // Define criteria at the top
  if (icon) {
    criteria = {
      labels: { $in: [new RegExp(icon, "i")] }, // Case-insensitive regex
    };
  }
  // Add where criteria
  if (where) {
    criteria["loc.region"] = { $regex: new RegExp(where, "i") }; // Case-insensitive regex for region
  }
  // Add checkIn criteria
  if (checkIn) {
    // criteria['date'] = { $gte: new Date(checkIn), $lt: new Date(checkOut) }
    criteria["date"] = { $gte: checkIn, $lt: checkOut };
  }
  // Add adults criteria
  if (adults != 0) {
    criteria["capacity"] = { $eq: Number(adults) };
  }
  // Add childrens criteria
  if (childrens != 0) {
    criteria["capacity"] = { $eq: Number(childrens) + Number(adults) };
  }
  // Add infants criteria
  if (infants != 0) {
    criteria["capacity"] = { $eq: Number(infants) + Number(adults) };
  }
  // Add pets criteria
  if (pets != 0) {
    criteria["amenities"] = { $elemMatch: { $regex: /pet/i } };
  }
  return criteria;
}
