import { Image } from "@chakra-ui/react";

const FeaturedImageCard = ({ imageUrl }) => {
  return <Image src={imageUrl} width="full" height="429px" />;
};

export default FeaturedImageCard;
