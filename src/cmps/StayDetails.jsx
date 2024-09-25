import { useParams } from "react-router-dom";
import { placeList } from "../../information_and_starters/stay";
import { useNavigate } from "react-router-dom";

export function StayDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const stay = placeList.find((place) => place._id === id);
  console.log("StayDetails");
  console.log("stay: ", stay);

  return (
    <div>
      <div>StayDetails</div>
      <div
        onClick={() => navigate("/air-bnb-full-stuck-project")}
        style={{ cursor: "pointer", backgroundColor: "lightblue" }}
      >
        Back
      </div>
    </div>
  );
}
