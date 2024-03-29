import Button from "../Button/Button";
import FavoriteIcon from "../../images/like.svg?react";
import CheckIcon from "../../images/check.svg?react";

function Actions() {
	return (
		<>
			<Button mr={{ base: "0", lg: "10px" }}>Cart</Button>
			<Button mr={{ base: "0", lg: "25px" }} px={{ base: "30px", lg: "0" }} icon={<FavoriteIcon width="20px" height="20px" />}>
				Favorite
			</Button>
			<Button mr={{ base: "0", lg: "10px" }}>English</Button>
			<Button mr={{ base: "0", lg: "25px" }} px={{ base: "30px", lg: "0" }} icon={<CheckIcon width="20px" height="20px" />}>
				Check
			</Button>
		</>
	);
}

export default Actions;
