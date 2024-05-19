import React from "react";
import PersonalityCard from "@/components/component/TypeCard";
import { types } from "@/data/types";

interface ShowPersonalityCardProps {
  typeName: string;
}

const ShowPersonalityCard: React.FC<ShowPersonalityCardProps> = ({
  typeName,
}) => {
  const selectedType = types.find((type) => type.title === typeName);

  if (!selectedType) {
    return <p>Type not found</p>;
  }

  return (
    <PersonalityCard
      title={selectedType.title}
      description={selectedType.description}
      color={selectedType.color}
      tag={selectedType.tag}
      animationData={selectedType.animationData}
      length={false}
    />
  );
};

export default ShowPersonalityCard;
